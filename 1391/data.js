const CONFERENCE_DATA = {
  // 1. DỮ LIỆU KHÁCH MỜI (Đã chia nhóm)
  guestGroups: [
    {
      id: "ban-chi-dao",
      title: "Ban Chỉ Đạo & Ban Tổ Chức",
      themeColor: "tg_gold", 
      members: [
        { name: "PGS. TS. Lê Minh Tùng", role: "Quyền Hiệu trưởng", subtitle: "Trưởng ban Chỉ đạo", avatarIcon: "👤" },
        { name: "TS. Cao Nguyên Thi", role: "Phó Hiệu trưởng", subtitle: "Trưởng BTC", avatarIcon: "👤" },
        { name: "TS. Bùi Quang Thịnh", role: "PTP.PT P.QLKHCN&HTQT", subtitle: "Phó Trưởng BTC", avatarIcon: "👤" }
      ]
    },
    {
      id: "dien-gia",
      title: "Diễn Giả",
      themeColor: "emerald-500",
      members: [
        { name: "Ông Nguyễn Văn Đậm", role: "Sở KH&CN tỉnh Đồng Tháp", subtitle: "Báo cáo tham luận", avatarIcon: "👤" },
        { name: "Ông ...", role: "ĐH Bách khoa TP.HCM", subtitle: "Báo cáo tham luận", avatarIcon: "👤" },
        { name: "Ông Bùi Quang Thịnh", role: "Trường ĐH Tiền Giang", subtitle: "Báo cáo tham luận", avatarIcon: "👤" }
      ]
    },
    {
      id: "khach-moi",
      title: "Khách Mời",
      themeColor: "emerald-500",
      members: [
        { name: "Ông Nguyễn Văn Đậm", role: "Sở KH&CN tỉnh Đồng Tháp", subtitle: "Phó Giám đốc", avatarIcon: "👤" }
      ]
    },
    {
      id: "dai-bieu",
      title: "Đại Biểu Các Khoa / Phòng",
      themeColor: "gray-400",
      members: [
        { name: "Trần Thanh Phong", role: "Phó TK phụ trách khoa/ Giảng viên chính", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Nguyễn Trung Hiếu", role: "Trưởng BM LLCT/Giảng viên chính", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Tăng Phú Đức", role: "Giảng viên", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Trần Hữu Thành", role: "Giảng viên", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Nguyễn Đăng Hải", role: "Giảng viên", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Lương Hồng Thanh", role: "Giảng viên", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Võ Trần Thái", role: "Giảng viên", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Bùi Thanh Minh", role: "Giảng viên", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Lê Quốc Việt", role: "Giảng viên", subtitle: "Khoa LLCT- GDQP&TC", avatarIcon: "👤" },
        { name: "Võ Thị Trúc Giang", role: "Phó Trưởng Khoa, Phụ trách khoa, Giảng viên chính", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Giang Lam", role: "Phó Trưởng khoa, Giảng viên chính", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Đặng Thị Cẩm Nhung", role: "Phó Trưởng BM KHTN, Giảng viên chính", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Thanh Nhã", role: "Phó Trưởng BM KHTN, Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Trương Hoàng Vinh", role: "Phó Trưởng BM KHXH, Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Mai Đức Long", role: "Phó TBM GDTH-MN Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Bùi Thị Nhật Tuyền", role: "Phó Trưởng Bộ môn phụ trách BMNN, Giảng viên chính", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Hồ Công Xuân Vũ Ý", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Thị Kim Thư", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Phạm Thị Thảo Uyên", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Minh Châu", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Hồ Lưu Phúc", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Thị Bằng Giao", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Thị Như Thoa", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Phùng Thị Hà", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Ngọc Lan Hương", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Lê Minh Cúc Phương", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Hà Danh Hùng", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Trung Ngôn", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Lê Thị Diệu Nga", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Thị Ngọc Yến", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Nguyễn Thị Anh Thư", role: "Giảng viên", subtitle: "Khoa SP& KHCB", avatarIcon: "👤" },
        { name: "Trần Thị Minh Tú", role: "Trưởng Bộ môn", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Trần Hoàng Diệp", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Thị Minh Hồng", role: "Giảng viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Bích Hà Vũ", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Huỳnh Thị Huế Trang", role: "Giảng viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Trần Lê Vinh", role: "Giảng viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Trần Thụy Ái Tâm", role: "Giảng viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Thị Mai Hạnh", role: "Giảng viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Trương Khắc Hiếu", role: "Phó TK PTK", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Phan Ngọc Duyên", role: "Phó TBM", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Công Tráng", role: "Phó TBM", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Bùi Văn Mướp", role: "Giảng viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Lê Quốc Phong", role: "Giảng viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Hồ Đại", role: "Chuyên viên", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Tấn Hùng", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Phạm Đỗ Trang Minh", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Phan Thị Ngọc Hạnh", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Ái Thạch", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Phạm Thành Lễ", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Thị Hằng Phương", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Thành Nhân", role: "Giảng viên chính", subtitle: "Khoa NN&CNTP", avatarIcon: "👤" },
        { name: "Nguyễn Huỳnh Thi", role: "Phó trưởng khoa", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Ngọc Thắng", role: "Phó trưởng khoa", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Văn Nối", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Huỳnh Kim Quýt", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Minh Khánh", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Văn Thuận", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Thị Thu Nguyệt", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Dương Ngọc Hùng", role: "Trưởng BM", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Đặng Ngọc Vân", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Dương Thanh Dũ", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Ngọc Thảo", role: "Chuyên viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Phan Ân", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Huỳnh Minh Vũ", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Quang Minh", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Ngô Hồng Thạch Hãn", role: "Chuyên viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Văn Hiếu", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Huỳnh Minh Huy", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Đinh Hữu Hạnh", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Bùi Hữu Hiệp", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Quốc phong", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Nguyễn Xuân Lộc", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Lưu Trần Hữu Tín", role: "Giảng viên", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Huỳnh Hoà Hiệp", role: "Giảng viên tập sự", subtitle: "Khoa KTCN", avatarIcon: "👤" },
        { name: "Đoàn Minh Nguyệt", role: "Phó Trưởng khoa phụ trách", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Thanh Trang", role: "Phó Trưởng khoa", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Minh Nhã", role: "Phó Trưởng khoa", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Huỳnh Thị Ngọc Phượng", role: "Phó Trưởng BM phụ trách", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Lê Hoàng Ân", role: "Phó Trưởng BM phụ trách", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Thị Khuyến", role: "Phó Trưởng BM phụ trách", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Ngô Thanh Phong", role: "Phó Trưởng BM phụ trách", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Lâm Thái Bảo Ngọc", role: "Trưởng Bộ môn", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Lê Thanh Huy", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Trần Phan Đoan Khánh", role: "Giảng viên chính", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Phan Thị Thanh Thúy", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Trần Quang Khôi", role: "Giảng viên chính", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Bùi Vĩnh Thanh", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Phạm Trần Ngọc Hương", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Đào Thanh Nhàn", role: "Giảng viên chính", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Anh Tuấn", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Dương Thành Đồng", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Thị Ngọc Phương", role: "Giảng viên chính", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Trần Thị Bích Tuyền", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Văn Thị Vàng", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Võ Xuân Hưởng", role: "Giảng viên chính", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Hữu Phước", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Võ Thị Ngọc Giàu", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Lê Minh Thiên", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Thị Ngọc Thắm", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Dương Ngọc Diệp", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Lê Thùy Liên", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Lê Thị Hồng Trang", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Trần Kim Ngân", role: "Giảng viên", subtitle: "Khoa KT-L", avatarIcon: "👤" },
        { name: "Nguyễn Thị Kim Xuyến", role: "Giám đốc", subtitle: "TT.TTTV", avatarIcon: "👤" },
        { name: "Nguyễn Hoàng Tú", role: "Chuyên viên", subtitle: "TT.TTTV", avatarIcon: "👤" },
        { name: "Trần Tấn Hải", role: "Chuyên viên", subtitle: "TT.TTTV", avatarIcon: "👤" },
        { name: "Lê Thị Tân", role: "Chuyên viên", subtitle: "TT.TTTV", avatarIcon: "👤" },
        { name: "Nguyễn Đại Bình", role: "Phó Giám đốc", subtitle: "TT.KT&ĐBCLGD", avatarIcon: "👤" },
        { name: "Huỳnh Thị Ngọc Linh", role: "Phó Giám đốc", subtitle: "TT.KT&ĐBCLGD", avatarIcon: "👤" },
        { name: "Nguyễn Trọng Trí", role: "Chuyên viên", subtitle: "TT.KT&ĐBCLGD", avatarIcon: "👤" },
        { name: "Nguyễn Hồng Cẩm", role: "Chuyên viên", subtitle: "TT.KT&ĐBCLGD", avatarIcon: "👤" },
        { name: "Giang Thị Kim Tú", role: "Phó GĐ", subtitle: "TT. ĐT BDTX-THNN", avatarIcon: "👤" }
      ]
    }
  ],

  // 2. DỮ LIỆU TÀI LIỆU
  documents: [
    { id: "doc1", title: "Nghị quyết số 57-NQ/TW", type: "PDF", size: "6.8 MB", url: "./1391/NQ57.pdf" },
    { id: "doc2", title: "Ứng dụng AI trong quản lý sinh viên", type: "PPTX", size: "5.1 MB", url: "link_toi_pptx_2" },
    { id: "doc3", title: "Giải pháp nâng cao chất lượng công bố quốc tế và phát triển nhóm nghiên cứu tại Trường Đại học Tiền Giang", type: "PDF", size: "1.8 MB", url: "link_toi_pdf_3" },
    { id: "doc4", title: "Cẩm nang An toàn thông tin 2025", type: "PDF", size: "3.2 MB", url: "link_toi_pdf_4" }
  ],

  // 3. DỮ LIỆU VIDEO (KHÔNG GIAN TGU)
  videos: [
    { 
      id: "vid1", 
      title: "KỶ NIỆM 21 NĂM NGÀY THÀNH LẬP TRƯỜNG ĐẠI HỌC TIỀN GIANG (06/6/2005 - 06/6/2026)", 
      duration: "07:49", 
      youtubeUrl: "https://www.youtube.com/embed/DWNYvUjl6Rc" 
    },
    { 
      id: "vid2", 
      title: "Dự án Thanh Âm đạt giải Ba tại Cuộc thi Đổi mới sáng tạo cấp thành phố INNOX 2026", 
      duration: "03:28", 
      youtubeUrl: "https://www.youtube.com/embed/Gku0_gDI0jE" 
    },
    { 
      id: "vid3", 
      title: "Trường Đại học Tiền Giang đẩy mạnh hợp tác quốc tế", 
      duration: "03:56", 
      youtubeUrl: "https://www.youtube.com/embed/KCCzdceBY0o" 
    }
  ],

  // 4. DỮ LIỆU LỊCH TRÌNH
  agenda: [
    { time: "7:30 - 8:00", activity: "Đón tiếp đại biểu và Khách mời", location: "Ban Tổ chức" },
    { time: "8:00 - 8:10", activity: "Tuyên bố lý do, giới thiệu đại biểu", location: "Ban Tổ chức" },
    { time: "8:10 - 8:20", activity: "Phát biểu khai mạc Hội nghị", location: "PGS.TS. Lê Minh Tùng" },
    { time: "8:20 - 8:40", activity: "Báo cáo tổng kết kết quả triển khai Nghị quyết số 57-NQ/TW tại Trường Đại học Tiền Giang năm học 2025–2026", location: "TS. Bùi Quang Thịnh" },
    { time: "8:40 - 9:00", activity: "Tham luận: Chuyển đổi số theo Nghị quyết số 57-NQ/TW tại Trường Đại học Tiền Giang", location: "ThS. Trần Huy Long" },
    { time: "9:00 - 9:20", activity: "Tham luận của Sở Khoa học và Công nghệ tỉnh Đồng Tháp", location: "Đại diện Sở Khoa học và Công nghệ tỉnh Đồng Tháp" },
    { time: "9:20 - 9:40", activity: "Tham luận: Giải pháp nâng cao chất lượng công bố quốc tế và phát triển nhóm nghiên cứu tại Trường Đại học Tiền Giang", location: "Nhà khoa học/Chuyên gia khách mời" },
    { time: "9:40 - 10:10", activity: "Khen thưởng tập thể, cá nhân có thành tích tiêu biểu, xuất sắc trong triển khai thực hiện Nghị quyết số 57-NQ/TW", location: "PGS.TS. Lê Minh Tùng, TS. Bùi Quang Thịnh" },
    { time: "10:10 - 10:30", activity: "Nghỉ giải lao – Chụp ảnh lưu niệm", location: "Ban Tổ chức" },
    { time: "10:30 - 11:00", activity: "Thảo luận và đề xuất các nhiệm vụ, giải pháp triển khai giai đoạn 2026-2030", location: "Chủ trì hội nghị" },
    { time: "11:00 - 11:10", activity: "Thông qua kết luận Hội nghị", location: "Chủ trì hội nghị" },
    { time: "11:10 - 11:20", activity: "Phát biểu bế mạc", location: "Chủ trì hội nghị" }
  ]
};
