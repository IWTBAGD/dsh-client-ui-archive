# dsh-client-ui-archive

> **DeepSeek Harness** · 1970s retro-futurist research-institute archive theme
> **DeepSeek Harness** · 1970 年代复古未来「研究机构档案」主题

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](./LICENSE)
[![Topic](https://img.shields.io/badge/topic-dsh--plugin-blue.svg)](https://github.com/topics/dsh-plugin)

A third-party client theme for the **DeepSeek Harness Web GUI**: warm-ivory text on charcoal paper, terminal-style chrome, film grain, tricolour stripes and VHS mis-print. **Deliberately avoids the neon cyberpunk look.**

一个用于 **DeepSeek Harness Web GUI** 的第三方客户端主题插件：暖象牙文本、炭灰纸底、终端质感 chrome，叠加胶片颗粒、三色条纹与 VHS 错印。**明确不采用霓虹赛博朋克风格**。

---

## 特性 / Features

| 特性 Feature | 说明 Description |
|---|---|
| 完整 token 配色覆盖 · Full token coverage | 覆盖约 80 个 `--dsw-alias-*` 设计 token 的深/浅两套映射（炭黑 charcoal / 灰青 teal / 芥末黄 mustard / 氧化红 oxide / 旧象牙白 ivory）。~80 `--dsw-alias-*` tokens mapped in both dark and light variants. |
| 品牌铭牌与徽记 slots · Brand mark & name slots | 侧栏品牌标识与名称、会话 hero 区的黑洞徽记、以及每个回复尾部的「录音档案」分隔符。Sidebar brand mark/name, the black-hole hero emblem, and a "record archive" divider after every reply. |
| 黑洞 hero 徽记 · Black-hole hero emblem | 参考 *Interstellar*「Gargantua」+ EHT M87 的黑洞 canvas：纯黑事件视界、白热细光子环、72 段角度多普勒增亮、芥末黄→赭红吸积光晕。Modeled on *Interstellar*'s Gargantua and EHT M87: pure-black event horizon, white-hot photon ring, 72-segment Doppler brightening, mustard→oxide accretion glow. |
| VHS 覆盖层 · VHS overlay | 静态 CRT 扫描线、缓慢滚动的跟踪误差带（含色差边缘）、偶发低强度屏闪 glitch。Static CRT scanlines, a slowly rolling tracking-error band with chromatic edges, and occasional low-intensity screen glitch. |
| 飘动符号粒子 · Drifting glyph particles | 稀疏漂浮的 box-drawing / ASCII 符号，随主题切换配色与透明度，始终压在颗粒层之下。Sparse drifting box-drawing/ASCII glyphs that recolor per theme, always beneath the grain layer. |
| 胶片颗粒 + 三色条纹 + 页脚签名 · Grain + tricolour stripes + footer signature | 复古档案质感。Vintage archive texture. |
| 深/浅色自适应 · Dark/light adaptive | 所有效果（黑洞、粒子、VHS）均随 `[data-ds-dark-theme]` 切换配色。Every effect (black hole, glyphs, VHS) recolor with `[data-ds-dark-theme]`. |

---

## 配色 / Palette

| 角色 Role | 深色 dark | 浅色 light |
|---|---|---|
| 背景 bg | `#2a2a27` | `#e4e3d7` |
| 层级 bg2 / bg3 | `#31312d` / `#383834` | `#ebeade` / `#f2f1e7` |
| 文本 ink | `#d8d4bd` | `#262623` |
| 灰青 teal | `#6c9c88` | `#4b8a78` |
| 芥末黄 mustard | `#c19a3c` | `#a8821a` |
| 氧化红 oxide | `#a94a3a` | `#a8442e` |

`--dsw-alias-brand-primary` = 芥末黄 mustard（录音尾、`▸` 提示符、光标 / record tail, `▸` prompt, cursor）。

---

## 安装 / Installation

本插件是一个 DSH **组合包（bundle）**：`package.json` 声明了 `dsh.bundle` 与 `dsh.client`，并附带 `cordis.patch.yml`。运行时依赖（`@deepseek-ai/dsh-client-ui-renderer` / `-sidebar` / `-conversation` / `-brand-official`）由 DSH web app 提供，插件本身**不打包 `node_modules`**。

This plugin is a DSH **bundle**: `package.json` declares `dsh.bundle` and `dsh.client` and ships a `cordis.patch.yml`. Runtime dependencies (`@deepseek-ai/dsh-client-ui-renderer` / `-sidebar` / `-conversation` / `-brand-official`) are provided by the DSH web app; the plugin ships **no `node_modules`**.

### 方式一：插件面板（推荐） / Method 1 — Plugins panel (recommended)

1. 打开 DSH 侧栏的 **Plugins** 面板 → **Add plugin**。Open the DSH sidebar **Plugins** panel → **Add plugin**.
2. 输入本仓库的 Git 地址，按提示安装并重启。Enter this repository's Git URL and follow the prompts to install, then restart.

   ```text
   https://github.com/IWTBAGD/dsh-client-ui-archive.git
   ```

   （若已发布到 npm，也可直接填包名 `@iwtbagd/dsh-client-ui-archive`。/ If published to npm, you can enter the package name `@iwtbagd/dsh-client-ui-archive` instead.）

### 方式二：命令行 / Method 2 — CLI

```bash
dsh plugin --profile <profile> add https://github.com/IWTBAGD/dsh-client-ui-archive.git
```

`dsh plugin` 会转发给该 profile 目录下的 pnpm。改 bundle 需全量重启才生效。

`dsh plugin` forwards to pnpm inside the profile directory. Bundle changes need a full restart to take effect.

### 方式三：手动接线 / Method 3 — Manual wiring

1. 让插件包可被解析（二选一）— make the package resolvable (either):
   - **本地 `file:` 依赖 / local `file:` dependency**：把本仓库放进 profile 的 `vendor/` 目录，用 `file:` 依赖指向它。Put this repo under the profile's `vendor/` and point a `file:` dependency at it.
   - **git 依赖 / git dependency**：直接以本仓库的 git 地址作为依赖来源。Use this repo's git URL directly.

2. 在 profile 的 `cordis.patch.yml` 中插入 / insert into the profile's `cordis.patch.yml`:

   ```yaml
   - insert:
       - id: archive-theme
         name: '@iwtbagd/dsh-client-ui-archive'
   ```

3. 重启 DSH。Restart DSH.

> **关于 scope / About the scope**：包名已改为 `@iwtbagd` scope（即你的 npm 用户名）。`@deepseek-ai` 是官方保留 scope，仅运行时依赖（`dsh-client-ui-renderer` 等）使用。发布时用 `iwtbagd` 账号登录后 `npm publish` 即可。The package now uses the `@iwtbagd` scope (your npm username). `@deepseek-ai` is a reserved official scope, used only by the runtime dependencies. To publish, log in as `iwtbagd` and run `npm publish`.

---

## 发布与参与社区 / Publishing & joining the community

DSH **没有集中的「插件商店」目录**：侧栏 Plugins 页里看到的只有「官方预置 bundle」和「本 profile 已安装的 bundle」，第三方插件不会被自动收录。真正的分发方式是**让用户直接通过包名 / Git 地址安装**。

DSH has **no central "plugin store" directory**: the Plugins page only lists the official shipped bundles and this profile's installed bundles — third-party plugins are not auto-listed. Distribution works by letting users install directly from a **package name or a Git URL**.

GitHub 上的 [`dsh-plugin` topic](https://github.com/topics/dsh-plugin) 只是一个**社区自加的话题标签**，用来让插件在 GitHub 搜索里更容易被发现（社区约定，非官方审核目录）。

The [`dsh-plugin` topic](https://github.com/topics/dsh-plugin) on GitHub is just a **community-added topic tag** for discoverability in GitHub search — a convention, not a moderated directory.

**参与方式 / How to participate:**

1. **公开仓库**：把插件推到一个 public 仓库（本仓库已配置 `origin`）。Make the repo public (this repo's `origin` is already set).
2. **加上话题标签**：在仓库首页 → 右侧 **About** 区块 → 点击齿轮（⚙）→ **Topics** 里添加 `dsh-plugin`（可再加 `deepseek-harness`、`dsh`）。Add the topic: repo homepage → **About** → gear icon → **Topics** → add `dsh-plugin` (optionally `deepseek-harness`, `dsh`). 加完后你的仓库就会出现在 `github.com/topics/dsh-plugin` 列表里。Done — your repo then appears under `github.com/topics/dsh-plugin`.
3. **（可选）发布到 npm**：已使用 `@iwtbagd` scope，登录 `iwtbagd` 账号后直接 `npm publish`，用户就能按包名安装。注意 `files` 只带 `lib/` + `cordis.patch.yml` + `README`。(Optional) Publish to npm: the `@iwtbagd` scope is already set — log in as `iwtbagd` and run `npm publish`; keep `files` limited to `lib/` + `cordis.patch.yml` + `README`.
4. **给出一行安装命令**：在 README（本文档）里保留 git 地址 / 包名，用户复制进 Plugins 面板或 `dsh plugin add` 即可。Give a one-line install spec: keep the git URL / package name here so users can paste it into the Plugins panel or `dsh plugin add`.

> 命名约定 / Naming convention：DSH 的安装示例使用 `dsh-plugin-whale-pet` 这类 `dsh-plugin-*` 前缀，社区插件通常也按 `dsh-<功能>` 命名，便于识别。DSH's own examples use a `dsh-plugin-*` prefix (e.g. `dsh-plugin-whale-pet`); community plugins commonly follow `dsh-<feature>`.

---

## 项目结构 / Structure

```
dsh-client-ui-archive/
├─ package.json          # name / version / exports / dsh.bundle + dsh.client
├─ cordis.patch.yml      # bundle wiring: insert this plugin
├─ LICENSE               # MIT
└─ lib/
   ├─ index.js           # host-side stub: export function apply() {}
   └─ client.js          # browser-side theme (CSS + tokens + slots + canvas engine)
```

`lib/client.js` 通过 `window.__ModuleLoader__.load({ id, factory })` 返回 `{ apply, inject }`，内部组成 / returns `{ apply, inject }` via `window.__ModuleLoader__.load({ id, factory })`, composed of:

- `ARCHIVE_CSS` —— 全部 CSS 覆盖（token、工具/侧栏/右栏/铭牌/提示符样式）。All CSS overrides (tokens, tools/sidebar/right-panel/brand/prompt styles).
- `EMBLEM_SVG` —— 24×24 徽记。24×24 emblem.
- `TOKENS` —— 约 80 个 `--dsw-alias-*` token 的深/浅映射。Dark/light mapping for ~80 `--dsw-alias-*` tokens.
- `registerSlots` —— 注入 `sidebar.brand.mark` / `sidebar.brand.name` / `conversation.hero.brand.mark` / `conversation.chat.turnTail`。Injects those four slots.
- canvas 引擎 —— `startEclipse`（黑洞 / black hole）/ `startVhs`（扫描线+屏闪 / scanlines + glitch）/ `startAsciiDrift`（飘动符号 / drifting glyphs）。Canvas engines.

---

## 开发 / Development

- 改完 `lib/client.js` 后，用 `node --check lib/client.js` 校验语法。Run `node --check lib/client.js` after editing.
- 改动 bundle 需重启 DSH 才生效。Bundle changes require a DSH restart.
- hashed class 选择器与 DSH UI 包版本绑定，升级目标 DSH 版本后需重新对齐 CSS 钩子。Hashed class selectors are tied to the DSH UI package version; re-align the CSS hooks after upgrading DSH.

---

## License

[MIT](./LICENSE) © 2026 IWTBAGD
