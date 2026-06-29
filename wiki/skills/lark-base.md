---
title: lark-base — Base / Bitable (No-code Database)
type: skill
tags: [lark, base, bitable, database, record, table]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý Lark Base (Bitable): tạo bảng, quản lý field/record/view, phân tích dữ liệu, dashboard, workflow, phân quyền.

## Khi nào dùng
- User đề cập Base / đa chiều bảng / bitable / link `/base/`
- Cần tạo bảng, field, record, view trong Base
- Phân tích dữ liệu, thống kê, dashboard
- Quản lý workflow, role, form trong Base

## Quick Routing

| Mục tiêu | Lệnh |
|----------|-------|
| Xem Base | `+base-get` |
| Tạo/sao chép Base | `+base-create`, `+base-copy` |
| Xem cấu trúc Base | `+base-block-list` |
| Quản lý bảng | `+table-list/get/create/update/delete` |
| Đọc field | `+field-list`, `+field-get` |
| Tạo/cập nhật field | `+field-create`, `+field-update` |
| Đọc records | `+record-get`, `+record-list`, `+record-search` |
| Ghi records | `+record-upsert`, `+record-batch-create` |
| Phân tích dữ liệu | `+data-query` |
| Quản lý view | `+view-*` |
| Dashboard | `+dashboard-*` |
| Workflow | `+workflow-*` |
| Phân quyền | `+role-*`, `+advperm-*` |

## Lấy Base Token từ URL

| URL | Cách lấy token |
|-----|---------------|
| `/base/{token}` | Lấy token sau `/base/` |
| `/wiki/{token}` | Phải gọi `wiki +node-get` trước, lấy `obj_token` |
| `/base/{token}?table={id}` | `table=tbl*` → table-id, `blk*` → dashboard, `wkf*` → workflow |

## Quy tắc ghi dữ liệu
- Ghi tối đa **200 records** mỗi batch
- Chỉ ghi **storage fields**; system/formula/lookup fields = read-only
- Attachment field → dùng `+record-upload-attachment`
- `select/multiselect` → kiểm tra options trước bằng `+field-search-options`

## Quy tắc truy vấn
- `+record-list` chỉ là sample, không thể trả lời câu hỏi global nếu có `has_more=true`
- Dùng `+data-query` cho aggregation/thống kê
- Dùng filter/sort ở server, không filter local sau khi pull về

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc record | `base:record:read` |
| Ghi record | `base:record:write`, `base:record:create` |
| Quản lý field | `base:field:read/write` |
| Quản lý bảng | `base:table:read/write` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-drive]] | [[sources/2026-larksuite-cli]]
