---
title: lark-doc — Lark Documents (Docx v2)
type: skill
tags: [lark, doc, docx, document, wiki]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tạo, đọc, chỉnh sửa Lark Doc (v2 API). Hỗ trợ XML và Markdown. Dùng cho `/docx/` và `/wiki/` URLs.

## Shortcuts (LUÔN thêm `--api-version v2`)

| Shortcut | Mô tả |
|----------|-------|
| `+fetch` | Đọc nội dung doc |
| `+create` | Tạo doc mới |
| `+update` | Cập nhật doc (append/replace/str_replace/block ops) |
| `+media-insert` | Chèn ảnh/file vào doc |
| `+media-download` | Download media từ doc |
| `+media-preview` | Xem preview media |

## Format rules
- **Tạo/import**: XML hoặc Markdown đều được. Mặc định XML (rich blocks: callout, grid, checkbox...)
- **Chỉnh sửa chính xác**: Ưu tiên XML (`--doc-format xml`); không tự chuyển sang Markdown

## XML nhanh
```bash
lark-cli docs +create --api-version v2 \
  --content '<title>Tiêu đề</title><p>Nội dung</p>'

lark-cli docs +fetch --api-version v2 --doc "URL_hoặc_token"

lark-cli docs +update --api-version v2 --doc "URL" \
  --command append --content '<p>Thêm nội dung</p>'
```

## Khi gặp embedded content
- `<sheet token="...">` → chuyển sang [[skills/lark-sheets]]
- `<bitable token="...">` → chuyển sang [[skills/lark-base]]
- `<whiteboard token="...">` → chuyển sang [[skills/lark-whiteboard]]

## Anchor link (block link)
```
URL_doc#block_id
```
Dùng `+fetch --detail with-ids` để lấy block_id.

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc doc | `docs:document.content:read` |
| Tạo doc | `docx:document:create` |
| Chỉnh sửa | `docx:document:write_only` |
| Upload media | `docs:document.media:upload` |
| Download media | `docs:document.media:download` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-drive]] | [[sources/2026-larksuite-cli]]
