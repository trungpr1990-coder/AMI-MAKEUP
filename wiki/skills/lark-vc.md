---
title: lark-vc — Video Conferencing (History)
type: skill
tags: [lark, vc, meeting, minutes, transcript]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tìm kiếm hội họp đã kết thúc, lấy biên bản/loggia/transcript, xem danh sách tham dự. **Không dùng cho hội họp đang diễn ra** → xem [[skills/lark-vc-agent]].

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+search` | Tìm meeting đã kết thúc (cần ít nhất 1 filter) |
| `+notes` | Lấy biên bản/transcript (qua meeting-ids/minute-tokens/calendar-event-ids) |
| `+recording` | Lấy minute_token từ meeting-ids |

## Phân biệt sản phẩm

| Muốn gì | Dùng lệnh gì |
|---------|-------------|
| Xem AI tóm tắt | `+notes` → `note_doc_token` |
| Xem transcript đầy đủ | `+notes` → `verbatim_doc_token` |
| Xem todo/chapter | `+notes` → AI minutes hoặc妙记 |
| Xem danh sách tham dự | `vc meeting get --with-participants` |
| Download video/audio | [[skills/lark-minutes]] `+download` |

## Routing rules
- **Quá khứ** ("hôm qua", "tuần trước") → `vc +search`
- **Tương lai** ("ngày mai", "tuần tới") → [[skills/lark-calendar]]
- **Hôm nay** → search cả hai: `vc +search` + `calendar +agenda`

## Khi nào KHÔNG được dùng AI tóm tắt trực tiếp
Nếu user yêu cầu "tóm tắt lại / phân tích" → phải đọc từ **transcript** (`verbatim_doc_token`), không được chỉ dùng `note_doc_token`. AI summary là nén lần 2, có thể bỏ sót chi tiết.

## Permissions

| Thao tác | Scope |
|----------|-------|
| Tìm meeting | `vc:meeting.search:read` |
| Lấy biên bản | `vc:note:read`, `vc:meeting.meetingevent:read` |
| Lấy recording | `vc:record:readonly` |
| Xem tham dự viên | `vc:meeting.meetingevent:read` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-vc-agent]] | [[skills/lark-minutes]] | [[skills/lark-calendar]] | [[sources/2026-larksuite-cli]]
