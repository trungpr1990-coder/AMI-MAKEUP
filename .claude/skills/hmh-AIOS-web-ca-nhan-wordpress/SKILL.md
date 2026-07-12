---
name: hmh-AIOS-web-ca-nhan-wordpress
description: >
  Cỗ máy giúp HỌC VIÊN tự dựng một WEBSITE CÁ NHÂN / thương hiệu cá nhân trên WordPress THẬT (sửa được trong
  admin), nhanh nhất, bằng cách trả lời từng bước — AI viết bài giới thiệu, dựng khung sườn (trang chủ, menu,
  trang, chuyên mục, blog), cá nhân hóa (tên, ảnh, màu, liên hệ) tự động qua WordPress REST API nên chạy được
  trên MỌI hosting (host-agnostic). Self-serve: học viên tự mua hosting + tên miền, làm "4 bước tay" tối thiểu
  (cài WordPress 1 chạm, đặt permalink Post name, cài theme Astra, tạo Application Password) rồi đưa 3 dòng kết
  nối; phần còn lại cỗ máy lo. Dùng khi người dùng muốn: tạo web cá nhân/thương hiệu cá nhân cho bản thân hoặc
  học viên, chuyển giao bộ công cụ tự dựng web, làm web giới thiệu cá nhân nhanh trên WordPress. Kích hoạt khi
  có từ: web cá nhân, website cá nhân, thương hiệu cá nhân, dựng web cho học viên, tự làm web, web giới thiệu
  bản thân, chuyển giao web học viên, web wordpress cá nhân, personal brand website.
---

# Skill: Dựng website cá nhân trên WordPress thật (self-serve cho học viên)

Biến một WordPress trống thành **website cá nhân hoàn chỉnh, cá nhân hóa, sửa được trong admin** — học viên chỉ **trả lời từng bước**, AI viết nội dung, cỗ máy dựng khung + đổ dữ liệu qua REST API. Mục tiêu: **nhanh nhất, chống lỗi, chạy trên mọi hosting**.

## Triết lý gốc / Nguồn (grounded)
- **StoryBrand (Donald Miller):** khách là *người hùng*, chủ web là *người dẫn đường*; trang chủ theo thứ tự Header → Hero (chuyển hoá) → Vấn đề → Giá trị → Người dẫn đường → Kế hoạch → CTA → Footer.
- **Thương hiệu cá nhân (William Arruda / Dan Schawbel):** web là trung tâm dấu chân số bạn kiểm soát; trụ rõ ràng – nhất quán – hiện diện; trang bắt buộc: Trang chủ, Giới thiệu, Dịch vụ, Blog, Liên hệ.
- **Offer (Alex Hormozi):** nêu *kết quả khách nhận được*, không chỉ tính năng.
- Bản research đầy đủ: `output/2026-06-18-research-web-ca-nhan/` và `references/tri-thuc-guru.md`.

## Khi nào dùng / KHÔNG dùng
- **Dùng:** dựng web cá nhân/thương hiệu cá nhân trên **WordPress thật**, đặc biệt để **chuyển giao cho học viên tự làm**.
- **KHÔNG dùng:** web bán hàng/dịch vụ tĩnh chuẩn chuyển đổi (→ `hmh-mkt-web-dich-vu`); đăng bài SEO định kỳ lên web có sẵn (→ `hmh-AIOS-dang-bai-seo`); deploy web tĩnh lên Cloudflare (→ `AIOS-deploy-cloudflare`).

## Hai mức triển khai
- **Mức A — host-agnostic (mọi hosting):** học viên tự làm "4 bước tay" (cài WordPress 1 chạm, permalink, Astra, Application Password) rồi đưa **3 dòng kết nối**. Phần dựng + cá nhân hóa tự động (`scripts/build-site.mjs`).
- **Mức B — full-auto (đưa login hosting):** học viên đưa **thông tin đăng nhập hosting** → `scripts/provision.mjs` tự cài WordPress + theme + Application Password (ra `connection.json`), rồi `build-site.mjs`. **DirectAdmin: đã test chạy thật. cPanel: đã viết, PHẢI tự test trước khi giao** (xem `references/muc-b-full-auto.md`). Chỉ còn 2 việc tay không tránh được: mua hosting + mua tên miền.

## Tiền điều kiện (MỨC A — học viên làm TAY một lần — host-agnostic)
Xem chi tiết có ảnh trong `references/4-buoc-tay.md`. Tóm tắt:
1. Mua **hosting + tên miền** (`references/huong-dan-mua-hosting.md` — chọn host có "WordPress 1 chạm").
2. **Cài WordPress** bằng trình 1 chạm của host (Softaculous/Installatron).
3. **Settings → Permalinks → chọn "Post name" → Save** (đặt trước để tránh lỗi 404 trang con).
4. **Appearance → Themes → Add New → tìm "Astra" → Install → Activate.**
5. **Users → Profile → Application Passwords →** tạo tên "Web Builder" → **copy chuỗi**.
→ Học viên đưa lại **3 dòng**: `URL web` · `tên đăng nhập admin` · `Application Password`.

> Vì sao tách tay: mỗi hosting một bảng điều khiển/API khác nhau → tự động cài WordPress sẽ vỡ. Còn **REST API thì giống nhau trên mọi host**, nên toàn bộ phần dựng/cá nhân hóa cỗ máy làm tự động & ổn định.

## Quy trình thực thi (AI chạy interactive với học viên)

**Bước 1 — Thu thập thông tin TỪNG BƯỚC.** Hỏi lần lượt (đừng hỏi dồn), bám `references/phieu-chuan-bi.md`:
1) Họ tên + danh xưng/nghề · 2) Ảnh chân dung (đường dẫn file hoặc URL) + logo (nếu có) · 3) **5–10 gạch đầu dòng** về bản thân/hành trình/thành tựu · 4) Dịch vụ/lĩnh vực chính (2–4 cái) · 5) Liên hệ + MXH · 6) 1 màu chủ đạo (mã hex) · 7) 3 dòng kết nối WordPress (URL/user/app password).

**Bước 2 — AI VIẾT nội dung cá nhân hóa** (đây là giá trị cốt lõi):
- Viết **bài giới thiệu (About)** từ gạch đầu dòng theo cung *hành trình → bước ngoặt → giá trị mang lại cho người khác* (vai Người dẫn đường).
- Viết **hero** (tiêu đề + 1 câu chuyển hoá), **3 lợi ích/dịch vụ** (nêu kết quả khách nhận), đoạn **Liên hệ**.
- Văn phong: ấm, người thật, không sáo rỗng. (Tham chiếu [[content-fanpage-writing-rules]]: tránh icon/em-dash khi viết nội dung.)

**Bước 3 — Tạo `data.json`** theo mẫu `scripts/data.example.json` (điền creds + brand + media + home + categories + posts + contact). Lưu vào `output/YYYY-MM-DD-web-ca-nhan-<tên>/data.json`.

**Bước 4 — Chạy cỗ máy dựng:**
```bash
node "<skill>/scripts/build-site.mjs" "output/YYYY-MM-DD-web-ca-nhan-<tên>/data.json"
```
Script (host-agnostic, REST) sẽ: kiểm tra kết nối → up ảnh + đặt logo/tên site → tạo chuyên mục → tạo trang (Trang chủ/Giới thiệu/Dịch vụ/Blog/Liên hệ) → tạo bài → **dựng trang chủ** (hero màu thương hiệu + giới thiệu kèm ảnh + khối dịch vụ + bài mới) → đặt trang chủ tĩnh → dựng menu chính gán vị trí `primary`.

**Bước 5 — Kiểm tra & flush nếu cần:** mở web; nếu trang con/bài 404 → wp-admin → Settings → Permalinks → **Save** (flush rewrite). Chụp ảnh đối chiếu nếu cần (Chrome headless — xem [[chrome-headless-pdf]]).

**Bước 6 — Bàn giao:** đưa học viên link web + nhắc đổi nội dung trong wp-admin (Trang/Bài viết/Menu), thay ảnh, tải logo (Giao diện → Tùy biến → Site Identity).

**Bước 7 — Lưu vết:** ghi `log.md`, cập nhật `index.md` (mục Output), lưu `data.json` trong thư mục output.

## Tham chiếu scripts / references
- `scripts/provision.mjs` — (MỨC B) tự cài WordPress + Astra + Application Password từ login hosting. Chạy: `node provision.mjs provision.json` → ra `connection.json`. Cần `latest.zip` + `astra.zip` trong `scripts/`.
- `scripts/provision.example.json` — mẫu cấu hình provision (DA/cPanel/manual).
- `scripts/build-site.mjs` — bộ dựng khung + cá nhân hóa qua REST (host-agnostic). Chạy: `node build-site.mjs data.json`.
- `scripts/data.example.json` — mẫu dữ liệu.
- `references/muc-b-full-auto.md` — chi tiết Mức B + cách tự test cPanel.
- `references/huong-dan-mua-hosting.md` — chọn & mua hosting + tên miền.
- `references/4-buoc-tay.md` — 4 bước tay (chèn ảnh hướng dẫn).
- `references/phieu-chuan-bi.md` — phiếu học viên điền trước.
- `references/tri-thuc-guru.md` — nguyên lý StoryBrand/Arruda/Hormozi áp dụng.

## Lưu ý / gotcha (đã kiểm chứng thực tế)
- **Permalink phải là "Post name" TRƯỚC khi build**; nếu không, trang con/bài 404. Sửa bằng Settings → Permalinks → Save (flush).
- **Theme Astra phải đã kích hoạt** (vị trí menu `primary`). Theme khác → đổi slug vị trí menu trong script.
- Xác thực REST dùng **Application Password** (Basic auth qua HTTPS) — không dùng mật khẩu đăng nhập.
- Up ảnh: `media.portrait`/`media.logo` nhận **đường dẫn file local hoặc URL**.
- Nếu học viên KẸT ở "4 bước tay" → đường lùi: học viên gửi 3 dòng kết nối, trợ lý/anh chạy hộ Bước 3–4.
- KHÔNG hard-code bí mật vào skill; mỗi học viên có `data.json` riêng trong `output/`.

## Output (bám CLAUDE.md)
Mỗi học viên = một thư mục `output/YYYY-MM-DD-web-ca-nhan-<tên>/` chứa `data.json`, ảnh chụp, ghi chú. Cập nhật `index.md` + `log.md`.
