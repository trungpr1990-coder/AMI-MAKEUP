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
- **Trạng thái:** Đang làm (~50%) — ✅ đã chọn xong bản chính thức
- **Mô tả:** Tạo web giới thiệu khoá học makeup cá nhân, có phễu, chia nhỏ khoá học thành từng gói.
- **Việc con:**
  - [x] Dựng bản mới `landing-khoa-hoc-makeup-ca-nhan/index.html` (2026-07-14) — 2 gói Cơ Bản (2tr/3 buổi) + VIP (3tr/5 buổi), có form đăng ký, FAQ, testimonial minh hoạ
  - [x] **Thuý chốt (17/07):** giữ `landing-khoa-hoc-makeup-ca-nhan/index.html` làm bản chính thức
  - [x] **Thuý chốt (17/07):** lưu trữ 3 bản cũ — đã di chuyển `khoa-hoc-trang-diem-ca-nhan.html`, `khoa-hoc-ca-nhan-luxury.html`, `landing.html` vào `ami-website/archive/` (không có file nào khác trong site link tới 3 trang này, an toàn khi di chuyển)
  - [ ] Thêm ảnh/video thật (hiện trang chính thức chưa có ảnh/video nào, testimonial còn đánh dấu "minh hoạ")
  - [ ] Nối form đăng ký vào Lark Base (hiện mới log ra console, chưa gửi đi đâu — xem dòng code "TODO: nối vào Lark Base")
- **Cập nhật gần nhất:** 2026-07-17 — Thuý chốt giữ `landing-khoa-hoc-makeup-ca-nhan/index.html`, đã lưu trữ 3 bản cũ vào `ami-website/archive/`.

### 6. SOP quy trình làm nội dung video
- **Trạng thái:** Đang làm (~75%)
- **Mô tả:** Phần lớn đã có: Content Engine 5 trụ cột (40% nỗi đau/30% kiến thức/15% thương hiệu/10% học viên/5% bán hàng) + lịch sản xuất chi tiết 30 ngày (chủ đề/hook/CTA từng ngày) từ tài liệu [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]]. Đã bổ sung thêm công cụ viết văn phong (Hường Phiêu — đã Thuý duyệt "làm tốt lắm", xem [[nang-luc/out-2026-07-16-mau-content-ami-van-phong-huong-phieu]]).
- **Việc con:**
  - [x] Content Engine 5 trụ cột + công thức hook + format quay (25-45s)
  - [x] Lịch sản xuất 30 ngày đầu (chủ đề/hook/nội dung/CTA từng ngày)
  - [x] Quy trình viết theo văn phong mẫu (skill sao-chép-văn-phong) — đã có 3 mẫu content AMI dùng văn phong Hường Phiêu, Thuý xác nhận giữ nguyên cách viết
  - [ ] Tách thành 1 SOP độc lập dùng lại được (không kẹt trong tài liệu phễu)
  - [ ] Mở rộng ngân hàng chủ đề từ 30 lên 100 (theo yêu cầu Checklist Tuần 1 của phễu mới)
- **Cập nhật gần nhất:** 2026-07-17 — nâng lên ~75% sau khi ghi nhận tiến độ 16/07 (mẫu content văn phong đã duyệt) chưa được cập nhật vào bảng trước đó.

### 7. Phễu thu lead AMI (Lead page + Bridge + Sales page)
- **Trạng thái:** ⏸️ Tạm hoãn (không làm trước) — Thuý đã chốt hướng Ebook+Zalo (việc #7b) làm phễu chính
- **Mô tả:** Hiện tại quảng cáo/Reel/TikTok dẫn thẳng vào trang đặt lịch (`dat-lich.html`), bỏ qua bước xin liên lạc (SĐT/Zalo) và bước làm quen trước khi bán — dễ mất khách lạ chưa đủ tin tưởng. Ý tưởng ban đầu là xây 3 trang trung gian giữa nguồn traffic và trang đặt lịch.
- **Việc con:**
  - [ ] Lead page (squeeze) — trang xin SĐT/Zalo đổi lấy mồi câu (voucher trải nghiệm 299-399k)
  - [ ] Thank-you + Bridge page — dẫn khách qua Zalo OA, hẹn lịch trải nghiệm
  - [ ] Sales page — trình bày rõ 3 bậc giá (Trải nghiệm 399-500k → Thường xuyên 599-699k → Gói năm 6.9tr) + nút đặt cọc dẫn vào `dat-lich.html`
- **Cập nhật gần nhất:** 2026-07-17 — Thuý chốt hướng phễu chính là Ebook+Zalo Beauty Club (việc #7b), không phải web Lead/Bridge/Sales page này. Tạm hoãn, chưa xoá — có thể quay lại làm Giai đoạn 2 (thuê KOL, theo tài liệu 14/07) nếu cần sau.

### 7b. Phễu Ebook → Zalo AMI Beauty Club → Workshop → Khoá học ✅ đã chốt hướng
- **Trạng thái:** Đang làm (~15%) — đã có chiến lược đầy đủ, chưa dựng phần thực thi
- **Mô tả:** Phễu chính thức của AMI: Content/quảng cáo → Ebook miễn phí (thu data) → Nhóm Zalo "AMI Beauty Club" (nuôi dưỡng, tỷ lệ 70% giá trị/20% câu chuyện/10% bán) → Workshop miễn phí → Khoá makeup cá nhân. Xem toàn bộ chiến lược ở [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]].
- **Việc con:**
  - [x] Chiến lược tổng + lịch nuôi dưỡng 30 ngày (4 giai đoạn) + KPI (300 thành viên nhóm, 20 tham gia workshop, 5-10 học viên đầu tiên)
  - [x] **Chọn bản ebook mồi câu chính thức: "7 Nỗi Sợ..."** (đã có PDF sẵn — xem việc #9)
  - [ ] Host PDF công khai + tạo sách lật (chưa làm, đang chờ Thuý duyệt nội dung trước theo nguyên tắc deploy-only-after-approval)
  - [ ] Tạo form thu data + nhóm Zalo "AMI Beauty Club"
  - [ ] Lịch nuôi dưỡng nội dung 30 ngày đầu (thực thi, không chỉ kế hoạch)
- **Cập nhật gần nhất:** 2026-07-17 — đã chốt ebook dùng ("7 Nỗi Sợ...", PDF có sẵn) nên bỏ qua bước viết ebook mới, có thể đi thẳng vào host + form + nhóm Zalo.

### 8. Triển khai AMI Beauty Funnel — Checklist Tuần 1 (15/07-21/07, đã trễ)
- **Trạng thái:** Sẵn sàng bắt đầu (0%) — không còn vướng quyết định, chỉ còn vướng lịch (đã trễ 2 ngày)
- **Mô tả:** Tuần đầu triển khai phễu Ebook → Zalo AMI Beauty Club → Workshop → Khoá học. Xem [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]].
- **Việc con:**
  - [ ] Ngày 1 (15/07, trễ): chốt định vị AMI + sửa bio Facebook/TikTok + tạo thư mục làm việc
  - [ ] Ngày 2 (16/07, trễ): hoàn thiện nội dung ebook — **rút gọn:** ebook đã có PDF sẵn ("7 Nỗi Sợ..."), chỉ cần rà lại nội dung có cần cập nhật gì không rồi host công khai
  - [ ] Ngày 3 (17/07): tạo form đăng ký + nhóm Zalo "AMI Beauty Club"
  - [ ] Ngày 4 (18/07): lập 100 chủ đề video (40 nỗi đau/30 kiến thức/15 cá nhân/10 học viên/5 bán hàng)
  - [ ] Ngày 5 (19/07): quay batch 10 video đầu tiên
  - [ ] Ngày 6 (20/07): kịch bản trả lời inbox + bảng giá/lịch học
  - [ ] Ngày 7 (21/07): kiểm tra toàn bộ + đăng video đầu tiên, mở chiến dịch
- **Cập nhật gần nhất:** 2026-07-17 — việc #9 đã chốt đủ 3/3, hết vướng quyết định. Lịch gốc trễ 2 ngày (Ngày 1-2), có thể dồn lịch hoặc dịch cả tuần sang bắt đầu từ hôm nay — cần Thuý xác nhận cách bù lịch.

### 9. Chốt 3 quyết định trước khi triển khai AMI Beauty Funnel ✅ Đã chốt đủ 3/3
- **Trạng thái:** Hoàn thành quyết định (2026-07-17) — sẵn sàng mở khoá việc #8
- **Mô tả:** Cần Thuý quyết định trước khi bắt đầu Checklist Tuần 1 (việc #8), kẻo làm sai hướng.
- **Việc con:**
  - [x] **Hướng phễu lead-gen: Ebook+Zalo Beauty Club** (việc #7b), tạm hoãn Web Lead/Bridge/Sales page (việc #7)
  - [x] **Ebook mồi câu chính: "7 Nỗi Sợ Khiến Phụ Nữ Mãi Chưa Dám Học Makeup Cho Chính Mình"** (đã có PDF, [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]]) — Claude đề xuất vì nhắm đúng nhóm rộng nhất (người chưa dám bắt đầu), khớp mission "giúp được nhiều phụ nữ nhất". "10 Lý Do..." giữ làm tài liệu nuôi dưỡng thứ cấp trong nhóm Zalo (đã khớp lịch "Ngày 2: video 3 lỗi makeup khiến nhìn già").
  - [x] **Khoá Basic: 3 buổi/2tr** — khớp sẵn với landing page chính thức (việc #5) và tài liệu Beauty Funnel 14/07. Không xung đột với giáo án 5 buổi đã có — giáo án đó là cho khoá **VIP** (1-1, 5 buổi, 3tr), không phải Basic.
- **Cập nhật gần nhất:** 2026-07-17 — chốt đủ 3/3 quyết định. Việc #8 (Checklist Tuần 1) có thể bắt đầu.

### 10. Áp dụng 8 công cụ quản trị vận hành vào AMI
- **Trạng thái:** Chưa bắt đầu (0%)
- **Mô tả:** Tài liệu ngày 15/07 đã đề xuất thứ tự áp dụng: BMC (dựng ngay vì đã có data) → Swimlane buổi học (ưu tiên cao nhất vì mới có chồng + 2 học viên hỗ trợ, ranh giới ai-làm-gì chưa rõ) → WI + OPL (video ngắn dạy việc lặp lại) → BSC/SIPOC/Value Analysis (làm sau). Xem [[nang-luc/out-2026-07-15-ap-dung-8-cong-cu-van-hanh-ami]].
- **Việc con:** (chưa chia nhỏ, đang chờ Thuý xác nhận bắt đầu từ đâu)
- **Cập nhật gần nhất:** 2026-07-17 — ghi nhận vào bảng theo dõi (tài liệu có từ 15/07 nhưng chưa được thêm vào đây).

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

## [2026-07-17] Rà soát phát hiện 3 mục lỗi thời + ghi nhận định hướng mới AMI
- Thuý nêu định hướng: AMI tập trung "cho đi trao giá trị, giúp được bao nhiêu phụ nữ biết makeup tự làm đẹp cho bản thân" — khớp tinh thần phễu Ebook+Zalo (70% giá trị/20% câu chuyện/10% bán) hơn hướng Web Lead/Bridge/Sales page thuần bán hàng
- Việc #5 (Web giới thiệu khoá cá nhân): phát hiện bản `landing-khoa-hoc-makeup-ca-nhan/index.html` đã dựng từ 14/07 nhưng bảng vẫn ghi 0% — nâng lên ~40%. Đồng thời phát hiện **trùng lặp** với 3 bản cũ đã có sẵn trong `ami-website/` (`khoa-hoc-trang-diem-ca-nhan.html`, `khoa-hoc-ca-nhan-luxury.html`, `landing.html`) — cần Thuý chọn giữ 1 bản
- Việc #6 (SOP content video): nâng ~70%→~75%, ghi nhận tiến độ 16/07 (mẫu content văn phong Hường Phiêu, Thuý đã duyệt) chưa được cập nhật vào bảng
- Việc #9 (chốt 3 quyết định phễu): thêm ghi chú định hướng mới của Thuý nghiêng về phễu Ebook+Zalo, chờ xác nhận chính thức để mở khoá việc #8
- Thêm việc mới #10: Áp dụng 8 công cụ quản trị vận hành vào AMI (tài liệu có từ 15/07 nhưng chưa từng được thêm vào bảng)
- Chưa đồng bộ sang Lark Base lần này — cần làm ở lượt cập nhật kế tiếp

## [2026-07-17] Thuý chốt 2 quyết định: bản landing page + hướng phễu
- **Chốt landing page (việc #5):** giữ `landing-khoa-hoc-makeup-ca-nhan/index.html` làm bản chính thức. 3 bản cũ trong `ami-website/` (`khoa-hoc-trang-diem-ca-nhan.html`, `khoa-hoc-ca-nhan-luxury.html`, `landing.html`) chưa xử lý — đang chờ Thuý chọn xoá hẳn hay lưu trữ.
- **Chốt hướng phễu (việc #9):** Ebook+Zalo Beauty Club là phễu chính thức. Việc #7 (Web Lead/Bridge/Sales page) chuyển sang tạm hoãn, không xoá. Tách phễu Ebook+Zalo thành việc riêng **#7b** để theo dõi thực thi.
- Còn tồn: 2/3 quyết định của việc #9 (ebook bản nào, khoá Basic 3 hay 5 buổi) và xử lý 3 file trùng — cần Thuý trả lời nốt để mở khoá việc #8 (Checklist Tuần 1, đang trễ từ 15/07).
- Chưa đồng bộ sang Lark Base — cần làm ở lượt cập nhật kế tiếp.

## [2026-07-17] Chốt đủ 3/3 quyết định — mở khoá việc #8
- Thuý chọn: lưu trữ 3 file trùng (đã di chuyển vào `ami-website/archive/`, xác nhận không có link nào khác trong site trỏ tới nên an toàn); khoá Basic 3 buổi (khớp landing page hiện tại, không xung đột giáo án 5 buổi vì đó là cho khoá VIP)
- Ebook: Thuý nhờ Claude đề xuất → chọn "7 Nỗi Sợ Khiến Phụ Nữ Mãi Chưa Dám Học Makeup Cho Chính Mình" (đã có PDF) làm mồi câu chính vì nhắm đúng nhóm rộng nhất (người chưa dám bắt đầu), khớp mission "trao giá trị, giúp nhiều phụ nữ nhất"; "10 Lý Do..." giữ làm nội dung nuôi dưỡng thứ cấp trong nhóm Zalo
- Việc #9 chuyển sang "Hoàn thành quyết định". Việc #8 (Checklist Tuần 1) chuyển "Sẵn sàng bắt đầu" — không còn vướng quyết định, chỉ còn vướng lịch (trễ 2 ngày, cần Thuý xác nhận cách bù lịch)
- Chưa đồng bộ sang Lark Base — cần làm ở lượt cập nhật kế tiếp
```
