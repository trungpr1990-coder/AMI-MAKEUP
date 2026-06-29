---
title: lark-shared — Core Auth & Security
type: skill
tags: [lark, auth, identity, security, core]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Skill nền tảng — auth login, chuyển identity (bot/user), xử lý permission denied, security rules. **Mọi skill khác đều phải đọc skill này trước.**

## Khi nào dùng
- Lần đầu setup lark-cli
- Chạy `auth login`, chuyển đổi `--as user/bot`
- Gặp lỗi "permission denied" hoặc "missing scope"
- Thấy `_notice` trong JSON output

## Hai loại Identity

| | Bot (`--as bot`) | User (`--as user`) |
|--|---|---|
| Token | `tenant_access_token` | `user_access_token` |
| Cần auth login | Không | Có |
| Truy cập Drive/Calendar/Mail cá nhân | Không | Có |
| Gửi tin nhắn danh nghĩa | Tên App | Tên user |

## Auth Commands

```bash
lark-cli config init --new                        # Khởi tạo app (lần đầu)
lark-cli auth login --recommend                   # Login với recommended scopes
lark-cli auth login --domain calendar,task        # Login theo domain
lark-cli auth login --scope "im:message"          # Login theo scope cụ thể
lark-cli auth login --no-wait --json              # Split-flow bước 1 (AI agent)
lark-cli auth login --device-code <code>          # Split-flow bước 2
lark-cli auth status                              # Xem trạng thái hiện tại
lark-cli update                                   # Cập nhật CLI + Skills
```

## Split-Flow Auth (cho AI Agent)
**Bước 1** (vòng hiện tại): Chạy `--no-wait --json` → lấy `verification_url` + `device_code` → tạo QR code → gửi URL cho user → kết thúc vòng.
**Bước 2** (vòng tiếp, sau khi user báo xong): `lark-cli auth login --device-code <code>`

**Không được** hiển thị URL rồi gọi `--device-code` trong cùng một vòng.

## Xử lý Permission Denied
- **Bot**: Cung cấp `console_url` từ error → user vào Developer Console bật scope
- **User**: `lark-cli auth login --scope "<missing_scope>"`

## High-Risk Write (exit code 10)
CLI yêu cầu xác nhận tường minh với lệnh nguy hiểm:
```json
{"error": {"type": "confirmation_required", "risk": {"level": "high-risk-write"}}}
```
Quy trình: **Xác nhận user → Thêm `--yes` → Retry**. Không tự thêm `--yes`.

Dùng `--dry-run` để preview trước khi thực thi.

## Security Rules
- Không output `appSecret` / `accessToken` ra terminal
- Phải xác nhận user trước khi thực hiện write/delete
- Dùng `--dry-run` preview các thao tác nguy hiểm

## Xem thêm
[[sources/2026-larksuite-cli]] | [[concepts/lark-auth-identity]]
