/* @ds-bundle: {"format":3,"namespace":"AuraDesignSystem_89f953","components":[{"name":"AppleLogo","sourcePath":"components/brand/AppleLogo.jsx"},{"name":"LogoMark","sourcePath":"components/brand/LogoMark.jsx"},{"name":"ShinyNoiseFilter","sourcePath":"components/brand/ShinyText.jsx"},{"name":"ShinyText","sourcePath":"components/brand/ShinyText.jsx"},{"name":"AppleButton","sourcePath":"components/buttons/AppleButton.jsx"},{"name":"GhostButton","sourcePath":"components/buttons/GhostButton.jsx"},{"name":"BillingToggle","sourcePath":"components/controls/BillingToggle.jsx"},{"name":"Chip","sourcePath":"components/controls/Chip.jsx"},{"name":"SectionEyebrow","sourcePath":"components/layout/SectionEyebrow.jsx"},{"name":"TrafficLights","sourcePath":"components/layout/TrafficLights.jsx"},{"name":"LiquidGlassCard","sourcePath":"components/surfaces/LiquidGlassCard.jsx"}],"sourceHashes":{"components/brand/AppleLogo.jsx":"ed6c73835f42","components/brand/LogoMark.jsx":"f26c7ff936d2","components/brand/ShinyText.jsx":"127582ad0a0d","components/buttons/AppleButton.jsx":"f1cab554758a","components/buttons/GhostButton.jsx":"2282a215c9ee","components/controls/BillingToggle.jsx":"7caa4bbf3d10","components/controls/Chip.jsx":"42143ada5eec","components/layout/SectionEyebrow.jsx":"634983ee9ae5","components/layout/TrafficLights.jsx":"efc1f15c1747","components/surfaces/LiquidGlassCard.jsx":"20d5637e0a83","ui_kits/aura_landing/App.jsx":"1fc7e1454a1e","ui_kits/aura_landing/FeatureTriage.jsx":"682dec64d8a8","ui_kits/aura_landing/FinalCTA.jsx":"34231708c4d9","ui_kits/aura_landing/Hero.jsx":"251592c545f2","ui_kits/aura_landing/Inbox.jsx":"02fddb02ac78","ui_kits/aura_landing/MenuBar.jsx":"d8d945de5438","ui_kits/aura_landing/Navbar.jsx":"363692339a6a","ui_kits/aura_landing/Pricing.jsx":"daa3f15c82c9","ui_kits/aura_landing/Social.jsx":"78cda89d556b","ui_kits/aura_landing/shared.jsx":"b2d72b792502"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AuraDesignSystem_89f953 = window.AuraDesignSystem_89f953 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AppleLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AppleLogo — inline Apple mark, inherits `currentColor`.
 * Pairs with the macOS menu bar and the download pill.
 */
function AppleLogo({
  size = 16,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 384 512",
    width: size,
    height: size,
    fill: "currentColor",
    className: className,
    style: style,
    role: "img",
    "aria-label": "Apple"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
  }));
}
Object.assign(__ds_scope, { AppleLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AppleLogo.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LogoMark — Aura's abstract 4-quadrant curve mark.
 * Pure SVG, inherits color via `fill` (default white).
 */
function LogoMark({
  size = 32,
  fill = 'var(--aura-fg)',
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 256 256",
    width: size,
    height: size,
    fill: fill,
    className: className,
    style: style,
    role: "img",
    "aria-label": "Aura"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z"
  }));
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/ShinyText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The grain filter the shiny headline samples. Render ONCE per page if you
 *  set `withFilter={false}` on ShinyText instances to avoid duplicate ids. */
function ShinyNoiseFilter() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "0",
    height: "0",
    style: {
      position: 'absolute'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "c3-noise"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.9",
    numOctaves: "2",
    stitchTiles: "stitch"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "SourceGraphic",
    operator: "in",
    result: "noise"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "noise",
    mode: "multiply"
  })));
}

/**
 * ShinyText — a word/phrase rendered in Aura's signature blue→cyan gradient
 * with a slow horizontal shine. Use for the single accent word in a headline
 * (e.g. "Revitalized"), never for whole sentences.
 */
function ShinyText({
  children,
  as: Tag = 'span',
  animate = true,
  withFilter = true,
  className = '',
  style = {},
  ...rest
}) {
  const gradientStyle = {
    backgroundImage: 'var(--aura-grad-shiny)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    filter: 'url(#c3-noise)',
    ...style
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, withFilter && /*#__PURE__*/React.createElement(ShinyNoiseFilter, null), /*#__PURE__*/React.createElement(Tag, _extends({
    className: `${animate ? 'animate-shiny' : ''} ${className}`.trim(),
    style: gradientStyle
  }, rest), children));
}
Object.assign(__ds_scope, { ShinyNoiseFilter, ShinyText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ShinyText.jsx", error: String((e && e.message) || e) }); }

// components/buttons/AppleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ChevronRight — local inline icon so the button is self-contained. */
function ChevronRight({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }));
}

/**
 * AppleButton — the primary CTA. A solid white pill with the Apple mark, a
 * label, and a chevron that nudges right on hover.
 */
function AppleButton({
  label = 'Download Aura',
  full = false,
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    className: `aura-apple-btn ${full ? 'aura-apple-btn--full' : ''} ${className}`.trim(),
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.AppleLogo, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    className: "aura-apple-btn__chev"
  }, /*#__PURE__*/React.createElement(ChevronRight, {
    size: 16
  })), /*#__PURE__*/React.createElement("style", null, `
        .aura-apple-btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: var(--aura-space-2);
          border-radius: var(--aura-radius-pill);
          background: var(--aura-fg); color: #000;
          font-family: var(--aura-font-sans);
          font-weight: var(--aura-w-medium); font-size: var(--aura-text-sm);
          padding: 12px 20px; border: none; cursor: pointer;
          transition: all var(--aura-dur-fast) var(--aura-ease-standard);
        }
        .aura-apple-btn--full { width: 100%; }
        .aura-apple-btn:hover { background: rgba(255,255,255,0.9); }
        .aura-apple-btn:active { transform: scale(0.98); }
        .aura-apple-btn__chev {
          display: inline-flex;
          transition: transform var(--aura-dur-fast) var(--aura-ease-standard);
        }
        .aura-apple-btn:hover .aura-apple-btn__chev { transform: translateX(1px); }
      `));
}
Object.assign(__ds_scope, { AppleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/AppleButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/GhostButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChevronRight({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }));
}

/**
 * GhostButton — the secondary, low-emphasis pill: transparent with a hairline
 * border that fills faintly on hover. Pairs beside an AppleButton.
 */
function GhostButton({
  label = 'Talk to sales',
  chevron = true,
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    className: `aura-ghost-btn ${className}`.trim(),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", null, label), chevron && /*#__PURE__*/React.createElement(ChevronRight, {
    size: 16
  }), /*#__PURE__*/React.createElement("style", null, `
        .aura-ghost-btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: var(--aura-space-1);
          border-radius: var(--aura-radius-pill);
          background: transparent; color: var(--aura-fg);
          border: 1px solid var(--aura-line-15);
          font-family: var(--aura-font-sans);
          font-weight: var(--aura-w-medium); font-size: var(--aura-text-sm);
          padding: 12px 20px; cursor: pointer;
          transition: background var(--aura-dur-fast) var(--aura-ease-standard);
        }
        .aura-ghost-btn:hover { background: var(--aura-fill); }
        .aura-ghost-btn:active { transform: scale(0.98); }
      `));
}
Object.assign(__ds_scope, { GhostButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/GhostButton.jsx", error: String((e && e.message) || e) }); }

// components/controls/BillingToggle.jsx
try { (() => {
/**
 * BillingToggle — the monthly/yearly pill switch from pricing. A white track
 * with a black knob; when `checked` (yearly), the track dims and the white knob
 * slides right.
 */
function BillingToggle({
  checked = false,
  onChange,
  label = 'Yearly',
  className = '',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--aura-space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--aura-text-sm)',
      color: 'var(--aura-fg-70)'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 52,
      height: 28,
      borderRadius: 'var(--aura-radius-full)',
      background: checked ? 'rgba(255,255,255,0.2)' : 'var(--aura-fg)',
      position: 'relative',
      cursor: 'pointer',
      border: 'none',
      padding: 0,
      transition: 'background var(--aura-dur-fast) var(--aura-ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--aura-radius-full)',
      background: checked ? 'var(--aura-fg)' : '#000',
      position: 'absolute',
      top: 4,
      left: 4,
      transform: checked ? 'translateX(24px)' : 'translateX(0)',
      transition: 'all var(--aura-dur-fast) var(--aura-ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { BillingToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/BillingToggle.jsx", error: String((e && e.message) || e) }); }

// components/controls/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a small capsule for tags and filters: a hairline-outlined pill on a
 * faint fill. Used in feature chip rows ("Auto-categorize", "Snooze for later").
 */
function Chip({
  children,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 'var(--aura-text-xs)',
      color: 'var(--aura-fg-70)',
      padding: '6px 12px',
      borderRadius: 'var(--aura-radius-full)',
      border: '1px solid var(--aura-line)',
      background: 'var(--aura-fill-03)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Chip.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionEyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionEyebrow — the small label that opens a section: a white dot, a label,
 * and an optional outlined tag pill.
 */
function SectionEyebrow({
  label,
  tag,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--aura-space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--aura-radius-full)',
      background: 'var(--aura-fg)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--aura-text-sm)',
      fontWeight: 'var(--aura-w-medium)',
      color: 'var(--aura-fg)'
    }
  }, label), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--aura-text-xs)',
      color: 'var(--aura-fg-50)',
      padding: '2px 8px',
      borderRadius: 'var(--aura-radius-full)',
      border: '1px solid var(--aura-line)'
    }
  }, tag));
}
Object.assign(__ds_scope, { SectionEyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionEyebrow.jsx", error: String((e && e.message) || e) }); }

// components/layout/TrafficLights.jsx
try { (() => {
/**
 * TrafficLights — the three macOS window dots (close / minimize / zoom). Used
 * on the inbox mockup title bar and any window-chrome surface.
 */
function TrafficLights({
  size = 12,
  gap = 8,
  className = '',
  style = {}
}) {
  const colors = ['var(--aura-traffic-red)', 'var(--aura-traffic-amber)', 'var(--aura-traffic-green)'];
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      gap,
      ...style
    }
  }, colors.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--aura-radius-full)',
      background: c
    }
  })));
}
Object.assign(__ds_scope, { TrafficLights });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TrafficLights.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/LiquidGlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LiquidGlassCard — Aura's signature surface. A near-invisible luminous fill
 * with a bright-edged gradient border (top & bottom brightest), drawn via a
 * masked ::before ring from the `.liquid-glass` utility.
 */
function LiquidGlassCard({
  children,
  radius = 'lg',
  // 'md' | 'lg' | 'xl'
  padding = 24,
  glow = false,
  // adds the top radial glow (final-CTA treatment)
  as: Tag = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const radiusVar = {
    md: 'var(--aura-radius-md)',
    lg: 'var(--aura-radius-lg)',
    xl: 'var(--aura-radius-xl)'
  }[radius] || 'var(--aura-radius-lg)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `liquid-glass ${className}`.trim(),
    style: {
      borderRadius: radiusVar,
      padding,
      ...style
    }
  }, rest), glow && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.3,
      pointerEvents: 'none',
      background: 'var(--aura-glow-top)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { LiquidGlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/LiquidGlassCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/App.jsx
try { (() => {
/* App — root wrapper: background video, guide lines, root noise filter,
   and the full section sequence. */
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-0 pointer-events-none"
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: "w-full h-full object-cover pointer-events-none",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]"
  }), /*#__PURE__*/React.createElement("svg", {
    width: "0",
    height: "0",
    style: {
      position: 'absolute'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "c3-noise"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.9",
    numOctaves: "2",
    stitchTiles: "stitch"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "SourceGraphic",
    operator: "in",
    result: "noise"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "noise",
    mode: "multiply"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(MenuBar, null), /*#__PURE__*/React.createElement(Inbox, null), /*#__PURE__*/React.createElement(FeatureTriage, null), /*#__PURE__*/React.createElement(LogoCloud, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(FinalCTA, null)));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/FeatureTriage.jsx
try { (() => {
/* FeatureTriage — two-column: copy left, triage stack right. */
const TRIAGE_GROUPS = [{
  label: 'Priority',
  count: 4,
  color: '#ffffff',
  items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff']
}, {
  label: 'Follow-up',
  count: 7,
  color: '#e5e5e5',
  items: ['Marcus — design review', 'Figma — comment thread']
}, {
  label: 'Updates',
  count: 18,
  color: '#a3a3a3',
  items: ['Vercel — deploy ready', 'GitHub — PR #482 merged']
}, {
  label: 'Archived',
  count: 13,
  color: '#525252',
  items: ['Stripe payout · Newsletter · Receipts']
}];
function FeatureTriage() {
  const chips = ['Auto-categorize', 'Snooze for later', 'Silent newsletters', 'One-tap unsubscribe'];
  return /*#__PURE__*/React.createElement("section", {
    className: "max-w-6xl mx-auto px-6 py-20 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-10 md:gap-16 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    label: "Triage",
    tag: "AI-native"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]"
  }, "Clear your inbox", /*#__PURE__*/React.createElement("br", null), "in a single pass."), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-white/60 text-base leading-[1.6] max-w-md"
  }, "Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward \u2014 the rest handles itself."), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-wrap gap-2"
  }, chips.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "reveal liquid-glass rounded-2xl p-5",
    style: {
      animationDelay: '0.15s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-white/50 mb-4"
  }, "Today \xB7 42 messages triaged"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, TRIAGE_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    className: "liquid-glass rounded-lg p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full",
    style: {
      background: g.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-white"
  }, g.label)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-white/40"
  }, g.count)), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex flex-col gap-1"
  }, g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    className: "text-xs text-white/50"
  }, it)))))))));
}
window.FeatureTriage = FeatureTriage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/FeatureTriage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/FinalCTA.jsx
try { (() => {
/* FinalCTA — glass panel with radial glow. */
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "max-w-6xl mx-auto px-6 py-20 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.3,
      pointerEvents: 'none',
      background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]"
  }, "Close the tabs.", /*#__PURE__*/React.createElement("br", null), "Open your day."), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]"
  }, "Join thousands of builders, founders, and operators who treat email like a tool \u2014 not an obligation."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap items-center justify-center gap-3"
  }, /*#__PURE__*/React.createElement(AppleButton, {
    label: "Download Aura"
  }), /*#__PURE__*/React.createElement("button", {
    className: "inline-flex items-center gap-1 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
  }, "Talk to sales", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 16
  }))))));
}
window.FinalCTA = FinalCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/FinalCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/Hero.jsx
try { (() => {
/* Hero — two-line headline with the shiny "Revitalized" word + lead + CTA. */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pt-16 md:pt-28 pb-20 text-center flex flex-col items-center px-6"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "reveal text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block text-white"
  }, "Your email."), /*#__PURE__*/React.createElement("span", {
    className: "block animate-shiny",
    style: gradientStyle
  }, "Revitalized")), /*#__PURE__*/React.createElement("p", {
    className: "reveal text-white/60 max-w-md text-base leading-[1.5] mt-8",
    style: {
      animationDelay: '0.2s'
    }
  }, "Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and refine your messages into total clarity."), /*#__PURE__*/React.createElement("div", {
    className: "reveal mt-8 flex flex-col items-center gap-3",
    style: {
      animationDelay: '0.35s'
    }
  }, /*#__PURE__*/React.createElement(AppleButton, null), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-white/40"
  }, "Download for Intel / Apple Silicon")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/Inbox.jsx
try { (() => {
/* Inbox — the realistic three-pane inbox mockup. */
const AURA_MESSAGES = [{
  name: 'Linear',
  subject: 'Weekly product digest',
  preview: 'Your team shipped 23 issues this week...',
  time: '9:41 AM',
  unread: true,
  active: true
}, {
  name: 'Sophia Chen',
  subject: 'Re: Q3 roadmap review',
  preview: 'Thanks for sending the deck over. I had a few thoughts...',
  time: '8:12 AM',
  unread: true
}, {
  name: 'Figma',
  subject: 'Marcus commented on your file',
  preview: 'Love the new direction on the landing hero.',
  time: 'Yesterday'
}, {
  name: 'Stripe',
  subject: 'Payout of $12,480.00 sent',
  preview: 'Your payout is on its way to your bank...',
  time: 'Yesterday'
}, {
  name: 'Vercel',
  subject: 'Deployment ready for aura-web',
  preview: 'Preview is live at aura-web-g3f.vercel.app',
  time: 'Mon'
}, {
  name: 'GitHub',
  subject: '[aura/core] PR #482 approved',
  preview: 'david-lim approved your pull request.',
  time: 'Mon'
}];
const AURA_NAV = [{
  icon: 'Inbox',
  label: 'Inbox',
  count: 12,
  active: true
}, {
  icon: 'Star',
  label: 'Starred',
  count: 3
}, {
  icon: 'Send',
  label: 'Sent'
}, {
  icon: 'File',
  label: 'Drafts',
  count: 2
}, {
  icon: 'Archive',
  label: 'Archive'
}, {
  icon: 'Trash2',
  label: 'Trash'
}];
const AURA_LABELS = [{
  name: 'Work',
  color: '#00d2ff'
}, {
  name: 'Personal',
  color: '#A4F4FD'
}, {
  name: 'Travel',
  color: '#f59e0b'
}, {
  name: 'Finance',
  color: '#10b981'
}];
function InboxSidebar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-span-3 border-r border-white/10 bg-black/30 p-4 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Sparkles",
    size: 14
  }), "Compose with Aura"), /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-col gap-0.5"
  }, AURA_NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.label,
    className: 'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ' + (n.active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "flex-1 text-left"
  }, n.label), n.count != null && /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-white/40"
  }, n.count)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase tracking-widest text-white/40 px-3 mb-2"
  }, "Labels"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-0.5"
  }, AURA_LABELS.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    className: "flex items-center gap-3 px-3 py-1.5 text-sm text-white/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full",
    style: {
      background: l.color
    }
  }), l.name)))));
}
function InboxList() {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-span-4 border-r border-white/10 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-4 h-12 border-b border-white/10 text-white/40"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "Search mail")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-hidden"
  }, AURA_MESSAGES.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'px-4 py-3 border-b border-white/5 cursor-pointer transition-colors ' + (m.active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]')
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 min-w-0"
  }, m.unread && /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-[#00d2ff] flex-shrink-0"
  }), /*#__PURE__*/React.createElement("span", {
    className: 'text-sm truncate ' + (m.unread ? 'font-semibold text-white' : 'text-white/70')
  }, m.name)), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-white/40 flex-shrink-0"
  }, m.time)), /*#__PURE__*/React.createElement("div", {
    className: 'text-sm truncate mt-0.5 ' + (m.unread ? 'text-white/90' : 'text-white/60')
  }, m.subject), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-white/40 truncate mt-0.5"
  }, m.preview)))));
}
function InboxReader() {
  const tools = ['Reply', 'Forward', 'Archive', 'Trash2'];
  return /*#__PURE__*/React.createElement("div", {
    className: "col-span-5 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-4 h-12 border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1"
  }, tools.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t,
    size: 15
  })))), /*#__PURE__*/React.createElement("button", {
    className: "w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MoreHorizontal",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-hidden px-6 py-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold tracking-tight"
  }, "Weekly product digest"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-semibold"
  }, "L"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium"
  }, "Linear"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-white/50"
  }, "to me \xB7 9:41 AM")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/60"
  }, "Work")), /*#__PURE__*/React.createElement("div", {
    className: "liquid-glass rounded-lg p-3 mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-xs font-medium",
    style: {
      color: '#A4F4FD'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Sparkles",
    size: 14
  }), "Summary by Aura"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-white/70 leading-[1.5] mt-2"
  }, "Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 space-y-3 text-sm text-white/80 leading-[1.6]"
  }, /*#__PURE__*/React.createElement("p", null, "Hi team,"), /*#__PURE__*/React.createElement("p", null, "Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap."), /*#__PURE__*/React.createElement("p", null, "Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb."), /*#__PURE__*/React.createElement("p", null, "Let me know if you would like a deeper breakdown by project or contributor."), /*#__PURE__*/React.createElement("p", {
    className: "text-white/50"
  }, "\u2014 The Linear team")), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-white/70"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Paperclip",
    size: 14
  }), "digest-may-6.pdf")));
}
function Inbox() {
  return /*#__PURE__*/React.createElement("section", {
    className: "max-w-6xl mx-auto px-6 py-16 md:py-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-10 px-4 border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full",
    style: {
      background: '#ff5f57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full",
    style: {
      background: '#febc2e'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full",
    style: {
      background: '#28c840'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "mx-auto text-xs text-white/50"
  }, "Aura \u2014 Inbox")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 h-[520px]"
  }, /*#__PURE__*/React.createElement(InboxSidebar, null), /*#__PURE__*/React.createElement(InboxList, null), /*#__PURE__*/React.createElement(InboxReader, null))));
}
window.Inbox = Inbox;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/Inbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/MenuBar.jsx
try { (() => {
/* MenuBar — full-width macOS menu strip. */
function MenuBar() {
  const items = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10",
    style: {
      animationDelay: '0.5s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(AppleLogo, {
    className: "w-3.5 h-3.5 text-white"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-white"
  }, "Aura"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 text-white/70"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it,
    className: (i > 2 ? 'hidden sm:inline ' : '') + (i > 3 ? 'hidden md:inline' : '')
  }, it)))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 text-white/70"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Wed May 6 1:09 PM"))));
}
window.MenuBar = MenuBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/MenuBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/Navbar.jsx
try { (() => {
/* Navbar — logomark only (no wordmark), centered nav links, download pill. */
function Navbar() {
  const links = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'];
  return /*#__PURE__*/React.createElement("nav", {
    className: "reveal max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(LogoMark, {
    className: "w-8 h-8 text-white"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex gap-8"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "text-white/70 text-sm font-medium hover:text-white transition-colors"
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/React.createElement(AppleButton, null)), /*#__PURE__*/React.createElement("button", {
    className: "md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Menu",
    size: 18,
    className: "text-white"
  })));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/Pricing.jsx
try { (() => {
/* Pricing — watermark headline backdrop + three plan cards + billing toggle. */
const PLANS = [{
  tier: 'Free',
  priceM: 'Free',
  priceY: 'Free',
  desc: 'For creators taking their first steps with Forma.',
  features: ['Up to 3 projects in the cloud', 'Image export up to 1080p', 'Basic editing tools', 'Free templates and icons', 'Access via web and mobile app']
}, {
  tier: 'Standard',
  priceM: '$9,99/m',
  priceY: '$99,99/y',
  desc: 'For freelancers and small teams who need more freedom and flexibility.',
  features: ['Up to 50 projects in the cloud', 'Export up to 4K', 'Advanced editing toolkit', 'Team collaboration (up to 5 members)', 'Access to premium template library']
}, {
  tier: 'Pro',
  pro: true,
  priceM: '$19,99/m',
  priceY: '$199,99/y',
  desc: 'For studios, agencies, and professional creators working with brands.',
  features: ['Unlimited projects', 'Export up to 8K + animations', 'AI-powered content generation tools', 'Unlimited team members', 'Brand customization']
}];
function CheckRow({
  children
}) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "c3-check"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("span", null, children));
}
function Pricing() {
  const [yearly, setYearly] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "c3-pricing-section"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "0",
    height: "0",
    style: {
      position: 'absolute'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "c3-noise"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.5",
    numOctaves: "2",
    stitchTiles: "stitch"
  }), /*#__PURE__*/React.createElement("feComponentTransfer", null, /*#__PURE__*/React.createElement("feFuncA", {
    type: "linear",
    slope: "0.075"
  })), /*#__PURE__*/React.createElement("feComposite", {
    in2: "SourceGraphic",
    operator: "in",
    result: "noise"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "noise",
    mode: "overlay"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "c3-watermark-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c3-watermark-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c3-watermark-line-1"
  }, "Your email."), /*#__PURE__*/React.createElement("span", {
    className: "c3-watermark-line-2"
  }, "Revitalized"))), /*#__PURE__*/React.createElement("div", {
    className: "c3-grid"
  }, PLANS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.tier,
    className: 'c3-card' + (p.pro ? ' c3-card-pro' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "c3-tier-small"
  }, p.tier), /*#__PURE__*/React.createElement("div", {
    className: "c3-tier-large"
  }, yearly ? p.priceY : p.priceM), /*#__PURE__*/React.createElement("div", {
    className: "c3-desc"
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    className: "c3-list"
  }, p.features.map(f => /*#__PURE__*/React.createElement(CheckRow, {
    key: f
  }, f))), /*#__PURE__*/React.createElement("button", {
    className: "c3-btn"
  }, "Choose Plan")))), /*#__PURE__*/React.createElement("div", {
    className: "c3-toggle-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c3-toggle-label"
  }, "Yearly"), /*#__PURE__*/React.createElement("button", {
    className: 'c3-toggle' + (yearly ? ' active' : ''),
    onClick: () => setYearly(v => !v),
    role: "switch",
    "aria-checked": yearly
  }, /*#__PURE__*/React.createElement("span", {
    className: "c3-toggle-knob"
  }))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/Social.jsx
try { (() => {
/* LogoCloud + Testimonials. */
function LogoCloud() {
  const names = ['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc'];
  return /*#__PURE__*/React.createElement("section", {
    className: "max-w-6xl mx-auto px-6 py-16 md:py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-widest text-white/40 text-center"
  }, "Trusted by the world's most thoughtful teams"), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
  }, names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors text-center"
  }, n))));
}
const TESTIMONIALS = [{
  quote: 'Aura gave our leadership team four hours of their week back. It reads like email from the future.',
  name: 'Parker Wilf',
  role: 'Group Product Manager',
  company: 'MERCURY'
}, {
  quote: "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client.",
  name: 'Andrew von Rosenbach',
  role: 'Senior Engineering Program Manager',
  company: 'COHERE'
}, {
  quote: 'Triage that actually understands context. Our team stopped dreading Monday morning inboxes.',
  name: 'Mathies Christensen',
  role: 'Engineering Manager',
  company: 'LUNAR'
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    className: "max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, TESTIMONIALS.map(t => /*#__PURE__*/React.createElement("figure", {
    key: t.name,
    className: "liquid-glass rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "text-sm text-white/80 leading-[1.6]"
  }, "\u201C", t.quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-6 pt-5 border-t border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-white/50"
  }, t.role), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-white font-semibold tracking-wide mt-1"
  }, t.company))))));
}
window.LogoCloud = LogoCloud;
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/Social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aura_landing/shared.jsx
try { (() => {
/* ============================================================
   AURA LANDING — shared primitives & icons
   Recreates the spec's AppleLogo / LogoMark / AppleButton /
   SectionEyebrow plus a Lucide icon renderer. Exports to window
   so sibling babel scripts can use them.
   ============================================================ */

const gradientStyle = {
  backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)'
};

/* Inline Lucide glyphs (24×24, 2px stroke) — the set this page uses. */
const LUCIDE_PATHS = {
  ChevronRight: '<path d="m9 18 6-6-6-6"/>',
  Menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  Search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  Sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  Inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  Star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  Send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  File: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
  Archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  Trash2: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  Reply: '<polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>',
  Forward: '<polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/>',
  MoreHorizontal: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  Paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>'
};
function Icon({
  name,
  size = 16,
  className = '',
  strokeWidth = 2,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: LUCIDE_PATHS[name] || ''
    }
  });
}
function AppleLogo({
  className = 'w-4 h-4'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 384 512",
    fill: "currentColor",
    className: className,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
  }));
}
function LogoMark({
  className = 'w-8 h-8'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 256 256",
    className: className,
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z"
  }));
}
function AppleButton({
  label = 'Download Aura',
  full = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: 'group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ' + (full ? 'w-full' : '')
  }, /*#__PURE__*/React.createElement(AppleLogo, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 16,
    className: "transition-transform group-hover:translate-x-[1px]"
  }));
}
function SectionEyebrow({
  label,
  tag
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-white"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-white"
  }, label), tag && /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs"
  }, tag));
}
Object.assign(window, {
  gradientStyle,
  Icon,
  AppleLogo,
  LogoMark,
  AppleButton,
  SectionEyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aura_landing/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AppleLogo = __ds_scope.AppleLogo;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.ShinyNoiseFilter = __ds_scope.ShinyNoiseFilter;

__ds_ns.ShinyText = __ds_scope.ShinyText;

__ds_ns.AppleButton = __ds_scope.AppleButton;

__ds_ns.GhostButton = __ds_scope.GhostButton;

__ds_ns.BillingToggle = __ds_scope.BillingToggle;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.SectionEyebrow = __ds_scope.SectionEyebrow;

__ds_ns.TrafficLights = __ds_scope.TrafficLights;

__ds_ns.LiquidGlassCard = __ds_scope.LiquidGlassCard;

})();
