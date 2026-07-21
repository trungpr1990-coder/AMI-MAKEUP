// ============================================================
// LIÊN HỆ NỔI — Zalo, Messenger, Phone
// ✏️ SỬA: Thay số điện thoại, link Zalo, link Messenger tại đây
// ============================================================
const CONTACT_INFO = {
  phone:     '0327355595',          // ✏️ SỬA: Số điện thoại chính
  phone2:    '0911148995',          // ✏️ SỬA: Số điện thoại phụ
  zalo:      'https://zalo.me/0327355595', // ✏️ SỬA: Link Zalo (thay số của bạn)
  messenger: 'https://m.me/amimakeupacademy', // ✏️ SỬA: Link Messenger page Facebook
};

// ============================================================
// NAVIGATION DÙNG CHUNG — Chỉnh sửa tại đây để cập nhật tất cả trang
// ✏️ SỬA: Thêm/bớt mục menu hoặc submenu tại đây
// ============================================================
const NAV_MENU = [
  { text: 'Trang chủ',  href: 'index.html' },
  { text: 'Giới thiệu', href: 'gioi-thieu.html' },
  {
    text: 'Dịch vụ', href: 'dich-vu.html',
    sub: [
      { text: 'Make Up Ngày Cưới',                                    href: 'dich-vu.html#cuoi' },
      { text: 'Make Up Kỷ Yếu',                                       href: 'dich-vu.html#ky-yeu' },
      { text: 'Make Up Sự Kiện, Sinh Nhật, Party, Chụp Hình Thời Trang', href: 'dich-vu.html#su-kien' },
    ]
  },
  {
    text: 'Khóa học', href: 'khoa-hoc.html',
    sub: [
      { text: 'Makeup Chuyên Nghiệp',        href: 'khoa-hoc.html#khoa-1' },
      { text: 'Makeup Nâng Cao',              href: 'khoa-hoc.html#khoa-2' },
      { text: 'Makeup Cá Nhân 3 Buổi',        href: 'khoa-hoc.html#khoa-3' },
      { text: 'Makeup Cá Nhân VIP 5 Buổi',    href: 'khoa-hoc.html#khoa-4' },
    ]
  },
  { text: 'Tin tức',   href: 'tin-tuc.html' },
  { text: 'Tuyển dụng',href: 'tuyen-dung.html' },
  { text: 'Liên hệ',   href: 'lien-he.html' },
];

// ── Tự động render nav vào phần tử có id="main-nav" ──
(function renderNav() {
  const style = document.createElement('style');
  style.textContent = `
    #main-nav {
      background: #fff;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
      padding: 0 40px;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 1px 4px rgba(0,0,0,.06);
    }
    #main-nav ul {
      list-style: none;
      padding: 0; margin: 0;
      display: flex;
    }
    #main-nav > ul > li {
      position: relative;
    }
    #main-nav > ul > li > a {
      display: block;
      color: #222;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 16px 14px;
      border-bottom: 2px solid transparent;
      text-decoration: none;
      white-space: nowrap;
      font-family: 'Montserrat', sans-serif;
    }
    #main-nav > ul > li > a:hover,
    #main-nav > ul > li.active > a,
    #main-nav > ul > li:hover > a {
      color: #000;
      border-bottom-color: #000;
    }
    /* Mũi tên dropdown */
    #main-nav > ul > li.has-sub > a::after {
      content: ' ▾';
      font-size: 9px;
      opacity: 0.5;
    }
    /* Dropdown */
    #main-nav .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
      border: 1px solid #eee;
      border-top: 2px solid #000;
      min-width: 280px;
      box-shadow: 0 4px 20px rgba(0,0,0,.10);
      z-index: 999;
    }
    #main-nav > ul > li:hover .dropdown {
      display: block;
    }
    #main-nav .dropdown li a {
      display: block;
      padding: 10px 16px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #333;
      text-decoration: none;
      border-bottom: 1px solid #f5f5f5;
      font-family: 'Montserrat', sans-serif;
      transition: background .15s, color .15s;
    }
    #main-nav .dropdown li a:hover {
      background: #000;
      color: #fff;
    }
    #main-nav .dropdown li:last-child a {
      border-bottom: none;
    }
  `;
  document.head.appendChild(style);

  const nav = document.getElementById('main-nav');
  if (!nav) return;

  // Xác định trang hiện tại
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const currentSearch = window.location.search;

  const ul = document.createElement('ul');
  NAV_MENU.forEach(item => {
    const li = document.createElement('li');

    // Kiểm tra active
    const itemPage = item.href.split('?')[0];
    const isActive = currentPage === itemPage ||
      (item.sub && item.sub.some(s => currentPage === s.href.split('?')[0] &&
        (!s.href.includes('?') || s.href.includes(currentSearch))));
    if (isActive) li.classList.add('active');
    if (item.sub) li.classList.add('has-sub');

    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);

    if (item.sub && item.sub.length) {
      const dropdown = document.createElement('ul');
      dropdown.className = 'dropdown';
      item.sub.forEach(s => {
        const sli = document.createElement('li');
        const sa = document.createElement('a');
        sa.href = s.href;
        sa.textContent = s.text;
        sli.appendChild(sa);
        dropdown.appendChild(sli);
      });
      li.appendChild(dropdown);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
})();

// ── Nút nổi liên hệ — Zalo · Messenger · Phone ──
(function renderFloatingContacts() {
  const style = document.createElement('style');
  style.textContent = `
    .ami-contacts {
      position: fixed;
      right: 16px;
      bottom: 110px;
      z-index: 9998;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
    .ami-contact-btn {
      width: 48px; height: 48px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      text-decoration: none;
      box-shadow: 0 3px 12px rgba(0,0,0,0.30);
      transition: transform .2s, box-shadow .2s;
      position: relative;
      overflow: hidden;
    }
    .ami-contact-btn:hover {
      transform: scale(1.12);
      box-shadow: 0 5px 18px rgba(0,0,0,0.40);
    }
    /* Tooltip */
    .ami-contact-btn::before {
      content: attr(data-tip);
      position: absolute;
      right: 56px;
      background: #111;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.05em;
      white-space: nowrap;
      padding: 5px 10px;
      border-radius: 4px;
      opacity: 0;
      pointer-events: none;
      transition: opacity .2s;
    }
    .ami-contact-btn:hover::before { opacity: 1; }

    /* Zalo */
    .ami-btn-zalo { background: #0068ff; }
    /* Messenger */
    .ami-btn-mess { background: linear-gradient(135deg,#0078ff,#a033ff,#ff3366); }
    /* Phone — nhấp nháy */
    .ami-btn-phone { background: #e00; }
    @keyframes ami-pulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(220,0,0,0.5); }
      50%      { box-shadow: 0 0 0 10px rgba(220,0,0,0); }
    }
    .ami-btn-phone { animation: ami-pulse 1.8s ease-in-out infinite; }

    /* SVG icons */
    .ami-contact-btn svg {
      width: 26px; height: 26px; fill: #fff; flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  // Tạo container
  const wrap = document.createElement('div');
  wrap.className = 'ami-contacts';

  // Zalo
  const zalo = document.createElement('a');
  zalo.href = CONTACT_INFO.zalo;
  zalo.target = '_blank';
  zalo.rel = 'noopener';
  zalo.className = 'ami-contact-btn ami-btn-zalo';
  zalo.setAttribute('data-tip', 'Chat Zalo');
  zalo.setAttribute('title', 'Chat Zalo');
  zalo.innerHTML = `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <text x="24" y="33" font-size="22" text-anchor="middle" font-family="Arial Black,sans-serif" fill="#fff" font-weight="900">Z</text>
  </svg>`;

  // Messenger
  const mess = document.createElement('a');
  mess.href = CONTACT_INFO.messenger;
  mess.target = '_blank';
  mess.rel = 'noopener';
  mess.className = 'ami-contact-btn ami-btn-mess';
  mess.setAttribute('data-tip', 'Messenger');
  mess.setAttribute('title', 'Facebook Messenger');
  mess.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.919 1.44 5.52 3.695 7.227V22l3.38-1.858C10.064 20.38 11.011 20.5 12 20.5c5.523 0 10-4.145 10-9.257C22 6.145 17.523 2 12 2zm1.043 12.467l-2.56-2.726-4.997 2.726 5.496-5.832 2.624 2.726 4.933-2.726-5.496 5.832z"/>
  </svg>`;

  // Phone
  const phone = document.createElement('a');
  phone.href = 'tel:' + CONTACT_INFO.phone;
  phone.className = 'ami-contact-btn ami-btn-phone';
  phone.setAttribute('data-tip', CONTACT_INFO.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3'));
  phone.setAttribute('title', 'Gọi điện ngay');
  phone.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
  </svg>`;

  wrap.appendChild(zalo);
  wrap.appendChild(mess);
  wrap.appendChild(phone);

  // Thêm vào trang khi DOM sẵn sàng
  if (document.body) {
    document.body.appendChild(wrap);
  } else {
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(wrap));
  }
})();
