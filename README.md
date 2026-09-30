# dsh-client-ui-archive

> DEEPSEEK HARNESS · **1970s retro-futurist research-institute archive** theme
> 1970 年代复古未来「研究机构档案」主题插件

一个用于 **DeepSeek Harness Web GUI** 的第三方客户端主题插件：暖象牙文本、炭灰纸底、终端质感 chrome，叠加胶片颗粒、三色条纹与 VHS 错印。**明确不采用霓虹赛博朋克风格**。

A third-party client theme for the **DeepSeek Harness Web GUI**: warm-ivory text on charcoal paper, terminal-style chrome, film grain, tricolour stripes and VHS mis-print. **Deliberately avoids the neon cyberpunk look.**

---

## 特性 / Features

- **完整 token 配色覆盖** —— 覆盖约 80 个 `--dsw-alias-*` 设计 token 的深/浅两套映射（炭黑 charcoal / 灰青 teal / 芥末黄 mustard / 氧化红 oxide / 旧象牙白 ivory）。
- **品牌铭牌与徽记 slots** —— 侧栏品牌标识与名称、会话 hero 区的黑洞徽记、以及每个回复尾部的「录音档案」分隔符。
- **黑洞 hero 徽记** —— 参考 Interstellar「Gargantua」+ EHT M87 的黑洞 canvas：纯黑事件视界、白热细光子环、72 段角度多普勒增亮、芥末黄→赭红吸积光晕。
- **VHS 覆盖层** —— 静态 CRT 扫描线、缓慢滚动的跟踪误差带（含色差边缘）、偶发低强度屏闪 glitch。
- **飘动符号粒子** —— 稀疏漂浮的 box-drawing / ASCII 符号，随主题切换配色与透明度，始终压在颗粒层之下。
- **胶片颗粒 + 三色条纹 + 页脚签名** —— 复古档案质感。
- **深/浅色自适应** —— 所有效果（黑洞、粒子、VHS）均随 `[data-ds-dark-theme]` 切换配色。

---

## 配色 / Palette

| 角色 | 深色 dark | 浅色 light |
|---|---|---|
| 背景 bg | `#2a2a27` | `#e4e3d7` |
| 层级 bg2 / bg3 | `#31312d` / `#383834` | `#ebeade` / `#f2f1e7` |
| 文本 ink | `#d8d4bd` | `#262623` |
| 灰青 teal | `#6c9c88` | `#4b8a78` |
| 芥末黄 mustard | `#c19a3c` | `#a8821a` |
| 氧化红 oxide | `#a94a3a` | `#a8442e` |

`--dsw-alias-brand-primary` = 芥末黄（录音尾、`▸` 提示符、光标）。

---

## 安装 / Installation

本插件是 DSH 客户端插件（`dsh.client.platform: "web"`），通过 profile 的 `cordis.patch.yml` 接线安装。运行时依赖（`@deepseek-ai/dsh-client-ui-renderer` / `-sidebar` / `-conversation` / `-brand-official`）由 DSH web app 提供，插件本身不打包 `node_modules`。

1. 让插件包可被解析（二选一）：
   - **本地 `file:` 依赖**：把本仓库放进 profile 的 `vendor/` 目录，用 `file:` 依赖指向它；
   - **git 依赖**：直接以本仓库的 git 地址作为依赖来源。

2. 在 profile 的 `cordis.patch.yml` 中插入：

   ```yaml
   - insert:
       - id: archive-theme
         name: '@deepseek-ai/dsh-client-ui-archive'
   ```

3. 重启 DSH（改动 bundle 需全量重启才生效）。

> **关于 scope**：当前 `package.json` 的 `name` 使用 `@deepseek-ai` scope，仅为与本地接线保持一致。若要发布到 npm registry，请先改为你拥有的 scope，并同步修改 `lib/client.js` 中的 `PLUGIN_ID` 与 `window.__ModuleLoader__.load({ id })`。

---

## 项目结构 / Structure

```
dsh-client-ui-archive/
├─ package.json          # name / version / exports / dsh.client 声明
├─ LICENSE               # MIT
└─ lib/
   ├─ index.js           # 宿主侧空壳：export function apply() {}
   └─ client.js          # 浏览器侧主题主体（CSS + token + slots + canvas 引擎）
```

`lib/client.js` 通过 `window.__ModuleLoader__.load({ id, factory })` 返回 `{ apply, inject }`，内部组成：

- `ARCHIVE_CSS` —— 全部 CSS 覆盖（token、工具/侧栏/右栏/铭牌/提示符样式）
- `EMBLEM_SVG` —— 24×24 徽记
- `TOKENS` —— 约 80 个 `--dsw-alias-*` token 的深/浅映射
- `registerSlots` —— 注入 `sidebar.brand.mark` / `sidebar.brand.name` / `conversation.hero.brand.mark` / `conversation.chat.turnTail`
- canvas 引擎 —— `startEclipse`（黑洞）/ `startVhs`（扫描线+屏闪）/ `startAsciiDrift`（飘动符号）

---

## 开发 / Development

- 改完 `lib/client.js` 后用 `node --check lib/client.js` 校验语法。
- 改动 bundle 需重启 DSH 才生效。
- hashed class 选择器与 DSH UI 包版本绑定，升级目标 DSH 版本后需重新对齐 CSS 钩子。

---

## License

[MIT](./LICENSE) © 2026 IWTBAGD
