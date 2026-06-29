---
title: lark-workflow-standup-report — Standup Report
type: skill
tags: [lark, workflow, standup, daily, report, calendar, task]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Workflow tổng hợp lịch + todo: lấy agenda hôm nay + task chưa xong, tạo báo cáo standup.

## Trigger
- "Hôm nay có gì" / "Lịch và việc cần làm hôm nay"
- "Tuần này có gì" / "Standup report"
- "Sáng sớm tóm tắt" / "Early morning brief"
- "Ngày mai có gì"

## Luồng xử lý

```
{ngày} ─┬─► calendar +agenda [--start/--end]           → Danh sách lịch
        └─► task +get-my-tasks --complete=false         → Việc chưa xong
                          │
                          ▼
              AI tổng hợp → Bảng tóm tắt
```

## Commands

```bash
# Lịch hôm nay (mặc định)
lark-cli calendar +agenda

# Lịch ngày cụ thể (phải dùng ISO 8601)
lark-cli calendar +agenda \
  --start "2026-06-04T00:00:00+07:00" \
  --end "2026-06-04T23:59:59+07:00"

# Todo chưa xong (PHẢI có --complete=false)
lark-cli task +get-my-tasks --complete=false

# Giới hạn theo deadline
lark-cli task +get-my-tasks --complete=false \
  --due-end "2026-06-04T23:59:59+07:00"
```

## **Quan trọng**: `--complete=false` là bắt buộc
Không có flag này → trả về cả task đã xong → standup report sai.

## Format output

```
## Tóm tắt ngày 2026-06-04 (Thứ Năm)

### Lịch
| Thời gian | Sự kiện | Trạng thái |
|-----------|---------|-----------|
| 09:00-10:00 | Họp sản phẩm | Đã xác nhận |

### Việc cần làm
- [ ] Task A (hạn: 2026-06-04)
- [ ] Task B

### Tổng kết
- N lịch, M việc cần làm
- Xung đột: ...
```

## Thời gian phải AI tính, không hỏi user
- "Hôm nay" → ngày hiện tại
- "Ngày mai" → ngày hiện tại + 1
- "Tuần này" → thứ Hai → hôm nay

## Permissions
- `calendar:calendar.event:read`
- `task:task:read`

## Auth (một lần)
```bash
lark-cli auth login --domain calendar,task
```

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-calendar]] | [[skills/lark-task]] | [[sources/2026-larksuite-cli]]
