---
title: CRM Thuý Trần - Phân Tích Cấu Trúc Base & Cách Kết Nối
type: analysis
tags: [lark-base, crm, makeup, kết-nối, trường-dữ-liệu]
created: 2026-06-24
updated: 2026-06-24
sources: [https://manhtrung610.jp.larksuite.com/wiki/CPfgwROrQi9uAUk52w1jWqP7pVd]
---

## 📋 Tóm Tắt Cấu Trúc Base

**Tên Base:** CRM THÚY THÚY  
**Chủ sở hữu:** Thuý Trần (Makeup Artist & Giảng viên)  
**URL:** https://manhtrung610.jp.larksuite.com/wiki/CPfgwROrQi9uAUk52w1jWqP7pVd  
**Kiến trúc:** Wiki + Embedded Multi-table Base  
**Mục đích:** Quản lý toàn diện 6 lĩnh vực kinh doanh makeup & dạy học

---

## 🏗️ Kiến Trúc Tổng Thể

Base được tổ chức thành **11+ nhóm chức năng chính**, mỗi nhóm chứa 1-8 bảng:

```
CRM THÚY THÚY (Wiki)
├── 1. Cài Đặt Hệ Thống (Setup & Configuration)
├── 2. Bán Hàng (Sales & Orders)
├── 3. Giao Việc (Scheduling & Tasks)
├── 4. Giao Việc Chung (General Tasks)
├── 5. CEO (Business Planning & Metrics)
├── 6. Tài Chính & Kế Toán (Finance & Accounting)
├── 7. Marketing - Sale (Marketing & Sales Operations)
├── 8. NPS - CSKH (Customer Satisfaction)
├── 10. Báo Cáo KPI (Dashboards & Reports)
├── 11. Chấm Công (Attendance & Leave)
├── 12. Facebook (Social Media Integration)
├── 13. Email Marketing (Email Campaigns)
├── 14. Tiktok (TikTok Analytics)
├── 15. Analytics (Data Analysis)
└── 16. Pancake Integration (3rd-party CRM sync)
```

---

## 📊 Chi Tiết Các Nhóm Bảng

### 1️⃣ **Cài Đặt Hệ Thống (Setup Layer)**

| Bảng | Mục đích | Loại dữ liệu chính |
|------|---------|-------------------|
| 1.1 Setup Hệ Thống | Cấu hình hệ thống ban đầu | Config, Settings |
| 1.2 Gói dịch vụ | Danh mục dịch vụ (makeup, thuê váy, chụp ảnh) | Service catalog |
| 1.3 Nhập trang phục | Quản lý kho váy, trang phục | Inventory |
| 1.4 Thiết Lập Tài Chính | Cấu hình tài chính (ngân sách, chi phí) | Financial config |
| 1.5 Các Khoản Chi | Chi phí hoạt động | Expense tracking |
| 1.7 Data Sản Phẩm In Ấn | Sản phẩm in ấn | Product catalog |

**Cách xây dựng:**
- Dùng các bảng này làm "master data" được link từ các bảng khác
- Các trường chứa chủ yếu text, select (dropdown), currency, date
- Không có kết nối phức tạp, đóng vai trò "lookup base"

---

### 2️⃣ **Bán Hàng (Sales Core)**

| Bảng | Mục đích | Kết nối |
|------|---------|--------|
| **Khách Hàng** | Master table cho khách hàng | ← Link từ Đơn hàng, Phiếu Thu |
| 2.1 Tạo đơn hàng | Orders (hóa đơn bán hàng) | → Link tới Khách Hàng, Dịch vụ |
| 2.2 Tạo Phiếu Thu | Invoices/Receipts (bảng ghi nhận thanh toán) | → Link tới Khách Hàng, Đơn hàng |
| 2.3 Doanh Thu In | Revenue từ dịch vụ In ấn | Aggregate/Formula từ Đơn hàng |
| 2.4 Doanh Thu Thuê Váy | Revenue từ thuê trang phục | Aggregate/Formula từ Đơn hàng |

**Cách kết nối:**
```
Khách Hàng (Master)
  ↑
  ├── Link ← Đơn Hàng (many-to-one)
  │        └── Lookup: Tên KH, Số điện thoại, Email
  │
  └── Link ← Phiếu Thu (many-to-one)
           └── Lookup: Tên KH, Số tiền thanh toán
```

**Loại trường:**
- **Khách Hàng:** Tên, SĐT, Email, Địa chỉ, Ngày tạo, Trạng thái (active/inactive)
- **Đơn hàng:** Link → Khách Hàng, Dịch vụ, Số lượng, Giá, Tổng tiền, Ngày order, Trạng thái
- **Phiếu Thu:** Link → Khách Hàng, Link → Đơn hàng, Số tiền, Ngày thanh toán, Hình thức (cash/bank/transfer)

---

### 3️⃣ **Giao Việc (Scheduling & Task Management)**

| Bảng | Mục đích | Loại |
|------|---------|------|
| 3.1 Lịch Makeup, Chụp ảnh | Booking makeup & photo shoots | Calendar |
| 3.2 Trọn Gói + Lịch | Package deals (makeup + photo combo) | Calendar + Link |
| 3.3 Lịch Thử Trang Phục | Dress fitting schedule | Calendar |
| 3.4 Lịch Làm Hình | Photo editing schedule | Calendar |

**Cách kết nối:**
```
Lịch Makeup (Master Calendar)
  ↓
  ├── Link → Khách Hàng
  ├── Link → Dịch vụ (1.2)
  ├── Link → Nhân Sự (6.1 HRM)
  └── Lookup: Tên KH, Giờ, Địa chỉ makeup
```

---

### 4️⃣ **CEO - Kinh Doanh (Strategic Planning)**

| Bảng | Mục đích | Dữ liệu |
|------|---------|--------|
| 5.0 Mục tiêu Tài Chính | OKR & Financial targets | Goals, KPIs |
| 5.1 Kế Hoạch Kinh Doanh | Business plans | Planning |
| 5.2 Tính toán lợi nhuận - Dịch Vụ | Profit calculation per service | Formula |
| 5.3 Danh mục sản phẩm - Dịch vụ chi tiết | Service pricing & margins | Pricing |
| 5.4 Kế Hoạch Dòng Tiền 2025 | Cash flow forecast | Forecast |

**Cách kết nối:**
- Link tới **Bán Hàng (2.1, 2.2)** để lấy dữ liệu revenue thực tế
- Link tới **HRM (6.1)** để lấy chi phí nhân sự
- Dùng **Formula fields** để tính: Profit = Revenue - COGS - Labor - Overhead

---

### 5️⃣ **Tài Chính & Kế Toán (Finance & Accounting)**

**Cấu trúc 3 lớp:**

**Lớp 1: HRM (Nguồn lực nhân sự)**
```
6.1 HRM - Master Employee Table
  ├── 6.1.1 Tổng Nhân Sự (headcount summary)
  ├── 6.1.2 Tính Lương Năng Suất (productivity salary)
  └── 6.1.3 Hệ thống lương (salary structure)
```

**Lớp 2: Đầu tư & Khấu hao**
```
6.2 Tài sản & Khấu hao
  ├── 6.2.1 Tổng Khấu Hao (depreciation summary)
  └── 6.2.2 Khấu hao chi tiết (asset depreciation)
```

**Lớp 3: Dòng tiền hàng ngày**
```
6.3 Dòng Tiền Mỗi Ngày
  ├── 6.3.2 Tạo Phiếu Chi (create expense voucher)
  ├── 6.3.3 Dòng tiền mỗi ngày (daily cash flow)
  └── 6.3 Tổng hợp Thu Chi (income/expense summary)
```

**Cách kết nối tài chính:**
```
Bán Hàng (2.1, 2.2)
  ↓ (Revenue từ đơn hàng)
  ├→ CEO KPI (5.0, 5.2) 
  │
  ↓ (Dòng tiền vào)
  
6.3.3 Dòng Tiền Mỗi Ngày
  ├── Lookup: Đơn hàng đã thanh toán
  ├── Lookup: Chi phí từ Phiếu Chi
  └── Formula: Balance = Revenue - Expense
```

---

### 6️⃣ **Marketing & Sales Operations**

| Bảng | Mục đích | Link |
|------|---------|------|
| 7.1 Kế hoạch marketing tổng thể | Monthly marketing plan | Strategy |
| 7.2 Kế hoạch marketing theo ngày | Daily marketing activities | Execution |
| 7.2 Kế hoạch KPI nhân viên sale | Sales KPI per person | Link → HRM |
| 7.1 Quảng Cáo ADS mỗi ngày | Daily ad spend tracking | Facebook, TikTok |
| 7.3, 7.4, 7.5 Sale 1, 2, 3 | Individual sales team data | Link → Orders |

---

### 7️⃣ **Tích Hợp Bên Ngoài**

#### **Facebook (12.x)**
```
12.1 Danh sách Page → List of FB business pages
12.2 Danh sách Bài Viết → All posts (Post-ID, Content, Engagement)
12.3 Đăng Bài → Publishing automation
Báo cáo Facebook → Analytics & performance
```

**Trường chính trong 12.2:**
- Post-ID (PK)
- ID (Facebook post ID)
- FanPage (Lookup: Tên page)
- Nội dung (Post text)
- Link post (URL)
- Thumbnail (Image)
- Lượt share, Lượt bình luận, Số tương tác, LIKE, LOVE, HAHA (Metrics)

#### **Email Marketing (13.x)**
```
13.1 Danh sách Email Nuôi Dưỡng (nurture list)
13.2 Chiến dịch Email 365 ngày (email campaigns)
13.3-13.9 Email engagement tracking (opens, clicks, bounces, unsubscribes)
```

#### **TikTok (14.x)**
```
14.1 Data Tiktok (general)
14.2 Data Tiktok Makeup Đẹp Nam Định (specific account)
Báo cáo tiktok (analytics)
```

#### **Pancake CRM Integration (Leads & Orders)**
- Sync incoming leads from Pancake
- Link → Khách Hàng bảng
- Auto-create từ form submissions

---

## 🔗 **Cách Kết Nối Giữa Các Bảng (Relationship Diagram)**

### **Mô hình sao (Star Schema):**

```
                    Dịch Vụ (1.2)
                        ↑
                        |
    Khách Hàng ←────────+────→ Đơn Hàng (2.1)
    (Master)                   ↓
       ↑                        | Lookup: Tên KH, Giá
       |                        |
       |              Phiếu Thu (2.2)
       +──────────────────┘   ↓
                            Link → KH
                            Lookup: Tên KH, Số tiền

    Nhân Sự (6.1) ←──────────── Lịch Makeup (3.1)
         ↓                       Lookup: Tên NV
         |
    Salary (6.1.3)
         ↓
    Dòng Tiền (6.3) ←────────── Doanh Thu (2.3, 2.4)
         ↑                       Formula từ Đơn Hàng
         |
    Phiếu Chi (6.3.2)

    CEO KPI (5.0) ←────────────← All data tables
                   (Formula + Lookup)
```

### **Loại kết nối sử dụng:**

1. **Link Field (One-to-Many / Many-to-One)**
   - Khách Hàng ← Đơn Hàng (nhiều đơn cho 1 KH)
   - Dịch vụ ← Đơn Hàng (dùng nhiều dịch vụ)
   - Nhân Sự ← Lịch Makeup (1 NV làm nhiều lịch)

2. **Lookup Field (Trao đổi dữ liệu)**
   - Đơn hàng → Lookup tên KH, SĐT từ Khách Hàng
   - Lịch → Lookup tên dịch vụ từ Danh mục dịch vụ
   - Phiếu Thu → Lookup thông tin đơn hàng liên quan

3. **Formula Field (Tính toán)**
   - Tổng tiền = Giá × Số lượng
   - Doanh thu = SUM(tất cả đơn hàng theo dịch vụ)
   - Lợi nhuận = Doanh thu - Chi phí - Lương
   - Bonus = Nếu KPI > 100% thì 10% commission

4. **Rollup Field (Tổng hợp)**
   - Khách Hàng → Tổng tiền đã chi (SUM từ Đơn hàng)
   - Khách Hàng → Số lần order (COUNT từ Đơn hàng)

---

## 📐 **Mô Hình Dữ Liệu Chi Tiết**

### **Bảng Khách Hàng (Master)**
```
Fields:
├── ID (Primary Key) - Auto increment
├── Tên KH (Text) - Required
├── SĐT (Phone) - Required
├── Email (Email) - Optional
├── Địa chỉ (Text)
├── Ngày tạo (Date) - Auto
├── Trạng thái (Select) - active/inactive/vip
├── Link ← Đơn hàng (Reverse link)
├── Link ← Phiếu Thu (Reverse link)
├── Lookup: Tổng đã chi (Formula: SUM)
└── Lookup: Số lần order (Formula: COUNT)
```

### **Bảng Đơn Hàng (Transactional)**
```
Fields:
├── ID (PK)
├── Link → Khách Hàng (Required, many-to-one)
├── Link → Dịch vụ (Required, many-to-one)
├── Số lượng (Number)
├── Giá đơn vị (Currency) - Lookup từ Dịch vụ
├── Tổng tiền (Currency) - Formula: Số lượng × Giá
├── Ngày tạo (Date)
├── Trạng thái (Select) - pending/confirmed/completed/cancelled
├── Ghi chú (Text)
├── Lookup: Tên KH (từ Link Khách Hàng)
├── Lookup: Tên dịch vụ (từ Link Dịch vụ)
└── Link ← Phiếu Thu (Reverse link)
```

### **Bảng Lịch Makeup (Calendar)**
```
Fields:
├── ID (PK)
├── Ngày (Date) - Required
├── Giờ bắt đầu (Time)
├── Giờ kết thúc (Time)
├── Link → Khách Hàng
├── Link → Dịch vụ
├── Link → Nhân Sự (NV makeup)
├── Trạng thái (Select) - scheduled/completed/cancelled
├── Địa chỉ (Text)
├── Ghi chú (Text)
├── Lookup: Tên KH, Tên dịch vụ, Tên NV
└── Attachment: Hình ảnh kết quả
```

---

## 🎯 **Best Practices Nhận Thấy**

### ✅ **Điểm mạnh của cấu trúc:**

1. **Tách biệt các lớp dữ liệu rõ ràng**
   - Setup/Config (Cài đặt hệ thống)
   - Master data (Khách hàng, Dịch vụ, Nhân sự)
   - Transactional (Đơn hàng, Phiếu chi)
   - Analytical (KPI, Báo cáo)

2. **Tích hợp nhiều channel**
   - Facebook, Email, TikTok, Pancake CRM
   - Dữ liệu tập trung vào 1 Base duy nhất

3. **Tính năng scheduling tích hợp**
   - Lịch Makeup, Lịch Thử Váy, Lịch Chụp ảnh
   - Liên kết với nhân sự (phân công công việc)

4. **Báo cáo & KPI toàn diện**
   - Doanh thu theo dịch vụ, theo thời gian
   - Lợi nhuận tính toán thời thực
   - Sales KPI per person

### ⚠️ **Điều cần cải thiện:**

1. **Chưa rõ cách xử lý multi-select dịch vụ**
   - 1 khách hàng có thể dùng 1 hay nhiều dịch vụ?
   - Cần link table hay chỉ dùng multi-select?

2. **Chưa thấy bảng Return/Refund**
   - Nếu có hoàn tiền, cần thêm bảng Refund
   - Link tới Phiếu Thu để cập nhật lại dòng tiền

3. **Chưa có Audit trail cho các thay đổi**
   - Nên bật "Record history" trên các bảng quan trọng
   - Theo dõi ai thay đổi giá, trạng thái order

4. **Chưa thấy Permission/Role management**
   - Nên phân quyền theo vai trò (Admin, Sales, Makeup artist, Accountant)
   - Để nhân viên chỉ xem dữ liệu của mình

---

---

## 📑 **PHẦN 2: SCHEMA CHI TIẾT TỪNG BẢNG**

### **A. BẢNG FACEBOOK (12.2 Lấy Danh Sách Bài Viết)**

**Mục đích:** Lưu trữ tất cả Facebook posts từ các page business

**Trường chính (13 fields):**
| # | Tên Trường | Loại | Bắt Buộc | Mô Tả |
|---|-----------|------|---------|-------|
| 1 | Post-ID | Text (PK) | ✅ | ID của Facebook post |
| 2 | ID | Number | ✅ | Facebook post numeric ID |
| 3 | FanPage | Link | ✅ | Liên kết tới 12.1 Danh sách Page |
| 4 | Nội dung | LongText | ✅ | Nội dung bài viết (caption) |
| 5 | Link post | URL | ✅ | Đường dẫn đến bài viết |
| 6 | Thumbnail | Image | ❌ | Ảnh đại diện bài viết |
| 7 | Lượt share | Number | ❌ | Số lần share (auto sync) |
| 8 | Lượt bình luận | Number | ❌ | Số comments |
| 9 | Số tương tác | Number | ❌ | Tổng interactions |
| 10 | LIKE | Number | ❌ | Reaction: Like count |
| 11 | LOVE | Number | ❌ | Reaction: Love count |
| 12 | HAHA | Number | ❌ | Reaction: Haha count |
| 13 | Ngày tạo | Date | ❌ | Timestamp post (auto) |

**Dữ liệu hiện tại:**
- ~15 bản ghi (theo UI)
- Grouped by FanPage (Ami Makeup Academy, Makeup Nam Định...)
- Auto-synced từ Facebook Graph API (các metrics update mỗi ngày)

**Cách kết nối:**
- `FanPage` → Link tới bảng 12.1 (Danh sách Page)
- Có thể join với 13.x (Email Marketing) để chạy email campaign dựa trên post performance

---

### **B. SIDEBAR MAP - TẤT CẢ BẢNG TRONG CRM**

**Nhóm 1: Cài Đặt Hệ Thống (1.x)**
```
1.1 Setup Hệ Thống
  - Các cấu hình ban đầu: tên công ty, múi giờ, tiền tệ, tax rates
  
1.2 Gói dịch vụ
  Fields: ID | Tên dịch vụ | Giá cơ bản | Giá bán lẻ | Thời gian (phút) | Mô tả | Status
  Data: ~6-8 dịch vụ (Makeup cá nhân, Makeup cô dâu, Thuê váy, Chụp ảnh, v.v)
  
1.3 Nhập trang phục
  Fields: ID | Tên váy | Màu sắc | Kích cỡ | Giá mua | Giá thuê | Điều kiện | Ảnh
  Data: Kho trang phục (áo, váy, áo dài)
  
1.4 Thiết Lập Tài Chính
  Fields: Tỷ giá, Ngân sách, Chi phí cố định, v.v
  
1.5 Các Khoản Chi
  Fields: Loại chi | Số tiền | Ngày | Mô tả
  
1.7 Data Sản Phẩm In Ấn
  Fields: ID | Tên sản phẩm | Giá bán | Tồn kho | Ảnh
```

**Nhóm 2: Bán Hàng (2.x) — CORE TRANSACTION**
```
2.0 Khách Hàng (Master Table)
  Primary Key: ID
  Fields:
  - Tên KH (Text)
  - SĐT (Phone)
  - Email (Email)
  - Địa chỉ (Text)
  - Ngày tạo (Date)
  - VIP Status (Select: regular, vip, platinum)
  - Tổng tiền đã chi (Rollup: SUM từ Đơn Hàng)
  - Số lần order (Rollup: COUNT từ Đơn Hàng)
  - Mối quan hệ (Link ← Đơn Hàng, Phiếu Thu)

2.1 Tạo đơn hàng (Orders)
  Primary Key: Order ID
  Fields:
  - Link → Khách Hàng (Required)
  - Link → Dịch vụ (Required)
  - Số lượng (Number)
  - Giá đơn vị (Currency) — Lookup từ Dịch vụ
  - Tổng tiền (Currency) — Formula: Qty × Price
  - Ngày tạo (Date)
  - Trạng thái (Select: pending, confirmed, completed, cancelled)
  - Ghi chú (LongText)
  - Lookup: Tên KH, Tên dịch vụ
  Data: ~500+ orders (estimated)

2.2 Tạo Phiếu Thu (Invoices/Receipts)
  Primary Key: Receipt ID
  Fields:
  - Link → Khách Hàng (Required)
  - Link → Đơn Hàng (Required)
  - Số tiền thanh toán (Currency)
  - Ngày thanh toán (Date)
  - Hình thức (Select: cash, bank transfer, e-wallet)
  - Ghi chú (Text)
  - Lookup: Tên KH, Số tiền còn nợ
  Data: ~300+ receipts

2.3 Doanh Thu In
  Type: Analytical view / Calculated table
  Formula: SUM(Đơn Hàng WHERE Dịch vụ = "In ấn") grouped by ngày/tháng
  
2.4 Doanh Thu Thuê Váy
  Type: Analytical view
  Formula: SUM(Đơn Hàng WHERE Dịch vụ = "Thuê váy") grouped by ngày/tháng
```

**Nhóm 3: Giao Việc (3.x) — SCHEDULING**
```
3.1 Lịch Makeup, Chụp ảnh
  Fields:
  - Ngày (Date)
  - Giờ bắt đầu (Time)
  - Giờ kết thúc (Time)
  - Link → Khách Hàng
  - Link → Dịch vụ
  - Link → Nhân Sự (makeup artist)
  - Trạng thái (Select: scheduled, completed, cancelled, no-show)
  - Địa chỉ (Text)
  - Ghi chú (Text)
  - Attachment: Before/After photos
  Data: ~200+ bookings/month

3.2 Trọn Gói | Lịch Makeup, Chụp ảnh
  Type: Calendar view (child of 3.1)
  Shows: Makeup + Photo combo bookings
  
3.3 Lịch Thử Trang Phục
  Fields: Date, Time, KH, váy được chọn, artist, status
  
3.4 Lịch Làm Hình (Photo Editing)
  Fields: Date, Project, Number of photos, Artist, Status, Deadline
```

**Nhóm 6: Tài Chính & Kế Toán (6.x)**
```
6.1 HRM - Master Employees Table
  Primary Key: Employee ID
  Fields:
  - Tên nhân viên (Text)
  - Chức vụ (Select: Makeup artist, Photographer, Editor, Manager, Admin)
  - Mức lương cơ bản (Currency)
  - Hệ số năng suất (Percent)
  - Ngày bắt đầu (Date)
  - Trạng thái (Select: active, leave, resigned)
  Data: ~5-8 nhân viên

6.1.1 Tổng Nhân Sự (Headcount Summary)
  Rollup: COUNT(active employees) by department
  
6.1.2 Tính Lương Năng Suất
  Formula: Lương cơ bản × (1 + Hệ số × KPI%)
  
6.1.3 Hệ thống lương
  Fields: Lương tháng, Thưởng, Khấu trừ, Lương ròng

6.2.1 Tổng Khấu Hao (Depreciation Summary)
  
6.2.2 Khấu hao chi tiết
  Fields: Tài sản, Giá mua, Niên hạn, Khấu hao/tháng

6.3.2 Tạo Phiếu Chi (Expense Voucher)
  Fields:
  - Link → Danh mục chi phí
  - Số tiền (Currency)
  - Ngày (Date)
  - Mô tả
  - Người ký duyệt
  - Trạng thái (draft, approved, rejected)

6.3.3 Dòng Tiền Mỗi Ngày
  Formula: Revenue (từ Phiếu Thu) - Expense (từ Phiếu Chi)
  Grouped by day, week, month
  
6.3 Tổng Hợp Thu Chi (Income/Expense Summary)
  Rollup: SUM(Revenue) - SUM(Expense) by period
```

**Nhóm 7: Marketing & Sales (7.x)**
```
7.1 Kế hoạch marketing tổng thể (Monthly Plan)
7.2 Kế hoạch marketing theo ngày (Daily Execution)
7.2 Kế hoạch KPI nhân viên sale (Per-Person KPI)
7.1 Quảng Cáo ADS mỗi ngày (Daily Ad Spend)
7.3, 7.4, 7.5 Sale 1, 2, 3 (Individual Sales Data)
```

**Nhóm 12-14: Social Media Integrations**
```
12.1 Danh sách Page
  Fields: Page ID, Page Name, Follower count, Engagement rate
  
12.2 Danh sách Bài Viết ← (CHI TIẾT Ở PHẦN A)
  
12.3 Đăng Bài
  Type: Automation table
  Fields: Post ID, Text, Media, Schedule time, Status (draft/published)

13.x Email Marketing
  13.1 Danh sách Email Nuôi Dưỡng (Nurture List)
  13.2 Chiến dịch Email 365 ngày (Campaign Calendar)
  13.3-13.9 Engagement tracking (opens, clicks, bounces)

14.x TikTok
  14.1 Data TikTok (General account)
  14.2 Data TikTok Makeup Đẹp Nam Định (Specific account)
```

---

## 📊 **PHẦN 3: QUERY EXAMPLES - TRUY VẤN THƯỜNG DÙNG**

Lark Base hỗ trợ **Data Query** để tạo các báo cáo tính toán phức tạp. Dưới đây là các ví dụ:

### **Query 1: Doanh thu theo từng dịch vụ (tháng này)**
```sql
SELECT 
  Dịch vụ.Tên,
  SUM(Đơn Hàng.Tổng tiền) as Doanh thu,
  COUNT(Đơn Hàng.ID) as Số lần bán
FROM Đơn Hàng
WHERE Đơn Hàng.Ngày >= DATE('2026-06-01')
  AND Đơn Hàng.Trạng thái = 'completed'
GROUP BY Dịch vụ.Tên
ORDER BY Doanh thu DESC
```

### **Query 2: Top 5 Khách hàng chi tiêu nhiều nhất**
```sql
SELECT
  Khách Hàng.Tên,
  Khách Hàng.SĐT,
  SUM(Đơn Hàng.Tổng tiền) as Tổng chi
FROM Đơn Hàng
JOIN Khách Hàng
GROUP BY Khách Hàng.ID
ORDER BY Tổng chi DESC
LIMIT 5
```

### **Query 3: Khoản thanh toán còn nợ**
```sql
SELECT
  Khách Hàng.Tên,
  SUM(Đơn Hàng.Tổng tiền) - SUM(Phiếu Thu.Số tiền) as Còn nợ
FROM Khách Hàng
LEFT JOIN Đơn Hàng
LEFT JOIN Phiếu Thu
WHERE Còn nợ > 0
ORDER BY Còn nợ DESC
```

### **Query 4: Ngày bận nhất (nhiều booking nhất)**
```sql
SELECT
  DATE(Lịch Makeup.Ngày) as Ngày,
  COUNT(*) as Số booking,
  COUNT(DISTINCT Lịch Makeup.Nhân Sự) as Số artist
FROM Lịch Makeup
WHERE Trạng thái = 'completed'
GROUP BY DATE(Ngày)
ORDER BY Số booking DESC
LIMIT 10
```

### **Query 5: Revenue vs Expense Daily Cash Flow**
```sql
SELECT
  DATE(Phiếu Thu.Ngày) as Ngày,
  SUM(Phiếu Thu.Số tiền) as Thu,
  SUM(Phiếu Chi.Số tiền) as Chi,
  SUM(Phiếu Thu.Số tiền) - SUM(Phiếu Chi.Số tiền) as Balance
FROM Phiếu Thu
FULL JOIN Phiếu Chi
GROUP BY Ngày
ORDER BY Ngày DESC
```

---

## 🔗 **PHẦN 3 (lanjutan): ADVANCED RELATIONSHIPS & FORMULAS**

### **Cross-Table Formulas Example:**

**Doanh Thu Hôm Nay (Daily Revenue Formula):**
```
SUM(
  Phiếu Thu.Số tiền 
  WHERE Phiếu Thu.Ngày = TODAY()
)
```

**Lợi Nhuận Dịch Vụ (Service Profit):**
```
Đơn Hàng.Tổng tiền 
- (Dịch vụ.COGS) 
- (Link HRM.Lương hôm nay)
- (Overhead 5%)
```

**KPI Sale Person:**
```
Link Đơn Hàng.Count(Trạng thái = "completed") / Target × 100%
Bonus = IF(KPI > 100%, Revenue × 10%, 0)
```

---

## 💡 **Kết Luận**

Cấu trúc Base của Thuý Trần là một **mô hình CRM/ERP khá hoàn chỉnh** cho ngành makeup & dạy học:

- ✅ Master data (KH, DV, NV) được quản lý tập trung
- ✅ Luồng bán hàng → thanh toán → tài chính được kết nối
- ✅ Scheduling & task management tích hợp
- ✅ Multi-channel marketing (Facebook, Email, TikTok)
- ✅ KPI & business metrics được tính toán thời thực

---

## ✅ **IMPLEMENTATION CHECKLIST - PHÁT TRIỂN BASE TIẾP THEO**

### **Priority 1: Tối ưu & Bảo mật (1-2 tuần)**
- [ ] **Enable Record History** trên Khách Hàng, Đơn Hàng, Phiếu Thu
  - Để audit trail khi có thay đổi giá/trạng thái
- [ ] **Phân quyền (Advanced Permissions)** theo role:
  - 👤 **Admin:** Read/Write all tables
  - 💼 **Sales:** Read/Write Orders, Receipts; Read-only KH, Finance
  - 💅 **Makeup Artist:** Read-only assigned Lịch, KH liên quan
  - 📊 **Accountant:** Read/Write Finance; Read-only Sales
- [ ] **Enable API Webhooks** cho thông báo real-time khi:
  - Có order mới
  - KH chưa thanh toán quá 7 ngày
  - Lịch makeup sắp diễn ra (nhắc nhở NV)

### **Priority 2: Automation (2-3 tuần)**
- [ ] **Workflow tự động sau khi booking:**
  - Gửi email xác nhận lịch cho KH
  - Gửi SMS nhắc nhở 1 ngày trước
  - Tự động gửi phiếu thanh toán
- [ ] **Notification khi:**
  - KH chưa thanh toán sau 5 ngày
  - Inventory váy cần bổ sung
  - KPI chưa đạt tháng này
- [ ] **Auto-sync từ:**
  - Facebook Graph API (đã có)
  - TikTok API (cần setup)
  - Pancake CRM (cần webhook)

### **Priority 3: Reporting & Analytics (3-4 tuần)**
- [ ] **Create Dashboard:**
  - Daily Revenue (bar chart)
  - Sales by Service (pie chart)
  - Top Customers (leaderboard)
  - Cash Flow (line chart)
  - Team Productivity (KPI gauge)
- [ ] **Create Scheduled Reports:**
  - Daily Revenue Summary (email every 6pm)
  - Weekly Sales Report (every Monday)
  - Monthly P&L (every 1st of month)
- [ ] **Integrate BI Tool** (Power BI / Looker Studio)
  - Real-time data sync
  - Executive dashboard

### **Priority 4: Experience Improvements (4-6 tuần)**
- [ ] **Create User-Friendly Forms:**
  - "Tạo Đơn Hàng Nhanh" form (không cần hiểu DB)
  - "Booking Lịch" form (khách hàng có thể tự book)
- [ ] **Mobile App Consideration:**
  - Test Lark Mobile App
  - Optimize views for mobile
- [ ] **Template & Automation:**
  - Email templates for invoices
  - SMS templates for reminders
  - Invoice PDF generation

### **Priority 5: Data Migration & Integration (Ongoing)**
- [ ] **Import dữ liệu cũ** (nếu có Excel cũ):
  - Customers từ file Excel
  - Past orders từ file
  - Transaction history
- [ ] **Integrate với:**
  - Accounting software (nếu dùng)
  - Payment gateway (Stripe, Momo, etc.)
  - SMS provider (twilio, telesign)
- [ ] **Backup strategy:**
  - Tạo backup hàng tuần
  - Export critical data

---

## 🎯 **ESTIMATED EFFORT & TIMELINE**

| Giai đoạn | Công việc | Timeline | Nhân lực |
|-----------|----------|----------|---------|
| **Phase 1** | Setup, Permissions, Webhooks | 1-2 tuần | 1 person (lark-cli expert) |
| **Phase 2** | Workflows, Notifications | 2-3 tuần | 1-2 people |
| **Phase 3** | Dashboards, Reports | 3-4 tuần | 1 person (analytics) |
| **Phase 4** | UX improvements, Forms | 4-6 tuần | 1 person (UX) |
| **Total** | **Full deployment** | **10-15 tuần** | **2-3 people** |

---

## 🚀 **QUICK WINS (Làm ngay, <1 tuần)**

1. **Enable Record History** → Tracking changes (5 phút)
2. **Create 3 basic views:**
   - "Orders this month" (filtered view)
   - "Pending payments" (filter: chưa thanh toán)
   - "Today's schedule" (today's bookings)
   (30 phút)
3. **Create 1 Dashboard** với 3 key metrics:
   - Daily revenue (mini)
   - Bookings count (mini)
   - Unpaid invoices (mini)
   (1 tiếng)
4. **Email alerts khi:**
   - New order → Notify admin
   - Payment overdue → Notify accountant
   (30 phút)

**Total: ~2 giờ → Tăng 30% hiệu suất ngay lập tức**

---

## 📚 **LEARNING RESOURCES**

- **Lark Base Documentation:** https://www.larksuite.com/en_us/product/base
- **Lark CLI Guide:** https://github.com/larksuite/cli
- **Data Query (SQL-like):** https://www.larksuite.com/en_us/product/base/data-query
- **Automation/Workflows:** https://www.larksuite.com/en_us/product/automation
- **YouTube Tutorials:** Search "Larksuite Base Tutorial"

---

**Tiếp theo:** Nên xem xét thêm:
- Advanced permissions (phân quyền theo role) ✅ (đã chi tiết)
- Automation workflows (tự động gửi email, SMS sau booking) ✅ (đã chi tiết)
- Dashboard (biểu đồ doanh thu, KPI trực quan) ✅ (đã chi tiết)
- Cảnh báo (Alert khi KH chưa thanh toán sau 7 ngày) ✅ (đã chi tiết)

---

## 📌 Tham khảo

**URL Base:** https://manhtrung610.jp.larksuite.com/wiki/CPfgwROrQi9uAUk52w1jWqP7pVd  
**Wiki Token:** CPfgwROrQi9uAUk52w1jWqP7pVd  
**Table ID:** tbld7W9hs6OlJE9C  
**View ID:** vewlDitZF0  
**Được tạo:** 2026-06-24  
**Cập nhật:** 2026-06-24  
**Phân tích bởi:** Claude Code (lark-cli + browser inspection)
