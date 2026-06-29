---
title: Pancake / pages.fm
type: entity
tags: [crm, facebook-messenger, omnichannel, saas, việt-nam]
created: 2026-06-07
updated: 2026-06-07
sources: [D:\botchat-thuythuy\config.json]
---

## Tổng Quan

**Pancake** (còn gọi là **pages.fm**) là nền tảng CRM omnichannel của Việt Nam, chuyên quản lý tin nhắn và đơn hàng từ Facebook Fanpage, Zalo, Instagram, v.v. Được dùng phổ biến bởi các shop online và trung tâm đào tạo để chăm sóc khách hàng tập trung tại một nơi.

## API Tích Hợp

| Thông tin | Giá trị |
|-----------|---------|
| Base URL | `https://pages.fm/api/public_api` |
| Xác thực | `page_access_token` trong query string hoặc body |
| Rate limit | Nên delay ≥600ms giữa các lần gọi |

### Endpoints Đã Dùng

```
GET  /v1/pages/{pageId}/conversations      # Lấy danh sách hội thoại
GET  /v1/pages/{pageId}/conversations/{id}/messages  # Lấy tin nhắn
POST /v1/pages/{pageId}/conversations/{id}/messages  # Gửi tin nhắn
```

### Cấu Trúc Hội Thoại

- `conversation_id` = `{pageId}_{customerId}`
- Tin nhắn phân biệt `from.id == pageId` (nhân viên) vs khác (khách)
- Trường `seen` / `is_unseen` để phát hiện tin chưa đọc
- `last_message.from_customer: true` để lọc conversation cần trả lời

## Tích Hợp Hiện Tại

Pancake được dùng trong [[sources/2026-botchat-thuythuy]] cho [[entities/gao-nau-personal-makeup]]:
- poll.mjs quét danh sách hội thoại mỗi 10s
- Phát hiện hội thoại: tin cuối từ khách + chưa seen + chưa có vé đang xử lý
- Sau khi duyệt: gửi tin qua Pancake API, đánh dấu seen

## Nguồn

[[sources/2026-botchat-thuythuy]]
