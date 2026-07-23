// Cloudflare Pages Function — nhận dữ liệu từ phieu-ung-tuyen.html
// và ghi vào bảng "6.0 Ứng viên - Phiếu ứng tuyển" trong Lark Base "CRM THÚY THÚY".
// Đồng thời soạn bản phân tích chi tiết (thần số học, DISC, xếp hạng vị trí, cách quản lý,
// điểm rủi ro) và gửi vào nhóm Lark nội bộ qua Custom Bot webhook — nội dung này chỉ nằm ở
// server, không gửi về trình duyệt nên ứng viên không đọc được.
//
// Dùng chung LARK_APP_ID / LARK_APP_SECRET đã cấu hình sẵn cho submit-booking.js
// (Cloudflare Pages > Settings > Environment variables) — không cần thêm biến môi trường mới
// cho phần ghi Base. Cần thêm 1 biến: LARK_WEBHOOK_TUYEN_DUNG (webhook Custom Bot của nhóm
// "AMI - Đánh giá ứng viên").

const LARK_API = 'https://open.larksuite.com/open-apis';
const BASE_TOKEN = 'O2qIbEaIYabXEGsW6Dzjs0LCpZg';
const TABLE_ID = 'tblZvxFMVOBtG6Ou';

const NUM = {
  1: { title: 'Người Dẫn Đầu', key: 'Độc lập · Tiên phong', one: 'Bạn sinh ra để chủ động và dẫn dắt.',
    strengths: ['Chủ động', 'Quyết đoán', 'Dám chịu trách nhiệm'],
    work: 'Thích tự chủ, làm tốt nhất khi được giao mục tiêu rõ ràng và quyền quyết.', watch: 'Bướng, khó nghe ý kiến, dễ áp đặt.' },
  2: { title: 'Người Kết Nối', key: 'Hợp tác · Nhạy cảm', one: 'Bạn toả sáng khi làm cùng và hỗ trợ người khác.',
    strengths: ['Khéo léo', 'Biết lắng nghe', 'Giữ hoà khí'],
    work: 'Hợp vai trò phối hợp, chăm sóc, hỗ trợ; không thích cạnh tranh gay gắt.', watch: 'Ngại va chạm, dễ tổn thương, thiếu quyết đoán.' },
  3: { title: 'Người Truyền Cảm Hứng', key: 'Sáng tạo · Biểu đạt', one: 'Bạn giàu ý tưởng và có duyên với mọi người.',
    strengths: ['Giao tiếp giỏi', 'Vui vẻ', 'Nhiều ý tưởng'],
    work: 'Hợp việc sáng tạo, content, tương tác khách; cần không gian thể hiện.', watch: 'Cả thèm chóng chán, thiếu kỷ luật, dễ sao nhãng.' },
  4: { title: 'Người Xây Nền', key: 'Kỷ luật · Thực tế', one: 'Bạn đáng tin và làm việc có hệ thống.',
    strengths: ['Chăm chỉ', 'Tỉ mỉ', 'Đáng tin cậy'],
    work: 'Giỏi quy trình, việc lặp lại, nền tảng vận hành; cần sự rõ ràng, ổn định.', watch: 'Cứng nhắc, ngại thay đổi, chậm thích nghi.' },
  5: { title: 'Người Tự Do', key: 'Linh hoạt · Đổi thay', one: 'Bạn nhanh nhạy, thích nghi và giỏi xoay xở.',
    strengths: ['Năng động', 'Thích nghi tốt', 'Giỏi xoay xở'],
    work: 'Hợp việc nhiều biến hoá, gặp gỡ, bán hàng; ghét gò bó lặp lại.', watch: 'Thiếu kiên định, dễ bỏ dở, khó cam kết dài.' },
  6: { title: 'Người Chăm Sóc', key: 'Trách nhiệm · Phục vụ', one: 'Bạn tận tâm và ấm áp với người xung quanh.',
    strengths: ['Tận tâm', 'Ấm áp', 'Có trách nhiệm'],
    work: 'Toả sáng ở chăm khách, hỗ trợ học viên, giữ chất lượng dịch vụ.', watch: 'Ôm việc, khó từ chối, dễ kiệt sức, hay lo.' },
  7: { title: 'Người Phân Tích', key: 'Chuyên sâu · Trí tuệ', one: 'Bạn tư duy sắc và có chiều sâu chuyên môn.',
    strengths: ['Tư duy sắc', 'Quan sát kỹ', 'Chuyên môn sâu'],
    work: 'Hợp việc cần phân tích, nghiên cứu; cần yên tĩnh và không gian riêng.', watch: 'Xa cách, ít nói, khó gần, hay hoài nghi.' },
  8: { title: 'Người Kinh Doanh', key: 'Quyền lực · Tham vọng', one: 'Bạn có tư duy tiền bạc và hướng kết quả lớn.',
    strengths: ['Tư duy kinh doanh', 'Tổ chức tốt', 'Tham vọng'],
    work: 'Hợp quản lý, doanh số, mục tiêu lớn; cần phần thưởng xứng đáng.', watch: 'Đề cao vật chất, dễ độc đoán, áp lực cao.' },
  9: { title: 'Người Lý Tưởng', key: 'Nhân đạo · Cống hiến', one: 'Bạn rộng lượng và làm việc vì ý nghĩa.',
    strengths: ['Rộng lượng', 'Có tầm nhìn', 'Giàu cảm thông'],
    work: 'Làm tốt khi công việc có ý nghĩa; giỏi kết nối cộng đồng.', watch: 'Mơ mộng, ôm đồm, dễ thất vọng khi thực tế phũ.' },
  11: { title: 'Người Truyền Lửa (số bậc thầy)', key: 'Trực giác · Cảm hứng', one: 'Bạn có trực giác mạnh và truyền cảm hứng.',
    strengths: ['Trực giác nhạy', 'Truyền cảm hứng', 'Lý tưởng'],
    work: 'Sáng tạo & dẫn dắt tinh thần; cần môi trường tích cực, ý nghĩa.', watch: 'Nhạy cảm thái quá, dao động cảm xúc, áp lực nội tâm.' },
  22: { title: 'Người Kiến Tạo (số bậc thầy)', key: 'Tầm nhìn lớn · Hiện thực hoá', one: 'Bạn vừa mơ lớn vừa làm được việc lớn.',
    strengths: ['Tầm nhìn lớn', 'Tổ chức tầm cỡ', 'Đáng tin'],
    work: 'Hợp dự án lớn, xây hệ thống; cần mục tiêu xứng tầm.', watch: 'Tự đặt áp lực cao, dễ quá tải, cầu toàn.' },
  33: { title: 'Người Thầy (số bậc thầy)', key: 'Dìu dắt · Yêu thương', one: 'Bạn giàu tình thương và giỏi nâng đỡ người khác.',
    strengths: ['Giàu tình thương', 'Giỏi truyền dạy', 'Nâng đỡ người khác'],
    work: 'Toả sáng ở đào tạo, dẫn dắt, chăm sóc học viên.', watch: 'Hy sinh quá mức, ôm cảm xúc người khác, tự áp lực.' },
};

const DISC = {
  D: { name: 'Thống Trị (Dominance)', key: 'Quyết đoán · Hướng kết quả', one: 'Mạnh mẽ, dứt khoát, luôn hướng đến kết quả.',
    strengths: ['Quyết đoán', 'Dám làm', 'Chịu áp lực tốt', 'Hướng kết quả'], work: 'Nhanh, thích thử thách, tự chủ, ghét lề mề.', watch: 'Nóng tính, áp đặt, thiếu kiên nhẫn, dễ va chạm.',
    manage: ['Nói thẳng, ngắn gọn — đừng vòng vo.', 'Giao mục tiêu kèm quyền tự quyết, đừng quản vặt.', 'Thách thức bằng KPI, con số cụ thể.', 'Tranh luận bằng kết quả, không bằng cảm xúc.'] },
  I: { name: 'Ảnh Hưởng (Influence)', key: 'Nhiệt tình · Kết nối', one: 'Hoạt ngôn, lạc quan, giỏi tạo quan hệ và thuyết phục.',
    strengths: ['Hoạt ngôn', 'Lạc quan', 'Tạo quan hệ giỏi', 'Thuyết phục tốt'], work: 'Thích môi trường vui, tương tác, được chú ý.', watch: 'Thiếu kỷ luật, hứa nhiều, mau chán, ngại chi tiết.',
    manage: ['Khen ngợi công khai, ghi nhận thường xuyên.', 'Cho không gian giao tiếp & thể hiện.', "Biến mục tiêu thành 'trò chơi', thử thách vui.", 'Theo sát deadline & chi tiết giúp họ.'] },
  S: { name: 'Kiên Định (Steadiness)', key: 'Ổn định · Trung thành', one: 'Kiên nhẫn, đáng tin và trung thành bền bỉ.',
    strengths: ['Kiên nhẫn', 'Đáng tin', 'Trung thành', 'Hợp tác tốt'], work: 'Thích ổn định, quy trình quen, môi trường hoà thuận.', watch: "Ngại thay đổi, hơi chậm, né xung đột, khó nói 'không'.",
    manage: ['Tạo cảm giác an toàn & gắn bó lâu dài.', 'Báo trước mọi thay đổi, đừng ép gấp.', 'Quan tâm chân thành, ấm áp, kiên nhẫn hướng dẫn.', 'Ghi nhận sự bền bỉ & lòng trung thành.'] },
  C: { name: 'Tuân Thủ (Compliance)', key: 'Chính xác · Chuẩn mực', one: 'Tỉ mỉ, logic, đề cao chất lượng và nguyên tắc.',
    strengths: ['Tỉ mỉ', 'Logic', 'Cẩn thận', 'Chất lượng cao'], work: 'Thích rõ ràng, dữ liệu, quy chuẩn, có không gian suy nghĩ.', watch: 'Cầu toàn, chậm quyết, hơi lạnh, hay nghi ngờ.',
    manage: ['Đưa dữ liệu & lý do rõ ràng cho mọi yêu cầu.', 'Đặt tiêu chuẩn chất lượng minh bạch.', 'Cho thời gian phân tích, đừng hối thúc.', 'Phản hồi bằng sự kiện cụ thể, không cảm tính.'] },
};

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

    // Gửi bản phân tích chi tiết vào nhóm Lark nội bộ — không chặn phản hồi cho ứng viên nếu lỗi.
    // waitUntil() giữ cho fetch này chạy xong dù response đã trả về trước cho trình duyệt.
    if (env.LARK_WEBHOOK_TUYEN_DUNG) {
      const text = buildReport(body);
      context.waitUntil(
        fetch(env.LARK_WEBHOOK_TUYEN_DUNG, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({ msg_type: 'text', content: { text } }),
        }).catch((err) => console.error('Gửi Lark webhook thất bại:', err))
      );
    }

    return json({ ok: true, record_id: createData.data?.record?.record_id });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) }, 500);
  }
}

function buildReport(body) {
  const skills = body.skills || {};
  const disc = body.discCounts || {};
  const np = NUM[body.lifePath];
  const dp = DISC[body.discPrimary];
  const sp = DISC[body.discSecondary];
  const roles = Array.isArray(body.roles) ? body.roles : [];

  const lines = [];
  lines.push(`🆕 ỨNG VIÊN MỚI — ${body.name}`);
  lines.push('');
  lines.push('📋 HỒ SƠ');
  lines.push(`• Vị trí ứng tuyển: ${body.roleName || '—'}`);
  lines.push(`• SĐT: ${body.phone || '—'}  |  Email: ${body.email || '—'}`);
  lines.push(`• Ngày sinh: ${body.dob || '—'}  |  Giới tính: ${body.gender || '—'}`);
  lines.push(`• Kinh nghiệm: ${body.exp || '—'}  |  Có thể bắt đầu: ${body.start || '—'}`);
  lines.push(`• Lương mong muốn: ${body.salary || '—'}`);
  if (body.address) lines.push(`• Địa chỉ: ${body.address}`);

  lines.push('');
  lines.push('💪 TỰ ĐÁNH GIÁ NĂNG LỰC (/5)');
  lines.push(`• Chuyên môn makeup: ${skills.skill ?? '—'}  |  Giao tiếp: ${skills.comm ?? '—'}  |  Chủ động: ${skills.learn ?? '—'}`);
  lines.push(`• Chịu áp lực: ${skills.pressure ?? '—'}  |  Tỉ mỉ: ${skills.detail ?? '—'}  |  Làm việc nhóm: ${skills.team ?? '—'}`);
  if (body.strength) lines.push(`• Điểm mạnh tự nhận: ${body.strength}`);
  if (body.why) lines.push(`• Lý do ứng tuyển: ${body.why}`);

  if (np) {
    lines.push('');
    lines.push(`🔮 THẦN SỐ HỌC — Số ${body.lifePath}: ${np.title}`);
    lines.push(np.one);
    lines.push(`Điểm mạnh: ${np.strengths.join(', ')}`);
    lines.push(`Phong cách làm việc: ${np.work}`);
    lines.push(`Cần lưu ý: ${np.watch}`);
  }

  if (dp) {
    lines.push('');
    lines.push(`🧭 DISC — Nhóm ${body.discPrimary}/${body.discSecondary || '—'}: ${dp.name}`);
    lines.push(`D ${disc.D ?? 0} · I ${disc.I ?? 0} · S ${disc.S ?? 0} · C ${disc.C ?? 0}  (trên ${body.discTotal ?? '—'} câu)`);
    lines.push(dp.one);
    lines.push(`Cần lưu ý: ${dp.watch}`);
    if (sp) lines.push(`Xu hướng phụ: ${sp.name} — ${sp.key}`);
  }

  lines.push('');
  lines.push(`🎯 KHUYẾN NGHỊ TUYỂN DỤNG: ${body.recommendation || '—'} (${body.fitPercent ?? '—'}% phù hợp vị trí đã ứng tuyển)`);

  if (roles.length) {
    lines.push('');
    lines.push('📊 XẾP HẠNG VỊ TRÍ PHÙ HỢP');
    roles.forEach((r, i) => lines.push(`${i + 1}. ${r.name} — ${r.fit}%`));
  }

  if (dp) {
    lines.push('');
    lines.push('🤝 CÁCH QUẢN LÝ GỢI Ý');
    dp.manage.forEach((m) => lines.push(`- ${m}`));
    if (np) lines.push(`- ${np.watch.replace(/\.$/, '')} → cần: ${np.work}`);
  }

  lines.push('');
  lines.push('——');
  lines.push('Ghi chú: Thần số học & DISC là góc nhìn tham khảo, nên kết hợp phỏng vấn/thử việc thực tế.');

  return lines.join('\n');
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
