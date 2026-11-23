# 🍳 MasakYuk - Platform Resep Masakan & AI Asisten Kuliner

Selamat datang di **MasakYuk**! Platform modern inspirasi memasak harian keluarga Indonesia yang dilengkapi dengan rekomendasi resep teruji dan asisten kuliner pintar berbasis AI (Google Gemini 3.8 Flash).

Proyek ini dibangun sesuai dengan arahan visual mockup (desain palet sage green, warm cream, dan gaya editorial yang elegan) serta seluruh spesifikasi modul pengembangan (Sprint 1 - 5).

---

## 🎨 Tampilan & Design System

Desain antarmuka MasakYuk mengacu langsung pada panduan visual yang diberikan:
- **Warna Utama**:
  - Warm Cream Background: `#FAF8F2` & `#F5F1E6`
  - Deep Forest & Pine Green: `#264436` & `#1E352A`
  - Soft Herbal Sage: `#EBF1EA` & `#CDDCCD`
  - Tomato Red & Golden Sun Accent: `#E75A47` & `#F5A623`
- **Tipografi**:
  - *Playfair Display*: Untuk headline dan judul resep yang estetik, hangat, dan menggugah selera.
  - *Plus Jakarta Sans*: Untuk navigasi, teks instruksi, dan takaran bahan yang jelas serta mudah dibaca.
- **Komponen UI Utama**:
  - Navbar responsif dengan navigasi beranda, resep, MasakYuk AI, tips kuliner, dan penghitung resep tersimpan.
  - Kartu resep rounded 3xl dengan badge kategori, tingkat kesulitan, waktu masak, rating bintang, dan tombol favorit interaktif.
  - Footer dengan lengkungan estetis, navigasi kategori, dan informasi tim pengembang.

---

## 🚀 Fitur yang Tersedia (Sesuai Rincian Tugas)

### 1. 🏠 Halaman Beranda (Home)
- **Hero Banner**: Judul utama dengan tipografi anggun, tombol aksi cepat *"Coba MasakYuk AI"* dan *"Jelajahi Resep"*, serta elemen visual mangkuk salad segar dan floating cards (sarapan kilat & rekomendasi cerdas).
- **Bar Pencarian Cepat**: Terintegrasi di bawah hero untuk pencarian cepat nama makanan atau bahan kulkas.
- **Bagian "Kenapa Memilih MasakYuk?"**: 3 kartu fitur khas sage green (Filter & Kategori Cerdas, MasakYuk AI Generator, dan Resep Lengkap Teruji).
- **Koleksi Resep Populer**: Tab filter kategori instan dan kartu resep teruji keluarga.
- **Banner Promosi MasakYuk AI**: Ajakan interaktif untuk meracik menu dari stok sisa kulkas.
- **Preview Edukasi Kuliner**: Artikel tips memasak dan trik penyimpanan bahan makanan.

### 2. 🍲 Halaman Daftar Resep & Kategori
- Filter kategori lengkap: *Semua*, *Sarapan*, *Ayam & Daging*, *Sayur & Sup*, *Ikan & Seafood*, *Tahu & Tempe*, dan *Menu Diet & Sehat*.
- Filter sekunder: Tingkat kesulitan (*Mudah*, *Sedang*), Estimasi waktu (*< 20 mnt*, *20-40 mnt*, *> 40 mnt*), dan pengurutan (*Paling Populer*, *Rating Tertinggi*, *Waktu Tercepat*, *Kalori Terendah*).
- Informasi kartu: Foto HD, estimasi waktu masak, jumlah porsi, kalori, tingkat kesulitan, dan deskripsi singkat.

### 3. 🔍 Fitur Pencarian Resep
- Pencarian cerdas secara *real-time* berdasarkan:
  - Nama masakan (contoh: *"Nasi Goreng"*, *"Ayam Bakar"*)
  - Bahan baku utama (contoh: *"ayam"*, *"telur"*, *"kangkung"*, *"tahu"*)
- Tampilan ramah ketika tidak ada hasil yang cocok (*empty state*), lengkap dengan tombol reset dan tombol langsung tanya ke MasakYuk AI.

### 4. 📖 Halaman Detail Resep Interaktif
- **Kalkulator Porsi Dinamis**: Tombol `+` dan `-` untuk mengubah jumlah porsi secara langsung, otomatis menghitung ulang seluruh takaran bahan secara proporsional.
- **Checklist Bahan Interaktif**: Memudahkan koki di dapur mencentang bahan yang sudah disiapkan.
- **Panduan Langkah Memasak Bertahap**: Dilengkapi penanda langkah selesai dan animasi selebrasi *confetti* saat seluruh langkah selesai.
- **Timer Memasak Terintegrasi (In-App Timer)**: Pengatur waktu memasak praktis dengan tombol play/pause, reset, dan notifikasi waktu habis.
- **Tips Rahasia Chef**: Catatan pro-tips agar aroma masakan semakin harum dan tekstur sayur tetap renyah.
- Tombol simpan ke favorit (*Bookmark*) dan bagikan tautan resep.

### 5. 🤖 Halaman MasakYuk AI (Asisten Kuliner Gemini)
- **Input Bahan Fleksibel**: Dapat mengetik bahan custom atau memilih cepat dari chip bahan populer (*Telur, Ayam, Tahu, Tempe, Bawang, Cabai, Kangkung, dll.*).
- **Pilihan Preferensi Masak**:
  - Jumlah Porsi (1-2 porsi, 2-3 porsi, 4-5 porsi)
  - Tingkat Kesulitan (Sangat Mudah, Mudah, Sedang)
  - Waktu Maksimal (Kilat < 15 mnt, Santai 20-30 mnt, Fleksibel)
  - Selera & Diet (Bebas Pedas, Pedas Mantap, Vegetarian, Tinggi Protein)
- **Animasi Loading**: Menampilkan proses racik resep dengan visual yang interaktif.
- **Hasil 3 Variasi Resep**: Menampilkan nama hidangan, deskripsi menggugah selera, estimasi waktu, porsi, bahan utama & tambahan, serta langkah-langkah praktis.
- Terhubung langsung dengan endpoint backend `/api/recommend` (Google Gemini API), dengan sistem cerdas *fallback* bawaan yang tetap berfungsi penuh bahkan saat offline.

### 6. 📝 Halaman Artikel & Tips Memasak
- Daftar artikel edukasi kuliner:
  - *Rahasia Menyimpan Sayuran di Kulkas Tetap Segar 2 Minggu*
  - *Trik Menumis Sayur Restoran: Tetap Hijau Segar & Renyah 'Kriuk'*
  - *Mengenal 'Bumbu Dasar' Masakan Indonesia (Putih, Merah, Kuning)*
  - *Cara Tepat Menyimpan Daging & Ikan di Freezer Tanpa Freezer Burn*
- **Modal Reader View**: Membaca artikel lengkap dengan ringkasan poin-poin penting dan tips dapur.

### 7. ❤️ Halaman Resep Tersimpan (Bookmarks)
- Menyimpan resep favorit pengguna ke `localStorage` browser sehingga tetap tersimpan saat halaman dimuat ulang.

---

## 🛠️ Struktur Folder Proyek

```
MasakYuk-Project/
├── api/
│   └── index.js             # Express API backend & Google Gemini endpoint (/api/recommend)
├── frontend/
│   ├── public/              # Aset statis frontend
│   ├── src/
│   │   ├── components/      # Komponen UI: Navbar, Footer, RecipeCard, SearchBar
│   │   ├── data/            # Mock dataset: recipes.js, articles.js, aiMock.js
│   │   ├── pages/           # Halaman: HomePage, RecipesPage, RecipeDetailPage, AiPage, ArticlesPage, BookmarksPage
│   │   ├── App.jsx          # Router & state manager utama
│   │   ├── index.css        # Tailwind CSS & styling kustom
│   │   └── main.jsx         # Entry point React
│   ├── package.json         # Konfigurasi dependensi frontend
│   ├── tailwind.config.js   # Palet warna sage green & Playfair Display
│   └── vite.config.js       # Vite bundler (build ke ../public)
├── public/                  # Hasil kompilasi produksi siap saji
├── package.json             # Root script & backend dependencies
├── vercel.json              # Konfigurasi deployment Vercel
├── .env.example             # Contoh konfigurasi environment variable
└── README.md                # Dokumentasi lengkap proyek
```

---

## 💻 Panduan Menjalankan Proyek

### 1. Prasyarat
- Node.js (versi 18 atau 20+)
- npm

### 2. Instalasi Dependensi
Jalankan perintah berikut di folder root proyek:
```bash
npm run install:all
```
*(Atau lakukan `npm install` di root dan di dalam folder `frontend`)*

### 3. Konfigurasi Lingkungan (Opsional untuk AI)
Salin `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Isi `GEMINI_API_KEY` dengan API Key dari Google AI Studio jika ingin menggunakan integrasi live Gemini AI. Jika tidak diisi, fitur AI tetap berfungsi menggunakan generator cerdas fallback.

### 4. Menjalankan dalam Mode Pengembangan (Dev Mode)
Untuk menjalankan frontend dengan Vite hot-reload:
```bash
npm run dev
```
Akses di browser: `http://localhost:5173`

Untuk menjalankan backend Express:
```bash
npm run dev:api
```
Akses server: `http://localhost:3000`

### 5. Membangun untuk Produksi (Build & Serve)
```bash
npm run build
npm start
```
Aplikasi lengkap beserta API akan berjalan di `http://localhost:3000`.

---

## ☁️ Deployment ke Vercel

Proyek ini telah dikonfigurasi dengan `vercel.json` sehingga dapat dideploy ke Vercel secara langsung:
1. Hubungkan repository GitHub ke Vercel.
2. Tambahkan Environment Variable di Vercel:
   - `GEMINI_API_KEY`: *(API Key Google Gemini Anda)*
3. Vercel akan otomatis mengeksekusi build frontend ke `public` dan menyajikan endpoint `/api/recommend` melalui serverless functions.

