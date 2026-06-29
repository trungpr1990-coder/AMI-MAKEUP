---
title: Hạ tầng "Nhà máy phễu" — Tài sản, chi phí, quản lý Credential
type: khoang
khoang: vat-chat
tags: [infrastructure, assets, finance, credentials, tools, cost-optimization]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Hạ tầng "Nhà máy phễu" — Tài sản, chi phí, quản lý

Danh mục tài sản hạ tầng, chi phí, và cách quản lý credential (mật khẩu, API token, secret).

## Tài sản hạ tầng chính

### 1. Tài khoản Cloudflare (miễn phí)
- **Dùng để**: hosting landing page + Worker (backend tự động) + DNS
- **Chi phí**: $0/tháng (gói free đủ cho hầu hết chiến dịch)
- **Quy mô**: 100,000 requests/ngày, 10 Worker, nhiều KV unlimited
- **Cần**: tài khoản email, email verify
- **Setup 1 lần**: tạo account, `wrangler login` (gắn với máy)

### 2. Domain (tên miền)
- **Dùng để**: hiển thị URL thật (vd `leadpage.domain.com` thay vì `leadpage-xxx.workers.dev`)
- **Chi phí**: $5–15/năm (tùy nhà cung cấp)
- **Nên mua tại**: Namecheap, Godaddy, hoặc Registrar khác → sau đó **move nameserver sang Cloudflare**
- **Setup 1 lần**: 1 domain cho tất cả chiến dịch (nhiều subdomain từ 1 domain)
- **Ví dụ**: `domain.com` → các chiến dịch dùng `sale.domain.com`, `landing.domain.com`, etc.

### 3. Lark Base (Lark Suite / Feishu)
- **Dùng để**: lưu dữ liệu khách hàng (Leads, Email Nurture), quản lý
- **Chi phí**: 
  - **Cơ bản**: $0/tháng (Base với 500 records, 5 views)
  - **Pro**: ~$10/tháng (Records unlimited, automation unlocked)
  - **Recommend**: Pro nếu chạy nhiều chiến dịch (need automation)
- **Cần**: tài khoản Lark, quyền tạo Base
- **Setup 1 lần**: 1 Base dùng chung tất cả chiến dịch (hoặc 1 Base mỗi chiến dịch)

### 4. App Lark Custom (scope bitable)
- **Dùng để**: cấp quyền cho Worker ghi vào Lark Base
- **Chi phí**: $0
- **Cần**: 
  - App ID: `cli_...` (public)
  - App Secret: `password` (bí mật ⚠️)
- **Setup 1 lần**: tạo 1 app, publish, add vào Base làm cộng tác viên
- **Lưu ý bảo mật**: App Secret **KHÔNG BỎNG VÀO CHAT** → set qua `wrangler secret put`

### 5. Hộp thư SMTP (gửi email)
- **Dùng để**: gửi ebook + email nurture tự động
- **Chi phí**: $0 (nếu dùng Lark Mail hoặc Larksuite SMTP)
- **Cần**: 
  - Địa chỉ email: `hello@domain.com` (hoặc hộp công khai Lark)
  - Mật khẩu SMTP: khác mật khẩu Lark (lấy từ Admin Console)
  - SMTP server: `smtp.larksuite.com:465` (TLS)
- **Setup 1 lần**: tạo 1 hộp, bật IMAP/SMTP, lấy mật khẩu
- **Lưu ý bảo mật**: Mật khẩu SMTP **KHÔNG BỎNG VÀO CHAT** → set qua `wrangler secret put`

---

## Credential: Quản lý mật khẩu + API Token

### 6 Secret cần set trên Cloudflare Worker

Sau khi AI viết xong code, người vận hành **tự chạy** `wrangler secret put`:

| Secret | Giá trị | Ví dụ | Bảo mật |
|--------|--------|--------|---------|
| `LARK_APP_ID` | App ID Lark Custom | `cli_1234567890abcdef` | Public (có thể nhìn thấy) |
| `LARK_APP_SECRET` | App Secret | `password123...` | **🔐 BÍ MẬT** |
| `SMTP_USER` | Email gửi | `hello@domain.com` | Semi-public |
| `SMTP_PASS` | Mật khẩu SMTP | `mật-khẩu-SMTP` | **🔐 BÍ MẬT** |
| `FROM_NAME` | Tên hiển thị | `Thuý Trần` | Public |
| `ZALO_LINK` | Link nhóm Zalo | `https://zalo.me/g/...` | Public |

**Cách set:**
```bash
# Người vận hành tự chạy, giá trị không in ra
npx wrangler secret put LARK_APP_ID
# Nhập: cli_1234567890abcdef

npx wrangler secret put SMTP_PASS
# Nhập: mật khẩu SMTP (ẩn khi gõ)
```

**Lưu ý:**
- ✅ Giá trị được set **ẩn trong Cloudflare**, không lộ ở transcript
- ❌ Nếu để credential ở code → bị lộ trong repo
- ❌ Nếu dán vào chat → có thể bị cache hoặc nhìn lại

---

## Quản lý API Token (nếu gắn domain tự động)

Nếu muốn Claude tự gắn domain vào Cloudflare:

1. **Tạo API Token** tại Cloudflare Dashboard:
   - Permissions: `Zone:DNS:Edit`, `Workers Scripts:Edit`
   - Restricted to: domain của bạn
   - TTL: 1 năm (hoặc tùy)
   
2. **Lưu token** với `wrangler secret put`:
   ```bash
   npx wrangler secret put CF_API_TOKEN
   # Nhập: token từ bước trên
   ```

3. **Claude dùng token** để gắn domain (thay vì bạn tay)

**Lưu ý:** Token = quyền sửa DNS → nếu bị lộ → kẻ xấu sửa DNS → trang chết. Chỉ cấp token nếu tin tưởng.

---

## Chi phí tổng hợp (mỗi chiến dịch)

| Item | Chi phí | Ghi chú |
|------|---------|---------|
| Cloudflare Worker | $0 | Gói free |
| Domain (tái dùng) | $0/chiến dịch | $10/năm ÷ chiến dịch |
| Lark Base | $0–10/tháng | Tái dùng 1 Base |
| SMTP Larksuite | $0 | Gồm Lark |
| **Tổng** | **~$0–10/tháng** | **Rất rẻ so với digital agency** |

---

## Tài sản không nhìn thấy (nhưng quan trọng)

### Artifact (nội dung)
- Ebook PDF (lưu `/output`)
- Landing page HTML + CSS
- Email templates (10 email nurture)
- Worker code (JavaScript)
- Bảng Lark (cấu trúc + công thức)

**Bảo vệ:** Lưu file trong folder private, backup về local/cloud

### Dữ liệu khách hàng
- Leads Base: Họ tên, Email, SĐT, Conversion history
- Email history: khi gửi, khi mở, click

**Bảo vệ:** 
- Không share link Lark Base công khai
- Export định kỳ, backup
- Tuân thủ GDPR (có chính sách bảo mật)

### Uy tín (intangible)
- Domain reputation (không bị spam blocklist)
- Sender reputation (không bị inbox spam)
- Brand reputation (học viên reviews)

**Bảo vệ:**
- Không spam, không gửi email ko cần
- Follow email best practice
- Lắng nghe feedback từ khách

---

## Quy trình setup 1 lần (checklist)

- [ ] Tạo tài khoản Cloudflare (free)
- [ ] `wrangler login` (máy của bạn)
- [ ] Đã có domain sẵn hoặc mua domain mới
- [ ] Move nameserver sang Cloudflare (chờ propagate 1–24h)
- [ ] Tạo tài khoản Lark / Base
- [ ] Tạo App Lark Custom (scope bitable), publish
- [ ] Tạo/bật hộp thư SMTP
- [ ] Set 6 secret qua `wrangler secret put`
  - `LARK_APP_ID`, `LARK_APP_SECRET`, `SMTP_USER`, `SMTP_PASS`, `FROM_NAME`, `ZALO_LINK`
- [ ] Test: `npx wrangler deploy` (chạy worker test)
- [ ] Test: form submit → data vào Lark → email gửi
- [ ] ✅ Ready for campaign 1

**Lần thứ 2 trở đi:** chỉ cần phiếu đầu bài + 10 bước (không cần setup lại)

---

## Liên kết

- [[sources/2026-06-20-nha-may-pheu]] — Toàn bộ giáo trình
- [[entities/cloudflare]] — Cloudflare là gì
- [[entities/lark]] — Lark là gì
- [[tri-tue/2026-06-24-kien-truc-nam-may-pheu]] — Kiến trúc 4 mảnh

