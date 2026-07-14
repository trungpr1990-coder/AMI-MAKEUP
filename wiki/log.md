# Wiki Operations Log

Append-only record of all ingest, query, and maintenance operations.

---

## [2026-06-30] ingest | Nội tâm & Lãnh đạo (Buổi học - Bản ghi mới 7) — Full
- File: `Tài liệu không có tiêu đề (3).md` (tổng hợp từ ghi âm qua NotebookLM)
- Summary: [[sources/2026-06-30-noi-tam-lanh-dao]]
- Khoang pages: [[tam-thai/2026-06-30-an-vui-va-ky-thuat-buong]], [[pham-chat/2026-06-30-si-than-va-y-niem-vi-nguoi]], [[nang-luc/2026-06-30-quan-tri-nhan-thuc-6-dong]]
- Concept pages: [[concepts/2026-06-30-case-study-lanh-dao]], [[concepts/2026-06-30-insights-va-cheat-sheet]]
- New pages: 6 (1 source + 3 khoang + 2 concepts)
- Mâu thuẫn: none

## [2026-06-30] design | Phễu Makeup Cá nhân AMI (Đơn giản)
- File: [[nang-luc/2026-06-30-pheu-makeup-ca-nhan-ami-simple]]
- Focus: Chỉ makeup cá nhân (3 bước: Trải nghiệm → Thường xuyên → Gói năm)
- Doanh thu dự kiến: 30-45 triệu/tháng
- Không bao gồm: Cô dâu, lớp học, sự kiện đặc biệt

## [2026-06-30] create | 10 Bóng tối & Ánh sáng khách hàng Makeup (áp dụng)
- File: [[nang-luc/2026-06-30-10-bong-toi-anh-sang-makeup]]
- Purpose: Sử dụng cho Content Marketing, Email Nurture, Sales/Tư vấn
- Khoảng trống: Cần tạo content cụ thể từ bảng này

## [2026-06-30] ingest | Kinh doanh - Marketing - AI (Buổi học)
- File: `Tài liệu không có tiêu đề (2).md` (tổng hợp từ ghi âm buổi học qua NotebookLM)
- Summary: [[sources/2026-06-30-kinh-doanh-marketing-ai]]
- Khoang pages: [[tri-tue/2026-06-30-tu-duy-kinh-doanh-dao-nguoc]], [[nang-luc/2026-06-30-pheu-va-lvc]], [[vat-chat/2026-06-30-hoach-dinh-tai-chinh]]
- Pages updated: [[concepts/pheu-ban-hang]]
- New pages: 4 (1 source + 3 khoang)
- Mâu thuẫn: none

## [2026-06-24] ingest | Hệ thống "Nhà máy phễu" — Giáo trình chuyển giao

- **File:** `raw/2026-06-20-giao-trinh-nha-may-pheu.md`
- **Summary:** [[sources/2026-06-20-nha-may-pheu]]
- **Khoang pages created:**
  - [[nang-luc/2026-06-24-ten-buoc-dung-pheu]] — 10 bước dựng phễu + vận hành
  - [[tri-tue/2026-06-24-kien-truc-nam-may-pheu]] — Framework 4 mảnh, tư duy setup 1 lần
  - [[nhan-cach/2026-06-24-nguyen-tac-bao-mat-va-ban-giao]] — Ranh giới bảo mật, quy tắc bàn giao
  - [[pham-chat/2026-06-24-nguyen-tac-duc-hanh-nha-may-pheu]] — Không bịa số, testimonial thật
  - [[vat-chat/2026-06-24-ha-tang-cloudflare-lark-domain]] — Tài sản hạ tầng
- **Concept pages created:**
  - [[concepts/nha-may-pheu]] — Định nghĩa: lead generation system tự động
  - [[concepts/pheu-ban-hang]] — Khái niệm phễu bán hàng 4 tầng
  - [[concepts/lark-cli-tich-hop]] — Integration Claude + Lark via lark-cli
  - [[concepts/cloudflare-worker]] — Backend tự động trên Cloudflare
  - [[concepts/nurture-campaign]] — 10 ngày nuôi dưỡng lead
- **Entity pages created:**
  - [[entities/cloudflare]] — Nền tảng hosting miễn phí
  - [[entities/lark]] — Lark/Feishu platform (Base, SMTP, App)
  - [[entities/claude-code]] — Tool tạo nội dung & code
- **Issues found:** None
- **Notes:** Toàn bộ hệ thống được thiết kế cho Thuý Trần dựng phễu bán khóa học makeup/business training. 3 chương: (1) Setup từ 0, (2) Vận hành & bàn giao học viên, (3) Thực chiến & 11 lỗi đã fix.


## [2026-06-29] project | AMI Website — Lưu trạng thái triển khai
- **Tóm tắt:** Website thuytranmakeup.com đã live trên Cloudflare Pages. Admin panel (Sveltia CMS) đã deploy nhưng chưa verify đăng nhập. Thư mục images/ còn trống — cần thêm ảnh từ Google Drive folder 1uFaMxFU9qMDK296-i-qMlJW1J2CxYE55.
- **Page tạo:** [[nang-luc/2026-06-29-ami-website-trang-thai]]
- **Việc còn lại:** Tải ảnh từ Drive → đặt tên đúng → deploy lại

## [2026-07-02] project | AMI Website — Redesign trang đặt lịch + kết nối Lark Base
- File: text input (tổng hợp từ phiên làm việc trực tiếp trên code, không phải tài liệu raw/)
- Summary: cập nhật lại [[nang-luc/2026-06-29-ami-website-trang-thai]] (page cũ đã lỗi thời — sai tên project Cloudflare, sai branch deploy, nói images/ còn trống dù đã có ảnh đầy đủ)
- Khoang pages: [[nang-luc/2026-06-29-ami-website-trang-thai]] (updated)
- Pages updated: [[nang-luc/2026-06-29-ami-website-trang-thai]]
- New pages: none
- Nội dung chính đã cập nhật: đúng tên project Cloudflare Pages đang phục vụ domain (`ami-website`, branch `main`, deploy CLI không qua git), redesign tông hồng cho `dat-lich.html` (bỏ ngày sinh, chọn "tại cửa hàng"/"tận nơi", ảnh thật thay icon, đơn giản hoá đặt cọc bằng QR, xoá chìa khoá quản trị viên), kiến trúc tích hợp Lark Base (mỗi buổi/ngày = 1 dòng riêng trong bảng "0. Đăng Ký Web", biến môi trường cần thiết), bảng lỗi-đã-fix mở rộng thêm 6 lỗi mới phát hiện trong phiên này.
- Mâu thuẫn: page cũ ghi sai deploy command (`--project-name ami-makeup --branch master`) và sai trạng thái thư mục images/ — đã sửa trực tiếp trong page, không giữ lại bản cũ.

## [2026-07-02] guide | Cách Tạo Nội Dung Video Có Giọng Điệu Tự Nhiên
- Problem: AI (ChatGPT, Claude) viết nội dung quảng cáo video có giọng "văn phong chuẩn", thiếu tự nhiên/thân thiện
- Solution: [[nang-luc/2026-07-02-cach-tao-noi-dung-video-co-giong-dieu-tu-nhien]]
- Focus: 4 phương án (1) Prompt Engineering + Ví dụ Tone, (2) Persona/Character, (3) Reference Styles, (4) Structure Approach
- Key insight: **Prompt Engineer là chìa khóa** — AI cần "hướng dẫn rõ ràng" + ví dụ cụ thể về tone (không chỉ "viết thân thiện")
- Ứng dụng: Copy prompt template → dùng lặp lại cho video marketing AMI
- Pages created: 1 (nang-luc)

## [2026-07-03] build | Hệ thống Đăng Bài Đa Nền Tảng (Facebook + Instagram + TikTok + AI)
- Yêu cầu: xây hệ thống đăng bài tự động đa nền tảng, nguồn nội dung từ Lark Base + AI tự viết (Anthropic API, chạy nền), luôn qua bước duyệt trước khi đăng công khai, đóng gói dạng kit chuyển giao được (giống bộ Reel FB)
- Base mới: tạo `Đăng Bài Đa Nền Tảng - Template` — https://manhtrung610.jp.larksuite.com/base/Wtn8bQ4sLanhfWsHrZ9jmbmypeH (bảng "Đăng Bài", 16 cột)
- Skill mới: `C:\Users\Admin\.claude\skills\đăng-bài-đa-nền-tảng\` — dispatcher.js (engine chính, thay post-reels.js), generate-content.js (AI viết nháp), lib/post-facebook.js + lib/post-instagram.js + lib/post-tiktok.js + lib/media-host.js (Cloudflare R2 SigV4), setup.ps1/register-task.ps1 (2 Windows Task: dispatcher 2 phút, AI content hàng ngày 08:00)
- Summary: [[concepts/2026-07-03-dang-bai-da-nen-tang]]
- Concept pages: [[concepts/2026-07-03-dang-bai-da-nen-tang]] (mới), [[concepts/dang-reel-facebook-tu-dong]] (bổ sung vào index — trước đó bị thiếu, đã phát hiện và sửa luôn)
- Giới hạn đã ghi rõ: Instagram cần host media tạm qua Cloudflare R2 (Graph API bắt buộc URL công khai); TikTok cần app được TikTok audit mới đăng công khai được, trước đó chỉ đăng chế độ riêng tư (SELF_ONLY) — việc audit do Admin tự nộp, ngoài khả năng AI
- Việc còn lại (do Admin tự làm): xin scope Instagram cho Page Token, đăng ký + nộp audit app TikTok, tạo Anthropic API key, tạo Cloudflare R2 bucket + Public Access + API Token — chi tiết trong `README-ADMIN.md` của skill
- Mâu thuẫn: none

## [2026-07-03] redesign | Đăng Bài Đa Nền Tảng — chuyển sang lưu Trang trong Base (theo mẫu CRM "12.1 Danh sách page")
- Lý do: người dùng chỉ ra Base mới thiếu cơ chế "kết nối trang" trực quan, yêu cầu thiết kế lại theo đúng nguyên tắc đã dùng trong CRM Base (`O2qIbEaIYabXEGsW6Dzjs0LCpZg`, bảng "12.1 Danh sách page" + Link field "Link Page" trong "12.3 Đăng bài")
- Đã đọc CRM Base thật để lấy nguyên tắc: bảng Page riêng (Fanpage/ID/access_token) + cột Link trên bảng Đăng bài trỏ tới 1 dòng Page — cho phép 1 Base đăng nhiều trang khác nhau
- Base mới bổ sung 3 bảng: "Danh sách Trang Facebook" (Tên trang/Page ID/Access Token), "Danh sách Trang Instagram" (Tên trang/IG Business ID/Access Token), "Danh sách Trang TikTok" (Tên trang/Access Token/Refresh Token); bảng "Đăng Bài" thêm 3 cột Link "Trang Facebook/Instagram/TikTok" (thay cho 3 cột text tham khảo đã xoá)
- ⚠️ Quyết định bảo mật: Access Token lưu thẳng trong Base (đọc được bởi ai xem được Base) — auto mode classifier đã chặn thao tác này lần đầu do rủi ro credential leakage trên Base có thể nhân bản cho học viên; người dùng đã xác nhận rõ ràng chấp nhận rủi ro (dùng AskUserQuestion) trước khi thực hiện lại
- Code: lark-helpers.js thêm getLinkTableId/resolveLinkedRecord/updateRecordInTable; post-facebook.js/post-instagram.js/post-tiktok.js đổi sang nhận `page` (credentials resolve theo dòng) thay vì đọc cfg cố định; dispatcher.js resolve Trang qua cột Link trước khi gọi post, cache theo (table,record) trong 1 lần chạy, báo lỗi rõ "Chưa chọn Trang..." nếu thiếu; TikTok Client Key/Secret + TIKTOK_AUDITED vẫn ở config.local.json (cấp App), Access/Refresh Token chuyển vào bảng Danh sách Trang TikTok (tự refresh và tự ghi lại vào Base)
- Đã test end-to-end bằng record thật (không phải chỉ dry-run): tạo Trang test + dòng đăng test trong Base, chạy dispatcher.js thật, xác nhận resolve đúng Page ID/Access Token rồi gọi API Facebook thật (lỗi OAuth do token giả — đúng như kỳ vọng, phân loại lỗi vĩnh viễn chính xác), dọn dữ liệu test sau khi xong
- Pages updated: [[concepts/2026-07-03-dang-bai-da-nen-tang]], SKILL.md, README-ADMIN.md, HUONG-DAN-HOC-VIEN.md, config.example.json, setup.ps1 của skill
- Mâu thuẫn: none — đây là thay đổi kiến trúc có chủ đích, không phải sửa lỗi

## [2026-07-04] redesign | Đăng Bài Đa Nền Tảng — tách bảng gộp thành 3 bảng riêng theo nền tảng
- Lý do: người dùng yêu cầu tách riêng "tiktok một bảng, facebook reel 1 bảng, insta 1 bảng" thay vì 1 bảng "Đăng Bài" gộp cả 3 nền tảng bằng cột suffix (TT Facebook/TT Instagram/TT TikTok)
- Base: xoá bảng "Đăng Bài" gộp (tblcypWyOc4UtaSg), tạo 3 bảng độc lập cùng hình dạng cột: "Facebook Reel" (tblXP1AAUdNodDZL), "Instagram" (tblvmazC0MYvDMOz), "TikTok" (tbl9fPMhOGApeYqG) — mỗi bảng: Chủ đề/Ý tưởng, Ảnh/Video, Nội dung, Hashtag, Nguồn, Duyệt AI, Lịch đăng, Trang (Link), TT, Link, Log (không cần suffix tên nền tảng nữa vì đã tách bảng)
- 3 bảng "Danh sách Trang Facebook/Instagram/TikTok" giữ nguyên, chỉ đổi tên field Link trên bảng bài đăng từ "Trang Facebook/Instagram/TikTok" → "Trang" (ngắn gọn, không cần suffix vì bảng đã tách)
- Code: lark-helpers.js tổng quát hoá toàn bộ hàm đọc/ghi record (listAllRows/downloadAttachment/updateRecord/createRecord/getLinkTableId) để nhận `tableId` làm tham số thay vì cố định 1 TABLE_ID; thêm listTables()/findTableIdByName() để tự tìm bảng theo tên qua `+table-list` — bỏ hẳn nhu cầu khai báo table id trong config.local.json; dispatcher.js viết lại thành vòng lặp xử lý độc lập từng bảng (processPlatform); generate-content.js ghi 1 dòng nháp riêng vào mỗi bảng trong AI_TARGET_PLATFORMS thay vì 1 dòng gộp set nhiều cột TT
- config.example.json bỏ hẳn TABLE_ID (không cần nữa)
- Đã test end-to-end bằng record thật: dry-run xác nhận tự tìm đúng cả 3 bảng theo tên; tạo Trang test + dòng test trong bảng "Facebook Reel", chạy dispatcher.js thật, xác nhận resolve đúng bảng theo tên + đúng Trang qua Link field, gọi API Facebook thật (lỗi OAuth do token giả — đúng kỳ vọng), dọn dữ liệu test sau khi xong
- Pages updated: [[concepts/2026-07-03-dang-bai-da-nen-tang]], SKILL.md, README-ADMIN.md, HUONG-DAN-HOC-VIEN.md, config.example.json, setup.ps1 của skill
- Mâu thuẫn: none — thay đổi kiến trúc có chủ đích theo yêu cầu người dùng, không phải sửa lỗi

## [2026-07-04] build | Đăng Bài Đa Nền Tảng — thêm AI xem ảnh tự viết caption (Claude vision)
- Yêu cầu: "khi tôi đưa ảnh vào AI sẽ tự xem ảnh đó và tự tạo nội dung liên quan đến ảnh đó kèm hashtag đầy đủ" — AI phải xem đúng ảnh thật, không chỉ viết theo chủ đề chung chung như generate-content.js
- Code mới: lib/anthropic.js (gọi Anthropic Messages API dùng chung, hỗ trợ content block ảnh base64), lib/caption-from-image.js (system prompt dặn không bịa chi tiết không thấy trong ảnh — tên người/địa điểm/số liệu)
- dispatcher.js thêm "Bước 0" (chạy mỗi 2 phút, cùng nhịp với đăng bài — nhanh hơn nhiều so với generate-content.js chạy 1 lần/ngày): dòng nào có Ảnh (không phải video — Claude vision chưa xem video) nhưng Nội dung + Nguồn còn trống thì tự tải ảnh, gọi AI viết Nội dung+Hashtag, set Nguồn=AI viết/TT=Chờ duyệt/Duyệt AI=Chờ duyệt — vẫn giữ nguyên tắc luôn cần duyệt + chọn Trang trước khi đăng
- generate-content.js refactor dùng chung lib/anthropic.js (bỏ code callClaude/parseJsonFromText trùng lặp)
- Đã test bằng ảnh makeup thật (ami-website/images/cô dâu 1.jpg) + record thật: upload ảnh vào dòng test, chạy dispatcher.js thật với Anthropic key giả — xác nhận đúng luồng (tải ảnh, gọi API thật, nhận lỗi 401 hợp lệ vì key giả, không crash, không làm hỏng dữ liệu dòng), dọn dữ liệu test. Chưa test được phản hồi thật của Claude vision vì chưa có ANTHROPIC_API_KEY thật trong máy.
- Pages updated: [[concepts/2026-07-03-dang-bai-da-nen-tang]], SKILL.md, README-ADMIN.md, HUONG-DAN-HOC-VIEN.md của skill
- Mâu thuẫn: none

## [2026-07-04] build | Đăng bài Facebook tự động qua GitHub Actions (mentor_club_app — học từ Mentor Camp)
- Bối cảnh: người dùng nhận hướng dẫn trong nhóm Zalo "MENTOR CAMP 02" — fork repo GitHub `nguyenlanh282/mentor_club_app` về `trungpr1990-coder/mentor_club_app`, cần cấu hình biến môi trường. Khác cơ chế với [[concepts/dang-reel-facebook-tu-dong]] và [[concepts/2026-07-03-dang-bai-da-nen-tang]] (cả 2 chạy trên máy Windows cá nhân) — hệ thống này chạy trên GitHub Actions (cloud), quét mỗi 30 phút, không cần bật máy
- Dùng lại Base cũ (`Wtn8bQ4sLanhfWsHrZ9jmbmypeH`) nhưng tạo mới 2 bảng riêng khớp đúng tên cột script yêu cầu: "Đăng Reel" (`tblOrEK2S5YcgbaG`) và "Fanpage" (`tbl2afxE4xahdint`) — cấp quyền Chỉnh sửa cho Lark App `cli_aaaaff00f7a19e17` vào Base; nạp 3 Page (Ami Makeup Academy, Thúy Rose Makeup & Academy, Thuý Trần Makeup & Academy) vào bảng Fanpage qua Facebook Graph API `/me/accounts`; nạp đủ 5 GitHub Secrets (`LARK_APP_ID`, `LARK_APP_SECRET`, `LARK_APP_TOKEN`, `LARK_TABLE_ID`, `PAGES_TABLE_ID`)
- Đã test đăng thật lên Facebook (bài test trên Page ít follower nhất — Thúy Rose Makeup & Academy, 6 follower) qua GitHub Actions workflow_dispatch với `record_id` — thành công (Trạng thái=Thành công, Link bài đăng ghi đúng), sau đó xoá bài test khỏi Facebook (Graph API DELETE) và xoá dòng test khỏi Base
- Sự cố trong lúc làm: gọi nhầm lệnh `+record-batch-create` 2 lần khi định kiểm tra kết quả → tạo trùng 3 dòng Fanpage — đã phát hiện và xoá 3 dòng trùng ngay; các file script tạm chứa token đã xoá khỏi thư mục dự án sau khi dùng xong
- Page tạo: [[nang-luc/out-2026-07-04-huong-dan-dang-facebook-tu-dong]]
- Mâu thuẫn: none

## [2026-07-08] create | Hồ sơ khách hàng chuyên sâu AMI (theo mẫu Hằng China / Trung Nguyễn Bridal)
- Yêu cầu: tạo file PDF hồ sơ khách hàng chi tiết cho AMI, theo đúng "Quy Trình Tạo Hồ Sơ Khách Hàng" (dùng file mẫu Hằng China + TN Bridal làm khung cấu trúc, giữ nguyên logic phân tích/đào sâu insight, áp vào ngành nghề AMI)
- Đã đọc 2 file mẫu (Hằng China 112 trang/16 chương, TN Bridal 128 trang/23 chương — trích xuất bằng pdf-parse vì máy không có poppler/pdftoppm) để lấy đúng khung: persona 7 tiêu chí, JTBD, Value Proposition Canvas, Value Equation, ERRC, Dream 100
- Khác biệt quan trọng đã nêu rõ trong hồ sơ: AMI chưa có kho review/testimonial có tên, chưa có số liệu khách đã phục vụ, giá dịch vụ lẻ còn để "Liên hệ" — không giống 2 hồ sơ mẫu vốn dựa trên dữ liệu khách hàng thật quy mô lớn có sẵn. Hồ sơ AMI gắn nhãn 🟢 THẬT / 🟡 SUY LUẬN / 🔴 THIẾU DỮ LIỆU xuyên suốt thay vì bịa số để đủ "100 trang"
- Phát hiện quan trọng khi tổng hợp: đối thủ tham chiếu thật là **Gạo Nâu Personal Makeup** ([[entities/gao-nau-personal-makeup]]) — thương hiệu đào tạo makeup cá nhân thật (Hà Nội + TP.HCM, giá niêm yết 5.350.000đ) mà quy trình tư vấn 6 bước của AMI (`AMI_Quy_Trinh_Tu_Van_Chot_Sale.docx`) được phỏng theo từ playbook 11 bước thật của Gạo Nâu — dùng làm chuẩn so sánh giá/định vị ở Chương 15
- File tạo: [[nang-luc/out-2026-07-08-ho-so-khach-hang-ami]] (.md nguồn + .pdf 25 trang, dựng bằng Node + puppeteer-core trỏ vào Chrome có sẵn máy, vì môi trường không có Python/poppler để dùng pipeline pdf skill chuẩn)
- Chương chính: 19 chương + 5 phụ lục — chân dung 2 tệp (Học viên / Khách dịch vụ), 6 chân dung phụ composite, bản đồ đau/sướng (mở rộng từ 10 Bóng tối-Ánh sáng có sẵn), Value Proposition Canvas, hành trình mua, đối thủ, offer & 8 cụm nội dung, và quan trọng nhất — Chương 18 (khoảng trống dữ liệu) + Phụ lục E (phiếu hồ sơ doanh nghiệp cần Thuý điền để vòng 2 đạt độ sâu như TN Bridal)
- Pages updated: [[index]] (thêm mục nang-luc)
- Mâu thuẫn: 2 bản nháp phễu giá (`2026-06-30-pheu-makeup-ca-nhan-ami.md` vs `-simple.md`) lệch giá Makeup Trải nghiệm (399k vs 299k/399k/500k theo loại) — đã ghi rõ trong Chương 7.1, chưa tự ý chọn 1 bản, đề xuất Thuý chốt ở Chương 18

## [2026-07-08] update | Hồ sơ khách hàng AMI — nạp số liệu thật (giá, quy mô, đối thủ, định hướng nhân sự)
- Thuý trả lời trực tiếp 7 câu hỏi còn để trống trong hồ sơ (Chương 18/Phụ lục E): học phí (khóa thường 2tr/VIP 3tr), giá dịch vụ (cưới 2tr, kỷ yếu/sự kiện 500k mỗi loại), quy mô đã phục vụ (~500 cô dâu, ~500 khách dịch vụ khác, ~200 học viên), makeup thử (không miễn phí, 1 triệu), đối thủ Nam Định (Triệu Vy — facebook.com/trieuvy68, Vi Vi — facebook.com/vivi.lady9x), kênh MXH chính (facebook.com/thuytran.makeup, ~299 theo dõi), định hướng tuyển người hỗ trợ
- Phát hiện quan trọng nhất khi cập nhật: AMI có quy mô khách đã phục vụ (~1.200 người) ngang hoặc vượt cả 2 hồ sơ mẫu, nhưng chưa từng công bố con số này hay thu thập testimonial có tên — nghịch lý "có khách nhưng chưa từng hỏi lại họ", nêu rõ ở Chương 11.1 (mới thêm) và nâng thành phát hiện #1 ở Chương 1.2
- Đã sửa: Chương 1 (tóm tắt điều hành, 6→7 điều quan trọng), Chương 3.3 (hạ tầng niềm tin), Chương 7.1 (bảng giá thật thay giá nháp), Chương 10 (đánh giá Fit 2 canvas), Chương 11 (viết lại — nghịch lý quy mô lớn/thiếu bằng chứng), Chương 12 (kho uy tín — thêm mục tài sản lớn nhất), Chương 13.2 (hành trình — xác nhận bước makeup thử có phí), Chương 14.2-14.3 (rào cản mới + rào cản "ảo" đã có lời giải), Chương 15 (thêm 15.3-15.4: đối thủ Nam Định thật, so sánh giá cập nhật với Gạo Nâu), Chương 16 (ERRC cập nhật + cảnh báo rủi ro định vị khi tuyển người), Chương 17.1 (thang giá trị thật, phát hiện thiếu tầng cuối phễu), Chương 18 (tách 18.1 đã trả lời / 18.2 còn thiếu), Chương 19 (kế hoạch 90 ngày viết lại ưu tiên "công bố tài sản có sẵn"), Phụ lục E (tách E.1 đã trả lời / E.2 còn thiếu)
- File cập nhật: [[nang-luc/out-2026-07-08-ho-so-khach-hang-ami]] (.md + .pdf regenerate, 26 trang)
- Đã thử `WebFetch` 2 link đối thủ + trang cá nhân Thuý để lấy thêm dữ liệu công khai — Facebook chặn xem chi tiết khi không đăng nhập, chỉ lấy được tên trang ("Triệu Vy", "Vi Vi", "Thủy Trần"), đã ghi nhận rõ giới hạn này thay vì suy diễn thêm
- Memory cập nhật: `user-profile.md` (thêm định hướng tuyển người hỗ trợ), memory mới `project-ami-so-lieu-thuc-te.md` (chốt bộ số liệu thật để dùng cho các phiên sau, tránh dùng lại giá nháp cũ)
- Mâu thuẫn mới phát hiện: giá thật (khóa 2-3tr) thấp hơn nhiều so với cả nháp cũ (không có trong nháp) lẫn chuẩn tham chiếu Gạo Nâu (5.35tr) — chênh lệch lớn hơn mức chênh lệch giá sinh hoạt tỉnh/thành thông thường, gắn cờ 🟡 cần đối chiếu thêm với giá đối thủ Nam Định thật (Chương 15.2)

## [2026-07-08] hỏi lại | Quy mô đã phục vụ AMI — làm rõ khung thời gian
- Thuý hỏi lại vì hồ sơ chưa nói rõ số ~500 cô dâu/~500 khách dịch vụ/~200 học viên là trong 1 tháng hay cả quá trình làm nghề — dùng AskUserQuestion để làm rõ, tránh tự suy diễn sai một con số quan trọng
- Trả lời: tổng cộng **từ khi AMI thành lập đến nay** (không phải theo tháng, không phải tính cả quá trình làm nghề trước AMI) — đã hỏi tiếp năm thành lập AMI để ghi chú đầy đủ, chưa nhận được trả lời (còn treo)

## [2026-07-08] create | Quy Trình Tạo Video AMI (7 bước, Insight-first)
- Yêu cầu: "dựa vào hồ sơ [khách hàng] đưa ra cho tôi quy trình tạo video"
- Nguồn chính: `Tài liệu chưa có tiêu đề.md` (file trong Downloads, chưa ingest vào wiki — chứa khung "Insight 5 tầng", Lạnh/Ấm/Nóng, Hút-Dẫn-Chốt, quy trình 6 bước + Bước 0 Chọn Insight, 25 công thức video, do một phiên trước cùng Thuý xây dựng qua NotebookLM) + [[nang-luc/out-2026-07-08-ho-so-khach-hang-ami]] (10 nỗi đau thật dùng làm ngân hàng insight có sẵn) + [[nang-luc/2026-07-02-cach-tao-noi-dung-video-co-giong-dieu-tu-nhien]] (giọng điệu AI)
- Nội dung: ghép trực tiếp 10 nỗi đau trong hồ sơ khách hàng thành ngân hàng insight sẵn dùng (không cần đào lại từ đầu), map nhiệt độ Lạnh/Ấm/Nóng theo đúng giai đoạn phễu TOFU/MOFU/BOFU đã có, bảng ghép nhanh Insight → Framework (5 framework nền tảng + 3 framework riêng AMI: Hiểu trước khi đẹp, Góc nhìn Makeup Artist, Một ca makeup-một bài học), cấu trúc kịch bản Hút-Dẫn-Chốt theo nhịp giây, bảng tổng hợp cuối cùng 9 insight × framework × ví dụ hook mở đầu dùng ngay
- File tạo: [[nang-luc/out-2026-07-08-quy-trinh-tao-video-ami]] (chỉ .md, chưa xuất PDF vì đây là tài liệu quy trình dùng lặp lại, không phải hồ sơ gửi/lưu trữ)
- Mâu thuẫn: none
- Ghi chú: `Tài liệu chưa có tiêu đề.md` là nguồn giá trị chưa được ingest chính thức (chưa có source page riêng trong wiki/sources/) — nếu Thuý muốn dùng tiếp cho các mục khác (vd. 25 công thức video đầy đủ, phần "thị trường lạnh-ấm-nóng" mở rộng), nên ingest đầy đủ theo quy trình chuẩn ở lần sau

## [2026-07-08] viết lại | Hồ sơ khách hàng AMI — bản 2, sửa số liệu & bỏ chấm điểm giả
- Lý do: Thuý đọc lại bản 1 (19 chương) và nhận xét "không đúng" — số liệu quy mô (~500 cô dâu/~500 khách dịch vụ/~200 học viên) bị hỏi lại và phát hiện không rõ mốc thời gian (tháng/năm/cả quá trình), và hồ sơ dùng quá nhiều 🟡 suy luận/chấm điểm kiểu Hằng China (Cường độ×Phổ biến×Ta-giải) dù không có dữ liệu đủ lớn để chấm — tạo cảm giác "chính xác giả"
- Số liệu đúng do Thuý xác nhận trực tiếp (thay số liệu cũ): 7 năm làm nghề; ~7 cô dâu/tháng và ~10 khách kỷ yếu/sự kiện/tháng (**4 năm gần đây**, không phải cả 7 năm); ~100 học viên đã ra nghề (khóa Chuyên nghiệp) + ~300 học viên khóa Cá nhân (tích lũy toàn bộ 7 năm, mốc bắt đầu khóa Chuyên nghiệp chưa rõ)
- Phát hiện quan trọng bị bỏ sót ở bản 1: AMI có **3 dòng sản phẩm đào tạo/dịch vụ**, không phải 2 — Khóa Đào Tạo Chuyên Nghiệp (20 triệu, 60 buổi/3 tháng, học xong đi làm được: mở tiệm/làm cô dâu/khách tiệc/làm thuê studio) là một tệp khách hàng và JTBD hoàn toàn khác Khóa Cá nhân/VIP (2-3tr, học để tự trang điểm) — bản 1 gộp chung khiến nỗi đau/JTBD bị lẫn
- Thay đổi phương pháp: bỏ hẳn lối chấm điểm số (mức ảnh hưởng 1-5, %) vì AMI chưa có dữ liệu quy mô lớn để chấm như Hằng China (180k cộng đồng + 14 review) — chỉ dùng nhãn 🟢 THẬT / 🟡 SUY LUẬN / 🔴 THIẾU DỮ LIỆU
- Cấu trúc rút từ 19 chương xuống 17 chương + 4 phụ lục (gọn hơn, đúng thực tế 3 tệp khách hàng thay vì 2)
- File cập nhật: [[nang-luc/out-2026-07-08-ho-so-khach-hang-ami]] (ghi đè toàn bộ nội dung .md; PDF cũ 26 trang từ bản 1 nay đã lỗi thời, chưa regenerate — cần làm lại nếu Thuý muốn bản PDF gửi/lưu trữ)
- Index cập nhật: [[index]] (sửa mô tả entry AMI — 17 chương, nhấn "không chấm điểm giả")
- Khoảng trống mới phát hiện: chưa có đối thủ tham chiếu cho khóa Chuyên nghiệp 20tr (Gạo Nâu chỉ dạy trang điểm cá nhân, không dạy nghề) — cần khảo sát riêng
- Mâu thuẫn: none (thay thế hoàn toàn số liệu cũ bằng số liệu mới do chính Thuý xác nhận)

## [2026-07-08] viết lại | Hồ sơ khách hàng AMI — bản 3, đổi văn phong sang giống Hằng China
- Lý do: Thuý xem lại và nói "trong file Hằng China đâu có dấu chấm xanh vàng đỏ đâu" — đúng, hồ sơ mẫu Hằng China không dùng ký hiệu chấm điểm, mà trích dẫn nguồn ngay trong câu văn (VD "theo sources/..."), dùng ⚠️ cho chỗ cần kiểm chứng, và ghi thẳng bằng chữ "minh họa (composite)"/"suy luận" khi không phải dữ liệu thật
- Đã viết lại toàn bộ hồ sơ theo đúng văn phong đó: bỏ hệ thống 🟢🟡🔴, chuyển các bảng/gạch đầu dòng cô đọng sang văn xuôi liền mạch giải thích lý do (giống cách Hằng China viết từng chương), giữ nguyên nội dung/số liệu đã sửa đúng ở bản 2 (7 năm nghề, ~7 cô dâu/~10 khách sự kiện mỗi tháng trong 4 năm gần đây, ~100 học viên Chuyên nghiệp + ~300 học viên Cá nhân tích lũy, 3 tệp khách hàng)
- File cập nhật: [[nang-luc/out-2026-07-08-ho-so-khach-hang-ami]] (.md + .pdf regenerate, 22 trang — dựng bằng Node (marked + Chrome headless --print-to-pdf), vì môi trường không có Python/poppler cho pipeline pdf skill chuẩn)
- Index cập nhật: [[index]] (mô tả lại — "viết theo đúng văn phong Hằng China")
- Mâu thuẫn: none

## [2026-07-08] sửa | Đồng bộ "Nền lý thuyết" với hồ sơ mẫu Hằng China
- Lý do: Thuý chỉ ra bảng "Nền lý thuyết" của hồ sơ AMI khác với hồ sơ mẫu Hằng China — kiểm tra thấy AMI thiếu Schwartz (5 bậc nhận thức) dù có dùng logic phễu tương đương, và thiếu Ryan Deiss (Before/After Grid) dù đã dùng khung này ở Chương 5 — hai khung này bị dùng trong nội dung nhưng quên ghi công trong bảng tổng quan/Phụ lục D
- Đã sửa: bảng "Nền lý thuyết" và Chương 2.3 giờ liệt kê đủ 9 khung giống Hằng China (Revella, Schwartz, Christensen, Osterwalder, Deiss, Robbins, Kim & Mauborgne, Brunson, Cialdini) — chỉ khác một điểm duy nhất, có ghi rõ lý do: Value Equation của Hormozi (chấm điểm số) được thay bằng Value Proposition Canvas của Osterwalder (đối chiếu định tính) vì AMI chưa có dữ liệu để chấm điểm thật (lý do đã nêu ở Chương 2.1 từ bản trước); Phụ lục D bổ sung định nghĩa Schwartz, Robbins, Brunson, Cialdini (trước đó thiếu)
- File cập nhật: [[nang-luc/out-2026-07-08-ho-so-khach-hang-ami]] (.md + .pdf regenerate, 22 trang)
- Mâu thuẫn: none

## [2026-07-10] xoá | Hồ sơ khách hàng chuyên sâu AMI
- Lý do: Thuý xem lại và thấy "chưa được" — hồ sơ dựng chủ yếu từ suy luận/kinh nghiệm nghề, chưa có câu nói thật của khách (khác hồ sơ mẫu Hằng China vốn có 1.704 bình luận thật làm bằng chứng)
- Đã xoá: `wiki/nang-luc/out-2026-07-08-ho-so-khach-hang-ami.md` và `.pdf` đi kèm
- Đã sửa liên kết chết: [[nang-luc/out-2026-07-08-quy-trinh-tao-video-ami]] (frontmatter `sources` + 2 chỗ trong nội dung) trỏ lại về [[nang-luc/2026-06-30-10-bong-toi-anh-sang-makeup]] thay vì hồ sơ đã xoá
- Index cập nhật: [[index]] (gỡ entry AMI khỏi mục lục)
- Hướng đi tiếp theo đã thống nhất với Thuý: làm lại hồ sơ dựa trên dữ liệu thật (tin nhắn khách cũ, bình luận, phỏng vấn 5-8 học viên) thay vì suy luận thuần
- Mâu thuẫn: none

## [2026-07-10] research | Cào nỗi đau khách hàng thật từ hội nhóm Facebook + TikTok (makeup cá nhân & chuyên nghiệp)
- Bối cảnh: nối tiếp việc xoá hồ sơ AMI ở mục log ngay trên — Thuý yêu cầu tìm bằng chứng thật (câu nói/câu hỏi thật của khách) thay vì suy luận, qua 4 vòng cào: (1) nhóm FB "Tự học makeup cá nhân - Tips makeup" (1,8tr thành viên — phần lớn spam/giật tít, ít tín hiệu thật), (2) nhóm FB "Học MakeUp Cá Nhân & Chuyên Nghiệp - Nơi Dạy Uy Tín" (225K — mỏ vàng insight, nhiều câu hỏi/phốt thật), (3) đào sâu riêng cụm "sợ không có năng khiếu/sợ học không xong", (4) quét TikTok (caption + bình luận nhiều video dạy makeup cá nhân)
- Công cụ dùng: browser Chrome (claude-in-chrome MCP) — search nội bộ từng nhóm FB bằng từ khoá (không dùng Apify vì cần đọc nội dung diễn giải, không phải trích xuất số liệu hàng loạt), TikTok search + đọc bình luận qua read_page (get_page_text không lấy được nội dung bình luận, phải dùng read_page filter=all)
- File tạo: [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (nỗi đau người học cho bản thân — sợ không kèm 1:1, giá không minh bạch, mất niềm tin do trải nghiệm xấu, muốn học theo khuyết điểm riêng, sợ không có năng khiếu ẩn dưới dạng "mặt đẹp sẵn") và [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-chuyen-nghiep]] (nỗi đau người học để hành nghề — sợ thị trường bão hoà, so sánh học phí giữa các thương hiệu lớn, lo học xong không xin được việc/không thích nghi thực tế)
- Quyết định tách 2 file: JTBD và nỗi đau của 2 tệp khách khác hẳn nhau (tự trang điểm cho mình vs. kiếm tiền từ nghề) — gộp chung sẽ lặp lại đúng lỗi đã bị phát hiện ở hồ sơ AMI bản 1 (xem log 2026-07-08 "bản 2")
- Toàn bộ trích dẫn trong 2 file đều là câu nói thật lấy nguyên văn từ bình luận/bài đăng công khai (không suy luận, không bịa) — đúng hướng đã thống nhất ở log ngay trên
- Index cập nhật: [[index]] (thêm 2 entry mới vào mục Năng Lực)
- Mâu thuẫn: none

## [2026-07-11] ingest | Infographic "Hệ thống 1.000 khách hàng tiềm năng đầu tiên"
- File: ảnh chụp màn hình (text input, không có file raw/) — infographic 11 phần, ký tên "Hoàng Minh"
- Summary: [[sources/2026-07-11-he-thong-1000-khach-hang-tiem-nang]]
- Nội dung mới bổ sung (không trùng nguồn cũ): mục tiêu "1.000 lead đúng tệp trước doanh thu", công thức tính ngược CPL tối đa từ LVC, chiến lược quảng cáo "creative trước, target sau", 5 tiêu chí định vị người dẫn đầu + nguyên tắc "đừng dính vào danh"
- Khoang pages cập nhật: [[nang-luc/2026-06-30-pheu-va-lvc]] (thêm mục tiêu 1.000 lead + CPL), [[vat-chat/2026-06-30-hoach-dinh-tai-chinh]] (thêm bảng tính ngược CPL)
- New pages: [[nang-luc/2026-07-11-chien-luoc-quang-cao-va-dinh-vi]] (creative-trước-target-sau + định vị người dẫn đầu — nội dung mới, chưa có khoang tương ứng trước đó)
- Mâu thuẫn: none — các con số ví dụ trong tài liệu gốc (LVC 260.000đ/lead...) chỉ minh họa công thức, không dùng làm số liệu thật của AMI

## [2026-07-11] create | SOP Buổi Trải Nghiệm Makeup Miễn Phí (15km, tìm khách mới)
- Yêu cầu: Thuý muốn tổ chức 1 buổi trải nghiệm miễn phí trong bán kính 15km quanh cửa hàng để tìm khách mới, mục tiêu 10-15 người tham dự thật; qua 3 vòng hỏi làm rõ (AskUserQuestion), Thuý xác nhận: tổ chức trong 3-4 tuần tới, KHÔNG dùng danh sách khách/học viên cũ (chiến dịch tìm khách mới hoàn toàn), có ngân sách nhỏ (vài trăm nghìn) cho quảng cáo nếu cần, địa điểm tại cửa hàng 351 Lê Hồng Phong
- Áp khung từ [[sources/2026-07-11-he-thong-1000-khach-hang-tiem-nang]] (creative-trước-target-sau) và insight thật từ [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (5-6 rào cản) vào 1 kế hoạch cụ thể: cơ chế lọc 25-35 đăng ký → 10-15 người đến thật (đăng ký mở + xác nhận lại qua gọi điện/Zalo trước 2 ngày), timeline ngược 4 tuần, logistics (ghế/trợ giảng/nước nôi/bảng giá), kịch bản giảng dạy chia phút 90 phút, 1 mẫu bài mời hoàn chỉnh
- File tạo: [[nang-luc/out-2026-07-11-sop-buoi-trai-nghiem-mien-phi]]
- Khoảng trống chưa chốt (ghi rõ trong file): ngày giờ chính xác, sức chứa phòng thật, có dùng đặt cọc giữ chỗ không, ai làm trợ giảng, 9 biến thể tiêu đề/ảnh còn thiếu (mới có 1 mẫu)
- Mâu thuẫn: none

## [2026-07-11] create | Bảng Lark Base danh mục tài liệu output (catalog)
- Yêu cầu: Thuý muốn 1 danh sách xem lại được tất cả tài liệu (out-) đã tạo ra, không nhớ hết có gì
- Quét toàn bộ `wiki/**/out-*.*` + gốc thư mục dự án, tìm được 9 tài liệu (07/02 → 07/11)
- Tạo bảng mới "Danh mục Tài liệu Đã Tạo (out-)" (table_id `tblBYPrJm7tM3UTi`) tại gốc Base "CRM THÚY THÚY", schema: Tên tài liệu/Ngày tạo/Loại nội dung/Định dạng/Mô tả ngắn/Đường dẫn/Trạng thái — nạp đủ 9 dòng
- Phát hiện quan trọng: 1 tài liệu (`out-2026-07-08-cong-thuc-video-marketing-ami.docx/.pdf`) nằm ở gốc thư mục dự án, chưa từng được ingest vào wiki — đã hỏi và được xác nhận đọc/ingest ngay sau đó (xem log tiếp theo)
- Mâu thuẫn: none

## [2026-07-11] ingest | Công thức Video Marketing & Chiến lược Makeup Cá Nhân AMI (106 trang, buổi trao đổi ChatGPT)
- File: `out-2026-07-08-cong-thuc-video-marketing-ami.pdf` (gốc thư mục dự án) — chính là nguồn `Tài liệu chưa có tiêu đề.md` từng nhắc tới nhưng chưa ingest ở log `[2026-07-08] create | Quy Trình Tạo Video AMI`
- Nội dung: 25 công thức video phổ biến, 5 công thức ưu tiên cho Thuý Trần, phương pháp đào Insight đầy đủ (5 tầng suy nghĩ, 5 lần Tại sao, 8 nhu cầu gốc, công thức A→B→C, Insight Canvas), thị trường Lạnh-Ấm-Nóng, Hút-Dẫn-Chốt, quy trình 6 bước + Bước 0; sau đó áp dụng cụ thể cho AMI — bóc tách 3 dòng sản phẩm, Thuý xác nhận ưu tiên Makeup Cá Nhân, cung cấp cấu trúc khóa Basic/VIP thật + 12 câu hỏi thật của khách (nguồn insight thứ 3, khác 2 file cào mạng xã hội đã có)
- Summary: [[sources/2026-07-11-cong-thuc-video-marketing-ami]]
- Khoang pages mới: [[nang-luc/2026-07-11-cong-thuc-video-va-phuong-phap-insight]] (framework dùng chung), [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]] (chiến lược riêng Makeup Cá Nhân — tách rõ phần Thuý xác nhận thật vs phần ChatGPT tự đề xuất chưa chốt: Business Model Canvas, Brand Message "AMI Personal Beauty", Content Pillar %, 50 ý tưởng video, Customer Avatar "chị Lan")
- Cập nhật bảng Lark Base "Danh mục Tài liệu Đã Tạo": đổi trạng thái dòng "Công thức video marketing AMI" từ 🟡 Chưa ingest vào wiki → ✅ Hoàn thiện
- Mâu thuẫn: none — giá Basic 2 triệu/VIP 3 triệu trong tài liệu khớp đúng [[project-ami-so-lieu-thuc-te]] đã có

## [2026-07-11] build | Bảng Lark Base theo dõi tiến độ SOP Buổi Trải Nghiệm Miễn Phí
- Yêu cầu: Thuý muốn 1 bảng Lark Base để theo dõi tiến độ các việc trong file SOP vừa tạo, dễ cập nhật hơn đọc lại file .md
- Đã tạo bảng mới "SOP Buổi Trải Nghiệm Miễn Phí" (table_id `tblHa8DdnTxIzM79`) tại gốc Base "CRM THÚY THÚY" (`O2qIbEaIYabXEGsW6Dzjs0LCpZg`, theo đúng convention đã có với bảng "Công cụ AI"/"Thư viện Artifact" — bảng cá nhân đặt ở gốc, tách khỏi cấu trúc folder template studio)
- Schema: Hạng mục (text, primary), Nhóm việc (select: Logistics/Marketing-Mời tham gia/Kịch bản giảng dạy/Khoảng trống cần chốt), Trạng thái (select: ⬜ Chưa bắt đầu/🟡 Đang làm/✅ Hoàn thành), Mô tả (text), Cập nhật gần nhất (datetime)
- Nạp 23 dòng lấy trực tiếp từ nội dung [[nang-luc/out-2026-07-11-sop-buoi-trai-nghiem-mien-phi]] (9 Logistics, 7 Marketing, 2 Kịch bản, 5 Khoảng trống cần chốt) — đã đối chiếu đúng nội dung, không bịa thêm việc mới
- File wiki cập nhật: [[nang-luc/out-2026-07-11-sop-buoi-trai-nghiem-mien-phi]] (thêm mục "Theo dõi tiến độ" trỏ link Base)
- Mâu thuẫn: none

## [2026-07-11] update | Hồ sơ doanh nghiệp AMI — hoàn thiện đủ 10 mảng (từ bản mẫu Hằng China đầy đủ)
- Bối cảnh: bản 2026-07-09 chỉ có Mảng 1-3 (file `.pages` gốc lúc đó không mở được). Người dùng cung cấp bản Markdown đầy đủ 10 mảng của phiếu mẫu Hằng China (xuất từ Google Docs), nhưng bị lỗi định dạng khi copy: chữ trong bảng bị OCR giãn cách kiểu "T i k T o k" thay vì "TikTok", bảng Mảng 6 bị vỡ dòng kẻ markdown, và 2 chỗ bị dính chữ do mất xuống dòng (cuối Mảng 1 dính luôn tiêu đề Mảng 2, cuối Mảng 3 dính luôn tiêu đề Mảng 4)
- Không chép nội dung Hằng China (doanh nghiệp khác, không liên quan AMI) — chỉ dùng đúng cấu trúc 10 mảng, dựng lại bảng Mảng 6 cho đúng, rồi điền bằng dữ liệu thật của AMI đã có sẵn trong bộ não: giá khoá/dịch vụ ([[project-ami-so-lieu-thuc-te]]), khách hàng mục tiêu + điểm mạnh + phễu marketing ([[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]]), sản phẩm phễu miễn phí ([[nang-luc/out-2026-07-11-sop-buoi-trai-nghiem-mien-phi]]), đối thủ Nam Định + kênh MXH ([[project-ami-so-lieu-thuc-te]]), hạ tầng/công cụ ([[nang-luc/2026-06-29-ami-website-trang-thai]])
- Phát hiện lỗi dữ liệu khi rà bộ não (đã ghi rõ trong file, cần Thuý xác nhận): [[entities/ami-makeup-academy]] ghi hotline placeholder `0979.963.369 · 0888.646.886`, nhưng [[nang-luc/2026-06-29-ami-website-trang-thai]] (cập nhật gần hơn, website đang live) ghi số hiển thị thật khác `0327.355.595` — 2 nguồn lệch nhau, phiếu tạm dùng số đang live trên web
- File cập nhật: [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]] (thêm Mảng 4-10, mở rộng Mảng 3 với dòng Đào tạo Chuyên nghiệp)
- Index cập nhật: [[index]] (bổ sung entry — bị thiếu từ lần tạo 2026-07-09, phát hiện khi rà index gap)
- Mâu thuẫn khác: Mảng 3 phát hiện khả năng trùng tên sản phẩm — "Make Up Cá Nhân 1-1" (18tr, trong nhóm Đào tạo Chuyên nghiệp trên website) có thể là cùng một sản phẩm hoặc khác hẳn với "Makeup Cá Nhân VIP" (3tr, học 1-1 với Thuý theo chiến lược 07-11) — chưa tự ý gộp, đã ghi rõ cần Thuý làm rõ trong file

## [2026-07-11] fix | Máy Tính Chiến Lược Phễu Sản Phẩm — thêm tự lưu localStorage
- Bối cảnh: Thuý hỏi `https://phieu.alita.vn` đã có trong bộ não chưa → có, chính là [[nang-luc/out-2026-07-10-may-tinh-chien-luoc-pheu-san-pham]], nhưng bản đang live trên alita.vn là bản CODE KHÁC (đã được chỉnh sửa/nâng cấp giao diện trực tiếp trên bản deploy, không đồng bộ lại vào wiki — khác cả CSS/ID phần tử lẫn số liệu mẫu mặc định so với file wiki lúc đó)
- Kiểm tra kỹ công thức tính (mô hình song song + tuần tự/upsell, xuất Markdown) bằng cách bơm dữ liệu thật qua JS và đối chiếu tay từng bước — tất cả đúng, không có lỗi tính toán
- Phát hiện lỗi chức năng thật: bản live KHÔNG lưu localStorage (khác bản cũ trong wiki) — verify bằng cách nhập số thật rồi đọc `localStorage`, thấy trống rỗng → mỗi lần tải lại trang, số Thuý tự nhập sẽ mất sạch, quay về số mẫu
- Verify domain `alita.vn` KHÔNG thuộc tài khoản Cloudflare hiện có của Thuý (chỉ có zone thuytranmakeup.com + 3 Pages project ami-*) — khớp với phát hiện ở mục "Máy Tính Ngân Sách QC" cùng ngày bên dưới: alita.vn là nền tảng/tài khoản khác, repo này không có quyền deploy trực tiếp lên đó
- Đã sửa: thêm `localStorage` tự lưu toàn bộ input (mục tiêu, mô hình, tất cả phễu/sản phẩm) sau mỗi lần tính, tự nạp lại khi mở trang; thêm nút "↺ Đặt lại mẫu" để xoá lưu trữ quay về ví dụ mẫu. Test bằng server tĩnh Node cục bộ: nhập số → tải lại trang → số vẫn còn; bấm Đặt lại mẫu → về đúng mẫu gốc, không lỗi console.
- File cập nhật: [[nang-luc/out-2026-07-10-may-tinh-chien-luoc-pheu-san-pham]] (ghi đè bằng bản code đang live + patch localStorage, để wiki khớp với bản Thuý đang dùng thật)
- Thuý xác nhận: alita.vn không phải của Thuý (chỉ copy về dùng thử), muốn có bản riêng của mình → đã tạo project Cloudflare Pages mới **"may-tinh-pheu"** (thuộc tài khoản Cloudflare thật của Thuý) và deploy file đã vá lên đó, KHÔNG còn phụ thuộc alita.vn nữa
- Link công khai: **https://may-tinh-pheu.pages.dev** — đã verify: mở được, tính tự lưu hoạt động đúng (nhập số → tải lại trang → còn nguyên), đã đặt lại về mẫu để sạch cho lần mở đầu
- Index cập nhật: [[index]] (bổ sung entry còn thiếu cho công cụ này — phát hiện chưa từng được index từ lúc tạo 07-10)
- Mâu thuẫn: none

## [2026-07-11] create | Máy Tính Ngân Sách Quảng Cáo (SCALE hay DỪNG)
- Bối cảnh: Thuý hỏi kiểm tra xem `https://ngansach.alita.vn` đã có trong bộ não chưa — không tìm thấy dấu vết nào (không phải công cụ do repo này dựng/deploy), Thuý yêu cầu tạo lại một bản tương tự
- Đọc nội dung trang gốc qua Browser pane, suy ngược đúng công thức lõi từ bộ số ví dụ (AOV 18tr, biên LN 60%, CPL 60k, CR 3%, ngân sách 30tr/tháng): CPA hoà vốn = AOV × biên LN, CPL hoà vốn = CPA hoà vốn × CR%, CPA thực tế = CPL / CR%, ROAS = doanh thu/ads, CR hoà vốn = CPL / CPA hoà vốn — verify khớp 100% mọi số hiển thị (ROAS 9×, ngưỡng hoà vốn 324.000đ, lãi ròng 132tr/tháng, 10 funnel cần chạy song song)
- File tạo: [[nang-luc/out-2026-07-11-may-tinh-ngan-sach-quang-cao]] — HTML độc lập (không cần server, mở thẳng bằng trình duyệt), tái dùng khung thiết kế (nền tối/viền vàng, localStorage lưu số đã nhập, xuất PDF/Markdown) từ [[nang-luc/out-2026-07-10-may-tinh-chien-luoc-pheu-san-pham]] — 3 khối: (1) nhập số, (2) phán quyết SCALE/GIỮ NGUYÊN/DỪNG theo tỉ lệ CPL thực tế so ngưỡng hoà vốn + breakdown đủ chỉ số, (3) test sản phẩm rẻ 200k + chia nhỏ mục tiêu lãi thành N funnel song song
- Đã test bằng server tĩnh Node cục bộ (localhost, không public) để đối chiếu số — không deploy lên đâu, file chỉ nằm trong wiki
- Theo yêu cầu Thuý + quy tắc thường trực ở [[reference-crm-thuy-thuy-base-token]]: ghi thêm 1 dòng vào bảng "Danh mục Tài liệu Đã Tạo (out-)" (`tblBYPrJm7tM3UTi`, record `recvp4N6i36o0t`) và 1 dòng vào bảng "Công cụ AI" (`tbliXt0oEV91oBhJ`, record `recvp4Na3NjJU9`) tại Base "CRM THÚY THÚY" (`O2qIbEaIYabXEGsW6Dzjs0LCpZg`)
- Mâu thuẫn: none

## [2026-07-11] deploy | Máy Tính Ngân Sách Quảng Cáo — lên Cloudflare Pages
- Yêu cầu: Thuý muốn có link công khai giống [[nang-luc/out-2026-07-10-may-tinh-chien-luoc-pheu-san-pham]] (đã deploy tại may-tinh-pheu.pages.dev)
- Tạo project Cloudflare Pages mới `may-tinh-ngan-sach` (không qua git, deploy trực tiếp bằng `wrangler pages deploy` từ thư mục tạm chỉ chứa 1 file `index.html`, cùng cách với `may-tinh-pheu`), verify lại bằng Browser pane sau khi deploy — số liệu khớp 100% với bản local
- Link công khai: https://may-tinh-ngan-sach.pages.dev
- File cập nhật: [[nang-luc/out-2026-07-11-may-tinh-ngan-sach-quang-cao]] (thêm link deploy), [[index]] (thêm link deploy vào entry), 2 record Lark Base vừa tạo (bảng Danh mục Tài liệu + Công cụ AI) — cập nhật "Đường dẫn"/"Link / Vị trí" sang link public
- Mâu thuẫn: none

## [2026-07-11] ingest | SOP AMI — Bộ 28 Quy Trình Vận Hành AMI Makeup Academy
- File: `Sop AMI.md` (9.609 dòng, dán từ Downloads, dạng thẻ trao đổi AI — SOP01-23, 26, 27, 30; đọc toàn bộ trước khi tóm tắt)
- Summary: [[sources/2026-07-11-sop-van-hanh-toan-dien-ami]]
- Khoang pages (nang-luc/, gom theo chủ đề để tránh 28 trang riêng lẻ):
  - [[nang-luc/2026-07-11-sop-chien-luoc-va-dinh-vi-ami]] (SOP01,02,19,23)
  - [[nang-luc/2026-07-11-sop-san-pham-va-giao-trinh-ami]] (SOP03,18,20,26)
  - [[nang-luc/2026-07-11-sop-khach-hang-va-insight-ami]] (SOP04,05)
  - [[nang-luc/2026-07-11-sop-content-video-marketing-ami]] (SOP06-11)
  - [[nang-luc/2026-07-11-sop-ban-hang-pheu-ads-ami]] (SOP12,21,22)
  - [[nang-luc/2026-07-11-sop-van-hanh-hoc-vien-nhan-su-ami]] (SOP13-17,27,30)
- Pages updated: [[index]] (7 entry mới: 1 source + 6 khoang)
- New pages: 7
- Mâu thuẫn: không có mâu thuẫn về số liệu thật — giá/thời lượng/độ tuổi khách khớp dữ liệu đã xác nhận ở [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]]. Có khác biệt câu chữ định vị thương hiệu giữa SOP02 và đề xuất "AMI Personal Beauty" — cả hai đều là bản dự thảo AI chưa chốt, đã ghi chú trong [[nang-luc/2026-07-11-sop-chien-luoc-va-dinh-vi-ami]] để Thuý so sánh/chốt sau
- Ghi chú: SOP24, 25, 28, 29 không có trong nguồn (bị bỏ qua khi soạn); SOP31 dừng giữa dòng khi nguồn hết nội dung

## [2026-07-11] chốt | Định vị & Thông điệp Thương hiệu AMI — hợp nhất 2 bản dự thảo
- Yêu cầu: Thuý yêu cầu so sánh SOP02 ([[nang-luc/2026-07-11-sop-chien-luoc-va-dinh-vi-ami]]) với đề xuất "AMI Personal Beauty" ([[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]]) rồi chốt 1 bản dùng chính thức
- Kết quả so sánh: 2 bản ~80% cùng ý tưởng lõi, không mâu thuẫn — chỉ khác cách diễn đạt. SOP02 mạnh về câu định vị institutional; "AMI Personal Beauty" mạnh về "kẻ thù chung" + lời hứa thương hiệu + 4 trụ thông điệp
- Quyết định: hợp nhất phần mạnh của cả 2 thành 1 bản chính thức, GIỮ tên "AMI Makeup Academy" (không đổi/thêm tên phụ "AMI Personal Beauty" — coi đó là quyết định đặt tên riêng, chưa đủ lý do để đổi khỏi tên đang dùng trên kênh MXH/giáo trình)
- File tạo: [[nang-luc/2026-07-11-dinh-vi-thuong-hieu-ami-chinh-thuc]]
- File cập nhật: [[nang-luc/2026-07-11-sop-chien-luoc-va-dinh-vi-ami]], [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]] (bỏ cờ "chưa chốt" cho phần định vị, trỏ sang bản chính thức), [[index]]
- Mâu thuẫn: none (đã giải quyết, không còn 2 bản song song)

## [2026-07-11] chốt | Tên thương hiệu AMI — xác nhận dùng chung "AMI Makeup Academy"
- Thuý xác nhận trực tiếp: dùng chung tên "AMI Makeup Academy" cho mọi dòng sản phẩm, không tách tên riêng "AMI Personal Beauty" cho dòng Makeup Cá Nhân
- File cập nhật: [[nang-luc/2026-07-11-dinh-vi-thuong-hieu-ami-chinh-thuc]] (đóng khoảng trống về tên thương hiệu)
- Mâu thuẫn: none

## [2026-07-11] chốt | Customer Avatar — không dùng nhân vật giả định
- Thuý xác nhận trực tiếp: KHÔNG dùng "chị Lan" (composite do AI đặt ra) làm avatar minh họa chính thức cho content
- Quy tắc thay thế: khi cần ví dụ minh họa, dùng insight/câu hỏi khách thật đã có sẵn trong wiki, không tạo nhân vật giả định mới
- File cập nhật: [[nang-luc/2026-07-11-dinh-vi-thuong-hieu-ami-chinh-thuc]] — bản định vị thương hiệu AMI nay đã chốt đầy đủ, không còn khoảng trống mở
- Mâu thuẫn: none

## [2026-07-11] query | Quy trình tìm Insight & viết Content AMI (hợp nhất)
- Câu hỏi: Thuý yêu cầu dựa vào tri thức đã lưu, đưa ra 1 quy trình tìm insight và viết content
- Nguồn tổng hợp: [[nang-luc/2026-07-11-sop-khach-hang-va-insight-ami]], [[nang-luc/2026-07-11-cong-thuc-video-va-phuong-phap-insight]], [[nang-luc/out-2026-07-08-quy-trinh-tao-video-ami]], [[nang-luc/2026-07-11-sop-content-video-marketing-ami]], [[nang-luc/2026-07-11-dinh-vi-thuong-hieu-ami-chinh-thuc]], [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]]
- Saved as: [[analyses/2026-07-11-quy-trinh-insight-va-content-ami]] — 4 giai đoạn: Tìm Insight (ưu tiên dùng 3 kho insight thật đã có, chỉ đào mới khi cần) → Lên kế hoạch (nhiệt độ lạnh/ấm/nóng, mục tiêu, trụ cột) → Viết & sản xuất (chọn framework + Hút-Dẫn-Chốt) → Duyệt/đăng/đo lường/học lại
- Pages updated: [[index]] (thêm mục Analyses)
- Mâu thuẫn: none — các tài liệu nguồn không mâu thuẫn, chỉ trùng lặp/bổ sung, trang mới đóng vai trò bản quy trình chính để dùng thật

## [2026-07-11] create | Công thức tổng quát Insight→Content (điền-vào-chỗ-trống)
- Yêu cầu: Thuý muốn dạng công thức chung, áp dụng được cho MỌI vấn đề makeup (không riêng 1 insight cụ thể)
- Rút gọn quy trình 4 giai đoạn ở [[analyses/2026-07-11-quy-trinh-insight-va-content-ami]] thành công thức 7 bước điền vào chỗ trống: vấn đề bề mặt → insight (công thức 4 dòng) → nhiệt độ (lạnh/ấm/nóng) → mục tiêu → framework (bảng quyết định theo loại insight) → Hút-Dẫn-Chốt → lọc trước đăng
- File tạo: [[nang-luc/2026-07-11-cong-thuc-tong-quat-insight-content-makeup]] — kèm 1 ví dụ điền thử để minh họa cách dùng
- Pages updated: [[index]]
- Mâu thuẫn: none

## [2026-07-11] update | Thêm "Bước 0" — cách tìm nguyên liệu cho Bước 1-2
- Thuý nêu đúng điểm tắc thật: chưa biết cách tìm câu khách nói thật (Bước 1) và đào insight (Bước 2)
- Bổ sung "Bước 0" vào [[nang-luc/2026-07-11-cong-thuc-tong-quat-insight-content-makeup]]: (A) kiểm tra 3 kho insight thật đã có trước khi tìm mới, (B) 5 nơi câu nói thật tự xuất hiện hàng ngày (lúc làm dịch vụ/dạy, tin nhắn tư vấn, bình luận cũ, group cộng đồng, gọi điện/gặp lần đầu), (C) dấu hiệu nhận biết câu đáng ghi, (D) cách ghi khi đang bận (chỉ ghi nguyên văn + tình huống, không đào insight ngay), (E) xử lý theo lô lúc rảnh để ra insight
- Mâu thuẫn: none

## [2026-07-11] update | Thêm hướng dẫn "Cách dùng thực tế" cho công thức tổng quát
- Thuý hỏi cách dùng công thức 7 bước trong thực tế
- Bổ sung mục "Cách dùng thực tế" vào [[nang-luc/2026-07-11-cong-thuc-tong-quat-insight-content-makeup]]: khi nào dùng (3 tình huống), cách điền không cần công cụ, lưu ý kết quả 7 bước = khung kịch bản quay được ngay, cách kết nối với skill `hệ-thống-nội-dung` (đưa Bước 1-2 vào ô "Ý tưởng" trong Lark Base để AI viết tiếp), cách tích lũy dữ liệu dần
- Mâu thuẫn: none

## [2026-07-11] build | 2 bảng Lark Base — Ngân hàng Insight & Kho Tiêu Đề Video (Makeup Cá Nhân)
- Yêu cầu: Thuý muốn gom toàn bộ nỗi đau khách hàng đã biết thành 1 danh sách trong Lark Base để dùng viết kịch bản video, sau đó yêu cầu kiểm tra thêm dữ liệu insight còn sót trong wiki (buổi trao đổi AI), rồi đưa hết vào
- Bảng 1 "Ngân Hàng Insight - Nỗi Đau Khách Hàng" (`tblG095uASx2PDSJ`, Base "CRM THÚY THÚY" `O2qIbEaIYabXEGsW6Dzjs0LCpZg`) — 26 dòng, nhóm Makeup Cá Nhân, cột Nguồn phân biệt rõ 4 loại: Cào MXH (FB+TikTok, 10 dòng), Thuý nhớ lại trực tiếp (3 dòng), SOP tư vấn nội bộ AMI (3 dòng, phát hiện thêm khi rà `AMI_Quy_Trinh_Tu_Van_Chot_Sale.docx`: sợ quên sau khi học, muốn suy nghĩ thêm, so giá đối thủ có 1-1 rẻ hơn), ChatGPT đề xuất chưa xác minh (10 dòng, từ nguồn dưới)
- Phát hiện quan trọng khi rà lại nguồn `out-2026-07-08-cong-thuc-video-marketing-ami.pdf/.docx`: Thuý nhớ nhầm "ngân hàng 100 insight" — thực tế ChatGPT chỉ đề xuất mục tiêu "100 Insight" nhưng buổi trao đổi chỉ dựng được **50 ý tưởng video** (không phải 100), và trong 50 đó chỉ 10 video đầu (Phần 1) có đủ Insight+Hook+Framework+CTA, 40 video còn lại (Phần 2-5) chỉ có Chủ đề/Hook, không có câu Insight riêng — đã trích xuất đúng bằng pdftotext/docx-xml (bản .docx giữ dấu tiếng Việt chuẩn hơn .pdf khi trích xuất)
- Bảng 2 "Kho Tiêu Đề Video - Makeup Cá Nhân (AI đề xuất)" (`tblyL3QtUIUePwq1`, cùng Base) — 40 dòng (Video 11-50), cột Tầng phễu (Tầng 2 Xây chuyên môn / Tầng 3 Xây niềm tin / Tầng 4 Chuyển đổi / Tầng 5 Cảm xúc thương hiệu), tất cả gắn nhãn "ChatGPT đề xuất" để không lẫn với dữ liệu thật ở Bảng 1
- Nguyên tắc áp dụng xuyên suốt: tách rõ dữ liệu thật (khách/Thuý) và ý tưởng AI đề xuất chưa xác minh — đúng tinh thần "không bịa dữ liệu thật" đã có trong pham-chat/2026-06-24-nguyen-tac-duc-hanh-nha-may-pheu
- Theo quy tắc thường trực ở [[reference-crm-thuy-thuy-base-token]]: đã đăng ký cả 2 bảng làm 2 dòng mới trong bảng "Công cụ AI" (`tbliXt0oEV91oBhJ`, nay 112 dòng) — Nhóm việc "Nghiên cứu & Insight" và "Video", kèm hướng dẫn sử dụng từng bước
- Mâu thuẫn: none (làm rõ, không phải sửa lỗi — Thuý nhớ nhầm số 100 nhưng dữ liệu gốc trong file đã đúng)

## [2026-07-12] query | Phân tích tuyến nội dung Fanpage Thỏ Makeup (Hà Nội)
- Cào công khai 50 bài gần nhất (17/06-11/07/2026) qua Apify (skill lay-du-lieu-facebook), page facebook.com/Tho.MakeUp.HaNoi
- Saved as: [[nang-luc/2026-07-12-phan-tich-tuyen-noi-dung-tho-makeup]]
- Kết quả: 6 tuyến nội dung (tip kỹ thuật ngắn, ảnh tĩnh gu đẹp, testimonial, trend-jacking, behind-the-scenes, CTA bán khóa) kèm số liệu like/share/view thật để làm tuyến nội dung tham khảo cho kênh Thuý
- Mâu thuẫn: none

## [2026-07-12] query | Danh sách group/cộng đồng Facebook về makeup & makeup cá nhân
- Yêu cầu: Thuý muốn tìm group/cộng đồng liên quan makeup, đặc biệt makeup cá nhân
- Phương pháp: tìm kiếm Google công khai (WebSearch), không đăng nhập/cào Facebook trực tiếp — khác cách làm ở [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (vốn dùng browser đăng nhập để đọc nội dung bình luận thật)
- Saved as: [[nang-luc/out-2026-07-12-danh-sach-group-cong-dong-makeup]]
- Kết quả: 3 nhóm — (1) group học/làm makeup cá nhân sát đối tượng AMI, (2) group làm đẹp/mỹ phẩm lớn (audience rộng, tới ~1.3tr thành viên), (3) group địa phương — phát hiện Nam Định CHƯA có group makeup/làm đẹp riêng nào (khác Vũng Tàu đã có "Hội Makeup Vũng Tàu"), gợi ý đây là cơ hội để Thuý tự lập và làm chủ cộng đồng địa phương
- Mâu thuẫn: none
- Lưu ý: số liệu thành viên & link lấy từ trang kết quả tìm kiếm, có thể lỗi thời — cần Thuý bấm vào kiểm tra trực tiếp trước khi dùng để chạy ads/target hay xin đăng bài

## [2026-07-12] update | Liệt kê đầy đủ vấn đề/insight từ 2 file mới (Thỏ Makeup + Danh sách Group)
- Thuý phản hồi: lần liệt kê trước lọc quá tay, bỏ qua nhiều tín hiệu — nêu đúng nguyên tắc: content đối thủ tiếp cận/tương tác cao chứng tỏ nhiều người thật quan tâm đúng vấn đề đó, dù không phải nguyên văn khách AMI nói
- Bổ sung [[nang-luc/2026-07-12-phan-tich-tuyen-noi-dung-tho-makeup]]: bảng đầy đủ 11 vấn đề/mong muốn suy ra từ từng bài cụ thể (mũi cao, kẻ khối mũi, mở góc mắt, gu thẩm mỹ nhẹ nhàng, sợ chọn nhầm chỗ uy tín, nghi ngờ học phí, muốn kèm 1-1, tin triết lý người dạy...), xếp theo mức tương tác = mức quan tâm, có ghi rõ đây là tín hiệu suy luận cần kiểm chứng qua khách AMI thật, không thay thế Nhóm A (bằng chứng trực tiếp)
- Bổ sung [[nang-luc/out-2026-07-12-danh-sach-group-cong-dong-makeup]]: bảng vấn đề suy ra từ quy mô/tên nhóm (tự học sai cách ~1.7tr người, sợ chọn nhầm chỗ "uy tín", matching khách-thợ có thật, nhu cầu tại nhà, review mỹ phẩm đáng tin, Nam Định chưa có group riêng)
- Pages updated: [[index]]
- Mâu thuẫn: none — làm rõ thêm phân tầng độ tin cậy (bằng chứng trực tiếp vs suy luận từ hiệu suất đối thủ), không phải mâu thuẫn với lần liệt kê trước

## [2026-07-12] ingest | Hồ sơ doanh nghiệp AMI — bản Thuý điền tay
- File: `out-2026-07-11-phieu-dien-ho-so-doanh-nghiep-ami-form.docx.md` (Thuý điền tay, gửi qua Downloads)
- Đã dọn: bỏ phần mã số thuế/giấy phép theo yêu cầu, loại bỏ các đoạn AI tự bình luận lẫn trong file gốc (đổi ngôi xưng hô, ký tự lạ), chỉ giữ nội dung đã chốt
- Cập nhật: [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]] (Mảng 2 tầm nhìn/cơ duyên/bước ngoặt, Mảng 3 chi tiết gói Basic/VIP + Cô dâu/Thử trước cưới + cọc cô dâu 500k, Mảng 7 đội ngũ thật + công suất 10-15 khách/tháng, Mảng 8 đối thủ mới Thỏ Makeup/Gạo Nâu/Hiền Mew, Mảng 9 doanh thu mục tiêu 50tr/tháng chốt chính thức)
- New pages: [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]] (tách khung giọng điệu chi tiết ra trang riêng)
- Xác nhận qua chat (đã sửa mâu thuẫn cũ): đội ngũ AMI có chồng Thuý hỗ trợ phụ + 2 học viên đồng hành (sẵn sàng khi có khách) — thông tin cũ ghi "chỉ một mình Thuý" là sai, đã sửa; xác nhận không có mảng kinh doanh "S Decor", chỉ làm makeup
- Mâu thuẫn: đã xử lý mâu thuẫn đội ngũ (xem trên). Còn tồn: lệch hotline giữa 2 nguồn cũ (chưa Thuý xác nhận số nào đúng), chưa rõ "AMI Professional Makeup Artist" (mô tả mới) có phải cùng dòng sản phẩm với bảng giá chi tiết cũ lấy từ website hay không

## [2026-07-12] lint | Sửa dữ liệu sai — bảng giá khoá chuyên nghiệp AMI thực ra là của Hằng Thu
- Thuý xác nhận trực tiếp: bảng giá 8 khoá trong [[entities/ami-makeup-academy]] (Make Up Pro 2026 5.5tr, Nâng Cao Cấp Tốc 12tr, Make Up Cá Nhân 1-1 Premium 18tr, Hairstylist 8tr, Online 2.5tr/1.8tr/900k) KHÔNG phải giá AMI — đây là dữ liệu placeholder/demo của template website (dựng giống [[entities/hangthumakeup-vn]]), Thuý gọi thẳng là "của Hằng Thu"
- Giá thật của AMI (khoá chuyên nghiệp "AMI Professional Makeup Artist"): khoá makeup 25tr (khuyến mại còn 20tr), khoá tóc 10tr
- Nhân tiện xác nhận luôn: hotline placeholder cũ `0979.963.369 · 0888.646.886` chưa từng là số thật của ai — số đúng duy nhất là `0327.355.595` (đóng lại nghi vấn lệch hotline tồn đọng từ 2026-07-09)
- Pages updated: [[entities/ami-makeup-academy]], [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]], [[index]]
- Mâu thuẫn: đã xử lý — nguồn gốc là dữ liệu demo/placeholder bị lẫn vào hồ sơ thật khi ingest sớm (2026-06-20), không phải mâu thuẫn giữa 2 nguồn thật

## [2026-07-12] ingest | Hồ sơ doanh nghiệp AMI — vòng 2 (sửa từ file Word)
- File: `out-2026-07-12-ho-so-doanh-nghiep-ami-day-du.docx` (Thuý sửa trực tiếp trong Word, gửi qua Downloads)
- Sửa: khoá tóc chuyên nghiệp 12tr/KM 10tr (trước ghi nhầm flat 10tr); khách hàng mục tiêu 25-40 → 22-40 tuổi (đồng bộ ở [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/2026-07-11-sop-khach-hang-va-insight-ami]], [[sources/2026-07-11-sop-van-hanh-toan-dien-ami]], [[index]]); thêm nguồn khách chính (Facebook + TikTok, chủ yếu Facebook); sửa trạng thái buổi trải nghiệm miễn phí thành "đang lên dự án, chưa chạy thật" (trước ghi nhầm đã có); bổ sung giọng điệu cốt lõi AMI có "dạy rất nhiều học viên từ chuyên nghiệp đến cá nhân"
- Pages updated: [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]], [[entities/ami-makeup-academy]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/2026-07-11-sop-khach-hang-va-insight-ami]], [[sources/2026-07-11-sop-van-hanh-toan-dien-ami]], [[index]]
- Mâu thuẫn: none — tất cả là sửa số liệu theo xác nhận trực tiếp của Thuý

## [2026-07-12] query | Phân tích thị trường & đối thủ AMI (13 đầu mục) + xác minh follower thật
- Bối cảnh: Thuý gửi file mẫu "Hồ sơ khách hàng chuyên sâu Hằng China" (PDF, đọc qua pdftotext do poppler thiếu, ~1100 dòng đầu đủ hiểu cấu trúc 16 chương + 5 phụ lục) + link Fanpage AMI và 5 đối thủ, yêu cầu phân tích thị trường theo 13 đầu mục để chuẩn bị dựng hồ sơ khách hàng mục tiêu mới
- Khảo sát trực tiếp Facebook (không đăng nhập, chỉ xem công khai): AMI fanpage ~3.4K follower/0 review, Thuý Trần cá nhân ~12K follower — cả hai đều SAI với số liệu cũ ~299 đã lưu (đánh dấu nghi vấn từ trước) → đã sửa
- Đối thủ thật: Thỏ MakeUp 481K (2.894 review, có review 1 sao thật nêu giáo viên phụ dạy qua loa), Hiền Mew/Mewart 231K (thông điệp "hiểu chính mình" — TRÙNG LÕI với tagline AMI đã chốt), Phương Kòi 192K (10 năm, "tone hồng tự nhiên"), Phạm Quỳnh Chi 170K (100% online, UGC hiệu quả), Gạo Nâu 25K (đúng tên ngách "Personal Makeup", đang mở rộng TP.HCM)
- Phát hiện quan trọng nhất: tagline chính thức AMI "Hiểu vẻ đẹp riêng - Tự tin làm đẹp mỗi ngày" trùng lõi với bài đăng của đối thủ lớn hơn ~70 lần follower — cần lớp định vị cụ thể hơn ("học trực tiếp với founder tại tỉnh, không qua giáo viên phụ") thay vì chỉ dựa vào khẩu hiệu cảm xúc
- Saved as: [[nang-luc/out-2026-07-12-phan-tich-thi-truong-doi-thu-ami]]
- Pages updated: [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]] (sửa follower), [[index]]
- Mâu thuẫn: đã sửa (follower cũ ~299 sai). Còn tồn: SĐT trên trang cá nhân Thuý (0911148995) khác hotline chính thức (0327.355.595), chưa xác nhận

## [2026-07-12] query | Hồ sơ khách hàng mục tiêu AMI theo cấu trúc mẫu Hằng China
- Dựng theo đúng cấu trúc phương pháp luận file mẫu (chân dung 7 tiêu chí → phân khúc phụ → bản đồ đau/sướng+JTBD → tiếng nói khách hàng → hành trình mua → phản đối → đối thủ → offer/content → khoảng trống dữ liệu) nhưng 100% nội dung là dữ liệu thật AMI, không sao chép nội dung Hằng China
- 3 phân khúc phụ dựng composite, neo vào nhóm câu hỏi/insight thật đã cào (không neo vào cá nhân có tên như FB-xx của Hằng China vì AMI chưa có testimonial)
- Ghi rõ khoảng trống lớn nhất: AMI chưa từng thu thập testimonial có tên dù ước tính đã phục vụ ~200 học viên — đề xuất là việc ưu tiên số 1
- Saved as: [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]]
- Sources drawn from: [[nang-luc/out-2026-07-12-phan-tich-thi-truong-doi-thu-ami]], [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/2026-06-30-10-bong-toi-anh-sang-makeup]], [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/2026-07-11-dinh-vi-thuong-hieu-ami-chinh-thuc]]

## [2026-07-12] ingest | Bổ sung hồ sơ khách hàng — case thật đầu tiên + đóng nghi vấn hotline
- Thuý xác nhận trực tiếp qua chat: hotline đúng duy nhất là 0327355595 (đóng nghi vấn số 0911148995 trên trang cá nhân — chỉ là số cũ không dùng kinh doanh)
- Case thật (chưa xin phép trích dẫn công khai, nhưng là bằng chứng hành vi thật đầu tiên): khách gần nhất đăng ký Makeup Cá Nhân là khách dịch vụ cô dâu cũ quay lại vì thích — mở ra phân khúc B4 "khách dịch vụ cũ quay lại học"; khách gần nhất đăng ký Makeup Chuyên nghiệp thích phong cách dạy của Thuý
- Phản hồi khách hay gặp theo lời Thuý: khen "makeup đẹp", khen "makeup đẹp tự nhiên" (khớp định vị đã chốt), có khách nói sẽ quay lại — thêm vào ngân hàng câu chốt
- Pages updated: [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]], [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]]
- Mâu thuẫn: none

## [2026-07-12] lint | Sửa nhận định sai "AMI chưa có testimonial" sau khi xem ảnh chụp Messenger thật
- Thuý gửi 6 ảnh chụp: 2 đoạn hội thoại Messenger thật (Lưu Kim Ngân "quả nền bám hơn bê tông", Mỹ Tiên Huỳnh "boók theo tiktok lại gặp đc em có tâm" + tự hẹn quay lại) và 3 ảnh testimonial ĐÃ ĐƯỢC THIẾT KẾ SẴN (khung hồng, 5 sao, logo "Thuý Trần Makeup Academy") + 1 bình luận công khai thật (Hằng Trần khen đùa "chị chụp e ko đẹp bằng bên ngoài")
- Sửa lại kết luận sai trong [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]] Chương 9: KHÔNG phải "AMI chưa có testimonial" — Thuý đã có sẵn tư liệu thật + đã thiết kế xong 3 ảnh, chỉ chưa đăng công khai lên fanpage
- Phát hiện cần xác nhận: 3 khung testimonial dùng tên "Thuý Trần Makeup Academy" khác với "Ami Makeup Academy" đang dùng trên fanpage chính — chưa rõ là tên cũ, kênh riêng, hay chưa thống nhất
- Pages updated: [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]]
- Mâu thuẫn: đã sửa (nhận định "0 testimonial" trong bản trước là sai, do lúc đó chỉ xem được số review công khai trên fanpage, chưa biết Thuý đã có tư liệu riêng trong Messenger)

## [2026-07-12] query | Bổ sung lý do chiến lược ưu tiên Makeup Cá Nhân vào hồ sơ khách hàng
- Thuý xác nhận trực tiếp lý do kinh doanh: Makeup Cá Nhân được ưu tiên vì CÓ THỂ CHUYỂN GIAO (không cần Thuý trực tiếp đứng lớp), tệp khách dễ tính hơn — khác Makeup dịch vụ cô dâu (khó chuyển giao vì khách book vì uy tín/phong cách cá nhân Thuý, bị giới hạn cứng bởi ngày đẹp cưới hỏi) và Đào tạo Chuyên nghiệp (chu kỳ dài, cần thời gian luyện tập thực chiến, không phải học 60 buổi là ra nghề)
- Thêm mục "Vì sao ưu tiên dòng Makeup Cá Nhân" vào đầu hồ sơ + hàm ý chiến lược: định vị "học trực tiếp với founder" là lợi thế giai đoạn đầu, không phải mô hình vận hành dài hạn nếu mục tiêu là mở rộng quy mô
- Phát hiện mâu thuẫn nhỏ về độ tuổi: hồ sơ doanh nghiệp chốt 22-40 (2026-07-12), nhưng cùng ngày khi mô tả cho hồ sơ này Thuý nói 22-35 — đã đánh dấu 🟡 cần Thuý xác nhận lại, tạm dùng 22-35 vì là phát biểu gần nhất
- Pages updated: [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]]
- Mâu thuẫn: độ tuổi 22-35 vs 22-40 — ĐÃ CHỐT cùng ngày: giữ 22-40 (Thuý chủ đích không rút hẹp, muốn mở rộng tệp khách)

## [2026-07-12] query | Thêm Phần VII Value Proposition Canvas vào hồ sơ khách hàng AMI
- Thuý gửi ảnh bìa sách "Value Proposition Design" (Osterwalder/Pigneur/Bernarda/Smith, dịch "Thiết kế Giải pháp Giá trị"), yêu cầu dùng tri thức cuốn sách vuốt lại hồ sơ khách hàng cho chuẩn/chuyên nghiệp hơn
- Không đọc trực tiếp nội dung sách (chỉ có ảnh bìa) — áp dụng khung Value Proposition Canvas theo hiểu biết chuẩn phương pháp luận (Strategyzer, công khai rộng rãi), tổ chức lại dữ liệu Jobs/Pains/Gains đã có ở Ch6-7 thành đúng cấu trúc chuẩn: Customer Profile (Jobs phân Functional/Social/Emotional, Pains phân Obstacle/Risk/Undesired outcome + mức độ Extreme/Moderate, Gains phân Required/Expected/Desired/Unexpected) đối chiếu Value Map (Products/Pain Relievers/Gain Creators) rồi chấm Fit Analysis
- Phát hiện qua Fit Analysis: 3 pain ở mức Extreme (#1 sợ lớp đông, #2 mất niềm tin, #5 sợ không năng khiếu) đều thuộc nhóm niềm tin/tâm lý chứ không phải kỹ thuật — củng cố thêm kết luận đã có ở Chương 1; fit yếu nhất là Pain #2 (chưa có Pain Reliever bằng chứng xã hội — khớp đúng khoảng trống testimonial ở Ch9); đề xuất mới: thiết kế "báo cáo phân tích khuôn mặt/da cá nhân" tặng học viên để biến Gain "Unexpected" thành sản phẩm hữu hình
- Pages updated: [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]], [[index]]
- Mâu thuẫn: none

## [2026-07-12] query | Đào sâu hồ sơ + xuất PDF (Thuý yêu cầu bản giống Hằng China, 120 trang)
- Thuý yêu cầu file PDF giống mẫu Hằng China, phân tích thật sâu — đã mở rộng hồ sơ: thêm Ch3.1 (đại dương xanh — hai bờ tự học/thuê thợ), Ch6.1 (bảng điểm ảnh hưởng nỗi đau, mô hình định tính), Ch7.1 (Value Equation Hormozi chấm 4 yếu tố), vignette "một buổi học điển hình" cho B1-B4, mở rộng 8→13 nhóm nội dung có hook cụ thể, thêm Phụ lục E (khung lý thuyết) và F (mục lục nguồn)
- Máy không có pandoc/python/puppeteer — dựng pipeline mới: Node + package `marked` chuyển Markdown→HTML có style in ấn, rồi dùng `chrome.exe --headless --print-to-pdf` xuất PDF cuối cùng
- Kết quả: PDF 28 trang (kiểm chứng qua pdftotext, tiếng Việt hiển thị đúng dấu) — KHÔNG đạt 120 trang như Hằng China vì lý do trung thực dữ liệu: Hằng China có 180k cộng đồng + 14 testimonial thật tích luỹ nhiều năm để phân tích sâu, AMI là mô hình mới hơn nhiều, không có khối dữ liệu tương đương — đã giải thích rõ với Thuý, không nhồi/bịa để đạt số trang
- File PDF: [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]].pdf (cùng thư mục với bản .md)
- Pages updated: [[nang-luc/out-2026-07-12-ho-so-khach-hang-muc-tieu-ami]]
- Mâu thuẫn: none

## [2026-07-12] build | Hệ thống backup tự động vault lên GitHub
- Yêu cầu: bảo vệ toàn bộ vault khỏi mất dữ liệu, tự động không cần nhớ backup tay
- Đã cài: Scheduled Task Windows "SecondBrain GitHub Backup" (mỗi 2 giờ, LogonType Interactive) chạy `scripts/github-auto-backup.ps1` — git add → commit → pull --rebase --autostash → push lên repo `AMI-MAKEUP`
- Đã test 2 lần thủ công: 1 lần có thay đổi thật (push OK, commit `4de59c5`), 1 lần cây sạch (bỏ qua đúng). Còn tồn: chưa xác minh 100% tự kích hoạt đúng lịch 2h/lần khi chạy nền thật
- Saved as: [[vat-chat/2026-07-12-backup-tu-dong-github]]
- Pages updated: [[index]]
- Mâu thuẫn: none
- Lưu ý: entry này ghi bù — hệ thống được cài ở phiên làm việc trước, bị bỏ sót chưa ghi log/Lark Base lúc đó, nay bổ sung theo đúng quy tắc thường trực ở [[reference-crm-thuy-thuy-base-token]]

## [2026-07-12] run | Kích hoạt lần đầu skill "Gợi ý xu hướng Douyin" — quét mẹo makeup cá nhân
- Yêu cầu: cào video Douyin về makeup cá nhân/mẹo trang điểm đang nhiều lượt xem, nhiều tương tác
- Skill đã tồn tại từ 2026-07-04 nhưng chưa từng chạy thật (config.local.json thiếu BASE_TOKEN) — đã điền BASE_TOKEN thật (`Wtn8bQ4sLanhfWsHrZ9jmbmypeH`, cùng Base hệ thống "Đăng Reel"), đổi KEYWORDS sang tập trung mẹo/tip makeup cá nhân thay vì cô dâu (`化妆技巧`, `化妆教程`, `日常化妆`, `新手化妆` — bỏ `新娘化妆` cô dâu vì không khớp định hướng 2026 chỉ làm makeup cá nhân)
- Chạy thật (không chỉ dry-run): quét 2 từ khoá `化妆教程` (tutorial) và `日常化妆` (daily makeup) qua Apify Douyin Search Scraper, sort `most_liked`, 1 tuần gần nhất — chỉ lấy hashtag + số liệu lượt thích, KHÔNG tải video/ảnh bìa/caption gốc (đúng nguyên tắc bản quyền của skill)
- Ghi 2 dòng số liệu vào bảng "Ý tưởng Douyin" (Base `Wtn8bQ4sLanhfWsHrZ9jmbmypeH`, table `tblsvd7sgGlxpT3s`): "化妆教程" (234.612 lượt thích, hashtag hot: tutorial người mới, biến hình khuôn mặt vuông/tròn, makeup giờ học sáng sớm), "日常化妆" (242.803 lượt thích, hashtag hot: makeup hàng ngày kiểu Hàn, format vừa trang điểm vừa tâm sự/immersive)
- Đã tự viết 2 ý tưởng quay video GỐC (không dịch/mô tả video gốc) dựa theo xu hướng hashtag, ghi vào cột "Ý tưởng quay video gốc": (1) "Trang điểm 5 phút cho buổi sáng vội" — kèm mẹo chọn tông theo khuôn mặt vuông/tròn; (2) "Vừa trang điểm đi làm vừa tám chuyện nghề" — format immersive/talk-through, kèm mẹo giữ lớp nền bền
- Đã kiểm tra bảng "Công cụ AI" (Base CRM `O2qIbEaIYabXEGsW6Dzjs0LCpZg`, table `tbliXt0oEV91oBhJ`) — đã có sẵn dòng mô tả skill này từ trước, không cần thêm dòng mới
- Mâu thuẫn: none

## [2026-07-13] research | Tìm kênh Douyin phong cách "hook dồn dập" + kho Hook/Insight/Vấn đề
- Yêu cầu tiếp nối: Thuý muốn tìm kênh Douyin makeup cá nhân có phong cách nhiều hook giữ chân người xem (không phải kênh cụ thể "Thỏ Makeup", mà là kiểu phong cách) — đã hỏi rõ trước khi làm (AskUserQuestion): xác nhận không có kênh tham chiếu cụ thể, và hook lấy về phải ở dạng ĐÃ PHÂN LOẠI/DIỄN GIẢI LẠI (không sao chép nguyên văn caption gốc — đúng giới hạn bản quyền)
- Quét 48 video top (4 từ khoá đã dùng ở lần trước, sort most_liked, 1 tuần) qua Apify, lần này lấy thêm field `authorMeta` (tên kênh, follower, secUid) và đọc nội dung `text`/`caption` CHỈ để phân tích pattern nội bộ (không lưu trữ lâu dài, không trích dẫn nguyên văn ra ngoài) — xoá file tạm chứa caption gốc sau khi phân tích xong
- Tổng hợp 34 kênh duy nhất, liệt kê 12 kênh mạnh nhất (theo tổng lượt thích trong mẫu) kèm follower + link profile + đặc điểm định vị (rút từ bio, không phải caption) — đã đưa vào chat cho Thuý xem
- Rút ra 9 KIỂU hook lặp lại nhiều nhất (không dịch nguyên văn, tự viết lại pattern + ví dụ tiếng Việt riêng): cam kết thời gian ngắn, gọi tên đúng vấn đề khuôn mặt/da, "đã ra rồi/có sẵn", nhắm đối tượng cực hẹp, cảm giác vỡ oà/khai sáng, con số xã hội gây tò mò, thử thách trước-sau, bí mật ngành, tâm sự/immersive
- Theo yêu cầu tiếp theo của Thuý ("liệt kê lại các câu hook, insight, vấn đề vào lark base"), đã tạo bảng mới **"Hook & Insight Douyin"** (`tblA3og4w9etMZnF`, cùng Base `Wtn8bQ4sLanhfWsHrZ9jmbmypeH`) — cột: Kiểu hook / Insight - vì sao hiệu quả / Vấn đề nhắm tới / Ví dụ hook tự viết / Nguồn tham khảo / Ngày thêm — nạp đủ 9 dòng tương ứng 9 kiểu hook
- Danh sách 12 kênh (tên/follower/link) CHƯA lưu vào Base — Thuý chưa xác nhận có muốn lưu thêm không, chỉ hỏi lưu phần hook/insight/vấn đề
- Mâu thuẫn: none

## [2026-07-13] build | Bảng "Kênh tham khảo Douyin" — phân loại 12 kênh theo quy mô + phong cách
- Tiếp nối log ngay trên: Thuý xác nhận "ok phân loại riêng nhé" — lưu danh sách 12 kênh vào 1 bảng riêng (tách khỏi bảng "Hook & Insight Douyin"), có phân loại thay vì liệt kê phẳng
- Tạo bảng mới "Kênh tham khảo Douyin" (`tblZSpgtkvnU9gNV`, cùng Base `Wtn8bQ4sLanhfWsHrZ9jmbmypeH`) — cột: Tên kênh / Phân loại (single-select 8 giá trị: Nhỏ-viral nhờ hook, Nhỏ/Vừa-định vị theo vấn đề da/mặt, Vừa-giọng thân mật, Vừa-dạy kèm riêng, Lớn-nội dung ổn định, Lớn-định vị gần gũi/tự học, Lớn-1 video viral đột biến) / Followers / Tổng lượt thích (mẫu quét) / Đặc điểm định vị / Link kênh / Ngày thêm
- Nạp đủ 12 dòng đã liệt kê ở chat lần trước, gán phân loại theo quy mô follower + phong cách định vị rút từ bio kênh
- Mâu thuẫn: none

## [2026-07-13] research | Mở rộng bảng "Kênh tham khảo Douyin" — thêm 10 kênh makeup cá nhân
- Yêu cầu tiếp nối: Thuý muốn "cào tiếp những kênh liên quan đến makeup cá nhân nữa"
- Quét 4 từ khoá MỚI (chưa dùng ở 2 lần trước): 化妆博主 (blogger makeup), 淡妆教程 (trang điểm nhẹ), 伪素颜 (mặt mộc giả/tự nhiên), 约会妆容 (makeup hẹn hò) — 37 video top (sort most_liked, 1 tuần) qua Apify, loại trùng với 12 kênh đã lưu trước đó
- Chọn 10 kênh mạnh nhất trong số kênh mới (theo tổng lượt thích mẫu), thêm vào đúng bảng "Kênh tham khảo Douyin" (`tblZSpgtkvnU9gNV`) đã có — cùng schema/phân loại như lần trước: 蠕蠕在旋转跳跃 (viral đột biến, 130k thích/1 video), 少女总裁 & 秦苒ran_ (kênh lớn ổn định), 会呆呆 & 小乖张 (giọng thân mật/gần gũi), 我是当天才的料 (kênh siêu nhỏ, tên kênh chính là hook), 肉骨头 & ISHS施施 & YueYue_ & 海～ (định vị hẹp theo vấn đề da/mặt cụ thể)
- Bảng "Kênh tham khảo Douyin" hiện có tổng **22 kênh** (12 + 10)
- Mâu thuẫn: none

## [2026-07-13] tư vấn + research | Đổi chiến lược quét sang theo nỗi đau khách AMI, không quét từ khoá makeup chung
- Thuý hỏi xin tư vấn "nên đi cào như nào cho sát" — đã chỉ ra vấn đề: từ khoá chung (化妆技巧, 化妆教程...) ra lẫn cả kênh bán hàng/mega-influencer không hợp mô hình AMI (đào tạo, không bán mỹ phẩm); đề xuất quét theo đúng nỗi đau đã biết của khách AMI (sợ không năng khiếu, muốn học 1 kèm 1, tự học từ 0) và ưu tiên lọc kênh kiểu "dạy 1 kèm 1/tự học từ 0" — Thuý đồng ý ("ok")
- Quét 4 từ khoá mới bám sát insight: 零基础化妆 (học từ 0 nền tảng), 化妆小白 (gà mờ trang điểm), 一对一化妆教学 (dạy 1 kèm 1), 手残党化妆 (hội tay vụng) — 45 video top qua Apify, loại trùng 22 kênh đã lưu
- Phát hiện quan trọng: **仟仟教化妆** (222k follower) — makeup artist cấp quốc gia, có ĐỦ 3 loại lớp (từ 0 nền tảng / hình ảnh cá nhân / nâng cao kỹ thuật nghề) — cấu trúc sản phẩm gần giống AMI nhất trong toàn bộ kênh đã quét từ trước tới nay; và phát hiện 1 FORMAT nội dung lặp lại ở 2 kênh nhỏ (西西爱化妆, 一只荔枝) — "nhật ký hành trình tự học" (ghi lại từng lần trang điểm hỏng/tiến bộ), khớp trực tiếp insight "sợ không có năng khiếu" đã có trong hồ sơ khách AMI
- Thêm 4 nhóm phân loại mới vào field "Phân loại" (field-update, giữ nguyên 8 nhóm cũ + thêm): "Nhỏ - nhật ký hành trình tự học", "Nhỏ - dạy 1 kèm 1", "Vừa - mô hình đào tạo giống AMI (có lớp học thật)", "Vừa - giọng điệu thẳng thắn/phê bình"
- Nạp 6 kênh mới vào bảng "Kênh tham khảo Douyin": 仟仟教化妆, 西西爱化妆, 小房, 化妆师梦依, 退休老赵(化妆师), 一只荔枝（练妆日记）— bảng hiện có tổng **28 kênh**
- Mâu thuẫn: none

## [2026-07-13] lint | Kiểm tra & liên kết trang wiki (Obsidian graph)
- Yêu cầu: kiểm tra biểu đồ Obsidian (mạng liên kết wiki), đảm bảo các trang liên kết với nhau
- Quét toàn bộ 189 trang wiki bằng script Node đếm inbound/outbound `[[...]]`: phát hiện 50 trang mồ côi (không có link trỏ tới) và 59 liên kết hỏng (trỏ tới trang không tồn tại)
- Đã hỏi Thuý ưu tiên sửa nhóm nào — chọn: đưa 40 nguồn `sources/hoangminhhoaoffical/` (transcript kênh Hoàng Minh Hoá, sưu tầm qua [[sources/2026-suu-tam-kien-thuc-skill]]) vào index
- Đã tạo [[sources/hoangminhhoaoffical/index]] — chỉ mục 40 video nhóm theo 9 chủ đề (Bán hàng/Marketing/Lãnh đạo/Khởi nghiệp/Tư duy-Thành công/...), và thêm 1 dòng trỏ tới trang này trong [[index]]
- Kết quả: orphan pages giảm 50 → 9 (9 trang còn lại là lỗi tên file/nội dung riêng lẻ, chưa xử lý)
- Còn tồn đọng (chưa sửa, đã báo Thuý): 59 liên kết hỏng — đáng chú ý là các link `[[project-...]]`/`[[reference-...]]` trong `log.md`/`index.md`/vài trang `nang-luc/` đang trỏ nhầm sang tên file bộ nhớ (memory) thay vì trang wiki thật; `[[entities/huyen-nguyen]]` bị trích 6 lần nhưng chưa có trang; 9 trang mồ côi còn lại (2 file bị lỗi tên khi tạo)
- Mâu thuẫn: none

## [2026-07-13] lint | Sửa toàn bộ liên kết hỏng & trang mồ côi còn lại
- Tiếp nối lint trước đó (xem log ngay trên) — Thuý xác nhận "có làm đi", sửa hết phần còn tồn đọng
- Xoá 1 file trùng lặp 100% nội dung: `skills/name_ Tư duy thành công...md` (tên bị lỗi do export sai) — giữ lại bản tên sạch [[skills/tu-duy-thanh-cong-va-quan-ly-thoi-gian]]
- Đổi tên 2 file lỗi định dạng: `AMI_Quy_Trinh_Tu_Van_Chot_Sale.docx (1).md` → [[skills/ami-quy-trinh-tu-van-chot-sale]], `Bo-quy-trinh-SIPOC-cua-hang-vay-cuoi.md` → [[skills/bo-quy-trinh-sipoc-cua-hang-vay-cuoi]]
- Tạo 2 trang entity: [[entities/huyen-nguyen]] (giảng viên nội tâm, được 6 trang nhắc tới nhưng chưa có trang), [[entities/cau-lac-bo-truong-sinh-an-lac]] (trang tồn tại nhưng trống — điền nội dung từ ngữ cảnh các trang liên quan)
- De-link 24 tham chiếu sai định dạng (không sửa log.md — append-only): các link `[[project-ami-so-lieu-thuc-te]]`/`[[project-dinh-huong-2026]]`/`[[reference-crm-thuy-thuy-base-token]]` (tên file bộ nhớ, không phải trang wiki) chuyển thành text in nghiêng; `[[entities/thuy-tran]]`→"Thuý Trần" (chủ nhân wiki, không cần trang entity riêng); `[[entities/domain]]`→text thường (không phải entity cụ thể); `[[sources/2026-thau-hieu-noi-tam-buoi-1]]`→ghi rõ "chưa ingest vào wiki" (buổi 1 không có raw file, không thể tạo); `[[skill ads-agent]]`→format lại đúng quy ước backtick; `[[concepts/xu-ly-phan-doi]]`→text thường (data gap đã biết)
- Nối 8 trang mồ côi còn lại vào [[index]] và các trang liên quan: [[analyses/base-structure-crm-thuys-makeup]], [[nang-luc/2026-06-30-pheu-makeup-ca-nhan-ami]] (liên kết chéo với bản `-simple`), [[nang-luc/2026-suu-tam-kien-thuc]] (liên kết với [[sources/2026-suu-tam-kien-thuc-skill]] và [[sources/hoangminhhoaoffical/index]]), [[nang-luc/out-2026-07-02-sop-training-ai-thuytran-makeup]], [[pham-chat/2026-tong-hop-pham-chat]], và 3 trang skills đã đổi tên ở trên (thêm mục mới "Tài liệu tham khảo khác" trong [[skills/index]])
- Kết quả cuối: **0/190 trang mồ côi** (từ 50), **0 liên kết hỏng thật sự** ngoài `log.md` (append-only, giữ nguyên lịch sử) và 4 link trỏ tới file `.html` công cụ tính toán có thật (`out-2026-07-10-may-tinh-chien-luoc-pheu-san-pham.html`, `out-2026-07-11-may-tinh-ngan-sach-quang-cao.html`) — không phải lỗi, chỉ là ngoài phạm vi quét .md
- Mâu thuẫn: none

## [2026-07-13] ingest | Sưu tầm kênh @longguru (Phạm Thành Long) — 37 video bị sót
- Thuý hỏi lại: "tôi nhớ có đi cào thêm tri thức của long guru mà sao không thấy ở đây" — đúng, kiểm tra lại phát hiện batch @longguru đã được skill sưu-tầm-kiến-thức collect + consolidate (viết dàn ý, phân loại 9 chủ đề) xong ngày 2026-07-11 (xem `_suu_tam_log.txt`), nhưng chưa từng được đưa vào wiki
- Nguyên nhân gốc: skill lưu kết quả tại `D:\Trí Tuệ Uyên Nhiên\raw\Tri Thức Sưu Tầm\` — một thư mục riêng NẰM NGOÀI vault wiki hiện tại (`D:\BỘ NÃO THỨ 2\`). Batch hoangminhhoaoffical (40 video, 2026-07-09) từng được copy thủ công vào wiki ở phiên trước đó; batch longguru (37 video, 2026-07-11) bị bỏ sót, không có ai copy tiếp
- Đã copy 37 file từ kho thô vào [[sources/longguru/index]] (giữ nguyên nội dung dàn ý gốc, chỉ thêm dòng `category` vào frontmatter cho khớp định dạng hoangminhhoaoffical), nhóm theo 6 chủ đề đang có (02 Tài chính=3, 03 Bán hàng=3, 04 Marketing-MXH=5, 06 Khởi nghiệp-Kinh doanh=19, 08 Tư duy-Thành công=3, 09 Khác=4) — 3 file là bài hát/vlog cá nhân, không phải bài giảng, đã ghi chú rõ
- Liên kết: [[index]] (thêm entry), [[sources/2026-suu-tam-kien-thuc-skill]] (thêm cảnh báo về lỗi đường dẫn), [[nang-luc/2026-suu-tam-kien-thuc]] (cập nhật nguồn)
- ⚠️ Vấn đề cần Thuý quyết định: script skill vẫn đang trỏ vào thư mục cũ ngoài wiki — nếu không sửa, lần collect tiếp theo sẽ lặp lại y hệt lỗi này (nội dung nằm ngoài wiki, không ai biết). Đề xuất 2 hướng: (1) sửa `collect.ps1`/`classify.ps1` để lưu thẳng vào `D:\BỘ NÃO THỨ 2\wiki\sources\<kênh>\`, hoặc (2) giữ nguyên quy trình nhưng thêm bước "đồng bộ vào wiki" bắt buộc cuối mỗi lần consolidate
- Mâu thuẫn: none

## [2026-07-13] fix | Skill sưu-tầm-kiến-thức — chuyển kho lưu vào trong wiki
- Theo lựa chọn của Thuý ("Sửa script trỏ thẳng vào wiki") — sửa tận gốc để lần collect tiếp theo không lặp lại lỗi bỏ sót batch @longguru
- Sửa `collect.ps1` và `classify.ps1` (tại `C:\Users\Admin\.claude\skills\suu-tam-kien-thuc\scripts\`): biến `$kb` đổi từ `D:\Trí Tuệ Uyên Nhiên\raw\Tri Thức Sưu Tầm` (ngoài wiki) → `D:\BỘ NÃO THỨ 2\wiki\sources` (trong wiki) — không đổi logic script, chỉ đổi gốc lưu
- Copy `_suu_tam_log.txt` cũ sang `wiki\sources\_suu_tam_log.txt` để giữ liên tục lịch sử collect/consolidate
- Cập nhật `SKILL.md`: ghi rõ cảnh báo lỗi cũ + đường dẫn mới, thêm **bước 5 bắt buộc "xuất bản vào wiki"** vào quy trình CONSOLIDATE (copy file đã classify sang layout phẳng `wiki/sources/<kênh>/*.md` + category frontmatter + cập nhật index.md kênh + [[index]] gốc + ghi log) — đây chính là bước đã bị bỏ sót ở batch longguru, nay ép thành bước bắt buộc để không quên nữa
- yt-dlp.exe vẫn để nguyên tại `D:\Trí Tuệ Uyên Nhiên\.tools\` (chỉ là tool tải về, không phải tri thức, không cần chuyển)
- Lưu ý cấu trúc mới: lần COLLECT/CONSOLIDATE tiếp theo sẽ tạo `wiki\sources\<kênh>\videos\_inbox\` và `videos\<NN — chủ đề>\` — đây là **thư mục tạm**, khác với layout phẳng đã xuất bản (`wiki\sources\<kênh>\*.md` + `index.md`) của 2 batch hiện có; cần làm bước 5 để chuyển từ tạm sang chính thức
- Mâu thuẫn: none

## [2026-07-13] cleanup | Xoá thư mục thô cũ D:\Trí Tuệ Uyên Nhiên
- Trước khi xoá, xác minh bằng script so khớp `video_id`: 77/77 video (40 hoangminhhoaoffical + 37 longguru) đã có mặt đầy đủ trong wiki, không thiếu file nào — an toàn để xoá bản gốc
- Phát hiện + sửa 1 rủi ro trước khi xoá: `collect.ps1` còn phụ thuộc `yt-dlp.exe` nằm trong đúng thư mục định xoá (`D:\Trí Tuệ Uyên Nhiên\.tools\`), và code tự tải lại không tạo thư mục cha trước — nếu xoá ngay sẽ hỏng lần chạy tiếp theo. Đã chuyển yt-dlp.exe sang `C:\Users\Admin\.claude\skills\suu-tam-kien-thuc\tools\` (cạnh skill, không phụ thuộc ổ đĩa/thư mục nào khác), sửa `collect.ps1` trỏ đúng và tự tạo thư mục nếu thiếu
- Đã xoá `D:\Trí Tuệ Uyên Nhiên\` (raw hoangminhhoaoffical + longguru + _suu_tam_log.txt cũ + .tools) theo xác nhận của Thuý
- Theo yêu cầu Thuý ("từ giờ đi cào xong nạp vào wiki luôn"): từ lần "đi sưu tầm" tiếp theo, `collect.ps1`/`classify.ps1` ghi thẳng vào `wiki\sources\<kênh>\videos\_inbox\` rồi `videos\<NN chủ đề>\` — không còn thư mục ngoài wiki nào để nội dung "mất tích" nữa. Bước viết dàn ý (cần đọc hiểu) và bước gộp phẳng+index vẫn cần Claude làm thủ công trong phiên, nhưng nội dung đã nằm sẵn trong wiki từ bước tải đầu tiên nên không còn nguy cơ thất lạc ra ngoài
- Mâu thuẫn: none

## [2026-07-13] query | Phân tích khoảng trống nội dung Facebook Reels — Thỏ MakeUp Hà Nội & Phương Kòi Makeup
- Yêu cầu: đóng vai chuyên gia chiến lược nội dung, phân tích 2 fanpage đối thủ (makeup cá nhân, thị trường VN) để tìm khoảng trống nội dung Reels — 5 phần phân tích (độ phủ, nhu cầu qua bình luận, khoảng trống tìm kiếm, khoảng trống định dạng, cơ hội theo xu hướng) + xếp hạng 5 cơ hội
- Dữ liệu: lấy thật qua Apify `facebook-posts-scraper` (skill `lay-du-lieu-facebook`, dùng token trong [[apify-token]]) — 50 bài/kênh, metadata (caption/likes/shares/views/loại/thời gian), không lấy được bình luận (tool không hỗ trợ) — đã nêu rõ giới hạn, không bịa số liệu bình luận
- Phần xu hướng có tra cứu web thật (WebSearch): trend làm đẹp VN 2026 (Jelly Makeup, Lived-in Lips, Satin Skin...) và thuật toán Facebook Reels 2026 (ưu tiên nội dung gốc, video 15-30s, UTIS model)
- File tạo: [[nang-luc/out-2026-07-13-phan-tich-khoang-trong-noi-dung-reels-makeup]], [[entities/tho-makeup-ha-noi]] (mới), [[entities/phuong-koi-makeup]] (mới)
- Liên quan: [[nang-luc/2026-07-12-phan-tich-tuyen-noi-dung-tho-makeup]], [[nang-luc/out-2026-07-12-phan-tich-thi-truong-doi-thu-ami]]
- Sources drawn from: dữ liệu Apify thật (không phải wiki cũ)
- Mâu thuẫn: none

## [2026-07-13] create | Giáo án Khóa học Makeup Cá Nhân — 5 buổi (từ infographic)
- Yêu cầu: Thuý gửi 1 infographic (lộ trình 5 buổi: Nền tảng&Hiểu da / Kỹ thuật cơ bản / Nâng cao phong cách / Hoàn thiện&chuyên sâu / Thực hành&Toả sáng) và yêu cầu dựng thành giáo án giảng dạy + module bài giảng chi tiết
- Đã đối chiếu với khung 5 tầng giáo trình đã chốt trước đó ([[nang-luc/2026-07-11-sop-san-pham-va-giao-trinh-ami]] — SOP26) — 2 khung khớp gần như trực tiếp, dùng làm nguyên tắc giảng dạy xuyên suốt (HIỂU→PHÂN TÍCH→THỰC HÀNH→ỨNG DỤNG, 6 nhịp mỗi bài)
- Nội dung giáo án mỗi buổi: mục tiêu, phân bổ thời lượng theo phút, nội dung chi tiết từng module con, lỗi thường gặp cần sửa, bài tập về nhà, cách xử lý nỗi sợ ngầm "không có năng khiếu" (lấy từ insight thật [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]]), giọng điệu đứng lớp theo [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]]
- File tạo: [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]]
- Mâu thuẫn ban đầu (đã giải quyết): lộ trình ảnh là 5 buổi nhưng wiki cũ ghi VIP là "3 buổi 1-1, 3 triệu" — Thuý xác nhận trực tiếp đây là khóa **VIP 1-1, 5 buổi, giá 3.000.000đ** (giá giữ nguyên, chỉ số buổi VIP tăng từ 3→5; Basic nhóm 3-6 người vẫn 3 buổi/2 triệu, không đổi). Đã sửa lại bảng giá ở [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]] và tiêu đề/mô tả file giáo án cho khớp

## [2026-07-13] export | Giáo án Makeup Cá Nhân VIP 5 buổi — xuất bản .docx
- Yêu cầu: Thuý muốn file Word để in/gửi thay vì chỉ đọc markdown
- Dùng skill `docx` (docx-js) dựng file theo tông hồng AMI (heading màu hồng đậm C2185B, bảng thời lượng/dụng cụ có header hồng, callout box viền hồng cho các câu trích/nguyên tắc), có header/footer đánh số trang
- Không có LibreOffice/Python trên máy để render PDF xem trước theo đúng quy trình chuẩn của skill — đã kiểm tra thay thế: cấu trúc zip hợp lệ (unzip -l), toàn bộ text tiếng Việt có dấu được giữ nguyên trong `word/document.xml` (kiểm tra bằng script Node, không lỗi mojibake)
- File tạo: `wiki/nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi.docx` (song song với bản `.md` gốc)
- Mâu thuẫn: none

## [2026-07-13] sửa | Giáo án Makeup Cá Nhân VIP — đổi cách mở đầu Buổi 1
- Lý do: Thuý phản hồi phần mở đầu Buổi 1 cũ giả định sẵn 1 nỗi sợ ("không có năng khiếu") trong khi học viên VIP 1-1 mỗi người có vấn đề khác nhau — muốn mở đầu là trò chuyện lắng nghe để hiểu đúng vấn đề & mong muốn thật của từng người, không áp 1 kịch bản trấn an cố định
- Đã sửa: mục "Xử lý nỗi sợ ngầm..." trong Tổng quan → đổi thành "Mở đầu Buổi 1 — trò chuyện tìm hiểu vấn đề & mong muốn" (4 câu hỏi mở gợi ý + bảng 5 nhóm vấn đề/mong muốn thường gặp kèm cách phản hồi tương ứng — không phải danh sách đóng); bảng thời lượng Buổi 1 đổi mốc 0-10→0-15 (giãn thời gian trò chuyện thật, các mốc sau dịch theo, tổng vẫn 105 phút); câu tham chiếu "nhắc lại thông điệp Buổi 1" ở Buổi 5 và mục Ghi chú giáo viên đổi thành tham chiếu chung "đúng điều đã trò chuyện ở Buổi 1" thay vì câu cố định
- File cập nhật: [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]] (.md + .docx regenerate cùng script docx-js)
- Mâu thuẫn: none

## [2026-07-13] output | Ebook "7 Nỗi Sợ Khiến Phụ Nữ Mãi Chưa Dám Học Makeup Cho Chính Mình"
- Skill: hmh-mkt-ebook-sach-lat (giai đoạn 1-3: nghiên cứu → soạn markdown → build PDF)
- File: `output/2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan/7-noi-so-hoc-makeup-ca-nhan.pdf` (20 trang)
- Ghi chú: [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]]
- Grounded từ: [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]]
- Chưa làm: host PDF công khai (Novamira), sách lật Heyzine, đăng Wiki Academy — dừng chờ Thuý duyệt nội dung trước khi xuất bản
- Mâu thuẫn: none

## [2026-07-13] ingest | Ebook "Bí Mật Hệ Thống Tạo 1.000 Khách Hàng Đầu Tiên Không Cần Lộ Diện" (Hoàng Minh Hoá) — đóng gói thành SOP
- File: Lark Docx `Vfy0dOsoXoIshUxxyK6l1Jf8gHe` (đọc qua `lark-cli docs +fetch`) — cùng tác giả kênh sưu tầm [[sources/hoangminhhoaoffical/index]]
- Summary: [[sources/2026-07-13-co-may-marketing-an-danh]]
- Khoang pages: [[nang-luc/out-2026-07-13-sop-co-may-marketing-an-danh]] — đóng gói 9 chương thành SOP 8 bước dùng lại được (khách hàng/nỗi đau → hook → nội dung ebook → mockup → quảng cáo → leadpage → email automation → lộ trình 7 ngày), có ghi rõ liên kết tới hạ tầng kỹ thuật đã có sẵn ([[concepts/nha-may-pheu]]) và lead magnet AMI đang dở dang ([[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]] mới làm xong bước 1-3)
- New pages: [[entities/hoang-minh-hoa]] (tác giả, trước đó chỉ có source video chưa có entity riêng)
- Mâu thuẫn: none — nội dung là lớp chiến lược/copywriting, không trùng với [[concepts/nha-may-pheu]] (lớp hạ tầng kỹ thuật)

## [2026-07-13] create | Quy trình tạo Ebook cho bất kỳ vấn đề nào (bản rút gọn)
- Lý do: Thuý phản hồi SOP đầy đủ cả phễu (log ngay trên) không đúng ý — muốn riêng quy trình **tạo ebook**, tổng quát cho bất kỳ vấn đề/chủ đề nào, không cần phần ads/leadpage/email
- Tách Bước 1-3 (khách hàng/nỗi đau → hook 5 công thức → nội dung 5 phần → mockup) từ [[nang-luc/out-2026-07-13-sop-co-may-marketing-an-danh]] thành file riêng dạng điền-vào-chỗ-trống, có bảng công thức hook kèm ví dụ
- Đã đối chiếu với skill có sẵn `hmh-mkt-ebook-sach-lat` (pipeline 6 giai đoạn: nghiên cứu → soạn markdown → build PDF → host → Heyzine → xuất bản) — không trùng lặp: skill đó mạnh về kỹ thuật xuất bản nhưng Giai đoạn 1-2 (nghiên cứu/soạn) khá chung chung, thiếu công thức hook cụ thể và cấu trúc 5 phần chi tiết; quy trình mới này lấp đúng khoảng trống đó và bàn giao đầu ra sang Giai đoạn 3-6 của skill
- File tạo: [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]]
- File cũ [[nang-luc/out-2026-07-13-sop-co-may-marketing-an-danh]] giữ nguyên (vẫn đúng khi cần cả phễu đầy đủ), chỉ thêm 1 dòng ghi chú trỏ sang bản rút gọn
- Mâu thuẫn: none

## [2026-07-13] output | Ebook "10 Lý Do Khiến Bạn Tự Makeup Mãi Vẫn Chưa Đẹp" — áp dụng thật quy trình mới
- Bối cảnh: Thuý chọn chủ đề mới (khác 2 gợi ý ban đầu), qua AskUserQuestion xác nhận không dùng "checklist chọn nơi học" hay "bộ mỹ phẩm cơ bản" mà tự nêu chủ đề riêng — mình điền sẵn Bước 0 (vấn đề/khách hàng/giai đoạn/né tránh) + đề xuất 10 lý do grounded từ dữ liệu có sẵn, Thuý xác nhận "ok đấy" rồi viết trọn ebook
- Nguồn 10 lý do: 7 lý do kỹ thuật rút từ mục "Lỗi thường gặp cần sửa" trong [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]] (giáo án dạy thật), 3 lý do tâm lý/thói quen rút từ [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (câu nói thật, gồm bình luận TikTok 3.876 likes "khung mặt cj này đẹp sẵn r")
- Viết theo đúng [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]] (Bước 0-2) rồi build bằng skill `hmh-mkt-ebook-sach-lat`
- Sự cố kỹ thuật: script `build-pdf.mjs` luôn nhúng logo Mentorcamp thật nếu file ảnh tồn tại trong `assets/` dùng chung của skill, không có cờ tắt — thử di chuyển tạm 2 file ảnh dùng chung bị auto mode classifier chặn đúng (sửa tài nguyên chia sẻ ngoài phạm vi phiên này). Xử lý an toàn hơn: build PDF bình thường trước, `sed` xoá 6 thẻ `<img class="logo-img">` khỏi `.html` đã sinh (chỉ sửa file riêng của dự án), tự gọi lại Chrome headless `--print-to-pdf` trên HTML đã xoá logo — ra bìa chữ đúng thương hiệu AMI, đã chụp ảnh kiểm tra bìa/mục lục để xác nhận
- File tạo: [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]] (.md ghi chú + PDF 23 trang tại `output/2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep/`)
- Chưa làm: host PDF công khai (Novamira), sách lật Heyzine, đăng Wiki Academy — dừng chờ Thuý duyệt nội dung trước khi xuất bản
- Mâu thuẫn: none

## [2026-07-14] ingest | AMI Beauty Funnel Strategy (14 thẻ tư vấn AI, qua NotebookLM)
- Bối cảnh: Thuý tải nội dung vào notebook "AMI Makeup Funnel Strategy: From Lead Magnet to Student Conversion" trên NotebookLM (không phải tạo trong phiên Claude Code này), yêu cầu Claude Code "nhập dữ liệu" vào wiki. Phiên đăng nhập `nlm` đã hết hạn — chạy lại `nlm login` (browser thật) để lấy cookie mới trước khi đọc được nguồn qua MCP `notebooklm-mcp`
- File: nguồn "Giai đoạn 1" trong notebook `b7e1ec6d-2b38-401e-96a7-9bc0176261eb` (62.668 ký tự, lấy qua `source_get_content`)
- Summary: [[sources/2026-07-14-ami-beauty-funnel-strategy-notebooklm]]
- Khoang pages: [[nang-luc/2026-07-14-ami-beauty-funnel-90-ngay]] — phễu đầy đủ Ebook → Zalo AMI Beauty Club → Workshop → Khoá học, Content Engine 5 trụ cột, hệ thống quảng cáo thu data, lịch sản xuất content 30/90 ngày (15/07-15/11/2026), Giai đoạn 2 đề xuất AMI 5 Step Beauty Method
- Mâu thuẫn: none về số liệu — chỉ ghi chú (không phải mâu thuẫn thật) rằng ebook đề xuất "7 Lỗi..." là ý tưởng thứ 3, khác 2 ebook đã build ([[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]]); và phễu lead-gen này khác track với phễu up-sell dịch vụ [[nang-luc/2026-06-30-pheu-makeup-ca-nhan-ami]] — 2 phễu phục vụ 2 luồng doanh thu khác nhau, không cần chọn 1
- Việc cần Thuý quyết định: (1) có build ebook "7 Lỗi..." hay dùng lại 1 trong 2 ebook đã có làm mồi câu chính, (2) đối chiếu số buổi khoá Basic (3 buổi theo tài liệu này) vs giáo án đã có 5 buổi ở [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]], (3) kế hoạch bắt đầu 15/07 — tức ngay ngày mai tính từ lúc ingest

## [2026-07-14] output | 8 ý tưởng video từ phân tích đối thủ Lely Lan Huong
- Bối cảnh: Thuý gửi link Facebook đối thủ, dùng skill `lay-du-lieu-facebook` (Apify) cào 50 bài gần nhất (26/01-14/07/2026) → phân tích rút insight → brainstorm 8 ý tưởng video
- Insight đối thủ: 80% bài là Reels, engagement TB reel (~27.700) gấp ~3 lần bài ảnh (~9.900); mỏ vàng = chủ đề "má hồng" (4/10 bài top), format "siêu nhanh/chỉ 1 món", hook "đừng làm sai nữa / ước gì biết sớm hơn" tái dùng vẫn viral. Top bài 183k like / 22,6tr view
- Dữ liệu thô lưu: `C:\Users\Admin\.claude\skills\lay-du-lieu-facebook\scripts\facebook_analysis_lelylanhuong_2026-07-14.json` + `.csv`
- Nạp 8 dòng vào bảng "Kho Tiêu Đề Video - Makeup Cá Nhân" (tblyL3QtUIUePwq1) trong Base CRM Thúy Thúy — Số Video 51-58, thêm option Nguồn mới "Phân tích đối thủ (Lely Lan Huong, 07-14)" để phân biệt với nguồn ChatGPT cũ. Không gộp với bảng "Ngân Hàng Insight" (Thuý xác nhận giữ 2 bảng riêng: 1 cho nỗi đau/insight, 1 cho hook/tiêu đề)
- Mâu thuẫn: none

## [2026-07-14] output | Tạo bảng "Kho Data Đối Thủ (cào về)" + nạp 50 bài Lely Lan Huong
- Bối cảnh: Thuý muốn 1 bảng chuyên lưu tiêu đề/hook của đối thủ cào về. Đã kiểm tra bảng có sẵn "15.2 Phân Tích Bài Đăng Facebook" (đang chứa data đối thủ Hường Phiêu, cụm 15.x riêng) → Thuý chọn (AskUserQuestion) tạo bảng MỚI tổng quát đa đối thủ thay vì trộn vào 15.x
- Bảng mới: "Kho Data Đối Thủ (cào về)" (table_id `tbl2YiR4wcARM7wc`) trong Base CRM Thúy Thúy. 14 cột: Nội Dung/Hook, Đối thủ/Page (select), Nền tảng (select: FB/TikTok/IG), Loại Bài (Reel/Ảnh), Ngày Đăng, Lượt Xem, Lượt Thích, Số Share, Số Comment, Tương tác (Like+Share), Hashtags, Link, Ghi Chú Phân Tích, Ngày Cào
- Nạp 50 bài Lely Lan Huong (cào bằng skill lay-du-lieu-facebook/Apify, dữ liệu thô tại `facebook_analysis_lelylanhuong_2026-07-14.json`). Lưu ý: actor facebook-posts-scraper không trả số comment nên cột Số Comment để trống
- Mâu thuẫn: none

## [2026-07-14] ingest | SOP Phân Quyền Base Lark Vận Hành (2 tài liệu Lark Docx v1+v2)
- File: 2 Lark Docx do Thuý gửi link — `GgjKd8aceoS0uKxXPYej9Oabpac` (v1) và `JyHJd7ox7oE3NjxRbdBjKKnppE9` (v2, bản đầy đủ hơn, có thêm phân công người thật vào vai trò)
- Nội dung: nghiên cứu + kế hoạch phân quyền Base Lark vận hành công ty (63 bảng, app `Pq8vbFwEeajzdhsykL1jdRhnpkc`) cho 5 phòng ban qua tính năng "Quyền nâng cao" — lưu đồ 7 bước, ma trận phân quyền, 3 bảng tối mật (Lương/Giá vốn/Thu Chi), các bước gán quyền thực tế
- Summary: [[sources/2026-07-14-sop-phan-quyen-base-lark]]
- Khoang pages: [[nang-luc/2026-07-14-sop-phan-quyen-base-lark]]
- Trạng thái: kế hoạch chưa thực hiện — Thuý xác nhận chưa có nhân viên nên chưa cần làm ngay, để dành khi tuyển người
- Mâu thuẫn: none

## [2026-07-14] output | Cào & nạp 50 bài Reels đối thủ Linh Linh Makeup vào bảng "Kho Data Đối Thủ (cào về)"
- Nguồn: Apify `facebook-posts-scraper` qua skill `lay-du-lieu-facebook` (Node.js, token trong [[apify-token]]), URL https://www.facebook.com/linhlinhmakeup/reels/, 50 bài gần nhất (2026-05-31 → 2026-07-14)
- Dữ liệu thô: `facebook_analysis_linhlinhmakeup_2026-07-14.json` + `.csv` tại `C:\Users\Admin\.claude\skills\lay-du-lieu-facebook\scripts\`
- Đổ vào bảng "Kho Data Đối Thủ (cào về)" (`tbl2YiR4wcARM7wc`, Base CRM Thúy Thúy `O2qIbEaIYabXEGsW6Dzjs0LCpZg`) — thêm option mới "Linh Linh Makeup" vào field "Đối thủ / Page", batch-create 1 lần 50 record, xác nhận qua record-list filter (không gọi lại lệnh ghi để tránh trùng)
- Không tạo trang wiki riêng cho đối thủ này (đổi quy ước: từ nay chỉ đổ vào bảng Base, không tạo entity page per-đối thủ nữa, theo đúng cách đã làm với Lely Lan Huong cùng ngày)
- Nhận xét nhanh: bài đứng đầu "Xử Lý Rãnh Nhăn Vùng Dưới Mắt Khi Trang Điểm" đạt 2.065 likes/616 shares/193.776 views (~16 lần views TB) — nội dung kỹ thuật/giải quyết vấn đề tương tác cao hơn hẳn nội dung quảng bá khoá học (chênh 10-100 lần)
- Mâu thuẫn: none

## [2026-07-14] sửa | Đảo ngược kết luận sai "chỉ lưu Base, không lưu wiki" + thêm phân tích chuyên sâu
- Thuý sửa trực tiếp: TẤT CẢ dữ liệu cào về phải lưu SONG SONG cả wiki lẫn Lark Base, không phải chỉ 1 nơi (tôi đã suy đoán sai quy ước từ 1 lần quan sát — xem [[feedback-luu-du-lieu-cao-ve-wiki-va-base]])
- Thuý cũng yêu cầu: từ nay khi có dữ liệu cào về phải nhập vai chuyên gia hàng đầu phân tích sâu, không chỉ báo cáo số liệu thô — xem [[feedback-nhap-vai-chuyen-gia-phan-tich-du-lieu-cao]]
- Đã tạo lại [[entities/linhlinhmakeup]] (trang wiki đã xoá nhầm) + tạo mới [[entities/lelylanhuong]] (bù trang còn thiếu từ lần nạp Base trước đó cùng ngày)
- Tạo phân tích chuyên sâu [[nang-luc/out-2026-07-14-phan-tich-doi-thu-linhlinhmakeup]]: 3 trụ nội dung (kỹ thuật/feedback/quảng bá) chênh lệch hiệu suất 8-25 lần, bài outlier "rãnh nhăn" là mỏ vàng chưa khai thác, series celeb phụ thuộc độ trend nhân vật hơn kỹ thuật, đối chiếu quy mô 4 đối thủ, 5 cơ hội xếp hạng có tiêu đề gợi ý cho AMI
- File tạo/sửa: [[entities/linhlinhmakeup]], [[entities/lelylanhuong]], [[nang-luc/out-2026-07-14-phan-tich-doi-thu-linhlinhmakeup]]
- Mâu thuẫn: none
