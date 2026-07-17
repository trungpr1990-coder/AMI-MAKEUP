---
title: Nghiên cứu từ khoá SEO — Makeup Cá Nhân (đợt 1, 5 bài)
type: khoang
khoang: nang-luc
tags: [seo, keyword-research, content, makeup-ca-nhan]
created: 2026-07-17
updated: 2026-07-17
sources: []
---

## Tóm tắt

Chạy skill [[hmh-AIOS-tao-skill|hmh-mkt-research-seo-web]] (giai đoạn 1) cho chủ đề **"makeup cá nhân"** — nghiên cứu 5 từ khoá chính theo phương pháp Backlinko (keyword) + Ahrefs 3C's (follow SERP top) + video YouTube outlier thật (YouTube Data API). 5 brief đã ghi vào bảng Lark Base mới **"SEO Brief - Web"** (`tblUPvC0XvWQOx4S`, base CRM Thúy Thúy `O2qIbEaIYabXEGsW6Dzjs0LCpZg`) ở trạng thái **"Chờ viết"**.

**Lưu ý quan trọng:** hiện chưa có website WordPress để đăng bài — 5 brief này là **kho ý tưởng backlog**, chưa nối với hệ thống đăng bài tự động (giai đoạn 2). Khi nào có website, chỉ cần dùng lại bảng này.

## Hạ tầng đã thiết lập (mới, lần đầu)

- Bảng Lark Base **"SEO Brief - Web"** (`tblUPvC0XvWQOx4S`) trong base CRM Thúy Thúy — 21 trường theo chuẩn skill hmh-mkt-research-seo-web.
- Biến môi trường `WEB_BASE_TOKEN` + `WEB_TABLE_ID` đã thêm vào `D:\BỘ NÃO THỨ 2\.env`.
- Từ nay có thể chạy lại skill "nghiên cứu từ khoá SEO" cho chủ đề khác mà không cần dựng lại hạ tầng.

## 5 từ khoá đã nghiên cứu

| # | Từ khoá chính | Intent | Volume ước lượng/tháng | KD ước lượng | Video thắng nhúng |
|---|---|---|---|---|---|
| 1 | trang điểm cá nhân là gì | Informational | ~350 | 30 (thấp) | [Tiny Loly](https://www.youtube.com/watch?v=K0A6fedkyik) — 2.2tr view |
| 2 | học trang điểm cá nhân mất bao lâu | Informational/Commercial | ~300 | 28 (thấp) | [Kaline Nguyen](https://www.youtube.com/watch?v=UYioLnwTpbQ) — outlier 226, 744K view |
| 3 | có nên học trang điểm cá nhân không | Commercial investigation | ~250 | 25 (thấp) | [Hana Douyin](https://www.youtube.com/watch?v=I9IRL53Q6n8) |
| 4 | cách chọn thợ trang điểm uy tín | Commercial | ~400 | 48 (vừa — có báo lớn vnexpress trong top) | chưa tìm được video khớp trực tiếp |
| 5 | các bước trang điểm cá nhân cơ bản cho người mới bắt đầu | Informational/HowTo | ~650 | 55 (cao nhất đợt — brand mỹ phẩm lớn đã làm) | [Kaline Nguyen](https://www.youtube.com/watch?v=UYioLnwTpbQ) + [Quach Anh Makeup Artist](https://www.youtube.com/watch?v=MfNpDNZIaNc) — 3.98tr view |

> Volume/KD là **ước lượng định tính** (không có tool trả số thật như Ahrefs/Keyword Planner) — dựa trên số lượng & độ sâu các trang đang xếp hạng, đúng phương pháp trong `references/keyword-research-method.md` của skill.

## Insight rút ra từ SERP

- Ngách "trang điểm cá nhân" (khác "trang điểm chuyên nghiệp"/"trang điểm cô dâu") đang bị các học viện nhỏ-vừa chiếm top (juheemakeup.com.vn, tinalemakeup.vn, linatran.vn, kbeauty.fpt.edu.vn...) — **chưa có brand lớn nào áp đảo**, cơ hội tốt để làm nội dung sâu hơn kèm câu chuyện học viên thật vượt lên.
- Riêng từ khoá "các bước trang điểm cơ bản" đã bị các thương hiệu mỹ phẩm lớn (Shopee, Kiehl's, The Face Shop, L'Occitane) làm rất kỹ — nên khác biệt hoá bằng góc **"cá nhân, tự làm hàng ngày"** thay vì cạnh tranh trực diện từ khoá chung "trang điểm cơ bản".
- "cách chọn thợ trang điểm uy tín" phục vụ cả 2 nhánh khách hàng của AMI: khách thuê dịch vụ VÀ người cân nhắc học nghề — nên tận dụng cho cả phễu dịch vụ lẫn phễu đào tạo.

## Việc cần làm tiếp

- [ ] Khi có website: nối bảng này với skill đăng bài (giai đoạn 2, hiện chưa có trong hệ thống của Thuý).
- [ ] Bổ sung video thắng cho từ khoá #4 (chưa tìm được video khớp trực tiếp trong đợt quét này).
- [ ] Nếu muốn mở rộng, chạy tiếp skill cho các chủ đề liên quan: trang điểm cô dâu, trang điểm đi tiệc.

## Concepts / Entities liên quan

[[entities/ami-makeup-academy]]
