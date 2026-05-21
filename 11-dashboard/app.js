const agents = [
  {
    name: "Showrunner",
    status: "Done",
    task: "Lock first animated unit direction",
    output: "01-concept/story-bible.md",
    blocker: "None",
    next: "Review script after T008"
  },
  {
    name: "Worldbuilding Designer",
    status: "Done",
    task: "Define Gongheng's early visible presence",
    output: "02-world/world-overview.md",
    blocker: "Gongheng's final nature still open",
    next: "Revisit after script draft"
  },
  {
    name: "Character Writer",
    status: "Done",
    task: "Bridge 阿倫 from 2026 to 2030 and add supporting roles",
    output: "03-characters/main-characters.md",
    blocker: "Supporting roles still need names and voices",
    next: "Before dialogue polish"
  },
  {
    name: "Plot Architect",
    status: "Done",
    task: "Define first unit premise and ending turn",
    output: "04-plot/outline.md",
    blocker: "None",
    next: "Review script structure after T008"
  },
  {
    name: "Screenwriter",
    status: "Active",
    task: "Draft animation script 001",
    output: "05-draft/animation-script-001.md",
    blocker: "Needs scene list as input; available",
    next: "Now"
  },
  {
    name: "Visual Development Director",
    status: "Waiting",
    task: "Create visual style guide v0.1",
    output: "07-visual-development/style-guide.md",
    blocker: "Waiting for script draft or at least stable scenes",
    next: "After T008"
  },
  {
    name: "Storyboard Planner",
    status: "Waiting",
    task: "Create shot list 001",
    output: "08-preproduction/shot-list-001.md",
    blocker: "Waiting for script draft and visual guide",
    next: "After T008 and T009"
  },
  {
    name: "Production Manager",
    status: "Active",
    task: "Maintain board and blockers",
    output: "10-agent-team/production-board.md",
    blocker: "None",
    next: "Every task completion"
  },
  {
    name: "Continuity Editor",
    status: "Waiting",
    task: "Review script and canon consistency",
    output: "06-revision/revision-log.md or review note",
    blocker: "Waiting for script draft",
    next: "After T008"
  }
];

const tasks = [
  ["T001", "Run first development audit", "Showrunner", "10-agent-team/development-audit-001.md", "Done"],
  ["T002", "Clarify first animated format", "Showrunner", "01-concept/story-bible.md", "Done"],
  ["T003", "Reconcile 2026 protagonist setup with 2030 world opening", "Character Writer", "03-characters/main-characters.md", "Done"],
  ["T004", "Define first unit premise and ending turn", "Plot Architect", "04-plot/outline.md", "Done"],
  ["T005", "Expand key supporting characters", "Character Writer", "03-characters/main-characters.md", "Done"],
  ["T006", "Define Gongheng's first visible presence", "Worldbuilding Designer", "02-world/world-overview.md", "Done"],
  ["T007", "Convert chapter 001 into scene list", "Screenwriter", "05-draft/scene-list-001.md", "Done"],
  ["T008", "Draft animation script 001", "Screenwriter", "05-draft/animation-script-001.md", "Todo"],
  ["T009", "Create visual style guide", "Visual Development Director", "07-visual-development/style-guide.md", "Todo"],
  ["T010", "Create first shot-list draft", "Storyboard Planner", "08-preproduction/shot-list-001.md", "Todo"]
].map(([id, title, owner, output, status]) => ({ id, title, owner, output, status }));

const health = [
  ["Story direction", "Green", "First proof-of-concept direction is locked."],
  ["Character basis", "Yellow", "阿倫 is usable; supporting characters need names and dialogue behavior."],
  ["Worldbuilding basis", "Green", "Early Gongheng visibility is now defined."],
  ["Script readiness", "Yellow", "Scene list exists; script draft not yet created."],
  ["Visual readiness", "Red", "Style guide is still placeholder."],
  ["Storyboard readiness", "Red", "Shot list depends on script."],
  ["Production tracking", "Green", "Board and status files exist."]
].map(([area, status, notes]) => ({ area, status, notes }));

const deliverables = [
  {
    name: "Scene List 001",
    file: "05-draft/scene-list-001.md",
    status: "Done",
    notes: "六場結構已完成，可進入劇本草稿。"
  },
  {
    name: "Animation Script 001",
    file: "05-draft/animation-script-001.md",
    status: "Todo",
    notes: "目前主要瓶頸。完成後可觸發審查、視覺與分鏡。"
  },
  {
    name: "Style Guide",
    file: "07-visual-development/style-guide.md",
    status: "Waiting",
    notes: "已有占位檔，等待劇本提供更穩定的畫面需求。"
  },
  {
    name: "Shot List 001",
    file: "08-preproduction/shot-list-001.md",
    status: "Waiting",
    notes: "需等劇本與初步視覺規格後再拆鏡。"
  },
  {
    name: "Assets List",
    file: "09-production/assets-list.md",
    status: "Waiting",
    notes: "已有初稿，需等劇本和鏡頭表補齊角色、場景、介面資產。"
  }
];

const commands = [
  {
    title: "查總進度",
    text: "請以 Production Manager 的角色，讀取 `10-agent-team/production-board.md` 和 `10-agent-team/agent-status.md`。\n回報目前總進度、阻塞點、下一個應該執行的任務。\n不要改檔案。"
  },
  {
    title: "查智能體狀態",
    text: "請讀取 `10-agent-team/agent-status.md`。\n用表格回報每個智能體目前是 Active、Waiting、Done 還是 Review。\n指出目前瓶頸是哪一個任務。\n不要改檔案。"
  },
  {
    title: "執行下一任務",
    text: "請依照 `10-agent-team/production-board.md` 和 `10-agent-team/agent-status.md`，執行目前瓶頸任務 T008：Draft animation script 001。\n完成後同步更新 production-board、agent-status、revision-log。"
  },
  {
    title: "週檢",
    text: "請啟用智能體團隊做一次週檢：\n1. Production Manager 檢查 production board 和 agent status\n2. Continuity Editor 檢查 revision log 和 canon drift\n3. Showrunner 判斷下一週最重要的 3 個任務\n\n最後輸出：本週完成、目前瓶頸、風險、下週前三優先任務、需要更新的檔案。"
  }
];

const repoIssueBaseUrl = "https://github.com/91105eddie/longform-story/issues/new";

const issueActions = [
  {
    title: "指派 T008 劇本任務",
    role: "Screenwriter",
    label: "agent-task",
    description: "建立一張 GitHub Issue，要求 Screenwriter 產出第一版動畫劇本。",
    issueTitle: "[Agent Task] T008 Draft animation script 001",
    body: [
      "## Role",
      "Screenwriter",
      "",
      "## Objective",
      "Draft `05-draft/animation-script-001.md` from the current scene list.",
      "",
      "## Input files",
      "- `05-draft/scene-list-001.md`",
      "- `04-plot/outline.md`",
      "- `03-characters/main-characters.md`",
      "- `02-world/world-overview.md`",
      "- `10-agent-team/production-board.md`",
      "- `10-agent-team/agent-status.md`",
      "",
      "## Expected output files",
      "- `05-draft/animation-script-001.md`",
      "- `10-agent-team/production-board.md`",
      "- `10-agent-team/agent-status.md`",
      "- `06-revision/revision-log.md`",
      "- `11-dashboard/app.js`",
      "",
      "## Acceptance criteria",
      "- Script is scene-based and animation-ready.",
      "- Internal narration is expressed as visual action, dialogue, voiceover, sound, or screen text.",
      "- Tracking files and dashboard data are updated."
    ].join("\n")
  },
  {
    title: "請 Continuity Editor 審查",
    role: "Continuity Editor",
    label: "agent-task",
    description: "建立審查任務，檢查劇本或最新修改是否造成 canon drift。",
    issueTitle: "[Agent Task] Continuity review latest draft",
    body: [
      "## Role",
      "Continuity Editor",
      "",
      "## Objective",
      "Review the latest changed files for contradictions, canon drift, unresolved setup, and production risks.",
      "",
      "## Input files",
      "- `01-concept/story-bible.md`",
      "- `02-world/world-overview.md`",
      "- `03-characters/main-characters.md`",
      "- `04-plot/outline.md`",
      "- `05-draft/scene-list-001.md`",
      "- `05-draft/animation-script-001.md` if available",
      "",
      "## Expected output files",
      "- `06-revision/revision-log.md`",
      "- Optional review note in `10-agent-team/`",
      "",
      "## Acceptance criteria",
      "- Findings are concrete and file-specific.",
      "- Open decisions are separated from confirmed contradictions.",
      "- Production-blocking issues are clearly marked."
    ].join("\n")
  },
  {
    title: "同步儀表板資料",
    role: "Production Manager",
    label: "dashboard,sync",
    description: "建立同步任務，要求更新 app.js 讓手機儀表板反映最新看板。",
    issueTitle: "[Dashboard Sync] Update dashboard data",
    body: [
      "## Objective",
      "Sync `11-dashboard/app.js` with the latest project tracking files.",
      "",
      "## Changed source files",
      "- `10-agent-team/production-board.md`",
      "- `10-agent-team/agent-status.md`",
      "- `06-revision/revision-log.md`",
      "",
      "## Expected output files",
      "- `11-dashboard/app.js`",
      "- `06-revision/revision-log.md`",
      "",
      "## Required checks",
      "- Run `node --check 11-dashboard/app.js`.",
      "- Confirm dashboard task counts and agent status match source files."
    ].join("\n")
  },
  {
    title: "新增自訂任務",
    role: "Production Manager",
    label: "agent-task",
    description: "開啟空白任務 issue，手動填寫角色、目標、輸入與輸出。",
    issueTitle: "[Agent Task] ",
    body: [
      "## Role",
      "",
      "## Objective",
      "",
      "## Input files",
      "- ",
      "",
      "## Expected output files",
      "- ",
      "",
      "## Acceptance criteria",
      "- ",
      "",
      "## Notes",
      ""
    ].join("\n")
  }
];

const statusClass = (status) => status.toLowerCase();

function pill(status) {
  return `<span class="status-pill ${statusClass(status)}">${status}</span>`;
}

function renderAgents(filter = "All") {
  const rows = agents
    .filter((agent) => filter === "All" || agent.status === filter)
    .map((agent) => `
      <tr>
        <td><strong>${agent.name}</strong></td>
        <td>${pill(agent.status)}</td>
        <td>${agent.task}</td>
        <td><span class="file-path">${agent.output}</span></td>
        <td>${agent.blocker}</td>
        <td>${agent.next}</td>
      </tr>
    `)
    .join("");
  document.querySelector("#agentTable").innerHTML = rows;
}

function renderTasks(filter = "All") {
  const groups = ["Todo", "Active", "Done"];
  const html = groups
    .map((group) => {
      const groupTasks = tasks.filter((task) => {
        const computedStatus = task.id === "T008" && task.status === "Todo" ? "Todo" : task.status;
        return computedStatus === group && (filter === "All" || task.status === filter);
      });
      return `
        <div class="task-column">
          <h3>${group}<span class="status-pill ${statusClass(group)}">${groupTasks.length}</span></h3>
          <div class="task-list">
            ${groupTasks.map((task) => `
              <article class="task-item">
                <span class="task-id">${task.id}</span>
                <p class="task-title">${task.title}</p>
                <div class="task-meta">
                  <span>Owner: ${task.owner}</span>
                  <span>Output: ${task.output}</span>
                </div>
              </article>
            `).join("") || `<p class="summary">No tasks</p>`}
          </div>
        </div>
      `;
    })
    .join("");
  document.querySelector("#taskBoard").innerHTML = html;
}

function renderHealth() {
  document.querySelector("#healthGrid").innerHTML = health.map((item) => `
    <article class="health-item">
      <div class="deliverable-header">
        <h3>${item.area}</h3>
        ${pill(item.status)}
      </div>
      <p>${item.notes}</p>
    </article>
  `).join("");
}

function renderDeliverables() {
  document.querySelector("#deliverableGrid").innerHTML = deliverables.map((item) => `
    <article class="deliverable">
      <div class="deliverable-header">
        <h3>${item.name}</h3>
        ${pill(item.status)}
      </div>
      <span class="file-path">${item.file}</span>
      <p>${item.notes}</p>
    </article>
  `).join("");
}

function renderCommands() {
  document.querySelector("#commandGrid").innerHTML = commands.map((command, index) => `
    <article class="command-card">
      <div class="command-header">
        <h3>${command.title}</h3>
        <button class="copy-button" type="button" data-command-index="${index}" aria-label="複製 ${command.title} 指令">⧉</button>
      </div>
      <pre class="command-text">${command.text}</pre>
    </article>
  `).join("");
}

function issueUrl(action) {
  const params = new URLSearchParams({
    title: action.issueTitle,
    body: action.body,
    labels: action.label
  });
  return `${repoIssueBaseUrl}?${params.toString()}`;
}

function renderIssueActions() {
  document.querySelector("#actionGrid").innerHTML = issueActions.map((action) => `
    <article class="action-card">
      <div>
        <span class="metric-label">${action.role}</span>
        <h3>${action.title}</h3>
        <p>${action.description}</p>
      </div>
      <div class="action-controls">
        <a class="primary-action" href="${issueUrl(action)}" target="_blank" rel="noopener">建立 Issue</a>
        <button class="copy-button" type="button" data-issue-index="${issueActions.indexOf(action)}" aria-label="複製 ${action.title} issue 內容">⧉</button>
      </div>
    </article>
  `).join("");
}

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => button.classList.toggle("active", button === activeButton));
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("已複製指令");
  } catch {
    showToast("瀏覽器封鎖複製，請手動選取");
  }
}

document.addEventListener("click", (event) => {
  const agentButton = event.target.closest("[data-agent-filter]");
  if (agentButton) {
    const buttons = [...document.querySelectorAll("[data-agent-filter]")];
    setActiveButton(buttons, agentButton);
    renderAgents(agentButton.dataset.agentFilter);
    return;
  }

  const taskButton = event.target.closest("[data-task-filter]");
  if (taskButton) {
    const buttons = [...document.querySelectorAll("[data-task-filter]")];
    setActiveButton(buttons, taskButton);
    renderTasks(taskButton.dataset.taskFilter);
    return;
  }

  const copyButton = event.target.closest("[data-command-index]");
  if (copyButton) {
    copyText(commands[Number(copyButton.dataset.commandIndex)].text);
    return;
  }

  const issueCopyButton = event.target.closest("[data-issue-index]");
  if (issueCopyButton) {
    const action = issueActions[Number(issueCopyButton.dataset.issueIndex)];
    copyText(`${action.issueTitle}\n\n${action.body}`);
  }
});

renderAgents();
renderTasks();
renderHealth();
renderDeliverables();
renderIssueActions();
renderCommands();
