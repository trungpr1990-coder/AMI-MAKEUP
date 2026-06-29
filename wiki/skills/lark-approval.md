---
title: lark-approval — Approval Workflow
type: skill
tags: [lark, approval, workflow, task]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý quy trình phê duyệt: xem instances, approve/reject/transfer/rollback tasks.

## API Resources

```bash
lark-cli schema approval.<resource>.<method>  # Xem params trước khi gọi
lark-cli approval <resource> <method> [flags]
```

### instances
- `get` — Chi tiết một approval instance
- `cancel` — Thu hồi instance
- `cc` — Bản sao instance
- `initiated` — Xem danh sách đã khởi tạo

### tasks
- `remind` — Nhắc nhở người phê duyệt
- `approve` — Đồng ý
- `reject` — Từ chối
- `transfer` — Chuyển giao
- `query` — Xem danh sách tasks
- `add_sign` — Thêm ký
- `rollback` — Trả về bước trước

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc instances | `approval:instance:read` |
| Ghi instances | `approval:instance:write` |
| Đọc tasks | `approval:task:read` |
| Ghi tasks | `approval:task:write` |

## Xem thêm
[[skills/lark-shared]] | [[sources/2026-larksuite-cli]]
