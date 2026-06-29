const client = require('./lark-client');

async function sendEmail() {
  const subject = 'Kết nối Lark CLI thành công — Tóm tắt thiết lập';
  const bodyHtml = `
<p>Chào anh/chị,</p>

<p>Tôi muốn chia sẻ tóm tắt quá trình kết nối <strong>Lark CLI</strong> vừa hoàn thành:</p>

<p><strong>Thông tin kết nối:</strong></p>
<ul>
  <li>App ID: <code>cli_aaaa95c08df8de17</code></li>
  <li>App: LARK CLI (Production app @ THUÝ TRẦN MAKEUP)</li>
  <li>Trạng thái: Kết nối thành công — Tenant Access Token đã lấy được</li>
</ul>

<p><strong>Công cụ đã cài:</strong></p>
<ul>
  <li>SDK Node.js: <code>@larksuite/node-sdk</code> (trong <code>scripts/</code>)</li>
  <li>CLI chính thức: <code>@larksuite/cli</code> v1.0.47 (qua npx)</li>
</ul>

<p><strong>26 skills tích hợp sẵn</strong> bao gồm: Calendar, Messenger, Docs, Drive, Sheets, Slides, Base/Bitable, Task, Mail, Contact, Wiki, OKR, Video Call, Whiteboard, Attendance, Approval, và các Workflow tự động.</p>

<p><strong>Bước tiếp theo:</strong></p>
<ul>
  <li>Bật Bot feature và cấp quyền <code>im:message:send_as_bot</code> trong Developer Console</li>
  <li>Chạy <code>lark-cli auth login</code> để xác thực đầy đủ</li>
</ul>

<p>Trân trọng.</p>
`;

  try {
    const res = await client.mail.userMailboxMessage.send({
      path: { user_mailbox_id: 'me' },
      data: {
        subject,
        to: [{ mail_address: 'doanmanhtrung610@gmail.com' }],
        body: { content: bodyHtml, body_type: 'html' },
      },
    });
    console.log('Gửi thành công!', JSON.stringify(res, null, 2));
  } catch (err) {
    console.error('Lỗi:', err.message);
    console.error(JSON.stringify(err?.response?.data || err, null, 2));
  }
}

sendEmail();
