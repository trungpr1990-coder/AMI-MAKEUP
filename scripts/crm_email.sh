#!/bin/bash
# CRM THÚY THÚY - Email Integration Script
# Kết nối Email (IMAP/SMTP) với Lark Base CRM

# ===================== CONFIG =====================
EMAIL="troly1@thuytranmakeup.com"
EMAIL_PASS="OciSmV5sofbJNPlL"
IMAP_HOST="imap.larksuite.com"
IMAP_PORT=993
SMTP_HOST="smtp.larksuite.com"
SMTP_PORT=465

LARK_APP_ID="${LARK_APP_ID}"
LARK_APP_SECRET="${LARK_APP_SECRET}"
BASE_TOKEN="O2qIbEaIYabXEGsW6Dzjs0LCpZg"

TABLE_KHACH_HANG="tbleipSN9VHY2LsP"
TABLE_DON_HANG="tblB6mKeGBQiufvL"

# ===================== FUNCTIONS =====================

get_lark_token() {
  curl -s -X POST "https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal" \
    -H "Content-Type: application/json" \
    -d "{\"app_id\":\"$LARK_APP_ID\",\"app_secret\":\"$LARK_APP_SECRET\"}" \
    | grep -o '"tenant_access_token":"[^"]*"' | cut -d'"' -f4
}

# Kiểm tra email trong INBOX
check_inbox() {
  echo "📥 Kiểm tra INBOX..."
  printf "A1 LOGIN $EMAIL $EMAIL_PASS\r\nA2 SELECT INBOX\r\nA3 SEARCH ALL\r\nA4 LOGOUT\r\n" \
    | openssl s_client -connect $IMAP_HOST:$IMAP_PORT -quiet 2>/dev/null \
    | grep -E "EXISTS|SEARCH"
}

# Gửi email tới khách hàng
send_email() {
  local TO="$1"
  local SUBJECT="$2"
  local BODY="$3"
  local DATE=$(date -R)

  USER_B64=$(echo -n "$EMAIL" | base64)
  PASS_B64=$(echo -n "$EMAIL_PASS" | base64)

  cat << SMTP_EOF | openssl s_client -connect $SMTP_HOST:$SMTP_PORT -quiet 2>/dev/null | tail -5
EHLO thuytranmakeup.com
AUTH LOGIN
$USER_B64
$PASS_B64
MAIL FROM:<$EMAIL>
RCPT TO:<$TO>
DATA
From: CRM Thuy Thuy <$EMAIL>
To: $TO
Subject: $SUBJECT
Content-Type: text/plain; charset=UTF-8
Date: $DATE

$BODY

--
Trân trọng,
Thúy Trần Makeup Studio
Email: troly1@thuytranmakeup.com
.
QUIT
SMTP_EOF
}

# Gửi email chúc mừng sinh nhật cho khách hàng
send_birthday_email() {
  local NAME="$1"
  local TO="$2"
  send_email "$TO" \
    "[Thúy Trần Makeup] Chúc Mừng Sinh Nhật $NAME! 🎂" \
    "Kính gửi $NAME,

Nhân ngày sinh nhật của bạn, toàn thể đội ngũ Thúy Trần Makeup Studio xin gửi lời chúc mừng sinh nhật tốt đẹp nhất!

Nhân dịp đặc biệt này, chúng tôi tặng bạn ưu đãi GIẢM 10% cho lần đặt dịch vụ tiếp theo.
Mã ưu đãi: BDAY$(date +%Y)

Liên hệ đặt lịch: troly1@thuytranmakeup.com

Chúc bạn một ngày sinh nhật thật hạnh phúc!"
  echo "✅ Đã gửi email sinh nhật tới: $TO"
}

# Lấy danh sách khách hàng từ CRM
get_customers() {
  local TOKEN=$(get_lark_token)
  echo "👥 Danh sách khách hàng trong CRM:"
  echo "----------------------------------------"
  curl -s "https://open.larksuite.com/open-apis/bitable/v1/apps/$BASE_TOKEN/tables/$TABLE_KHACH_HANG/records?page_size=50" \
    -H "Authorization: Bearer $TOKEN" \
    | grep -o '"Họ và Tên":"[^"]*"\|"Email":"[^"]*"\|"Mã Khách Hàng":"[^"]*"' \
    | paste - - - \
    | sed 's/"Mã Khách Hàng":"//g;s/"Họ và Tên":"//g;s/"Email":"//g;s/"//g' \
    | awk '{print NR". "$0}'
}

# Thêm khách hàng mới vào CRM
add_customer() {
  local NAME="$1"
  local PHONE="$2"
  local EMAIL_KH="$3"
  local TOKEN=$(get_lark_token)

  RESULT=$(curl -s -X POST \
    "https://open.larksuite.com/open-apis/bitable/v1/apps/$BASE_TOKEN/tables/$TABLE_KHACH_HANG/records" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"fields\":{\"Họ và Tên\":\"$NAME\",\"Số điện thoại\":\"$PHONE\",\"Email\":\"$EMAIL_KH\"}}")

  echo "$RESULT" | grep -q '"code":0' && echo "✅ Đã thêm khách hàng: $NAME" || echo "❌ Lỗi: $RESULT"
}

# Gửi email hàng loạt tới tất cả khách hàng có email
broadcast_email() {
  local SUBJECT="$1"
  local BODY="$2"
  local TOKEN=$(get_lark_token)

  echo "📢 Đang gửi email hàng loạt..."

  RECORDS=$(curl -s "https://open.larksuite.com/open-apis/bitable/v1/apps/$BASE_TOKEN/tables/$TABLE_KHACH_HANG/records?page_size=100" \
    -H "Authorization: Bearer $TOKEN")

  # Extract emails and names
  echo "$RECORDS" | grep -o '"Họ và Tên":"[^"]*"' | while read name_field; do
    NAME=$(echo $name_field | cut -d'"' -f4)
    echo "Sending to: $NAME"
  done
}

# ===================== MENU =====================
echo "================================================"
echo "   CRM THÚY THÚY - Email Integration System   "
echo "================================================"
echo ""
echo "1. Kiểm tra INBOX"
echo "2. Xem danh sách khách hàng trong CRM"
echo "3. Gửi email test"
echo "4. Gửi email sinh nhật (nhập tên & email)"
echo "5. Thêm khách hàng mới"
echo "q. Thoát"
echo ""

case "$1" in
  "inbox")    check_inbox ;;
  "customers") get_customers ;;
  "test")     send_email "$EMAIL" "[TEST] Kết nối CRM thành công" "Hệ thống Email CRM hoạt động bình thường." ;;
  "birthday") send_birthday_email "$2" "$3" ;;
  "add")      add_customer "$2" "$3" "$4" ;;
  *)
    echo "Dùng: $0 [inbox|customers|test|birthday <tên> <email>|add <tên> <sdt> <email>]"
    echo ""
    echo "Ví dụ:"
    echo "  $0 inbox              # Kiểm tra email mới"
    echo "  $0 customers          # Xem danh sách khách hàng"
    echo "  $0 test               # Gửi email test"
    echo "  $0 birthday 'Lan' lan@gmail.com"
    echo "  $0 add 'Nguyễn Lan' 0901234567 lan@gmail.com"
    ;;
esac
