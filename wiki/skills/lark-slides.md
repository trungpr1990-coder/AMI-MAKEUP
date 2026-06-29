---
title: lark-slides — Presentations
type: skill
tags: [lark, slides, presentation, ppt, xml]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tạo và chỉnh sửa Lark presentation (PPT). Giao tiếp qua XML protocol.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+create` | Tạo presentation (có thể thêm slides bằng `--slides '[...]'`) |
| `+media-upload` | Upload ảnh lên presentation (lấy file_token) |
| `+replace-slide` | Chỉnh sửa block trong slide (không thay đổi thứ tự trang) |

## Quick Reference

| Mục tiêu | Lệnh |
|----------|-------|
| Tạo mới PPT | `+create`, hoặc tạo blank → thêm slides qua `xml_presentation.slide.create` |
| Chỉnh tiêu đề/text | `+replace-slide` (block_replace/block_insert) |
| Upload ảnh | `+media-upload` → dùng `file_token` trong `<img src="...">` |
| Đọc toàn bộ XML | `xml_presentations.get` |
| Xoá slide | `xml_presentation.slide.delete` |

## Quy tắc bắt buộc
1. **Lên kế hoạch trước** (mới tạo/chỉnh nhiều): tạo `slide_plan.json` trước khi viết XML
2. **Ảnh phải upload lên Lark Drive** — không dùng `http://` URL trực tiếp
3. **XML phức tạp** (nhiều trang, ký tự đặc biệt, tiếng Việt) → tạo blank trước, thêm từng trang sau
4. **Sau khi tạo** → đọc lại XML để verify (`xml_presentations.get`)
5. **Chỉnh ít** → dùng `+replace-slide`; chỉnh nhiều → xoá trang cũ + tạo lại

## Cấu trúc XML
```xml
<slide>
  <style>...</style>   <!-- màu nền, theme -->
  <data>               <!-- mọi nội dung đều vào đây -->
    <content><p>Text</p></content>
  </data>
  <note>...</note>     <!-- ghi chú trang -->
</slide>
```

## Token từ Wiki URL
```bash
lark-cli wiki spaces get_node --as user --params '{"token":"wiki_token"}'
# → obj_type=slides → obj_token = xml_presentation_id
```

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc | `slides:presentation:read` |
| Tạo | `slides:presentation:create`, `slides:presentation:write_only` |
| Chỉnh sửa | `slides:presentation:update` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-whiteboard]] | [[sources/2026-larksuite-cli]]
