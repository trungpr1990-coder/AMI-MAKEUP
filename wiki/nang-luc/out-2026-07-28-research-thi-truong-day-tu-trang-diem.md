---
title: Research Thị Trường 360° — Đào tạo makeup cá nhân (dạy chị em tự trang điểm cho bản thân)
type: source
tags: [research-thi-truong, makeup-ca-nhan, doi-thu, khach-hang-muc-tieu, apify, khoang-trong-thi-truong]
created: 2026-07-28
updated: 2026-07-28
sources: [apify google-search-scraper, apify clockworks/tiktok-scraper]
---

## Bối cảnh & phạm vi

Đề bài: tìm khoảng trống thị trường + đối tượng khách hàng cho "Đào tạo makeup, dạy học cho các chị em biết tự trang điểm cho chính mình" — đúng dòng sản phẩm **Makeup Cá Nhân** mà AMI đang bán (không phải khoá hành nghề/makeup cô dâu chuyên nghiệp). Kênh giả định: Facebook + TikTok (kênh chính AMI hiện tại).

> **Khác với các nghiên cứu đối thủ trước đây** ([[nang-luc/out-2026-07-12-phan-tich-thi-truong-doi-thu-ami]], [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]]) vốn tập trung vào 5 đối thủ *cùng tỉnh/khu vực gần* (Thỏ MakeUp, Hiền Mew, Phương Kòi...), báo cáo này quét **rộng toàn quốc** qua Google Search + TikTok (Apify) để tìm: (1) ai đã có sẵn info product/lead magnet đúng ngách này, và (2) đối thủ mạng xã hội tầm quốc gia (follower cao) đang chiếm ngách "makeup cá nhân cho người mới" — góc chưa báo cáo nào trước đó đo trực tiếp.

Số lượng truy vấn thực hiện: 29 Google Search (238 kết quả) + 5 từ khoá TikTok (60 video, có đủ follower/lượt thích/lượt xem). Nguồn: `apify/google-search-scraper` (countryCode VN, languageCode vi) + `clockworks/tiktok-scraper`.

---

### MỤC 1: INFO PRODUCTS ĐANG TỒN TẠI

| Người/Thương hiệu | Loại | Chủ đề | Kênh | Phân phối |
|---|---|---|---|---|
| PLITA MakeUp Academy (Phuong Ly) | Ebook | "Bí Kíp Tỏa Sáng Cùng Phuong Ly" | Facebook + `ebook.phuonglymakeup.com` | Landing riêng, tải trực tiếp |
| Phuong Ly (kênh cá nhân) | Video giveaway | "Free Makeup E-book Giveaway — Makeup Learning Roadmap" | YouTube | Đăng ký nhận qua video |
| Nhiều tác giả (Scribd) | Giáo trình PDF | "Trang điểm thẩm mỹ", "Trang điểm cơ bản MĐ19" | Scribd/Studocu | Giáo trình học nghề công lập, KHÔNG phải lead magnet marketing |

**Nhận xét:** Info product marketing đúng nghĩa (ebook làm mồi câu, có landing page riêng) trong ngách "makeup cá nhân" ở Việt Nam **gần như chỉ có 1 case** — PLITA/Phuong Ly. Toàn bộ phần còn lại của thị trường (hàng chục trung tâm/cá nhân dạy makeup cá nhân tìm thấy trong 29 query) không có ebook/checklist tải về nào.

**Khoảng trống đã thấy:** AMI đã tự nhận ra và lấp gần hết khoảng trống này rồi — đã có 6 ebook lead magnet thật ([[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]], [[nang-luc/out-2026-07-17-ebook-cam-nang-chon-noi-hoc]], [[nang-luc/out-2026-07-17-ebook-tim-dung-kieu-makeup]], [[nang-luc/out-2026-07-17-ebook-15-phut-moi-sang]], [[nang-luc/out-2026-07-17-ebook-da-khong-hoan-hao]], [[nang-luc/out-2026-07-17-ebook-bo-my-pham-toi-gian]]). Dữ liệu hôm nay **xác nhận lại**: đây vẫn là lợi thế cạnh tranh thật, vì cả thị trường rộng (không chỉ đối thủ cùng tỉnh) cũng chưa ai làm tương đương.

---

### MỤC 2: LEAD MAGNETS ĐANG HOẠT ĐỘNG

| Ai | Tên lead magnet | Offer | Landing page có không? |
|---|---|---|---|
| Trang (tbellzing, FB) | "HỌC MAKEUP CÁ NHÂN HOÀN TOÀN MIỄN PHÍ" | Học miễn phí đổi lấy tương tác | Không, dẫn thẳng bài post |
| Nhiều group FB ("Dạy MakeUp Cá Nhân Online Miễn Phí"...) | Cộng đồng miễn phí | Vào group học hỏi chung, không phải khoá bài bản | Không |
| Jane Here (janehere_official) | "Khóa học makeup đi tiệc & kỷ yếu miễn phí 100%" | Học 1:1 miễn phí, giới hạn | TikTok/FB, không landing riêng |
| LINK MAKE ACADEMY | "Tặng thêm 10 suất học makeup cá nhân mùa tốt nghiệp" | Giảm giá/tặng suất theo mùa | Không |
| TINALE MAKEUP | "Học 1:1 chỉ 3,9tr được tặng toàn bộ mỹ phẩm" | Giảm giá + quà tặng vật lý | Không |
| Huyền Wedding/Makeup Academy | "Bạn muốn tự trang điểm đẹp mỗi ngày nhưng chưa biết bắt đầu từ đâu" | Học 1 kèm 1 cá nhân hoá | Không, dẫn FB/Instagram Reel |

**Loại lead magnet phổ biến nhất trong ngành:** "Buổi học trải nghiệm/suất học miễn phí hoặc giảm giá" — một dạng **bán hàng trực tiếp** (function giống nhau: kéo khách vào tư vấn ngay), không phải phễu nuôi dưỡng bằng nội dung.

**Loại chưa ai làm (ngoài AMI):** Lead magnet dạng NỘI DUNG thuần (ebook/checklist/mini-quiz) đổi lấy thông tin liên hệ rồi nuôi dưỡng dần trước khi bán — đây chính là mô hình AMI đang chạy ([[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]]) và **thị trường rộng vẫn chưa ai bắt kịp**.

---

### MỤC 3: THÔNG ĐIỆP QUẢNG CÁO/HOOK ĐANG THẮNG

Top hook lặp lại nhiều trong dữ liệu cào (Google + TikTok, xếp theo lượt dùng lại):

1. **"[X bước / X phút] cho người mới bắt đầu"** — công thức thống trị tuyệt đối, xuất hiện ở hầu hết mọi kết quả tìm kiếm và video TikTok top view (VD: "TỰ HỌC MAKEUP TỪ A-Z TRONG 30 PHÚT", "8 Bước Tự Học Trang Điểm Cơ Bản", video Chou Lười Makeup "26 Phút chi tiết"). Đây là hook **bão hoà nhất thị trường**.
2. **"Không cần cầu kỳ / không cần nền dày, chỉ cần..."** — hook rào cản-thời gian/công sức, nhắm đúng người bận (VD: TikTok Ha Thuy Makeup: "Không cần cầu kỳ, chỉ cần makeup đúng... Ai bận rộn, mẹ bỉm, đi học – đi làm mỗi ngày áp dụng là mê liền").
3. **"Bạn muốn tự trang điểm đẹp mà không cần phụ thuộc vào ai?"** — hook độc lập/tự chủ (Huyền Wedding Academy).

Offer được dùng nhiều nhất: buổi/suất học miễn phí hoặc giảm giá theo mùa (tốt nghiệp, sinh nhật page...).
Offer chưa ai dùng theo đúng cách AMI làm: nội dung dạng "chẩn đoán cá nhân hoá" (tìm đúng kiểu makeup/tông nền hợp GƯƠNG MẶT và HOÀN CẢNH SỐNG của từng người) đóng gói thành sản phẩm miễn phí độc lập — đối thủ chỉ dạy 1 giáo trình chung "10 bước" cho tất cả mọi người.

---

### MỤC 4: NỖI ĐAU THẬT CỦA KHÁCH HÀNG

Nguyên văn ngôn ngữ khách hàng (Facebook group + TikTok, cào hôm nay):

Họ mô tả vấn đề bằng:
- "Mình muốn học để tự trang điểm đi làm/đi chơi thôi, không học chuyên..." — phân biệt rạch ròi "học cá nhân" khác "học nghề", sợ bị tư vấn nhầm sang khoá đắt hơn nhu cầu
- "dạ ở đây có ai nhận dạy makeup cá nhân không ạ, báo giá vs số buổi giúp em nha"
- "Mới tập tành makeup mà không biết bắt đầu từ đâu?" (TikTok, lặp lại ở nhiều caption khác nhau)
- "Rì viu gốc khuất nghề makeup... tui đang đắn đo ở chỗ này quá, sợ bỏ ngang thì phí tiền" — sợ mất tiền nếu chọn sai chỗ học
- "Học make up cá nhân là thứ khó xem rv để học nhất... Make up ko dạy onl được. Dạy ngoài còn chưa làm đc huống chi..." — hoài nghi độ hiệu quả của học online
- "giá cả phải phù hợp với túi tiền của học sinh, sinh viên" (Jane Here, TikTok)

Họ muốn đạt:
- "Tự tin trang điểm đi làm, đi chơi hay dự tiệc" — không phải để hành nghề
- "Ai bận rộn, mẹ bỉm, đi học – đi làm mỗi ngày áp dụng là mê liền" — makeup nhanh, hợp với lịch sống bận
- "Girl văn phòng" xuất hiện lặp lại như một nhóm tự nhận diện rõ ràng trên TikTok

Họ đã thử và thất bại / đang loay hoay:
- "Học phí học trang điểm... dao động từ ba mươi tới năm mươi triệu" (khoá NGHỀ) khiến nhiều người sợ nhầm phải trả giá nghề trong khi chỉ cần học cá nhân
- Bài báo kenh14.vn (2026-04-06): "Dân văn phòng đổ xô đi học makeup cá nhân... tốn tiền mới chỉ 3-5 triệu cho 3 buổi học" — xác nhận phân khúc "dân văn phòng" **đã là hiện tượng xã hội thật**, không phải suy đoán, nhưng học phí quan sát được (3-5tr/3 buổi ở phân khúc "hot" Hà Nội/HCM) **cao hơn hẳn** giá AMI hiện tại (2-3tr, [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]]) — cho thấy dư địa giá còn, không phải AMI đang định giá quá cao

Họ hay hỏi:
- "học makeup cá nhân hiện giờ khoảng bao nhiêu tiền là hợp lý ạ?"
- "Xin review chỗ học makeup cho người mới ở TP.HCM ạ... Dạy có tâm, kèm kỹ • Có lớp cơ bản hoặc học từng phần"
- "nên học makeup cá nhân ở đâu... makeup 350-450k bao gồm tóc, makeup dâu từ 999, học cá nhân 1:1 2tr5" (câu hỏi kèm giá tham chiếu thật của thị trường Hà Nội)

**Quan sát quan trọng:** Rào cản lớn nhất lặp lại nhiều nhất trong dữ liệu hôm nay là **NIỀM TIN** (sợ chọn nhầm chỗ, sợ mất tiền, hoài nghi học online có tác dụng) — chứ không phải giá hay kỹ thuật thuần tuý. Điều này khớp với ebook AMI đã làm ([[nang-luc/out-2026-07-17-ebook-cam-nang-chon-noi-hoc]] "7 câu hỏi cần hỏi trước khi đóng tiền") — dữ liệu hôm nay xác nhận đây đúng là điểm đau lớn nhất của cả thị trường rộng, không riêng khách AMI.

---

### MỤC 5: ĐIỂM YẾU CỦA THỊ TRƯỜNG (Cơ hội)

1. **Ai đang bị bỏ sót:** Nhóm "dân văn phòng bận rộn" và "mẹ bỉm sữa" được nhắc tới rải rác (kenh14, TikTok Ha Thuy Makeup) nhưng **chưa ai sở hữu trọn định vị này** — mọi nội dung "cho người mới bắt đầu" trên thị trường đều viết chung chung, không phân theo hoàn cảnh sống (thời gian có, mục đích dùng: đi làm/đi tiệc/ở nhà).
2. **Vấn đề chưa có info product:** Cá nhân hoá theo GƯƠNG MẶT/DA thay vì dạy 1 giáo trình chung "10 bước ai cũng giống ai" — đây là đúng góc AMI đã làm (ebook "Tìm Đúng Kiểu Makeup Hợp Với Khuôn Mặt Bạn") nhưng thị trường rộng (kể cả đối thủ follower triệu) vẫn dạy đại trà.
3. **Format chưa ai làm:** Nội dung "xây niềm tin trước khi bán" (minh bạch tiêu chí chọn nơi học, giải đáp nghi ngờ "học online có tác dụng không") — thị trường đầy nội dung dạy KỸ THUẬT nhưng gần như trống nội dung giải quyết NIỀM TIN trước khi đóng tiền.

---

### MỤC 6: ĐÁNH GIÁ MỨC ĐỘ BÃO HÒA

Mức độ bão hòa: **Cao** ở tầng nội dung/kỹ thuật ("cách trang điểm cơ bản cho người mới" là chủ đề bị lặp lại ở gần như MỌI kết quả tìm kiếm — hàng chục website, hàng trăm video TikTok/YouTube cùng công thức "N bước"). **Trung bình-thấp** ở tầng phễu marketing bài bản (lead magnet nội dung + landing page + nuôi dưỡng).

**Đối thủ mạng xã hội tầm quốc gia (follower ≥200K, lọc theo [[feedback-cao-douyin-uu-tien-kenh-lon]]) — mới so với các báo cáo trước (vốn chỉ khảo sát đối thủ cùng khu vực):**

| Đối thủ | Định vị | Quy mô (TikTok) | Gần/xa so với AMI |
|---|---|---|---|
| **Jane Here** (@janehere_official) | "Makeup cá nhân cho người mới bắt đầu" — có cả khoá free và khoá 1:1 trả phí | 1,4 triệu follower, video mẫu 6,8 triệu view/28 triệu tim | **Đối thủ trực tiếp mạnh nhất tìm được** — đúng định vị makeup cá nhân + người mới, nhưng ở tầm quốc gia, không cạnh tranh trực tiếp địa lý với AMI (Nam Định) |
| **Chou Lười Makeup** (@chouchinchan) | Dạy chi tiết từng bước, tên kênh nhấn "Lười" — chạm đúng insight nhanh gọn | 623,5K follower | Format dài hơi (26 phút/video), khác hẳn short-form phổ biến — không cạnh tranh trực tiếp AMI (không bán khoá, chỉ làm nội dung) |
| **Mần đẹp** (@trangtrankoc) | Review/livestream làm đẹp | 734,2K follower | Không dạy khoá, không phải đối thủ trực tiếp |
| **Ngô Mai Phương** (@ngomaiphuongg) | Lifestyle GRWM (Get Ready With Me) | 710,1K follower | KOC lifestyle, không bán đào tạo |
| **Liu Bui** (@liu.bui510) | Makeup tự nhiên/"beplain", KOC review sản phẩm | 438,9K follower | Không dạy khoá, không phải đối thủ trực tiếp |
| **HuongphieuMakeup** | Makeup cô dâu/chuyên nghiệp | 299,5K follower | Không cùng dòng sản phẩm (cô dâu, không phải cá nhân) — đã có hồ sơ riêng ở [[entities/huong-phieu]] |

**Lý do:** Ở tầng "nội dung dạy kỹ thuật miễn phí", thị trường cực bão hoà và có 1 đối thủ tầm quốc gia rất mạnh (Jane Here, 1,4M follower) đã chiếm sóng đúng cụm từ "makeup cá nhân cho người mới bắt đầu". Nhưng Jane Here (và toàn bộ nhóm follower lớn) vẫn dạy giáo trình CHUNG, không cá nhân hoá theo gương mặt/hoàn cảnh, và không có hệ thống lead magnet nội dung + landing + nuôi dưỡng như AMI đang xây. Khoảng trống không nằm ở "có ai dạy makeup cá nhân chưa" (có rồi, rất nhiều) mà ở **CÁCH bán**: cá nhân hoá + xây niềm tin trước khi bán + phễu nội dung bài bản.

**Cơ hội tốt nhất:** AMI không cần cạnh tranh quy mô follower với Jane Here (không cùng sân — AMI là mô hình đào tạo trực tiếp/1:1 tại Nam Định, không phải kênh nội dung số đông); cơ hội thật là **giữ vững và khai thác sâu hơn** 2 trục đã có sẵn lợi thế: cá nhân hoá theo gương mặt + xây niềm tin trước khi bán, vì đây là 2 trục mà ngay cả đối thủ follower triệu cũng chưa làm.

---

### MỤC 7: GÓC ĐỘ KHÁC BIỆT ĐỀ XUẤT

> "Tôi giúp **chị em bận rộn (dân văn phòng, mẹ bỉm sữa) muốn tự trang điểm cho chính mình** đạt **makeup đẹp, đúng với gương mặt và hoàn cảnh sống riêng của họ chỉ trong vài phút mỗi ngày** bằng cách **cá nhân hoá theo khuôn mặt/loại da từng người (không dạy chung 1 giáo trình 10-bước như thị trường đang làm) + xây niềm tin rõ ràng trước khi đóng tiền (minh bạch, không giấu giá, không ép chọn khoá đắt hơn nhu cầu)**, không cần **học cả một nghề makeup hay lo sợ chọn nhầm chỗ học mất tiền oan**."

Kiểm tra: Câu này có thể đúng với đối thủ không?
- Jane Here, Chou Lười Makeup, các kênh follower lớn khác: Không — họ dạy 1 giáo trình chung, không cá nhân hoá theo gương mặt trong nội dung marketing.
- Vanmiu Beauty, Trâm Makeup, Juhee, Seoul Academy (academy có landing/blog): Không — không có sản phẩm nội dung xây niềm tin trước khi bán, tất cả đều đi thẳng vào bán khoá.
- PLITA/Phuong Ly (duy nhất có ebook thật): Gần nhất về "có nội dung mồi câu", nhưng ebook của họ là hướng dẫn kỹ thuật chung, không phải công cụ cá nhân hoá theo gương mặt.

→ Câu định vị này **KHÔNG đúng với bất kỳ đối thủ nào tìm được**, kể cả đối thủ follower triệu — đủ khác biệt, và đây chính là hướng AMI đã và đang triển khai qua bộ 6 ebook + phễu 90 ngày.

---

### MỤC 8: KHUYẾN NGHỊ INFO PRODUCT NÊN LÀM

AMI đã có 6 ebook lead magnet đúng 2 trục khác biệt (cá nhân hoá + niềm tin). Dựa trên dữ liệu mới cào hôm nay, 2 khoảng trống **chưa được lấp** trong bộ ebook hiện có:

1. **Đối tượng "dân văn phòng bận rộn / mẹ bỉm sữa" chưa có sản phẩm RIÊNG mang tên rõ ràng** — ebook "15 Phút Mỗi Sáng" ([[nang-luc/out-2026-07-17-ebook-15-phut-moi-sang]]) đã chạm đúng insight thời gian, nhưng dữ liệu hôm nay cho thấy đây là một PHÂN KHÚC XÃ HỘI đã được báo chí xác nhận (kenh14.vn) — có thể cân nhắc đóng gói lại thành 1 chiến dịch/landing riêng "AMI cho dân văn phòng" thay vì chỉ 1 ebook trong bộ chung, để chiếm trọn từ khoá này trước khi ai khác làm.
2. **Chưa có sản phẩm nào trực tiếp xử lý nghi ngờ "học online/tại tiệc nhỏ có hiệu quả không"** — câu "Make up ko dạy onl được. Dạy ngoài còn chưa làm đc huống chi..." là một phản đối cụ thể, khác với ebook "chọn nơi học" đã có (ebook đó là về CHỌN nơi học, không phải về hiệu quả hình thức học). Có thể làm thêm 1 mini case-study/before-after thật (không phải ebook lý thuyết) để phản bác trực tiếp nghi ngờ này.

**Bước tiếp theo:** Không cần tạo thêm ebook mới ngay — ưu tiên đo lường hiệu quả 6 ebook đã có trước ([[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]] đang trong giai đoạn 90 ngày). Khi cần ebook thứ 7, ưu tiên 1 trong 2 hướng trên.

---

## Ghi chú kỹ thuật

- Dữ liệu cào qua Apify actor `apify/google-search-scraper` (29 query, resultsPerPage 10, countryCode VN, languageCode vi) và `clockworks/tiktok-scraper` (5 từ khoá, 60 video, có đủ follower/lượt tim/lượt xem/lượt bình luận).
- Chi phí Apify: nhỏ so với hạn mức $5/tháng (dùng chung token tài khoản `spry_paperweight`, xem [[apify-token]] trong memory).
- File thô lưu tạm tại scratchpad phiên làm việc (không lưu vĩnh viễn trong wiki) — nếu cần tra lại dữ liệu gốc, chạy lại 2 actor trên với danh sách truy vấn ở Mục 1-6.
