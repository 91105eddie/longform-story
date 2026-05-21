# 遠端手機查看部署指南

這個儀表板是純靜態網站，可以部署到 GitHub Pages、Cloudflare Pages、Netlify 或 Vercel。部署後，你在任何城市都能用手機瀏覽。

## 重要限制

- 目前儀表板只會顯示 `11-dashboard/app.js` 內的資料。
- 它不會自動讀取 Mac 上的 Markdown 檔案。
- 每次團隊狀態更新後，需要同步更新 `11-dashboard/app.js` 並重新部署。
- 操作型任務會透過 GitHub Issues 建立，不會直接遠端執行 Codex。
- 如果內容不想公開，請使用 Cloudflare Pages Access、Netlify password protection，或改用私人網路方案。

## 推薦方案 A：Cloudflare Pages

適合：想要免費、穩定、速度快，且未來可加登入保護。

操作流程：

1. 將專案放到 GitHub repository。
2. 到 Cloudflare Pages 建立新專案。
3. 連接該 GitHub repository。
4. Build command 留空。
5. Output directory 設為：

```text
11-dashboard
```

6. 部署完成後，用 Cloudflare 提供的網址在手機開啟。

如果要限制只有自己能看，可以後續啟用 Cloudflare Access。

## 推薦方案 B：GitHub Pages

適合：最少設定、公開查看。

本專案已提供 GitHub Actions workflow：

- `.github/workflows/deploy-dashboard-pages.yml`

推送到 `main` 後，GitHub Actions 會把 `11-dashboard/` 發布到 GitHub Pages。

預期網址：

```text
https://91105eddie.github.io/longform-story/
```

workflow 會嘗試自動啟用 GitHub Pages。若自動啟用失敗，請到 repository 的 Settings -> Pages，將 Source 設為 GitHub Actions。

替代做法：整個 repository 發布

1. 將專案推到 GitHub。
2. 到 repository 的 Settings。
3. Pages -> Build and deployment。
4. Source 選 Deploy from a branch。
5. Branch 選 `main`，folder 選 `/root`。
6. 部署後開啟：

```text
https://你的帳號.github.io/你的repo名/11-dashboard/
```

做法 2：只發布儀表板資料夾

GitHub Pages 不能直接選任意子資料夾作為發布根目錄，除非使用 GitHub Actions。因此若只想發布 `11-dashboard/`，建議改用 Cloudflare Pages，或之後新增 GitHub Actions workflow。

## 推薦方案 C：Netlify

適合：拖拉資料夾即可測試。

操作流程：

1. 到 Netlify。
2. 使用 Add new site -> Deploy manually。
3. 將 `11-dashboard/` 資料夾拖上去。
4. Netlify 會產生一個網址。

缺點是每次更新要重新拖拉，除非改成連 GitHub。

## 每次更新後的同步流程

建議固定使用這個流程：

1. Codex 完成任務。
2. 更新：
   - `10-agent-team/production-board.md`
   - `10-agent-team/agent-status.md`
   - `06-revision/revision-log.md`
3. 同步更新：
   - `11-dashboard/app.js`
4. 推到 GitHub 或重新部署。

可對 Codex 下這個指令：

```text
請根據 production-board、agent-status、revision-log 的最新內容，同步更新 11-dashboard/app.js，並檢查儀表板資料是否一致。
```

## 隱私建議

目前儀表板會顯示：

- 專案名稱
- 智能體角色
- 任務名稱
- 檔案路徑
- 目前瓶頸
- 創作方向摘要

如果這些內容不想公開，不建議直接用公開 GitHub Pages。優先考慮：

- Cloudflare Pages + Access
- Netlify password protection
- 私人 GitHub repository + 手動部署到受保護平台
- Tailscale / ZeroTier 私人網路
