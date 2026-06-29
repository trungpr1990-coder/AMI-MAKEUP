---
title: Lark Skill (CLI Skill Module)
type: concept
tags: [lark, skill, ai-agent, automation, cli]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

Trong hệ sinh thái [[entities/lark-cli]], **skill** là module độc lập phục vụ một domain nghiệp vụ cụ thể. Mỗi skill là một file SKILL.md chứa hướng dẫn cho AI Agent, shortcuts, quy tắc auth, và bảng permission.

## Cách dùng

Skills được symlink vào Claude Code khi cài bằng `npx skills add larksuite/cli -y`. Claude tự động đọc SKILL.md khi nhận lệnh liên quan domain đó.

**Quy tắc bắt buộc:** Mỗi skill bắt đầu với `CRITICAL — đọc lark-shared/SKILL.md trước`, vì lark-shared chứa toàn bộ quy tắc auth, identity và security dùng chung.

## 26 Skills đã cài (2026-06-03)

### Domain chính
| Skill | Domain |
|-------|--------|
| `lark-shared` | Core — auth, identity, security |
| `lark-im` | Instant Messaging |
| `lark-doc` | Lark Docs |
| `lark-drive` | Drive / File Storage |
| `lark-markdown` | Markdown on Drive |
| `lark-sheets` | Spreadsheets |
| `lark-slides` | Presentations |
| `lark-base` | Base / Bitable (no-code DB) |
| `lark-calendar` | Calendar & Events |
| `lark-task` | Tasks & Todos |
| `lark-mail` | Email |
| `lark-contact` | Contacts & Directory |
| `lark-wiki` | Wiki / Knowledge Base |
| `lark-event` | Real-time Events (WebSocket) |
| `lark-vc` | Video Conferencing |
| `lark-vc-agent` | VC Agent |
| `lark-whiteboard` | Whiteboard |
| `lark-minutes` | Meeting Minutes |
| `lark-attendance` | Attendance |
| `lark-approval` | Approval Workflow |
| `lark-okr` | OKR |
| `lark-apps` | App Platform |

### Workflow (multi-step)
| Skill | Mô tả |
|-------|--------|
| `lark-workflow-standup-report` | Standup report = calendar agenda + task todos |
| `lark-workflow-meeting-summary` | Tổng hợp biên bản họp từ VC minutes |

### Dev Tools
| Skill | Mô tả |
|-------|--------|
| `lark-openapi-explorer` | Khám phá và tìm kiếm API docs |
| `lark-skill-maker` | Framework tạo custom skill mới |

## Cấu trúc một Skill

```
.agents/skills/<skill-name>/
├── SKILL.md          ← Hướng dẫn chính cho AI Agent
└── references/       ← File tham chiếu chi tiết cho từng shortcut
    └── lark-<skill>-<command>.md
```

## Shortcuts — Giao diện chính cho AI

Mỗi skill cung cấp **Shortcuts** (tiền tố `+`), là các lệnh high-level:

```bash
lark-cli im +messages-send --user-id xxx --text "Hello"
lark-cli calendar +agenda
lark-cli task +get-my-tasks --complete=false
lark-cli base +query-records --app-token xxx --table-id xxx
```

Shortcuts được ưu tiên vì: smart defaults, output thân thiện, tự xử lý pagination.

## Tạo custom skill

Dùng `lark-skill-maker`:
```bash
lark-cli skill-maker create --name my-skill
```

Xem đầy đủ tại: [[sources/2026-larksuite-cli]]
