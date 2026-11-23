export const RECIPES_DATA = [
  {
    id: "resep-1",
    slug: "nasi-goreng-kampung-spesial",
    title: "Nasi Goreng Kampung Spesial",
    subtitle: "Aroma terasi gurih dengan suwiran ayam & telur ceplok setengah matang",
    category: "Sarapan",
    categoryLabel: "Sarapan & Cepat",
    prepTime: "10 menit",
    cookTime: "15 menit",
    totalMinutes: 25,
    servings: 2,
    difficulty: "Mudah",
    calories: "450 kkal",
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=80",
    isPopular: true,
    isFeatured: true,
    description: "Nasi goreng kampung khas rumahan dengan bumbu ulek tradisional bawang merah, cabai rawit, dan sedikit terasi bakar. Sajikan hangat dengan kerupuk renyah dan acar mentimun segar.",
    tags: ["Cepat", "Praktis", "Pedas Gurih", "Favorit Keluarga"],
    ingredients: [
      { name: "Nasi putih dingin (sisa semalam)", amount: 400, unit: "gram", note: "paling baik nasi dingin pera" },
      { name: "Telur ayam", amount: 2, unit: "butir", note: "1 untuk diorak-arik, 1 untuk ceplok" },
      { name: "Daging ayam suwir / sosis", amount: 100, unit: "gram", note: "bisa diganti bakso" },
      { name: "Bawang merah", amount: 5, unit: "siung", note: "haluskan kasar" },
      { name: "Bawang putih", amount: 3, unit: "siung", note: "haluskan" },
      { name: "Cabai rawit merah", amount: 5, unit: "buah", note: "sesuai selera pedas" },
      { name: "Terasi bakar", amount: 0.5, unit: "sdt", note: "opsional untuk aroma sedap" },
      { name: "Kecap manis", amount: 1.5, unit: "sdm", note: "sesuai selera" },
      { name: "Kecap asin / kecap ikan", amount: 1, unit: "sdt", note: "penggugah rasa" },
      { name: "Garam & kaldu jamur", amount: 0.5, unit: "sdt", note: "secukupnya" },
      { name: "Daun bawang iris", amount: 1, unit: "batang", note: "taburan" },
      { name: "Minyak goreng", amount: 2, unit: "sdm", note: "untuk menumis" }
    ],
    steps: [
      {
        step: 1,
        title: "Haluskan Bumbu",
        instruction: "Ulek kasar bawang merah, bawang putih, cabai rawit, dan terasi bakar yang sudah disiapkan.",
        timeMinutes: 5
      },
      {
        step: 2,
        title: "Tumis Bumbu & Orak-arik Telur",
        instruction: "Panaskan 2 sdm minyak di wajan. Tumis bumbu ulek sampai harum dan matang. Sisihkan bumbu di tepi wajan, masukkan 1 butir telur lalu orak-arik hingga berbutir.",
        timeMinutes: 3
      },
      {
        step: 3,
        title: "Masukkan Daging & Nasi",
        instruction: "Masukkan suwiran ayam atau sosis, aduk rata dengan bumbu. Besarkan sedikit api, masukkan nasi putih dingin. Tekan-tekan nasi agar butirannya terurai dan tidak menggumpal.",
        timeMinutes: 4
      },
      {
        step: 4,
        title: "Bumbui & Aduk Rata",
        instruction: "Tuangkan kecap manis, kecap asin, garam, dan kaldu jamur. Aduk cepat di atas api sedang-tinggi hingga aroma smokey wajan keluar dan warna nasi merata.",
        timeMinutes: 3
      },
      {
        step: 5,
        title: "Penyajian",
        instruction: "Matikan api, masukkan irisan daun bawang. Aduk sebentar lalu angkat. Sajikan di piring dengan telur mata sapi, irisan tomat, mentimun, dan kerupuk renyah.",
        timeMinutes: 2
      }
    ],
    chefTips: "Kunci nasi goreng yang tidak lembek adalah memakai nasi yang sudah didiamkan semalam di kulkas (dingin dan pera). Besarkan api sesaat sebelum diangkat untuk mendapatkan sensasi wok hei aromatik."
  },
  {
    id: "resep-2",
    slug: "ayam-bakar-bumbu-rujak-gurih",
    title: "Ayam Bakar Bumbu Rujak Gurih",
    subtitle: "Daging empuk meresap dengan perpaduan pedas, manis, dan aroma bakaran rempah",
    category: "Ayam & Daging",
    categoryLabel: "Ayam & Daging",
    prepTime: "20 menit",
    cookTime: "35 menit",
    totalMinutes: 55,
    servings: 4,
    difficulty: "Sedang",
    calories: "380 kkal",
    rating: 5.0,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=80",
    isPopular: true,
    isFeatured: true,
    description: "Ayam bumbu rujak khas Jawa Timur dengan santan kental yang dimasak perlahan hingga bumbu mengental meresap ke serat daging, lalu dipanggang sampai harum berkilau.",
    tags: ["Mewah", "Lauk Utama", "Rempah Nusantara", "Pilihan Akhir Pekan"],
    ingredients: [
      { name: "Daging ayam (potong 4 atau 8 bagian)", amount: 600, unit: "gram", note: "lumuri jeruk nipis & garam" },
      { name: "Santan sedang", amount: 400, unit: "ml", note: "dari 1/2 butir kelapa" },
      { name: "Serai", amount: 2, unit: "batang", note: "memarkan" },
      { name: "Daun salam", amount: 3, unit: "lembar", note: "segar" },
      { name: "Daun jeruk purut", amount: 4, unit: "lembar", note: "buang tulang daunnya" },
      { name: "Gula merah sisir", amount: 2, unit: "sdm", note: "untuk warna karamel dan gurih" },
      { name: "Air asam jawa", amount: 1, unit: "sdm", note: "larutkan dalam 2 sdm air hangat" },
      { name: "Bawang merah (bumbu halus)", amount: 8, unit: "siung", note: "haluskan" },
      { name: "Bawang putih (bumbu halus)", amount: 4, unit: "siung", note: "haluskan" },
      { name: "Cabai merah keriting (bumbu halus)", amount: 6, unit: "buah", note: "haluskan" },
      { name: "Kemiri sangrai (bumbu halus)", amount: 4, unit: "butir", note: "haluskan" },
      { name: "Kunyit & jahe", amount: 2, unit: "cm", note: "haluskan bersama bumbu" }
    ],
    steps: [
      {
        step: 1,
        title: "Tumis Bumbu Halus",
        instruction: "Panaskan sedikit minyak, tumis bumbu halus bersama serai, daun salam, dan daun jeruk hingga matang wangi dan tidak beraroma langu.",
        timeMinutes: 7
      },
      {
        step: 2,
        title: "Ungkep Ayam",
        instruction: "Masukkan potongan ayam, aduk rata hingga ayam berubah warna keputihan. Tuang santan, air asam jawa, gula merah, dan garam.",
        timeMinutes: 8
      },
      {
        step: 3,
        title: "Masak Hingga Meresap",
        instruction: "Kecilkan api, masak ayam sambil sesekali diaduk sampai kuah santan menyusut kental dan bumbu berminyak kemerahan.",
        timeMinutes: 20
      },
      {
        step: 4,
        title: "Bakar / Panggang Ayam",
        instruction: "Panaskan wajan grill atau teflon. Panggang ayam sambil diolesi sisa kuah bumbu kental di kedua sisi sampai kecokelatan dan ada aroma bakaran sedap.",
        timeMinutes: 10
      }
    ],
    chefTips: "Gunakan kemiri yang telah disangrai agar bumbu rujak lebih kental gurih dan warnanya cerah memikat."
  },
  {
    id: "resep-3",
    slug: "sayur-asem-segar-jakarta",
    title: "Sayur Asem Segar Jakarta",
    subtitle: "Kuah bening asam manis segar pelepas dahaga dengan kacang tanah & jagung manis",
    category: "Sayur & Sup",
    categoryLabel: "Sayur & Sup",
    prepTime: "15 menit",
    cookTime: "20 menit",
    totalMinutes: 35,
    servings: 4,
    difficulty: "Sangat Mudah",
    calories: "120 kkal",
    rating: 4.8,
    reviewsCount: 84,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
    isPopular: true,
    isFeatured: false,
    description: "Sayur asem segar dengan paduan manisnya jagung muda, labu siam empuk, melinjo, dan kacang tanah dalam kuah asam jawa alami yang menyegarkan tubuh.",
    tags: ["Sehat", "Rendah Kalori", "Segar", "Menu Rumahan"],
    ingredients: [
      { name: "Jagung manis (potong bulat)", amount: 1, unit: "buah", note: "potong 2-3 cm" },
      { name: "Labu siam kecil", amount: 1, unit: "buah", note: "kupas, potong dadu sedang" },
      { name: "Kacang panjang", amount: 5, unit: "lonjor", note: "potong 3 cm" },
      { name: "Kacang tanah mentah", amount: 50, unit: "gram", note: "cuci bersih" },
      { name: "Daun & buah melinjo", amount: 30, unit: "gram", note: "cuci bersih" },
      { name: "Asam jawa muda / asam kandis", amount: 3, unit: "mata", note: "geprek" },
      { name: "Lengkuas", amount: 3, unit: "cm", note: "memarkan" },
      { name: "Daun salam", amount: 2, unit: "lembar", note: "segar" },
      { name: "Bawang merah (bumbu halus)", amount: 5, unit: "siung", note: "haluskan" },
      { name: "Cabai merah keriting", amount: 3, unit: "buah", note: "haluskan" },
      { name: "Kemiri sangrai", amount: 2, unit: "butir", note: "haluskan" },
      { name: "Gula merah & garam", amount: 1, unit: "sdm", note: "sesuaikan rasa manis asam" }
    ],
    steps: [
      {
        step: 1,
        title: "Rebus Bahan Keras",
        instruction: "Didihkan 1.5 liter air di panci. Masukkan bumbu halus, daun salam, lengkuas, asam jawa, jagung manis, dan kacang tanah. Masak sampai kacang empuk.",
        timeMinutes: 12
      },
      {
        step: 2,
        title: "Masukkan Sayuran",
        instruction: "Masukkan labu siam dan buah melinjo. Bumbui dengan gula merah dan garam secukupnya. Cicipi hingga rasa seimbang antara asam segar dan gurih manis.",
        timeMinutes: 8
      },
      {
        step: 3,
        title: "Sentuhan Akhir",
        instruction: "Masukkan kacang panjang dan daun melinjo. Masak sebentar saja sekitar 2-3 menit agar sayuran tetap hijau renyah. Angkat dan sajikan.",
        timeMinutes: 3
      }
    ],
    chefTips: "Rebus kacang tanah dan jagung terlebih dahulu sebelum sayuran daun agar sayuran hijau tidak overcooked dan warnanya tetap segar cerah."
  },
  {
    id: "resep-4",
    slug: "tumis-kangkung-terasi-saos-tiram",
    title: "Tumis Kangkung Belacan Saus Tiram",
    subtitle: "Kangkung tetap hijau segar renyah dengan aroma terasi udang yang menggoda",
    category: "Sayur & Sup",
    categoryLabel: "Sayur & Sup",
    prepTime: "8 menit",
    cookTime: "5 menit",
    totalMinutes: 13,
    servings: 2,
    difficulty: "Sangat Mudah",
    calories: "95 kkal",
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    isPopular: true,
    isFeatured: true,
    description: "Menu kilat 10 menit favorit warung tenda dan resto seafood! Kangkung hijau segar ditumis cepat dengan api besar bersama terasi harum, bawang, dan saus tiram gurih.",
    tags: ["Kilat < 15 Menit", "Hemat Anak Kos", "Sehat", "Tinggi Serat"],
    ingredients: [
      { name: "Kangkung segar", amount: 2, unit: "ikat", note: "petik daun dan batang mudanya" },
      { name: "Bawang merah", amount: 4, unit: "siung", note: "iris tipis" },
      { name: "Bawang putih", amount: 2, unit: "siung", note: "cincang halus" },
      { name: "Cabai merah & rawit", amount: 4, unit: "buah", note: "iris serong" },
      { name: "Terasi udang", amount: 1, unit: "sdt", note: "bakar atau goreng sebentar" },
      { name: "Saus tiram", amount: 1, unit: "sdm", note: "kualitas baik" },
      { name: "Tomat merah kecil", amount: 1, unit: "buah", note: "potong memanjang" },
      { name: "Minyak goreng", amount: 2, unit: "sdm", note: "untuk menumis" },
      { name: "Air bersih", amount: 50, unit: "ml", note: "sedikit saja untuk uap" }
    ],
    steps: [
      {
        step: 1,
        title: "Tumis Bumbu Iris & Terasi",
        instruction: "Panaskan wajan dengan minyak panas. Masukkan bawang merah, bawang putih, cabai, dan terasi. Tumis cepat sampai harum.",
        timeMinutes: 2
      },
      {
        step: 2,
        title: "Masukkan Kangkung dengan Api Besar",
        instruction: "Besarkan api kompor. Masukkan seluruh kangkung dan potongan tomat. Aduk cepat selama 1 menit hingga daun mulai layu.",
        timeMinutes: 2
      },
      {
        step: 3,
        title: "Saus Tiram & Selesai",
        instruction: "Beri saus tiram, sedikit garam, dan percikan air. Aduk kilat 30 detik saja, lalu langsung matikan api. Pindahkan ke piring saji.",
        timeMinutes: 1
      }
    ],
    chefTips: "Jangan menumis kangkung terlalu lama! Gunakan api besar dan tumis maksimal 2-3 menit agar kangkung tetap hijau tua berkilau dan teksturnya tetap garing 'kriuk'."
  },
  {
    id: "resep-5",
    slug: "tahu-tempe-bacem-bumbu-meresap",
    title: "Tahu & Tempe Bacem Khas Yogya",
    subtitle: "Manis legit gurih berpadu aroma rempah ketumbar dan air kelapa asli",
    category: "Tahu & Tempe",
    categoryLabel: "Tahu & Tempe",
    prepTime: "15 menit",
    cookTime: "30 menit",
    totalMinutes: 45,
    servings: 4,
    difficulty: "Mudah",
    calories: "210 kkal",
    rating: 4.7,
    reviewsCount: 71,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    isPopular: false,
    isFeatured: false,
    description: "Lauk tradisional legendaris yang manis legit dan wangi gurih ketumbar. Direbus perlahan dengan air kelapa murni dan gula merah hingga bumbu merasuk ke inti tahu dan tempe.",
    tags: ["Vegetarian", "Ekonomis", "Tahan Lama", "Nusantara"],
    ingredients: [
      { name: "Tempe kedelai", amount: 1, unit: "papan", note: "potong tebal 2 cm, kerat permukaan" },
      { name: "Tahu putih / tahu kuning", amount: 5, unit: "buah", note: "potong segitiga" },
      { name: "Air kelapa murni", amount: 600, unit: "ml", note: "membuat bacem legit alami" },
      { name: "Gula merah Jawa", amount: 80, unit: "gram", note: "sisir halus" },
      { name: "Air asam jawa", amount: 1, unit: "sdm", note: "pengimbang rasa" },
      { name: "Daun salam", amount: 3, unit: "lembar", note: "aroma segar" },
      { name: "Lengkuas", amount: 3, unit: "cm", note: "memarkan" },
      { name: "Bawang merah (bumbu halus)", amount: 6, unit: "siung", note: "haluskan" },
      { name: "Bawang putih (bumbu halus)", amount: 3, unit: "siung", note: "haluskan" },
      { name: "Ketumbar butir sangrai", amount: 1.5, unit: "sdm", note: "haluskan bersama bawang" }
    ],
    steps: [
      {
        step: 1,
        title: "Susun di Wajan / Panci",
        instruction: "Tata tempe dan tahu di dasar wajan datar. Masukkan bumbu halus, gula merah sisir, air asam jawa, daun salam, dan lengkuas.",
        timeMinutes: 5
      },
      {
        step: 2,
        title: "Rebus dengan Air Kelapa",
        instruction: "Tuang air kelapa sampai merendam seluruh tahu dan tempe. Masak di atas api sedang hingga mendidih.",
        timeMinutes: 10
      },
      {
        step: 3,
        title: "Ungkep Perlahan",
        instruction: "Kecilkan api kompor, tutup panci. Masak perlahan hingga air menyusut habis dan bumbu mengental kecokelatan meresap ke dalam tahu tempe.",
        timeMinutes: 20
      },
      {
        step: 4,
        title: "Goreng Sebentar (Opsional)",
        instruction: "Bisa langsung dinikmati (bacem basah) atau digoreng sebentar dalam minyak panas selama 1 menit untuk sensasi karamel renyah di luar.",
        timeMinutes: 5
      }
    ],
    chefTips: "Gunakan air kelapa asli daripada air biasa. Air kelapa menghasilkan cita rasa manis gurih alami yang khas tanpa perlu banyak penyedap buatan."
  },
  {
    id: "resep-6",
    slug: "sup-ikan-kemangi-kuah-bening",
    title: "Sup Ikan Nila Kuah Asam Kemangi",
    subtitle: "Kuah bening hangat segar beraroma daun kemangi tanpa bau amis sama sekali",
    category: "Ikan & Seafood",
    categoryLabel: "Ikan & Seafood",
    prepTime: "15 menit",
    cookTime: "20 menit",
    totalMinutes: 35,
    servings: 3,
    difficulty: "Mudah",
    calories: "240 kkal",
    rating: 4.9,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1000&q=80",
    isPopular: true,
    isFeatured: true,
    description: "Sup ikan segar khas pesisir dengan kaldu wangi rempah jahe, serai, tomat hijau, dan semerbak daun kemangi segar. Sangat menyehatkan dan cocok dinikmati saat cuaca dingin.",
    tags: ["Sehat", "Tinggi Protein", "Hangat", "Anti Amis"],
    ingredients: [
      { name: "Ikan nila / kakap segar", amount: 500, unit: "gram", note: "potong 3-4 bagian, beri perasan jeruk nipis" },
      { name: "Daun kemangi segar", amount: 2, unit: "genggam", note: "petik daunnya" },
      { name: "Tomat hijau", amount: 3, unit: "buah", note: "potong 4 bagian" },
      { name: "Serai", amount: 2, unit: "batang", note: "memarkan" },
      { name: "Jahe", amount: 3, unit: "cm", note: "iris tipis atau bakar memarkan" },
      { name: "Kunyit bakar", amount: 2, unit: "cm", note: "iris tipis" },
      { name: "Bawang merah", amount: 5, unit: "siung", note: "iris tipis" },
      { name: "Bawang putih", amount: 3, unit: "siung", note: "iris tipis" },
      { name: "Cabai rawit utuh", amount: 6, unit: "buah", note: "biarkan utuh untuk sensasi pedas meletup" },
      { name: "Air jeruk nipis", amount: 2, unit: "sdm", note: "penyegar kaldu" }
    ],
    steps: [
      {
        step: 1,
        title: "Tumis Rempah Kuah",
        instruction: "Tumis irisan bawang merah, bawang putih, jahe, kunyit, dan serai dengan 1 sdm minyak sampai wangi.",
        timeMinutes: 4
      },
      {
        step: 2,
        title: "Didihkan Kaldu",
        instruction: "Tuangkan 1 liter air ke dalam tumisan. Masukkan garam, merica, dan cabai rawit utuh. Biarkan hingga mendidih harum.",
        timeMinutes: 6
      },
      {
        step: 3,
        title: "Masukkan Ikan",
        instruction: "Masukkan potongan ikan segar ke dalam kuah yang mendidih. Jangan terlalu sering diaduk agar daging ikan tidak hancur. Masak sekitar 8-10 menit.",
        timeMinutes: 10
      },
      {
        step: 4,
        title: "Tambahkan Tomat & Kemangi",
        instruction: "Masukkan tomat hijau, perasan jeruk nipis, dan daun kemangi. Aduk perlahan selama 1 menit lalu matikan api. Sajikan selagi panas mengepul.",
        timeMinutes: 3
      }
    ],
    chefTips: "Kunci ikan tidak amis: cuci dengan garam kasar dan air jeruk nipis sebelum dimasak, dan masukkan ikan hanya saat kuah sudah benar-benar mendidih."
  },
  {
    id: "resep-7",
    slug: "omelet-sayur-keju-kilat",
    title: "Omelet Sayur Keju Sehat & Fluffy",
    subtitle: "Sarapan padat nutrisi tinggi protein siap dalam 10 menit",
    category: "Sarapan",
    categoryLabel: "Sarapan & Cepat",
    prepTime: "5 menit",
    cookTime: "8 menit",
    totalMinutes: 13,
    servings: 1,
    difficulty: "Sangat Mudah",
    calories: "280 kkal",
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
    isPopular: false,
    isFeatured: false,
    description: "Telur dadar lembut berlapis sayuran wortel, bayam, dan lelehan keju mozarella atau cheddar. Pilihan sarapan kilat yang disukai anak-anak maupun dewasa.",
    tags: ["Sarapan Kilat", "Keto Friendly", "Tinggi Protein", "Ramah Anak"],
    ingredients: [
      { name: "Telur ayam segar", amount: 3, unit: "butir", note: "kocok lepas" },
      { name: "Susu cair / air mineral", amount: 2, unit: "sdm", note: "membuat telur lebih fluffy dan lembut" },
      { name: "Daun bayam muda / kale", amount: 1, unit: "genggam", note: "iris halus" },
      { name: "Wortel", amount: 0.5, unit: "buah", note: "serut halus" },
      { name: "Keju parut", amount: 30, unit: "gram", note: "cheddar atau mozarella" },
      { name: "Bawang bombay kecil", amount: 0.25, unit: "buah", note: "cincang halus" },
      { name: "Margarin / mentega", amount: 1, unit: "sdm", note: "untuk mendadar" }
    ],
    steps: [
      {
        step: 1,
        title: "Kocok Bahan Telur",
        instruction: "Kocok telur bersama 2 sdm susu, garam, dan lada bubuk sampai berbusa lembut.",
        timeMinutes: 2
      },
      {
        step: 2,
        title: "Tumis Sayuran Sebentar",
        instruction: "Lelehkan mentega di teflon, tumis bawang bombay dan wortel serut selama 1 menit sampai layu harum.",
        timeMinutes: 2
      },
      {
        step: 3,
        title: "Dadar & Lipat Omelet",
        instruction: "Tuang kocokan telur dan taburkan bayam serta keju parut di atasnya. Masak dengan api kecil sampai bagian bawah matang keemasan, lalu lipat dua dan angkat.",
        timeMinutes: 4
      }
    ],
    chefTips: "Tambahkan sedikit susu cair atau sesendok air dingin ke kocokan telur agar omelet mengembang tebal dan tetap juicy tidak kering."
  },
  {
    id: "resep-8",
    slug: "salad-wrap-alpukat-sayur-segar",
    title: "Green Salad Tortilla Wrap Sehat",
    subtitle: "Paduan selada renyah, alpukat mentega, tomat ceri & saus thousand island",
    category: "Menu Diet",
    categoryLabel: "Menu Diet & Sehat",
    prepTime: "10 menit",
    cookTime: "3 menit",
    totalMinutes: 13,
    servings: 2,
    difficulty: "Sangat Mudah",
    calories: "260 kkal",
    rating: 4.9,
    reviewsCount: 78,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    isPopular: false,
    isFeatured: true,
    description: "Salad wrap segar ala kafe sehat dengan kulit tortilla gandum hangat, isian aneka sayuran hijau renyah, alpukat lumer, dan dressing yoghurt wijen sangrai yang menyegarkan.",
    tags: ["Diet Sehat", "Tanpa Minyak", "Segar", "Plant Based"],
    ingredients: [
      { name: "Kulit tortilla gandum", amount: 2, unit: "lembar", note: "panggang hangat di teflon" },
      { name: "Alpukat matang", amount: 1, unit: "buah", note: "iris memanjang" },
      { name: "Selada romaine / iceberg", amount: 4, unit: "lembar", note: "cuci bersih dan tiriskan" },
      { name: "Tomat ceri merah", amount: 6, unit: "buah", note: "belah dua" },
      { name: "Mentimun jepang", amount: 0.5, unit: "buah", note: "potong korek api" },
      { name: "Dressing roasted sesame / thousand island", amount: 2, unit: "sdm", note: "atau greek yoghurt" }
    ],
    steps: [
      {
        step: 1,
        title: "Hangatkan Kulit Tortilla",
        instruction: "Panaskan teflon tanpa minyak, hangatkan kedua sisi kulit tortilla masing-masing 20 detik agar lentur dan mudah digulung.",
        timeMinutes: 2
      },
      {
        step: 2,
        title: "Susun Isian Segar",
        instruction: "Tata daun selada di bagian tengah tortilla, beri irisan mentimun, tomat ceri, dan irisan alpukat mentega.",
        timeMinutes: 4
      },
      {
        step: 3,
        title: "Beri Saus & Gulung Rapi",
        instruction: "Siramkan saus dressing favorit secukupnya. Lipat sisi kanan dan kiri tortilla, lalu gulung padat ke depan. Potong miring dua bagian dan sajikan.",
        timeMinutes: 3
      }
    ],
    chefTips: "Keringkan daun selada dengan tissue dapur setelah dicuci agar kulit tortilla tidak menjadi lembek saat digulung."
  }
];

export const CATEGORIES_DATA = [
  { id: "all", name: "Semua Resep", icon: "Utensils", count: 8 },
  { id: "Sarapan", name: "Sarapan Cepat", icon: "Sun", count: 2 },
  { id: "Ayam & Daging", name: "Ayam & Daging", icon: "Drumstick", count: 1 },
  { id: "Sayur & Sup", name: "Sayur & Sup", icon: "Carrot", count: 2 },
  { id: "Ikan & Seafood", name: "Ikan & Seafood", icon: "Fish", count: 1 },
  { id: "Tahu & Tempe", name: "Tahu & Tempe", icon: "Layers", count: 1 },
  { id: "Menu Diet", name: "Menu Diet & Sehat", icon: "Leaf", count: 1 },
];

