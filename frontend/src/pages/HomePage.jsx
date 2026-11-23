import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  ChefHat, 
  Utensils, 
  Clock, 
  CheckCircle2, 
  Flame, 
  Heart, 
  Compass, 
  BookOpen, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Zap,
  Leaf
} from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import { RECIPES_DATA, CATEGORIES_DATA } from '../data/recipes';
import { ARTICLES_DATA } from '../data/articles';

export default function HomePage({ 
  onNavigate, 
  onSelectRecipe, 
  bookmarks = [], 
  onToggleBookmark 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter recipes for home display
  const popularRecipes = RECIPES_DATA.filter((recipe) => {
    const matchCat = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchSearch = searchQuery.trim() === '' || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featuredArticles = ARTICLES_DATA.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SECTION (Designed strictly following the uploaded design mockup) */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        
        {/* Soft background glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#CDDCCD]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#EBF4EC]/80 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge Pills */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4EC] border border-[#CDDCCD] text-[#264436] text-xs font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#4A7C59] animate-pulse" />
                <span>Asisten Masak & Resep Pintar</span>
                <span className="text-[#8FAA8F]">•</span>
                <span className="text-[#4A7C59]">MasakYuk 2.0</span>
              </div>

              {/* Main Headline (Playfair serif aesthetic like mockup) */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E352A] leading-[1.15]">
                Masak Lezat & Sehat <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#4A7C59]">dari Stok Kulkasmu</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#425842] leading-relaxed max-w-xl">
                Tidak perlu bingung lagi mau masak apa hari ini. Jelajahi ratusan resep rumahan teruji atau gunakan <strong className="text-[#1E352A] font-semibold">MasakYuk AI</strong> untuk meracik ide masakan praktis dalam hitungan detik.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('ai')}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#264436] hover:bg-[#1E352A] text-[#FAF8F2] font-semibold text-sm sm:text-base shadow-card hover:shadow-float transition-all active:scale-95 group"
                >
                  <Sparkles className="w-5 h-5 text-[#A8C5A8] group-hover:rotate-12 transition-transform" />
                  <span>Coba MasakYuk AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('recipes')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-[#FAF8F2] hover:bg-[#EBF4EC] text-[#264436] font-semibold text-sm sm:text-base border-2 border-[#CDDCCD] hover:border-[#264436] transition-all active:scale-95"
                >
                  <Utensils className="w-4 h-4 text-[#4A7C59]" />
                  <span>Jelajahi Resep</span>
                </button>
              </div>

              {/* Quick Feature Stats */}
              <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#E5EDE5] max-w-lg">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E352A]">500+</div>
                  <div className="text-xs text-[#6C8C6C] font-medium">Resep Teruji</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E352A]">15 Mnt</div>
                  <div className="text-xs text-[#6C8C6C] font-medium">Rata-rata Masak</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E352A]">100%</div>
                  <div className="text-xs text-[#6C8C6C] font-medium">Bahan Mudah</div>
                </div>
              </div>

            </div>

            {/* Right Hero Image Column (matches Image 11 organic bowl design) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Outer decorative ring */}
              <div className="relative w-72 sm:w-96 lg:w-[420px] aspect-square rounded-full p-3 bg-gradient-to-tr from-[#CDDCCD]/60 via-[#E5EDE5]/40 to-[#AFC6AF]/50 shadow-card">
                
                {/* Main Hero Dish Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#FAF8F2] shadow-float relative">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80"
                    alt="Salad Bowl Segar MasakYuk"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E352A]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Card 1: Popular Toast / Quick Breakfast */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#FAF8F2]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#CDDCCD] shadow-card flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#EBF4EC]">
                    <img 
                      src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80" 
                      alt="Sarapan Kilat" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#1E352A]">Sarapan Kilat 10 Mnt</span>
                    <span className="text-[11px] text-[#6C8C6C]">Tinggi Protein & Fluffy</span>
                  </div>
                </div>

                {/* Floating Card 2: AI Recommendation Sparkle */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#264436] text-[#FAF8F2] p-2.5 sm:p-3 rounded-2xl shadow-card flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF8F2]/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#A8C5A8]" />
                  </div>
                  <span className="text-xs font-semibold pr-1">Rekomendasi Cerdas</span>
                </div>

              </div>

            </div>

          </div>

          {/* Quick Search Bar anchored below Hero */}
          <div className="mt-12 sm:mt-16 pt-4">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              onSelectSuggestion={(s) => {
                setSearchQuery(s);
              }}
              onOpenAi={() => onNavigate('ai')}
            />
          </div>

        </div>
      </section>

      {/* 2. THREE FEATURE HIGHLIGHTS ("Kenapa Memilih MasakYuk?") - strictly matching Image 11 3-card section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#4A7C59]">
            Keunggulan MasakYuk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E352A]">
            Solusi Praktis Dapur Setiap Hari
          </h2>
          <p className="text-sm sm:text-base text-[#547154]">
            Dirancang khusus untuk memudahkan siapa saja menyajikan masakan nikmat tanpa repot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Filter & Kategori Cerdas */}
          <div className="bg-[#EBF1EA] rounded-3xl p-6 sm:p-8 border border-[#DDE7DC] shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F2] border border-[#CDDCCD] flex items-center justify-center text-[#264436] shadow-sm">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E352A]">
                Filter & Kategori Cerdas
              </h3>
              <p className="text-sm text-[#425842] leading-relaxed">
                Pilah ratusan resep berdasarkan waktu masak, tingkat kesulitan, jenis lauk, sayuran, hingga menu ramah diet dengan satu ketukan.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DDE7DC]">
              <button 
                onClick={() => onNavigate('recipes')}
                className="text-xs font-bold text-[#264436] hover:text-[#1E352A] flex items-center gap-1 group"
              >
                <span>Jelajahi Menu</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: MasakYuk AI Generator */}
          <div className="bg-[#EBF1EA] rounded-3xl p-6 sm:p-8 border border-[#DDE7DC] shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#AFC6AF]/30 rounded-full blur-2xl" />
            <div className="space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-[#264436] flex items-center justify-center text-[#FAF8F2] shadow-sm">
                <Sparkles className="w-6 h-6 text-[#A8C5A8]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E352A] flex items-center gap-2">
                <span>MasakYuk AI Chef</span>
                <span className="text-[10px] bg-[#264436] text-[#FAF8F2] font-bold px-2 py-0.5 rounded-full">Baru</span>
              </h3>
              <p className="text-sm text-[#425842] leading-relaxed">
                Ketikkan bahan yang tersisa di kulkasmu (misal: telur, tahu, wortel), AI kami langsung meracik 3 pilihan resep masakan lengkap dengan langkahnya.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DDE7DC] relative">
              <button 
                onClick={() => onNavigate('ai')}
                className="text-xs font-bold text-[#264436] hover:text-[#1E352A] flex items-center gap-1 group"
              >
                <span>Coba Sekarang</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Resep Teruji & Panduan Langkah */}
          <div className="bg-[#EBF1EA] rounded-3xl p-6 sm:p-8 border border-[#DDE7DC] shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F2] border border-[#CDDCCD] flex items-center justify-center text-[#264436] shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-[#4A7C59]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E352A]">
                Resep Lengkap & Tips Teruji
              </h3>
              <p className="text-sm text-[#425842] leading-relaxed">
                Semua takaran bahan dapat diatur porsinya secara dinamis, dilengkapi checklist persiapan, timer memasak, dan rahasia chef anti gagal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DDE7DC]">
              <button 
                onClick={() => onNavigate('articles')}
                className="text-xs font-bold text-[#264436] hover:text-[#1E352A] flex items-center gap-1 group"
              >
                <span>Baca Tips Memasak</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. POPULAR RECIPES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#4A7C59]">
              Inspirasi Hari Ini
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E352A] mt-1">
              Resep Populer & Pilihan Keluarga
            </h2>
          </div>

          <button
            onClick={() => onNavigate('recipes')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#264436] hover:text-[#1E352A] group self-start md:self-auto"
          >
            <span>Lihat Semua Resep ({RECIPES_DATA.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#264436] text-white shadow-sm'
                    : 'bg-[#FAF8F2] text-[#425842] border border-[#DDE7DC] hover:border-[#CDDCCD] hover:bg-[#EBF4EC]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Recipe Grid */}
        {popularRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={onSelectRecipe}
                isBookmarked={bookmarks.some(b => b.id === recipe.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAF8F2] rounded-3xl border border-[#DDE7DC] p-8 space-y-4">
            <Utensils className="w-12 h-12 text-[#8FAA8F] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#1E352A]">
              Tidak Ada Resep yang Cocok
            </h3>
            <p className="text-sm text-[#547154] max-w-md mx-auto">
              Tidak menemukan resep untuk "{searchQuery}". Coba kata kunci lain atau gunakan MasakYuk AI untuk meracik resep khusus untukmu!
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-4 py-2 rounded-full bg-[#EBF4EC] text-[#264436] text-xs font-bold"
              >
                Reset Pencarian
              </button>
              <button
                onClick={() => onNavigate('ai')}
                className="px-5 py-2 rounded-full bg-[#264436] text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A8C5A8]" />
                Tanya MasakYuk AI
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 4. INTERACTIVE MASAKYUK AI PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#264436] via-[#1E352A] to-[#2B3324] text-[#FAF8F2] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-card">
          
          {/* Subtle culinary graphic circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#4A7C59]/30 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#859A6D]/20 blur-2xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F2]/10 border border-[#FAF8F2]/20 text-[#A8C5A8] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Solusi Anti Mubazir Makanan</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Punya Sisa Bahan di Kulkas? <br />
                <span className="text-[#A8C5A8]">Biarkan MasakYuk AI Menemukan Menunya</span>
              </h2>

              <p className="text-sm sm:text-base text-[#CDDCCD] max-w-xl leading-relaxed">
                Cukup masukkan bahan yang ada di dapurmu hari ini—seperti telur, sisa ayam, tahu, atau sayuran. AI asisten kuliner kami akan langsung meracikkan 3 resep masakan Nusantara lezat beserta langkah memasaknya.
              </p>

              {/* Sample Ingredient Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-[#CDDCCD] font-medium">Contoh bahan:</span>
                {['Telur Ayam', 'Tahu Putih', 'Bawang Merah', 'Kangkung', 'Cabai Rawit'].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full bg-[#FAF8F2]/10 text-[#FAF8F2] border border-[#FAF8F2]/15">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('ai')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FAF8F2] text-[#264436] hover:bg-[#EBF4EC] font-bold text-sm sm:text-base shadow-float hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-[#4A7C59]" />
                <span>Racik Menu Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ARTICLES & COOKING TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#4A7C59]">
              Edukasi Kuliner
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E352A] mt-1">
              Tips Dapur & Penyimpanan Bahan
            </h2>
          </div>

          <button
            onClick={() => onNavigate('articles')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#264436] hover:text-[#1E352A] group"
          >
            <span>Semua Artikel Tips</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onNavigate('articles', { articleId: art.id })}
              className="bg-[#FAF8F2] rounded-3xl p-4 sm:p-5 border border-[#E5EDE5] hover:border-[#CDDCCD] shadow-soft hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#EBF4EC] relative mb-4">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F2]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#264436]">
                    {art.category}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-[#6C8C6C] font-medium">{art.readTime}</span>
                  <h3 className="font-serif text-lg font-bold text-[#1E352A] group-hover:text-[#4A7C59] transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#547154] line-clamp-2 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5EDE5] flex items-center justify-between text-xs text-[#264436] font-bold">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

