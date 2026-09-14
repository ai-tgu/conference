const CONFERENCE_DATA = {
  // 1. DỮ LIỆU KHÁCH MỜI (Đã chia nhóm)
  guestGroups: [
    {
      id: "ban-chi-dao",
      title: "Ban Chỉ Đạo & Ban Tổ Chức",
      themeColor: "tg_gold", 
      members: [
        { name: "TS. Cao Nguyên Thi", role: "Phó Hiệu trưởng", subtitle: "Trưởng ban", avatarIcon: "👤" },
        { name: "TS. Bùi Quang Thịnh", role: "PTP.PT P.QLKHCN&HTQT", subtitle: "Phó Trưởng Ban", avatarIcon: "👤" }
      ]
    },
    {
      id: "khach-moi",
      title: "Khách Mời & Diễn Giả",
      themeColor: "emerald-500",
      members: [
        { name: "Ông Ngô Huỳnh Quang Thái", role: "GĐ Sở KH&CN tỉnh Đồng Tháp", subtitle: "Báo cáo tham luận", avatarIcon: "👤" },
        { name: "Ông ...", role: "Chuyên gia CĐS - ĐH ...", subtitle: "Báo cáo tham luận", avatarIcon: "👤" },
        { name: "Ông Trần Huy Long", role: "Phó GĐ. TTTT-TV", subtitle: "Báo cáo tham luận", avatarIcon: "👤" }
      ]
    },
    {
      id: "dai-bieu",
      title: "Đại Biểu Các Khoa / Phòng",
      themeColor: "gray-400",
      members: [
        { name: "Lãnh đạo Khoa Kỹ thuật Công nghệ", role: "Thành viên", subtitle: "Khoa Công nghệ Thông tin", avatarIcon: "👤" },
        { name: "Phòng Đào tạo", role: "Thành viên", subtitle: "Khối Phòng ban", avatarIcon: "👤" },
        { name: "Khoa Kinh tế - Luật", role: "Thành viên", subtitle: "Đại biểu", avatarIcon: "👤" }
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
