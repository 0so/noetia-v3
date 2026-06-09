/* ============================================================
   NOETIAI — shared primitives, icons, formatters & live data
   Exports to window so sibling babel scripts can use them.
   ============================================================ */

const { useState, useEffect, useRef, useCallback } = React;

/* ---- Lucide glyphs (24×24, 2px stroke) ------------------------ */
const ICONS = {
  ChevronRight: '<path d="m9 18 6-6-6-6"/>',
  ArrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  ArrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  Activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  TrendingUp: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  TrendingDown: '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
  Gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  Layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  Cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  Database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  GitBranch: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  GitCommit: '<circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/>',
  GitFork: '<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>',
  Star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  Shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  ShieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  Terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
  Lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  Crosshair: '<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
  Flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  Bug: '<path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
  Server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  Search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  Plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  X: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  Menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  Sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  Globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  MapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  Clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  Radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/>',
  Network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  History: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  BookOpen: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  Compass: '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  Filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  ChevronDown: '<path d="m6 9 6 6 6-6"/>',
  Plus2: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  Check: '<path d="M20 6 9 17l-5-5"/>',
  Brain: '<path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>',
  Coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
};

function Icon({ name, size = 16, stroke = 2, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"
      strokeLinejoin="round" className={className} style={style} aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }} />
  );
}

/* ---- Brand wordmark + mark ------------------------------------ */
function Logo({ size = 30, withWord = true }) {
  return (
    <a href="#top" className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <img src="assets/logo-glow.png" alt="NOETIAI" width={size} height={size}
        style={{ display: 'block', filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.4))' }} />
      {withWord && (
        <span style={{ font: '600 17px/1 var(--aura-font-sans)', letterSpacing: '0.16em' }}>
          NOET<span style={{ color: 'var(--aura-fg-60)' }}>IAI</span>
        </span>
      )}
    </a>
  );
}

/* ---- Eyebrow -------------------------------------------------- */
function Eyebrow({ label, tag }) {
  return (
    <div className="eyebrow">
      <span className="dot" />
      <span className="label">{label}</span>
      {tag && <span className="tag">{tag}</span>}
    </div>
  );
}

/* ---- Button --------------------------------------------------- */
function Button({ kind = 'primary', icon, chevron, children, href, ...rest }) {
  const cls = `btn btn-${kind}`;
  const inner = (
    <>
      {icon && <Icon name={icon} size={15} />}
      {children}
      {chevron && <Icon name="ChevronRight" size={15} className="chev" />}
    </>
  );
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <button className={cls} {...rest}>{inner}</button>;
}

/* ---- Formatters ----------------------------------------------- */
const fmtUSD = (n, max = 2) => n == null ? '—' :
  '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: n < 10 ? 2 : 0, maximumFractionDigits: n < 10 ? 4 : max });
const fmtPrice = (n) => n == null ? '—' :
  '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: n < 1 ? 4 : (n < 100 ? 2 : 0) });
const fmtPct = (n) => n == null ? '—' : (n >= 0 ? '+' : '') + n.toFixed(2) + '%';
const fmtCompact = (n) => {
  if (n == null) return '—';
  const a = Math.abs(n);
  if (a >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T';
  if (a >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
  if (a >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
  if (a >= 1e3) return '$' + (n / 1e3).toFixed(1) + 'K';
  return '$' + n.toFixed(0);
};
const timeAgo = (iso) => {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return s + 's';
  if (s < 3600) return Math.floor(s / 60) + 'm';
  if (s < 86400) return Math.floor(s / 3600) + 'h';
  return Math.floor(s / 86400) + 'd';
};

/* ---- Sparkline ------------------------------------------------ */
function Sparkline({ data, w = 120, h = 38, color, fill = true, strokeW = 1.6 }) {
  if (!data || data.length < 2) return <svg className="spark" viewBox={`0 0 ${w} ${h}`} />;
  const min = Math.min(...data), max = Math.max(...data), span = max - min || 1;
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - 4 - ((v - min) / span) * (h - 8),
  ]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = line + ` L ${w} ${h} L 0 ${h} Z`;
  const c = color || 'var(--accent)';
  const id = 'sg' + Math.round(min) + '-' + data.length;
  return (
    <svg className="spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c} stopOpacity="0.28" />
          <stop offset="100%" stopColor={c} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${id})`} />}
      <path d={line} fill="none" stroke={c} strokeWidth={strokeW} strokeLinejoin="round" strokeLinecap="round"
        vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* ---- NOETIA market score (proprietary composite) -------------- */
function computeScore({ fng, btc7d, btcDom, mcap24h }) {
  // Blend sentiment, weekly momentum, dominance posture and breadth into 0–100.
  const sent = fng == null ? 50 : fng;                       // 0–100
  const mom = Math.max(0, Math.min(100, 50 + (btc7d || 0) * 3.2));
  const breadth = Math.max(0, Math.min(100, 50 + (mcap24h || 0) * 6));
  const domPosture = btcDom == null ? 50 : Math.max(0, Math.min(100, 100 - Math.abs(btcDom - 52) * 2.5));
  const score = Math.round(sent * 0.34 + mom * 0.30 + breadth * 0.20 + domPosture * 0.16);
  let label = 'Neutral', tone = 'mid';
  if (score >= 72) { label = 'Risk-on'; tone = 'up'; }
  else if (score >= 58) { label = 'Constructive'; tone = 'up'; }
  else if (score >= 42) { label = 'Neutral'; tone = 'mid'; }
  else if (score >= 28) { label = 'Cautious'; tone = 'down'; }
  else { label = 'Risk-off'; tone = 'down'; }
  return { score, label, tone };
}

/* ---- Fetch with timeout --------------------------------------- */
async function fetchJSON(url, ms = 7000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { Accept: 'application/json' } });
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}

Object.assign(window, {
  Icon, Logo, Eyebrow, Button, Sparkline,
  fmtUSD, fmtPrice, fmtPct, fmtCompact, timeAgo, computeScore, fetchJSON,
});
