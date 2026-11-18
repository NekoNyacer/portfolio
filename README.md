# Eddie 的 Side Projects

Angular 與 daisyUI 製作的繁體中文作品集。首頁依序展示「桌遊旅店」、「戰鬥陀螺」、「尾牙開場動畫」。三個專案共用一份版型，先介紹作品，再呈現與 AI 溝通、修正和驗收的實例。

## 本機開發

本專案以 Node.js 24.16 建置。安裝 Node.js 後，在本資料夾開啟終端機執行

```sh
npm ci
npm start
```

開啟終端機顯示的本機網址，預設為 [localhost:4200](http://localhost:4200/)。修改原始檔後，瀏覽器會自動更新。按 Ctrl+C 可停止開發伺服器。

## 從哪裡改

| 想修改 | 編輯位置 |
| --- | --- |
| 首頁標題、自介、專案名稱、順序與全部案例文字 | [src/app/portfolio.data.ts](src/app/portfolio.data.ts) |
| 首頁卡片、手機與桌機排列 | [src/app/home.html](src/app/home.html) |
| 每篇的作品介紹、協作紀錄、成果區塊 | [src/app/project.html](src/app/project.html) |
| 頁首、導覽、頁尾 | [src/app/app.html](src/app/app.html) |
| daisyUI 主題顏色與字型 | [src/styles.css](src/styles.css) |
| 專案封面與網站圖示 | [public/assets](public/assets/) |

**改一段故事**　開啟 `portfolio.data.ts`，找到專案的 `stories`。每一項的 `title` 是讀者看到的問題，`steps` 裡的 `label` 與 `text` 是一輪協作的標籤與內文。第一段介紹用 `intro`，你的工作用 `role`，篇末成果用 `outcome`。

**新增第四個專案**　在同一檔案的 `projects` 陣列複製一個項目，換上唯一的英文 `slug`、內容、圖片路徑和替代文字。首頁、專案網址及「下一個專案」連結會跟著更新。如果首頁簡介或網頁摘要提及數量，也一併修改 `home.intro` 和 [src/index.html](src/index.html) 的 description。已分享的專案網址會用到 `slug`，只想改顯示名稱時改 `name` 即可。

**換封面**　把圖片放入 `public/assets/`，再將 `image` 指向 `assets/檔名.webp`。目前三張封面是專為作品集製作的 AI 概念圖。尾牙動畫依工作摘要介紹，原片與活動影像仍待公開許可。

## 建置與部署到 GitHub Pages

```sh
npm run build
```

正式網站產生於 `dist/eddie-portfolio/browser/`。專案使用相對資源路徑與 Angular 的 hash 路由，因此放在儲存庫子目錄時，直接開啟或重新整理 `/<repo>/#/projects/board-game-tavern` 都能讀到專案頁。

1. 將**這個資料夾的內容**放在 GitHub 儲存庫根目錄，讓 `package.json` 和 `.github/` 位於同一層。
2. 在儲存庫的 **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**。
3. 推送至 `main`，或在 **Actions → Deploy portfolio to GitHub Pages → Run workflow** 手動啟動。完成後，可從部署作業的 `github-pages` 環境開啟網站。

工作流程會安裝鎖定版本、建置並部署靜態檔案。若使用其他預設分支，請調整 [pages.yml](.github/workflows/pages.yml) 裡的 `branches`。
