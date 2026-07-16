---
title: Năng Lực — Skill Sao Chép Văn Phong
type: khoang
khoang: nang-luc
tags: [năng lực, công cụ, tự động hóa, content, văn phong, whisper]
created: 2026-07-16
updated: 2026-07-16
sources: [sao-chép-văn-phong/SKILL.md]
---

## [Năng Lực] Học Văn Phong Nhân Vật Để Viết Content

Skill `sao-chép-văn-phong` (`C:\Users\Admin\.claude\skills\sao-chép-văn-phong\`) — biến video/bài viết công khai của một nhân vật thành **hồ sơ văn phong** grounded-từ-bằng-chứng, rồi dùng hồ sơ đó viết content mới cho AMI đúng giọng điệu — không đạo văn nội dung, chỉ mượn cách nói.

### Kiến trúc

```
Link kênh YouTube / danh sách link Facebook-TikTok
        │
        ▼ (thu-thap-transcript.ps1 hoặc thu-thap-fb-tiktok.ps1)
Caption/mô tả (metadata công khai) + Lời nói trong video
        │   YouTube: phụ đề có sẵn qua yt-dlp
        │   FB/TikTok: caption qua yt-dlp + lời nói qua Whisper local (tools/ffmpeg + whisper-local)
        ▼
raw/van-phong/<slug>/*.txt  (tư liệu thô, immutable)
        │ (Claude đọc toàn bộ, áp khung 11 tiêu chí trong KHUNG-PHAN-TICH.md)
        ▼
wiki/nang-luc/kb-van-phong-<slug>.md  (hồ sơ văn phong, có trích dẫn ngắn làm bằng chứng)
        │ (khi viết content mới)
        ▼
Content AMI mượn văn phong + tự kiểm 11 tiêu chí
```

### Kỹ năng kỹ thuật

- Quét kênh YouTube (yt-dlp, dùng lại tool từ skill [[nang-luc/2026-suu-tam-kien-thuc]])
- Lọc video Facebook/TikTok theo lượt xem (ngưỡng tự tính median×2, hoặc Apify Facebook Page Scraper khi cần liệt kê cả trang)
- Chạy Whisper local (faster-whisper, model "small", CPU) để nghe-gõ-lại lời nói video FB/TikTok không có phụ đề sẵn — tải âm thanh tạm qua ffmpeg rồi xoá ngay sau khi có chữ, không giữ file gốc
- Nhận diện lỗi "ảo giác" của Whisper (bịa câu không có thật khi âm thanh không rõ) — loại bỏ trước khi đưa vào phân tích

### Kỹ năng phân tích & viết

- Khung 11 tiêu chí văn phong (dạng nội dung, từ vựng, cấu trúc câu, giọng điệu, xưng hô, hook, CTA, ví von, nhịp cảm xúc, tic riêng...) — mỗi tiêu chí bắt buộc có bằng chứng trích dẫn ngắn, không suy diễn
- **Tách đặc điểm status-dependent:** khi nhân vật gốc có vị thế/uy tín cao hơn AMI/Thuý (VD "master" có follower lớn), phải phân biệt đặc điểm dùng được ngay vs đặc điểm ăn theo uy tín có sẵn (VD tự gọi tên ngôi 3, giọng phê bình thẳng thắn) — không bê nguyên phần rủi ro khi chưa có vị thế tương đương (xem [[feedback-viet-content-theo-van-phong-hoc-duoc]])
- Viết content mới: nội dung/thông điệp luôn là sự thật của AMI, chỉ mượn cách nói; tự kiểm lại theo bảng đối chiếu tiêu chí trước khi giao bài

### Đã áp dụng cho

- **Hường Phiêu** (`makeup.hair.790`, 307K follower) — 11 video viral (81K-1.1M view), hồ sơ tại [[nang-luc/kb-van-phong-huong-phieu]], đã viết 3 mẫu content AMI tại [[nang-luc/out-2026-07-16-mau-content-ami-van-phong-huong-phieu]]

### Ranh giới đạo đức

Chỉ học cách nói (cấu trúc câu, nhịp điệu, từ vựng, tông giọng), không sao chép/đạo văn nội dung; không mạo danh nhân vật gốc; video/audio tải tạm cho Whisper bị xoá ngay sau khi có chữ, không lưu trữ hay tái phân phối.
