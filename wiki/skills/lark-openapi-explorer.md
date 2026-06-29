---
title: lark-openapi-explorer — OpenAPI Explorer
type: skill
tags: [lark, openapi, api, explore, raw]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Khám phá và gọi OpenAPI Lark chưa được CLI wrap. Dùng khi không có skill hoặc lệnh nào phù hợp.

## Khi nào dùng
Chỉ khi **không có skill hoặc command CLI nào đáp ứng** được yêu cầu.

## Luồng 5 bước

### Bước 1: Confirm CLI không có
```bash
lark-cli <service> --help
```

### Bước 2: Tìm module từ index
```
WebFetch https://open.larksuite.com/llms.txt
→ Tìm module liên quan đến yêu cầu
```

### Bước 3: Tìm API cụ thể trong module
```
WebFetch https://open.larksuite.com/llms-docs/zh-CN/llms-<module>.txt
```

### Bước 4: Đọc spec API đầy đủ
```
WebFetch https://open.larksuite.com/document/server-docs/.../<api>.md
→ Lấy: HTTP method, URL, params, request body, scopes, error codes
```

### Bước 5: Gọi API
```bash
# GET
lark-cli api GET /open-apis/<path> --params '{"key":"value"}'

# POST
lark-cli api POST /open-apis/<path> --data '{"key":"value"}'
```

## Quy tắc an toàn
- Không đoán API path — phải lấy từ docs
- Write/delete → xác nhận user trước
- Dùng `--dry-run` nếu hỗ trợ

## Tài liệu
- Feishu: `open.feishu.cn/llms.txt`
- Lark: `open.larksuite.com/llms.txt`
- Tài liệu viết bằng **tiếng Trung**, cần dịch sang tiếng Việt khi trình bày cho user

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-skill-maker]] | [[sources/2026-larksuite-cli]]
