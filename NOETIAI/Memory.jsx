/* NOETIAI — NOETIA MEMORY (histórico) + PRIVATE JOURNAL (v3) */

/* ---- línea histórica de score con cambios de régimen ---- */
function MemoryTimeline({ memory }) {
  const hist = (memory && memory.length ? memory : []).slice(-30);
  if (hist.length < 2) {
    return <div className="liquid-glass card pad widget"><WidgetHead icon="History" title="NOETIA Memory" tag="registrando" /><p className="muted" style={{ fontSize: 14 }}>Acumulando registros del régimen de mercado. Vuelve tras unas actualizaciones.</p></div>;
  }
  const W = 640, H = 150, pad = 8;
  const scores = hist.map((h) => h.score);
  const min = Math.min(...scores) - 6, max = Math.max(...scores) + 6, span = max - min || 1;
  const X = (i) => pad + (i / (hist.length - 1)) * (W - pad * 2);
  const Y = (v) => H - pad - ((v - min) / span) * (H - pad * 2);
  const line = hist.map((h, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(h.score).toFixed(1)).join(' ');
  const area = line + ` L ${X(hist.length - 1)} ${H} L ${X(0)} ${H} Z`;
  // cambios de régimen
  const changes = [];
  for (let i = 1; i < hist.length; i++) if (hist[i].regime !== hist[i - 1].regime) changes.push(i);

  const now = hist[hist.length - 1], past = hist[0];
  const dScore = now.score - past.score, dFng = now.fng - past.fng;

  return (
    <div className="liquid-glass card pad widget glow-card">
      <WidgetHead icon="History" title="NOETIA Memory" tag={`${hist.length} registros`} />
      <div className="mem-compare">
        <div className="mc"><div className="field">score hoy</div><div className="kpi mc-num">{now.score}</div></div>
        <div className="mc"><div className="field">Δ vs inicio</div><div className={'kpi mc-num ' + (dScore >= 0 ? 'up' : 'down')}>{dScore >= 0 ? '+' : ''}{dScore}</div></div>
        <div className="mc"><div className="field">régimen</div><div className="mc-reg">{now.regime}</div></div>
        <div className="mc"><div className="field">Δ sentimiento</div><div className={'kpi mc-num ' + (dFng >= 0 ? 'up' : 'down')}>{dFng >= 0 ? '+' : ''}{dFng}</div></div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mem-chart" preserveAspectRatio="none">
        <defs>
          <linearGradient id="memgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 50, 75].map((g) => <line key={g} x1={pad} y1={Y(g)} x2={W - pad} y2={Y(g)} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />)}
        {changes.map((ci) => <line key={ci} x1={X(ci)} y1={pad} x2={X(ci)} y2={H - pad} stroke="var(--gold)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />)}
        <path d={area} fill="url(#memgrad)" />
        <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
        {changes.map((ci) => <circle key={'c' + ci} cx={X(ci)} cy={Y(hist[ci].score)} r="3" fill="var(--gold)" />)}
        <circle cx={X(hist.length - 1)} cy={Y(now.score)} r="3.5" fill="var(--accent)" />
      </svg>
      <div className="mem-foot field"><span><i style={{ background: 'var(--gold)', width: 8, height: 8, borderRadius: 2, display: 'inline-block', marginRight: 6 }} />cambio de régimen detectado</span><span>memoria local · evoluciona con cada visita</span></div>
    </div>
  );
}

/* ---- journal privado ---- */
function PrivateJournal() {
  const [entries, setEntries] = React.useState(() => readJournal());
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [bodyTxt, setBodyTxt] = React.useState('');

  const persist = (next) => { setEntries(next); writeJournal(next); };
  const add = () => {
    if (!title.trim()) return;
    const e = { id: 'j' + Date.now(), t: Date.now(), title: title.trim(), body: bodyTxt.trim(), regime: '—', outcome: 'pending' };
    persist([e, ...entries]); setTitle(''); setBodyTxt(''); setOpen(false);
  };
  const cycle = (id) => {
    const order = { pending: 'confirmed', confirmed: 'refuted', refuted: 'pending' };
    persist(entries.map((e) => e.id === id ? { ...e, outcome: order[e.outcome] } : e));
  };
  const remove = (id) => persist(entries.filter((e) => e.id !== id));
  const oLabel = { pending: 'En curso', confirmed: 'Confirmada', refuted: 'Refutada' };

  return (
    <div className="liquid-glass card pad widget">
      <WidgetHead icon="BookOpen" title="Private Journal" tag="hipótesis → resultado"
        action={<button className="icon-btn" onClick={() => setOpen((o) => !o)} aria-label="Nueva"><Icon name={open ? 'X' : 'Plus'} size={15} /></button>} />
      {open && (
        <div className="journal-form">
          <input className="jf-input" placeholder="Hipótesis (título)" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className="jf-input jf-area" placeholder="Escenario, condición, tesis personal…" value={bodyTxt} onChange={(e) => setBodyTxt(e.target.value)} />
          <button className="btn btn-accent jf-save" onClick={add}><Icon name="Check" size={14} /> Guardar hipótesis</button>
        </div>
      )}
      <div className="journal-list scroll-y">
        {entries.map((e) => (
          <div className="jentry" key={e.id}>
            <div className="je-top">
              <span className="je-title">{e.title}</span>
              <button className={'je-outcome oc-' + e.outcome} onClick={() => cycle(e.id)} title="Cambiar resultado">{oLabel[e.outcome]}</button>
            </div>
            {e.body && <p className="je-body muted">{e.body}</p>}
            <div className="je-foot field">
              <span>{new Date(e.t).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
              <button className="je-del" onClick={() => remove(e.id)} aria-label="Eliminar"><Icon name="X" size={12} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- sección ---- */
function MemoryModule({ memory }) {
  return (
    <section className="section" id="memory">
      <div className="wrap">
        <div className="sec-head reveal">
          <Eyebrow label="Memoria y razonamiento" tag="núcleo cognitivo" />
          <h2 className="heading" style={{ marginTop: 16 }}>Comprender exige recordar.</h2>
          <p className="lead" style={{ maxWidth: '44rem', marginTop: 14 }}>
            NOETIA guarda cada tesis, score y cambio de régimen, y permite contrastar pasado y presente.
            El journal privado relaciona tus hipótesis con lo que el mercado hizo después.
          </p>
        </div>
        <div className="mem-grid reveal" style={{ marginTop: 32 }}>
          <MemoryTimeline memory={memory} />
          <PrivateJournal />
        </div>
      </div>
    </section>
  );
}
window.MemoryModule = MemoryModule;
