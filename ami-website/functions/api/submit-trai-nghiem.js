// Cloudflare Pages Function — nhận dữ liệu đăng ký "Trải nghiệm Makeup miễn phí"
// (trang trai-nghiem-mien-phi.html) và ghi vào bảng "Đăng Ký Trải Nghiệm Miễn Phí"
// trong Lark Base "CRM THÚY THÚY".
//
// Dùng chung LARK_APP_ID / LARK_APP_SECRET đã cấu hình sẵn cho submit-booking.js
// (Cloudflare Pages > Settings > Environment variables) — không cần thêm biến môi trường mới.

const LARK_API = 'https://open.larksuite.com/open-apis';
const BASE_TOKEN = 'O2qIbEaIYabXEGsW6Dzjs0LCpZg';
const TABLE_ID = 'tblGwNxY4ep5Zdsp';

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();

    if (!env.LARK_APP_ID || !env.LARK_APP_SECRET) {
      return json({ ok: false, error: 'Thiếu cấu hình LARK_APP_ID/LARK_APP_SECRET trên Cloudflare Pages' }, 500);
    }
    if (!body.name || !body.phone) {
      return json({ ok: false, error: 'Thiếu họ tên hoặc số điện thoại' }, 400);
    }

    const token = await getTenantAccessToken(env);

    const fields = {
      'Họ và tên': body.name,
      'Số điện thoại': body.phone,
      'Trạng thái': 'Mới',
    };
    if (body.email) fields['Email'] = body.email;
    if (body.address) fields['Địa chỉ'] = body.address;
    if (body.age) fields['Độ tuổi'] = body.age;
    if (body.occupation) fields['Bạn đang là'] = body.occupation;

    const createRes = await fetch(
      `${LARK_API}/bitable/v1/apps/${BASE_TOKEN}/tables/${TABLE_ID}/records`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields }),
      }
    );
    const createData = await createRes.json();
    if (createData.code !== 0) {
      return json({ ok: false, error: 'Lark record error', detail: createData }, 502);
    }

    return json({ ok: true, record_id: createData.data?.record?.record_id });
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

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
