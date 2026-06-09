/* NOETIAI — MARKET INTELLIGENCE (observatorio cognitivo, v3) */
const { useState: useTS } = React;

function WidgetHead({ icon, title, tag, action }) {
  return (
    <div className="widget-head">
      <span className="widget-title"><Icon name={icon} size={14} style={{ color: 'var(--accent)' }} /> {title}</span>
      <span className="widget-right">{tag && <span className="field">{tag}</span>}{action}</span>
    </div>
  );
}

/* ===== THESIS ENGINE V3 — el corazón de NOETIAI ===== */
function ThesisEngine({ data }) {
  const [tab, setTab] = useTS('daily');
  const agg = React.useMemo(() => classAgg(data.assets), [data.assets]);
  const th = React.useMemo(() => buildThesis(data.assets, agg, data.global, data.fng.value), [data.assets, data.global, data.fng]);
  const body = th[tab];
  const tone = th.regimeTone === 'up' ? 'var(--up)' : th.regimeTone === 'down' ? 'var(--down)' : 'var(--lavender)';
  const tabs = [['daily', 'Diario'], ['weekly', 'Semanal'], ['monthly', 'Mensual']];
  const qs = [
    ['Qué ocurre', body.what, 'Activity'],
    ['Por qué ocurre', body.why, 'Compass'],
    ['Qué significa', body.meaning, 'Brain'],
    ['Qué podría pasar', body.next, 'Sparkles'],
  ];
  return (
    <div className="liquid-glass card thesis-card glow-card">
      <div className="thesis-card-head">
        <span className="widget-title"><Icon name="Brain" size={16} style={{ color: 'var(--accent)' }} /> NOETIA Thesis Engine</span>
        <div className="thesis-tabs">
          {tabs.map(([k, l]) => (
            <button key={k} className={'th-tab' + (tab === k ? ' on' : '')} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="thesis-regime">
        <span className="tr-badge" style={{ borderColor: tone, color: tone }}>{th.regime}</span>
        <span className="field">régimen de mercado</span>
        <span className="thesis-conf field">convicción <b className="data" style={{ color: 'var(--accent)' }}>{th.confidence}%</b></span>
        <span className="thesis-conf field">score <b className="data" style={{ color: tone }}>{th.macScore}</b></span>
      </div>
      <div className="thesis-qs">
        {qs.map(([q, txt, ic]) => (
          <div className="tq" key={q}>
            <div className="tq-h"><span className="tq-ic"><Icon name={ic} size={13} style={{ color: 'var(--accent)' }} /></span><span className="tq-q field">{q}</span></div>
            <p className="tq-a">{txt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== LIDERAZGO DE CLASES (sector leadership) ===== */
function ClassLeadership({ data }) {
  const agg = classAgg(data.assets);
  const rows = Object.values(agg).sort((a, b) => b.avg24 - a.avg24);
  const max = Math.max(...rows.map((r) => Math.abs(r.avg24)), 0.5);
  return (
    <div className="liquid-glass card pad widget">
      <WidgetHead icon="Layers" title="Liderazgo por clase" tag="24h · universo" />
      <div className="cls-rows">
        {rows.map((r) => {
          const up = r.avg24 >= 0, w = (Math.abs(r.avg24) / max) * 50;
          return (
            <div className="cls-row" key={r.key}>
              <span className="cls-name"><i style={{ background: r.color }} />{r.name}</span>
              <span className="cls-bar"><span className="cls-mid" />
                <i className={up ? 'pos' : 'neg'} style={{ width: w + '%', [up ? 'left' : 'right']: '50%', background: up ? 'var(--up)' : 'var(--down)' }} />
              </span>
              <span className={'cls-val data ' + (up ? 'up' : 'down')}>{fmtPct(r.avg24)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===== SEÑALES COGNITIVAS (motor de relaciones) ===== */
function CognitiveSignals({ data }) {
  const agg = classAgg(data.assets);
  const signals = detectSignals(data.assets, agg, data.fng.value);
  const kindIcon = { leadership: 'Layers', rotation: 'GitFork', anomaly: 'Crosshair', sentiment: 'Gauge', correlation: 'Network' };
  return (
    <div className="liquid-glass card pad widget feed-w">
      <WidgetHead icon="Cpu" title="Señales cognitivas" tag="motor de relaciones" />
      <div className="insight-scroll scroll-y">
        {signals.map((s, i) => (
          <div className="insight" key={i}>
            <span className={'ins-lvl ins-' + s.level}>{s.level === 'alert' ? '!!' : s.level === 'warn' ? '!' : 'ok'}</span>
            <div className="ins-body">
              <div className="ins-line"><Icon name={kindIcon[s.kind] || 'Sparkles'} size={11} style={{ color: 'var(--accent)', marginRight: 6, verticalAlign: '-1px' }} /><span className="data ins-mod">{s.title}</span></div>
              <div className="ins-msg">{s.detail}</div>
            </div>
            <span className="field ins-t">{s.t.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== Presión de sentimiento ===== */
function SentimentPressure({ fng }) {
  const v = fng.value, prev = fng.prev ?? v, delta = v - prev;
  const col = v < 25 ? 'var(--fear)' : v < 45 ? 'var(--fear-2)' : v < 55 ? 'var(--neutral)' : v < 75 ? 'var(--think)' : 'var(--greed)';
  const segs = 26, filled = Math.round((v / 100) * segs);
  return (
    <div className="liquid-glass card pad widget">
      <WidgetHead icon="Gauge" title="Presión de sentimiento" tag="cripto · alt.me" />
      <div className="sp-main">
        <div className="kpi" style={{ fontSize: 44, lineHeight: 1, color: col }}>{v}</div>
        <div className="sp-side">
          <div className="chip" style={{ borderColor: col, color: col }}>{fng.label}</div>
          <div className="field" style={{ marginTop: 8 }}>{delta === 0 ? 'sin cambio 24h' : <>{delta > 0 ? '▲' : '▼'} {Math.abs(delta)} pts · 24h</>}</div>
        </div>
      </div>
      <div className="sp-bars">
        {Array.from({ length: segs }).map((_, i) => (
          <span key={i} className="sp-seg" style={{ background: i < filled ? col : 'rgba(255,255,255,0.07)', height: 10 + (i / segs) * 20, boxShadow: i === filled - 1 ? `0 0 10px ${col}` : 'none' }} />
        ))}
      </div>
      <div className="sp-scale field"><span>miedo extremo</span><span>codicia extrema</span></div>
    </div>
  );
}

/* ===== Ficha de activo ===== */
function AssetCard({ x }) {
  const up = (x.ch24 ?? 0) >= 0, col = up ? 'var(--up)' : 'var(--down)';
  const isLevel = x.yield || x.level;
  const px = isLevel ? x.price + '%' : fmtPrice(x.price);
  return (
    <div className="liquid-glass card pad asset">
      <div className="asset-top">
        <div className="asset-id">
          <span className="asset-sym">{x.symbol} <span className="asset-cls" style={{ color: CLASS_META[x.cls]?.color }}>{CLASS_META[x.cls]?.short}</span></span>
          <span className="muted asset-name">{x.name}</span>
        </div>
        <span className={'pill ' + (up ? 'pill-up' : 'pill-down')}><Icon name={up ? 'TrendingUp' : 'TrendingDown'} size={12} /> {fmtPct(x.ch24)}</span>
      </div>
      <div className="asset-price kpi">{px}</div>
      <div className="asset-sub field">7D <span className={(x.ch7 ?? 0) >= 0 ? 'up' : 'down'} style={{ marginLeft: 6 }}>{fmtPct(x.ch7)}</span>
        <span style={{ margin: '0 8px', opacity: .3 }}>·</span>{x.live ? 'en vivo' : 'modelado'}</div>
      <div className="asset-spark"><Sparkline data={x.spark} color={col} w={260} h={56} strokeW={1.8} /></div>
    </div>
  );
}

/* ===== Watchlist cross-activo ===== */
function Watchlist({ all }) {
  const def = ['bitcoin', 'ethereum', 'etf:SPY', 'fx:EURUSD', 'commodity:XAU', 'bond:US10Y'];
  const [shown, setShown] = useTS(def.filter((id) => all.some((a) => a.id === id)));
  const [adding, setAdding] = useTS(false);
  const rows = shown.map((id) => all.find((a) => a.id === id)).filter(Boolean);
  const avail = all.filter((a) => !shown.includes(a.id)).slice(0, 24);
  return (
    <div className="liquid-glass card pad widget watch">
      <WidgetHead icon="Compass" title="Watchlist" tag={`${rows.length} · multi-activo`}
        action={<button className="icon-btn" onClick={() => setAdding((a) => !a)} aria-label="Añadir"><Icon name="Plus" size={15} /></button>} />
      {adding && (
        <div className="watch-add scroll-y" style={{ maxHeight: 120 }}>
          {avail.map((a) => (
            <button key={a.id} className="chip" onClick={() => { setShown((s) => [...s, a.id]); setAdding(false); }}>
              <i className="uni-dot" style={{ background: CLASS_META[a.cls]?.color }} /> {a.symbol}
            </button>
          ))}
        </div>
      )}
      <div className="watch-rows">
        {rows.map((x) => {
          const up = (x.ch24 ?? 0) >= 0, isLevel = x.yield || x.level;
          return (
            <div className="watch-row" key={x.id}>
              <span className="watch-sym">{x.symbol}</span>
              <span className="watch-spark"><Sparkline data={x.spark} color={up ? 'var(--up)' : 'var(--down)'} w={66} h={24} fill={false} strokeW={1.4} /></span>
              <span className="watch-price data">{isLevel ? x.price + '%' : fmtPrice(x.price)}</span>
              <span className={'watch-ch data ' + (up ? 'up' : 'down')}>{fmtPct(x.ch24)}</span>
              <button className="watch-rm" onClick={() => setShown((s) => s.filter((y) => y !== x.id))} aria-label="Quitar"><Icon name="X" size={13} /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===== Sección principal ===== */
function Terminal({ data, status, refreshedAt }) {
  const find = (id) => data.assets.find((a) => a.id === id);
  const btc = find('bitcoin') || data.assets[0];
  const spy = find('etf:SPY') || data.assets[1];
  return (
    <section className="section" id="terminal">
      <div className="wrap">
        <div className="sec-head reveal">
          <Eyebrow label="Market Intelligence" tag="núcleo" />
          <h2 className="heading" style={{ marginTop: 16 }}>Un observatorio de la realidad financiera.</h2>
          <p className="lead" style={{ maxWidth: '44rem', marginTop: 14 }}>
            NOETIAI no muestra datos: los interpreta. Percibe el universo global — cripto, acciones,
            ETFs, bonos, divisas, materias primas y macro — y razona sobre sus relaciones hasta una
            comprensión única.
          </p>
        </div>

        {/* Market Universe */}
        <div className="liquid-glass card glass-strong term reveal" style={{ marginTop: 32 }}>
          <div className="term-bar">
            <span className="tl"><i style={{ background: 'var(--aura-traffic-red)' }} /><i style={{ background: 'var(--aura-traffic-amber)' }} /><i style={{ background: 'var(--aura-traffic-green)' }} /></span>
            <span className="mono term-title">noeti://universe/global-market</span>
            <span className="term-meta">
              <span className={'live' + (status === 'cached' ? ' cached' : '')}><span className="pulse" />{status === 'live' ? 'feed en vivo' : status === 'cached' ? 'snapshot' : 'sincronizando'}</span>
              {refreshedAt && <span className="field" style={{ marginLeft: 12 }}>act {refreshedAt.toLocaleTimeString('es-ES')}</span>}
            </span>
          </div>
          <MarketUniverse assets={data.assets} status={status} />
        </div>

        {/* Thesis Engine V3 */}
        <div className="reveal" style={{ marginTop: 'var(--gap)' }}>
          <ThesisEngine data={data} />
        </div>

        {/* Grid cognitivo */}
        <div className="term-grid reveal" style={{ marginTop: 'var(--gap)' }}>
          <AssetCard x={btc} />
          <AssetCard x={spy} />
          <SentimentPressure fng={data.fng} />
          <ClassLeadership data={data} />
          <CognitiveSignals data={data} />
          <Watchlist all={data.assets} />
        </div>

        {status === 'cached' && (
          <p className="field reveal" style={{ marginTop: 14, textAlign: 'center' }}>
            <Icon name="Radio" size={12} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            Feed de red no disponible en esta vista — snapshot. Ábrelo en un navegador para cripto y divisas en vivo.
          </p>
        )}
      </div>
    </section>
  );
}
window.Terminal = Terminal;
