---
title: Nguyên tắc bảo mật & bàn giao tài sản — Ranh giới rõ ràng
type: khoang
khoang: nhan-cach
tags: [security, responsibility, handover, boundary, trust, transparency]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Nguyên tắc bảo mật & bàn giao tài sản

Cách nhìn về **ranh giới bảo mật**, **trách nhiệm từng bên**, và **tôn trọng tin tưởng** trong hệ thống phễu.

## Nguyên tắc 1: Credential không bao giờ lộ

**Quy tắc cứng:**
- ❌ Không bao giờ dán mật khẩu/app secret vào chat hoặc transcript
- ❌ Không bao giờ in giá trị secret ra console
- ✅ **Luôn dùng `wrangler secret put`** — người vận hành tự nhập, giá trị ẩn

**Tại sao:**
- Transcript là dạng "bán công khai" — có thể cache, index, hoặc bị xem lại
- Lộ credential → ai có link đó có thể abuse (gửi spam, ghi đè dữ liệu, steal lead)
- Mật khẩu SMTP, App Secret là "chìa khóa"

**Cách làm:**
```bash
# Người vận hành tự chạy (không AI)
npx wrangler secret put LARK_APP_ID
# Nhập: cli_1234567890abcdef
npx wrangler secret put SMTP_PASS
# Nhập: mật khẩu SMTP
```

---

## Nguyên tắc 2: DNS & Domain ownership

**Quy tắc:**
- ✅ AI có thể **suggest** gắn subdomain vào domain thật
- ❌ AI **không được tự ghi đè DNS** nếu subdomain đã trỏ nơi khác
- ✅ AI có thể deploy để URL tạm (`leadpage-xxx.workers.dev`)
- ✅ Người vận hành xác nhận → tự gắn hoặc cấp API token DNS cho AI

**Tại sao:**
- Domain là tài sản của bạn
- Ghi đè nhầm → trang cũ chết → mất doanh thu
- Nếu subdomain đã trỏ WebCake/Ladipage → phải gỡ bản ghi cũ trước

**Cách làm:**
- Lần 1: Cloudflare Dashboard → tay gắn Custom Domain cho Worker
- Hoặc: cấp Cloudflare API Token (quyền DNS:Edit) cho AI → AI gắn tự động

---

## Nguyên tắc 3: Dữ liệu khách hàng an toàn

**Quy tắc:**
- ✅ Bảng Leads chứa dữ liệu thật (Họ tên, Email, SĐT)
- ❌ Không bao giờ lộ dữ liệu khách vào transcript/chat công khai
- ✅ Test bằng record giả → **xóa sạch sau test** trước khi nghiệm thu

**Tại sao:**
- Email, SĐT là thông tin cá nhân → có quy tắc GDPR/bảo mật
- Record test lẫn vào dữ liệu thật → nhầm lẫn về conversion rate

**Cách làm:**
- Khi test form: điền email giả (test@test.com), rồi xóa record
- Sau mỗi test: `lark-cli base record delete <table_id> <record_id>`
- Khi nghiệm thu: "Xóa record test" là hạng mục checklist

---

## Nguyên tắc 4: Bàn giao tài sản qua file, không qua chat

**Quy tắc:**
- ✅ Output (ebook PDF, page HTML, email content, worker code) → **lưu file trong `/output`**
- ✅ Hợp đồng artifact → file `.md` liệt kê "bước 5 xong", "bước 6 xong", người duyệt ký tên
- ❌ Không post 1000 dòng code vào chat (khó duyệt, khó lưu)
- ✅ Người vận hành/học viên tự lấy file từ `/output` để duyệt

**Tại sao:**
- File dễ duyệt, dễ backup, dễ chia sẻ
- Chat transcript rồi xóa → loss knowledge
- Artifact file = bằng chứng "bước này hoàn thành, chất lượng Y"

**Cách làm:**
```
output/
├── 2026-06-24-chien-dich-makeup/
│   ├── 01-research.md
│   ├── 02-ebook-outline.md
│   ├── 03-ebook.pdf
│   ├── 04-landpage.html
│   ├── 05-worker.js
│   ├── ARTIFACT-CHECKLIST.md  ← người duyệt ký tên vào đây
│   └── ...
```

---

## Nguyên tắc 5: Không bịa số liệu, testimonial phải thật

**Quy tắc:**
- ❌ Không bịa con số uy tín ("1000+ học viên", "100% satisfaction")
- ✅ Ghi rõ **con số thật** hoặc **ghi rõ "minh hoạ"** nếu chưa có
- ❌ Không dùng testimonial giả (ảnh stock + tên random)
- ✅ Testimonial phải có sự xác nhận của người thật

**Tại sao:**
- Bịa thì mất uy tín khi bị phát hiện
- Khách hàng có "người loại người" → sẽ kiểm tra xác thực
- Testimonial giả → bị coi là lừa đảo, mất hợp pháp

**Cách làm:**
- Phiếu đầu bài phải kèm: "Số học viên thật: XY", "Testimonial: [tên người thật + sự xác nhận]"
- Nếu chưa có → viết trong page: "Khóa mới, chưa có testimonial; tác giả có Y năm kinh nghiệm..."
- Landing page: hiển thị con số thật, không bịa thêm

---

## Nguyên tắc 6: Tôn trọng quyền tự chủ của người vận hành

**Quy tắc:**
- ✅ AI **suggest**, người vận hành **quyết định**
- ❌ AI không được tự ý **ghi đè, xóa, reset** tài sản của bạn
- ✅ Nếu cần phá hủy (xóa subdomain cũ, reset email count), **hỏi trước**
- ✅ Người vận hành có quyền **chặn, từ chối** bước nào

**Tại sao:**
- Bạn = chủ sở hữu tài sản (domain, Base, email)
- AI = người phụ trợ
- Sai quyết định của AI → bạn chịu hậu quả

**Cách làm:**
- Giao việc: "làm theo phiếu X, nếu gặp vấn đề hỏi trước"
- AI báo: "Subdomain `sale.example.com` đã trỏ WebCake, cần gỡ không? [y/n]"
- Không phải: AI tự gỡ rồi báo "done"

---

## Nguyên tắc 7: Ranh giới không qua lại

Bảng phân vai rõ ràng = tôn trọng lẫn nhau:

| Việc | AI | Người vận hành |
|---|---|---|
| Viết nội dung, design, code | ✔ | |
| Tạo bảng, ghi data qua lark-cli | ✔ | |
| Tạo App Lark + cấp scope | | ✔ |
| Nhập mật khẩu SMTP/App Secret | | ✔ |
| Đăng nhập Cloudflare (`wrangler login`) | | ✔ |
| Set secret qua `wrangler secret put` | | ✔ |
| Sửa DNS, gắn domain (cần quyền) | | ✔ (hoặc cấp token cho AI) |
| Duyệt 3 chốt chất lượng (research/ebook/page) | | ✔ (nếu bán tự động) |
| Xóa record test, reset counter | | ✔ |

**Lợi ích:**
- Không confuse
- Không overlap
- Mỗi bên biết trách nhiệm của mình
- Không có "chờ nhau"

---

## Liên kết

- [[sources/2026-06-20-nha-may-pheu]] — Toàn bộ giáo trình (xem Phần 8, Phụ lục E)
- [[pham-chat/2026-06-24-nguyen-tac-duc-hanh-nha-may-pheu]] — Giá trị đạo đức
- [[nang-luc/2026-06-24-ten-buoc-dung-pheu]] — Phân vai trong 10 bước

