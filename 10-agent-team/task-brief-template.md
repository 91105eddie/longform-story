# Task Brief Template

Use this template when assigning work to Codex or to a named agent role.

## Role

Example: Showrunner, Character Writer, Plot Architect.

## Objective

State the concrete result needed.

Example: clarify the protagonist's first-episode arc.

## Input Files

- `path/to/file.md`
- `path/to/another-file.md`

## Output Files

- `path/to/output.md`

## Constraints

- Preserve existing canon unless explicitly changing it.
- Record major changes in `06-revision/revision-log.md`.
- Keep the output usable for animation development.

## Questions To Answer

- What is currently clear?
- What is missing?
- What decision or artifact should be produced next?

## Acceptance Criteria

- The output names concrete story decisions.
- The output avoids vague advice.
- The output can be used by the next role in the workflow.
- Any unresolved questions are listed explicitly.

## Example Prompt

```text
請以 Plot Architect 的角色，閱讀 `01-concept/story-bible.md`、`04-plot/outline.md`、`04-plot/timeline.md`。

目標：判斷目前內容是否足夠展開成第一集動畫劇本。

請輸出：
- 第一集應該涵蓋的事件
- 開場、中段、結尾轉折
- 目前缺少的劇情決策
- 建議修改的檔案

先不要改檔案，回報分析即可。
```
