---
title: lark-apps — Miaoda App Platform
type: skill
tags: [lark, apps, miaoda, html, deploy, publish]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Deploy HTML/static web app lên Lark 妙搭 (Miaoda), tạo link công khai. Quản lý visibility scope.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+create` | Tạo Miaoda app mới |
| `+update` | Cập nhật tên/mô tả app |
| `+html-publish` | Deploy HTML file/folder → tạo URL |
| `+access-scope-set` | Đặt phạm vi truy cập (public/tenant/specific) |
| `+access-scope-get` | Xem phạm vi hiện tại |

## Luồng deploy HTML

```bash
# 1. Tạo app
lark-cli apps +create --name "Tên App" --app-type HTML
# → lưu app_id

# 2. Deploy
lark-cli apps +html-publish --app-id <id> --path ./dist

# 3. (Tùy chọn) Đặt quyền truy cập
lark-cli apps +access-scope-set --app-id <id> --scope tenant
```

## Quy tắc HTML
- **Entry file phải là `index.html`** — đổi tên khác sẽ bị từ chối
- Không được có file credentials (`.env`, `.aws/credentials`...) trong `--path`
- `--path` nhận file đơn hoặc directory (recursive tar.gz, không lọc)

## Scope options (3 loại, xung khắc nhau)
| Scope | Ý nghĩa | Extra flags |
|-------|---------|-------------|
| `tenant` | Toàn bộ công ty | Không có |
| `public` | Internet public | `--require-login <bool>` |
| `specific` | Người/nhóm cụ thể | `--targets <JSON>` |

## Khi user chưa có app_id
Mặc định tạo mới bằng `+create`. Không enumerate apps đã có (API không hỗ trợ cho agent).

## Auth
```bash
lark-cli auth login --domain apps  # Một lần, bao tất cả scopes cần thiết
```

## Xem thêm
[[skills/lark-shared]] | [[sources/2026-larksuite-cli]]
