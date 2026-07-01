// Cloudflare Pages Function — nhận dữ liệu đặt lịch từ dat-lich.html
// và ghi vào bảng "0. Đăng Ký Web" trong Lark Base.
//
// Cần cấu hình 4 biến môi trường trong Cloudflare Pages (Settings > Environment variables):
//   LARK_APP_ID       - App ID của ứng dụng Lark (đã có quyền ghi vào Base)
//   LARK_APP_SECRET   - App Secret (đánh dấu "Encrypt")
//   LARK_BASE_TOKEN   - O2qIbEaIYabXEGsW6Dzjs0LCpZg
//   LARK_TABLE_ID     - tbldA6DFYJwAUBMl

const LARK_API = 'https://open.larksuite.com/open-apis';

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();

    if (!env.LARK_APP_ID || !env.LARK_APP_SECRET || !env.LARK_BASE_TOKEN || !env.LARK_TABLE_ID) {
      return json({ ok: false, error: 'Thiếu cấu hình LARK_* trên Cloudflare Pages' }, 500);
    }

    const token = await getTenantAccessToken(env);

    // Upload từng nhóm ảnh (nếu có), mỗi ảnh là { name, dataUrl } — dùng chung cho mọi ngày của đơn này
    const depositTokens = await uploadImages(body.depositImages, env.LARK_BASE_TOKEN, token);
    const makeupTokens  = await uploadImages(body.makeupImages, env.LARK_BASE_TOKEN, token);
    const hairTokens    = await uploadImages(body.hairImages, env.LARK_BASE_TOKEN, token);

    const orderCode = body.orderCode || ('AMI-' + Date.now());
    const days = Array.isArray(body.days) && body.days.length ? body.days : [{}];

    const baseFields = {
      'Mã đơn': orderCode,
      'Họ và tên': body.contactName || body.name || '',
      'Địa chỉ': body.address || '',
      'Dịch vụ': body.service || '',
      'Ghi chú dịch vụ': body.note || '',
      'Trạng thái': 'Mới',
    };
    if (body.phone) baseFields['Số điện thoại'] = body.phone;
    if (body.email) baseFields['Email'] = body.email;
    if (body.mapsLink) baseFields['Google Maps'] = { text: 'Xem bản đồ', link: body.mapsLink };
    if (body.contactChannel) baseFields['Kênh nhắn tin'] = body.contactChannel;
    if (body.dob) baseFields['Ngày sinh'] = new Date(body.dob).getTime();
    if (depositTokens.length) baseFields['Ảnh đặt cọc'] = depositTokens.map(t => ({ file_token: t }));
    if (makeupTokens.length) baseFields['Ảnh makeup mẫu'] = makeupTokens.map(t => ({ file_token: t }));
    if (hairTokens.length) baseFields['Ảnh kiểu tóc mẫu'] = hairTokens.map(t => ({ file_token: t }));

    // Mỗi ngày làm là 1 dòng riêng — để lọc/sắp xếp theo "Ngày làm" xem tổng quan lịch, tránh trùng lịch
    const records = days.map(d => {
      const fields = { ...baseFields };
      if (d.label) fields['Buổi'] = d.label;
      if (d.place) fields['Địa điểm'] = d.place;
      if (d.date && d.time) {
        // +07:00 = giờ Việt Nam — nếu không ghi rõ offset, JS sẽ hiểu là UTC và lệch 7 tiếng khi Lark hiển thị
        const ts = new Date(`${d.date}T${d.time}:00+07:00`).getTime();
        if (!isNaN(ts)) fields['Ngày làm'] = ts;
      }
      const soNguoi = d.codau !== undefined
        ? (+d.codau || 0) + (+d.me || 0) + (+d.nh || 0)
        : +d.qty || 0;
      if (soNguoi) fields['Số người'] = soNguoi;
      return { fields };
    });

    const createRes = await fetch(
      `${LARK_API}/bitable/v1/apps/${env.LARK_BASE_TOKEN}/tables/${env.LARK_TABLE_ID}/records/batch_create`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ records }),
      }
    );
    const createData = await createRes.json();
    if (createData.code !== 0) {
      return json({ ok: false, error: 'Lark record error', detail: createData }, 502);
    }

    return json({
      ok: true,
      order_code: orderCode,
      record_ids: (createData.data?.records || []).map(r => r.record_id),
    });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) }, 500);
  }
}

async function getTenantAccessToken(env) {
  const res = await fetch(`${LARK_API}/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: env.LARK_APP_ID, app_secret: env.LARK_APP_SECRET }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error('Không lấy được tenant_access_token: ' + JSON.stringify(data));
  return data.tenant_access_token;
}

// images: [{ name, src }] — "src" là data URL base64, khớp với format files.deposit/makeup/hair phía client
async function uploadImages(images, baseToken, token) {
  if (!Array.isArray(images) || images.length === 0) return [];
  const tokens = [];
  for (const img of images) {
    if (!img || !img.src) continue;
    const fileToken = await uploadOneImage(img.name || 'anh.jpg', img.src, baseToken, token);
    if (fileToken) tokens.push(fileToken);
  }
  return tokens;
}

async function uploadOneImage(name, dataUrl, baseToken, token) {
  const match = /^data:(.+?);base64,(.*)$/.exec(dataUrl);
  if (!match) return null;
  const binary = base64ToUint8Array(match[2]);

  const form = new FormData();
  form.append('file_name', name);
  form.append('parent_type', 'bitable_image');
  form.append('parent_node', baseToken);
  form.append('size', String(binary.byteLength));
  form.append('file', new Blob([binary]), name);

  const res = await fetch(`${LARK_API}/drive/v1/medias/upload_all`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
  const data = await res.json();
  if (data.code !== 0) return null;
  return data.data?.file_token || null;
}

function base64ToUint8Array(base64) {
  const binStr = atob(base64);
  const bytes = new Uint8Array(binStr.length);
  for (let i = 0; i < binStr.length; i++) bytes[i] = binStr.charCodeAt(i);
  return bytes;
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
