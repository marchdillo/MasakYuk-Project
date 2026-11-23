// Smart fallback AI generator for MasakYuk
// Generates accurate, tailored Indonesian home dishes matching the user's specific fridge ingredients and preferences.

export function generateSmartAiRecipe(ingredientsText, options = {}) {
  const {
    servings = "2-3 porsi",
    difficulty = "Mudah",
    maxTime = "25 menit",
    dietary = "Umum"
  } = options;

  const raw = ingredientsText.toLowerCase();
  const words = raw.split(/[\s,]+/).filter(Boolean);

  const hasEgg = words.some(w => w.includes("telur") || w.includes("egg"));
  const hasChicken = words.some(w => w.includes("ayam") || w.includes("chicken"));
  const hasTofu = words.some(w => w.includes("tahu"));
  const hasTempeh = words.some(w => w.includes("tempe"));
  const hasFish = words.some(w => w.includes("ikan") || w.includes("udang") || w.includes("cumi"));
  const hasRice = words.some(w => w.includes("nasi"));
  const hasVeggies = words.some(w => w.includes("sayur") || w.includes("bayam") || w.includes("kangkung") || w.includes("wortel") || w.includes("sawi") || w.includes("tomat"));

  const userItems = ingredientsText.split(/[,+\n]/).map(s => s.trim()).filter(Boolean);
  const primaryList = userItems.length > 0 ? userItems : ["Bahan pilihan kulkasmu"];

  const recipes = [];

  // Recipe Option 1: Quick Stir-fry / Fried specialty
  if (hasRice || (!hasChicken && !hasFish)) {
    recipes.push({
      id: "ai-1",
      nama: hasRice ? "Nasi Goreng Gurih Aroma Kulkas" : "Tumis Gurih Aneka Bahan Spesial",
      deskripsi: `Kombinasi cepat dan lezat memanfaatkan stok ${primaryList.slice(0, 3).join(', ')} dengan bumbu tumis bawang putih dan kecap aromatik.`,
      waktu: "15 menit",
      porsi: servings,
      kesulitan: "Sangat Mudah",
      kalori: "340 kkal",
      cocokUntuk: "Makan Siang / Malam Kilat",
      bahanUtama: primaryList,
      bahanTambahan: ["3 siung bawang merah", "2 siung bawang putih", "Cabai rawit sesuai selera", "Kecap manis & asin", "Minyak goreng"],
      langkah: [
        "Potong dan iris seluruh bahan yang kamu miliki menjadi ukuran siap masak.",
        "Panaskan wajan dengan 2 sdm minyak. Tumis bawang merah, bawang putih, dan cabai hingga harum keemasan.",
        `Masukkan ${primaryList[0] || 'bahan utama'} dan aduk cepat hingga mulai matang.`,
        "Tambahkan kecap manis, kecap asin, sedikit garam, dan kaldu bubuk sesuai selera.",
        "Aduk merata dengan api sedang hingga bumbu meresap sempurna. Angkat dan sajikan hangat."
      ],
      tipsChef: "Gunakan api sedikit besar di akhir memasak agar aromanya semakin wangi menggugah selera."
    });
  } else if (hasChicken) {
    recipes.push({
      id: "ai-1",
      nama: "Ayam Tumis Saus Mentega Gurih",
      deskripsi: `Potongan ayam gurih dipadukan dengan ${primaryList.slice(0, 2).join(' dan ')} berbalut saus mentega manis gurih yang disukai keluarga.`,
      waktu: "25 menit",
      porsi: servings,
      kesulitan: "Mudah",
      kalori: "410 kkal",
      cocokUntuk: "Lauk Istimewa Keluarga",
      bahanUtama: primaryList,
      bahanTambahan: ["2 sdm mentega/margarin", "1/2 buah bawang bombay", "2 siung bawang putih geprek", "Kecap manis & saus tiram", "Perasan jeruk limau"],
      langkah: [
        "Potong ayam dan bahan kulkasmu menjadi potongan dadu atau suwiran.",
        "Goreng atau tumis ayam terlebih dahulu hingga berkulit kecokelatan, lalu sisihkan.",
        "Lelehkan mentega di wajan, tumis bawang bombay dan bawang putih hingga layu harum.",
        "Masukkan kembali ayam beserta bahan tambahan, tuangkan kecap manis dan saus tiram.",
        "Aduk rata hingga saus mengental berkilau. Beri sedikit perasan jeruk limau sesaat sebelum diangkat."
      ],
      tipsChef: "Tambahkan mentega di awal dan sesendok teh mentega segar di saat api baru dimatikan agar wanginya tahan lama."
    });
  } else {
    recipes.push({
      id: "ai-1",
      nama: "Tumis Praktis Bumbu Bawang Wangi",
      deskripsi: `Masakan praktis penuh nutrisi memadukan ${primaryList.join(', ')} dengan bumbu ulek sederhana yang cepat matang.`,
      waktu: "15 menit",
      porsi: servings,
      kesulitan: "Sangat Mudah",
      kalori: "230 kkal",
      cocokUntuk: "Menu Cepat Anak Kos",
      bahanUtama: primaryList,
      bahanTambahan: ["Bawang merah & putih", "Cabai merah", "Saus tiram", "Sedikit merica bubuk"],
      langkah: [
        "Siapkan dan bersihkan semua bahan yang ada.",
        "Tumis bawang dan cabai dengan 1-2 sdm minyak sampai wangi sedap.",
        "Masukkan bahan utama dimulai dari bahan yang teksturnya paling padat.",
        "Tambahkan bumbu saus tiram, merica, dan garam secukupnya.",
        "Aduk rata 2-3 menit saja agar nutrisi dan kesegarannya terjaga."
      ],
      tipsChef: "Jangan tambahkan air terlalu banyak agar tumisan tidak berkuah keruh."
    });
  }

  // Recipe Option 2: Comforting Soup / Warm gravy dish
  recipes.push({
    id: "ai-2",
    nama: (hasTofu || hasTempeh) ? "Orak-Arik Gurih Pedas Manis" : "Sup Bening Hangat Rempah Rumahan",
    deskripsi: `Olahan nikmat nan menyegarkan yang mengoptimalkan ${primaryList.slice(0, 3).join(', ')} menjadi hidangan kaya rasa.`,
    waktu: "20 menit",
    porsi: servings,
    kesulitan: "Mudah",
    kalori: "260 kkal",
    cocokUntuk: "Menu Sehat Menghangatkan",
    bahanUtama: primaryList,
    bahanTambahan: ["Bawang putih geprek", "Daun bawang & seledri", "Garam, gula, lada bubuk", "Kaldu kaldu jamur secukupnya"],
    langkah: [
      "Didihkan 700 ml air atau kaldu di panci ukuran sedang.",
      "Tumis bawang putih geprek sebentar hingga wangi, lalu masukkan ke dalam air rebusan.",
      `Masukkan bahan utama (${primaryList[0] || 'bahan'}) secara bertahap.`,
      "Bumbui dengan garam, lada bubuk, dan kaldu jamur secukupnya. Cicipi hingga rasanya pas di lidah.",
      "Taburkan irisan daun bawang dan seledri, masak 1 menit lagi lalu angkat."
    ],
    tipsChef: "Geprek bawang putih dan tumis sebentar sebelum dimasukkan ke air rebusan agar kuah sup lebih wangi dan bening berkilau."
  });

  // Recipe Option 3: Crispy / Balado / Savory Delight
  recipes.push({
    id: "ai-3",
    nama: hasEgg ? "Telur Dadar Rempah Tebal Krispi" : "Balado Gurih Manis Bumbu Merah",
    deskripsi: `Sajian lezat dengan cita rasa Nusantara klasik yang menonjolkan kelezatan ${primaryList.slice(0, 2).join(' & ')}.`,
    waktu: "20 menit",
    porsi: servings,
    kesulitan: "Sedang",
    kalori: "310 kkal",
    cocokUntuk: "Teman Nasi Hangat Mantap",
    bahanUtama: primaryList,
    bahanTambahan: ["Cabai merah keriting", "Bawang merah & putih", "Tomat merah kecil", "Gula merah sisir", "Minyak goreng"],
    langkah: [
      "Haluskan cabai, bawang, dan tomat untuk membuat bumbu sambal yang nikmat.",
      "Goreng sebentar bahan utama hingga berkulit dan matang.",
      "Tumis bumbu halus di wajan hingga matang tanak dan minyaknya berwarna kemerahan.",
      "Bumbui dengan garam, gula pasir/gula merah, dan penyedap rasa.",
      "Masukkan bahan utama yang sudah digoreng, aduk rata bersama sambal hingga terbalut sempurna."
    ],
    tipsChef: "Masak sambal sampai benar-benar matang (berminyak) sebelum mencampurkan bahan agar rasanya manis gurih dan tidak beraroma langu."
  });

  return recipes;
}

