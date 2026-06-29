---
title: Skills For Real Engineers — Matt Pocock (17 Skills)
type: concept
tags: [engineering, skills, tdd, architecture, domain-modeling, ai-agents, claude-code]
created: 2026-06-19
updated: 2026-06-19
sources: [mattpocock-skills-readme.md]
---

## Tổng quan

Bộ skills của [[entities/matt-pocock]] giải quyết 4 failure mode phổ biến khi dùng AI coding agent. Triết lý: nhỏ, composable, giữ quyền kiểm soát cho developer.

**Vị trí file:** `D:\BỘ NÃO THỨ 2\wiki\skills\skills-main\skills\`

---

## 4 Failure Modes & Fix

| Failure Mode | Vấn đề | Fix bằng skill |
|---|---|---|
| **#1 Misalignment** | Agent không hiểu đúng yêu cầu | `/grill-me`, `/grill-with-docs` |
| **#2 Quá verbose** | Agent dùng 20 từ thay vì 1 | `/grill-with-docs` → CONTEXT.md shared language |
| **#3 Code không chạy** | Thiếu feedback loop | `/tdd` (red-green-refactor), `/diagnosing-bugs` |
| **#4 Ball of mud** | Codebase phức tạp, khó thay đổi | `/to-prd`, `/improve-codebase-architecture` |

---

## Danh sách Skills

### Engineering — User-invoked (chỉ người gọi)

| Skill | Dùng khi |
|-------|----------|
| `ask-matt` | Router: hỏi skill nào phù hợp tình huống hiện tại |
| `grill-with-docs` | Grilling session + xây domain model, cập nhật CONTEXT.md và ADRs — **skill mạnh nhất** |
| `triage` | Di chuyển issues qua state machine triage roles |
| `improve-codebase-architecture` | Scan codebase tìm cơ hội "deepening", tạo HTML report, chọn vấn đề để grill |
| `setup-matt-pocock-skills` | Cấu hình repo (issue tracker, labels, domain doc). **Chạy đầu tiên** |
| `to-issues` | Phân rã plan/spec/PRD thành issues độc lập theo vertical slices |
| `to-prd` | Tổng hợp conversation thành PRD, publish lên issue tracker |
| `prototype` | Xây throwaway prototype: terminal app (business logic) hoặc nhiều UI variation |

### Engineering — Model-invoked (AI tự kích hoạt)

| Skill | Dùng khi |
|-------|----------|
| `diagnosing-bugs` | Debug loop có kỷ luật: reproduce → minimise → hypothesise → instrument → fix → regression-test |
| `tdd` | TDD red-green-refactor, build từng vertical slice |
| `domain-modeling` | Xây và làm sắc nét domain model, stress-test edge cases, cập nhật CONTEXT.md + ADRs |
| `codebase-design` | Thiết kế deep modules: behavior nhiều, interface nhỏ, testable |

### Productivity — User-invoked

| Skill | Dùng khi |
|-------|----------|
| `grill-me` | Phỏng vấn không khoan nhượng về plan/design cho đến khi mọi nhánh quyết định được giải quyết |
| `handoff` | Nén conversation thành handoff doc để agent khác tiếp tục |
| `teach` | Dạy user một skill/concept qua nhiều session, dùng thư mục hiện tại làm workspace |
| `writing-great-skills` | Reference cách viết skills tốt: vocabulary và principles |

### Productivity — Model-invoked

| Skill | Dùng khi |
|-------|----------|
| `grilling` | Vòng phỏng vấn reusable — nền tảng của `grill-me` và `grill-with-docs` |

### Misc (ít dùng)

| Skill | Dùng khi |
|-------|----------|
| `git-guardrails-claude-code` | Cài Claude Code hooks chặn git commands nguy hiểm (push, reset --hard, clean) |
| `migrate-to-shoehorn` | Migrate test files từ `as` assertions sang @total-typescript/shoehorn |
| `scaffold-exercises` | Tạo cấu trúc thư mục exercises với sections, problems, solutions, explainers |
| `setup-pre-commit` | Cài Husky pre-commit hooks: lint-staged, Prettier, type check, tests |

---

## Pattern Chính: CONTEXT.md

File `CONTEXT.md` ở root project — shared language giữa developer và AI:

- **BEFORE:** "There's a problem when a lesson inside a section of a course is made 'real'"
- **AFTER:** "There's a problem with the materialization cascade"

Lợi ích: naming nhất quán, ít tokens, codebase dễ navigate hơn.

---

## Phân loại User-invoked vs Model-invoked

- **User-invoked** (`disable-model-invocation: true`): chỉ người type `/skill-name` mới kích hoạt. Thường là orchestrator.
- **Model-invoked**: AI tự kích hoạt khi task phù hợp, hoặc người dùng gọi trực tiếp.
- User-invoked có thể gọi model-invoked, nhưng **không bao giờ gọi user-invoked khác**.

---

## Workflow đề xuất (bắt đầu project mới)

```
1. /setup-matt-pocock-skills   → cấu hình repo
2. /grill-with-docs             → align + xây CONTEXT.md
3. /to-prd                      → tạo PRD từ conversation
4. /to-issues                   → phân rã thành issues
5. /tdd (model-invoked)         → implement từng issue
6. /improve-codebase-architecture → chạy mỗi vài ngày
```

---

## Nguồn

[[sources/2026-mattpocock-skills]] | [[entities/matt-pocock]]
