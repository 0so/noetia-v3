/* NOETIAI — hero: observatorio de inteligencia + consola viva */
function Hero({ data, status, copy }) {
  const find = (id) => data.assets.find((a) => a.id === id);
  const btc = find('bitcoin') || data.assets[0];
  const fng = data.fng;
  const gh = data.github;
  const liveN = data.assets.filter((a) => a.live).length;

  const lines = [
    { m: 'universo.activos', v: `${data.assets.length} instrumentos`, d: `${liveN} en vivo`, up: true },
    { m: 'mercados.btc', v: `${btc.symbol} ${fmtPrice(btc.price)}`, d: fmtPct(btc.ch24), up: btc.ch24 >= 0 },
    { m: 'sentimiento.fng', v: `${fng.value}/100`, d: fng.label },
    { m: 'razonamiento.core', v: 'thesis engine', d: 'activo' },
  ];

  return (
    <section className="hero section" id="overview">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="reveal"><Eyebrow label="NOETIAI" tag="observatorio noético" /></div>
          <h1 className="display reveal" style={{ marginTop: 22 }}>
            <span style={{ display: 'block' }}>{copy.l1}</span>
            <span className="shiny animate-shiny" style={{ display: 'block' }}>{copy.l2}</span>
          </h1>
          <p className="lead reveal" style={{ maxWidth: '35rem', marginTop: 24 }}>
            {copy.lead}
          </p>
          <div className="reveal hero-cta">
            <Button kind="accent" href="#terminal" chevron>Entrar a Terminal</Button>
            <Button kind="ghost" href="#modules">Explorar Dev</Button>
          </div>
          <div className="reveal hero-domains">
            <span className="chip"><Icon name="Coins" size={13} /> Mercados globales</span>
            <span className="chip"><Icon name="Brain" size={13} /> Razonamiento</span>
            <span className="chip"><Icon name="History" size={13} /> Memoria</span>
          </div>
        </div>

        <div className="hero-console reveal">
          <div className="liquid-glass card glass-strong console">
            <div className="console-bar">
              <span className="tl"><i style={{ background: 'var(--aura-traffic-red)' }} /><i style={{ background: 'var(--aura-traffic-amber)' }} /><i style={{ background: 'var(--aura-traffic-green)' }} /></span>
              <span className="console-title mono">noeti://system.status</span>
              <span className={'live' + (status === 'cached' ? ' cached' : '')}><span className="pulse" />{status === 'live' ? 'en vivo' : status === 'cached' ? 'cacheado' : 'sync'}</span>
            </div>
            <div className="console-body mono">
              <div className="cl"><span className="muted-2">$</span> noeti status --all</div>
              {lines.map((l, i) => (
                <div className="cl row" key={i} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
                  <span className="badge-ok">[ok]</span>
                  <span className="cl-mod">{l.m}</span>
                  <span className="cl-val">{l.v}</span>
                  <span className={'cl-d ' + (l.up === undefined ? 'muted' : l.up ? 'up' : 'down')}>{l.d}</span>
                </div>
              ))}
              <div className="cl dots"><span className="muted">núcleo de razonamiento</span><span className="lead-dots" /><span className="up">online</span></div>
              <div className="cl"><span className="muted-2">$</span> <span className="cursor" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
