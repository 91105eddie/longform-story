# 智能體團隊儀表板

開啟方式：

- 直接用瀏覽器開啟 `11-dashboard/index.html`。
- 遠端手機查看請參考 `11-dashboard/DEPLOY.md`。

用途：

- 監看總進度。
- 監看每個智能體的工作狀態。
- 查看任務看板。
- 查看第一動畫單元交付物狀態。
- 複製常用 Codex 操作指令。

## 同步規則

這是靜態儀表板，不會自動讀取 Markdown 檔案。每次完成重要任務後，應同步更新：

1. `10-agent-team/production-board.md`
2. `10-agent-team/agent-status.md`
3. `06-revision/revision-log.md`
4. `11-dashboard/app.js`

如果前三個監控檔已更新，但 `11-dashboard/app.js` 沒有更新，儀表板畫面會落後。

## 遠端查看

推薦部署方式：

- Cloudflare Pages：發布目錄設為 `11-dashboard`。
- GitHub Pages：發布整個 repo，手機網址會是 `/11-dashboard/`。
- Netlify：可直接拖拉 `11-dashboard/` 資料夾測試。

## 建議指令

```text
請根據 production-board、agent-status、revision-log 的最新內容，同步更新 11-dashboard/app.js 的儀表板資料。
```
