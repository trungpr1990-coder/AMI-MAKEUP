---
title: Larksuite CLI — 26 Skills (Đã cài đặt)
type: source
tags: [lark, cli, skills, automation, ai-agent]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Summary

`larksuite/cli` là công cụ CLI mã nguồn mở chính thức của Lark/Feishu, cung cấp 26 AI Agent Skills trên 18+ domain nghiệp vụ. Đã cài đặt và xác thực thành công ngày 2026-06-03 cho tài khoản **Mạnh Trung610**.

## Trạng thái cài đặt

- **Version:** v1.0.47
- **Skills:** 26 skills cài tại `.agents/skills/` (local project)
- **Tài khoản:** Mạnh Trung610 (`ou_21a3c17b6fc03610faf649ab8ac7a686`)
- **App ID:** `cli_aaaaff00f7a19e17`
- **Brand:** lark
- **Token hết hạn:** 2026-06-04 (refresh đến 2026-06-10)

## Cài đặt & Cấu hình

```bash
# 1. Cài CLI
npm install -g @larksuite/cli

# 2. Cấu hình App
echo "<APP_SECRET>" | lark-cli config init --app-id "<APP_ID>" --app-secret-stdin --brand lark

# 3. Đăng nhập (recommend scopes)
lark-cli auth login --recommend

# 4. Cài Skills vào project
cd <project-dir>
npx skills add larksuite/cli -y
```

## 26 Skills theo domain

| # | Skill | Domain | Mô tả |
|---|-------|--------|--------|
| 1 | `lark-shared` | Core | Auth, identity switch (`--as user/bot`), permission handling, security rules |
| 2 | `lark-im` | Tin nhắn | Nhắn tin, quản lý chat, reply thread, download file, search messages, reactions, flags |
| 3 | `lark-doc` | Tài liệu | Tạo và chỉnh sửa Lark Doc dạng Markdown |
| 4 | `lark-drive` | Drive | Thao tác file, phân quyền, quản lý comment, upload/download |
| 5 | `lark-markdown` | Markdown | Tạo và chỉnh file Markdown trên Drive |
| 6 | `lark-sheets` | Bảng tính | Tạo, đọc, ghi, export spreadsheet |
| 7 | `lark-slides` | Slide | Quản lý và chỉnh nội dung presentation |
| 8 | `lark-base` | Base/Bitable | Quản lý bảng, field, record, phân tích dữ liệu, dashboard |
| 9 | `lark-calendar` | Lịch | Quản lý sự kiện, xem agenda, đặt phòng, hỗ trợ lịch họp |
| 10 | `lark-task` | Công việc | Tracking task, list, subtask, reminder, giao việc |
| 11 | `lark-mail` | Email | Gửi/nhận mail, tìm kiếm, soạn nháp, theo dõi |
| 12 | `lark-contact` | Danh bạ | Tra cứu user theo tên, email, SĐT; lấy profile |
| 13 | `lark-wiki` | Wiki | Quản lý Knowledge Space và tổ chức tài liệu |
| 14 | `lark-event` | Sự kiện | Đăng ký real-time event (WebSocket), regex routing |
| 15 | `lark-vc` | Video Call | Tìm kiếm record họp, phút họp, transcript |
| 16 | `lark-vc-agent` | VC Agent | Agent chuyên video conferencing |
| 17 | `lark-whiteboard` | Whiteboard | Render whiteboard và biểu đồ |
| 18 | `lark-minutes` | Biên bản | Xử lý biên bản họp, audio/video |
| 19 | `lark-openapi-explorer` | Dev Tools | Khám phá tài liệu API, tìm endpoint |
| 20 | `lark-skill-maker` | Dev Tools | Framework tạo custom skill |
| 21 | `lark-attendance` | Chấm công | Tra cứu lịch sử check-in cá nhân |
| 22 | `lark-approval` | Phê duyệt | Quản lý instances và tasks phê duyệt (approve/reject/transfer/rollback) |
| 23 | `lark-okr` | OKR | Quản lý Objective & Key Result |
| 24 | `lark-apps` | Platform | Quản lý ứng dụng Lark |
| 25 | `lark-workflow-meeting-summary` | Workflow | Tổng hợp báo cáo cuộc họp |
| 26 | `lark-workflow-standup-report` | Workflow | Standup report: lịch + todo hôm nay/tuần |

## Kiến trúc 3 lớp

```
Shortcuts (+prefix)    ← Ưu tiên dùng trước — thân thiện AI
API Commands           ← 200+ lệnh tự sinh từ platform metadata
Raw API                ← 2500+ endpoint, dùng khi không có shortcut
```

### Quy tắc dùng skill

1. **Luôn đọc `lark-shared` trước** — chứa quy tắc auth và security
2. **Ưu tiên Shortcuts** (`lark-cli <service> +<cmd>`) trước API Commands
3. **Luôn chạy `schema` trước khi gọi Raw API** — đừng đoán field format
4. **High-risk operations** (exit code 10) — phải xác nhận user trước khi thêm `--yes`

## Auth Commands

```bash
lark-cli auth login --recommend          # Login với recommended scopes
lark-cli auth login --domain calendar    # Login theo domain
lark-cli auth login --scope "im:message" # Login theo scope cụ thể
lark-cli auth login --no-wait --json     # Split-flow (AI agent mode)
lark-cli auth login --device-code <code> # Hoàn thành split-flow
lark-cli auth status                     # Xem session hiện tại
lark-cli auth check                      # Kiểm tra scope
lark-cli config init                     # Khởi tạo app config
lark-cli update                          # Cập nhật CLI + Skills
```

## Identity: Bot vs User

| | Bot (`--as bot`) | User (`--as user`) |
|--|---|---|
| Token | `tenant_access_token` | `user_access_token` |
| Cần auth login | Không | Có |
| Truy cập tài liệu cá nhân | Không | Có |
| Gửi tin dưới danh nghĩa | App name | Tên user |
| Phù hợp | App-level ops | User-owned resources |

## Workflow Skills

### lark-workflow-standup-report
Standup/early morning report: lấy lịch hôm nay + todo chưa xong, tổng hợp thành bảng có cột thời gian, trạng thái, phát hiện conflict.

```bash
lark-cli calendar +agenda
lark-cli task +get-my-tasks --complete=false
```

### lark-workflow-meeting-summary
Tự động tổng hợp biên bản cuộc họp từ VC minutes.

## IM Skill — Shortcuts

| Shortcut | Mô tả |
|----------|------|
| `+messages-send` | Gửi tin nhắn tới chat-id hoặc user-id |
| `+messages-reply` | Reply vào thread |
| `+messages-search` | Tìm kiếm tin nhắn theo keyword/sender/time |
| `+messages-mget` | Batch get messages theo ID |
| `+chat-list` | List các group chat |
| `+chat-search` | Tìm chat theo tên/members |
| `+chat-create` | Tạo group chat hoặc topic chat |
| `+flag-create/cancel/list` | Bookmark tin nhắn |
| `+messages-resources-download` | Download file/image từ chat |

## Key Points

- CLI mã nguồn mở, MIT license, 200+ commands
- Skills symlinked vào Claude Code tự động
- Scope `docs:secure_label:write_only` chưa được cấp (tính năng nhãn bảo mật — không ảnh hưởng daily use)
- Dùng `lark-cli update` để cập nhật đồng thời CLI + Skills
- Split-flow auth cho AI agent: `--no-wait --json` → gửi URL cho user → `--device-code <code>`

## Entities Mentioned
[[entities/larksuite]], [[entities/lark-cli]]

## Concepts
[[concepts/lark-skill]], [[concepts/lark-auth-identity]]

## Notes
Skills được cài tại `D:\BỘ NÃO THỨ 2\.agents\skills\` (26 thư mục). Global install thất bại (PromptScript không hỗ trợ global), chỉ local install hoạt động.
