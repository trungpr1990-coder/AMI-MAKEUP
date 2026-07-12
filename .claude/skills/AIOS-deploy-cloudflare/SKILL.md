---
name: AIOS-deploy-cloudflare
description: >
  Xuất website lên mạng qua Cloudflare Pages — biến file index.html thành link công khai, chạy SSL, có thể gắn tên miền riêng. Hosting miễn phí trên hạ tầng toàn cầu Cloudflare. Dùng cùng với skill [[mkt-web-dich-vu]], [[hmh-AIOS-web-ca-nhan-wordpress]], hay bất kỳ thư mục web nào.
  Dùng khi người dùng muốn deploy website lên Cloudflare Pages, lấy link công khai, gắn domain riêng, hoặc cập nhật web đã deploy.
  Kích hoạt khi có từ: deploy web, đưa web lên mạng, cloudflare pages, gắn domain, link công khai, xuất web ra link, wrangler deploy, mua domain, pages.dev.
---

# Skill: Xuất web lên mạng qua Cloudflare (Pages + Domain)

Biến `index.html` (hoặc bất kỳ thư mục web nào) thành website có link công khai, SSL, có thể gắn tên miền riêng. Hosting **miễn phí** trên Cloudflare.

> ⚠️ **Deploy là hành động ra ngoài** — xác nhận với người dùng trước khi chạy.

## 1. Năng lực thật (cái gì tự động, cái gì cần tay)

| Việc | Mức tự động | Điều kiện |
|---|---|---|
| Deploy web → link `*.pages.dev` | ✅ Tự động hoàn toàn | `npx wrangler login` 1 lần |
| Gắn subdomain đã sở hữu vào Pages | ⚠️ Bán tự động | Domain là zone trên Cloudflare + API token |
| Gắn apex domain (vd `tenmien.com`) | ⚠️ Bán tự động | Nameservers phải trỏ về Cloudflare trước |
| Mua domain mới | 🔶 Cần tay người dùng | Cần payment method + token Registrar trên Dashboard |

> Cloudflare **không bán** mọi đuôi (vd `.vn` không có) → muốn `.vn` phải mua ở nhà đăng ký VN rồi trỏ nameservers về Cloudflare.

## 2. Tiền điều kiện

- **Node + wrangler:** `npx wrangler` (Node ≥ 18; nếu Node không trên PATH xem [[lark-cli-setup]])
- **Đăng nhập 1 lần:** `npx wrangler login` (OAuth, mở trình duyệt). Kiểm tra: `npx wrangler whoami`
- **Custom domain qua API:** tạo API token ở Dashboard (My Profile → API Tokens) quyền `Account · Cloudflare Pages · Edit` + `Zone · DNS · Edit`. Lưu vào `.env`: `CF_API_TOKEN`, `CF_ACCOUNT_ID`, (tùy) `CF_ZONE_ID`. **Không lưu token vào memory.**

## 3. Quy trình thực thi

### Bước 1 — Deploy web ra link công khai

```bash
# Đăng nhập (1 lần nếu chưa): npx wrangler login
npx wrangler pages project create <ten-project> --production-branch main
npx wrangler pages deploy <thu-muc-web> --project-name <ten-project>
```

→ Ra link `https://<ten-project>.pages.dev`

**Ví dụ:**
```bash
npx wrangler pages deploy "output/2026-06-09-web-ca-nhan" --project-name "hoang-minh-hoa"
```

### Bước 2 — (Tuỳ chọn) Gắn domain riêng đã sở hữu

**Qua API (có token):**
```bash
# Cần CF_API_TOKEN + CF_ACCOUNT_ID trong .env
curl -X POST "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/pages/projects/<project>/domains" \
  -H "Authorization: Bearer $CF_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"web.tenmien-cua-ban.com"}'
```

**Fallback không token (Dashboard):** Workers & Pages → chọn project → Custom domains → Set up a domain (3 click), SSL tự động.

### Bước 3 — (Tuỳ chọn) Mua domain mới

Lần đầu: Dashboard → Domain Registration → Register Domains → tìm tên → thanh toán.

### Bước 4 — Cập nhật web sau này

Sửa `index.html` → chạy lại Bước 1 cùng `--project-name`. Mỗi lần deploy ra 1 bản; link domain luôn trỏ bản mới nhất.

### Bước 5 — Ghi nhận

Ghi link live vào file `.md` của output tương ứng + `log.md`. Nếu là tài sản dùng lại → lưu memory dự án (**KHÔNG lưu token**).

## 4. Gotcha

- `npx wrangler login` mở trình duyệt — cần làm 1 lần, sau đó token lưu trong `~/.wrangler`
- Subdomain không lên trang của mình → còn bản ghi DNS cũ → gỡ trước khi gắn Custom Domain
- Apex domain cần nameservers trỏ về Cloudflare trước (script sẽ báo nếu zone chưa sẵn sàng)
- Tên project không được có tiếng Việt hay dấu cách — dùng slug (vd `hoang-minh-hoa`)
- SSL cấp tự động, chờ vài phút sau khi gắn domain

## 5. Liên quan

- [[mkt-web-dich-vu]] — tạo file web trước, skill này deploy lên mạng
- [[hmh-AIOS-web-ca-nhan-wordpress]] — deploy website cá nhân WordPress

---
*Skill chuyển giao từ SOP "Sale Page chuẩn Website — Skill 2" — Hoàng Minh Hóa Academy.*
