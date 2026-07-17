---
title: Insight từ bình luận thật của khách dưới bài viral 4 đối thủ makeup
type: analysis
khoang: nang-luc
tags: [nghien-cuu-khach, doi-thu, voc, insight, makeup-ca-nhan]
created: 2026-07-17
updated: 2026-07-17
sources: [apify-facebook-comments-scraper]
---

## Bối cảnh & phương pháp

Mọi nghiên cứu insight trước đây của AMI (xem [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/kb-forever-green-insight]]) đều dựa trên **nội dung bài đăng** của đối thủ (post/hook/caption) hoặc bài trong hội nhóm/TikTok. Lần này đổi góc: cào **bình luận thật của khách hàng** dưới 8 bài viral nhất của 4 đối thủ ([[entities/tho-makeup-ha-noi]], [[entities/phuong-koi-makeup]], [[entities/linhlinhmakeup]], [[entities/lelylanhuong]]) qua Apify (`apify/facebook-comments-scraper`) — đây là phản ứng KHÔNG BỊ BIÊN TẬP của khách, khác hẳn nội dung marketing do chính đối thủ viết ra.

- 8 bài được chọn (2 bài/trang), ưu tiên bài kỹ thuật viral nhất + 1 bài dùng chiêu "comment 1 để nhận ưu đãi"
- Cào được 218 bình luận thô, lọc bỏ spam/rác (số "1", "Ib" trần trụi, emoji đơn thuần) còn **160 bình luận có nội dung thật**
- Dữ liệu thô đầy đủ đã nạp vào Lark Base "CRM Thúy Thúy" → bảng mới **"Bình luận Khách Hàng - Đối Thủ (cào về)"** (`tblOM8jdlvMsddzx`), tách riêng khỏi bảng "Kho Data Đối Thủ" vốn chỉ lưu số liệu cấp bài đăng

## Top Themes (xếp theo tần suất × cường độ)

### Theme 1: "Video dễ, làm theo thì hỏng" — khoảng cách giữa xem và tự làm
**Summary:** Đây là insight MẠNH NHẤT tìm được trong toàn bộ đợt cào — hàng loạt khách tự trào phúng việc làm theo tutorial ra kết quả thảm hoạ, và các bình luận này được CHÍNH KHÁCH KHÁC thả tim rất nhiều (100-384 like/bình luận — cao hơn cả nhiều bài đăng gốc của đối thủ nhỏ).
**Tần suất:** Xuất hiện dày đặc dưới bài "Make up clean girl siêu nhanh" của [[entities/lelylanhuong]] (~10 bình luận cùng chủ đề trong 1 bài)
**Cường độ:** Rất cao — đây là những bình luận có lượt thích CAO NHẤT toàn bộ dữ liệu, tức là hàng trăm người khác bấm đồng cảm
**Bằng chứng (nguyên văn):**
- "Họ chấm chấm là có nét. T mà chấm chấm là có chuyện ngay" (329 likes)
- "Bữa t cũng tập chấm chấm gì nè. Cái t lấy cây son lì t chấm cái t quẹt mãi nó k tan🥹" (238 likes)
- "T đã làm theo và thiếu cái sân khấu nữa là hát tuồng được luôn z" (114 likes)
- "Kiểu này trang điểm xong ra đường chú csgt tuýt còi ktra nồng độ cồn😂" (73 likes)
- "T làm y chang mà nó ra cái mặt quỷ" / "chỉ đẹo chỉ làm sao cx đẹp tui quẹt theo hồi nhìn như đi hát bội" / "Lê Quyên lm theo hồi thành dv hát tuồng"
**Confidence: High** — nhiều nguồn độc lập trong cùng 1 bài, không mồi/không ép, cường độ cảm xúc đo được bằng like thật.
**Ý nghĩa:** Đây chính là nỗi sợ "không có năng khiếu" đã ghi nhận ở [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] và [[nang-luc/kb-forever-green-insight]] — nhưng lần này có **bằng chứng định lượng** cho thấy đây có lẽ là nỗi đau phổ biến/dữ dội nhất thị trường (thể hiện qua humor tự giễu, cơ chế phòng vệ tâm lý điển hình khi thất bại). Content AMI nên khai thác đúng "khoảnh khắc quẹt mãi không tan", "nhìn như hát tuồng" — dùng chính ngôn ngữ này để tạo đồng cảm trước khi bán giải pháp học 1-1 (đối lập với tutorial 1 chiều không ai sửa cho mình).

### Theme 2: Nghi ngờ "vì da/mặt người mẫu đẹp sẵn, không phải vì kỹ thuật"
**Summary:** Khách phản bác giá trị con hướng dẫn bằng cách quy kết kết quả đẹp là do bản thân người dạy vốn có da đẹp, không phải do kỹ thuật — một rào cản niềm tin (trust objection) lặp lại ở 2 bài khác nhau của cùng 1 trang.
**Tần suất:** Xuất hiện ở cả 2 bài của [[entities/lelylanhuong]] (không phải ngẫu nhiên 1 lần)
**Bằng chứng:**
- "Da đẹp rồi, thì chét gì lên cũng thấy đẹp"
- "Bà đẹp rồi, giờ có tô hết cái mặt luôn bà cũng đẹp"
- "Trời ơi trộm vía cái da mặt bả kìa" / "Da mặt chị dùng gì mà đẹp thế chị ơi"
- "Đánh tráo hay thực sự ko hiểu định nghĩa makeup clean girl vậy?" (nghi ngờ thẳng tính xác thực của video)
**Confidence: Medium-High** — 2 nguồn độc lập, cùng pattern, nhưng giới hạn ở 1 trang đối thủ.
**Ý nghĩa:** Đây là RÀO CẢN NIỀM TIN cụ thể khi bán khoá/tutorial dựa trên video 1 người mẫu đẹp sẵn. AMI nên ưu tiên content "học trên nhiều loại da/khuyết điểm thật" (đã có sẵn định hướng "học theo khuyết điểm riêng" ở [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]]) — và khi làm before/after nên chọn học viên có nền da rõ khuyết điểm (không phải da đẹp sẵn) để tránh bị gán nhãn "vì họ đẹp sẵn thôi".

### Theme 3: Muốn tên sản phẩm cụ thể, không chỉ kỹ thuật
**Summary:** Sau khi xem kỹ thuật, câu hỏi tiếp theo luôn là "dùng cái gì" — sản phẩm cụ thể, không phải chỉ động tác tay.
**Tần suất:** 8 bình luận, rải rác ở 3/4 trang (Linh Linh, Lely Lan Hương x2)
**Bằng chứng:**
- "Xin link cọ ạ" / "Dùng kem gì vậy b" / "Phủ phấn dùng loại nào c" (dưới bài rãnh nhăn của [[entities/linhlinhmakeup]])
- "son môi c đánh màu gì hãng nào thế ạ"
- "xin link lọ kem nước bả bôi" / "Xin linh son với" / "c dùng má màu gì v ạ"
**Confidence: Medium** — tần suất vừa phải nhưng nhất quán trên nhiều bài/trang khác nhau.
**Ý nghĩa:** Khoảng trống content: hướng dẫn "chọn sản phẩm theo loại da/mục đích" — không chỉ kỹ thuật tay. Đây cũng là cơ hội để lồng khoá học 1-1 AMI như giải pháp "không cần đoán mua sản phẩm nào, được tư vấn đúng loại da mình".

### Theme 4: Địa điểm là rào cản hỏi-đặt-lịch số 1
**Summary:** Dưới bài viral của trang không công khai rõ địa chỉ ngay trong bài, số lượng bình luận hỏi "ở đâu"/"địa chỉ" áp đảo mọi loại câu hỏi khác.
**Tần suất:** ~15+ bình luận riêng dưới 1 bài của [[entities/phuong-koi-makeup]] (chiếm phần lớn trong tổng 27 bình luận thuộc nhóm "hỏi giá/địa điểm/đặt lịch")
**Bằng chứng:** "Ở đâu em" / "Bạn ở đâu" / "Cho xin địa chỉ" / "Xin dchi để make up e booking" / "Ib địa chỉ e" / "Em ở đâu vậy em?" — lặp lại gần như nguyên văn bởi hàng chục người khác nhau
**Confidence: Medium** — tập trung ở 1 nguồn (1 trang, 1 bài) nhưng khối lượng lặp lại rất lớn trong cùng 1 bài.
**Ý nghĩa:** Đây là **cơ hội trực tiếp cho AMI** — AMI đã có địa chỉ cụ thể thật (351 Lê Hồng Phong, TP. Nam Định). Bài học: luôn ghim địa chỉ/khu vực phục vụ ngay trong caption hoặc comment đầu tiên của mọi bài viral — nếu không, lượng lead hỏi sẽ "rơi" ở bước hỏi địa chỉ mà không bao giờ inbox tiếp.

### Theme 5: Bình luận "mồi" (comment-bait) tạo ảo giác tương tác, không phải insight thật
**Summary:** Bài "Comment 1 để nhận ưu đãi 70%" của [[entities/phuong-koi-makeup]] tạo ra hàng chục bình luận thuần "1" — hầu như không có nội dung thật để phân tích (đã lọc bỏ 58/218 bình luận thô vì lý do này, riêng bài này chiếm phần lớn số bị lọc).
**Ý nghĩa (lưu ý phương pháp, không phải insight khách hàng):** Nếu AMI dùng chiêu "comment X để nhận ưu đãi", số comment tăng nhưng sẽ không thu được insight thật — cần tách biệt rõ giữa "chỉ số tương tác ảo" và "dữ liệu khách hàng thật" khi đánh giá hiệu quả content.

### Theme 6 (phụ, 1 nguồn): Vùng "lo lắng tuổi tác" không chỉ giới hạn 1 điểm trên mặt
**Bằng chứng:** "Còn rãnh cười ạ?" — hỏi thêm dưới bài chỉ nói về rãnh nhăn dưới mắt, cho thấy khách 30+ có nhiều vùng lo lắng khác nhau (rãnh mắt, rãnh cười/nasolabial fold...) chứ không chỉ vùng được nói tới trong bài.
**Confidence: Low** (1 nguồn) nhưng đáng theo dõi thêm — gợi ý làm series "mỗi tập 1 vùng nếp nhăn" thay vì gộp chung.

## Tổng hợp cơ hội content (implications)

1. Dùng đúng ngôn ngữ tự giễu của khách ("quẹt mãi không tan", "như hát tuồng") làm hook mở đầu cho content về sự khác biệt giữa "xem tutorial" và "học có người sửa 1-1" — đánh thẳng vào Theme 1, insight mạnh nhất.
2. Khi làm before/after, ưu tiên học viên có khuyết điểm da rõ ràng (không chọn da đẹp sẵn) để né rào cản "vì họ đẹp sẵn thôi" (Theme 2).
3. Thêm 1 tuyến content "chọn sản phẩm theo loại da/mục đích" bên cạnh tuyến kỹ thuật thuần tuý (Theme 3).
4. Luôn ghim địa chỉ 351 Lê Hồng Phong, TP. Nam Định ngay trong caption/comment đầu của mọi bài — không để khách phải hỏi (Theme 4), đối chiếu thêm dữ liệu thật ở [[nang-luc/out-2026-07-12-danh-sach-group-cong-dong-makeup]] (Nam Định chưa có group riêng → cơ hội định vị địa phương).
5. Không dùng chiêu "comment X để nhận ưu đãi" nếu mục tiêu là thu insight thật — chỉ dùng khi mục tiêu thuần là tăng chỉ số tương tác ảo cho thuật toán (Theme 5).

## Nguồn dữ liệu

- Dữ liệu thô 160 bình luận đã phân loại: Lark Base "CRM Thúy Thúy" → bảng "Bình luận Khách Hàng - Đối Thủ (cào về)" (`tblOM8jdlvMsddzx`)
- 8 bài gốc: 2 bài Thỏ MakeUp, 2 bài Phương Kòi, 2 bài Linh Linh, 2 bài Lely Lan Hương (link đầy đủ trong bảng Base)

## Liên quan

[[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/kb-forever-green-insight]], [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]], [[nang-luc/out-2026-07-12-danh-sach-group-cong-dong-makeup]], [[entities/tho-makeup-ha-noi]], [[entities/phuong-koi-makeup]], [[entities/linhlinhmakeup]], [[entities/lelylanhuong]]
