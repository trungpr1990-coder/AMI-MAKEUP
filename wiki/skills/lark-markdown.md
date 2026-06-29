---
title: lark-markdown — Markdown Files on Drive
type: skill
tags: [lark, markdown, md, drive, file]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tạo, đọc, chỉnh sửa, so sánh file Markdown thuần trên Lark Drive (không phải Lark Doc/docx).

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+create` | Tạo file `.md` mới trên Drive |
| `+fetch` | Đọc nội dung file `.md` |
| `+patch` | Thay thế text trong file `.md` |
| `+overwrite` | Ghi đè toàn bộ file `.md` |
| `+diff` | So sánh 2 phiên bản remote, hoặc remote vs local |

## Quy tắc
- File name phải có đuôi `.md`
- `+patch` = download → replace local → upload lại (không phải server-side patch)
- `+patch` chỉ hỗ trợ **1 pattern** mỗi lần; nội dung sau replace không được rỗng
- `--content` nhận string, `@file`, hoặc `-` (stdin)

## Phân biệt với lark-doc
| | lark-markdown | lark-doc |
|--|--------------|----------|
| Loại file | File `.md` thuần | Lark Doc (docx) |
| Format | Markdown text | XML / Markdown |
| Phong phú | Không | Có (callout, grid...) |

## Khi cần...
- Import `.md` thành Lark Doc → [[skills/lark-drive]] `+import --type docx`
- Rename/move/delete/search/comment → [[skills/lark-drive]]
- Xem lịch sử phiên bản → [[skills/lark-drive]] `+version-history`

## Permissions
Kế thừa từ Drive (upload/download file).

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-drive]] | [[sources/2026-larksuite-cli]]
