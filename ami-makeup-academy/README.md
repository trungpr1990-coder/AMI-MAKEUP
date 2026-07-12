# AMI Makeup Academy Website

Website chính thức của AMI Makeup Academy — học viện đào tạo makeup chuyên nghiệp tại Nam Định.

## Tech Stack

- **Astro** — Static site generator (Node.js)
- **Tailwind CSS** — Styling
- **Cloudflare Pages** — Hosting (miễn phí)

## Development

```bash
npm install
npm run dev       # localhost:4321
npm run build     # build vào /dist
npm run preview   # preview bản build
```

## Deploy lên Cloudflare Pages

### Cách 1: Auto Deploy qua GitHub (Khuyến nghị)

1. Push code lên GitHub
2. Vào [Cloudflare Pages](https://pages.cloudflare.com/)
3. **Create a project** → Connect to Git → chọn repo này
4. Cài đặt build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `20`
5. Save và Deploy

### Cách 2: Deploy thủ công

```bash
npm run build
npx wrangler pages deploy dist --project-name=ami-makeup-academy
```

## Cấu trúc thư mục

```
src/
├── layouts/BaseLayout.astro     # Layout chung (header + footer)
├── components/
│   ├── Header.astro             # Navigation
│   └── Footer.astro             # Footer
├── data/courses.ts              # Dữ liệu khóa học
├── pages/
│   ├── index.astro              # Trang chủ
│   ├── khoa-hoc.astro           # Danh sách khóa học
│   ├── khoa-hoc/[slug].astro    # Chi tiết khóa học
│   ├── dich-vu.astro            # Dịch vụ makeup
│   ├── gallery.astro            # Gallery ảnh
│   ├── gioi-thieu.astro         # Giới thiệu
│   ├── tin-tuc.astro            # Tin tức & Blog
│   ├── lien-he.astro            # Liên hệ + Google Maps
│   ├── dat-lich.astro           # Đặt lịch
│   └── tuyen-dung.astro         # Tuyển dụng
└── styles/global.css            # Global styles + Tailwind
public/
└── images/                      # Ảnh học viên & dịch vụ
```

## Cập nhật nội dung

- **Thêm/sửa khóa học:** chỉnh `src/data/courses.ts`
- **Thêm ảnh gallery:** thêm ảnh vào `public/images/` và cập nhật `gallery.astro`
- **Thông tin liên hệ:** tìm và thay số điện thoại/địa chỉ trong các file `.astro`
