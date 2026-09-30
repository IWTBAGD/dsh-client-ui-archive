window.__ModuleLoader__.load({
  id: "@deepseek-ai/dsh-client-ui-archive",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    const react = require("react");
    const jsx = require("react/jsx-runtime").jsx;

    const PLUGIN_ID = "@deepseek-ai/dsh-client-ui-archive";

    /* ------------------------------------------------------------------
     * 1970s retro-futurist research-institute archive palette.
     * 炭黑 charcoal / 灰青 teal / 芥末黄 mustard / 氧化红 oxide / 旧象牙白 ivory
     * ------------------------------------------------------------------ */
    const P = {
      c0: "#2a2a27", c1: "#31312d", c2: "#383834", c3: "#40403b", c4: "#22221e",
      p0: "#f7f6ee", p1: "#f2f1e7", p2: "#ebeade", p3: "#e4e3d7", p4: "#dcdacd",
      i0: "#262623", i1: "#3a3a34", i2: "#4c4c45", i3: "#75756b", i4: "#8f8b7b",
      teal: "#6c9c88", tealD: "#4b8a78",
      mustard: "#c19a3c", mustardD: "#a8821a",
      oxide: "#a94a3a", oxideD: "#a8442e",
      g1: "#6a685e", g2: "#828074", g3: "#8f8b7b", g4: "#b0ac98"
    };

    const TOKENS = {
      "--dsw-alias-bg-base": { light: P.p3, dark: P.c0 },
      "--dsw-alias-bg-layer-1": { light: P.p2, dark: P.c1 },
      "--dsw-alias-bg-layer-2": { light: P.p1, dark: P.c2 },
      "--dsw-alias-bg-layer-3": { light: P.p0, dark: P.c3 },
      "--dsw-alias-bg-module-platform": { light: P.p4, dark: P.c1 },
      "--dsw-alias-bg-multi-select": { light: P.p4, dark: P.c1 },
      "--dsw-alias-bg-overlay": { light: P.p1, dark: P.c1 },
      "--dsw-alias-bg-skeleton": { light: "rgba(38,38,35,.08)", dark: "rgba(216,212,189,.08)" },
      "--dsw-alias-border-l1": { light: "rgba(38,38,35,.12)", dark: "rgba(216,212,189,.14)" },
      "--dsw-alias-border-l2": { light: "rgba(38,38,35,.20)", dark: "rgba(216,212,189,.22)" },
      "--dsw-alias-border-l3": { light: "rgba(38,38,35,.28)", dark: "rgba(216,212,189,.30)" },
      "--dsw-alias-border-l4": { light: "rgba(38,38,35,.40)", dark: "rgba(216,212,189,.40)" },
      "--dsw-alias-border-l2-darkmode-thin": { light: "rgba(38,38,35,.20)", dark: "rgba(216,212,189,.14)" },
      "--dsw-alias-border-inverted": { light: "rgba(0,0,0,0)", dark: "rgba(216,212,189,.10)" },
      "--dsw-alias-border-inverted2": { light: "rgba(0,0,0,0)", dark: "rgba(216,212,189,.14)" },
      "--dsw-alias-brand-primary": { light: P.mustardD, dark: P.mustard },
      "--dsw-alias-brand-primary-invert": { light: P.i0, dark: "#d8d4bd" },
      "--dsw-alias-brand-text": { light: P.i0, dark: "#d8d4bd" },
      "--dsw-alias-brand-primary-new-colorprimary-new-color": { light: P.tealD, dark: P.teal },
      "--dsw-alias-label-primary": { light: P.i0, dark: "#d8d4bd" },
      "--dsw-alias-label-secondary": { light: "#4e5f57", dark: "#9ab0a3" },
      "--dsw-alias-label-tertiary": { light: "#6a6049", dark: "#a49a7c" },
      "--dsw-alias-label-caption": { light: "#857035", dark: "#a8945c" },
      "--dsw-alias-label-dimmed": { light: P.g4, dark: "#55544c" },
      "--dsw-alias-label-primary-dimmed": { light: P.i1, dark: "#cdcbbf" },
      "--dsw-alias-label-primary-foreground": { light: P.p3, dark: P.i0 },
      "--dsw-alias-label-primary-inverted": { light: P.p3, dark: P.i0 },
      "--dsw-alias-label-primary-bluish": { light: P.i0, dark: "#d8d4bd" },
      "--dsw-alias-link": { light: P.tealD, dark: P.teal },
      "--dsw-alias-state-business-primary": { light: P.mustardD, dark: P.mustard },
      "--dsw-alias-state-business-tertiary": { light: P.p1, dark: P.c2 },
      "--dsw-alias-state-error-primary": { light: P.oxideD, dark: P.oxide },
      "--dsw-alias-state-error-secondary": { light: P.oxide, dark: "#c1654f" },
      "--dsw-alias-state-success-primary": { light: P.tealD, dark: P.teal },
      "--dsw-alias-state-success-secondary": { light: P.teal, dark: "#8fb5a5" },
      "--dsw-alias-state-success-tertiary": { light: P.p3, dark: P.c2 },
      "--dsw-alias-state-warn-primary": { light: P.mustardD, dark: P.mustard },
      "--dsw-alias-state-warn-secondary": { light: P.mustard, dark: "#d2ac4e" },
      "--dsw-alias-state-warn-tertiary": { light: "#f5ecd4", dark: "#33290f" },
      "--dsw-alias-state-warn-label": { light: P.mustardD, dark: P.mustard },
      "--dsw-alias-button-primary-fill": { light: P.mustardD, dark: P.mustard },
      "--dsw-alias-button-primary-hover": { light: "#8a6a2a", dark: "#af9c5d" },
      "--dsw-alias-button-primary-dimmed": { light: P.p4, dark: P.c1 },
      "--dsw-alias-button-contrast-fill": { light: P.i0, dark: "#d8d4bd" },
      "--dsw-alias-button-elevated-fill": { light: P.p1, dark: P.c1 },
      "--dsw-alias-button-floating-fill": { light: P.p1, dark: P.c1 },
      "--dsw-alias-button-floating-hover": { light: P.p2, dark: P.c2 },
      "--dsw-alias-button-ghost-active-fill": { light: P.p4, dark: P.c3 },
      "--dsw-alias-button-ghost-active-hover": { light: "#d5d3c6", dark: "#47463f" },
      "--dsw-alias-button-ghost-active-border": { light: P.g1, dark: P.g2 },
      "--dsw-alias-button-info-fill": { light: P.tealD, dark: P.teal },
      "--dsw-alias-button-info-hover": { light: P.teal, dark: "#8fb5a5" },
      "--dsw-alias-button-tool-bar-fill": { light: "rgba(38,38,35,.40)", dark: "rgba(216,212,189,.25)" },
      "--dsw-alias-button-tool-bar-fill-invisible": { light: "rgba(38,38,35,.20)", dark: "rgba(216,212,189,.15)" },
      "--dsw-alias-button-tool-bar-hover": { light: "rgba(38,38,35,.50)", dark: "rgba(216,212,189,.35)" },
      "--dsw-alias-interactive-bg-hover": { light: "rgba(38,38,35,.06)", dark: "rgba(216,212,189,.08)" },
      "--dsw-alias-interactive-bg-hover-solid": { light: P.p2, dark: P.c3 },
      "--dsw-alias-interactive-bg-active": { light: "rgba(38,38,35,.10)", dark: "rgba(216,212,189,.14)" },
      "--dsw-alias-interactive-bg-hover-accent": { light: "rgba(168,130,26,.16)", dark: "rgba(193,154,60,.22)" },
      "--dsw-alias-interactive-bg-hover-danger": { light: "rgba(168,68,46,.08)", dark: "rgba(169,74,58,.16)" },
      "--dsw-alias-markdown-code-block": { light: P.p1, dark: P.c4 },
      "--dsw-alias-markdown-code-block-banner": { light: P.p2, dark: P.c0 },
      "--dsw-alias-markdown-inline-code": { light: P.p2, dark: P.c0 },
      "--dsw-alias-markdown-code-segment-selected": { light: P.p3, dark: P.c1 },
      "--dsw-alias-markdown-code-segment-unselected": { light: P.p4, dark: P.c0 },
      "--dsw-alias-markdown-citation": { light: P.p4, dark: P.c1 },
      "--dsw-alias-markdown-placeholder": { light: P.g4, dark: "#55544c" },
      "--dsw-alias-markdown-tag": { light: P.p4, dark: P.c1 },
      "--dsw-alias-scrollbar-bg-l1": { light: P.g4, dark: "#55544c" },
      "--dsw-alias-scrollbar-bg-l2": { light: P.g3, dark: P.g1 },
      "--dsw-alias-scrollbar-hover-l1": { light: P.g3, dark: P.g1 },
      "--dsw-alias-scrollbar-hover-l2": { light: P.i3, dark: P.g2 },
      "--dsw-alias-toast-bg": { light: P.i1, dark: P.c1 },
      "--dsw-alias-tooltip-bg": { light: P.i1, dark: P.c1 },
      "--dsw-specific-sidebar-fill": { light: P.p4, dark: P.c4 },
      "--dsw-specific-sidebar-nav-item-hover": { light: "#d5d3c6", dark: P.c1 },
      "--dsw-specific-sidebar-nav-item-active": { light: "#cfcdc0", dark: P.c2 },
      "--dsw-specific-sidebar-nav-item-active-accent": { light: P.mustardD, dark: P.mustard },
      "--dsw-specific-input-major": { light: P.p3, dark: P.c0 },
      "--dsw-specific-login-input": { light: P.p2, dark: P.c0 },
      "--dsw-specific-menu": { light: P.p1, dark: P.c1 },
      "--dsw-specific-selector": { light: P.p2, dark: P.c1 },
      "--dsw-specific-bubble": { light: P.p2, dark: P.c1 },
      "--dsw-specific-bubble-highlight": { light: P.p4, dark: P.c2 },
      "--dsw-specific-tip": { light: P.p2, dark: P.c1 }
    };

    const NOISE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

    const EMBLEM_SVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="#6c9c88" stroke-width="1.5"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="#c19a3c" stroke-width="1.1"/><circle cx="12" cy="12" r="1.6" fill="#a94a3a"/><g stroke="#6c9c88" stroke-width="1.2"><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/></g></svg>';
    const EMBLEM_DATA_URI = "data:image/svg+xml," + encodeURIComponent(EMBLEM_SVG);

    /* ------------------------------------------------------------------
     * Global archive stylesheet: accent remap, terminal skin, print-flat
     * elevation, film grain, tricolor stripes, semantic markdown chrome,
     * slot occupants (brand name / emblem / hero whale) and footer.
     * ------------------------------------------------------------------ */
    const ARCHIVE_CSS = `
/* static accent ramps -> archive hues */
body {
  --dsw-static-deepseek-50:#eaf0ec; --dsw-static-deepseek-100:#d8e4dd;
  --dsw-static-deepseek-200:#bad1c6; --dsw-static-deepseek-300:#92b6a7;
  --dsw-static-deepseek-400:#6c9c88; --dsw-static-deepseek-450:#5d8d7a;
  --dsw-static-deepseek-500:#4b8a78; --dsw-static-deepseek-600:#3f7567;
  --dsw-static-deepseek-800:#2f4c45; --dsw-static-deepseek-900:#253a35;
  --dsw-static-amber-100:#f5ecd4; --dsw-static-amber-400:#d2ac4e;
  --dsw-static-amber-500:#c19a3c; --dsw-static-amber-600:#a8821a; --dsw-static-amber-900:#33290f;
  --dsw-static-red-50:#f8ece9; --dsw-static-red-100:#efd5cd;
  --dsw-static-red-400:#c1654f; --dsw-static-red-500:#a94a3a; --dsw-static-red-600:#a8442e; --dsw-static-red-900:#3a1a14;
  --dsw-static-green-100:#dcebe4; --dsw-static-green-400:#6c9c88; --dsw-static-green-500:#4b8a78; --dsw-static-green-900:#23372f;
  --dsw-static-blue-50:#eaf0ec; --dsw-static-blue-75:#d8e4dd; --dsw-static-blue-100:#dcebe4;
  --dsw-static-blue-300:#92b6a7; --dsw-static-blue-400:#6c9c88; --dsw-static-blue-450:#5d8d7a;
  --dsw-static-blue-500:#4b8a78; --dsw-static-blue-600:#3f7567; --dsw-static-blue-800:#2f4c45;
  --dsw-static-blue-900:#253a35; --dsw-static-blue-950:#1b2a25;
}

/* terminal-as-skin: monospace chrome, constructivist print corners */
:root, body {
  --dsw-font-family: "SF Mono","JetBrains Mono","Fira Code",Consolas,"Liberation Mono",Menlo,monospace;
  --ds-font-family-code: "SF Mono","JetBrains Mono","Fira Code",Consolas,"Liberation Mono",Menlo,monospace;
}
body { --dsw-corner-shape: superellipse(0.5); }

/* print-flat elevation: hairline strokes, softened shadows */
body, body * {
  --dsw-elevation-stroke-color: var(--dsw-alias-border-l3);
  --dsw-shadow-lv1: 0 1px 2px rgba(0,0,0,.10);
  --dsw-shadow-lv2: 0 2px 6px rgba(0,0,0,.12);
  --dsw-shadow-lv3: 0 4px 14px rgba(0,0,0,.16);
}

/* film grain over everything */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2147483647;
  background-image: url("${NOISE}");
  background-size: 160px 160px;
  opacity: .06;
  mix-blend-mode: overlay;
}

/* solid tricolor signature stripes (left edge) */
body::before {
  content: "";
  position: fixed;
  top: 0; left: 0; bottom: 0;
  width: 20px;
  pointer-events: none;
  z-index: 2147483645;
  opacity: .95;
  background: linear-gradient(90deg,
    #6c9c88 0 6px, transparent 6px 8px,
    #c19a3c 8px 14px, transparent 14px 16px,
    #a94a3a 16px 20px);
}

::selection { background: rgba(193,154,60,.35); }
*:focus-visible { outline-color: #a8821a; }

*::-webkit-scrollbar { width: 10px; height: 10px; }
*::-webkit-scrollbar-track { background: transparent; }
*::-webkit-scrollbar-thumb { background: var(--dsw-alias-scrollbar-bg-l2); border: 2px solid transparent; background-clip: content-box; }
*::-webkit-scrollbar-thumb:hover { background: var(--dsw-alias-scrollbar-hover-l2); border: 2px solid transparent; background-clip: content-box; }

/* constructivist markdown chrome (semantic tags only) */
pre { border-left: 3px solid var(--dsw-alias-brand-primary); border-radius: 0 var(--dsw-corner-shape) var(--dsw-corner-shape) 0; }
code { font-family: var(--ds-font-family-code); }
blockquote { border-left: 3px solid var(--dsw-alias-state-error-primary); margin-left: 0; padding-left: 14px; color: var(--dsw-alias-label-secondary); }
hr { border: 0; border-top: 1px dashed var(--dsw-alias-border-l3); }

/* --- slot occupants --- */
.archive-emblem-slot { display: inline-flex; flex: 0 0 auto; }
.archive-emblem-slot svg { width: 100%; height: 100%; display: block; }
.archive-brand-name {
  font-family: "Space Grotesk","Archivo","IBM Plex Sans","Helvetica Neue",Arial,sans-serif;
  font-weight: 900;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  white-space: nowrap;
  color: var(--dsw-alias-label-primary);
  text-shadow: -1.5px 0 0 rgba(169,74,58,.62), 1.5px 0 0 rgba(108,156,136,.62);
}
/* --- brand override: force the archive wordmark + emblem regardless of the
   single-slot election against the official brand. The slot occupant (official
   FishLogo/wordmark OR our own best-effort entry) is forcibly removed with
   !important so exactly one emblem + one wordmark ever render. --- */
body .hHd-Xa_brandName > *,
body .hHd-Xa_brandMark > *,
body .hHd-Xa_railMark > *,
body ._2H3hWW_brandName > *,
body ._2H3hWW_brandMark > *,
body ._2H3hWW_railMark > * {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  pointer-events: none !important;
}
body .hHd-Xa_brandName::after,
body ._2H3hWW_brandName::after {
  content: "DEEPSEEK HARNESS" !important;
  font-family: "Space Grotesk","Archivo","IBM Plex Sans","Helvetica Neue",Arial,sans-serif !important;
  font-weight: 900 !important;
  font-size: 14px !important;
  line-height: 24px !important;
  letter-spacing: -0.015em !important;
  white-space: nowrap;
  color: var(--dsw-alias-label-primary);
  text-shadow: -1.5px 0 0 rgba(169,74,58,.62), 1.5px 0 0 rgba(108,156,136,.62) !important;
}
body .hHd-Xa_brandMark::before,
body .hHd-Xa_railMark::before,
body ._2H3hWW_brandMark::before,
body ._2H3hWW_railMark::before {
  content: "" !important;
  width: 24px !important;
  height: 24px !important;
  display: inline-block !important;
  flex: none !important;
  background: url("${EMBLEM_DATA_URI}") no-repeat center !important;
  background-size: 100% 100% !important;
}

/* composer terminal prompt (▸) + blinking block cursor (█) */
body [data-composer-placeholder]::before {
  content: "▸ ";
  color: var(--dsw-alias-brand-primary);
  font-weight: 700;
}
body [data-composer-placeholder]::after {
  content: "█";
  color: var(--dsw-alias-brand-primary);
  animation: archive-cursor-blink 1.06s steps(1) infinite;
}
@keyframes archive-cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  body [data-composer-placeholder]::after { animation: none; }
}

.archive-hero-whale { display: block; }
.archive-record-tail {
  font-family: var(--dsw-font-family);
  font-size: 10px;
  letter-spacing: .26em;
  line-height: 1;
  color: var(--dsw-alias-brand-primary);
  text-transform: uppercase;
  padding: 2px 0 0;
  user-select: none;
  white-space: nowrap;
}

/* archive tool-call records: colored left accent (constructivist ledger) */
[data-tool] {
  border-left: 2px solid var(--dsw-alias-state-success-primary);
  padding-left: 10px;
  margin: 2px 0;
}
[data-tool][data-state="running"] {
  border-left-color: var(--dsw-alias-state-business-primary);
}

/* shift the whole app frame right so the tricolor stripe gutter stays clear —
   keeps both expanded sidebar and collapsed rail fully intact (no icon clipping) */
body .pI_x6G_frame, body .BynINW_frame { margin-left: 20px; }

/* constructivist column dividers: dashed ledger hairlines + instrument grip */
body .pI_x6G_sidebarCol, body .BynINW_sidebarCol { border-right: 1px dashed var(--dsw-alias-border-l3); }
body .P3OORG_panel[data-sidebar-right-open], body .OUqwTW_panel[data-sidebar-right-open] { border-left: 1px dashed var(--dsw-alias-border-l3); }
body .pI_x6G_handle::after, body .BynINW_handle::after {
  content: "";
  position: absolute;
  top: 0; bottom: 0; left: 50%;
  border-left: 1px dotted var(--dsw-alias-border-l2);
}

/* --- footer signature --- */
.archive-footer {
  position: fixed;
  left: 30px; bottom: 8px;
  z-index: 2147483641;
  pointer-events: none;
  font-family: var(--dsw-font-family);
  font-size: 8.5px;
  letter-spacing: .2em;
  color: var(--dsw-alias-label-tertiary);
  text-transform: uppercase;
  opacity: .8;
}
`;

    function installStyles(ctx) {
      if (typeof document === "undefined") return;
      ctx.effect(() => {
        const tag = document.createElement("style");
        tag.dataset.plugin = PLUGIN_ID;
        tag.dataset.pluginCss = `${PLUGIN_ID}/archive.css`;
        tag.textContent = ARCHIVE_CSS;
        document.head.appendChild(tag);
        return () => { tag.remove(); };
      }, "archive-theme: stylesheet");
    }

    /* ------------------------------------------------------------------
     * Shared particle-whale engine: contain-fit silhouette into a W x H
     * canvas; idle one-direction rotation, optional pointer scatter + click
     * regroup. Returns a disposer.
     * ------------------------------------------------------------------ */
    function startWhale(canvas, W, H, interactive) {
      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr; canvas.height = H * dpr;
      const c = canvas.getContext("2d");
      c.scale(dpr, dpr);

      const OW = 100, OH = 44, S = 5;
      const off = document.createElement("canvas");
      off.width = OW * S; off.height = OH * S;
      const oc = off.getContext("2d");
      oc.scale(S, S);
      oc.fillStyle = "#fff";
      const WHALE = [[18,26],[12,22],[10,15],[14,10],[22,8],[34,5],[48,4],[54,6],[59,2],[65,7],[78,13],[88,19],[97,10],[91,22],[97,34],[86,26],[74,33],[56,37],[38,38],[24,32]];
      const FIN = [[32,35],[26,44],[38,42],[40,35]];
      const fillPoly = (p) => { oc.beginPath(); oc.moveTo(p[0][0], p[0][1]); for (let i = 1; i < p.length; i++) oc.lineTo(p[i][0], p[i][1]); oc.closePath(); oc.fill(); };
      fillPoly(WHALE); fillPoly(FIN);
      oc.globalCompositeOperation = "destination-out";
      oc.beginPath(); oc.arc(15, 19, 2.4, 0, Math.PI * 2); oc.fill();
      oc.lineWidth = 1.6; oc.lineCap = "round";
      oc.beginPath(); oc.moveTo(18, 26); oc.quadraticCurveTo(26, 28, 33, 27); oc.stroke();
      oc.globalCompositeOperation = "source-over";
      const img = oc.getImageData(0, 0, off.width, off.height).data;
      const onPx = [];
      for (let y = 0; y < off.height; y++) for (let x = 0; x < off.width; x++) if (img[(y * off.width + x) * 4 + 3] > 128) onPx.push([x, y]);
      const targetCount = Math.max(40, Math.min(320, Math.round(W * H / 250)));
      const stride = Math.max(1, Math.floor(onPx.length / targetCount));

      const scale = Math.min(W / OW, H / OH);
      const bw = OW * scale, bh = OH * scale;
      const ox = (W - bw) / 2, oy = (H - bh) / 2;
      const homes = [];
      for (let i = 0; i < onPx.length; i += stride) homes.push({ x: ox + (onPx[i][0] / S / OW) * bw, y: oy + (onPx[i][1] / S / OH) * bh });
      let cx = 0, cy = 0;
      for (const h of homes) { cx += h.x; cy += h.y; }
      cx /= homes.length; cy /= homes.length;

      const ink = "216,212,189", mustard = "193,154,60", teal = "108,156,136";
      const parts = homes.map((h) => {
        const accent = Math.random() < 0.1;
        const col = accent ? (Math.random() < 0.5 ? "rgb(" + mustard + ")" : "rgb(" + teal + ")") : "rgb(" + ink + ")";
        return {
          hx: h.x, hy: h.y, x: h.x, y: h.y, vx: 0, vy: 0,
          r: 0.7 + Math.random() * 0.9,
          ph: Math.random() * Math.PI * 2, amp: 0.2 + Math.random() * 0.9,
          col,
          sx: 20 + Math.random() * (W - 40), sy: 20 + Math.random() * (H - 40)
        };
      });

      let mouse = null;
      let scattered = false;
      const R = Math.max(28, W * 0.18);
      const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; };
      const onLeave = () => { mouse = null; };
      const onClick = () => { scattered = !scattered; };
      if (interactive) {
        canvas.addEventListener("pointermove", onMove);
        canvas.addEventListener("pointerleave", onLeave);
        canvas.addEventListener("click", onClick);
      }

      let raf = null;
      function draw() {
        c.clearRect(0, 0, W, H);
        c.lineWidth = 0.6;
        c.strokeStyle = "rgba(" + ink + ",0.45)";
        const LINK = Math.max(12, W * 0.07);
        for (let i = 0; i < parts.length; i++) {
          const a = parts[i];
          for (let j = i + 1; j < parts.length; j++) {
            const b = parts[j];
            const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
            if (d2 < LINK * LINK) {
              c.globalAlpha = (1 - Math.sqrt(d2) / LINK) * 0.45;
              c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
            }
          }
        }
        c.globalAlpha = 1;
        for (const p of parts) {
          c.fillStyle = p.col;
          c.beginPath(); c.arc(p.x, p.y, p.r, 0, Math.PI * 2); c.fill();
        }
      }
      if (reduced) { draw(); return () => { if (interactive) { canvas.removeEventListener("pointermove", onMove); canvas.removeEventListener("pointerleave", onLeave); canvas.removeEventListener("click", onClick); } }; }

      function update(t) {
        const rot = t * 0.22;
        const cr = Math.cos(rot), sr = Math.sin(rot);
        for (const p of parts) {
          let tx, ty;
          if (scattered) {
            tx = p.sx; ty = p.sy;
          } else {
            const oxx = p.hx - cx, oyy = p.hy - cy;
            const lx = oxx + Math.cos(t * 0.55 + p.ph) * p.amp;
            const ly = oyy + Math.sin(t * 0.45 + p.ph) * p.amp;
            tx = cx + lx * cr - ly * sr;
            ty = cy + lx * sr + ly * cr;
          }
          p.vx += (tx - p.x) * 0.05; p.vy += (ty - p.y) * 0.05;
          if (mouse) {
            const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
            if (d2 < R * R && d2 > 0.01) {
              const d = Math.sqrt(d2);
              const f = (R - d) / R * 1.8;
              p.vx += (dx / d) * f; p.vy += (dy / d) * f;
            }
          }
          p.vx *= 0.86; p.vy *= 0.86;
          p.x += p.vx; p.y += p.vy;
        }
        draw();
        raf = requestAnimationFrame(update);
      }
      raf = requestAnimationFrame(update);
      return () => {
        if (raf) cancelAnimationFrame(raf);
        if (interactive) {
          canvas.removeEventListener("pointermove", onMove);
          canvas.removeEventListener("pointerleave", onLeave);
          canvas.removeEventListener("click", onClick);
        }
      };
    }

    /* ------------------------------------------------------------------
     * Black-hole mark, modeled on the two mass-acclaimed references:
     * Interstellar's "Gargantua" and the EHT M87 image — a pure-black
     * event-horizon shadow, a thin white-hot photon ring with strong
     * Doppler beaming (bright crescent low, fading to the receding side),
     * a warm accretion halo, and a faint near-side disk band in front.
     * ------------------------------------------------------------------ */
    function startEclipse(canvas, S) {
      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = S * dpr; canvas.height = S * dpr;
      const c = canvas.getContext("2d");
      c.scale(dpr, dpr);
      const cx = S / 2, cy = S / 2;
      const R = S * 0.29;            // event-horizon shadow radius
      const ringR = R + 1.2;         // photon ring hugging the shadow
      const rimR = ringR + 1.6;      // warm outer rim of the disk
      const ink = "216,212,189", mustard = "193,154,60", oxide = "169,74,58";
      const beamAngle = Math.PI * 0.5; // Doppler peak points low (M87-style)

      function draw(t) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2);
        c.clearRect(0, 0, S, S);

        // soft warm accretion halo (lensed disk heat)
        const halo = c.createRadialGradient(cx, cy, R * 0.55, cx, cy, S * 0.5);
        halo.addColorStop(0, "rgba(" + mustard + "," + (0.16 + 0.10 * pulse).toFixed(3) + ")");
        halo.addColorStop(0.5, "rgba(" + oxide + "," + (0.06 + 0.05 * pulse).toFixed(3) + ")");
        halo.addColorStop(1, "rgba(" + ink + ",0)");
        c.fillStyle = halo;
        c.fillRect(0, 0, S, S);

        // uniform faint base rings (seamless underlay)
        c.lineCap = "butt";
        c.strokeStyle = "rgba(250,242,214,0.10)";
        c.lineWidth = 1.1;
        c.beginPath(); c.arc(cx, cy, ringR, 0, Math.PI * 2); c.stroke();
        c.strokeStyle = "rgba(" + mustard + ",0.08)";
        c.lineWidth = 1.6;
        c.beginPath(); c.arc(cx, cy, rimR, 0, Math.PI * 2); c.stroke();

        // asymmetric bright arcs — strong Doppler beaming, brightest low
        const segs = 72;
        const step = (Math.PI * 2) / segs;
        for (let i = 0; i < segs; i++) {
          const a0 = i * step;
          const a1 = a0 + step;
          const mid = a0 + step * 0.5;
          let d = mid - beamAngle;
          d = Math.atan2(Math.sin(d), Math.cos(d)); // wrap to [-PI, PI]
          const beam = 0.5 + 0.5 * Math.cos(d);      // 1 at peak -> 0 opposite
          const b = beam * beam;                      // sharpen the falloff
          // warm outer rim (mustard), softer
          c.strokeStyle = "rgba(" + mustard + "," + (0.10 + 0.46 * b).toFixed(3) + ")";
          c.lineWidth = 1.6;
          c.beginPath(); c.arc(cx, cy, rimR, a0, a1); c.stroke();
          // white-hot photon ring (warm ivory), thin and crisp
          c.strokeStyle = "rgba(250,242,214," + (0.10 + 0.74 * b * (0.8 + 0.2 * pulse)).toFixed(3) + ")";
          c.lineWidth = 1.1;
          c.beginPath(); c.arc(cx, cy, ringR, a0, a1); c.stroke();
        }

        // pure-black event-horizon shadow
        c.fillStyle = "#080806";
        c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2); c.fill();

        // near-side accretion disk crossing the shadow (faint edge-on band)
        c.save();
        c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2); c.clip();
        const band = c.createLinearGradient(0, cy - 1.6, 0, cy + 1.6);
        band.addColorStop(0, "rgba(" + mustard + ",0)");
        band.addColorStop(0.5, "rgba(" + ink + "," + (0.13 + 0.07 * pulse).toFixed(3) + ")");
        band.addColorStop(1, "rgba(" + mustard + ",0)");
        c.fillStyle = band;
        c.fillRect(cx - R, cy - 1.6, R * 2, 3.2);
        c.restore();
      }

      if (reduced) { draw(0); return () => {}; }
      let raf = null;
      function frame(now) { draw(now * 0.001); raf = requestAnimationFrame(frame); }
      raf = requestAnimationFrame(frame);
      return () => { if (raf) cancelAnimationFrame(raf); };
    }

    /* ------------------------------------------------------------------
     * Slot occupants (React components).
     * ------------------------------------------------------------------ */
    function ArchiveMark({ size }) {
      return jsx("span", {
        className: "archive-emblem-slot",
        style: { width: size, height: size },
        dangerouslySetInnerHTML: { __html: EMBLEM_SVG }
      });
    }

    function ArchiveName() {
      return jsx("span", { className: "archive-brand-name", children: "DEEPSEEK HARNESS" });
    }

    function HeroWhale({ size, className }) {
      const ref = react.useRef(null);
      react.useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        return startWhale(canvas, size, size, true);
      }, [size]);
      return jsx("canvas", { ref, className, style: { width: size, height: size } });
    }

    function EclipseMark({ size, className }) {
      const ref = react.useRef(null);
      react.useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        return startEclipse(canvas, size);
      }, [size]);
      return jsx("canvas", { ref, className, style: { width: size, height: size } });
    }

    function RecordTurnTail({ seq }) {
      return jsx("div", { className: "archive-record-tail", children: "─ end of record · seq " + seq + " ─" });
    }

    function registerSlots(ctx) {
      // Best-effort slot registration for the brand; the CSS override below
      // guarantees the archive wordmark/emblem visually regardless of the
      // single-slot election against the official brand.
      ctx.slots.inject("sidebar.brand.mark", () => ctx.slots.register({ name: "sidebar.brand.mark" }, ArchiveMark));
      ctx.slots.inject("sidebar.brand.name", () => ctx.slots.register({ name: "sidebar.brand.name" }, ArchiveName));
      ctx.slots.inject("conversation.hero.brand.mark", () => ctx.slots.register({ name: "conversation.hero.brand.mark" }, EclipseMark));
      ctx.slots.inject("conversation.chat.turnTail", () => ctx.slots.register({ name: "conversation.chat.turnTail", select: () => ({}) }, RecordTurnTail));
    }

    function mountFooter(ctx) {
      if (typeof document === "undefined") return;
      ctx.effect(() => {
        const el = document.createElement("div");
        el.className = "archive-footer";
        el.textContent = "DeepSeek Research Programme · Est. 1972 · Archive Copy · Faded Ink · Film Grain · Internal — Restricted";
        document.body.appendChild(el);
        return () => { el.remove(); };
      }, "archive-theme: footer signature");
    }

    /* ------------------------------------------------------------------
     * Full-screen VHS overlay: static CRT scanlines, a slowly rolling
     * tracking-error band with chromatic fringing, and occasional glitch
     * bursts — a subtle phosphor "tape" over the whole page.
     * ------------------------------------------------------------------ */
    function startVhs(canvas, W, H) {
      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr; canvas.height = H * dpr;
      const c = canvas.getContext("2d");
      c.scale(dpr, dpr);

      const dark = document.body.getAttribute("data-ds-dark-theme") != null;
      function makeScan() {
        const off = document.createElement("canvas");
        off.width = W; off.height = H;
        const oc = off.getContext("2d");
        // finer, faintly irregular raster (4px pitch, jittered alpha)
        for (let y = 0; y < H; y += 4) {
          const a = (dark ? 0.042 : 0.10) * (0.55 + Math.random() * 0.9);
          oc.fillStyle = dark ? "rgba(216,212,189," + a.toFixed(3) + ")" : "rgba(16,16,14," + a.toFixed(3) + ")";
          oc.fillRect(0, y, W, 1);
        }
        return off;
      }
      const scan = makeScan();

      function renderStatic() {
        c.clearRect(0, 0, W, H);
        c.drawImage(scan, 0, 0);
      }
      if (reduced) { renderStatic(); return () => {}; }

      let bandY = -160;
      let glitchUntil = 0, glitchY = 0, glitchH = 0;
      let nextGlitch = 5000 + Math.random() * 8000;
      let last = performance.now();
      let raf = null;

      function frame(now) {
        const dt = Math.min(now - last, 64);
        last = now;
        c.clearRect(0, 0, W, H);
        c.globalAlpha = 0.85 + 0.15 * Math.sin(now * 0.0035);
        c.drawImage(scan, 0, 0);
        c.globalAlpha = 1;

        bandY += dt * 0.028;
        if (bandY > H + 120) bandY = -120;
        const bh = 44;
        const y = bandY;
        c.fillStyle = "rgba(169,74,58,0.055)";
        c.fillRect(0, y - 3, W, 3);
        c.fillStyle = "rgba(108,156,136,0.055)";
        c.fillRect(0, y + bh, W, 3);
        c.fillStyle = "rgba(216,212,189,0.02)";
        c.fillRect(0, y, W, bh);
        for (let i = 0; i < 3; i++) {
          const ly = y + 8 + (i * (bh - 12) / 2);
          const shift = Math.sin(now * 0.003 + i * 2.1) * 8;
          c.fillStyle = "rgba(216,212,189,0.05)";
          c.fillRect(shift, ly, W - Math.abs(shift) * 2, 1);
        }

        if (now >= nextGlitch) {
          glitchY = Math.random() * Math.max(1, H - 40);
          glitchH = 4 + Math.random() * 14;
          glitchUntil = now + 60 + Math.random() * 100;
          nextGlitch = now + 9000 + Math.random() * 12000;
        }
        if (now < glitchUntil) {
          c.fillStyle = "rgba(216,212,189,0.04)";
          c.fillRect(0, glitchY, W, glitchH);
          for (let i = 0; i < 14; i++) {
            const gx = Math.random() * W;
            const gy = glitchY + Math.random() * glitchH;
            c.fillStyle = Math.random() < 0.5 ? "rgba(216,212,189,0.28)" : "rgba(108,156,136,0.22)";
            c.fillRect(gx, gy, 2 + Math.random() * 5, 1);
          }
        }

        raf = requestAnimationFrame(frame);
      }
      raf = requestAnimationFrame(frame);
      return () => { if (raf) cancelAnimationFrame(raf); };
    }

    /* Full-screen VHS overlay (replaces the bottom-right specimen whale). */
    function mountVhs(ctx) {
      if (typeof document === "undefined") return;
      ctx.effect(() => {
        const canvas = document.createElement("canvas");
        canvas.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:2147483640;opacity:.9;";
        document.body.appendChild(canvas);
        let stop = () => {};
        const resize = () => {
          stop();
          stop = startVhs(canvas, window.innerWidth, window.innerHeight);
        };
        resize();
        let timer = null;
        const onResize = () => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(resize, 150);
        };
        window.addEventListener("resize", onResize);
        return () => {
          stop();
          if (timer) clearTimeout(timer);
          window.removeEventListener("resize", onResize);
          canvas.remove();
        };
      }, "archive-theme: vhs overlay");
    }

    /* ------------------------------------------------------------------
     * Ambient "terminal dust": sparsely floating glyphs (box-drawing, ASCII,
     * geometric) that drift upward, sway, and periodically swap characters —
     * muted accent ink so it stays below the grain and never fights the text.
     * ------------------------------------------------------------------ */
    function startAsciiDrift(canvas, W, H) {
      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr; canvas.height = H * dpr;
      const c = canvas.getContext("2d");
      c.scale(dpr, dpr);

      const GLYPHS = "░▒▓█▄▀▌▐│─┌┐└┘┼═║╬▸◂▲▼◄►◆◇○●▪▫≡≈∞§ΩΔλφ01@#&%*/+-=<>~".split("");
      const dark = document.body.getAttribute("data-ds-dark-theme") != null;
      const COLORS = dark ? [
        "rgba(108,156,136,", // teal
        "rgba(193,154,60,",  // mustard
        "rgba(169,74,58,",   // oxide
        "rgba(216,212,189,"  // ivory
      ] : [
        "rgba(75,138,120,",  // teal (light bg)
        "rgba(168,130,26,",  // mustard (light bg)
        "rgba(168,68,46,",   // oxide (light bg)
        "rgba(38,38,35,"     // ink (light bg)
      ];
      const ALPHA_MIN = dark ? 0.05 : 0.08;
      const ALPHA_RANGE = dark ? 0.10 : 0.14;
      const N = Math.max(14, Math.round(W / 110));

      function spawn(fromBottom) {
        return {
          x: Math.random() * W,
          y: fromBottom ? H + 24 : Math.random() * H,
          vy: 0.05 + Math.random() * 0.20,
          vx: (Math.random() - 0.5) * 0.14,
          size: 11 + Math.random() * 8,
          glyph: GLYPHS[(Math.random() * GLYPHS.length) | 0],
          col: COLORS[(Math.random() * COLORS.length) | 0],
          alpha: 0,
          target: ALPHA_MIN + Math.random() * ALPHA_RANGE,
          phase: Math.random() * Math.PI * 2,
          lastGlyph: 0,
          nextGlyph: 600 + Math.random() * 1600
        };
      }
      const parts = [];
      for (let i = 0; i < N; i++) parts.push(spawn(false));

      if (reduced) {
        c.textAlign = "center"; c.textBaseline = "middle";
        for (const p of parts) {
          c.font = "700 " + p.size + "px 'SF Mono',Consolas,Menlo,monospace";
          c.fillStyle = p.col + (dark ? "0.06" : "0.10") + ")";
          c.fillText(p.glyph, p.x, p.y);
        }
        return () => {};
      }

      let raf = null;
      let last = performance.now();
      function frame(now) {
        const dt = Math.min(now - last, 64);
        last = now;
        c.clearRect(0, 0, W, H);
        c.textAlign = "center"; c.textBaseline = "middle";
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          p.y -= p.vy * dt / 16.7;
          p.x += (p.vx + Math.sin(now * 0.0006 + p.phase) * 0.05) * dt / 16.7;
          const edge = Math.min(1, p.y / 70) * Math.min(1, (H - p.y) / 70);
          p.alpha += (p.target * edge - p.alpha) * 0.04;
          if (now - p.lastGlyph > p.nextGlyph) {
            p.glyph = GLYPHS[(Math.random() * GLYPHS.length) | 0];
            p.lastGlyph = now;
            p.nextGlyph = 600 + Math.random() * 1600;
          }
          if (p.y < -24) { parts[i] = spawn(true); continue; }
          c.font = "700 " + p.size + "px 'SF Mono',Consolas,Menlo,monospace";
          c.fillStyle = p.col + p.alpha.toFixed(3) + ")";
          c.fillText(p.glyph, p.x, p.y);
        }
        raf = requestAnimationFrame(frame);
      }
      raf = requestAnimationFrame(frame);
      return () => { if (raf) cancelAnimationFrame(raf); };
    }

    function mountAsciiDrift(ctx) {
      if (typeof document === "undefined") return;
      ctx.effect(() => {
        const canvas = document.createElement("canvas");
        canvas.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:2147483638;";
        document.body.appendChild(canvas);
        let stop = () => {};
        const resize = () => {
          stop();
          stop = startAsciiDrift(canvas, window.innerWidth, window.innerHeight);
        };
        resize();
        let timer = null;
        const onResize = () => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(resize, 150);
        };
        window.addEventListener("resize", onResize);
        return () => {
          stop();
          if (timer) clearTimeout(timer);
          window.removeEventListener("resize", onResize);
          canvas.remove();
        };
      }, "archive-theme: ascii drift");
    }

    const inject = ["slots", "theme"];

    function apply(ctx) {
      installStyles(ctx);
      ctx.effect(() => ctx.theme.overrideTokens(PLUGIN_ID, TOKENS), "archive-theme: token palette");
      registerSlots(ctx);
      mountFooter(ctx);
      mountVhs(ctx);
      mountAsciiDrift(ctx);
    }

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
