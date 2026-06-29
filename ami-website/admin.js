// ============================================================
// ADMIN PANEL DÙNG CHUNG — AMI Make Up Academy
// Thêm vào bất kỳ trang nào bằng: <script src="admin.js"></script>
// Mật khẩu mặc định: 1234 (đổi bên dưới)
// ============================================================

(function() {
  const ADMIN_PASS = '1234'; // ✏️ SỬA: Đổi mật khẩu tại đây
  const STORAGE_KEY = 'ami_admin_' + (location.pathname.split('/').pop() || 'index');

  let isAdmin = false;
  let currentImgEl = null;

  // ── Thêm giao diện admin vào trang ──
  function injectUI() {
    // CSS admin
    const style = document.createElement('style');
    style.textContent = `
      #ami-admin-btn {
        position: fixed; bottom: 62px; right: 16px; z-index: 99999;
        width: 44px; height: 44px; border-radius: 50%;
        background: #111; color: #fff; border: 2px solid rgba(255,255,255,0.3);
        font-size: 18px; cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.5);
        display: flex; align-items: center; justify-content: center;
        transition: transform .2s;
      }
      #ami-admin-btn:hover { transform: scale(1.12); }

      #ami-admin-bar {
        display: none; position: fixed; top: 0; left: 0; right: 0; z-index: 999998;
        background: linear-gradient(90deg,#b00,#e00);
        color: #fff; padding: 10px 20px;
        align-items: center; justify-content: space-between;
        font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 700;
        box-shadow: 0 2px 12px rgba(0,0,0,0.4);
        gap: 12px;
      }
      #ami-admin-bar.active { display: flex; }
      #ami-admin-bar .ami-bar-label { flex: 1; }
      #ami-admin-bar button {
        border: none; padding: 7px 16px; font-weight: 700; cursor: pointer;
        font-size: 11px; letter-spacing: 0.1em; font-family: inherit;
        white-space: nowrap;
      }
      #ami-admin-save { background: #fff; color: #c00; }
      #ami-admin-save:hover { background: #ffe; }
      #ami-admin-exit { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.6) !important; }
      #ami-admin-exit:hover { background: rgba(255,255,255,0.15); }

      body.ami-admin-mode { padding-top: 46px !important; }

      /* Viền vàng = chữ có thể sửa */
      body.ami-admin-mode [data-editable] {
        outline: 2px dashed rgba(255,220,0,0.8) !important;
        outline-offset: 2px;
        cursor: text !important;
        min-height: 16px;
        min-width: 20px;
      }
      body.ami-admin-mode [data-editable]:hover {
        outline-color: #fff !important;
        background: rgba(255,255,0,0.07) !important;
      }
      body.ami-admin-mode [data-editable]:focus {
        outline-color: #0f0 !important;
        background: rgba(0,255,0,0.05) !important;
      }

      /* Overlay ảnh */
      body.ami-admin-mode .ami-img-wrap {
        position: relative; cursor: pointer; display: block;
      }
      body.ami-admin-mode .ami-img-wrap::after {
        content: '📷 Nhấn để thay ảnh';
        position: absolute; inset: 0;
        background: rgba(0,0,0,0.55);
        color: #fff; font-size: 12px; font-weight: 700;
        display: flex; align-items: center; justify-content: center;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0.04em;
        opacity: 0; transition: opacity .2s;
        pointer-events: none;
      }
      body.ami-admin-mode .ami-img-wrap:hover::after { opacity: 1; }

      /* Thông báo toast */
      #ami-toast {
        position: fixed; bottom: 120px; right: 16px; z-index: 999999;
        background: #111; color: #fff; padding: 12px 20px;
        font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600;
        border-left: 4px solid #0c0; box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        transform: translateX(120%); transition: transform .3s;
      }
      #ami-toast.show { transform: translateX(0); }
    `;
    document.head.appendChild(style);

    // Nút 🔑
    const btn = document.createElement('button');
    btn.id = 'ami-admin-btn';
    btn.title = 'Quản trị viên';
    btn.textContent = '🔑';
    btn.onclick = toggleAdmin;
    document.body.appendChild(btn);

    // Thanh admin
    const bar = document.createElement('div');
    bar.id = 'ami-admin-bar';
    bar.innerHTML = `
      <span class="ami-bar-label">🛠️ CHẾ ĐỘ QUẢN TRỊ &nbsp;·&nbsp; Click vào <b>ẢNH</b> để thay &nbsp;·&nbsp; Click vào <b>CHỮ</b> để sửa</span>
      <button id="ami-admin-save" onclick="window._amiAdminSave()">💾 LƯU</button>
      <button id="ami-admin-exit" onclick="window._amiAdminExit()">✕ THOÁT</button>
    `;
    document.body.appendChild(bar);

    // Input file ẩn
    const picker = document.createElement('input');
    picker.type = 'file';
    picker.accept = 'image/*';
    picker.id = 'ami-img-picker';
    picker.style.display = 'none';
    picker.onchange = onImagePicked;
    document.body.appendChild(picker);

    // Toast
    const toast = document.createElement('div');
    toast.id = 'ami-toast';
    document.body.appendChild(toast);
  }

  // ── Tự động đánh dấu phần tử chữ có thể sửa ──
  function markEditableElements() {
    // Danh sách selector phổ biến trên tất cả trang AMI
    const TEXT_SELECTORS = [
      // Trang chủ
      '.hero-label', '.hero-h1', '.hero-script',
      '.cta-label', '.cta-phone',
      '.section-title', '.course-overlay', '.course-price', '.course-old', '.course-desc',
      '.utin-script', '.utin-sub', '.utin-item-text',
      '.svc-label', '.about-eyebrow', '.about-title', '.about-body',
      '.stat-num', '.stat-lbl', '.gallery-title',
      '.news-tag', '.news-title', '.news-date',
      '.float-label', '.float-phone',
      '.logo-text .name', '.logo-text .sub',
      '.logo-name', '.logo-sub',

      // Giới thiệu
      '.page-header h1', '.page-header p',
      '.page-content h2', '.page-content p',
      '.team-card-name', '.team-card-role',

      // Dịch vụ
      '.service-name', '.service-tag',
      '.service-detail-text h2', '.service-detail-text p',
      '.service-detail-text .tag',

      // Tin tức
      '.news-excerpt', '.news-readmore',
      '.news-item .news-title',

      // Tuyển dụng
      '.job-title', '.job-desc', '.job-intro',
      '.job-requirements li',

      // Liên hệ
      '.info-label', '.info-value',
      '.contact-form h2', '.contact-form p',

      // Sản phẩm
      '.product-name', '.product-cat', '.product-price', '.product-old',

      // Khoá học
      '.card-name', '.card-desc', '.card-price', '.card-old', '.card-tag',
      '.card-overlay', '.card-badge',

      // Chi tiết khoá học
      '.course-detail-title', '.course-tab-content p',
      '.reg-price', '.reg-orig', '.reg-note',

      // Footer chung
      '.footer-logo', '.footer-logo-sub', '.footer-desc',
      '.footer-contact span', '.footer-bank', '.footer-copy',
      'footer h4', 'footer li',

      // Sidebar
      '.stat-label',
    ];

    TEXT_SELECTORS.forEach(sel => {
      try {
        document.querySelectorAll(sel).forEach((el, i) => {
          if (!el.hasAttribute('data-editable')) {
            const key = sel.replace(/[^a-zA-Z0-9]/g, '_') + '_' + i;
            el.setAttribute('data-editable', key);
          }
        });
      } catch(e) {}
    });
  }

  // ── Bọc tất cả ảnh bằng wrapper ──
  function wrapAllImages() {
    const IMG_SELECTORS = [
      'img[src*="images/"]',   // Ảnh trong thư mục images/
      'img[src^="data:"]',      // Ảnh đã upload (base64)
      '.hero-photo img', '.course-thumb img', '.svc-img img',
      '.about-photo img', '.gal-item img', '.news-thumb img',
      '.service-img', '.service-detail-img img',
      '.about-img img', '.team-card-img img',
      '.news-item .news-thumb img',
      '.product-thumb img',
      '.logo-img',
    ];

    const seen = new WeakSet();
    IMG_SELECTORS.forEach(sel => {
      try {
        document.querySelectorAll(sel).forEach(img => {
          if (seen.has(img)) return;
          seen.add(img);
          if (img.closest('.ami-img-wrap')) return;

          const wrap = document.createElement('span');
          wrap.className = 'ami-img-wrap';
          wrap.style.cssText = 'display:block; width:100%; height:100%;';
          img.parentNode.insertBefore(wrap, img);
          wrap.appendChild(img);

          wrap.addEventListener('click', () => {
            if (!isAdmin) return;
            currentImgEl = img;
            document.getElementById('ami-img-picker').click();
          });
        });
      } catch(e) {}
    });
  }

  // ── Xử lý khi chọn ảnh mới ──
  function onImagePicked() {
    const file = this.files[0];
    if (!file || !currentImgEl) return;

    // Kiểm tra kích thước (tối đa 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast('⚠️ Ảnh quá lớn! Vui lòng dùng ảnh dưới 5MB.', '#c00');
      this.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      currentImgEl.src = e.target.result;
      currentImgEl.style.display = 'block';
      // Ẩn placeholder kế bên nếu có
      const sib = currentImgEl.nextElementSibling;
      if (sib && (sib.style.display === 'flex' || sib.style.display === 'block')) {
        sib.style.display = 'none';
      }
      showToast('✅ Ảnh đã cập nhật. Nhấn 💾 LƯU để giữ lại.');
    };
    reader.readAsDataURL(file);
    this.value = '';
  }

  // ── Toggle admin ──
  function toggleAdmin() {
    if (isAdmin) { exitAdmin(); return; }
    const pass = prompt('🔑 Nhập mật khẩu quản trị viên:');
    if (pass === null) return;
    if (pass !== ADMIN_PASS) {
      alert('❌ Sai mật khẩu!');
      return;
    }
    enterAdmin();
  }
  window._amiAdminExit = function() { exitAdmin(); };

  function enterAdmin() {
    isAdmin = true;
    markEditableElements();
    wrapAllImages();
    document.body.classList.add('ami-admin-mode');
    document.getElementById('ami-admin-bar').classList.add('active');
    document.getElementById('ami-admin-btn').textContent = '✕';

    document.querySelectorAll('[data-editable]').forEach(el => {
      el.contentEditable = 'true';
    });
    showToast('🛠️ Chế độ quản trị đã bật!', '#090');
  }

  function exitAdmin() {
    isAdmin = false;
    document.body.classList.remove('ami-admin-mode');
    document.getElementById('ami-admin-bar').classList.remove('active');
    document.getElementById('ami-admin-btn').textContent = '🔑';

    document.querySelectorAll('[data-editable]').forEach(el => {
      el.contentEditable = 'false';
    });
  }

  // ── Lưu tất cả thay đổi vào localStorage ──
  window._amiAdminSave = function() {
    const data = {};

    // Lưu chữ
    document.querySelectorAll('[data-editable]').forEach(el => {
      const key = el.getAttribute('data-editable');
      data['txt_' + key] = el.innerHTML;
    });

    // Lưu ảnh (base64)
    let imgCount = 0;
    document.querySelectorAll('.ami-img-wrap img').forEach((img, i) => {
      if (img.src && img.src.startsWith('data:image')) {
        data['img_' + i] = img.src;
        data['img_sel_' + i] = img.className + '|' + (img.alt || '') + '|' + i;
        imgCount++;
      }
    });

    // Lưu vị trí ảnh bằng index toàn bộ ảnh trên trang
    const allImgs = Array.from(document.querySelectorAll('.ami-img-wrap img'));
    allImgs.forEach((img, i) => {
      if (img.src && img.src.startsWith('data:image')) {
        data['imgidx_' + i] = img.src;
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      showToast('✅ Đã lưu ' + Object.keys(data).length + ' thay đổi!', '#090');
    } catch(e) {
      if (e.name === 'QuotaExceededError') {
        alert('⚠️ Bộ nhớ đầy! Hãy xoá bớt ảnh cũ hoặc dùng ảnh nhỏ hơn (dưới 1MB).');
      }
    }
  };

  // ── Nạp dữ liệu đã lưu khi trang mở ──
  function loadSaved() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    let data;
    try { data = JSON.parse(raw); } catch(e) { return; }

    // Nạp chữ ngay
    markEditableElements();
    document.querySelectorAll('[data-editable]').forEach(el => {
      const key = 'txt_' + el.getAttribute('data-editable');
      if (data[key] !== undefined) el.innerHTML = data[key];
    });

    // Nạp ảnh sau khi DOM sẵn sàng
    setTimeout(() => {
      wrapAllImages();
      const allImgs = Array.from(document.querySelectorAll('.ami-img-wrap img'));
      allImgs.forEach((img, i) => {
        const saved = data['imgidx_' + i];
        if (saved) {
          img.src = saved;
          img.style.display = 'block';
          const sib = img.nextElementSibling;
          if (sib) sib.style.display = 'none';
        }
      });
    }, 200);
  }

  // ── Toast thông báo nhỏ ──
  function showToast(msg, color) {
    const t = document.getElementById('ami-toast');
    if (!t) return;
    t.textContent = msg;
    t.style.borderLeftColor = color || '#0c0';
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 3000);
  }

  // ── Khởi chạy ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectUI(); loadSaved(); });
  } else {
    injectUI(); loadSaved();
  }
})();
