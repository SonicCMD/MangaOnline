/* =============================================================
   MANGAVESSEL — script.js  (No external API — local data)
   ============================================================= */

// ─── GENRES ──────────────────────────────────────────────────
const GENRES = [
  { id: "action", name: "Action", icon: "⚔️" },
  { id: "adventure", name: "Adventure", icon: "🗺️" },
  { id: "comedy", name: "Comedy", icon: "😄" },
  { id: "crime", name: "Crime", icon: "🔪" },
  { id: "drama", name: "Drama", icon: "🎭" },
  { id: "fantasy", name: "Fantasy", icon: "🐉" },
  { id: "historical", name: "Historical", icon: "🏯" },
  { id: "horror", name: "Horror", icon: "👻" },
  { id: "isekai", name: "Isekai", icon: "🌀" },
  { id: "mecha", name: "Mecha", icon: "🤖" },
  { id: "mystery", name: "Mystery", icon: "🔍" },
  { id: "monster", name: "Monster", icon: "👹" },
  { id: "psychological", name: "Psychological", icon: "🧠" },
  { id: "romance", name: "Romance", icon: "💕" },
  { id: "sci-fi", name: "Sci-Fi", icon: "🚀" },
  { id: "shounen", name: "Shounen", icon: "🔥" },
  { id: "slice-of-life", name: "Slice of Life", icon: "☕" },
  { id: "sports", name: "Sports", icon: "🏆" },
  { id: "supernatural", name: "Supernatural", icon: "🌙" },
  { id: "survival", name: "Survival", icon: "🏕️" },
  { id: "vampires", name: "Vampires", icon: "🧛" },
  { id: "wuxia", name: "Wuxia", icon: "🥷" },
  { id: "zombies", name: "Zombies", icon: "🧟" },
  { id: "manhwa", name: "Manhwa", icon: "🇰🇷" },
  { id: "manhua", name: "Manhua", icon: "🇨🇳" },
  { id: "webtoon", name: "Webtoon", icon: "📱" },
  { id: "school-life", name: "School Life", icon: "🏫" },
  { id: "magic", name: "Magic", icon: "✨" },
];

// ─── DATA ────────────────────────────────────────────────────
const DATA = [
  {
    id: 1,
    title: "Solo Leveling",
    author: "Jang Sung-Lak",
    genres: ["action", "fantasy", "manhwa", "webtoon"],
    status: "Đã hoàn thành",
    rating: "9.8",
    views: "25.6M",
    summary:
      "Sung Jin-Woo, thợ săn yếu nhất thế giới, thoát chết thần kỳ và nhận được 'Hệ thống' độc nhất cho phép thăng cấp như game. Từ hạng E, anh vươn lên thành thợ săn mạnh nhất nhân loại trong hành trình đầy hiểm nguy và bí ẩn.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803069/t%E1%BA%A3i_xu%E1%BB%91ng_1_tth8aw.jpg",
    chapters: [
      {
        name: "Thợ Săn Hạng E",
        images: [
          "https://res.cloudinary.com/di4t5fman/image/upload/v1782802328/img_00000_vbqyem.webp",
          "https://res.cloudinary.com/di4t5fman/image/upload/f_auto,q_auto/img_00001_uwnhae",
          "https://res.cloudinary.com/di4t5fman/image/upload/v1782802412/img_00002_m7fng5.webp",
          "https://res.cloudinary.com/di4t5fman/image/upload/v1782802696/img_00003_ktvqbh.webp",
        ],
      },
      { name: "Hầm Ngục Kép", images: [] },
      { name: "Ba Giới Luật", images: [] },
      { name: "Thử Thách Cuối Cùng", images: [] },
      { name: "Trở Thành Người Chơi", images: [] },
      { name: "Phần Thưởng Của Hệ Thống", images: [] },
      { name: "Thợ Săn Mạnh Nhất", images: [] },
      { name: "Cày Cấp Cấp Tốc", images: [] },
      { name: "Con Trùm Đầu Tiên", images: [] },
      { name: "Thành Viên Tạm Thời", images: [] },
    ],
  },
  {
    id: 2,
    title: "One Piece",
    author: "Eiichiro Oda",
    genres: ["action", "adventure", "comedy", "fantasy", "shounen"],
    status: "Đang tiến hành",
    rating: "9.5",
    views: "180M",
    summary:
      "Monkey D. Luffy và băng Mũ Rơm đi khắp đại dương tìm kho báu huyền thoại 'One Piece', với mục tiêu trở thành Vua Hải Tặc. Hành trình phiêu lưu, chiến đấu và tình bạn bất diệt trong thế giới hải tặc rộng lớn.",
    cover: "https://i.postimg.cc/m2GyD1mj/tai-xuong-(1).jpg",
    chapters: [
      { name: "Bình Minh Cuộc Phiêu Lưu", images: [] },
      { name: "Luffy Mũ Rơm", images: [] },
      { name: "Zoro Xuất Hiện", images: [] },
      { name: "Đại Tá Morgan", images: [] },
      { name: "Vua Hải Tặc & Đại Kiếm Sĩ", images: [] },
      { name: "Thành Viên Đầu Tiên", images: [] },
      { name: "Bạn Bè", images: [] },
      { name: "Nami Xuất Hiện", images: [] },
      { name: "Cô Nàng Ma Mãnh", images: [] },
      { name: "Tháo Chạy", images: [] },
      { name: "Báu Vật", images: [] },
      { name: "Vô Ích!!", images: [] },
      { name: "Chuyện Ở Quán Rượu", images: [] },
    ],
  },
  {
    id: 3,
    title: "Demon Slayer",
    author: "Gotouge Koyoharu",
    genres: ["action", "historical", "shounen", "monster", "supernatural"],
    status: "Đã hoàn thành",
    rating: "9.3",
    views: "42M",
    summary:
      "Tanjirou, cậu bé bán than hiền lành, gia đình bị quỷ sát hại. Em gái Nezuko sống sót nhưng thành quỷ. Tanjirou gia nhập Sát Quỷ Đoàn để tìm cách cứu em và tiêu diệt Muzan Kibutsuji.",
    cover:
      "https://i.postimg.cc/L5VYh5sN/Demon-Slayer-infinity-castle-cover.jpg",
    chapters: [
      { name: "Tàn Khốc", images: [] },
      { name: "Người Lạ", images: [] },
      { name: "Trở Về Lúc Bình Minh", images: [] },
      { name: "Nhật Ký Tanjiro Phần 1", images: [] },
      { name: "Nhật Ký Tanjiro Phần 2", images: [] },
      { name: "Núi Tay", images: [] },
      { name: "Tinh Thần Người Đã Khuất", images: [] },
      { name: "Anh Cả", images: [] },
      { name: "Chào Mừng Trở Lại", images: [] },
    ],
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    genres: ["action", "supernatural", "school-life", "monster", "shounen"],
    status: "Đang tiến hành",
    rating: "9.1",
    views: "38M",
    summary:
      "Itadori Yuji vô tình nuốt ngón tay của Nguyền vương Sukuna, trở thành vật chứa. Cậu gia nhập Trường Chú Thuật, thu thập đủ các ngón tay của Sukuna trong hành trình sinh tử khốc liệt.",
    cover: "https://i.postimg.cc/bNJN13VN/Yuta-Itadori.jpg",
    chapters: [
      { name: "Thi Hành", images: [] },
      { name: "Thêm Một Lần Nữa", images: [] },
      { name: "Về Trò Chơi Tiêu Diệt", images: [] },
      { name: "Chuẩn Bị Hoàn Hảo", images: [] },
      { name: "Người Đánh Bạc", images: [] },
      { name: "Thuộc Địa Tokyo Phần 1", images: [] },
      { name: "Thuộc Địa Tokyo Phần 2", images: [] },
      { name: "Thuộc Địa Tokyo Phần 3", images: [] },
      { name: "Thuộc Địa Sendai", images: [] },
      { name: "Trận Chiến Cuối Cùng", images: [] },
      { name: "Kết Thúc", images: [] },
    ],
  },
  {
    id: 5,
    title: "Tensei Shitara Slime Datta Ken",
    author: "Kawakami Taiki, Fuse",
    genres: ["action", "fantasy", "isekai", "monster", "adventure", "comedy"],
    status: "Đang tiến hành",
    rating: "8.5",
    views: "33M",
    summary:
      "Satoru Mikami, nhân viên văn phòng 37 tuổi bị sát hại, được chuyển sinh đến thế giới kỳ ảo dưới hình hài một slime. Sở hữu kỹ năng đặc biệt, cậu từng bước xây dựng vương quốc quái vật hùng mạnh.",
    cover: "https://i.postimg.cc/xCrp2ktD/image.png",
    chapters: [
      { name: "Thành Tựu Ẩm Thực", images: [] },
      { name: "Đại Lễ Khai Quốc", images: [] },
      { name: "Phát Sinh Vấn Đề", images: [] },
      { name: "Hội Đàm Ba Bên", images: [] },
      { name: "Mê Cung Mở Cửa", images: [] },
      { name: "Sự Nguy Hiểm Của Slime", images: [] },
      { name: "Chân Tướng Kẻ Đứng Sau", images: [] },
      { name: "Cái Bẫy Của Tham Lam", images: [] },
      { name: "Hắc Sắc Quân Đoàn", images: [] },
      { name: "Ma Vương Giáng Thế", images: [] },
      { name: "Liên Minh Quốc Gia", images: [] },
      { name: "Hồi Kết", images: [] },
    ],
  },
  {
    id: 6,
    title: "Mushoku Tensei",
    author: "Rifujin na Magonote",
    genres: ["action", "fantasy", "isekai", "adventure", "drama"],
    status: "Đang tiến hành",
    rating: "8.5",
    views: "34M",
    summary:
      "Sau khi qua đời, hắn được tái sinh thành Rudeus Greyrat trong một thế giới phép thuật. Quyết tâm sống nghiêm túc, Rudeus bắt đầu hành trình phiêu lưu và khám phá thế giới mới với tài năng phép thuật thiên bẩm.",
    cover: "https://i.postimg.cc/7ZwTpqgm/image.png",
    chapters: [
      { name: "Thời Thơ Ấu", images: [] },
      { name: "Gia Sư Tại Nhà", images: [] },
      { name: "Nhà Thám Hiểm", images: [] },
      { name: "Du Hành Vượt Biển", images: [] },
      { name: "Đoàn Tụ", images: [] },
      { name: "Nhập Học", images: [] },
      { name: "Học Sinh Đặc Biệt", images: [] },
      { name: "Sylphiette", images: [] },
      { name: "Tân Hôn", images: [] },
      { name: "Lục Địa Begaritto", images: [] },
      { name: "Mê Cung", images: [] },
      { name: "Trở Về", images: [] },
    ],
  },
  {
    id: 7,
    title: "Dr.Stone",
    author: "Inagaki Riichiro",
    genres: ["action", "sci-fi", "shounen", "adventure"],
    status: "Đã hoàn thành",
    rating: "9.4",
    views: "36M",
    summary:
      "Thiên tài khoa học Senku Ishigami khôi phục nền văn minh nhân loại từ thời nguyên thủy sau khi toàn bộ thế giới bị hóa đá bởi một luồng sáng bí ẩn. Từ không có gì, cậu dùng khoa học để chinh phục thế giới đá.",
    cover: "https://i.postimg.cc/3wYrdPCj/image.png",
    chapters: [
      { name: "Thế Giới Đá", images: [] },
      { name: "Ảo Tưởng Vs Khoa Học", images: [] },
      { name: "Vua Của Thế Giới Đá", images: [] },
      { name: "Vỏ Sò Trắng Tinh Khiết", images: [] },
      { name: "Taiju Đấu Với Tsukasa", images: [] },
      { name: "Cuộc Phiêu Lưu Thuốc Súng", images: [] },
      { name: "Senku Đấu Với Tsukasa", images: [] },
      { name: "Sinh Viên Khoa Học", images: [] },
      { name: "Vũ Khí Khoa Học", images: [] },
      { name: "Vương Quốc Khoa Học", images: [] },
    ],
  },
  {
    id: 8,
    title: "Attack on Titan",
    author: "Hajime Isayama",
    genres: ["action", "drama", "historical", "mystery", "horror", "shounen"],
    status: "Đã hoàn thành",
    rating: "9.6",
    views: "89M",
    summary:
      "Trong thế giới bị Titan thống trị, nhân loại sống trong những bức tường khổng lồ. Eren Yeager thề báo thù sau khi chứng kiến mẹ bị Titan ăn thịt, gia nhập Binh Đoàn Thám Hiểm để chiến đấu.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803008/t%E1%BA%A3i_xu%E1%BB%91ng_tjbqop.jpg",
    chapters: [
      { name: "Đến Ngày Đó", images: [] },
      { name: "Ngày Tàn Của Nhân Loại", images: [] },
      { name: "Đêm Trước Phong Ấn", images: [] },
      { name: "Bước Đầu Tiên", images: [] },
      { name: "Chiến Đấu Đầu Tiên", images: [] },
      { name: "Sức Mạnh Titan", images: [] },
      { name: "Bí Mật Tầng Hầm", images: [] },
      { name: "Đại Chiến Thế Giới", images: [] },
      { name: "Nguồn Cơn", images: [] },
      { name: "Kết Thúc Bi Thương", images: [] },
    ],
  },
  {
    id: 10,
    title: "Naruto",
    author: "Masashi Kishimoto",
    genres: ["action", "adventure", "comedy", "fantasy", "shounen"],
    status: "Đã hoàn thành",
    rating: "9.2",
    views: "150M",
    summary:
      "Naruto Uzumaki, cậu bé ninja mang Hồ Li Thần chín đuôi trong người, ước mơ trở thành Hokage vĩ đại nhất làng Konoha. Hành trình trưởng thành đầy nước mắt và nghị lực bất khuất.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803131/Naruto_Shippuden_Naruto_Sakura_Kakashi_Poster_zaywc1.jpg",
    chapters: [
      { name: "Naruto Uzumaki!!", images: [] },
      { name: "Konohamaru!!", images: [] },
      { name: "Đối Thủ!!", images: [] },
      { name: "Thử Thách Sasuke!!", images: [] },
      { name: "Thần Sao Chép!!", images: [] },
      { name: "Lễ Tốt Nghiệp", images: [] },
      { name: "Người Thầy Kakashi", images: [] },
      { name: "Nhiệm Vụ Đầu Tiên", images: [] },
      { name: "Làng Trong Sương", images: [] },
      { name: "Zabuza Momochi", images: [] },
    ],
  },
  {
    id: 11,
    title: "Bleach",
    author: "Tite Kubo",
    genres: ["action", "adventure", "supernatural", "shounen"],
    status: "Đã hoàn thành",
    rating: "8.9",
    views: "78M",
    summary:
      "Ichigo Kurosaki, học sinh trung học có thể nhìn thấy ma, tình cờ nhận sức mạnh của một Thần Chết từ Rukia Kuchiki. Anh phải chiến đấu chống lại Hollow bảo vệ thành phố Karakura.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803206/Bleach_P%C3%B3ster_iacryt.jpg",
    chapters: [
      { name: "Thần Chết", images: [] },
      { name: "Triệu Hồi", images: [] },
      { name: "Đêm Không Trăng", images: [] },
      { name: "Rukia Bị Bắt", images: [] },
      { name: "Huấn Luyện", images: [] },
      { name: "Shinigami Giả", images: [] },
      { name: "Xâm Nhập Soul Society", images: [] },
      { name: "Bankai!", images: [] },
      { name: "Sự Phản Bội", images: [] },
      { name: "Aizen Lộ Diện", images: [] },
    ],
  },
  {
    id: 12,
    title: "Hunter x Hunter",
    author: "Yoshihiro Togashi",
    genres: ["action", "adventure", "fantasy", "shounen"],
    status: "Đang tiến hành",
    rating: "9.5",
    views: "72M",
    summary:
      "Gon Freecss, cậu bé sống trên đảo tham gia kỳ thi Hunter để tìm cha mình. Hành trình đưa cậu vào thế giới của những Hunter huyền thoại, Nen và những bí ẩn nguy hiểm.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803421/My_Anime_For_Life_irch3q.jpg",
    chapters: [
      { name: "Gon Và Killua", images: [] },
      { name: "Kỳ Thi Hunter", images: [] },
      { name: "Pha Thứ Nhất", images: [] },
      { name: "Hisoka", images: [] },
      { name: "Đảo Trời", images: [] },
      { name: "Học Nen", images: [] },
      { name: "Greed Island", images: [] },
      { name: "Chimera Ant", images: [] },
      { name: "Meruem", images: [] },
      { name: "Cuộc Chiến Cuối Cùng", images: [] },
    ],
  },
  {
    id: 14,
    title: "Tokyo Ghoul",
    author: "Sui Ishida",
    genres: ["action", "horror", "mystery", "psychological", "supernatural"],
    status: "Đã hoàn thành",
    rating: "8.8",
    views: "54M",
    summary:
      "Ken Kaneki, sinh viên bình thường, sau vụ tấn công của Ghoul trở thành nửa người nửa Ghoul. Anh vật lộn với bản sắc mới trong xã hội ngầm Tokyo đầy bạo lực và bí ẩn.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803423/t%E1%BA%A3i_xu%E1%BB%91ng_2_ygjdgm.jpg",
    chapters: [
      { name: "Ghoul", images: [] },
      { name: "Nửa Người Nửa Quỷ", images: [] },
      { name: "Thức Ăn", images: [] },
      { name: "Ẩn Náu", images: [] },
      { name: "Anteiku", images: [] },
      { name: "Hành Trình", images: [] },
      { name: "CCG", images: [] },
      { name: "Trận Chiến Aogiri", images: [] },
      { name: "Sự Hồi Sinh", images: [] },
      { name: "Kết Cuộc", images: [] },
    ],
  },
  {
    id: 15,
    title: "Black Clover",
    author: "Yuki Tabata",
    genres: ["action", "fantasy", "magic", "shounen"],
    status: "Đang tiến hành",
    rating: "8.6",
    views: "41M",
    summary:
      "Asta, cậu bé không có phép thuật trong thế giới phép thuật, ước mơ trở thành Pháp Hoàng. Với thanh kiếm chống phép thuật đặc biệt, cậu cùng Yuno chinh phục mọi thử thách.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803423/t%E1%BA%A3i_xu%E1%BB%91ng_3_h4jnnh.jpg",
    chapters: [
      { name: "Asta & Yuno", images: [] },
      { name: "Phép Thuật Nghịch Lý", images: [] },
      { name: "Hiệp Sĩ Ma Pháp", images: [] },
      { name: "Bò Đen", images: [] },
      { name: "Thi Tuyển", images: [] },
      { name: "Dungeon", images: [] },
      { name: "Pháp Hoàng Xuất Trận", images: [] },
      { name: "Vương Quốc Bóng Đêm", images: [] },
      { name: "Lucifero", images: [] },
    ],
  },
  {
    id: 16,
    title: "Spy x Family",
    author: "Tatsuya Endo",
    genres: ["action", "comedy", "slice-of-life", "romance", "school-life"],
    status: "Đang tiến hành",
    rating: "9.0",
    views: "45M",
    summary:
      "Điệp viên Loid Forger phải xây dựng gia đình giả tạo để hoàn thành nhiệm vụ tối mật. Anh nhận nuôi Anya — đứa trẻ đọc được suy nghĩ, và cưới Yor — một sát thủ. Hài hước và cảm động.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803424/spy_x_family_poster_cjlctb.jpg",
    chapters: [
      { name: "Gia Đình Giả", images: [] },
      { name: "Cuộc Thi Vào Trường", images: [] },
      { name: "Anya Và Bạn Bè", images: [] },
      { name: "Nhiệm Vụ Mới", images: [] },
      { name: "Yor Đi Làm", images: [] },
      { name: "Kỳ Nghỉ Gia Đình", images: [] },
      { name: "Stella", images: [] },
      { name: "Bon Bon", images: [] },
    ],
  },
  {
    id: 17,
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    genres: ["action", "horror", "supernatural", "psychological"],
    status: "Đang tiến hành",
    rating: "9.2",
    views: "38M",
    summary:
      "Denji, chàng trai nghèo khổ trả nợ bằng cách săn Quỷ cùng Pochita — con chó cưa xích. Sau khi bị phản bội và giết chết, cậu hợp nhất với Pochita thành Chainsaw Man huyền thoại.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803422/Chainsaw_Man_Poster_-_24__ymwop3.jpg",
    chapters: [
      { name: "Dog & Chainsaw", images: [] },
      { name: "Cô Gái Nghịch Thường", images: [] },
      { name: "Quỷ Súng", images: [] },
      { name: "Cú Đập Trực Tiếp", images: [] },
      { name: "Quỷ Dơi", images: [] },
      { name: "Biểu Diễn Cưa Xích", images: [] },
      { name: "Quỷ Mộng", images: [] },
      { name: "Katana Man", images: [] },
      { name: "Quỷ Súng Trở Lại", images: [] },
      { name: "Quỷ Nhện", images: [] },
    ],
  },
  {
    id: 19,
    title: "Overlord",
    author: "Kugane Maruyama",
    genres: ["action", "fantasy", "isekai", "adventure"],
    status: "Đang tiến hành",
    rating: "8.7",
    views: "29M",
    summary:
      "Momonga, game thủ lập dị, bị kẹt trong game VRMMORPG khi máy chủ tắt và thức dậy với tư cách Ainz Ooal Gown — pháp sư xương mạnh nhất thế giới. Cậu xây dựng đế chế thống trị thế giới mới.",
    cover:
      "https://res.cloudinary.com/di4t5fman/image/upload/v1782803525/Overlord_frjhvt.jpg",
    chapters: [
      { name: "Thế Giới Mới", images: [] },
      { name: "Mạo Hiểm Đầu Tiên", images: [] },
      { name: "Vương Quốc Styx", images: [] },
      { name: "Chiến Dịch Ainz", images: [] },
      { name: "Đại Mộ Nazarick", images: [] },
      { name: "Chiến Tranh Các Vương Quốc", images: [] },
    ],
  },
];

// ─── APP STATE ───────────────────────────────────────────────
const state = {
  currentPage: "home",
  currentComic: null,
  currentChap: -1,
  heroIndex: 0,
  heroTimer: null,
  genreId: null,
  genreName: "",
  prevPage: "home",
  favorites: JSON.parse(localStorage.getItem("mv_fav") || "[]"),
  history: JSON.parse(localStorage.getItem("mv_hist") || "[]"),
  users: JSON.parse(localStorage.getItem("mv_users") || "[]"),
  currentUser: JSON.parse(localStorage.getItem("mv_session") || "null"),
};

// ─── DOM HELPERS ─────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

const pages = {
  home: $("page-home"),
  detail: $("page-detail"),
  reading: $("page-reading"),
  history: $("page-history"),
  favorites: $("page-favorites"),
  genre: $("page-genre"),
  login: $("page-login"),
  register: $("page-register"),
  account: $("page-account"),
};

// ─── ROUTER ──────────────────────────────────────────────────
function goTo(page) {
  if (!["genre", "detail", "reading", "login", "register"].includes(page)) {
    state.prevPage = page;
  }
  Object.values(pages).forEach((p) => p.classList.add("hidden"));
  pages[page].classList.remove("hidden");
  state.currentPage = page;
  document
    .querySelectorAll(".nav-link")
    .forEach((a) => a.classList.toggle("active", a.dataset.page === page));
  $("reading-progress").classList.toggle("hidden", page !== "reading");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (page === "history") renderHistory();
  if (page === "favorites") renderFavorites();
  if (page === "account") renderAccount();
}

// ─── CARD ────────────────────────────────────────────────────
function renderCard(comic, delay = 0) {
  const isFav = state.favorites.includes(comic.id);
  const genreLabel =
    GENRES.find((g) => g.id === comic.genres[0])?.name || comic.genres[0];
  return `
    <div class="card" style="animation-delay:${delay}ms" onclick="openDetail(${comic.id})">
      <div class="card-cover">
        <img src="${comic.cover}" alt="${comic.title}" loading="lazy"
          onerror="this.style.display='none'">
        <span class="card-badge">⭐ ${comic.rating}</span>
        <button class="card-fav ${isFav ? "liked" : ""}"
          onclick="event.stopPropagation();toggleFav(${comic.id},this)">
          ${isFav ? "❤️" : "🤍"}
        </button>
      </div>
      <div class="card-body">
        <div class="card-title">${comic.title}</div>
        <div class="card-meta">
          <span class="card-chap">Ch.${comic.chapters.length}</span>
          <span class="card-rating">⭐ ${comic.rating}</span>
        </div>
      </div>
    </div>`;
}

// ─── HOME ────────────────────────────────────────────────────
function renderHome() {
  $("grid-new").innerHTML = DATA.map((c, i) => renderCard(c, i * 45)).join("");
  const shuffled = [...DATA].sort(() => Math.random() - 0.5).slice(0, 8);
  $("grid-recommend").innerHTML = shuffled
    .map((c, i) => renderCard(c, i * 45))
    .join("");
}

// ─── HERO ────────────────────────────────────────────────────
function renderHero() {
  const comic = DATA[state.heroIndex];
  $("hero-container").innerHTML = `
    <img class="hero-img" src="${comic.cover}" alt="${comic.title}">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="hero-badge">${GENRES.find((g) => g.id === comic.genres[0])?.name || comic.genres[0]}</span>
      <h1>${comic.title}</h1>
      <p>${comic.summary}</p>
      <button class="btn-primary" onclick="openDetail(${comic.id})">▶ Đọc Ngay</button>
    </div>`;
  $("hero-dots").innerHTML = DATA.slice(0, 7)
    .map(
      (_, i) =>
        `<button class="hero-dot ${i === state.heroIndex ? "active" : ""}" onclick="setHero(${i})"></button>`,
    )
    .join("");
}

function setHero(idx) {
  state.heroIndex = idx;
  renderHero();
  clearInterval(state.heroTimer);
  startHeroTimer();
}

function startHeroTimer() {
  state.heroTimer = setInterval(() => {
    state.heroIndex = (state.heroIndex + 1) % Math.min(DATA.length, 7);
    renderHero();
  }, 5500);
}

// ─── MEGA MENU ───────────────────────────────────────────────
function buildMegaMenu() {
  $("mega-inner").innerHTML = GENRES.map(
    (g) => `
    <button class="genre-chip" onclick="openGenrePage('${g.id}','${g.name}')">
      <span class="genre-icon">${g.icon}</span>${g.name}
    </button>`,
  ).join("");

  $("mobile-genre-list").innerHTML = GENRES.map(
    (g) => `
    <button class="mobile-genre-chip"
      onclick="openGenrePage('${g.id}','${g.name}');closeMobileMenu()">
      ${g.icon} ${g.name}
    </button>`,
  ).join("");
}

const megaMenu = $("mega-menu");
const navGenreWrap = document.querySelector(".nav-genre-wrap");

navGenreWrap.addEventListener("mouseenter", () =>
  megaMenu.classList.add("open"),
);
navGenreWrap.addEventListener("mouseleave", () =>
  megaMenu.classList.remove("open"),
);
$("genre-trigger").addEventListener("click", (e) => {
  e.preventDefault();
  megaMenu.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (!navGenreWrap.contains(e.target)) megaMenu.classList.remove("open");
});

$("mobile-genre-toggle").onclick = () => {
  $("mobile-genre-list").classList.toggle("hidden");
};

function closeMobileMenu() {
  $("hamburger").classList.remove("open");
  $("mobile-menu").classList.remove("open");
  $("mobile-genre-list").classList.add("hidden");
}

// ─── GENRE PAGE ──────────────────────────────────────────────
window.openGenrePage = function (genreId, genreName) {
  megaMenu.classList.remove("open");
  state.genreId = genreId;
  state.genreName = genreName;

  const g = GENRES.find((x) => x.id === genreId);
  $("genre-page-title").textContent = (g ? g.icon + " " : "") + genreName;

  const results = DATA.filter((c) => c.genres.includes(genreId));
  $("genre-empty").classList.toggle("hidden", results.length > 0);
  $("genre-load-more").classList.add("hidden");
  $("grid-genre").innerHTML = results.length
    ? results.map((c, i) => renderCard(c, i * 45)).join("")
    : "";

  goTo("genre");
};

$("genre-back").onclick = () => goTo(state.prevPage);

// ─── DETAIL ──────────────────────────────────────────────────
window.openDetail = function (id) {
  const comic = DATA.find((c) => c.id === id);
  if (!comic) return;
  state.currentComic = comic;

  $("d-cover").src = comic.cover;
  $("d-cover").alt = comic.title;
  $("d-title").textContent = comic.title;
  $("d-summary").textContent = comic.summary;
  $("d-chapters-count").textContent = comic.chapters.length;
  $("d-rating").textContent = comic.rating;
  $("d-views").textContent = comic.views;

  $("d-tags").innerHTML = [
    `<span class="tag">👤 ${comic.author}</span>`,
    `<span class="tag accent">${comic.status}</span>`,
    ...comic.genres.map((gid) => {
      const g = GENRES.find((x) => x.id === gid);
      return `<span class="tag" onclick="openGenrePage('${gid}','${g?.name || gid}')">${g?.icon || ""} ${g?.name || gid}</span>`;
    }),
  ].join("");

  renderChapterList(comic.chapters);

  $("chapter-filter").oninput = function () {
    const q = this.value.toLowerCase();
    renderChapterList(
      comic.chapters.filter(
        (ch, i) =>
          `chương ${i + 1}`.includes(q) || ch.name.toLowerCase().includes(q),
      ),
    );
  };

  goTo("detail");
};

function renderChapterList(chapters) {
  if (!chapters.length) {
    $("chapter-list").innerHTML =
      `<div style="padding:20px;text-align:center;color:var(--muted)">Không tìm thấy chương nào</div>`;
    return;
  }
  const full = state.currentComic.chapters;
  $("chapter-list").innerHTML = chapters
    .map((ch) => {
      const origIdx = full.findIndex((c) => c.name === ch.name);
      const isNew = origIdx >= full.length - 3;
      return `
      <div class="chapter-item" onclick="startReading(${origIdx})">
        <span class="chap-num">${origIdx + 1}</span>
        <span class="chap-name">Chương ${origIdx + 1}: ${ch.name}</span>
        ${isNew ? '<span class="chap-new">MỚI</span>' : ""}
        <span class="chap-date">Hôm nay</span>
      </div>`;
    })
    .join("");
}

// ─── READING ─────────────────────────────────────────────────
window.startReading = function (chapIdx) {
  const comic = state.currentComic;
  if (!comic || chapIdx < 0 || chapIdx >= comic.chapters.length) return;
  state.currentChap = chapIdx;

  const ch = comic.chapters[chapIdx];
  $("r-title").textContent = comic.title;
  $("r-chap").textContent = `Chương ${chapIdx + 1}: ${ch.name}`;

  $("chapter-picker").innerHTML = comic.chapters
    .map(
      (c, i) =>
        `<option value="${i}" ${i === chapIdx ? "selected" : ""}>Ch.${i + 1}: ${c.name}</option>`,
    )
    .join("");

  const atStart = chapIdx === 0;
  const atEnd = chapIdx === comic.chapters.length - 1;
  $("prev-btn").disabled = atStart;
  $("next-btn").disabled = atEnd;
  $("prev-btn-bot").disabled = atStart;
  $("next-btn-bot").disabled = atEnd;

  renderReadingViewer(ch.images || []);
  saveHistory(comic, chapIdx);
  goTo("reading");
  setupReadingProgress();
};

function renderReadingViewer(urls) {
  const viewer = $("reading-viewer");
  if (!urls.length) {
    viewer.innerHTML = `
      <div class="page-error" style="aspect-ratio:unset;padding:80px 0">
        <span>📭 Chapter này chưa có ảnh</span>
        <small>Thêm URL ảnh vào mảng images[] trong DATA</small>
      </div>`;
    return;
  }
  viewer.innerHTML = urls
    .map(
      (url, i) => `
    <div class="manga-page-wrap">
      <div class="page-skeleton" id="sk-${i}">
        <span class="page-num">TRANG ${i + 1}</span>
      </div>
      <img
        class="manga-page"
        loading="${i < 3 ? "eager" : "lazy"}"
        src="${url}"
        alt="Trang ${i + 1}"
        onload="var s=document.getElementById('sk-${i}');if(s)s.style.display='none';"
        onerror="this.parentElement.innerHTML='<div class=page-error><span>⚠️ Lỗi trang ${i + 1}</span></div>'"
      >
    </div>`,
    )
    .join("");
}

function setupReadingProgress() {
  const bar = $("reading-progress");
  bar.style.width = "0%";
  window.removeEventListener("scroll", window._readScroll);
  window._readScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", window._readScroll);
}

// ─── FAVORITES ───────────────────────────────────────────────
window.toggleFav = function (id, btn) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    btn.textContent = "❤️";
    btn.classList.add("liked");
    showToast("Đã thêm vào yêu thích ❤️");
  } else {
    state.favorites.splice(idx, 1);
    btn.textContent = "🤍";
    btn.classList.remove("liked");
    showToast("Đã bỏ yêu thích");
  }
  localStorage.setItem("mv_fav", JSON.stringify(state.favorites));
};

function renderFavorites() {
  const favs = DATA.filter((c) => state.favorites.includes(c.id));
  $("favorites-container").innerHTML = favs.length
    ? favs.map((c, i) => renderCard(c, i * 45)).join("")
    : `<div class="empty-state"><div class="empty-icon">🤍</div><h3>Chưa có truyện yêu thích</h3><p>Nhấn vào biểu tượng tim để thêm</p></div>`;
}

// ─── HISTORY ─────────────────────────────────────────────────
function saveHistory(comic, chapIdx) {
  const ch = comic.chapters[chapIdx];
  state.history = state.history.filter((h) => h.id !== comic.id);
  state.history.unshift({
    id: comic.id,
    title: comic.title,
    cover: comic.cover,
    chapIdx,
    chapName: ch.name,
    time: new Date().toLocaleString("vi-VN"),
    progress: Math.round(((chapIdx + 1) / comic.chapters.length) * 100),
  });
  if (state.history.length > 20) state.history = state.history.slice(0, 20);
  localStorage.setItem("mv_hist", JSON.stringify(state.history));
}

function renderHistory() {
  if (!state.history.length) {
    $("history-container").innerHTML =
      `<div class="empty-state"><div class="empty-icon">📖</div><h3>Chưa có lịch sử đọc</h3><p>Hãy bắt đầu đọc một bộ truyện!</p></div>`;
    return;
  }
  $("history-container").innerHTML = `<div class="history-grid">${state.history
    .map(
      (h) => `
      <div class="history-card" onclick="openDetail(${h.id})">
        <img class="history-thumb" src="${h.cover}" alt="${h.title}" loading="lazy">
        <div class="history-info">
          <div class="history-title">${h.title}</div>
          <div class="history-chap">Chương ${h.chapIdx + 1}: ${h.chapName}</div>
          <div class="history-time">🕐 ${h.time}</div>
          <div class="history-bar"><div class="history-bar-fill" style="width:${h.progress}%"></div></div>
        </div>
      </div>`,
    )
    .join("")}</div>`;
}

window.clearHistory = function () {
  if (!confirm("Xóa toàn bộ lịch sử đọc?")) return;
  state.history = [];
  localStorage.removeItem("mv_hist");
  renderHistory();
  showToast("Đã xóa lịch sử");
};

// ─── SEARCH ──────────────────────────────────────────────────
function handleSearch() {
  const q = $("search-input").value.trim().toLowerCase();
  if (!q) return;
  const results = DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.author.toLowerCase().includes(q) ||
      c.genres.some((g) => g.includes(q)),
  );
  $("grid-new").innerHTML = results.length
    ? results.map((c, i) => renderCard(c, i * 45)).join("")
    : `<div class="empty-state"><div class="empty-icon">🔍</div><h3>Không tìm thấy kết quả</h3><p>Thử từ khóa khác nhé!</p></div>`;
  $("grid-recommend").innerHTML = "";
  goTo("home");
  showToast(`Tìm thấy ${results.length} kết quả cho "${q}"`);
}

// ─── TOAST ───────────────────────────────────────────────────
function showToast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}

// ─── AUTH (Đăng Ký / Đăng Nhập — localStorage) ────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9]{9,11}$/;

function setFieldError(id, msg) {
  const el = $(id);
  if (el) el.textContent = msg || "";
}

function clearAuthErrors(prefix) {
  document
    .querySelectorAll(`[id^="err-${prefix}"]`)
    .forEach((el) => (el.textContent = ""));
}

function pwStrengthLabel(pw) {
  if (pw.length < 6) return "weak";
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score >= 3) return "strong";
  if (score >= 1) return "medium";
  return "weak";
}

function updateAuthUI() {
  const btn = $("auth-btn");
  const mobileLink = $("mobile-auth-link");
  if (state.currentUser) {
    btn.innerHTML = `👤 <span class="auth-btn-label">${state.currentUser.username}</span>`;
    btn.classList.add("logged-in");
    if (mobileLink) {
      mobileLink.textContent = `👤 ${state.currentUser.username}`;
      mobileLink.dataset.page = "account";
    }
  } else {
    btn.innerHTML = `👤 <span class="auth-btn-label">Đăng Nhập</span>`;
    btn.classList.remove("logged-in");
    if (mobileLink) {
      mobileLink.textContent = "👤 Đăng Nhập";
      mobileLink.dataset.page = "login";
    }
  }
}

$("auth-btn").onclick = () => {
  goTo(state.currentUser ? "account" : "login");
  closeMobileMenu();
};

// ── Toggle hiện/ẩn mật khẩu ──
document.querySelectorAll(".pw-toggle").forEach((btn) => {
  btn.onclick = () => {
    const input = $(btn.dataset.target);
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    btn.textContent = isHidden ? "🙈" : "👁️";
  };
});

// ── Đo độ mạnh mật khẩu khi đăng ký ──
$("reg-password").oninput = function () {
  const box = $("pw-strength");
  if (!this.value) {
    box.className = "pw-strength";
    return;
  }
  box.className = "pw-strength " + pwStrengthLabel(this.value);
};

// ── Xử lý ĐĂNG KÝ ──
$("register-form").onsubmit = function (e) {
  e.preventDefault();
  clearAuthErrors("reg");

  const username = $("reg-username").value.trim();
  const email = $("reg-email").value.trim().toLowerCase();
  const phone = $("reg-phone").value.trim();
  const password = $("reg-password").value;
  const password2 = $("reg-password2").value;
  const agree = $("reg-agree").checked;

  let valid = true;

  if (username.length < 3) {
    setFieldError("err-reg-username", "Tên đăng nhập cần ít nhất 3 ký tự");
    valid = false;
  } else if (
    state.users.some((u) => u.username.toLowerCase() === username.toLowerCase())
  ) {
    setFieldError("err-reg-username", "Tên đăng nhập đã được sử dụng");
    valid = false;
  }

  if (!EMAIL_RE.test(email)) {
    setFieldError("err-reg-email", "Email không hợp lệ");
    valid = false;
  } else if (state.users.some((u) => u.email === email)) {
    setFieldError("err-reg-email", "Email đã được đăng ký");
    valid = false;
  }

  if (phone && !PHONE_RE.test(phone)) {
    setFieldError("err-reg-phone", "Số điện thoại không hợp lệ (9-11 số)");
    valid = false;
  }

  if (password.length < 6) {
    setFieldError("err-reg-password", "Mật khẩu cần ít nhất 6 ký tự");
    valid = false;
  }

  if (password !== password2) {
    setFieldError("err-reg-password2", "Mật khẩu xác nhận không khớp");
    valid = false;
  }

  if (!agree) {
    setFieldError("err-reg-agree", "Bạn cần đồng ý điều khoản để tiếp tục");
    valid = false;
  }

  if (!valid) return;

  const newUser = {
    id: Date.now(),
    username,
    email,
    phone: phone || null,
    password, // demo cục bộ — web tĩnh, không có backend mã hoá
    joined: new Date().toLocaleDateString("vi-VN"),
    lastLogin: new Date().toLocaleString("vi-VN"),
  };

  state.users.push(newUser);
  localStorage.setItem("mv_users", JSON.stringify(state.users));

  state.currentUser = newUser;
  localStorage.setItem("mv_session", JSON.stringify(newUser));

  updateAuthUI();
  this.reset();
  $("pw-strength").className = "pw-strength";
  showToast(`Chào mừng ${username} đến với MangaVessel! 🎉`);
  goTo("account");
};

// ── Xử lý ĐĂNG NHẬP ──
$("login-form").onsubmit = function (e) {
  e.preventDefault();
  clearAuthErrors("login");

  const input = $("login-username").value.trim().toLowerCase();
  const password = $("login-password").value;

  if (!input) {
    setFieldError(
      "err-login-username",
      "Vui lòng nhập tên đăng nhập hoặc email",
    );
    return;
  }
  if (!password) {
    setFieldError("err-login-password", "Vui lòng nhập mật khẩu");
    return;
  }

  const user = state.users.find(
    (u) => u.username.toLowerCase() === input || u.email === input,
  );

  if (!user) {
    setFieldError("err-login-username", "Tài khoản không tồn tại");
    return;
  }
  if (user.password !== password) {
    setFieldError("err-login-password", "Mật khẩu không đúng");
    return;
  }

  user.lastLogin = new Date().toLocaleString("vi-VN");
  localStorage.setItem("mv_users", JSON.stringify(state.users));

  state.currentUser = user;
  localStorage.setItem("mv_session", JSON.stringify(user));

  updateAuthUI();
  this.reset();
  showToast(`Chào mừng trở lại, ${user.username}! 👋`);
  goTo(state.prevPage === "login" ? "home" : state.prevPage);
};

// ── ĐĂNG XUẤT ──
$("logout-btn").onclick = function () {
  if (!confirm("Đăng xuất khỏi tài khoản?")) return;
  state.currentUser = null;
  localStorage.removeItem("mv_session");
  updateAuthUI();
  showToast("Đã đăng xuất");
  goTo("home");
};

// ── Trang Tài Khoản ──
function renderAccount() {
  const u = state.currentUser;
  if (!u) {
    goTo("login");
    return;
  }
  $("acc-avatar").textContent = u.username.charAt(0).toUpperCase();
  $("acc-username").textContent = u.username;
  $("acc-email").textContent = u.email;

  $("acc-detail-username").textContent = u.username;
  $("acc-detail-email").textContent = u.email;
  $("acc-detail-phone").textContent = u.phone || "Chưa cập nhật";
  $("acc-detail-joined").textContent = u.joined;

  $("acc-fav-count").textContent = state.favorites.length;
  $("acc-hist-count").textContent = state.history.length;
  $("acc-last-login").textContent = u.lastLogin;
}

$("detail-back").onclick = () => goTo(state.prevPage);
$("reading-back").onclick = () => goTo("detail");
$("btn-start-read").onclick = () => {
  if (state.currentComic) startReading(0);
};
$("prev-btn").onclick = () => startReading(state.currentChap - 1);
$("next-btn").onclick = () => startReading(state.currentChap + 1);
$("prev-btn-bot").onclick = () => {
  startReading(state.currentChap - 1);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("next-btn-bot").onclick = () => {
  startReading(state.currentChap + 1);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("chapter-picker").onchange = function () {
  startReading(parseInt(this.value));
};
$("logo-btn").onclick = () => goTo("home");
$("hamburger").onclick = function () {
  this.classList.toggle("open");
  $("mobile-menu").classList.toggle("open");
};
document.querySelectorAll(".nav-link").forEach((a) => {
  a.onclick = function (e) {
    e.preventDefault();
    const page = this.dataset.page;
    if (page) {
      goTo(page);
      closeMobileMenu();
    }
  };
});
$("theme-btn").onclick = function () {
  const isDark = document.body.classList.toggle("dark");
  this.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("mv_theme", isDark ? "dark" : "light");
};
$("search-input").onkeydown = (e) => {
  if (e.key === "Enter") handleSearch();
};

// ─── INIT ────────────────────────────────────────────────────
(function init() {
  if (localStorage.getItem("mv_theme") === "dark") {
    document.body.classList.add("dark");
    $("theme-btn").textContent = "☀️";
  }
  buildMegaMenu();
  renderHome();
  renderHero();
  startHeroTimer();
  updateAuthUI();

  console.log("📋 Danh sách tài khoản đã đăng ký:", state.users);
  console.log("👤 Tài khoản đang đăng nhập:", state.currentUser);
})();
