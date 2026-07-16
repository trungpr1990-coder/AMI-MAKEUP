# Theo Dõi Công Việc — AMI

File sống, cập nhật liên tục. Đây KHÔNG phải wiki tri thức (không theo schema CLAUDE.md) — đây là bảng theo dõi vận hành: việc gì đang bàn giao, ai làm, tới đâu rồi.

**Bản mirror trên điện thoại:** cùng nội dung này cũng có ở Lark Base "CRM THÚY THÚY" → bảng "Theo Dõi Công Việc" (table_id `tblGQheszu7dDWHb`), để xem/sửa nhanh trên app Lark khi không có máy tính. File `.md` này vẫn là bản gốc (nguồn sự thật) — khi cập nhật ở đây, nhớ đồng bộ sang Lark Base luôn (và ngược lại nếu Thuý sửa trực tiếp trên Lark trước).

**Dashboard trực quan:** [theo-doi-cong-viec-dashboard.html](theo-doi-cong-viec-dashboard.html) — stat tiles + bảng Kanban theo trạng thái + dòng thời gian 7 ngày. Link xem: https://claude.ai/code/artifact/506b5ece-c279-45f7-b78b-720ba3f9fac7 (private, chỉ Thuý xem trừ khi bấm share). Dashboard KHÔNG tự đồng bộ — mỗi khi bảng dưới đây thay đổi, nói "cập nhật dashboard" để mình dựng lại file và republish (giữ nguyên link).

Cách dùng:
- Khi bàn giao việc mới → nói "bàn giao thêm: <việc>" → mình thêm vào mục **Đang chờ / Đang làm**.
- Khi xong một phần → nói "xong phần <X>" hoặc "cập nhật: <X> xong rồi" → mình chuyển trạng thái, ghi ngày, và báo cáo tiến độ tổng.
- Đầu mỗi session mới, nói "cập nhật tiến độ" → mình đọc file này để nắm lại toàn bộ việc đang dở.

---

## Đang Làm / Đang Chờ

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
- **Trạng thái:** Đang làm (~70%)
- **Mô tả:** Phần lớn đã có: Content Engine 5 trụ cột (40% nỗi đau/30% kiến thức/15% thương hiệu/10% học viên/5% bán hàng) + lịch sản xuất chi tiết 30 ngày (chủ đề/hook/CTA từng ngày) từ tài liệu [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]].
- **Việc con:**
  - [x] Content Engine 5 trụ cột + công thức hook + format quay (25-45s)
  - [x] Lịch sản xuất 30 ngày đầu (chủ đề/hook/nội dung/CTA từng ngày)
  - [ ] Tách thành 1 SOP độc lập dùng lại được (không kẹt trong tài liệu phễu)
  - [ ] Mở rộng ngân hàng chủ đề từ 30 lên 100 (theo yêu cầu Checklist Tuần 1 của phễu mới)
- **Cập nhật gần nhất:** 2026-07-14 — nâng từ 0% lên ~70% sau khi ingest tài liệu AMI Beauty Funnel.

### 7. Phễu thu lead AMI (Lead page + Bridge + Sales page)
- **Trạng thái:** Chưa bắt đầu (0%) — ⚠️ cần quyết định hướng trước khi làm (xem việc #9)
- **Mô tả:** Hiện tại quảng cáo/Reel/TikTok dẫn thẳng vào trang đặt lịch (`dat-lich.html`), bỏ qua bước xin liên lạc (SĐT/Zalo) và bước làm quen trước khi bán — dễ mất khách lạ chưa đủ tin tưởng. Cần xây thêm 3 trang trung gian giữa nguồn traffic và trang đặt lịch.
- **Việc con:**
  - [ ] Lead page (squeeze) — trang xin SĐT/Zalo đổi lấy mồi câu (voucher trải nghiệm 299-399k)
  - [ ] Thank-you + Bridge page — dẫn khách qua Zalo OA, hẹn lịch trải nghiệm
  - [ ] Sales page — trình bày rõ 3 bậc giá (Trải nghiệm 399-500k → Thường xuyên 599-699k → Gói năm 6.9tr) + nút đặt cọc dẫn vào `dat-lich.html`
- **Cập nhật gần nhất:** 2026-07-14 — tài liệu [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]] đề xuất hướng khác (Ebook + Nhóm Zalo AMI Beauty Club) thay vì web Lead/Bridge/Sales page. Cần chọn 1 hướng (hoặc cả 2, ưu tiên 1 trước) — xem việc #9.

### 8. Triển khai AMI Beauty Funnel — Checklist Tuần 1 (15/07-21/07)
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Tuần đầu triển khai phễu Ebook → Zalo AMI Beauty Club → Workshop → Khoá học. Xem [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]].
- **Việc con:**
  - [ ] Ngày 1 (15/07): chốt định vị AMI + sửa bio Facebook/TikTok + tạo thư mục làm việc
  - [ ] Ngày 2 (16/07): hoàn thiện nội dung ebook (tuỳ quyết định ở việc #9)
  - [ ] Ngày 3 (17/07): tạo form đăng ký + nhóm Zalo "AMI Beauty Club"
  - [ ] Ngày 4 (18/07): lập 100 chủ đề video (40 nỗi đau/30 kiến thức/15 cá nhân/10 học viên/5 bán hàng)
  - [ ] Ngày 5 (19/07): quay batch 10 video đầu tiên
  - [ ] Ngày 6 (20/07): kịch bản trả lời inbox + bảng giá/lịch học
  - [ ] Ngày 7 (21/07): kiểm tra toàn bộ + đăng video đầu tiên, mở chiến dịch
- **Cập nhật gần nhất:** 2026-07-14 — mới ghi nhận từ tài liệu vừa ingest, chưa triển khai. Phụ thuộc việc #9 chốt xong trước.

### 9. Chốt 3 quyết định trước khi triển khai AMI Beauty Funnel
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Cần Thuý quyết định trước khi bắt đầu Checklist Tuần 1 (việc #8), kẻo làm sai hướng.
- **Việc con:**
  - [ ] Ebook mồi câu chính dùng bản nào: "7 Nỗi Sợ..." (đã có PDF) / "10 Lý Do..." (đã có PDF) / làm mới "7 Lỗi..." theo tài liệu 14/07?
  - [ ] Khoá Basic bao nhiêu buổi: 3 buổi (tài liệu mới) hay 5 buổi (giáo án đã có ở [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]])?
  - [ ] Hướng phễu lead-gen: Ebook+Zalo (tài liệu mới) hay Web Lead/Bridge/Sales page (việc #7) hay làm cả 2 — ưu tiên cái nào trước?
- **Cập nhật gần nhất:** 2026-07-14 — mới ghi nhận.

---

## Hoàn Thành

### Giáo án giảng dạy AMI
- **Hoàn thành:** 2026-07-13 (phát hiện muộn 2026-07-14 — bảng theo dõi chưa cập nhật khi tài liệu ra đời)
- **Kết quả:** Giáo án khoá VIP 1-1, 5 buổi, 3 triệu — đầy đủ mục tiêu/nội dung/timing/bài tập từng buổi. Xem [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]].
- **Còn tồn:** tài liệu AMI Beauty Funnel (14/07) đề xuất khoá Basic 3 buổi, khác với giáo án 5 buổi này — cần đối chiếu và chốt 1 số buổi chính thức (xem việc #9 ở trên).

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

## [2026-07-16] Dựng dashboard trực quan cho bảng theo dõi
- Tạo `theo-doi-cong-viec-dashboard.html` (stat tiles + Kanban theo trạng thái + dòng thời gian 7 ngày cho việc #8), publish artifact riêng
- Phát hiện: Checklist Tuần 1 (việc #8) đã trễ 2 ngày (Ngày 1-2, 15-16/07) vì còn chờ chốt việc #9 — đánh dấu cảnh báo trên dashboard
- Dashboard không tự đồng bộ, cần nói "cập nhật dashboard" mỗi khi bảng này đổi để mình dựng lại + republish

## [2026-07-14] Ingest tài liệu AMI Beauty Funnel + đồng bộ toàn bộ bảng theo dõi
- Ingest tài liệu chiến lược "AMI Beauty Funnel" (14 thẻ tư vấn AI qua NotebookLM) vào wiki — xem [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]]
- Rà lại bảng theo dõi, phát hiện 2 mục lỗi thời: (1) "Giáo án giảng dạy AMI" ghi 0% dù đã có giáo án 5 buổi từ 13/07 — chuyển sang Hoàn Thành; (2) "SOP quy trình làm nội dung video" ghi 0% dù tài liệu mới đã giải quyết phần lớn (Content Engine + lịch sản xuất 30 ngày) — nâng lên ~70%
- Việc #7 (Phễu thu lead AMI — web Lead/Bridge/Sales) thêm ghi chú: tài liệu mới đề xuất hướng khác (Ebook + Zalo), cần Thuý chọn 1 hướng
- Thêm 2 việc mới: #8 Checklist Tuần 1 triển khai Beauty Funnel (15/07-21/07), #9 Chốt 3 quyết định trước khi bắt đầu (ebook nào / số buổi khoá / hướng phễu)
- Đã đồng bộ toàn bộ thay đổi này sang Lark Base "Theo Dõi Công Việc" (`tblGQheszu7dDWHb`) — record đã update: `recvpk0kiQP4ws` (Giáo án), `recvpk0kiQDjQH` (SOP video), `recvpk0kiQUejD` (Phễu lead); record mới tạo: `recvpk3Yal9oCh` (3 quyết định), `recvpk3YalQs47` (Checklist Tuần 1)
```
