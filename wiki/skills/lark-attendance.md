---
title: lark-attendance — Attendance / Check-in
type: skill
tags: [lark, attendance, checkin, timekeeping]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tra cứu lịch sử chấm công / check-in cá nhân.

## API Resource

```bash
lark-cli schema attendance.user_tasks.query   # Xem params
lark-cli attendance user_tasks query [flags]
```

## Tham số tự động điền (không hỏi user)

| Tham số | Giá trị cố định |
|---------|----------------|
| `employee_type` | `"employee_no"` |
| `user_ids` | `[]` (mảng rỗng) |

```bash
lark-cli attendance user_tasks query \
  --data '{"user_ids":[],...}' \
  --params '{"employee_type":"employee_no"}'
```

## Permissions

| Thao tác | Scope |
|----------|-------|
| Xem lịch chấm công | `attendance:task:readonly` |

## Xem thêm
[[skills/lark-shared]] | [[sources/2026-larksuite-cli]]
