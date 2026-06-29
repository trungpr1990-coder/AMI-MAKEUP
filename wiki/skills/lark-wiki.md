---
title: lark-wiki — Wiki / Knowledge Base
type: skill
tags: [lark, wiki, knowledge, space, node]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý Lark Wiki: knowledge space, node (trang), members, di chuyển/copy node.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+space-list` | Liệt kê tất cả knowledge space |
| `+space-create` | Tạo knowledge space (user only) |
| `+delete-space` | Xoá space (async, có polling) |
| `+node-create` | Tạo node mới trong wiki |
| `+node-list` | Liệt kê nodes trong space/parent |
| `+node-get` | Lấy thông tin node theo URL/token |
| `+node-copy` | Sao chép node |
| `+node-delete` | Xoá node (async) |
| `+move` | Di chuyển node hoặc Drive doc vào wiki |
| `+member-add` | Thêm member vào space |
| `+member-remove` | Xoá member |
| `+member-list` | Xem danh sách members |

## Identity — Ưu tiên user
Dùng `--as user` mặc định. `--as bot` không thể thêm **phòng ban (department)** vào space.

## Xử lý Wiki URL
```bash
lark-cli wiki +node-get --node-token "<wiki_token>"
# → trả về obj_type (docx/sheet/bitable/...) và obj_token thật
```
Dùng `obj_token` với skill tương ứng (doc/sheets/base...).

## Xoá space — quy trình an toàn
1. Chỉ tên → `wiki +space-list` tìm theo name
2. Luôn liệt kê candidates cho user xác nhận trước khi xoá
3. `lark-cli wiki +delete-space --space-id <ID> --yes`

## "Tài liệu của tôi" / "My Document Library"
= Wiki personal library, không phải Drive root. Cần giải mã `space_id` trước khi thao tác.

## Permissions

| Thao tác | Scope |
|----------|-------|
| Xem space | `wiki:space:read`, `wiki:space:retrieve` |
| Tạo space | `wiki:space:write_only` |
| Đọc node | `wiki:node:read`, `wiki:node:retrieve` |
| Tạo/copy/move node | `wiki:node:create`, `wiki:node:copy`, `wiki:node:move` |
| Quản lý members | `wiki:member:create/retrieve/update` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-drive]] | [[sources/2026-larksuite-cli]]
