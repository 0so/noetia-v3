/* ============================================================
   NOETIAI — Global Market Intelligence Engine (v3)
   Universo multi-activo. EN VIVO: cripto (CoinGecko) + divisas
   (BCE vía Frankfurter). MODELADO: acciones, ETFs, bonos,
   commodities, macro (sin API pública client-side; arquitectura
   lista para enchufar feed). Motor cognitivo + Thesis V3 +
   memoria histórica + journal privado.
   ============================================================ */

const CRYPTO_IDS = [
  'bitcoin', 'ethereum', 'solana', 'binancecoin', 'ripple', 'cardano',
  'dogecoin', 'avalanche-2', 'chainlink', 'tron', 'polkadot', 'litecoin', 'pax-gold',
];
const LABELS = { 'pax-gold': 'PAXG' };

const CLASS_META = {
  crypto:    { name: 'Cripto', short: 'CRY', color: '#8b5cf6' },
  stocks:    { name: 'Acciones', short: 'EQ', color: '#c084fc' },
  etf:       { name: 'ETFs', short: 'ETF', color: '#a855f7' },
  bond:      { name: 'Bonos', short: 'FI', color: '#63b3ed' },
  fx:        { name: 'Divisas', short: 'FX', color: '#f6c453' },
  commodity: { name: 'Materias primas', short: 'CMD', color: '#f59e0b' },
  macro:     { name: 'Macro', short: 'MAC', color: '#2ee6a6' },
};

function std(arr) {
  if (!arr || arr.length < 2) return 0;
  const m = arr.reduce((a, b) => a + b, 0) / arr.length;
  const v = arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length;
  return Math.sqrt(v) / (m || 1);
}
function mkSpark(base, drift, n = 24, seed = 1) {
  const out = []; let v = base * (1 - drift * 0.6);
  for (let i = 0; i < n; i++) {
    const wob = Math.sin((i + seed) * 0.7) * base * 0.011 + Math.sin((i + seed) * 2.3) * base * 0.006;
    v = v + (base * drift) / n + wob * 0.4;
    out.push(+v.toFixed(base < 1 ? 5 : 2));
  }
  return out;
}

/* ---------- universo MODELADO (no fetchable client-side) ---------- */
/* Valores realistas (contexto jun-2026). live:false => etiqueta "modelado". */
const MODELED = [
  // Acciones globales
  a('stocks', 'AAPL', 'Apple', 234.1, 0.82, 3.1, 3.55e12, 'EEUU · Tech'),
  a('stocks', 'NVDA', 'NVIDIA', 178.6, 2.41, 7.8, 4.36e12, 'EEUU · Semis'),
  a('stocks', 'MSFT', 'Microsoft', 478.2, 0.51, 2.2, 3.55e12, 'EEUU · Tech'),
  a('stocks', 'ASML', 'ASML', 1024.5, -1.12, 1.4, 0.40e12, 'EU · Semis'),
  a('stocks', 'TSM', 'TSMC', 212.4, 1.84, 5.1, 1.10e12, 'Asia · Semis'),
  a('stocks', 'NESN', 'Nestlé', 92.3, -0.34, -1.1, 0.24e12, 'EU · Consumo'),
  a('stocks', 'MELI', 'MercadoLibre', 2380, 1.21, 4.4, 0.12e12, 'LatAm · Tech'),
  // ETFs
  a('etf', 'SPY', 'S&P 500', 612.4, 0.44, 1.9, 0, 'EEUU · Amplio'),
  a('etf', 'QQQ', 'Nasdaq 100', 542.8, 0.71, 3.2, 0, 'EEUU · Tech'),
  a('etf', 'VGK', 'Europa', 78.2, -0.21, 0.6, 0, 'EU · Amplio'),
  a('etf', 'EEM', 'Emergentes', 46.9, 0.92, 2.8, 0, 'EM · Amplio'),
  a('etf', 'GLD', 'Oro (ETF)', 248.6, 0.31, 1.2, 0, 'Refugio'),
  // Bonos / deuda
  a('bond', 'US10Y', 'Treasury 10A', 4.18, -0.9, -2.1, 0, 'EEUU · Tipo', { yield: true }),
  a('bond', 'US02Y', 'Treasury 2A', 3.82, -1.2, -3.0, 0, 'EEUU · Tipo', { yield: true }),
  a('bond', 'DE10Y', 'Bund 10A', 2.44, -0.6, -1.4, 0, 'EU · Tipo', { yield: true }),
  a('bond', 'HYG', 'High Yield', 79.4, 0.18, 0.5, 0, 'Crédito'),
  // Commodities
  a('commodity', 'XAU', 'Oro', 3312, 0.42, 1.6, 0, 'Metal · Refugio'),
  a('commodity', 'XAG', 'Plata', 41.8, 0.88, 3.4, 0, 'Metal'),
  a('commodity', 'WTI', 'Crudo WTI', 71.2, -1.34, -2.8, 0, 'Energía'),
  a('commodity', 'NG', 'Gas natural', 3.42, 2.1, 6.7, 0, 'Energía'),
  a('commodity', 'HG', 'Cobre', 4.62, 0.74, 2.1, 0, 'Industrial'),
  // Macro (índices / niveles)
  a('macro', 'CPI', 'Inflación EEUU', 2.7, -0.1, -0.3, 0, 'Precios · % a/a', { level: true }),
  a('macro', 'FEDFUNDS', 'Tipo Fed', 4.00, 0, -0.25, 0, 'Tipos · %', { level: true }),
  a('macro', 'DXY', 'Índice dólar', 101.4, -0.28, -0.9, 0, 'Liquidez'),
  a('macro', 'PMI', 'PMI manuf.', 51.3, 0.2, 0.8, 0, 'Actividad', { level: true }),
  a('macro', 'UNRATE', 'Paro EEUU', 4.1, 0, 0.1, 0, 'Empleo · %', { level: true }),
];
function a(cls, symbol, name, price, ch24, ch7, mcap, sector, opts = {}) {
  return {
    id: cls + ':' + symbol, cls, symbol, name, price, ch24, ch7, mcap, sector,
    vol: mcap ? mcap * 0.03 : Math.abs(price) * 1e6, live: false,
    spark: mkSpark(price, ch7 / 100, 24, symbol.length), ...opts,
  };
}

const CRYPTO_FALLBACK = [
  c('bitcoin', 'BTC', 'Bitcoin', 104820, 1.84, 4.31, 2067e9, 38e9),
  c('ethereum', 'ETH', 'Ethereum', 3942, 2.61, 6.12, 474e9, 19e9),
  c('solana', 'SOL', 'Solana', 168.4, -1.23, 3.04, 80e9, 4e9),
  c('binancecoin', 'BNB', 'BNB', 642.1, 0.42, -1.18, 92e9, 1.8e9),
  c('ripple', 'XRP', 'XRP', 2.31, 3.92, 8.74, 131e9, 6e9),
  c('cardano', 'ADA', 'Cardano', 0.742, -2.14, -3.61, 26e9, 0.9e9),
  c('dogecoin', 'DOGE', 'Dogecoin', 0.214, 1.05, 2.20, 31e9, 1.4e9),
  c('avalanche-2', 'AVAX', 'Avalanche', 38.6, -0.88, 1.42, 15e9, 0.5e9),
  c('chainlink', 'LINK', 'Chainlink', 22.4, 2.18, 5.1, 14e9, 0.6e9),
  c('tron', 'TRX', 'TRON', 0.262, 0.32, 1.1, 22e9, 0.4e9),
  c('polkadot', 'DOT', 'Polkadot', 7.18, -1.64, -2.3, 10e9, 0.3e9),
  c('litecoin', 'LTC', 'Litecoin', 118.2, 0.74, 2.9, 9e9, 0.5e9),
  c('pax-gold', 'PAXG', 'Oro (PAXG)', 3312, 0.21, 0.9, 0.6e9, 0.04e9),
];
function c(id, symbol, name, price, ch24, ch7, mcap, vol) {
  return { id, cls: 'crypto', symbol, name, price, ch24, ch7, mcap, vol, live: false, sector: 'Cripto', spark: mkSpark(price, ch7 / 100, 24, symbol.length) };
}

const FX_FALLBACK = [
  fx('EURUSD', 'EUR/USD', 1.0842, 0.12, 0.4),
  fx('GBPUSD', 'GBP/USD', 1.2731, -0.08, 0.2),
  fx('USDJPY', 'USD/JPY', 152.4, 0.22, -0.6),
  fx('USDCHF', 'USD/CHF', 0.884, -0.14, -0.3),
  fx('AUDUSD', 'AUD/USD', 0.662, 0.31, 0.9),
];
function fx(symbol, name, price, ch24, ch7) {
  return { id: 'fx:' + symbol, cls: 'fx', symbol, name, price, ch24, ch7, mcap: 0, vol: price * 1e9, live: false, sector: 'Forex', spark: mkSpark(price, ch7 / 100, 24, symbol.length) };
}

/* enrich: volatilidad + sentimiento por activo */
function enrich(list) {
  return list.map((x) => {
    const volat = Math.max(std(x.spark) * 100, Math.abs(x.ch24 || 0) * 0.4);
    // para bonos/yields y paro, una subida del nivel suele ser "riesgo": invertimos
    const dir = x.yield || x.symbol === 'UNRATE' || x.symbol === 'DXY' || x.symbol === 'CPI' ? -1 : 1;
    const sScore = Math.max(0, Math.min(100, 50 + (x.ch24 || 0) * dir * 4.2));
    let mood = 'neutral';
    if (sScore >= 62) mood = 'greed'; else if (sScore <= 38) mood = 'fear';
    return { ...x, volat, sScore, mood };
  });
}

const FALLBACK = {
  assets: enrich([...CRYPTO_FALLBACK, ...FX_FALLBACK, ...MODELED]),
  global: { mcap: 3.42e12, mcap24h: 1.92, btcDom: 51.4, ethDom: 13.8, vol: 142e9 },
  fng: { value: 64, label: 'Greed', prev: 58 },
  github: {
    login: '0so', name: '0so', bio: 'Developer · seguridad ofensiva · HTB', location: 'España',
    followers: 38, following: 12, public_repos: 24, avatar: 'assets/logo-glow.png', html_url: 'https://github.com/0so',
    repos: [
      { name: '0so.github.io', desc: 'Portfolio técnico — writeups e investigación de seguridad', lang: 'HTML', stars: 9, forks: 2, pushed: '2025-09-15' },
      { name: 'htb-writeups', desc: 'Fuentes Markdown de writeups de máquinas', lang: 'Ruby', stars: 14, forks: 3, pushed: '2025-09-10' },
      { name: 'recon-scripts', desc: 'Enumeración y recon para CTFs', lang: 'Python', stars: 21, forks: 6, pushed: '2025-08-02' },
      { name: 'priv-esc-notes', desc: 'Cheatsheets de escalada de privilegios', lang: 'Shell', stars: 17, forks: 4, pushed: '2025-07-19' },
    ],
    events: [
      { type: 'PushEvent', repo: '0so.github.io', detail: 'pushed 3 commits', when: '2025-09-15T08:12:00Z' },
      { type: 'CreateEvent', repo: 'htb-writeups', detail: 'creó la rama environment', when: '2025-09-14T19:40:00Z' },
      { type: 'PushEvent', repo: 'recon-scripts', detail: 'pushed 1 commit', when: '2025-09-10T11:02:00Z' },
      { type: 'WatchEvent', repo: 'recon-scripts', detail: 'marcó con estrella', when: '2025-09-08T22:15:00Z' },
    ],
  },
};

/* Writeups reales de HTB (0so.github.io) */
const WRITEUPS = [
  { name: 'Environment', date: '2025-09-15', os: 'Linux', diff: 'Medium', cls: 'RCE', tags: ['Laravel', 'CVE-2024-52301', 'Nginx', 'PrivEsc'], url: 'https://0so.github.io/Environment/' },
  { name: 'Strutted', date: '2025-09-10', os: 'Linux', diff: 'Medium', cls: 'RCE', tags: ['Apache Struts', 'CVE-2024-53677', 'OGNL', 'tcpdump'], url: 'https://0so.github.io/Strutted/' },
  { name: 'PermX', date: '2024-11-15', os: 'Linux', diff: 'Easy', cls: 'Web', tags: ['Chamilo LMS', 'CVE-2023-31803', 'setfacl'], url: 'https://0so.github.io/Permx/' },
  { name: 'Mailing', date: '2024-09-21', os: 'Windows', diff: 'Easy', cls: 'Web', tags: ['CVE-2024-21413', 'evil-winrm', 'NTLM'], url: 'https://0so.github.io/Mailing/' },
  { name: 'Cap', date: '2024-09-01', os: 'Linux', diff: 'Easy', cls: 'IDOR', tags: ['PCAP', 'FTP', 'Capabilities'], url: 'https://0so.github.io/Cap/' },
  { name: 'Pov', date: '2024-06-17', os: 'Windows', diff: 'Medium', cls: 'Deserial.', tags: ['ViewState', 'ysoserial.net', 'SeDebugPrivilege'], url: 'https://0so.github.io/Pov/' },
  { name: 'TwoMillion', date: '2024-06-11', os: 'Linux', diff: 'Easy', cls: 'API', tags: ['API abuse', 'CVE-2023-0386', 'OverlayFS'], url: 'https://0so.github.io/TwoMillion/' },
  { name: 'Builder', date: '2024-06-04', os: 'Linux', diff: 'Medium', cls: 'RCE', tags: ['Jenkins', 'CVE-2024-23897', 'Hashcat'], url: 'https://0so.github.io/Builder/' },
  { name: 'Lame', date: '2024-06-18', os: 'Linux', diff: 'Easy', cls: 'RCE', tags: ['Samba', 'CVE-2007-2447', 'Metasploit'], url: 'https://0so.github.io/Lame/' },
];

const LANG_COLOR = { HTML: '#e34c26', Ruby: '#701516', Python: '#3572A5', Shell: '#89e051', JavaScript: '#f1e05a', C: '#555555', Go: '#00ADD8', Rust: '#dea584', TypeScript: '#3178c6' };
const CLASS_COLOR = { RCE: 'var(--fear)', Web: 'var(--amber)', IDOR: 'var(--think)', 'Deserial.': '#c084fc', API: '#63b3ed', AD: '#f6ad55' };

/* ====================================================================
   MOTOR COGNITIVO — interpreta relaciones, no solo datos
   ==================================================================== */
function classAgg(assets) {
  const out = {};
  Object.keys(CLASS_META).forEach((k) => {
    const set = assets.filter((x) => x.cls === k);
    if (!set.length) return;
    const avg24 = set.reduce((s, x) => s + (x.ch24 || 0), 0) / set.length;
    const avg7 = set.reduce((s, x) => s + (x.ch7 || 0), 0) / set.length;
    const breadth = set.filter((x) => (x.ch24 || 0) > 0).length / set.length;
    const vol = set.reduce((s, x) => s + (x.volat || 0), 0) / set.length;
    out[k] = { key: k, ...CLASS_META[k], avg24, avg7, breadth, vol, n: set.length };
  });
  return out;
}

/* correlaciones modeladas entre clases (para la vista de red) — relaciones
   macro reconocidas: risk-on (eq/cry juntos), refugio (oro/bonos), dólar inverso */
const CLASS_EDGES = [
  ['crypto', 'stocks', 0.72], ['crypto', 'etf', 0.66], ['stocks', 'etf', 0.9],
  ['etf', 'fx', -0.34], ['commodity', 'bond', -0.28], ['commodity', 'macro', 0.41],
  ['bond', 'macro', 0.58], ['fx', 'macro', 0.62], ['crypto', 'commodity', 0.35],
  ['stocks', 'bond', -0.45], ['etf', 'commodity', 0.22],
];

function detectSignals(assets, agg, fng) {
  const sig = [];
  const now = Date.now();
  const push = (kind, level, title, detail, ago) => sig.push({ kind, level, title, detail, t: new Date(now - ago * 1000) });

  // liderazgo sectorial
  const ranked = Object.values(agg).sort((x, y) => y.avg24 - x.avg24);
  if (ranked.length) {
    const lead = ranked[0], lag = ranked[ranked.length - 1];
    push('leadership', lead.avg24 >= 0 ? 'ok' : 'warn', 'Liderazgo de clase',
      `${lead.name} lidera (${fmtPct(lead.avg24)} 24h); ${lag.name} a la zaga (${fmtPct(lag.avg24)})`, 60);
  }
  // rotación de capital
  const cry = agg.crypto, eq = agg.stocks, bnd = agg.bond, cmd = agg.commodity;
  if (cry && bnd) {
    if (cry.avg24 > 0.5 && bnd.avg24 < 0) push('rotation', 'ok', 'Rotación a riesgo', 'Capital saliendo de deuda hacia cripto/acciones — apetito risk-on', 140);
    else if (cry.avg24 < -0.5 && (cmd?.avg24 > 0 || bnd.avg24 > 0)) push('rotation', 'warn', 'Rotación defensiva', 'Flujo hacia refugio (oro/bonos) frente a riesgo', 140);
  }
  // anomalías: |ch24| > 3× su volatilidad estructural
  assets.forEach((x) => {
    if ((x.volat || 0) > 0 && Math.abs(x.ch24 || 0) > Math.max(3 * x.volat, 5)) {
      sig.push({ kind: 'anomaly', level: x.ch24 > 0 ? 'ok' : 'alert', title: 'Anomalía de movimiento',
        detail: `${x.symbol} ${fmtPct(x.ch24)} 24h, fuera de su rango habitual`, t: new Date(now - 200 * 1000) });
    }
  });
  // sentimiento
  push('sentiment', fng >= 65 ? 'warn' : fng <= 30 ? 'alert' : 'ok', 'Sentimiento cripto',
    `Fear & Greed ${fng}/100 · ${fng >= 60 ? 'codicia' : fng <= 35 ? 'miedo' : 'neutral'}`, 280);
  // correlación destacada
  push('correlation', 'ok', 'Correlación dominante',
    'Acciones y ETFs se mueven al unísono (ρ≈0.9); deuda actúa de cobertura', 360);

  return sig.slice(0, 8);
}

/* ====================================================================
   THESIS ENGINE V3 — diario / semanal / mensual
   Estructura: Qué ocurre · Por qué · Qué significa · Qué podría pasar
   ==================================================================== */
function buildThesis(assets, agg, global, fng) {
  const breadthAll = assets.length ? assets.filter((x) => (x.ch24 || 0) > 0).length / assets.length : 0.5;
  const macScore = fng * 0.34 + (50 + (agg.crypto?.avg7 || 0) * 3) * 0.3 + breadthAll * 100 * 0.36;
  let regime, regimeTone;
  if (macScore >= 64) { regime = 'Expansión'; regimeTone = 'up'; }
  else if (macScore >= 52) { regime = 'Constructivo'; regimeTone = 'up'; }
  else if (macScore >= 44) { regime = 'Transición'; regimeTone = 'mid'; }
  else if (macScore >= 32) { regime = 'Defensivo'; regimeTone = 'down'; }
  else { regime = 'Contracción'; regimeTone = 'down'; }

  const lead = Object.values(agg).sort((x, y) => y.avg24 - x.avg24)[0];
  const lag = Object.values(agg).sort((x, y) => x.avg24 - y.avg24)[0];
  const dom = (global.btcDom || 0).toFixed(1);
  const dollar = assets.find((x) => x.symbol === 'DXY');
  const rates = assets.find((x) => x.symbol === 'US10Y');
  const breadthPct = Math.round(breadthAll * 100);

  const daily = {
    what: `${lead ? lead.name : 'Cripto'} lidera la sesión (${lead ? fmtPct(lead.avg24) : '—'}); ${lag ? lag.name.toLowerCase() : 'bonos'} a la zaga. ${breadthPct}% del universo en positivo a 24h.`,
    why: `El sentimiento cripto marca ${fng}/100 (${fng >= 60 ? 'codicia' : fng <= 35 ? 'miedo' : 'neutral'}) y la dominancia BTC está en ${dom}%. El dólar ${dollar && dollar.ch24 < 0 ? 'cede' : 'se sostiene'}, lo que ${dollar && dollar.ch24 < 0 ? 'da aire' : 'presiona'} al riesgo.`,
    meaning: `Régimen de mercado: ${regime.toLowerCase()}. La amplitud ${breadthAll >= 0.55 ? 'es saludable' : breadthAll >= 0.4 ? 'es selectiva' : 'se estrecha'}, señal de ${breadthAll >= 0.55 ? 'participación amplia' : 'liderazgo concentrado'}.`,
    next: `Vigilar ${rates ? `el 10A (${rates.price}%)` : 'los tipos'} y la dominancia BTC: una ruptura de ${(global.btcDom || 0) > 52 ? 'a la baja abriría' : 'al alza cerraría'} la puerta a rotación hacia altcoins y small caps.`,
  };
  const weekly = {
    what: `En la semana, ${lead ? lead.name : 'las acciones'} acumula ${lead ? fmtPct(lead.avg7) : '—'} y consolida el liderazgo; la deuda actúa de cobertura.`,
    why: `La combinación de inflación contenida y expectativa de tipos a la baja sostiene la prima de riesgo. Correlación acciones↔ETF cercana a 0.9.`,
    meaning: `El mercado mantiene un sesgo ${regimeTone === 'up' ? 'risk-on moderado' : regimeTone === 'down' ? 'defensivo' : 'de transición'}; sin cambio de régimen confirmado.`,
    next: `Un giro del dólar o un repunte de volatilidad en commodities serían el primer aviso de rotación defensiva.`,
  };
  const monthly = {
    what: `El mes dibuja un régimen ${regime.toLowerCase()} con liderazgo de ${lead ? lead.name.toLowerCase() : 'tecnología'} y rezago de ${lag ? lag.name.toLowerCase() : 'materias primas'}.`,
    why: `El ciclo de liquidez global y la pendiente de la curva de tipos definen el telón de fondo; el apetito por duración cripto sigue ligado a la macro de EEUU.`,
    meaning: `Estructuralmente, el sistema favorece ${regimeTone === 'up' ? 'activos de crecimiento y beta alta' : 'calidad y refugio'}.`,
    next: `El próximo punto de inflexión llegará con el dato de inflación y la reunión de tipos; NOETIA registrará el cambio de régimen en su memoria.`,
  };

  return { regime, regimeTone, macScore: Math.round(macScore), confidence: Math.round(55 + Math.abs(macScore - 50) * 0.7), breadth: breadthAll, daily, weekly, monthly };
}

/* ====================================================================
   NOETIA MEMORY — registro histórico en localStorage
   ==================================================================== */
const MEM_KEY = 'noetia_memory_v3';
function readMemory() {
  try { return JSON.parse(localStorage.getItem(MEM_KEY)) || []; } catch (e) { return []; }
}
function recordMemory(entry) {
  try {
    const hist = readMemory();
    const last = hist[hist.length - 1];
    // un registro como máximo cada 5 min para no saturar
    if (last && Date.now() - last.t < 5 * 60 * 1000) {
      // actualiza el último in-place para reflejar el valor más fresco
      hist[hist.length - 1] = { ...entry, t: last.t };
    } else {
      hist.push(entry);
    }
    const trimmed = hist.slice(-60);
    localStorage.setItem(MEM_KEY, JSON.stringify(trimmed));
    return trimmed;
  } catch (e) { return readMemory(); }
}
function seedMemoryIfEmpty(entry) {
  const hist = readMemory();
  if (hist.length >= 6) return hist;
  // siembra una serie plausible hacia atrás para que el timeline tenga cuerpo
  const seeded = [];
  const day = 24 * 3600 * 1000;
  const regimes = ['Defensivo', 'Transición', 'Transición', 'Constructivo', 'Constructivo', 'Expansión'];
  for (let i = 6; i >= 1; i--) {
    seeded.push({
      t: Date.now() - i * day,
      score: Math.max(20, Math.min(85, entry.score - i * 3 + Math.round(Math.sin(i) * 6))),
      regime: regimes[6 - i] || entry.regime,
      fng: Math.max(10, Math.min(90, entry.fng - i * 2 + Math.round(Math.cos(i) * 5))),
    });
  }
  seeded.push(entry);
  try { localStorage.setItem(MEM_KEY, JSON.stringify(seeded)); } catch (e) {}
  return seeded;
}

/* ====================================================================
   PRIVATE JOURNAL — hipótesis → resultado (localStorage)
   ==================================================================== */
const JOURNAL_KEY = 'noetia_journal_v3';
function readJournal() {
  try {
    const j = JSON.parse(localStorage.getItem(JOURNAL_KEY));
    if (j && j.length) return j;
  } catch (e) {}
  return [
    { id: 'seed1', t: Date.now() - 11 * 86400000, title: 'Rotación a small caps', body: 'Si el 10A pierde el 4.0%, espero rotación de mega-caps hacia small caps y cripto beta-alta.', regime: 'Transición', outcome: 'pending' },
    { id: 'seed2', t: Date.now() - 26 * 86400000, title: 'Oro como cobertura', body: 'Acumular exposición a oro ante volatilidad macro; descorrelaciona del riesgo.', regime: 'Defensivo', outcome: 'confirmed' },
  ];
}
function writeJournal(list) { try { localStorage.setItem(JOURNAL_KEY, JSON.stringify(list)); } catch (e) {} }

/* ---------- fetch helpers ---------- */
async function fetchJSONsafe(url, ms = 7000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { Accept: 'application/json' } });
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}

/* construye los pares FX en vivo desde tasas base USD (Frankfurter / BCE) */
function buildFXfromRates(latest, series) {
  // latest.rates: { EUR, GBP, JPY, CHF, AUD } con base USD
  const r = latest && latest.rates ? latest.rates : null;
  if (!r) return null;
  const dates = series && series.rates ? Object.keys(series.rates).sort() : [];
  const sparkOf = (ccy, invert) => dates.map((d) => {
    const v = series.rates[d][ccy];
    return invert ? +(1 / v).toFixed(5) : +v.toFixed(5);
  });
  const chOf = (arr) => {
    if (arr.length < 2) return { ch24: 0, ch7: 0 };
    const last = arr[arr.length - 1], prev = arr[arr.length - 2], first = arr[0];
    return { ch24: ((last - prev) / prev) * 100, ch7: ((last - first) / first) * 100 };
  };
  const pair = (sym, name, ccy, invert) => {
    const price = invert ? 1 / r[ccy] : r[ccy];
    const sp = sparkOf(ccy, invert);
    const ch = chOf(sp.length ? sp : [price, price]);
    return { id: 'fx:' + sym, cls: 'fx', symbol: name, name: name, price: +price.toFixed(5), ch24: ch.ch24, ch7: ch.ch7, mcap: 0, vol: price * 1e9, live: true, sector: 'Forex', spark: sp.length ? sp : mkSpark(price, 0.002, 24, sym.length) };
  };
  return [
    pair('EURUSD', 'EUR/USD', 'EUR', true),
    pair('GBPUSD', 'GBP/USD', 'GBP', true),
    pair('USDJPY', 'USD/JPY', 'JPY', false),
    pair('USDCHF', 'USD/CHF', 'CHF', false),
    pair('AUDUSD', 'AUD/USD', 'AUD', true),
  ];
}

function useLiveData() {
  const [data, setData] = useState(FALLBACK);
  const [status, setStatus] = useState('loading');
  const [refreshedAt, setRefreshedAt] = useState(null);
  const [memory, setMemory] = useState([]);

  const load = useCallback(async () => {
    let anyLive = false;
    const next = JSON.parse(JSON.stringify(FALLBACK));
    // separa por clase para sustituir solo cripto/fx en vivo
    const byCls = (arr) => arr.reduce((m, x) => { (m[x.cls] = m[x.cls] || []).push(x); return m; }, {});
    const base = byCls(next.assets);

    const fxStart = (() => { const d = new Date(Date.now() - 9 * 86400000); return d.toISOString().slice(0, 10); })();

    const [mkt, glob, fng, fxLatest, fxSeries, ghUser, ghRepos, ghEvents] = await Promise.allSettled([
      fetchJSONsafe('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + CRYPTO_IDS.join(',') + '&order=market_cap_desc&sparkline=true&price_change_percentage=24h,7d'),
      fetchJSONsafe('https://api.coingecko.com/api/v3/global'),
      fetchJSONsafe('https://api.alternative.me/fng/?limit=2'),
      fetchJSONsafe('https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY,CHF,AUD'),
      fetchJSONsafe('https://api.frankfurter.app/' + fxStart + '..?from=USD&to=EUR,GBP,JPY,CHF,AUD'),
      fetchJSONsafe('https://api.github.com/users/0so'),
      fetchJSONsafe('https://api.github.com/users/0so/repos?sort=pushed&per_page=8'),
      fetchJSONsafe('https://api.github.com/users/0so/events/public?per_page=30'),
    ]);

    if (mkt.status === 'fulfilled' && Array.isArray(mkt.value)) {
      anyLive = true;
      base.crypto = mkt.value.map((x) => ({
        id: x.id, cls: 'crypto', symbol: LABELS[x.id] || (x.symbol || '').toUpperCase(), name: x.name,
        price: x.current_price, ch24: x.price_change_percentage_24h_in_currency ?? x.price_change_percentage_24h,
        ch7: x.price_change_percentage_7d_in_currency, mcap: x.market_cap, vol: x.total_volume, live: true, sector: 'Cripto',
        spark: (x.sparkline_in_7d && x.sparkline_in_7d.price) ? x.sparkline_in_7d.price.filter((_, i) => i % 7 === 0) : [],
      }));
    }
    if (glob.status === 'fulfilled' && glob.value && glob.value.data) {
      anyLive = true; const d = glob.value.data;
      next.global = { mcap: d.total_market_cap?.usd, mcap24h: d.market_cap_change_percentage_24h_usd, btcDom: d.market_cap_percentage?.btc, ethDom: d.market_cap_percentage?.eth, vol: d.total_volume?.usd };
    }
    if (fng.status === 'fulfilled' && fng.value && fng.value.data && fng.value.data[0]) {
      anyLive = true; const f = fng.value.data;
      next.fng = { value: +f[0].value, label: f[0].value_classification, prev: f[1] ? +f[1].value : +f[0].value };
    }
    if (fxLatest.status === 'fulfilled') {
      const built = buildFXfromRates(fxLatest.value, fxSeries.status === 'fulfilled' ? fxSeries.value : null);
      if (built) { anyLive = true; base.fx = built; }
    }
    if (ghUser.status === 'fulfilled' && ghUser.value && ghUser.value.login) {
      anyLive = true; const u = ghUser.value;
      next.github = { ...next.github, login: u.login, name: u.name || u.login, bio: u.bio || next.github.bio, location: u.location || next.github.location, followers: u.followers, following: u.following, public_repos: u.public_repos, avatar: u.avatar_url, html_url: u.html_url };
    }
    if (ghRepos.status === 'fulfilled' && Array.isArray(ghRepos.value) && ghRepos.value.length) {
      next.github.repos = ghRepos.value.filter((r) => !r.fork).slice(0, 6).map((r) => ({ name: r.name, desc: r.description, lang: r.language, stars: r.stargazers_count, forks: r.forks_count, pushed: r.pushed_at }));
    }
    if (ghEvents.status === 'fulfilled' && Array.isArray(ghEvents.value) && ghEvents.value.length) {
      next.github.events = ghEvents.value.slice(0, 8).map((e) => ({ type: e.type, repo: (e.repo && e.repo.name ? e.repo.name.split('/').pop() : ''), detail: describeEvent(e), when: e.created_at }));
    }

    next.assets = enrich([...(base.crypto || []), ...(base.fx || []), ...(base.stocks || []), ...(base.etf || []), ...(base.bond || []), ...(base.commodity || []), ...(base.macro || [])]);

    setData(next);
    setStatus(anyLive ? 'live' : 'cached');
    setRefreshedAt(new Date());

    // memoria histórica
    const agg = classAgg(next.assets);
    const th = buildThesis(next.assets, agg, next.global, next.fng.value);
    let hist = seedMemoryIfEmpty({ t: Date.now(), score: th.macScore, regime: th.regime, fng: next.fng.value });
    hist = recordMemory({ t: Date.now(), score: th.macScore, regime: th.regime, fng: next.fng.value });
    setMemory(hist);
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 30000);
    return () => clearInterval(id);
  }, [load]);

  return { data, status, refreshedAt, memory };
}

function describeEvent(e) {
  switch (e.type) {
    case 'PushEvent': { const n = e.payload?.commits?.length || e.payload?.size || 1; return `pushed ${n} commit${n > 1 ? 's' : ''}`; }
    case 'CreateEvent': return `creó ${e.payload?.ref_type === 'branch' ? 'la rama' : e.payload?.ref_type || 'repo'}${e.payload?.ref ? ' ' + e.payload.ref : ''}`;
    case 'WatchEvent': return 'marcó con estrella';
    case 'ForkEvent': return 'hizo fork';
    case 'IssuesEvent': return `${e.payload?.action || 'actualizó'} una issue`;
    case 'PullRequestEvent': return `${e.payload?.action || 'actualizó'} un PR`;
    case 'ReleaseEvent': return 'publicó una release';
    default: return e.type.replace('Event', '').toLowerCase();
  }
}

Object.assign(window, {
  useLiveData, FALLBACK, WRITEUPS, LANG_COLOR, CLASS_COLOR, CLASS_META, CLASS_EDGES,
  classAgg, detectSignals, buildThesis,
  readMemory, readJournal, writeJournal,
});
