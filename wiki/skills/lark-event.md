---
title: lark-event — Real-time Events (WebSocket)
type: skill
tags: [lark, event, websocket, realtime, subscribe]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Đăng ký và tiêu thụ real-time events từ Lark qua WebSocket. Dùng cho bots, xử lý tin nhắn, subscriber dài hạn.

## Lệnh chính

| Lệnh | Mô tả |
|------|-------|
| `lark-cli event list` | Liệt kê tất cả EventKeys có thể subscribe |
| `lark-cli event schema <EventKey>` | Xem params và output schema |
| `lark-cli event consume <EventKey>` | Blocking consume, events → stdout NDJSON |
| `lark-cli event status` | Xem trạng thái bus daemon |
| `lark-cli event stop` | Dừng bus daemon |

## Flags quan trọng

| Flag | Mô tả |
|------|-------|
| `--param key=value` / `-p` | Business params |
| `--jq <expr>` | Filter/transform mỗi event |
| `--max-events N` | Thoát sau N events |
| `--timeout D` | Thoát sau thời gian D (vd: `30s`, `2m`) |
| `--output-dir <dir>` | Lưu mỗi event vào file |

## Luồng chuẩn

```bash
# 1. Tìm EventKey
lark-cli event list --json

# 2. Xem schema
lark-cli event schema im.message.receive_v1 --json

# 3. Consume
lark-cli event consume im.message.receive_v1 --as bot \
  --max-events 10 --timeout 5m
```

## Subprocess contract
- stderr emit `[event] ready event_key=<key>` khi sẵn sàng → parent process đợi dòng này
- stdin EOF = tín hiệu shutdown graceful → dùng `< <(tail -f /dev/null)` để tránh
- Exit code 0: `reason: limit/timeout/signal` (bình thường)
- **Không dùng `kill -9`** nếu EventKey có PreConsume hook → rò rỉ subscription

## EventKey domains
- **IM**: `im.message.receive_v1`, reactions, chat changes (11 keys)
- **VC**: `vc.meeting.participant_meeting_ended_v1`, `vc.note.generated_v1`
- **Minutes**: `minutes.minute.generated_v1`

## Permissions
Mỗi EventKey có scope riêng; xem trong `event schema <key> --json`.

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-im]] | [[sources/2026-larksuite-cli]]
