---
title: lark-contact — Contacts & Directory
type: skill
tags: [lark, contact, user, directory, open_id]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tra cứu user theo tên/email/SĐT, lấy open_id, tra cứu thông tin profile, trạng thái cá nhân.

## Chọn lệnh đúng

| Mục tiêu | User identity | Bot identity |
|----------|--------------|--------------|
| Tìm người theo tên/email → lấy open_id | `+search-user` | Không hỗ trợ |
| Đã có open_id, lấy profile | `+search-user --user-ids <id>` | `+get-user --user-id <id>` |
| Xem thông tin bản thân | `+get-user` | Không hỗ trợ |
| Xem trạng thái / chữ ký đồng nghiệp | `user_profiles batch_query` | Không hỗ trợ |

## Ví dụ tìm người và gửi tin

```bash
# Bước 1: Tìm open_id
lark-cli contact +search-user --query "Tên Người" --has-chatted --as user

# Bước 2: Gửi tin (không cần qua contact nữa)
lark-cli im +messages-send --user-id ou_xxx --text "Xin chào!"
```

## Đã có open_id → không cần qua contact
Nếu đã có `open_id` và chỉ cần nhắn tin / tạo lịch, đi thẳng đến [[skills/lark-im]] hoặc [[skills/lark-calendar]].

## Lưu ý
- Kết quả nhiều người → **liệt kê cho user chọn**, không tự chọn người đầu tiên
- Cross-tenant user (`is_cross_tenant=true`) → nhiều field sẽ trống (bình thường)
- `41050 Permission denied` → phụ thuộc visible range của app hoặc user

## Không nằm trong skill này
- Gửi tin nhắn → [[skills/lark-im]]
- Tạo sự kiện → [[skills/lark-calendar]]
- Duyệt cây phòng ban → dùng `lark-openapi-explorer`

## Permissions

| Thao tác | Scope |
|----------|-------|
| Tìm user | `contact:user:search` |
| Xem profile cơ bản | `contact:user.base:readonly` |
| Xem profile đầy đủ | `contact:user.basic_profile:readonly` |

## Xem thêm
[[skills/lark-shared]] | [[sources/2026-larksuite-cli]]
