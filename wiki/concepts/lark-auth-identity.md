---
title: Lark Auth & Identity (Bot vs User)
type: concept
tags: [lark, auth, identity, bot, user, scope]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

Trong [[entities/lark-cli]], mọi API call đều có **identity** — bot hoặc user — quyết định quyền hạn và ai là người thực hiện hành động.

## Bot vs User

| | Bot (`--as bot`) | User (`--as user`) |
|--|---|---|
| Token | `tenant_access_token` | `user_access_token` |
| Cần `auth login` | Không (chỉ cần App Secret) | Có |
| Truy cập Drive/Calendar cá nhân | Không | Có |
| Gửi tin nhắn dưới danh nghĩa | App (tên bot) | Tên user thật |
| Phù hợp | App-level, automated ops | User-owned resources |

**Lưu ý quan trọng:** Bot không thể thấy tài liệu, lịch, email của user. Phải dùng `--as user` khi cần truy cập resource cá nhân.

## Auth Login

```bash
# Login với toàn bộ recommended scopes
lark-cli auth login --recommend

# Login theo domain (chỉ cấp scope cần thiết)
lark-cli auth login --domain calendar,task

# Login theo scope cụ thể (tuân thủ least-privilege)
lark-cli auth login --scope "im:message"

# Xem scopes đã cấp
lark-cli auth status
```

Nhiều lần login sẽ **tích lũy** scope (không ghi đè).

## Split-Flow cho AI Agent

Khi AI cần auth user trong một conversation:

**Bước 1 (vòng hiện tại):**
```bash
lark-cli auth login --scope "xxx" --no-wait --json
# → trả về verification_url và device_code
# AI tạo QR code và gửi URL cho user, rồi kết thúc vòng
```

**Bước 2 (vòng tiếp theo, sau khi user báo đã xác nhận):**
```bash
lark-cli auth login --device-code <device_code>
```

**Không được** hiển thị URL rồi ngay lập tức gọi `--device-code` trong cùng một vòng.

## Permission Denied Handling

Khi gặp lỗi permission:
- **Bot**: Cung cấp `console_url` từ error response để user vào Developer Console bật scope
- **User**: Chạy `lark-cli auth login --scope "<missing_scope>"`

## High-Risk Write (exit code 10)

Lệnh nguy hiểm cao (xoá, ghi đè) sẽ exit code 10 nếu không có `--yes`:

```json
{"error": {"type": "confirmation_required", "risk": {"level": "high-risk-write"}}}
```

Quy trình: **Xác nhận user → Thêm `--yes` → Retry**. Không tự động thêm `--yes`.

Dùng `--dry-run` để preview trước khi thực thi.

## Xem thêm

- [[sources/2026-larksuite-cli]] — full reference
- [[concepts/lark-skill]] — danh sách 26 skills
- [[entities/lark-cli]] — thông tin tool
