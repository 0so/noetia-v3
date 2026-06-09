/* NOETIAI — app shell: datos, tweaks, motion, fondo */
const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#8b5cf6",
  "dataFont": "mono",
  "density": "regular",
  "fx": 1,
  "video": true,
  "heroL1": "Comprende",
  "heroL2": "la realidad.",
  "heroLead": "NOETIAI es un sistema de inteligencia artificial orientado a la comprensión profunda de la realidad financiera. Un observatorio que percibe el universo global, razona sobre sus relaciones y recuerda."
}/*EDITMODE-END*/;

function hexToRgb(h) {
  const m = h.replace('#', '');
  const n = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}

const DENSITY = { compact: ['16px', '12px'], regular: ['24px', '16px'], comfy: ['32px', '22px'] };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { data, status, refreshedAt, memory } = useLiveData();

  React.useEffect(() => {
    const root = document.documentElement;
    const [r, g, b] = hexToRgb(t.accent);
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--accent-soft', `rgba(${r},${g},${b},0.13)`);
    root.style.setProperty('--accent-line', `rgba(${r},${g},${b},0.36)`);
    root.style.setProperty('--data-font', t.dataFont === 'mono' ? 'var(--mono)' : 'var(--aura-font-sans)');
    const [pad, gap] = DENSITY[t.density] || DENSITY.regular;
    root.style.setProperty('--pad', pad);
    root.style.setProperty('--gap', gap);
    root.style.setProperty('--fx', String(t.fx));
  }, [t.accent, t.dataFont, t.density, t.fx]);

  React.useEffect(() => {
    const v = document.getElementById('bgvid');
    if (!v) return;
    if (t.video) {
      v.classList.remove('off');
      if (!v.src) { v.src = VIDEO_SRC; v.load(); }
      v.play && v.play().catch(() => {});
    } else {
      v.classList.add('off');
    }
  }, [t.video]);

  const copy = { l1: t.heroL1, l2: t.heroL2, lead: t.heroLead };

  return (
    <>
      <Nav status={status} />
      <main>
        <Hero data={data} status={status} copy={copy} />
        <Terminal data={data} status={status} refreshedAt={refreshedAt} />
        <MemoryModule memory={memory} />
        <PortfolioDivider />
        <DevModule gh={data.github} />
        <SecModule />
        <Thesis />
        <FinalCTA />
      </main>
      <Footer gh={data.github} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Identidad" />
        <TweakColor label="Acento cognitivo" value={t.accent}
          options={['#8b5cf6', '#a855f7', '#c084fc', '#f6c453']}
          onChange={(v) => setTweak('accent', v)} />
        <TweakRadio label="Cara de datos" value={t.dataFont} options={['mono', 'inter']}
          onChange={(v) => setTweak('dataFont', v)} />

        <TweakSection label="Superficie" />
        <TweakRadio label="Densidad" value={t.density} options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)} />
        <TweakSlider label="Glass / glow" value={t.fx} min={0.3} max={1.5} step={0.1}
          onChange={(v) => setTweak('fx', v)} />
        <TweakToggle label="Vídeo de fondo" value={t.video}
          onChange={(v) => setTweak('video', v)} />

        <TweakSection label="Copy del hero" />
        <TweakText label="Línea 1" value={t.heroL1} onChange={(v) => setTweak('heroL1', v)} />
        <TweakText label="Línea 2 (shiny)" value={t.heroL2} onChange={(v) => setTweak('heroL2', v)} />
        <TweakText label="Entradilla" value={t.heroLead} onChange={(v) => setTweak('heroLead', v)} multiline />
      </TweaksPanel>
    </>
  );
}
window.App = App;
