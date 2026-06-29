---
title: lark-im — Instant Messaging
type: skill
tags: [lark, im, chat, message, file]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tin nhắn tức thì: nhắn tin, quản lý chat, reply thread, tìm kiếm, download file, reactions, flags.

## Core Concepts
- **Message** (`om_xxx`): Tin nhắn đơn. Hỗ trợ text, image, file, audio, video, interactive card...
- **Chat** (`oc_xxx`): Group chat hoặc P2P
- **Thread** (`omt_xxx`): Reply thread dưới một message
- **Reaction**: Emoji reaction
- **Flag**: Bookmark trên message/thread

## Shortcuts (ưu tiên dùng)

| Shortcut | Mô tả |
|----------|-------|
| `+messages-send` | Gửi tin nhắn tới chat-id hoặc user-id |
| `+messages-reply` | Reply vào thread (user/bot) |
| `+messages-search` | Tìm kiếm tin nhắn (user only) |
| `+messages-mget` | Batch get messages theo ID (tối đa 50) |
| `+messages-resources-download` | Download file/image từ message |
| `+chat-list` | List các chat đang tham gia |
| `+chat-search` | Tìm chat theo tên/members |
| `+chat-create` | Tạo group chat hoặc topic chat |
| `+chat-update` | Cập nhật tên/mô tả group |
| `+threads-messages-list` | List messages trong thread |
| `+flag-create` | Bookmark tin nhắn |
| `+flag-cancel` | Xoá bookmark |
| `+flag-list` | Xem danh sách bookmark |

## Lưu ý quan trọng
- `--as user`: tin nhắn gửi dưới tên user thật, có thể truy cập P2P
- `--as bot`: tin nhắn gửi dưới tên app; bot phải trong chat mới thấy được
- Reactions tự động được đính kèm vào kết quả của 4 shortcut mget/list/search; dùng `--no-reactions` để tắt

## Permissions

| Thao tác | Scope |
|----------|-------|
| Gửi tin nhắn | `im:message` |
| Đọc tin nhắn | `im:message:readonly` |
| Tạo/quản lý chat | `im:chat:create`, `im:chat:update` |
| Quản lý members | `im:chat.members:write_only` |
| Reactions | `im:message.reactions:read/write_only` |
| Pins | `im:message.pins:read/write_only` |

## Xem thêm
[[skills/lark-shared]] | [[sources/2026-larksuite-cli]]
