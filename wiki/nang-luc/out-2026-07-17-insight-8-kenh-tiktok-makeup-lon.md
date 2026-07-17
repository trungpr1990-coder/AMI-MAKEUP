---
title: Insight từ bình luận 8 kênh TikTok makeup lớn (690 bình luận thật)
type: analysis
khoang: nang-luc
tags: [nghien-cuu-khach, voc, insight, makeup-ca-nhan, tiktok, lead-magnet, doi-thu]
created: 2026-07-17
updated: 2026-07-17
sources: [apify-tiktok-scraper, apify-tiktok-comments-scraper]
---

## Bối cảnh & phương pháp

Thuý gửi 8 link kênh TikTok cụ thể để cào (khác 2 lần trước: [[nang-luc/out-2026-07-17-insight-binh-luan-khach-hang-doi-thu]] cào Facebook theo đối thủ, [[nang-luc/out-2026-07-17-insight-tiktok-noi-dau-tu-hoc-makeup]] cào TikTok theo từ khoá/hashtag — lần này cào theo **kênh chỉ định** để xem đúng khán giả của các kênh làm đẹp/makeup lớn):

1. [@gigi.glowup](https://www.tiktok.com/@gigi.glowup) (221K follower)
2. [@rosermae](https://www.tiktok.com/@rosermae) (1,3M follower) — dạy "Kĩ năng makeup cơ bản", dùng tên thật "Thảo Đoàn"
3. [@ciaramakeup2003](https://www.tiktok.com/@ciaramakeup2003) (1,3M follower) — tên thật "Hà Giang", dạy đánh nền/mắt/khối chi tiết
4. [@hue.uii](https://www.tiktok.com/@hue.uii) (499,9K follower) — dạy makeup, gọi học viên "mấy bà"
5. [@jolly011009](https://www.tiktok.com/@jolly011009) (759,5K follower) — tips làm đẹp/chụp ảnh
6. [@janehere_official](https://www.tiktok.com/@janehere_official) (1,4M follower) — bán **"Khoá makeup cá nhân"** trả phí, cùng mô hình kinh doanh với AMI
7. [@liu.bui510](https://www.tiktok.com/@liu.bui510) (417,2K follower) — makeup nhanh hàng ngày
8. [@hoangminhngoc21](https://www.tiktok.com/@hoangminhngoc21) (1,1M follower) — beauty/lifestyle/outfit, **không chuyên về kỹ thuật makeup**

**Quy trình:**
1. Cào 12 video "popular" nhất mỗi kênh (96 video, actor `clockworks/tiktok-scraper`) → lọc còn 64 video có nội dung liên quan makeup theo từ khoá.
2. Chọn 23 video (tối đa 4/kênh, đảm bảo đủ đại diện cả 8 kênh) có lượt bình luận cao nhất trong nhóm liên quan → cào 690 bình luận (actor `clockworks/tiktok-comments-scraper`, giới hạn 30 bình luận/video, chỉ lấy bình luận gốc không lấy reply).
3. Đọc toàn bộ 690 bình luận, phân cụm theo chủ đề, xếp theo tần suất × cường độ (lượt tim bình luận).

**Chi phí Apify:** ~$1.22 (video $0.36 + bình luận $0.86) — đã dùng gần hết ngân sách FREE $5/tháng còn lại (từ $3,44 lên $4,66/$5, còn dư ~$0,34 tới hết chu kỳ 2026-07-24).

**Giới hạn:** kênh @hoangminhngoc21 và một phần @hue.uii/@jolly011009/@gigi.glowup không phải nội dung kỹ thuật makeup thuần (lifestyle/outfit/entertainment) nên video "popular" nhất của họ ít liên quan trực tiếp — vẫn giữ đại diện tối thiểu 1-2 video/kênh để không bỏ sót, nhưng dữ liệu các kênh này mỏng hơn nhóm dạy kỹ thuật (rosermae, ciaramakeup2003, janehere_official, hue.uii).

## Phát hiện quan trọng nhất: 2 kênh @rosermae và @janehere_official là ĐỐI THỦ TRỰC TIẾP

@janehere_official quảng cáo thẳng **"Khoá makeup cá nhân 2025/2026"** trả phí — đúng sản phẩm AMI đang bán. Bình luận cho thấy học viên vừa học khoá free trên TikTok vừa so sánh với lớp đã trả tiền: "Trời ơi lần trước bỏ tiền ra học makeup online mà còn ko đc chỉ tận tình bằng coi vid của bả luôn đó" và "năm ngoái mình đã đi học makeup cá nhân rồi. Học về nhưng vẫn không biết làm gì cả, makeup vẫn lỗi sai tùm lum". @rosermae (tên thật "Thảo Đoàn") cũng dạy theo giáo trình "Kĩ năng makeup cơ bản bài 1, 2, 3..." dạng series — mô hình nội dung rất gần với cách AMI có thể làm content dạy online dẫn về khoá offline.

## Top Themes (xếp theo tần suất × cường độ tim)

### Theme 1: Mốc/trượt/nứt nền — xác nhận LẦN THỨ 3, chủ đề dày đặc nhất toàn bộ dữ liệu
**Bằng chứng:** xuất hiện độc lập ở **11/23 video** thuộc **6/8 kênh khác nhau** (rosermae, janehere_official, hue.uii, ciaramakeup2003, jolly011009, liu.bui510):
- "Nền này bị mốc phải k ạ 🥺" (868 tim, dưới video có 4839 tim cho "dạy có tâm gấp 10 lần t bỏ tiền đi học")
- "t cũng bỏ qua kem nền tại đánh ko sần thì mốc k mốc thì trượt k trượt thì bờ bờ nứt nứt🤣" (3350 tim)
- "cổ đã cứu rỗi cái cushion clio của tui :)))) hồi đó học xong mới biết đánh đánh cushion khô cong luôn" (7370 tim)
- "sao t đánh cs nó cứ khô khô, mốc mốc, bong tróc loang lổ là sao nhở" — nhiều biến thể lặp lại y hệt cảm giác này
- Một comment tự giải thích cơ chế: "loại nào k dễ mốc thì nó sẽ k thể giữ nền mứt khi đổ dầu nhiều, nó dễ bị nhũn với mốc, còn nếu mà loại nào kiềm dầu cao đánh dễ mốc lắm" (468 tim) — khách hàng ĐÃ hiểu có sự đánh đổi kiềm dầu ↔ cấp ẩm nhưng không biết chọn đúng cho da mình
**Confidence: Very High** — đây là lần thứ 3 độc lập xác nhận (sau báo cáo Facebook 4 đối thủ và TikTok search 15 video), giờ có thêm bằng chứng từ 8 kênh KOL lớn hoàn toàn khác nguồn.

### Theme 2 (MỚI — chưa từng thấy ở 2 lần cào trước): Tự ti vì makeup tự học ra y hệt 1 kiểu "khối kiểu Hàn/Trung/Thái nửa mặt"
**Bằng chứng:** video @rosermae "Bà nào thấy makeup i xì thế này thì tự giác comment điểm danh" đạt **31.025 tim** cho 1 bình luận — mức tim cao nhất toàn bộ dữ liệu cào được từ trước đến nay (kể cả 2 lần trước):
- ":))))) đích thị là makeup look duy nhất của tôi đây mà 🤡 xấu hổ z tr" (31.025 tim)
- "em thấy mắc cỡ luôn á. mới make up xong nhìn ổn lắm luôn, nhưng sau vài giờ thì ối giồi ôi tẩy trang nhanh" (7.927 tim)
- "học makeup cá nhân họ dạy cho 1 vài tone kiểu hàn trung thái đồ. mà dạy kiểu họ make nửa mặt rồi mình làm theo. xong về nhà cũng lại make kiểu này." (367 tim) — chỉ thẳng NGUYÊN NHÂN: lớp học/video dạy theo 1 công thức chung, ai cũng ra kết quả giống nhau
- "hồi tao đi chụp kỉ yếu bà make y chang cho t", "Sao tui cx makeup cầu kì cả tiếng đồng hồ mà ngta kêu t giống chỉ đánh mỗi son z"
**Confidence: High** — engagement đột biến (31k tim cho 1 comment là bất thường so với phần còn lại dữ liệu, chứng tỏ chạm đúng nỗi đau tập thể).
**Ý nghĩa:** Đây là góc **HOÀN TOÀN CHƯA khai thác** trong 6 ebook + 2 báo cáo insight đã làm hôm nay. Khác các theme trước (kỹ thuật/sản phẩm), đây là nỗi đau về **BẢN SẮC CÁ NHÂN** — đúng tinh thần "makeup cá nhân" mà AMI định vị, nhưng góc độ ngược lại: khách sợ học xong vẫn KHÔNG "cá nhân hoá" được, chỉ là copy công thức. Rất hợp để làm **ebook thứ 6 hoặc thứ 7**, góc độ khác hẳn "chọn tone kem nền" đã đề xuất trước đó.

### Theme 3: Không biết chọn nền/cushion hợp loại da — mở rộng thêm bằng chứng cho theme "chọn sai tone/sản phẩm" đã phát hiện trước
**Bằng chứng:** "Da mình khô lắm, lcl thì to... đánh cusion... lộ khuyết điểm hơn. Mà phủ phấn... hơi mốc lun", "E da dầu có tàn nhang dùng cushion thôi được k chị", "da khô dùng kem nền nào ổn ạ" — lặp lại ở hầu hết video về nền/cushion.
**Confidence: High**, cross-validate với [[nang-luc/out-2026-07-17-insight-tiktok-noi-dau-tu-hoc-makeup]] Theme 1.

### Theme 4: Chi phí bộ đồ trang điểm đầy đủ quá đắt với học sinh sinh viên
**Bằng chứng:** "tổng chi phí mua đầy đủ đồ make thì bn v ak e gần 18t rk mà k biết bắt đầu từ đầu😢" (566 tim), "thấy người ta make mà ghiền, mình nghèo quá chịu lun" (**2.561 tim** — mức tim rất cao cho 1 câu than về tài chính).
**Confidence: High.** Bổ sung bằng chứng cảm xúc mạnh cho ebook "Bộ Mỹ Phẩm Tối Giản" đã làm.

### Theme 5: Học rồi (kể cả lớp TRẢ TIỀN) vẫn không tự tin làm được — cross-validate lần 3
**Bằng chứng:** "năm ngoái mình đã đi học makeup cá nhân rồi. Học về nhưng vẫn không biết làm gì cả, makeup vẫn lỗi sai tùm lum" (70 tim, dưới video janehere_official); nhiều comment khen video TikTok free dạy kỹ hơn lớp đã trả tiền.
**Confidence: High.** Điểm mới: KHÔNG chỉ học online mới dở — ngay cả lớp 1-1 trả phí cũng có thể dạy hời hợt. AMI cần làm rõ **CÁCH DẠY sửa lỗi trực tiếp cụ thể** trong content, không chỉ nói "học 1-1" chung chung.

### Theme 6: Bình luận chủ yếu hỏi tên thương hiệu/sản phẩm cụ thể, không hỏi kỹ thuật
**Bằng chứng:** video @liu.bui510 "Makeup daily không nền" — 25/29 bình luận đầu là xin info sản phẩm (son, lens, chì kẻ mắt, cọ...), gần như không có câu hỏi kỹ thuật nào.
**Confidence: High**, cross-validate Theme 3 của [[nang-luc/out-2026-07-17-insight-tiktok-noi-dau-tu-hoc-makeup]].

### Theme 7: Bối rối thứ tự các bước skincare → makeup
**Bằng chứng:** "kem lót rồi tới ckđ rồi mới tới nền ạa?", "đánh má hồng trước hay phấn phủ trước??", "makeup mắt trước rồi tới cushion hay đánh nền trước rồi mới tới mắt".
**Confidence: Medium** — rải rác nhưng lặp lại đều, dễ giải quyết nhất (chỉ cần checklist đúng thứ tự).

## Phát hiện phụ: @gigi.glowup viral nhờ CÁ TÍNH, không phải kỹ thuật makeup

2/3 video được chọn của @gigi.glowup có bình luận đạt 15.000-41.000 tim nhưng **toàn bộ nội dung bình luận là khen cách ăn nói/tính cách hài hước** ("nói câu nào hoảng câu đó", "chấn động", "khủng bố tiếng việt") — không một bình luận nào hỏi kỹ thuật makeup. Đây là kênh viral vì **cá tính/giải trí**, khác hẳn nhóm dạy kỹ thuật thuần (rosermae, ciaramakeup2003, janehere_official). Gợi ý: AMI có thể thử pha thêm yếu tố cá tính/hài hước vào content dạy để tăng khả năng viral, không chỉ thuần kỹ thuật.

## Đối chiếu với 6 ebook/insight đã có (hôm nay 2026-07-17)

| Nguồn đã làm | Theme trùng khớp | Còn khoảng trống? |
|---|---|---|
| [[nang-luc/out-2026-07-17-insight-binh-luan-khach-hang-doi-thu]] (Facebook) | Theme 1, 5 | Cross-validate lần 3 |
| [[nang-luc/out-2026-07-17-insight-tiktok-noi-dau-tu-hoc-makeup]] (TikTok search) | Theme 3, 6 | Cross-validate lần 2, đề xuất ebook "chọn tone kem nền" vẫn còn hiệu lực |
| [[nang-luc/out-2026-07-17-ebook-bo-my-pham-toi-gian]] | Theme 4 | Đã che phủ, dữ liệu này bổ sung bằng chứng cảm xúc (2561 tim) |
| **Chưa có ebook/insight nào** | **Theme 2 — tự ti vì makeup học ra y hệt nhau, mất bản sắc riêng** | **KHOẢNG TRỐNG THẬT MỚI** — bằng chứng engagement mạnh nhất trong tất cả dữ liệu đã cào (31k tim), đúng tinh thần "makeup CÁ NHÂN" của AMI |

**Đề xuất cụ thể:** Ebook/góc content mới — *"Vì Sao Makeup Của Bạn Cứ Giống Người Khác — Và Cách Tìm Ra Phong Cách Của Riêng Mình"*. Khác hẳn ebook "Tìm Đúng Kiểu Makeup Hợp Khuôn Mặt" đã làm (dựa trên dáng mặt/dáng mắt vật lý) — góc này nói về việc THOÁT khỏi công thức đại trà (kiểu Hàn/Trung/Thái copy-paste) để tìm ra gu cá nhân, đánh đúng cảm xúc xấu hổ/tự ti đã thấy rõ trong dữ liệu.

## Nguồn dữ liệu

96 video thô (12/kênh × 8 kênh) + 690 bình luận từ 23 video liên quan nhất — 7 dòng insight tổng hợp đã ghi vào Lark Base "CRM Thúy Thúy" → bảng **"Ngân Hàng Insight - Nỗi Đau Khách Hàng"** (`tblG095uASx2PDSJ`), cột Nguồn = "Cào MXH (FB+TikTok)", Nhóm khách hàng = "Makeup Cá Nhân", xếp theo Thứ tự ưu tiên 1-7.
