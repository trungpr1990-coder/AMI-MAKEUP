---
title: lark-vc-agent — VC Agent (Live Meeting)
type: skill
tags: [lark, vc, agent, meeting, live, realtime]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Robot tham gia hội họp đang diễn ra, đọc sự kiện real-time (ai vào/ra, phát biểu, chat, screen share).

> **Lưu ý:** Đang trong giai đoạn early access. Nếu gặp lỗi `20017/ErrNotInGray` hoặc `missing_scope`, nhắn user tham gia early bird group.

## Shortcuts

| Shortcut | Loại | Mô tả |
|----------|------|-------|
| `+meeting-join` | Ghi | Vào hội họp theo 9 chữ số meeting number |
| `+meeting-events` | Đọc | Lấy sự kiện trong hội họp đang diễn ra |
| `+meeting-leave` | Ghi | Rời hội họp |

## Luồng cơ bản
```bash
# 1. Vào họp — lưu meeting.id ngay
JOIN=$(lark-cli vc +meeting-join --meeting-number 123456789 --format json)
MID=$(echo "$JOIN" | jq -r '.data.meeting.id')

# 2. Đọc sự kiện (thường 10-30s/lần)
lark-cli vc +meeting-events --meeting-id "$MID" --page-all --format pretty

# 3. Rời họp
lark-cli vc +meeting-leave --meeting-id "$MID"
```

## Phân biệt với lark-vc

| | lark-vc | lark-vc-agent |
|--|---------|--------------|
| Phạm vi | Hội họp đã kết thúc | Hội họp đang diễn ra |
| Tham gia thật | Không | Có (robot join) |
| Real-time events | Không | Có |

## Lưu ý quan trọng
- `+meeting-join` nhận **9 số meeting number**, không phải URL hay `meeting_id`
- `+meeting-events` nhận **`meeting_id`** (dài), không phải 9 số
- Phải join trước mới đọc được events
- Mỗi lần cần fresh data → phải gọi lại `+meeting-events`

## Permissions

| Thao tác | Scope |
|----------|-------|
| Join/Leave | `vc:meeting.bot.join:write` |
| Đọc events | `vc:meeting.meetingevent:read` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-vc]] | [[sources/2026-larksuite-cli]]
