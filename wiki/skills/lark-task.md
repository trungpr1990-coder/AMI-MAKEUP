---
title: lark-task — Tasks & Todos
type: skill
tags: [lark, task, todo, tasklist, subtask]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý task, todo list, subtask, giao việc, nhắc nhở, upload attachment, task AI agent.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+create` | Tạo task |
| `+update` | Cập nhật task |
| `+complete` | Đánh dấu hoàn thành |
| `+reopen` | Mở lại task đã xong |
| `+assign` | Giao/bỏ giao task cho người |
| `+comment` | Thêm comment vào task |
| `+get-my-tasks` | Xem task được giao cho tôi |
| `+get-related-tasks` | Xem task liên quan đến tôi |
| `+search` | Tìm kiếm task theo keyword |
| `+upload-attachment` | Upload file đính kèm vào task |
| `+tasklist-create` | Tạo tasklist |
| `+tasklist-search` | Tìm tasklist |
| `+tasklist-task-add` | Thêm task vào tasklist |
| `+tasklist-members` | Quản lý members của tasklist |
| `+reminder` | Quản lý nhắc nhở |
| `+followers` | Quản lý người theo dõi |
| `+set-ancestor` | Set/xoá task cha |
| `+subscribe-event` | Đăng ký task events |

## Phân biệt Search vs List
- Có **keyword** cụ thể → dùng `+search`
- Chỉ có **điều kiện** ("việc của tôi", "đã xong") → dùng `+get-my-tasks` hoặc `+get-related-tasks`
- "Tôi quan tâm / tôi tạo" → `+get-related-tasks`
- "Giao cho tôi / phân công cho tôi" → `+get-my-tasks`

## Lưu ý
- `task guid` ≠ số task hiển thị (`t104121`). Với applink `todo/task?guid=...`, lấy `guid` từ URL query
- Khi ghi `due` mới set được `repeat_rule` và `reminder`
- `start` phải ≤ `due`
- Đầu ra luôn kèm `url` để user click vào xem task

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc task | `task:task:read` |
| Ghi task | `task:task:write` |
| Đọc tasklist | `task:tasklist:read` |
| Ghi tasklist | `task:tasklist:write` |
| Custom fields | `task:custom_field:read/write` |
| Sections | `task:section:read/write` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-workflow-standup-report]] | [[sources/2026-larksuite-cli]]
