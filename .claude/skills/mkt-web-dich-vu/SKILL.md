---
name: mkt-web-dich-vu
description: >
  Dựng website ngành dịch vụ chuẩn chuyển đổi — biến đầu bài doanh nghiệp thành website hoàn chỉnh, hiện đại, tối ưu ra khách. Đứng trên vai guru: Alex Hormozi (Phương trình Giá trị), Ran Segall/Flux Academy (quy trình + định giá), Michał Malewicz (phân cấp > đẹp), Payton Clark Smith (web local SEO).
  Dùng khi người dùng muốn làm website hoặc landing page cho doanh nghiệp dịch vụ (spa, thẩm mỹ, luật, kế toán, xây dựng, nha khoa, coaching, agency, BĐS, sửa chữa, giáo dục...) — cần trang ra khách chứ không chỉ đẹp.
  Kích hoạt khi có từ: web dịch vụ, dựng website dịch vụ, landing page dịch vụ, trang web chuyển đổi, website ra khách, làm web cho doanh nghiệp, web ngành, scaffold web.
---

# Skill: Dựng Website Ngành Dịch Vụ (chuẩn chuyển đổi)

Nhận đầu bài doanh nghiệp dịch vụ → sinh website HTML hoàn chỉnh tối ưu chuyển đổi.

> **Mục tiêu không phải "trang web đẹp" mà là trang web ra khách.**

## 1. Triết lý gốc (5 trụ cột)

| Guru | Nguyên tắc cốt lõi |
|---|---|
| **Alex Hormozi** | Headline/offer tối đa (Kết quả mơ ước × Khả năng tin đạt được) ÷ (Thời gian × Công sức); luôn có đảo ngược rủi ro |
| **Ran Segall / Flux Academy** | Trò chuyện → chiến lược → art direction → dựng → launch; định giá theo tầng giá trị |
| **Michał Malewicz** | Phân cấp > đẹp; hierarchy strips; mỗi khối một tiêu điểm |
| **Cấu trúc chuẩn** | Trang chủ nói rõ làm gì–cho ai–kết quả gì trong 5 giây; 1 CTA/trang; niềm tin là tiền tệ; mobile-first |
| **Payton Clark Smith** | SEO bám sẵn từ đầu; mỗi dịch vụ 1 trang; bán kèm bảo trì hằng năm |

## 2. Khi nào dùng / KHÔNG dùng

**Dùng khi:** spa, thẩm mỹ, luật, kế toán, xây dựng, nha khoa, coaching, agency, BĐS dịch vụ, sửa chữa, giáo dục...

**KHÔNG dùng:**
- Landing page phễu bán 1 sản phẩm/khoá → dùng skill [[nha-may-pheu]] / leadpage
- E-commerce nhiều SKU (giỏ hàng, thanh toán) → cân nhắc WordPress/Shopify
- Chỉ cần infographic/ảnh → skill khác

## 3. Tiền điều kiện

- Node ≥ 18 (chạy script scaffold)
- Chrome headless để render xem trước (render trong `%TEMP%` tránh lỗi path tiếng Việt)
- Không cần API/auth gì thêm cho bản HTML tự chứa

## 4. Quy trình thực thi

### Bước 1 — Lấy đầu bài (brief)

Hỏi hoặc suy từ yêu cầu tối thiểu:

| Trường | Ý nghĩa | Bắt buộc |
|---|---|---|
| `ten` | Tên doanh nghiệp/thương hiệu | ✅ |
| `nganh` | Ngành dịch vụ (vd "nha khoa thẩm mỹ") | ✅ |
| `dich_vu[]` | Danh sách dịch vụ chính | ✅ |
| `khach_hang` | Khách mục tiêu + nỗi đau lớn nhất | ✅ |
| `cta` | Hành động mong muốn (gọi/đặt lịch/để lại SĐT) | ✅ |
| `lien_he` | SĐT, địa chỉ, giờ làm, map | ✅ |
| `usp` | Khác biệt/lý do chọn | nên có |
| `ket_qua` | Kết quả mơ ước khách muốn | nên có |
| `proof` | Testimonial, số liệu, logo, chứng nhận | nên có |
| `bao_hanh` | Cam kết/đảm bảo | nên có |
| `thuong_hieu` | Màu chủ đạo, tông giọng, logo | tùy |
| `nen_tang` | `html` (mặc định) · `framer` · `wordpress` | mặc định html |

→ Lưu brief thành `brief.json`.

### Bước 2 — Kiến trúc trang (10 khối chuẩn)

Trang chủ dịch vụ gồm **10 khối theo thứ tự dẫn mắt** (Malewicz + Hormozi):

1. **Hero** — làm gì · cho ai · kết quả gì + CTA chính + dải tin cậy
2. **Nỗi đau** — gọi đúng vấn đề khách đang chịu (agitate)
3. **Dịch vụ/Offer** — đóng khung theo Phương trình Giá trị
4. **Vì sao chọn chúng tôi** — khác biệt = bằng chứng "khả năng đạt được"
5. **Bằng chứng xã hội** — testimonial, kết quả, số liệu, chứng nhận
6. **Quy trình 3–4 bước** — giảm "công sức cảm nhận"
7. **Đảo ngược rủi ro** — cam kết/bảo hành rõ ràng
8. **FAQ** — gỡ phản đối còn lại
9. **CTA cuối** — mạnh, một hành động
10. **Liên hệ** — click-to-call + form ngắn + map + giờ làm + thời gian phản hồi

> Nếu nhiều dịch vụ và cần SEO → tách **mỗi dịch vụ 1 trang con**, trang chủ chỉ tóm tắt + link sang.

### Bước 3 — Scaffold khung dự án

Tạo thư mục `output/YYYY-MM-DD-web-<slug>/index.html` (khung placeholder 10 khối).

### Bước 4 — Viết nội dung thật (KHÔNG để placeholder)

- **Headline (Hormozi):** "Giúp [khách] đạt [kết quả mơ ước] mà không [nỗi sợ/công sức]"
- Copy ngắn, mỗi khối một ý, mỗi khối một CTA
- Tiếng Việt sạch: không icon rác, câu rõ nghĩa
- Phân cấp rõ (cỡ chữ/đậm/khoảng trắng), 1 màu nhấn cho CTA, ≤ 2 font
- Mobile-first: menu, nút gọi nổi (sticky call button), form ngắn

### Bước 5 — Kiểm chất lượng (checklist chuyển đổi)

- [ ] Trong 5s có hiểu làm gì–cho ai–kết quả?
- [ ] Mỗi khối 1 tiêu điểm?
- [ ] CTA nổi bật và lặp lại?
- [ ] Có bằng chứng xã hội?
- [ ] Có đảo ngược rủi ro?
- [ ] Click-to-call hoạt động?
- [ ] Đọc tốt trên điện thoại?

### Bước 6 — (Tuỳ chọn) Xuất sang nền tảng khác

- `framer`: xuất brief thiết kế (sitemap + nội dung + tông màu/typo)
- `wordpress`: xuất cấu trúc + nội dung + gợi ý theme/block

### Bước 7 — Lưu output (BẮT BUỘC)

Lưu trong `output/YYYY-MM-DD-web-<slug>/`: `index.html`, `brief.json`, file `.md` ghi đầu bài + quyết định thiết kế. Cập nhật `index.md` + `log.md`.

### Bước 8 — Đưa web lên mạng

Khi cần link công khai → dùng skill [[AIOS-deploy-cloudflare]].

## 5. Gotcha

- Không để placeholder trong bản giao — scaffold chỉ là khung, Bước 4 phải thay 100% nội dung thật
- Path tiếng Việt + dấu cách làm Chrome headless ra trang trắng → render trong `%TEMP%`
- Đừng nhồi mọi dịch vụ vào 1 trang nếu cần SEO → tách trang con
- **Đẹp mà không chuyển đổi là hỏng** (Malewicz) — luôn chạy checklist trước khi coi là xong

---
*Skill chuyển giao từ SOP "Sale Page chuẩn Website" — Hoàng Minh Hóa Academy.*
