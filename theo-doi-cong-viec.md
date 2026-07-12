# Theo Dõi Công Việc — AMI

File sống, cập nhật liên tục. Đây KHÔNG phải wiki tri thức (không theo schema CLAUDE.md) — đây là bảng theo dõi vận hành: việc gì đang bàn giao, ai làm, tới đâu rồi.

Cách dùng:
- Khi bàn giao việc mới → nói "bàn giao thêm: <việc>" → mình thêm vào mục **Đang chờ / Đang làm**.
- Khi xong một phần → nói "xong phần <X>" hoặc "cập nhật: <X> xong rồi" → mình chuyển trạng thái, ghi ngày, và báo cáo tiến độ tổng.
- Đầu mỗi session mới, nói "cập nhật tiến độ" → mình đọc file này để nắm lại toàn bộ việc đang dở.

---

## Đang Làm / Đang Chờ

### 1. Giáo án giảng dạy AMI
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** AMI chưa có giáo án giảng dạy hoàn chỉnh cho khoá học.
- **Việc con:** (chưa chia nhỏ)
- **Cập nhật gần nhất:** 2026-07-01 — mới ghi nhận, chưa triển khai.

### 2. Kịch bản video cho 28 ngày
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Cần kịch bản video cho chuỗi nội dung/đào tạo 28 ngày.
- **Việc con:** (chưa chia nhỏ)
- **Cập nhật gần nhất:** 2026-07-01 — mới ghi nhận, chưa triển khai.

### 3. Đăng bài tự động TikTok (hệ thống đăng-bài-đa-nền-tảng)
- **Trạng thái:** Đang làm (~60%)
- **Mô tả:** Kích hoạt đăng TikTok tự động trong hệ thống `đăng-bài-đa-nền-tảng` (skill đã cài ở `C:\Users\Admin\.claude\skills\đăng-bài-đa-nền-tảng`).
- **Việc con:**
  - [x] Đăng ký app TikTok Developer "Ami Makeup Auto Post" (Client Key `awraftrv2f4yhedu`, đã xác thực qua API thật)
  - [x] Sửa icon app khớp thương hiệu (nền đen chữ "A" vàng), nộp lại xét duyệt → **đang "In review"**, chờ TikTok duyệt (vài ngày–vài tuần)
  - [x] Điền `TIKTOK_CLIENT_KEY`/`SECRET` vào `config.local.json` của skill đăng-bài-đa-nền-tảng
  - [x] Sửa lỗi deploy website `thuytranmakeup.com` (deploy nhầm nhánh `master` thay vì `main`, thiếu Cloudflare Pages Functions) — đã deploy đúng lên Production
  - [x] Nạp `TIKTOK_CLIENT_KEY`/`SECRET`/`REDIRECT_URI` làm secret trên Cloudflare Pages
  - [x] Route `/api/auth/tiktok/callback` đã test hoạt động đúng end-to-end với API TikTok thật
  - [ ] **Đang chờ Thuý:** đăng nhập TikTok thật qua link OAuth (đã gửi) để lấy Access Token + Refresh Token cho kênh TikTok của Ami — sau khi đăng nhập xong, trang sẽ hiện token để copy tay (chưa nối kho lưu tự động/KV)
  - [ ] Điền `BASE_TOKEN` (link Lark Base chứa 3 bảng Facebook Reel/Instagram/TikTok) vào `config.local.json` — vẫn đang để trống
  - [ ] Soạn 2 trang Chính sách bảo mật + Điều khoản dịch vụ cho website — nhiều khả năng TikTok sẽ yêu cầu khi duyệt tới phần Content Posting API (video.publish)
  - [ ] Sau khi TikTok duyệt xong: đặt `TIKTOK_AUDITED: true` trong config để mở khoá đăng công khai (trước đó chỉ đăng được chế độ riêng tư SELF_ONLY)
- **Cập nhật gần nhất:** 2026-07-08 — đã thông suốt kỹ thuật (web + callback + secret), chỉ còn chờ (1) Thuý đăng nhập TikTok lấy token, (2) TikTok duyệt app, (3) soạn 2 trang pháp lý.

### 4. Page ngách để gắn link affiliate (bán đồ video/ảnh)
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Xây các page ngách để gắn link affiliate.
- **Việc con:**
  - [ ] Page AI về giao thông
  - [ ] Page về vấn đề phụ nữ
  - [ ] Page vệ tinh makeup cá nhân
- **Cập nhật gần nhất:** 2026-07-09 — mới ghi nhận, chưa triển khai.

### 5. Web giới thiệu các khoá học makeup cá nhân
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Tạo web giới thiệu khoá học makeup cá nhân, có phễu, chia nhỏ khoá học thành từng gói.
- **Việc con:** (chưa chia nhỏ)
- **Cập nhật gần nhất:** 2026-07-09 — mới ghi nhận, chưa triển khai.

### 6. SOP quy trình làm nội dung video
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Viết quy trình (SOP) làm nội dung video — từ ý tưởng đến đăng bài.
- **Việc con:** (chưa chia nhỏ)
- **Cập nhật gần nhất:** 2026-07-09 — mới ghi nhận, chưa triển khai.

### 7. Phễu thu lead AMI (Lead page + Bridge + Sales page)
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Hiện tại quảng cáo/Reel/TikTok dẫn thẳng vào trang đặt lịch (`dat-lich.html`), bỏ qua bước xin liên lạc (SĐT/Zalo) và bước làm quen trước khi bán — dễ mất khách lạ chưa đủ tin tưởng. Cần xây thêm 3 trang trung gian giữa nguồn traffic và trang đặt lịch.
- **Việc con:**
  - [ ] Lead page (squeeze) — trang xin SĐT/Zalo đổi lấy mồi câu (voucher trải nghiệm 299-399k)
  - [ ] Thank-you + Bridge page — dẫn khách qua Zalo OA, hẹn lịch trải nghiệm
  - [ ] Sales page — trình bày rõ 3 bậc giá (Trải nghiệm 399-500k → Thường xuyên 599-699k → Gói năm 6.9tr) + nút đặt cọc dẫn vào `dat-lich.html`
- **Cập nhật gần nhất:** 2026-07-11 — mới ghi nhận, đã có sơ đồ thiết kế, chưa triển khai code.

---

## Hoàn Thành

### Hồ sơ doanh nghiệp AMI — nạp bản Thuý điền tay
- **Hoàn thành:** 2026-07-12
- **Kết quả:** Nạp bản phiếu Thuý điền tay vào [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]] (tầm nhìn/cơ duyên/bước ngoặt, chi tiết gói Basic/VIP + Cô dâu/Thử trước cưới, cọc cô dâu 500k, đội ngũ thật, công suất 10-15 khách/tháng, đối thủ mới, doanh thu mục tiêu 50tr/tháng), tách khung giọng điệu thương hiệu ra trang riêng [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]]. Sửa lại thông tin sai cũ (đội ngũ) trong bộ nhớ.
- **Còn tồn:** Mảng 5 (feedback thật) vẫn trống — khoảng trống lớn nhất.
- **Cập nhật 2026-07-12 (vòng 2):** Thuý sửa trực tiếp trong file Word — phát hiện bảng giá khoá chuyên nghiệp cũ thực ra là của Hằng Thu (đã xoá, thay giá thật 20-25tr/10-12tr), sửa tuổi khách mục tiêu 25-40→22-40 (đồng bộ nhiều trang), thêm nguồn khách (FB+TikTok), sửa trạng thái buổi trải nghiệm miễn phí thành "đang lên dự án" (chưa chạy thật), đóng nghi vấn hotline (0327.355.595 đúng).

---

## Nhật Ký Cập Nhật

```
## [2026-07-01] Khởi tạo bảng theo dõi
- Ghi nhận 2 việc tồn đọng: Giáo án giảng dạy AMI, Kịch bản video 28 ngày
- Lý do tạo: Thuý bị quá tải, nhiều việc dở dang, cần nơi note + theo dõi tiến độ liên tục

## [2026-07-08] Đăng TikTok tự động — thông suốt kỹ thuật
- Sửa xong lỗi deploy website (nhánh sai + thiếu Cloudflare Pages Functions), route callback TikTok chạy đúng end-to-end
- Nộp lại app TikTok xét duyệt sau khi sửa icon — đang "In review"
- Còn chờ: Thuý đăng nhập TikTok lấy token, TikTok duyệt xong, và soạn 2 trang pháp lý (privacy/terms)

## [2026-07-09] Bổ sung 3 nhiệm vụ lớn
- Ghi nhận thêm: (4) Page ngách affiliate (AI giao thông, vấn đề phụ nữ, vệ tinh makeup), (5) Web giới thiệu khoá học makeup cá nhân, (6) SOP quy trình làm nội dung video
- Lý do: Thuý muốn gom TẤT CẢ việc cần làm vào một bảng duy nhất, không tách riêng theo dõi ở nơi khác

## [2026-07-11] Bổ sung việc Phễu thu lead AMI
- Ghi nhận thêm: (7) Phễu thu lead AMI — 3 trang cần xây (Lead page, Bridge page, Sales page) vì hiện traffic đang đổ thẳng vào trang đặt lịch, thiếu bước xin liên lạc và làm quen
- Đã có sơ đồ thiết kế minh hoạ, chưa triển khai code

## [2026-07-12] Hoàn thành nạp hồ sơ doanh nghiệp AMI (bản điền tay)
- Nạp xong phiếu hồ sơ doanh nghiệp AMI, sửa lại thông tin đội ngũ (có chồng hỗ trợ + 2 học viên đồng hành), chốt doanh thu mục tiêu 50tr/tháng, tách trang giọng điệu thương hiệu riêng
- Còn tồn: lệch hotline 2 nguồn, đối chiếu tên khoá "AMI Professional Makeup Artist", và Mảng 5 feedback thật vẫn trống
```
