---
title: "Upload nhiều hình ảnh lên bài post Facebook tự động bằng Make | Hoàng Minh Hóa"
type: source
channel: "@hoangminhhoaoffical"
source_type: youtube-transcript
source_url: https://www.youtube.com/watch?v=T5Kb7OAKXzo
video_id: T5Kb7OAKXzo
captured: 2026-06-24
status: complete
category: "04 — Marketing-MXH"
---

# Upload nhiều hình ảnh lên bài post Facebook tự động bằng Make | Hoàng Minh Hóa

> Nguồn: https://www.youtube.com/watch?v=T5Kb7OAKXzo · Kênh: Hoàng Minh Hóa

## 📌 Tóm tắt đầy đủ (dàn ý)

### Luận điểm cốt lõi
Hướng dẫn kỹ thuật mở rộng Scenario trong Make để tự động đăng bài Facebook kèm nhiều hình ảnh (thay vì chỉ một hình như mặc định), bằng cách thêm nhiều module "Get a file" và cấu hình đúng cột dữ liệu trong Google Sheets.

### Vấn đề mặc định và cách giải quyết
- Module "Get a file link" mặc định chỉ lấy được 1 file/lần
- Muốn đăng nhiều hình: thêm nhiều module "Get a file link" tương ứng số lượng hình muốn đăng
- Ví dụ: 3 hình → thêm 3 module "Get a file link"

### Cấu hình Google Sheets
- Tạo thêm cột cho từng hình trong sheet: cột F (hình 1), cột G (hình 2), cột H (hình 3)
- Mỗi cột chứa đường link Dropbox của từng hình tương ứng
- Copy link hình từ Dropbox và dán vào đúng cột

#### Trích dẫn
> "Bạn muốn ba hình thì bạn thêm vào đây là 3 — rồi hình số 1, hình số 2, hình số 3."

### Cấu hình module trong Make
- Mỗi module "Get a file link" được đặt tên theo số hình (hình 1, 2, 3)
- Trỏ từng module đúng vào cột tương ứng (cột F → hình 1, G → hình 2, H → hình 3)
- Module đăng bài (post): kéo lần lượt HTTP link của hình 1, 2, 3 vào đúng thứ tự

### Kiểm tra kết quả
- Chạy Scenario, quan sát từng bước: viết tiêu đề → tạo nội dung → lấy hình 1/2/3 → post bài
- Vào trang Facebook kiểm tra: bài đăng hiển thị đúng 3 hình là thành công

### 📣 Kêu gọi hành động (CTA — không phải tri thức)
Không có CTA rõ ràng — video mang tính hướng dẫn kỹ thuật nội bộ cho học viên.
