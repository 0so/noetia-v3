/* NOETIAI — tesis (noesis), CTA final, footer */

function Thesis() {
  const principles = [
    ['Radio', 'Percibir', 'Ingiere cada señal — precio, commit, paquete — sin aplanar el detalle.'],
    ['Cpu', 'Razonar', 'Sostiene el contexto, pondera la evidencia y forma una postura en vez de una conjetura.'],
    ['Sparkles', 'Refinar', 'Devuelve el ruido como claridad: un número, una postura, un siguiente paso.'],
  ];
  return (
    <section className="section thesis" id="thesis">
      <div className="wrap-narrow" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-flex' }}><Eyebrow label="Tesis" tag="noesis" /></div>
        <h2 className="display reveal" style={{ marginTop: 22, fontSize: 'clamp(34px,5.4vw,60px)' }}>
          De <span className="shiny animate-shiny">noesis</span> —<br />conocimiento profundo.
        </h2>
        <p className="lead reveal" style={{ maxWidth: '38rem', margin: '24px auto 0' }}>
          NOETIAI es un sistema de inteligencia artificial orientado a la comprensión profunda de
          datos financieros, técnicos y de seguridad. Nombrado por <em style={{ color: 'var(--aura-fg-70)', fontStyle: 'italic' }}>noesis</em> — el
          acto de la intelección pura — lee mercados, código y amenazas como lo haría un analista,
          y refina el ruido en señal.
        </p>
      </div>
      <div className="wrap thesis-grid reveal">
        {principles.map(([ic, t, d], i) => (
          <div className="liquid-glass card pad principle" key={t}>
            <span className="principle-n field">0{i + 1}</span>
            <span className="principle-ic"><Icon name={ic} size={20} style={{ color: 'var(--accent)' }} /></span>
            <h3 className="principle-t">{t}</h3>
            <p className="muted principle-d">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section" id="access">
      <div className="wrap">
        <div className="liquid-glass card final reveal">
          <div className="final-glow" aria-hidden="true" />
          <div className="final-inner">
            <Logo size={40} withWord={false} />
            <h2 className="heading" style={{ marginTop: 20 }}>Cierra las terminales.<br />Abre la señal.</h2>
            <p className="lead" style={{ maxWidth: '34rem', margin: '18px auto 0' }}>
              NOETIAI está en desarrollo privado. Solicita acceso al núcleo de razonamiento y pon
              mercados, código y seguridad en un solo feed.
            </p>
            <div className="final-cta">
              <Button kind="primary" chevron>Solicitar acceso</Button>
              <Button kind="ghost" href="#terminal">Explorar el Terminal</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ gh }) {
  const cols = [
    ['Sistema', [['Inteligencia', '#terminal'], ['Dev', '#modules'], ['Investigación', '#research'], ['Tesis', '#thesis']]],
    ['Módulos', [['Mercados', '#terminal'], ['Desarrollo', '#modules'], ['Seguridad', '#research']]],
    ['Fuentes', [['CoinGecko', 'https://coingecko.com'], ['Fear & Greed', 'https://alternative.me/crypto/fear-and-greed-index/'], ['GitHub @0so', gh.html_url], ['0so.github.io', 'https://0so.github.io']]],
  ];
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo size={30} />
          <p className="muted" style={{ maxWidth: '24rem', marginTop: 16, fontSize: 14, lineHeight: 1.6 }}>
            Sistema de inteligencia artificial orientado a la comprensión profunda. Inspirado en noesis.
          </p>
          <div className="footer-chips">
            <span className="chip"><Icon name="Globe" size={12} /> España</span>
            <span className="chip"><Icon name="Lock" size={12} /> Beta privada</span>
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div className="footer-col" key={h}>
            <div className="field footer-h">{h}</div>
            {items.map(([l, href]) => (
              <a key={l} href={href} className="footer-link" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="wrap footer-bot">
        <span className="field">© {new Date().getFullYear()} NOETIAI · motor noético</span>
        <span className="field">Datos en vivo y públicos · no es asesoramiento financiero</span>
      </div>
    </footer>
  );
}

window.Thesis = Thesis;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
