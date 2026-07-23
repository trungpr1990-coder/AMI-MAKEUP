// Cloudflare Pages Function — nhận dữ liệu đăng ký từ trang landing
// "Trải Nghiệm Makeup Không Đồng" (trainghiemmakeupkhongdong.thuytranmakeup.com,
// project Cloudflare Pages riêng "thuytranmakeup") và ghi vào bảng
// "Đăng Ký AMI-Makeup Cá Nhân" trong Lark Base "CRM THÚY THÚY".
//
// Trang landing chạy trên project Pages khác (domain con khác), nên request
// gọi sang đây là cross-origin — cần set CORS header và xử lý preflight OPTIONS.
//
// Dùng chung LARK_APP_ID / LARK_APP_SECRET đã cấu hình sẵn cho submit-booking.js
// (Cloudflare Pages > Settings > Environment variables trên project ami-website).

const LARK_API = 'https://open.larksuite.com/open-apis';
const BASE_TOKEN = 'O2qIbEaIYabXEGsW6Dzjs0LCpZg';
const TABLE_ID = 'tblLtslAYpwMIJir';

const ALLOWED_ORIGINS = new Set([
  'https://trainghiemmakeupkhongdong.thuytranmakeup.com',
  'https://thuytranmakeup.pages.dev',
]);

export async function onRequestPost(context) {
  const { request, env } = context;
  const corsHeaders = getCorsHeaders(request);

  try {
    const body = await request.json();

    if (!env.LARK_APP_ID || !env.LARK_APP_SECRET) {
      return json({ ok: false, error: 'Thiếu cấu hình LARK_APP_ID/LARK_APP_SECRET trên Cloudflare Pages' }, 500, corsHeaders);
    }
    if (!body.name || !body.phone) {
      return json({ ok: false, error: 'Thiếu họ tên hoặc số điện thoại' }, 400, corsHeaders);
    }

    const token = await getTenantAccessToken(env);

    const fields = {
      'Họ và tên': body.name,
      'Số điện thoại': body.phone,
      'Trạng thái': 'Mới',
    };
    if (body.email) fields['Email'] = body.email;
    if (body.address) fields['Địa chỉ'] = body.address;
    if (body.age) fields['Độ tuổi'] = Number(body.age);
    if (body.occupation) fields['Bạn đang là'] = body.occupation;
    if (body.wish) fields['Mong muốn'] = body.wish;

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
      return json({ ok: false, error: 'Lark record error', detail: createData }, 502, corsHeaders);
    }

    return json({ ok: true, record_id: createData.data?.record?.record_id }, 200, corsHeaders);
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) }, 500, corsHeaders);
  }
}

export async function onRequestOptions(context) {
  return new Response(null, { status: 204, headers: getCorsHeaders(context.request) });
}

function getCorsHeaders(request) {
  const origin = request.headers.get('Origin');
  const allowOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://trainghiemmakeupkhongdong.thuytranmakeup.com';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
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

function json(obj, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}
