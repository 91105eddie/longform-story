# Progress Monitoring

Use these files to monitor the project.

## 1. Overall Progress

Primary file:

- `10-agent-team/production-board.md`

Use it to check:

- current stage,
- active goal,
- locked decisions,
- next ten tasks,
- blockers,
- completed work.

Recommended prompt:

```text
請以 Production Manager 的角色，讀取 `10-agent-team/production-board.md` 和 `10-agent-team/agent-status.md`。
回報目前總進度、阻塞點、下一個應該執行的任務。
不要改檔案。
```

## 2. Agent Status

Primary file:

- `10-agent-team/agent-status.md`

Use it to check:

- each agent's current status,
- current assignment,
- expected output,
- blocker,
- next check timing.

Recommended prompt:

```text
請讀取 `10-agent-team/agent-status.md`。
用表格回報每個智能體目前是 Active、Waiting、Done 還是 Review。
指出目前瓶頸是哪一個任務。
不要改檔案。
```

## 3. Change History

Primary file:

- `06-revision/revision-log.md`

Use it to check:

- what changed,
- when it changed,
- why it changed,
- whether major decisions were recorded.

Recommended prompt:

```text
請讀取 `06-revision/revision-log.md`。
整理最近一次開發循環完成了什麼，以及哪些決策可能需要重新審查。
不要改檔案。
```

## 4. Deliverable Readiness

Primary files:

- `05-draft/scene-list-001.md`
- `05-draft/animation-script-001.md`
- `07-visual-development/style-guide.md`
- `08-preproduction/shot-list-001.md`
- `09-production/assets-list.md`

Use them to check whether the animation proof-of-concept has enough material to move forward.

Recommended prompt:

```text
請以 Production Manager 的角色，檢查第一動畫單元的交付物狀態：
scene list、animation script、style guide、shot list、assets list。
輸出每個交付物的完成度、缺口、下一步。
不要改檔案。
```

## 5. Suggested Weekly Review

Run this review after several changes:

```text
請啟用智能體團隊做一次週檢：
1. Production Manager 檢查 production board 和 agent status
2. Continuity Editor 檢查 revision log 和 canon drift
3. Showrunner 判斷下一週最重要的 3 個任務

最後輸出：
- 本週完成
- 目前瓶頸
- 風險
- 下週前三優先任務
- 需要更新的檔案
```

## Monitoring Rule

Every meaningful task completion should update three places:

1. `10-agent-team/production-board.md`
2. `10-agent-team/agent-status.md`
3. `06-revision/revision-log.md`

If only content files changed but these tracking files were not updated, the team status is stale.
