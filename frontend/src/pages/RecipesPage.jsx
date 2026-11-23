import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  X, 
  UtensilsCrossed, 
  Sparkles, 
  Clock, 
  Flame, 
  ArrowUpDown,
  RotateCcw
} from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { RECIPES_DATA, CATEGORIES_DATA } from '../data/recipes';

export default function RecipesPage({ 
  onSelectRecipe, 
  bookmarks = [], 
  onToggleBookmark,
  onNavigate,
  initialCategory = 'all'
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter and sort logic
  const filteredRecipes = useMemo(() => {
    return RECIPES_DATA.filter((recipe) => {
      // Category filter
      if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all') {
        if (selectedDifficulty === 'mudah' && !recipe.difficulty.toLowerCase().includes('mudah')) return false;
        if (selectedDifficulty === 'sedang' && !recipe.difficulty.toLowerCase().includes('sedang')) return false;
      }

      // Time filter
      if (selectedTime !== 'all') {
        if (selectedTime === 'under20' && recipe.totalMinutes > 20) return false;
        if (selectedTime === '20to40' && (recipe.totalMinutes <= 20 || recipe.totalMinutes > 40)) return false;
        if (selectedTime === 'over40' && recipe.totalMinutes <= 40) return false;
      }

      // Search query (matches title, subtitle, or ingredients)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const titleMatch = recipe.title.toLowerCase().includes(q);
        const subMatch = (recipe.subtitle || '').toLowerCase().includes(q);
        const ingMatch = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(q));
        const tagMatch = (recipe.tags || []).some(t => t.toLowerCase().includes(q));
        if (!titleMatch && !subMatch && !ingMatch && !tagMatch) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'fastest') return a.totalMinutes - b.totalMinutes;
      if (sortBy === 'calories') return parseInt(a.calories) - parseInt(b.calories);
      return b.reviewsCount - a.reviewsCount; // popular default
    });
  }, [selectedCategory, selectedDifficulty, selectedTime, searchQuery, sortBy]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedTime('all');
    setSortBy('popular');
  };

  const isFiltered = selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedTime !== 'all' || searchQuery !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-widest uppercase text-[#4A7C59]">
          Katalog Masakan
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E352A]">
          Daftar Resep & Kategori
        </h1>
        <p className="text-sm sm:text-base text-[#547154]">
          Temukan ratusan resep pilihan dengan takaran akurat, waktu masak cepat, dan tips dapur anti gagal.
        </p>
      </div>

      {/* Main Search & Control Bar */}
      <div className="bg-[#FAF8F2] rounded-3xl p-4 sm:p-6 border border-[#DDE7DC] shadow-soft space-y-4">
        
        {/* Search input + Mobile filter toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#6C8C6C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama masakan atau bahan (ayam, telur, kangkung, sup)..."
              className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white border border-[#CDDCCD] text-sm text-[#1E352A] placeholder:text-[#8FAA8F] focus:outline-none focus:border-[#264436] focus:ring-2 focus:ring-[#CDDCCD]/40 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6C8C6C] hover:text-[#1E352A]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="md:hidden flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#EBF4EC] text-[#264436] font-semibold text-sm border border-[#CDDCCD]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#264436] text-white shadow-sm'
                    : 'bg-white text-[#425842] border border-[#DDE7DC] hover:border-[#CDDCCD] hover:bg-[#EBF4EC]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Detailed Filters (Difficulty, Time, Sort) */}
        <div className={`pt-3 border-t border-[#E5EDE5] flex flex-wrap items-center justify-between gap-4 text-xs ${showFiltersMobile ? 'block' : 'hidden md:flex'}`}>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Difficulty Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[#2F402F]">Kesulitan:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-white border border-[#CDDCCD] rounded-xl px-2.5 py-1.5 font-medium text-[#2F402F] focus:outline-none focus:border-[#264436]"
              >
                <option value="all">Semua</option>
                <option value="mudah">Mudah / Sangat Mudah</option>
                <option value="sedang">Sedang</option>
              </select>
            </div>

            {/* Time Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[#2F402F]">Waktu Masak:</span>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="bg-white border border-[#CDDCCD] rounded-xl px-2.5 py-1.5 font-medium text-[#2F402F] focus:outline-none focus:border-[#264436]"
              >
                <option value="all">Semua Waktu</option>
                <option value="under20">&lt; 20 menit (Kilat)</option>
                <option value="20to40">20 - 40 menit</option>
                <option value="over40">&gt; 40 menit</option>
              </select>
            </div>

            {/* Reset Button if filter is active */}
            {isFiltered && (
              <button
                onClick={resetAllFilters}
                className="flex items-center gap-1 text-[#E75A47] hover:underline font-bold px-2 py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filter</span>
              </button>
            )}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-semibold text-[#2F402F] flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#6C8C6C]" />
              Urutkan:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#CDDCCD] rounded-xl px-3 py-1.5 font-semibold text-[#264436] focus:outline-none focus:border-[#264436]"
            >
              <option value="popular">Paling Populer</option>
              <option value="rating">Rating Tertinggi</option>
              <option value="fastest">Waktu Tercepat</option>
              <option value="calories">Kalori Terendah</option>
            </select>
          </div>

        </div>

      </div>

      {/* Results Count & Active Search Info */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-[#547154] px-1">
        <div>
          Menampilkan <strong className="text-[#1E352A] font-bold">{filteredRecipes.length}</strong> resep
          {searchQuery && <span> untuk pencarian "<strong className="text-[#1E352A]">{searchQuery}</strong>"</span>}
        </div>

        {/* Shortcut to AI */}
        <button
          onClick={() => onNavigate('ai')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#264436] hover:text-[#1E352A] hover:underline"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#4A7C59]" />
          <span>Mau racik resep dari bahanmu? Coba AI</span>
        </button>
      </div>

      {/* Recipe Cards Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
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
        <div className="text-center py-20 bg-[#FAF8F2] rounded-3xl border border-[#DDE7DC] p-8 space-y-4">
          <UtensilsCrossed className="w-14 h-14 text-[#8FAA8F] mx-auto opacity-70" />
          <h3 className="font-serif text-2xl font-bold text-[#1E352A]">
            Tidak Ada Resep yang Sesuai
          </h3>
          <p className="text-sm text-[#547154] max-w-md mx-auto leading-relaxed">
            Kami tidak menemukan resep yang cocok dengan filter atau kata kunci "{searchQuery}". Coba ubah filter atau biarkan AI meracik resep khusus untukmu!
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={resetAllFilters}
              className="px-5 py-2.5 rounded-full bg-[#EBF4EC] text-[#264436] text-xs font-bold hover:bg-[#CDDCCD] transition-colors"
            >
              Reset Semua Filter
            </button>
            <button
              onClick={() => onNavigate('ai')}
              className="px-6 py-2.5 rounded-full bg-[#264436] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#1E352A] shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#A8C5A8]" />
              <span>Racik Bahan dengan MasakYuk AI</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

