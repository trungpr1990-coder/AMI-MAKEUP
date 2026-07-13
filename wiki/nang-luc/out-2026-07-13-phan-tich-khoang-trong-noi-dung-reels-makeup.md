---
title: Phân tích khoảng trống nội dung Facebook Reels — Thỏ MakeUp Hà Nội & Phương Kòi Makeup
type: analysis
khoang: nang-luc
tags: [content-strategy, facebook-reels, doi-thu, makeup-ca-nhan]
created: 2026-07-13
updated: 2026-07-13
sources: [apify-facebook-posts-scraper]
---

## Tóm tắt

Phân tích khoảng trống nội dung Reels cho ngách makeup cá nhân (thị trường Việt Nam), dựa trên dữ liệu thật lấy qua Apify (`facebook-posts-scraper`) từ 2 kênh: [[entities/tho-makeup-ha-noi]], [[entities/phuong-koi-makeup]]. Mỗi kênh lấy 50 bài gần nhất (metadata: caption, likes, shares, views, loại bài, thời gian đăng). Xếp hạng ra 5 cơ hội nội dung tiềm năng nhất. Liên quan: [[nang-luc/2026-07-12-phan-tich-tuyen-noi-dung-tho-makeup]] (phân tích trước đó về riêng Thỏ Makeup), [[nang-luc/out-2026-07-12-phan-tich-thi-truong-doi-thu-ami]] (Phương Kòi là 1 trong 5 đối thủ AMI).

## Giới hạn dữ liệu

- **Có:** 50 bài/kênh, dữ liệu thật (Apify facebook-posts-scraper), tính đến 2026-07-13.
  - Thỏ MakeUp Hà Nội: 2026-06-20 → 2026-07-13 (~24 ngày)
  - Phương Kòi Makeup: 2026-06-09 → 2026-07-13 (~35 ngày)
- **Không có:** nội dung bình luận thật (công cụ scraper không trả về comment) — mục "nhu cầu qua bình luận" trong prompt gốc không thực hiện được bằng dữ liệu thật, không bịa số liệu.
- **Không có:** số liệu volume tìm kiếm/từ khoá thật — mục "khoảng trống tìm kiếm" là suy luận từ nội dung quan sát + kiến thức ngành, đánh dấu rõ trong bài.
- **Có:** tra cứu web thật cho phần xu hướng (nguồn liệt kê cuối bài).

## 1. Độ phủ nội dung

### Thỏ MakeUp Hà Nội (avg likes 74.3 | avg shares 7.9 | avg views 5.188)

- Khai thác nhiều nhất: "Cảm nhận học viên sau X buổi học" (~14/50 bài = 28%) — engagement thấp nhất kênh (2-9 likes phổ biến)
- Khai thác nhiều: tips kỹ thuật đơn lẻ (kẻ khối mũi, mở góc mắt, đánh má hồng, đánh son, thon mặt)
- Sơ lược: before/after transformation (2-3 bài, engagement khá hơn)
- Thiếu hẳn: makeup cô dâu/tiệc cưới, makeup theo dịp, makeup theo loại da, so sánh kỹ thuật/sản phẩm, phân tích sai lầm
- Lặp lại: CTA cố định "📩 Nhắn ngay để Thỏ hỗ trợ bạn nhé! -------- THỎ MAKEUP ACADEMY -------" gần như mọi video

### Phương Kòi Makeup (avg likes 1.839 | avg shares 52.3 | avg views 146.991 — gấp ~28 lần Thỏ)

- Khai thác nhiều nhất: "Layout tone ___" (smokey, Hàn, đỏ, cam sữa, tan skin, tây, douyin — ~15+/50 bài), makeup cho nghệ sĩ/người nổi tiếng (5/10 bài top engagement)
- Khai thác nhiều: hậu trường lớp học (Class K3/K4) — tần suất cao, engagement trung bình-thấp
- Sơ lược: bridal (2 bài, 111 & 282 — dưới trung bình kênh), makeup nam (1 bài)
- Thiếu hẳn: phân tích sai lầm, so sánh kỹ thuật/sản phẩm, storytelling đầy đủ, giải thích "vì sao" chọn kỹ thuật
- Lặp lại: mô-típ "layout tone X" dùng chung caption format

**Tín hiệu đáng chú ý:** bài xử lý nền da diễn viên Mỹ Duyên (Phương Kòi) đạt 1.781 engagement — cao bất thường so với các bài "recap lớp học" khác (30-100).

## 2. Nhu cầu từ người xem (bình luận)

Không truy cập được bình luận thật. 2 tín hiệu gián tiếp *quan sát được* (không phải bình luận):

- Thỏ: "Cách đánh má hồng xinh yêu" — 145 likes / 133 shares (tỷ lệ ~92%, các bài khác thường <15%). *Suy luận:* nội dung how-to ngắn có xu hướng được lưu/chia sẻ hơn được like.
- Phương Kòi: "mở nhóm học Makeup nền Miễn Phí" (ảnh) — 1.297 likes, gấp 6-100 lần các bài ảnh khác cùng kênh. *Suy luận:* lead magnet miễn phí hút chú ý mạnh hơn nội dung bán hàng trực tiếp.

## 3. Khoảng trống tìm kiếm (suy luận, chưa xác minh bằng công cụ từ khoá)

- "Makeup dự tiệc cưới người khác" / tự trang điểm cho dịp cưới
- "Makeup theo loại da" (da dầu/da mụn/da nhạy cảm)
- "Makeup đi làm/phỏng vấn/công sở"
- "Sai lầm khi tự trang điểm tại nhà"
- "Học makeup cá nhân mất bao lâu/chi phí" (minh bạch, không chỉ CTA)

## 4. Khoảng trống định dạng

Cả 2 kênh thiếu: case study dài hơi, so sánh (A vs B), phân tích sai lầm, storytelling nhiều tập, reaction có phân tích, tranh luận nhiều góc nhìn. Phương Kòi có "hướng dẫn chuyên sâu" nhưng thiên trình diễn kết quả hơn giải thích từng bước.

## 5. Cơ hội theo xu hướng (có tra cứu web thật)

- Trend làm đẹp VN 2026: Jelly Makeup, Lived-in Lips, Soft Matte, Satin Skin, tông ấm 90s trở lại, mascara nhiều màu — 0/100 bài (2 kênh) nhắc các trend này.
- Thuật toán Facebook Reels 2026: ưu tiên nội dung gốc (không repost), video 15-30s completion cao hơn 45%, nội dung đăng trong ngày ưu tiên phân phối +50%, mô hình khảo sát "User True Interest" mới.

## 5 Cơ hội nội dung xếp hạng

### 1. Phân tích sai lầm khi tự trang điểm tại nhà
- Khoảng trống: không kênh nào có định dạng này
- Bằng chứng: *suy luận* từ tỷ lệ share bất thường (92%) ở bài how-to của Thỏ
- Góc triển khai: "3 lỗi khiến makeup xuống sắc" theo từng vùng mặt
- Tiêu đề gợi ý: "3 lỗi khiến lớp nền bị bết chỉ sau 2 tiếng" / "Sai một bước này, cả gương mặt makeup hỏng theo" / "90% người tự trang điểm mắc lỗi này mà không biết"
- Định dạng: phân tích sai lầm + hướng dẫn chuyên sâu ngắn (60-90s)

### 2. Makeup dự tiệc cưới cho khách mời (không phải makeup cô dâu chuyên nghiệp)
- Khoảng trống: Phương Kòi chỉ 2 bài bridal dưới trung bình kênh; Thỏ không có
- Bằng chứng: bài xử lý da diễn viên đạt gần gấp đôi trung bình kênh → suy luận nhu cầu tương tự cho bridal
- Góc triển khai: "Tự trang điểm dự đám cưới người khác trong 15 phút" — khác góc chuyên viên trang điểm cô dâu
- Tiêu đề gợi ý: "Đi đám cưới bạn thân, tự trang điểm 15 phút vẫn xịn" / "Layout dự tiệc cưới không cần makeup artist" / "3 bước makeup bền 8 tiếng cho mùa cưới"
- Định dạng: hướng dẫn chuyên sâu theo bước

### 3. Case study dài hơi "hành trình học viên" thay clip cảm nhận ngắn
- Khoảng trống: Thỏ dùng 28% nội dung cho feedback ngắn nhưng engagement thấp nhất kênh
- Bằng chứng: bài có kết quả rõ ràng/kịch tính hơn đạt views cao bất thường (18.676 vs avg 5.188)
- Góc triển khai: kể 1 học viên xuyên suốt nhiều tập thay vì clip rời rạc
- Tiêu đề gợi ý: "Ngày đầu tay run, makeup lem hết — 1 tháng sau thì sao?" / "Học viên U40 tự tin makeup dự sự kiện sau 4 buổi" / "Từ 'makeup xấu hơn để mặt mộc' đến tự tin mỗi ngày"
- Định dạng: case study + storytelling nhiều tập

### 4. Bắt trend làm đẹp 2026 thật (Jelly Makeup, Lived-in Lips, Satin Skin)
- Khoảng trống: 0/100 bài nhắc các trend này dù báo làm đẹp VN đưa tin đồng loạt
- Góc triển khai: thử nghiệm + đánh giá thật ("có hợp da Việt không") thay vì chỉ demo đẹp
- Tiêu đề gợi ý: "Jelly Makeup đang hot, da dầu có làm được không?" / "Lived-in Lips: trend môi lười mà vẫn xinh 2026" / "Satin Skin — nền da hot nhất 2026, makeup cá nhân cũng làm được"
- Định dạng: hướng dẫn chuyên sâu + reaction có phân tích

### 5. Video ngắn "tặng miễn phí" thay vì chỉ thông báo bằng ảnh/text
- Khoảng trống: cả 2 kênh chủ yếu CTA bán khoá trực tiếp, lead magnet miễn phí gần như không có dạng video
- Bằng chứng: bài thông báo nhóm học miễn phí (Phương Kòi, ảnh) đạt gấp 6-100 lần các bài ảnh khác cùng kênh
- Góc triển khai: dạy trọn 1 kỹ thuật thật trong video ngắn, CTA nhẹ ở cuối
- Tiêu đề gợi ý: "Tặng free: cách đánh nền mịn như da thật trong 60 giây" / "Học miễn phí kỹ thuật mà học viên trả phí vẫn học" / "Video này dạy hết 1 kỹ thuật, không giấu nghề"
- Định dạng: hướng dẫn chuyên sâu dạng Reels ngắn có CTA lead magnet

## Nguồn tra cứu xu hướng

- [Xu hướng makeup 2026: 4 trend lỗi thời và phong cách mới lên ngôi](https://juheemakeup.com.vn/blog-tin-tuc/xu-huong-makeup-2026-nghe-thuat-ca-tinh-len-ngoi-4-trao-luu-mang-xa-hoi-dang-dan-loi-thoi)
- [Xu Hướng Makeup 2026: Jelly Makeup Và Làn Da Căng Mọng](https://hadlyn.vn/xu-huong-makeup-2026/)
- [Top xu hướng makeup cô dâu hot trend năm 2026](https://baovanhoa.vn/doi-song/top-xu-huong-makeup-co-dau-hot-trend-nam-2026-193723.html)
- [Xu hướng trang điểm năm 2026: tông màu ấm 90s trở lại](https://www.24h.com.vn/lam-dep/xu-huong-trang-diem-nam-2026-cac-tong-mau-am-ap-cua-thap-nien-90-dang-tro-lai-c145a1733410.html)
- [Facebook Reels in 2026: Definitive Guide for Marketers](https://quickframe.com/blog/facebook-reels-guide-for-marketers)
- [Facebook's 2026 Rules for Reach & Relevance](https://www.socialmediaexaminer.com/facebooks-2026-rules-for-reach-relevance/)

## Ghi chú

Dữ liệu thô (JSON/CSV, 50 bài/kênh) được lưu tạm tại thư mục scratchpad của phiên làm việc, không phải trong wiki — nếu cần lưu lâu dài, tải lại qua script `lay-du-lieu-facebook` skill.
