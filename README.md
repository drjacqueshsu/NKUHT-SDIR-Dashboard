# NKUHT 校務公開資料儀表板

國立高雄餐旅大學（NKUHT）校務公開資料儀表板 — 學生組成、就業力、學務助學、師資、研究產學、財務、治理與永續（SDGs）的互動式戰情面板。

以 React 18 打造，純前端、無後端，可直接部署於 Cloudflare Pages。

## 架構（與舊版的差異）

舊版是 Google AI Studio 匯出的**單一 15 MB HTML**：把 React / ReactDOM / Babel、220 個字型子集、所有資料與程式碼全部 base64+gzip 內嵌，於瀏覽器端用 Babel 即時編譯 JSX、再自我解壓渲染。

本版改為**乾淨的靜態多檔架構**：

| 項目 | 舊版 | 本版 |
| --- | --- | --- |
| 檔案 | 單一 15 MB HTML | `index.html` + 拆分的 CSS / JS / 資料檔（約 0.6 MB） |
| JSX 編譯 | 瀏覽器端 Babel（內嵌 3 MB runtime） | **建置期**以 Babel 預先編譯為一般 JS |
| 字型 | 內嵌 220 個 woff2 子集 | Google Fonts CDN |
| React | 內嵌 development build | vendored production UMD（18.3.1） |
| 可讀性 / 可維護性 | 低（自解壓 bundle） | 高（檔案分明、可直接編輯） |

行為與畫面與舊版一致（同一份原始碼，只是改變打包方式）。舊版完整檔案保留於 [`legacy/`](legacy/)。

## 目錄結構

```
index.html                     入口（載入字型、樣式、依序載入 scripts）
assets/
  styles.css                   全部樣式（桂冠綠 + 土豪金 BI 風格、亮/暗主題）
  vendor/                       React 18.3.1 production UMD
  data/
    dataset.js                 window.NKUHT_DATA（校務公開資料數據集）
    aggregated.js              window.NKUHT_DATA_X（校務基本資料庫聚合）
  js/
    utils.js                   window.NKUHT_UTIL（色彩 / SDG / 格式化）
    unit-filter.js             window.NKUHT_UNIT（單位篩選資料層）
    components.js              共用元件（KPI 卡、迷你折線、SDG 徽章…）
    charts-ext.js              進階圖表（散點 / 雷達 / 金字塔 / Hero Banner…）
    visual-ext.js              CountUp / WorldDotMap / SDGSunburst…
    modules.js                 總覽 / 學生 / 師資 / 研究 / 治理 / SDGs / 探索
    modules-ext.js             就業力 / 學務助學 / 財務 / 校務研究
    app.js                     主應用（分頁、篩選器、主題切換、render）
legacy/                        舊版單一 HTML（保留參考）
_headers                       Cloudflare Pages 快取設定
```

> 註：各 JS 以**全域作用域 classic script** 依序載入、透過 `window` 全域與全域函式互相引用（這是原始碼的設計）。`assets/js/*.js` 由 `legacy/` 內的 JSX 經 Babel（`react` + `env` preset）預先編譯而來——與舊版瀏覽器端的轉譯結果相同。

## 本機預覽

純靜態網站，任何靜態伺服器皆可：

```bash
# 擇一
npx serve .
python -m http.server 8000
```

然後開啟對應網址即可。（直接以 `file://` 開啟 `index.html` 也大多可用，但建議用 HTTP 伺服器以避免字型 / 快取的差異。）

## 部署到 Cloudflare Pages

本專案**不需要建置步驟**，直接當作靜態檔案部署。

在 Cloudflare 主控台 → **Workers & Pages → Create → Pages → Connect to Git**，選擇此 GitHub repo，設定：

- **Framework preset**：`None`
- **Build command**：（留空）
- **Build output directory**：`/`

儲存後每次推送到預設分支都會自動部署。
