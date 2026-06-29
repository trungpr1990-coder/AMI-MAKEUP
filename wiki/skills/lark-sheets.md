---
title: lark-sheets — Spreadsheets
type: skill
tags: [lark, sheets, spreadsheet, excel, chart]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Tạo và thao tác bảng tính: đọc/ghi dữ liệu, công thức, định dạng, chart, pivot table, conditional format, filter.

## Khi nào dùng
Với URL `/sheets/` hoặc `/spreadsheets/`. Không dùng cho file Excel local (cần import trước).

## Shortcuts — Tên chính xác (không đoán)

| Mục tiêu | Shortcut đúng | KHÔNG dùng |
|----------|--------------|-----------|
| Đọc dữ liệu | `+csv-get` (--range) | — |
| Đọc giá trị + formula/style | `+cells-get --include value,formula,style` | `--with-styles` |
| Ghi giá trị | `+csv-put` (--start-cell) | — |
| Ghi giá trị/formula/style | `+cells-set` (--range) | — |
| Tìm ô | `+cells-search` (--find) | `+cells-find` |
| Xem cấu trúc sheet | `+sheet-info` | `+sheet-get` |
| Xem workbook | `+workbook-info` | — |
| Xoá nội dung | `+cells-clear` (--scope content/formats/all) | `--type` |
| Export | `+workbook-export` | — |
| Chart | `+pivot-create`, `+chart-*` | — |

## Định vị bắt buộc (PUBLIC FLAG)
Mọi shortcut "công cộng 4 thứ" cần **2 nhóm XOR**:
1. `--url` HOẶC `--spreadsheet-token` (bắt buộc 1 trong 2)
2. `--sheet-id` HOẶC `--sheet-name` (bắt buộc 1 trong 2, trừ một số shortcut)

**Không đoán sheet name là "Sheet1"** — luôn dùng `+workbook-info` để lấy tên thật trước.

```bash
# Ví dụ đúng
lark-cli sheets +csv-get \
  --url "https://.../sheets/shtXXX" \
  --sheet-name "Dữ liệu" \
  --range "A1:F30"
```

## Wiki URL → cần xử lý đặc biệt
```bash
lark-cli wiki +node-get --node-token "<wiki_token>"
# Lấy obj_token khi obj_type=sheet, dùng làm --spreadsheet-token
```

## References (đọc trước khi thao tác phức tạp)
- `lark-sheets-core-operations.md` — workflow phân tích/chỉnh sửa
- `lark-sheets-visual-standards.md` — màu sắc, style chuẩn
- `lark-sheets-formula-translation.md` — chuyển đổi công thức Excel → Lark

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc | `sheets:spreadsheet:read`, `sheets:spreadsheet.meta:read` |
| Ghi | `sheets:spreadsheet:write_only` |
| Tạo | `sheets:spreadsheet:create` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-drive]] | [[sources/2026-larksuite-cli]]
