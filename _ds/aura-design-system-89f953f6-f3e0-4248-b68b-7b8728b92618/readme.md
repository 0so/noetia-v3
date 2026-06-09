# Aura Design System

> The brand system for **Aura** — the AI-native email client. Dark, cinematic,
> glassy. A near-black canvas, white ink drawn at opacity, one cold blue→cyan
> gradient as the single chromatic signature, and a custom *liquid-glass* surface.

Aura is a product of **NOETIAI** — an artificial-intelligence company focused on
deep understanding and reasoning (from *noesis*: profound knowledge and insight).
Aura applies that thesis to the inbox: read every message, understand intent,
and refine the noise into clarity. The marketing promise is *"Your email.
Revitalized."*

---

## Sources

This system was built from a **written component specification** for the Aura
landing page (React 18 + TypeScript + Vite + Tailwind + `motion/react` +
`lucide-react`). There was **no external Figma file or code repository** to pull
from — the spec itself is the source of truth, reproduced exactly here:
fonts, gradient stops, the two SVG grain filters, copy strings, animation
timings, and the background video.

- **Background video** (fixed, fullscreen): `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4`
- The pricing-card copy references a product called **"Forma"** — this is preserved
  verbatim from the source spec (a copy inconsistency carried through intentionally).

> ⚠️ **Font substitution flag:** The brand face is **Inter**, loaded from Google
> Fonts (weights 400–900) via `@import` in `tokens/fonts.css`. No self-hosted
> `.woff2` binaries were provided, so consumers need network access for the font
> to resolve. If you have licensed Inter files (or a different intended brand
> face), drop them in `assets/fonts/` and I'll wire real `@font-face` rules.

---

## Content fundamentals

How Aura writes. The voice is **calm, confident, and a little cinematic** — it
sells *relief*, not features.

- **Second person, present tense.** "Clear your inbox in a single pass." "Close
  the tabs. Open your day." The reader is the subject; Aura is the quiet engine.
- **Short declaratives, often paired.** Two-beat headlines do the heavy lifting:
  *"Your email." / "Revitalized."* — *"Close the tabs." / "Open your day."*
- **Concrete over abstract.** Numbers and named nouns build trust: "closed 23
  issues, merged 14 PRs, and shipped 2 features." Never vague hype.
- **Tooling metaphor.** Email is framed as *a tool, not an obligation*; users are
  "builders, founders, and operators." The product "reads," "understands,"
  "routes," "refines."
- **Sentence case everywhere** except small uppercase kickers (`Trusted by the
  world's most thoughtful teams`) and company names in testimonials (`MERCURY`,
  `COHERE`, `LUNAR`).
- **No emoji.** No exclamation marks. The single flourish is the AI moment —
  "Summary by Aura," "Compose with Aura" — always paired with the Sparkles icon.
- **Punctuation as rhythm.** Em dashes set the aside; periods end short lines hard.

Example strings to match the register:
- Eyebrow: `Triage` · pill `AI-native`
- Lead: *"Aura is the premier inbox platform for the current era. It leverages
  powerful AI to organize, prioritize, and refine your messages into total clarity."*
- Microcopy: `Download for Intel / Apple Silicon` · `to me · 9:41 AM` · `No action needed.`

---

## Visual foundations

**Canvas & mood.** Everything lives on near-black `#0c0c0c`, behind a **fixed,
fullscreen, looping background video** (`object-cover`, muted, `playsInline`).
The mood is nocturnal and premium — light is something that *emerges* from the
dark (glass edges, the cyan gradient, a top radial glow), never a bright field.

**Color.** Monochrome by default — text is **white drawn at opacity** (100 / 70 /
60 / 50 / 40), borders are `white/10`, fills `white/5`. The only chroma is the
**signature gradient**: deep navy `#091020` → royal `#0B2551` → ice `#A4F4FD` →
electric cyan `#00d2ff`, used for the one shiny headline word, the avatar bubble,
the "Work" label dot, and the pricing watermark. Functional color is sparing:
macOS traffic lights, four inbox label dots, a white→graphite triage ramp. Brand
token `#3D81E3` is the Tailwind `brand` accent (selection highlight).

**Type.** One family — **Inter**, 400–900. The cinematic move is *scale + a single
gradient word*, not many sizes. Display is `font-semibold`, `tracking-tight`
(−0.025em), `leading-[0.9]`; body relaxes to `leading-1.5–1.6` at `white/60`.
Kickers are 11–12px uppercase, `tracking-widest`. The pricing watermark is the one
extreme: Inter 800 at **9rem**, `letter-spacing: −0.05em`.

**The shiny headline.** The accent word ("Revitalized") is gradient-clipped text
that **animates a 200%-wide background −200% → 200% over 6s linear, forever**
(`.animate-shiny`), with an SVG **grain filter** (`#c3-noise`, fractal noise,
multiply blend) layered for texture.

**Liquid glass — the signature surface.** A near-invisible luminous fill
(`rgba(255,255,255,0.01)`, `background-blend-mode: luminosity`), 4px backdrop
blur, an **inset top highlight**, and a **masked gradient ring** drawn via
`::before` (bright at top & bottom, transparent through the middle). No solid
border. This is the default container for testimonials, feature panels, the
triage stack, and the final CTA.

**Backgrounds & texture.** Full-bleed video behind everything; two faint **fixed
vertical guide lines** at the 36rem container edges (`white/10`, desktop only)
frame the composition. Two SVG grain filters add analog texture — a subtle
multiply grain on the headline, a fractal overlay watermark in pricing.
Gradients are used as *light*, not decoration: the avatar bubble, the pricing
watermark sweep, and a `radial-gradient(600px circle at 50% 0%, white/15)` glow
on the final CTA. No purple, no rainbow, no AI-slop gradients.

**Depth & blur.** Elevation reads through **backdrop-blur + a bright edge**, not
drop shadows. Blur ladder: 4px (glass, menu bar) → 12px (translucent strips) →
14px (pricing cards) → 24px (the inbox shell). Shadows appear only on
*interaction* (button hover: `0 8px 24px rgba(255,255,255,0.15)`).

**Corners & cards.** Soft, generous rounding: 6/8px on controls, **16px** on glass
cards, **24px** on the CTA, **44px** on pricing plans, full pills (100px) on
buttons, chips, and dots. Cards are defined by the glass treatment + a hairline,
never a heavy border or a colored left-accent stripe.

**Motion.** Entrances only — fade + a short upward slide, staggered (0.05–0.1s
steps), on the signature easing `cubic-bezier(0.22, 1, 0.36, 1)`. Durations
0.6–0.8s. The one infinite loop is the headline shine. Buttons use a
standard-ease 0.3s. *No bounce, no parallax, no decorative loops on content.*
(In this kit the framer-motion entrances are reproduced as CSS that defaults to
the visible end-state so capture/print/reduced-motion always show content.)

**Interaction states.** Hover lightens via opacity, not new hues: links `white/70
→ white`, ghost surfaces `→ white/5`, the white pill `→ white/90`. The CTA
chevron nudges **+1px** right on hover. Press shrinks: `active:scale-[0.98]`.
Pricing cards lift on hover (`translateY(-12px) scale(1.01)`) and the hairline
border warms to cyan.

**Layout.** A centered `max-w-6xl` (72rem) column with 24px gutters; lead copy
caps at `max-w-md` (28rem). The page is a single vertical scroll of full-width
sections with generous `py-20 / md:py-28` rhythm. Window-chrome motifs (traffic
lights, a macOS menu bar) ground the product in the native-app world.

---

## Iconography

The icon system is **[Lucide](https://lucide.dev)** (`lucide-react` in the source) —
clean 24×24 line icons at **2px stroke**, round caps and joins. Icons are used
functionally and sparingly: navigation, the reader toolbar, the search field, and
the AI **Sparkles** moment. They inherit `currentColor` and are typically drawn at
`white/60` (idle) → `white` (active).

- **In this kit**, the needed Lucide glyphs are inlined as path data in
  `ui_kits/aura_landing/shared.jsx` (`LUCIDE_PATHS`) for offline reliability —
  same paths Lucide ships. Names used: `ChevronRight, Menu, Search, Sparkles,
  Inbox, Star, Send, File, Archive, Trash2, Reply, Forward, MoreHorizontal,
  Paperclip`. To extend, copy the path from lucide.dev or load the Lucide CDN.
- **Brand marks are bespoke SVGs**, not icon-font glyphs: the **Aura logomark**
  (`assets/aura-logomark.svg`, a four-quadrant curve, used *solo* — no wordmark)
  and the **Apple mark** (`assets/apple-mark.svg`, `currentColor`) that signals
  the native macOS download.
- **No emoji. No unicode glyphs as icons.** The Sparkles icon is the single
  "magic/AI" signifier; don't substitute ✨.

---

## Index — what's in this system

**Root**
- `styles.css` — the global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so the system is usable from Claude Code.

**Tokens** (`tokens/`, all reachable from `styles.css`)
- `colors.css` — canvas, ink-at-opacity, signature gradients, functional + triage.
- `typography.css` — Inter family, weights, scale, tracking, leading, roles.
- `spacing.css` — 4px scale, section rhythm, container widths, radii, controls.
- `effects.css` — blur ladder, glass tokens, shadows, glow, motion + the
  `.liquid-glass` and `.animate-shiny` utilities.
- `fonts.css` — Inter `@import` (Google Fonts). `base.css` — reset, selection, guide lines.

**Components** (`components/`, React primitives — `window.AuraDesignSystem_89f953`)
- `brand/` — `LogoMark`, `AppleLogo`, `ShinyText` (+ `ShinyNoiseFilter`)
- `buttons/` — `AppleButton` (primary), `GhostButton` (secondary)
- `surfaces/` — `LiquidGlassCard`
- `controls/` — `Chip`, `BillingToggle`
- `layout/` — `SectionEyebrow`, `TrafficLights`

**UI kits** (`ui_kits/`)
- `aura_landing/` — the full landing-page recreation (`index.html` + section JSX).
  See its `README.md`.

**Guideline cards** (`guidelines/`) — the specimens shown in the Design System tab:
Colors (canvas, ink, gradient, functional, triage), Type (display, body, weights),
Spacing (radii, scale), Brand (liquid-glass, logomark).

**Assets** (`assets/`) — `aura-logomark.svg`, `apple-mark.svg`.

---

*Starting points:* `AppleButton` and `LiquidGlassCard` are registered as starting
points for consuming projects; the Aura landing page is the headline card in the
Design System tab.
