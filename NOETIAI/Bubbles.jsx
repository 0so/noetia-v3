/* ============================================================
   NOETIAI — MARKET UNIVERSE
   Representación viva del sistema financiero global. Dos vistas:
   · Flujo  — burbujas-activo flotantes (tamaño = peso, color =
              sentimiento, velocidad = volatilidad, hover = ficha)
   · Red    — nodos de clase conectados por correlación (flujo de
              capital y dependencia entre mercados)
   ============================================================ */

function moodHex(mood) { return mood === 'greed' ? '#2ee6a6' : mood === 'fear' ? '#ef4444' : '#8a94a6'; }
function moodWord(mood) { return mood === 'greed' ? 'positivo' : mood === 'fear' ? 'riesgo' : 'neutral'; }

/* peso normalizado para dimensionar (mcap, si no vol, si no precio) */
function weightOf(x) {
  if (x.mcap && x.mcap > 0) return x.mcap;
  if (x.vol && x.vol > 0) return x.vol;
  return Math.abs(x.price || 1) * 1e7;
}

function MarketUniverse({ assets, status }) {
  const [mode, setMode] = React.useState('flow');
  const [cls, setCls] = React.useState('all');
  const classes = ['all', ...Object.keys(CLASS_META)];
  const filtered = cls === 'all' ? assets : assets.filter((x) => x.cls === cls);

  return (
    <div className="universe">
      <div className="universe-bar">
        <div className="uni-classes scroll-x">
          {classes.map((k) => (
            <button key={k} className={'uni-chip' + (cls === k ? ' on' : '')} onClick={() => setCls(k)}
              style={k !== 'all' && cls === k ? { borderColor: CLASS_META[k].color, color: '#fff' } : {}}>
              {k !== 'all' && <i className="uni-dot" style={{ background: CLASS_META[k].color }} />}
              {k === 'all' ? 'Todo' : CLASS_META[k].name}
            </button>
          ))}
        </div>
        <div className="uni-modes">
          <button className={'uni-mode' + (mode === 'flow' ? ' on' : '')} onClick={() => setMode('flow')}><Icon name="Activity" size={13} /> Flujo</button>
          <button className={'uni-mode' + (mode === 'network' ? ' on' : '')} onClick={() => setMode('network')}><Icon name="Network" size={13} /> Red</button>
        </div>
      </div>
      {mode === 'flow'
        ? <BubbleField assets={filtered} />
        : <CorrelationNetwork assets={assets} highlight={cls} />}
    </div>
  );
}

/* ---------------- vista FLUJO: física de burbujas ---------------- */
function BubbleField({ assets }) {
  const wrapRef = React.useRef(null);
  const tipRef = React.useRef(null);
  const stateRef = React.useRef([]);
  const rafRef = React.useRef(0);
  const hoverRef = React.useRef(null);
  const [hover, setHover] = React.useState(null);
  const reduced = React.useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const radii = React.useMemo(() => {
    const ws = assets.map(weightOf);
    const lo = Math.log(Math.min(...ws) || 1), hi = Math.log(Math.max(...ws) || 1) || 1;
    const n = assets.length;
    const scale = n > 16 ? 0.78 : 1;
    return assets.map((x) => {
      const t = (Math.log(weightOf(x)) - lo) / ((hi - lo) || 1);
      return (26 + t * 54) * scale;
    });
  }, [assets]);

  React.useEffect(() => {
    const wrap = wrapRef.current; if (!wrap) return;
    const W = wrap.clientWidth || 900, H = wrap.clientHeight || 440;
    const prev = {}; stateRef.current.forEach((b) => prev[b.id] = b);
    const cols = Math.ceil(Math.sqrt(assets.length));
    stateRef.current = assets.map((x, i) => {
      const r = radii[i], old = prev[x.id];
      const gx = (i % cols + 0.5) / cols, gy = (Math.floor(i / cols) + 0.6) / Math.ceil(assets.length / cols);
      const jx = Math.sin(i * 12.9) * 40, jy = Math.cos(i * 7.7) * 30;
      const speed = 0.16 + Math.min((x.volat || 1) / 5, 1) * 0.5;
      const ang = i * 2.39996;
      return {
        id: x.id, x, r,
        px: old ? old.px : Math.min(Math.max(gx * W + jx, r + 4), W - r - 4),
        py: old ? old.py : Math.min(Math.max(gy * H + jy, r + 4), H - r - 4),
        vx: old ? old.vx : Math.cos(ang) * speed, vy: old ? old.vy : Math.sin(ang) * speed, speed,
      };
    });
    paint(true);
    // eslint-disable-next-line
  }, [assets, radii]);

  function paint() {
    const wrap = wrapRef.current; if (!wrap) return;
    const nodes = wrap.querySelectorAll('.bubble');
    stateRef.current.forEach((b, i) => {
      const n = nodes[i]; if (!n) return;
      n.style.transform = `translate(${(b.px - b.r).toFixed(1)}px, ${(b.py - b.r).toFixed(1)}px)`;
    });
    if (hoverRef.current != null) positionTip();
  }
  function positionTip() {
    const wrap = wrapRef.current, tip = tipRef.current; if (!wrap || !tip) return;
    const b = stateRef.current.find((x) => x.id === hoverRef.current); if (!b) { tip.style.opacity = '0'; return; }
    tip.style.opacity = '1';
    tip.style.transform = `translate(${b.px.toFixed(0)}px, ${(b.py - b.r - 12).toFixed(0)}px) translate(-50%, -100%)`;
  }

  React.useEffect(() => {
    if (reduced.current) { paint(); return; }
    const wrap = wrapRef.current; if (!wrap) return;
    const step = () => {
      const W = wrap.clientWidth || 900, H = wrap.clientHeight || 440;
      const bodies = stateRef.current;
      for (const b of bodies) {
        if (hoverRef.current === b.id) continue;
        b.px += b.vx; b.py += b.vy;
        if (b.px < b.r) { b.px = b.r; b.vx = Math.abs(b.vx); }
        if (b.px > W - b.r) { b.px = W - b.r; b.vx = -Math.abs(b.vx); }
        if (b.py < b.r) { b.py = b.r; b.vy = Math.abs(b.vy); }
        if (b.py > H - b.r) { b.py = H - b.r; b.vy = -Math.abs(b.vy); }
      }
      for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
        const A = bodies[i], C = bodies[j];
        let dx = C.px - A.px, dy = C.py - A.py, d = Math.hypot(dx, dy) || 0.01;
        const min = A.r + C.r + 3;
        if (d < min) {
          const push = (min - d) / 2, ux = dx / d, uy = dy / d;
          if (hoverRef.current !== A.id) { A.px -= ux * push; A.py -= uy * push; }
          if (hoverRef.current !== C.id) { C.px += ux * push; C.py += uy * push; }
        }
      }
      paint();
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [assets]);

  const onEnter = (id) => { hoverRef.current = id; setHover(id); positionTip(); };
  const onLeave = () => { hoverRef.current = null; setHover(null); if (tipRef.current) tipRef.current.style.opacity = '0'; };
  const hv = hover ? assets.find((a) => a.id === hover) : null;

  return (
    <div className="bubbles-field" ref={wrapRef}>
      <div className="bubbles-aurora" aria-hidden="true" />
      {assets.map((x, i) => {
        const r = radii[i], up = (x.ch24 ?? 0) >= 0;
        return (
          <button key={x.id} className={'bubble mood-' + x.mood} aria-label={x.symbol}
            style={{ width: r * 2, height: r * 2, '--bc': moodHex(x.mood) }}
            onMouseEnter={() => onEnter(x.id)} onMouseLeave={onLeave} onFocus={() => onEnter(x.id)} onBlur={onLeave}>
            <span className="bubble-sym" style={{ fontSize: Math.max(10, r * 0.32) }}>{x.symbol}</span>
            {r > 32 && <span className="bubble-ch data" style={{ fontSize: Math.max(8, r * 0.18) }}>{up ? '+' : ''}{(x.ch24 ?? 0).toFixed(1)}%</span>}
          </button>
        );
      })}
      <div className="bubble-tip" ref={tipRef} style={{ opacity: 0 }}>
        {hv && (
          <div className="liquid-glass tip-card">
            <div className="tip-head">
              <span className="tip-sym">{hv.symbol}</span>
              <span className="tip-name muted">{hv.name}</span>
              <span className="tip-dot" style={{ background: moodHex(hv.mood) }} />
            </div>
            <div className="tip-cls field" style={{ color: CLASS_META[hv.cls]?.color }}>{CLASS_META[hv.cls]?.name}{hv.live ? ' · en vivo' : ' · modelado'}</div>
            <div className="tip-price kpi">{hv.yield || hv.level ? (hv.price + (hv.symbol === 'CPI' || hv.yield || hv.symbol === 'FEDFUNDS' || hv.symbol === 'UNRATE' ? '%' : '')) : fmtPrice(hv.price)}</div>
            <div className="tip-grid">
              <span className="field">24H</span><span className={'data ' + ((hv.ch24 ?? 0) >= 0 ? 'up' : 'down')}>{fmtPct(hv.ch24)}</span>
              <span className="field">7D</span><span className={'data ' + ((hv.ch7 ?? 0) >= 0 ? 'up' : 'down')}>{fmtPct(hv.ch7)}</span>
              <span className="field">VOLAT</span><span className="data">{(hv.volat ?? 0).toFixed(1)}%</span>
              <span className="field">ESTADO</span><span className="data" style={{ color: moodHex(hv.mood) }}>{moodWord(hv.mood)}</span>
            </div>
          </div>
        )}
      </div>
      <div className="bubbles-legend">
        <span className="bl"><i style={{ background: 'var(--fear)' }} /> riesgo</span>
        <span className="bl"><i style={{ background: 'var(--neutral)' }} /> neutral</span>
        <span className="bl"><i style={{ background: 'var(--greed)' }} /> positivo</span>
        <span className="bl-sep" />
        <span className="field">tamaño ∝ peso · velocidad ∝ volatilidad</span>
      </div>
    </div>
  );
}

/* ---------------- vista RED: nodos de clase + correlaciones ------ */
function CorrelationNetwork({ assets, highlight }) {
  const agg = classAgg(assets);
  const keys = Object.keys(agg);
  const W = 920, H = 430, cx = W / 2, cy = H / 2;
  const R = Math.min(W, H) * 0.34;
  const pos = {};
  keys.forEach((k, i) => {
    const ang = -Math.PI / 2 + (i / keys.length) * Math.PI * 2;
    pos[k] = [cx + Math.cos(ang) * R, cy + Math.sin(ang) * R];
  });
  const weights = {};
  keys.forEach((k) => { weights[k] = assets.filter((x) => x.cls === k).reduce((s, x) => s + weightOf(x), 0); });
  const wlo = Math.log(Math.min(...Object.values(weights)) || 1), whi = Math.log(Math.max(...Object.values(weights)) || 1) || 1;
  const nodeR = (k) => 22 + ((Math.log(weights[k] || 1) - wlo) / ((whi - wlo) || 1)) * 26;

  return (
    <div className="network-field">
      <svg viewBox={`0 0 ${W} ${H}`} className="network-svg" preserveAspectRatio="xMidYMid meet">
        {CLASS_EDGES.filter((e) => pos[e[0]] && pos[e[1]]).map(([a, b, rho], i) => {
          const [x1, y1] = pos[a], [x2, y2] = pos[b];
          const pos_ = rho >= 0;
          const dim = highlight !== 'all' && a !== highlight && b !== highlight;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={pos_ ? 'rgba(46,230,166,0.5)' : 'rgba(239,68,68,0.45)'}
              strokeWidth={0.6 + Math.abs(rho) * 3.2}
              strokeDasharray={pos_ ? '0' : '4 4'}
              opacity={dim ? 0.08 : 0.5 + Math.abs(rho) * 0.4} />
          );
        })}
        {keys.map((k) => {
          const [x, y] = pos[k], r = nodeR(k), m = agg[k];
          const tone = m.avg24 >= 0.15 ? '#2ee6a6' : m.avg24 <= -0.15 ? '#ef4444' : '#8a94a6';
          const dim = highlight !== 'all' && k !== highlight;
          return (
            <g key={k} opacity={dim ? 0.32 : 1}>
              <circle cx={x} cy={y} r={r} fill={'color-mix(in oklch, ' + CLASS_META[k].color + ' 16%, transparent)'} stroke={CLASS_META[k].color} strokeWidth="1.5" />
              <circle cx={x} cy={y} r={r} fill="none" stroke={tone} strokeWidth="2.5" strokeDasharray={`${Math.abs(m.avg24) * 12} 200`} transform={`rotate(-90 ${x} ${y})`} />
              <text x={x} y={y - 3} textAnchor="middle" className="net-sym">{CLASS_META[k].short}</text>
              <text x={x} y={y + 11} textAnchor="middle" className="net-ch" fill={tone}>{m.avg24 >= 0 ? '+' : ''}{m.avg24.toFixed(1)}%</text>
            </g>
          );
        })}
      </svg>
      <div className="bubbles-legend">
        <span className="bl"><i style={{ background: 'rgba(46,230,166,0.7)' }} /> correlación +</span>
        <span className="bl"><i style={{ background: 'rgba(239,68,68,0.7)' }} /> correlación −</span>
        <span className="bl-sep" />
        <span className="field">grosor ∝ |ρ| · nodo ∝ peso de mercado · arco ∝ retorno 24h</span>
      </div>
    </div>
  );
}

window.MarketUniverse = MarketUniverse;
window.moodHex = moodHex; window.moodWord = moodWord; window.weightOf = weightOf;
