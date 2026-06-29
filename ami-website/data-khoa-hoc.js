// ============================================================
// DỮ LIỆU KHOÁ HỌC — Sửa tại đây để cập nhật toàn bộ website
// ============================================================
const KHOA_HOC = [
  {
    id: 1,
    ten: "Khoá Học Make Up Pro 2026",
    ten_ngan: "Make Up Pro 2026",
    the: "Dành cho người mới bắt đầu",
    gia: "5.500.000đ",
    gia_goc: "7.000.000đ",
    hinh: "images/course-1.jpg",
    mo_ta_ngan: "Khoá học cơ bản toàn diện, phù hợp cho người chưa biết gì về makeup.",
    mo_ta_day_du: `
      <p>Khoá học Make Up Pro 2026 được thiết kế đặc biệt dành cho người mới bắt đầu,
      giúp bạn nắm vững kiến thức nền tảng và kỹ thuật trang điểm chuyên nghiệp từ cơ bản đến nâng cao.</p>
      <p>Sau khoá học, học viên hoàn toàn có thể tự trang điểm cho bản thân và khách hàng
      một cách tự tin, đạt chuẩn studio chuyên nghiệp.</p>
    `,
    thoi_luong: "3 - 4 tháng",
    buoi_hoc: "3 buổi/tuần",
    so_hoc_vien: "Tối đa 8 học viên/lớp",
    dia_diem: "TP. Hồ Chí Minh & Hà Nội",
    noi_dung: [
      "Kiến thức nền tảng: màu sắc, ánh sáng, dụng cụ",
      "Kỹ thuật xử lý da: che khuyết điểm, tạo nền hoàn hảo",
      "Tạo khối khuôn mặt: highlight & contour",
      "Kỹ thuật kẻ mắt, vẽ lông mày chuẩn form",
      "Tạo môi: mix son, vẽ môi nhiều kiểu",
      "Makeup ngày & tối — ứng dụng thực tế",
      "Thực hành trên mô hình người thật",
      "Ôn thi & làm bài kiểm tra cuối khoá",
    ],
    duoc_hoc: [
      "Chứng chỉ hoàn thành khoá học",
      "Hỗ trợ tư vấn nghề nghiệp sau khoá",
      "Tham gia cộng đồng học viên AMI",
      "Ôn luyện miễn phí trong 3 tháng",
    ],
  },
  {
    id: 2,
    ten: "Make Up Nâng Cao Cấp Tốc Sài Gòn 2026",
    ten_ngan: "Nâng Cao Cấp Tốc SG",
    the: "Chuyên nghiệp",
    gia: "12.000.000đ",
    gia_goc: "15.000.000đ",
    hinh: "images/course-2.jpg",
    mo_ta_ngan: "Khoá cấp tốc 6-4 ngày tại Phú Nhuận, TP.HCM — phù hợp người bận rộn.",
    mo_ta_day_du: `
      <p>Khoá học nâng cao được thiết kế theo hình thức cấp tốc,
      giúp học viên đã có nền tảng makeup nâng cấp kỹ năng lên trình độ chuyên nghiệp
      trong thời gian ngắn nhất.</p>
    `,
    thoi_luong: "6 - 4 ngày",
    buoi_hoc: "Học liên tục",
    so_hoc_vien: "Tối đa 6 học viên/lớp",
    dia_diem: "Phú Nhuận, TP. Hồ Chí Minh",
    noi_dung: [
      "Kỹ thuật makeup nâng cao: skin prep, complexion",
      "Eye design: cut crease, smokey, graphic liner",
      "Bridal makeup: cô dâu ngày, cô dâu tối",
      "Editorial & fashion makeup",
      "Airbrush makeup cơ bản",
      "Thực hành 100% trên người thật",
    ],
    duoc_hoc: [
      "Chứng chỉ nâng cao AMI Academy",
      "Portfolio cá nhân sau khoá",
      "Kết nối cơ hội làm việc",
    ],
  },
  {
    id: 3,
    ten: "Make Up Nâng Cao Cấp Tốc Hà Nội 2026",
    ten_ngan: "Nâng Cao Cấp Tốc HN",
    the: "Chuyên nghiệp",
    gia: "12.000.000đ",
    gia_goc: "15.000.000đ",
    hinh: "images/course-3.jpg",
    mo_ta_ngan: "3 ngày · 1 day training · 3 layout — tại Hà Nội.",
    mo_ta_day_du: `
      <p>Khoá học nâng cao cấp tốc dành cho học viên tại Hà Nội muốn nâng cấp kỹ năng
      trong thời gian ngắn. Chương trình tập trung vào thực hành 3 layout chuyên nghiệp.</p>
    `,
    thoi_luong: "3 ngày",
    buoi_hoc: "1 day training / 3 layout",
    so_hoc_vien: "Tối đa 6 học viên/lớp",
    dia_diem: "Hà Nội",
    noi_dung: [
      "Layout 1: Makeup ngày — tự nhiên & sang trọng",
      "Layout 2: Makeup cô dâu — bridal look",
      "Layout 3: Makeup tối — smokey & dramatic",
      "Kỹ thuật xử lý da nâng cao",
      "Q&A và tư vấn nghề nghiệp",
    ],
    duoc_hoc: [
      "Chứng chỉ nâng cao AMI Academy",
      "3 bộ ảnh portfolio",
      "Tư vấn định hướng nghề nghiệp",
    ],
  },
  {
    id: 4,
    ten: "Khoá Make Up Cá Nhân 2026",
    ten_ngan: "Make Up Cá Nhân",
    the: "Premium 1-1",
    gia: "18.000.000đ",
    gia_goc: "22.000.000đ",
    hinh: "images/course-4.jpg",
    mo_ta_ngan: "Học 1-1 với giảng viên, trợ giảng kèm, hỗ trợ 100% makeup artist.",
    mo_ta_day_du: `
      <p>Khoá học cá nhân 1-1 là chương trình cao cấp nhất của AMI,
      được thiết kế riêng cho từng học viên dựa trên mục tiêu và trình độ hiện tại.
      Giảng viên đồng hành xuyên suốt quá trình học.</p>
    `,
    thoi_luong: "Linh hoạt theo lịch học viên",
    buoi_hoc: "1-1 với giảng viên",
    so_hoc_vien: "1 học viên / lớp",
    dia_diem: "TP.HCM & Hà Nội",
    noi_dung: [
      "Chương trình học được cá nhân hoá 100%",
      "Tập trung vào điểm yếu của từng học viên",
      "Thực hành không giới hạn buổi",
      "Bao gồm toàn bộ nội dung từ cơ bản đến nâng cao",
      "Makeup thương mại, editorial, bridal",
    ],
    duoc_hoc: [
      "Chứng chỉ Master AMI Academy",
      "Portfolio chuyên nghiệp đầy đủ",
      "Kết nối việc làm ưu tiên",
      "Hỗ trợ sau khoá không giới hạn",
    ],
  },
  {
    id: 5,
    ten: "Khoá Online: Xử Lý Kỹ Thuật Nền Ngọc Trai",
    ten_ngan: "Online: Kỹ Thuật Nền",
    the: "Online",
    gia: "2.500.000đ",
    gia_goc: "3.500.000đ",
    hinh: "images/course-5.jpg",
    mo_ta_ngan: "Học online, nắm vững kỹ thuật xử lý nền ngọc trai độc quyền từ AMI.",
    mo_ta_day_du: `
      <p>Khoá học online tập trung vào kỹ thuật xử lý nền ngọc trai —
      một trong những kỹ thuật đặc trưng và được yêu thích nhất của AMI Academy.
      Học mọi lúc mọi nơi, không giới hạn thời gian.</p>
    `,
    thoi_luong: "Trọn đời (học lại bất cứ lúc nào)",
    buoi_hoc: "Video online tự học",
    so_hoc_vien: "Không giới hạn",
    dia_diem: "Online — toàn quốc",
    noi_dung: [
      "Lý thuyết về loại da và cách xử lý",
      "Kỹ thuật tạo nền ngọc trai — bí quyết độc quyền AMI",
      "Chọn màu foundation theo tông da",
      "Layering — chồng lớp để tạo độ sâu",
      "Setting và giữ nền bền cả ngày",
    ],
    duoc_hoc: [
      "Truy cập video trọn đời",
      "Chứng chỉ hoàn thành online",
      "Group hỏi đáp với giảng viên",
    ],
  },
  {
    id: 6,
    ten: "Khoá Online: Trang Điểm Mắt Ứng Dụng",
    ten_ngan: "Online: Trang Điểm Mắt",
    the: "Online",
    gia: "1.800.000đ",
    gia_goc: "2.500.000đ",
    hinh: "images/course-6.jpg",
    mo_ta_ngan: "Làm chủ kỹ thuật trang điểm mắt từ cơ bản đến nâng cao — học online.",
    mo_ta_day_du: `
      <p>Khoá học chuyên sâu về trang điểm mắt, bao gồm đầy đủ các kỹ thuật
      từ kẻ mắt cơ bản đến cut crease, smokey eye và graphic liner.
      Phù hợp với mọi trình độ.</p>
    `,
    thoi_luong: "Trọn đời",
    buoi_hoc: "Video online tự học",
    so_hoc_vien: "Không giới hạn",
    dia_diem: "Online — toàn quốc",
    noi_dung: [
      "Phân tích hình dáng mắt — cách chọn kỹ thuật phù hợp",
      "Kẻ mắt: liner lỏng, bút, nhũ",
      "Eye shadow: blending đều màu",
      "Cut crease cơ bản & nâng cao",
      "Smokey eye — các biến thể",
      "Dán mi, kẻ lông mày theo form mặt",
    ],
    duoc_hoc: [
      "Truy cập video trọn đời",
      "Chứng chỉ hoàn thành online",
      "Group hỏi đáp",
    ],
  },
  {
    id: 7,
    ten: "Khoá Hairstylist: Tạo Kiểu Tóc Cô Dâu Ứng Dụng",
    ten_ngan: "Hairstylist Cô Dâu",
    the: "Tóc & Trang điểm",
    gia: "8.000.000đ",
    gia_goc: "10.000.000đ",
    hinh: "images/course-7.jpg",
    mo_ta_ngan: "Học tạo kiểu tóc cô dâu chuyên nghiệp — kết hợp với makeup ngày cưới.",
    mo_ta_day_du: `
      <p>Khoá học tạo kiểu tóc dành riêng cho cô dâu, từ búi tóc cổ điển đến
      những kiểu tóc hiện đại trendy. Kết hợp hoàn hảo với makeup ngày cưới
      để tạo nên tổng thể hoàn chỉnh.</p>
    `,
    thoi_luong: "2 tháng",
    buoi_hoc: "3 buổi/tuần",
    so_hoc_vien: "Tối đa 8 học viên/lớp",
    dia_diem: "TP.HCM & Hà Nội",
    noi_dung: [
      "Phân tích khuôn mặt — chọn kiểu tóc phù hợp",
      "Dụng cụ tạo kiểu: lược, kẹp, máy sấy, uốn",
      "Búi tóc cổ điển — các biến thể",
      "Tóc xoã — down style cho cô dâu",
      "Tóc bán búi — half-up half-down",
      "Tạo sóng, uốn xoăn ứng dụng",
      "Gắn phụ kiện: cài tóc, hoa, voan",
    ],
    duoc_hoc: [
      "Chứng chỉ Hairstylist AMI",
      "Hỗ trợ việc làm studio cưới",
      "Tham gia nhóm Hairstylist AMI",
    ],
  },
  {
    id: 8,
    ten: "Khoá Online: Mix Son Môi Đa Chiều",
    ten_ngan: "Online: Mix Son Môi",
    the: "Online",
    gia: "900.000đ",
    gia_goc: "1.500.000đ",
    hinh: "images/course-8.jpg",
    mo_ta_ngan: "Bí quyết mix son, vẽ môi nhiều kiểu — học ngay tại nhà chỉ 900K.",
    mo_ta_day_du: `
      <p>Khoá học ngắn tập trung hoàn toàn vào kỹ thuật mix son và vẽ môi.
      Bạn sẽ học cách tạo ra vô số màu son từ những thỏi son cơ bản,
      và vẽ môi đẹp, đều, chuẩn form.</p>
    `,
    thoi_luong: "Trọn đời",
    buoi_hoc: "Video online tự học",
    so_hoc_vien: "Không giới hạn",
    dia_diem: "Online — toàn quốc",
    noi_dung: [
      "Lý thuyết màu sắc ứng dụng vào son môi",
      "Mix son: tạo màu mới từ son có sẵn",
      "Vẽ môi — định hình đường viền",
      "Các kiểu môi: ombre, gradient, matte, glossy",
      "Kỹ thuật môi dày/mỏng theo yêu cầu",
    ],
    duoc_hoc: [
      "Truy cập video trọn đời",
      "Chứng chỉ hoàn thành",
    ],
  },
];
