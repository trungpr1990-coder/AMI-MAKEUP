---
title: Insight từ bình luận TikTok thật — nỗi đau phụ nữ 25-40 với makeup cá nhân
type: analysis
khoang: nang-luc
tags: [nghien-cuu-khach, voc, insight, makeup-ca-nhan, tiktok, lead-magnet]
created: 2026-07-17
updated: 2026-07-17
sources: [apify-tiktok-scraper, apify-tiktok-comments-scraper]
---

## Bối cảnh & phương pháp

Mục tiêu: tìm nỗi đau thật của phụ nữ 25-40 tuổi với makeup (tự học makeup cá nhân, makeup đi tiệc, vấn đề kỹ thuật) để làm mồi câu (lead magnet). Khác với [[nang-luc/out-2026-07-17-insight-binh-luan-khach-hang-doi-thu]] (cào comment Facebook dưới bài 4 đối thủ cụ thể), lần này cào trên **TikTok** không giới hạn theo 1 đối thủ — quét theo từ khoá/hashtag rồi lấy bình luận dưới các video liên quan có lượt tương tác cao nhất.

**Quy trình:**
1. Cào 190 video (7 từ khoá tiếng Việt + 3 hashtag, qua actor `clockworks/tiktok-scraper`, `proxyCountryCode: VN`) — lọc còn 21 video thực sự liên quan makeup cá nhân/tự trang điểm (loại bỏ nhiễu: nội dung không liên quan bị thuật toán tìm kiếm TikTok trả về lẫn do khớp mờ từ khoá tiếng Việt dài).
2. Chọn 15 video có lượt bình luận cao nhất trong nhóm liên quan → cào 375 bình luận qua actor `clockworks/tiktok-comments-scraper`.
3. Đọc toàn bộ 375 bình luận, phân cụm theo chủ đề, xếp theo tần suất × cường độ (lượt thích bình luận).

**Chi phí Apify:** ~$1.47 (trong quỹ FREE $5/tháng dùng chung với hệ thống Douyin/Facebook đang chạy tự động).

**Giới hạn cần lưu ý:** search TikTok theo cụm từ tiếng Việt dài trả về khá nhiều nhiễu (chỉ ~20% kết quả thật sự liên quan, kể cả khi khoá vùng VN) — phải lọc thủ công theo ngôn ngữ + nội dung, không dùng được luôn kết quả thô.

## Top Themes (xếp theo tần suất × cường độ)

### Theme 1: Chọn sai tone/màu kem nền — nỗi đau tốn tiền nhất, có hành vi mua bán thật làm bằng chứng
**Summary:** Đây là chủ đề dày đặc nhất trong toàn bộ dữ liệu — xuất hiện ở hầu hết video review kem nền/BB cream. Đặc biệt: khách hàng thực sự **rao bán lại/đổi (trade/pass)** sản phẩm mua nhầm tone ngay trong phần bình luận — bằng chứng hành vi thật, không phải chỉ lời than.
**Bằng chứng (nguyên văn):**
- "màu 110 thì sợ trắng quá mua màu 115 mới nhận hàng nó đen hơn mặt mìk h lm sao😭" (195 tim)
- "Tại sao t k biết cái này sớm hơn, trước t coi review của bà nào cũng nổi nổi ấy mua màu 21 ấy về nó xám ngoét, tưởng trát bùn lên mặt ấy chứ k dùng nổi" (146 tim)
- "Tui bị ám ảnh maybelline nắp đen quá, xuống tông nhanh như bệnh gan... nhưng tui tìm được chân ái nền với tui rồi nền Mistine á" (14 tim)
- Hàng loạt: "pass 110 111 new 100k", "ai trade 110 hoặc 111 sáng 115 không ạ, vừa unbox mà nó lệch tone", "115 trade 110 với ạ, test đúng 1 lần ạ"
**Confidence: High** — xuất hiện độc lập ở 4/15 video khác nhau (janehere_official, gigigithebabe, thaotrinh116133, nguyenttnguyen), có hành vi mua/bán thật kèm theo lời than, không phải chỉ cảm xúc.
**Ý nghĩa:** Đây là khoảng trống CHƯA được 5 ebook lead magnet đã làm hôm nay che phủ (xem mục "Đối chiếu" bên dưới) — cơ hội ebook/checklist thứ 6 riêng về chọn tone kem nền.

### Theme 2: Makeup bị mốc/lem/bể nền dù đã làm đủ bước dưỡng da
**Summary:** Cross-validate với Theme "Da Không Hoàn Hảo" đã làm — nhưng ở đây khách nhấn mạnh sự **bất lực** dù đã cố gắng đúng quy trình.
**Bằng chứng:**
- "Không ai như t, dùng con bb cream missha này vẫn bị mốc nền, sau 6 tiếng sần sùi da chết lộ hết lên trong khi trước đó t đắp mặt nạ, serum, kem dưỡng ẩm, kem lót đầy đủ 😭" (5 tim, nhưng chi tiết/cụ thể cao)
- "mk đánh nền xong khô nó toàn bị bể nền"
- "khoé mũi của e hay bị tách ra mốc nhìn ghê lắm. E dùng pp baking, đầu mũi thì lì mà khoé mũi nó vẫn đổ dầu"
- Dưới video janehere_official (4967 tim cho comment gốc "dạy có tâm gấp 10 lần t bỏ tiền đi học"): 934 tim cho câu hỏi "Nền này bị mốc phải k ạ", 2334 tim cho "C ơi.. nền này ổn k ạ?" — khách chủ động post ảnh nền của mình lên xin nhận xét, cho thấy nỗi lo bị mốc/sai rất phổ biến và cần được xác nhận từ người khác.
**Confidence: High.**
**Ý nghĩa:** Trùng khớp Theme 1 của [[nang-luc/out-2026-07-17-insight-binh-luan-khach-hang-doi-thu]] ("video dễ, làm theo thì hỏng") — 2 nguồn độc lập (Facebook + TikTok) cùng xác nhận đây là nỗi đau lớn nhất thị trường.

### Theme 3: Tự học không tiến bộ / học online sơ sài không sửa được lỗi tận tay
**Summary:** Cả khách LẪN một giáo viên makeup khác (không phải Thuý) đều xác nhận: dạy online không đủ, phải kèm trực tiếp mới sửa được lỗi.
**Bằng chứng:**
- "Huhu e học makeup cá nhân ở tphcm, học như k học, k sửa hời hợt về coi như lúc e chưa học luôn àm mua một mớ mỹ phẩm hại não muốn bỏ luôn" (bình luận dưới video hoa_daisy97)
- Chính chủ tài khoản hoa_daisy97 (giáo viên makeup khác) trả lời công khai: "phải kèm trực tiếp mới thấy được lỗi sai của mình và sửa tận tay được ạ. Mình nhìn qua cam đt đã khác với mình nhìn trực tiếp rồi... Khó để áp dụng trực tiếp nên da mình được ạ" — **một đối thủ tự thừa nhận điểm yếu của mô hình dạy online**, xác nhận đúng định vị 1-1 trực tiếp của AMI.
- "e ko thời gian vì có con e muốn cj day online cho e đc ko" — mâu thuẫn rõ: muốn học 1-1 nhưng bị cản bởi thời gian (con nhỏ) → cần giải pháp linh hoạt giờ giấc, không phải bỏ hẳn hình thức trực tiếp.
**Confidence: High** (đối thủ tự xác nhận + nhiều khách than cùng vấn đề).

### Theme 4: Buying-intent trực tiếp — hỏi giá/số buổi/địa điểm/hình thức học ngay dưới video dạy makeup cá nhân
**Summary:** Dưới video của make_up_min (dạy makeup cá nhân), gần như TOÀN BỘ bình luận là câu hỏi mua hàng trực tiếp, không phải góp ý kỹ thuật.
**Bằng chứng:** "học 3 buổi bao nhiêu", "học ở đâu ạ", "có đến nhà trang điểm k b?", "e ko thời gian vì có con e muốn cj day online cho e đc ko", "giá bán nhiêu vậy ạ"
**Confidence: High** — 11/25 bình luận trong 1 video đều là câu hỏi mua hàng, mật độ cực cao.
**Ý nghĩa:** Trùng Theme 4 của báo cáo Facebook (địa điểm là rào cản #1) — xác nhận thêm 1 lần nữa: khách ĐANG SẴN SÀNG MUA nhưng thiếu thông tin giá/hình thức rõ ràng ngay tại điểm chạm. AMI đã có địa chỉ thật 351 Lê Hồng Phong — cần ghim rõ giá + hình thức (online/offline) ngay trong mọi video/caption tương tự.

### Theme 5: Không biết sản phẩm nào hợp da mình (da dầu/mụn/thâm sẹo)
**Bằng chứng:** "da em thâm nhiều đánh nền đổ dầu đổ mồ hôi kh trôi, nhưng mà phủ phấn pfdr vào nó lộ khuyết điểm", "da dầu có cần xài serum cấp ẩm hk ạ", "mặt có tàn nhang thì sao... rcm tui kem nền cho da hỗn hợp"
**Confidence: Medium** — rải rác nhiều video, không tập trung 1 nguồn nhưng lặp lại đều đặn.
**Ý nghĩa:** Đã được che phủ một phần bởi ebook "Da Không Hoàn Hảo Vẫn Makeup Đẹp Tự Nhiên" đã làm — dữ liệu TikTok này có thể dùng làm quote thật bổ sung cho ebook đó.

## Đối chiếu với 5 ebook lead magnet đã có (hôm nay 2026-07-17)

| Ebook đã làm | Theme TikTok trùng khớp | Còn khoảng trống? |
|---|---|---|
| [[nang-luc/out-2026-07-17-ebook-da-khong-hoan-hao]] | Theme 2, 5 (mốc/lem, da khuyết điểm) | Đã che phủ tốt |
| [[nang-luc/out-2026-07-17-ebook-bo-my-pham-toi-gian]] | Một phần Theme 5 (quá tải lựa chọn) | Đã che phủ — nhưng KHÔNG nói tới việc chọn đúng TONE màu |
| [[nang-luc/out-2026-07-17-ebook-cam-nang-chon-noi-hoc]] | Theme 3, 4 (học online không sửa được, chọn nơi học) | Đã che phủ tốt |
| [[nang-luc/out-2026-07-17-ebook-tim-dung-kieu-makeup]] | Không trùng trực tiếp | — |
| [[nang-luc/out-2026-07-17-ebook-15-phut-moi-sang]] | Không trùng trực tiếp | — |
| **Chưa có ebook nào** | **Theme 1 — chọn sai tone/màu kem nền** | **KHOẢNG TRỐNG THẬT** — theme mạnh nhất dữ liệu này, có bằng chứng hành vi (mua/bán lại), chưa được ebook nào nhắm tới |

**Đề xuất cụ thể:** Ebook/checklist thứ 6 — *"Cách Chọn Đúng Tone Kem Nền Ngay Lần Đầu — Không Cần Mua Thử-Sai"* (hoặc dạng quiz tự chẩn đoán undertone). Đây là góc CHƯA khai thác, có nhu cầu rõ ràng nhất trong dữ liệu, và dễ làm viral vì đánh đúng nỗi đau tốn tiền cụ thể (nhiều người sẵn sàng chia sẻ vì đã từng mất tiền oan).

## Nguồn dữ liệu

- 105 + 85 video thô (2 lượt cào, trước và sau khi khoá vùng VN) + 375 bình luận từ 15 video liên quan nhất — đã ghi 8 dòng insight tổng hợp vào Lark Base "CRM Thúy Thúy" → bảng **"Ngân Hàng Insight - Nỗi Đau Khách Hàng"** (`tblG095uASx2PDSJ`), cột Nguồn = "Cào MXH (FB+TikTok)", Nhóm khách hàng = "Makeup Cá Nhân".
- Dữ liệu thô đầy đủ (JSON) hiện chỉ lưu tạm ở scratchpad phiên làm việc — chưa có bảng Base riêng cho data thô TikTok dạng video/comment (khác bảng "Bình luận Khách Hàng - Đối Thủ" vốn dành cho Facebook đối thủ cụ thể). Nếu cần tra cứu lại nguyên văn 375 bình luận, nên cào lại hoặc yêu cầu tạo bảng lưu trữ riêng.

## Liên quan

[[nang-luc/out-2026-07-17-insight-binh-luan-khach-hang-doi-thu]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/kb-forever-green-insight]], [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]], [[nang-luc/out-2026-07-17-ebook-da-khong-hoan-hao]], [[nang-luc/out-2026-07-17-ebook-bo-my-pham-toi-gian]], [[nang-luc/out-2026-07-17-ebook-cam-nang-chon-noi-hoc]]
