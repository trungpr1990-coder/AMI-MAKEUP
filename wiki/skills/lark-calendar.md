---
title: lark-calendar — Calendar & Events
type: skill
tags: [lark, calendar, event, meeting, room]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý lịch và sự kiện: xem lịch, tạo/cập nhật event, mời người, đặt phòng họp, kiểm tra lịch rảnh.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+agenda` | Xem lịch hôm nay / khoảng thời gian |
| `+create` | Tạo sự kiện + mời người + đặt phòng |
| `+update` | Cập nhật sự kiện (thêm/xoá người, đổi phòng) |
| `+freebusy` | Xem lịch rảnh/bận của user |
| `+rsvp` | Trả lời lời mời (accept/decline/tentative) |
| `+room-find` | Tìm phòng họp trống trong khung giờ **cụ thể** |
| `+suggestion` | Gợi ý khung giờ trống khi chưa biết giờ cụ thể |

## Quy tắc quan trọng
- **"Lịch"** trong câu nói thường có nghĩa là **sự kiện (Event)**, không phải Calendar container
- Xem hội họp **quá khứ** → dùng [[skills/lark-vc]] thay vì lịch
- `+room-find` chỉ dùng khi **đã có giờ cụ thể**; nếu chưa có → dùng `+suggestion` trước
- Sự kiện lặp lại (recurring): phải xác định đúng instance `event_id` trước khi chỉnh sửa

## Luồng đặt phòng họp
1. Chưa có giờ → `+suggestion` để lấy gợi ý giờ
2. Có giờ cụ thể → `+room-find` để tìm phòng trống
3. Xác nhận user → `+create` hoặc `+update` để đặt

## Thời gian
- Luôn dùng **ISO 8601**: `2026-06-10T14:00:00+07:00`
- Không dùng natural language: ~~"tomorrow"~~, ~~"next monday"~~
- Thứ Hai là ngày đầu tuần

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc lịch | `calendar:calendar.event:read` |
| Tạo sự kiện | `calendar:calendar.event:create` |
| Cập nhật | `calendar:calendar.event:update` |
| Xoá | `calendar:calendar.event:delete` |
| Xem lịch rảnh | `calendar:calendar.free_busy:read` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-vc]] | [[sources/2026-larksuite-cli]]
