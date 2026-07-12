export interface Course {
  id: number;
  slug: string;
  ten: string;
  ten_ngan: string;
  the: string;
  gia: string;
  gia_goc: string;
  hinh: string;
  mo_ta_ngan: string;
  mo_ta_day_du: string;
  thoi_luong: string;
  buoi_hoc: string;
  so_hoc_vien: string;
  dia_diem: string;
  noi_dung: string[];
  duoc_hoc: string[];
  badge?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    slug: 'makeup-pro-2026',
    ten: 'Khoá Học Make Up Pro 2026',
    ten_ngan: 'Make Up Pro',
    the: 'Dành cho người mới bắt đầu',
    gia: '5.500.000đ',
    gia_goc: '7.000.000đ',
    hinh: '/images/IMG_8399.JPG',
    mo_ta_ngan: 'Khoá học cơ bản toàn diện, phù hợp cho người chưa biết gì về makeup.',
    mo_ta_day_du: 'Khoá học Make Up Pro 2026 được thiết kế đặc biệt dành cho người mới bắt đầu, giúp bạn nắm vững kiến thức nền tảng và kỹ thuật trang điểm chuyên nghiệp từ cơ bản đến nâng cao. Sau khoá học, học viên hoàn toàn có thể tự trang điểm cho bản thân và khách hàng.',
    thoi_luong: '3 – 4 tháng',
    buoi_hoc: '3 buổi/tuần',
    so_hoc_vien: 'Tối đa 8 học viên/lớp',
    dia_diem: 'TP. Nam Định',
    badge: 'Hot',
    noi_dung: [
      'Kiến thức nền tảng: màu sắc, ánh sáng, dụng cụ',
      'Kỹ thuật xử lý da: che khuyết điểm, tạo nền hoàn hảo',
      'Tạo khối khuôn mặt: highlight & contour',
      'Kỹ thuật kẻ mắt, vẽ lông mày chuẩn form',
      'Tạo môi: mix son, vẽ môi nhiều kiểu',
      'Makeup ngày & tối — ứng dụng thực tế',
      'Thực hành trên mô hình người thật',
    ],
    duoc_hoc: [
      'Chứng chỉ hoàn thành khoá học',
      'Hỗ trợ tư vấn nghề nghiệp sau khoá',
      'Tham gia cộng đồng học viên AMI',
      'Ôn luyện miễn phí trong 3 tháng',
    ],
  },
  {
    id: 2,
    slug: 'nang-cao-cap-toc',
    ten: 'Make Up Nâng Cao ',
    ten_ngan: 'Nâng Cao ',
    the: 'Chuyên nghiệp',
    gia: '5.000.000đ',
    gia_goc: '7.000.000đ',
    hinh: '/images/IMG_9013.JPG',
    mo_ta_ngan: 'Khoá cấp tốc 6-4 ngày — phù hợp người bận rộn.',
    mo_ta_day_du: 'Khoá học nâng cao được thiết kế theo hình thức cấp tốc, giúp học viên đã có nền tảng makeup nâng cấp kỹ năng lên trình độ chuyên nghiệp trong thời gian ngắn nhất.',
    thoi_luong: '6 – 4 ngày',
    buoi_hoc: 'Học liên tục',
    so_hoc_vien: 'Tối đa 6 học viên/lớp',
    dia_diem: 'Nam Định',
    noi_dung: [
      'Kỹ thuật makeup nâng cao: skin prep, complexion',
      'Eye design: cut crease, smokey, graphic liner',
      'Bridal makeup: cô dâu ngày, cô dâu tối',
      'Editorial & fashion makeup',
      'Thực hành 100% trên người thật',
    ],
    duoc_hoc: [
      'Chứng chỉ nâng cao AMI Academy',
      'Portfolio cá nhân sau khoá',
      'Kết nối cơ hội làm việc',
    ],
  },
  {
    id: 3,
    slug: 'makeup-ca-nhan',
    ten: 'MAKEUP CA NHAN',
    ten_ngan: 'MAKEUP CA NHAN',
    the: 'Chuyên nghiệp',
    gia: '2.000.000đ',
    gia_goc: '2.500.000đ',
    hinh: '/images/IMG_9501.jpg',
    mo_ta_ngan: '3 ngày ',
    mo_ta_day_du: 'Khoá học nâng cao cấp tốc dành cho học viên tại Hà Nội muốn nâng cấp kỹ năng trong thời gian ngắn. Chương trình tập trung vào thực hành 3 layout chuyên nghiệp.',
    thoi_luong: '3 ngày',
    buoi_hoc: '1 day training / 3 layout',
    so_hoc_vien: 'Tối đa 6 học viên/lớp',
    dia_diem: 'AMI',
    noi_dung: [
      'Layout 1: Makeup ngày — tự nhiên & sang trọng',
      'Layout 2: Makeup cô dâu — bridal look',
      'Layout 3: Makeup tối — smokey & dramatic',
      'Kỹ thuật xử lý da nâng cao',
      'Q&A và tư vấn nghề nghiệp',
    ],
    duoc_hoc: [
      'Chứng chỉ nâng cao AMI Academy',
      '3 bộ ảnh portfolio',
      'Tư vấn định hướng nghề nghiệp',
    ],
  },
  {
    id: 4,
    slug: 'makeup-co-dau',
    ten: 'Khoá Học Makeup Cô Dâu Chuyên Nghiệp',
    ten_ngan: 'Makeup Cô Dâu',
    the: 'Chuyên sâu',
    gia: '8.000.000đ',
    gia_goc: '10.000.000đ',
    hinh: '/images/IMG_4846.jpeg',
    mo_ta_ngan: 'Chuyên sâu kỹ thuật makeup cô dâu — từ truyền thống đến hiện đại.',
    mo_ta_day_du: 'Khoá học tập trung hoàn toàn vào bridal makeup, từ cô dâu truyền thống đến cô dâu hiện đại. Học viên được thực hành trực tiếp trên cô dâu thật với các bộ áo dài và váy cưới.',
    thoi_luong: '1 – 2 tháng',
    buoi_hoc: '2 buổi/tuần',
    so_hoc_vien: 'Tối đa 6 học viên/lớp',
    dia_diem: 'TP. Nam Định',
    badge: 'Mới',
    noi_dung: [
      'Kỹ thuật makeup cô dâu ngày — tự nhiên, rạng rỡ',
      'Makeup cô dâu tối — sang trọng, quyến rũ',
      'Makeup cô dâu truyền thống áo dài',
      'Makeup cô dâu hiện đại váy trắng',
      'Chỉnh sửa & bảo quản makeup suốt ngày cưới',
    ],
    duoc_hoc: [
      'Chứng chỉ makeup cô dâu AMI',
      'Kỹ năng nhận show wedding',
      'Hỗ trợ build portfolio cô dâu',
    ],
  },
];
