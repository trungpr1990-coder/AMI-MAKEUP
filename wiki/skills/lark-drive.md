---
title: lark-drive — Cloud Drive / Storage
type: skill
tags: [lark, drive, file, cloud, upload, download]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý Cloud Drive (云空间/云盘/云存储): upload/download file, tạo folder, copy/move/delete, comment, permission, import/export tài liệu.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+search` | Tìm kiếm file/doc trong Drive |
| `+upload` | Upload file local lên Drive |
| `+download` | Download file từ Drive |
| `+create-folder` | Tạo thư mục |
| `+import` | Import local file → Lark doc (docx/sheet/bitable/slides) |
| `+export` | Export doc → local file |
| `+move` | Di chuyển file/folder |
| `+delete` | Xoá file/folder |
| `+status` | So sánh local dir với Drive folder |
| `+pull` | Sync Drive → local |
| `+push` | Sync local → Drive |
| `+sync` | Two-way sync |
| `+add-comment` | Thêm comment vào doc |
| `+inspect` | Giải mã URL → type, token, title |
| `+version-history` | Xem lịch sử phiên bản |

## Import rules

| File local | Lệnh | Loại doc tạo ra |
|-----------|------|-----------------|
| `.docx`, `.md`, `.html` | `+import --type docx` | Lark Doc |
| `.xlsx`, `.csv` | `+import --type sheet` | Spreadsheet |
| `.xlsx`, `.csv`, `.base` | `+import --type bitable` | Base/Bitable |
| `.pptx` | `+import --type slides` | Slides |

## Wiki URL — xử lý đặc biệt
Wiki link (`/wiki/TOKEN`) không thể dùng trực tiếp làm `file_token`:
```bash
lark-cli drive +inspect --url 'https://xxx.feishu.cn/wiki/wikcnXXX'
# → trả về type, token thật, title
```

## Comment rules
- Default query chỉ lấy **chưa giải quyết** (`is_solved:false`)
- Có 2 loại: **full-doc comment** và **local comment** (gắn vào block cụ thể)
- Review/audit → ưu tiên local comment thay vì full-doc comment

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc metadata | `drive:drive.metadata:readonly` |
| Download file | `drive:file:download` |
| Upload file | `drive:file:upload` |
| Tạo folder | `space:folder:create` |
| Comment | `docs:document.comment:create/read` |
| Phân quyền | `docs:permission.member:create` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-doc]] | [[skills/lark-base]] | [[sources/2026-larksuite-cli]]
