// Cloudflare Pages Function — nhận dữ liệu từ phieu-ung-tuyen.html
// và ghi vào bảng "6.0 Ứng viên - Phiếu ứng tuyển" trong Lark Base "CRM THÚY THÚY".
//
// Dùng chung LARK_APP_ID / LARK_APP_SECRET đã cấu hình sẵn cho submit-booking.js
// (Cloudflare Pages > Settings > Environment variables) — không cần thêm biến môi trường mới.

const LARK_API = 'https://open.larksuite.com/open-apis';
const BASE_TOKEN = 'O2qIbEaIYabXEGsW6Dzjs0LCpZg';
const TABLE_ID = 'tblZvxFMVOBtG6Ou';

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
    const skills = body.skills || {};
    const disc = body.discCounts || {};

    const fields = {
      'Họ tên': body.name,
      'Ngày ứng tuyển': Date.now(),
      'SĐT': body.phone,
      'Trạng thái xử lý': 'Chờ xem xét',
    };
    if (body.dob) fields['Ngày sinh'] = new Date(body.dob).getTime();
    if (body.email) fields['Email'] = body.email;
    if (body.gender) fields['Giới tính'] = body.gender;
    if (body.roleName) fields['Vị trí ứng tuyển'] = body.roleName;
    if (body.address) fields['Địa chỉ'] = body.address;
    if (body.exp) fields['Kinh nghiệm'] = body.exp;
    if (body.start) fields['Có thể bắt đầu'] = body.start;
    if (body.salary) fields['Lương mong muốn'] = body.salary;
    if (body.strength) fields['Điểm mạnh (tự nhận)'] = body.strength;
    if (body.why) fields['Lý do ứng tuyển'] = body.why;
    if (skills.skill) fields['Điểm: Chuyên môn makeup'] = +skills.skill;
    if (skills.comm) fields['Điểm: Giao tiếp'] = +skills.comm;
    if (skills.learn) fields['Điểm: Chủ động'] = +skills.learn;
    if (skills.pressure) fields['Điểm: Chịu áp lực'] = +skills.pressure;
    if (skills.detail) fields['Điểm: Tỉ mỉ'] = +skills.detail;
    if (skills.team) fields['Điểm: Làm việc nhóm'] = +skills.team;
    if (body.lifePath) fields['Số thần số học'] = +body.lifePath;
    if (body.discPrimary) fields['Nhóm DISC'] = body.discPrimary + '/' + (body.discSecondary || '');
    if (disc.D !== undefined) fields['DISC D'] = +disc.D;
    if (disc.I !== undefined) fields['DISC I'] = +disc.I;
    if (disc.S !== undefined) fields['DISC S'] = +disc.S;
    if (disc.C !== undefined) fields['DISC C'] = +disc.C;
    if (body.recommendation) fields['Khuyến nghị tuyển dụng'] = body.recommendation;
    if (body.fitPercent !== undefined) fields['Độ phù hợp (%)'] = +body.fitPercent;
    if (body.bestRoleName) fields['Vị trí phù hợp nhất'] = body.bestRoleName;

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
