import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  X, 
  ChefHat, 
  Clock, 
  Users, 
  Flame, 
  Check, 
  AlertCircle, 
  RotateCcw, 
  BookOpen, 
  Bookmark,
  Share2,
  UtensilsCrossed,
  Sliders,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateSmartAiRecipe } from '../data/aiMock';

const POPULAR_INGREDIENTS = [
  'Telur Ayam', 'Tahu Putih', 'Tempe', 'Daging Ayam', 'Bawang Merah', 
  'Bawang Putih', 'Cabai Rawit', 'Kangkung', 'Wortel', 'Tomat', 
  'Nasi Dingin', 'Sosis', 'Ikan Gurame', 'Bayam', 'Kentang'
];

export default function AiPage({ 
  onSelectRecipe, 
  onSaveCustomRecipe,
  onShowToast,
  onNavigate
}) {
  const [ingredients, setIngredients] = useState(['Telur Ayam', 'Bawang Merah', 'Cabai Rawit']);
  const [customInput, setCustomInput] = useState('');
  
  // Filter settings
  const [servings, setServings] = useState('2-3 porsi');
  const [difficulty, setDifficulty] = useState('Mudah');
  const [maxTime, setMaxTime] = useState('20 menit');
  const [dietary, setDietary] = useState('Semua');

  // Generation status
  const [isLoading, setIsLoading] = useState(false);
  const [generatedRecipes, setGeneratedRecipes] = useState(null);
  const [errorNotice, setErrorNotice] = useState(null);
  const [savedAiRecipes, setSavedAiRecipes] = useState({});

  const addIngredient = (item) => {
    const trimmed = item.trim();
    if (!trimmed) return;
    if (!ingredients.some(i => i.toLowerCase() === trimmed.toLowerCase())) {
      setIngredients([...ingredients, trimmed]);
    }
    setCustomInput('');
  };

  const removeIngredient = (idx) => {
    setIngredients(ingredients.filter((_, i) => i !== idx));
  };

  const handleGenerate = async () => {
    if (ingredients.length === 0) {
      setErrorNotice('Silakan tambahkan minimal 1 bahan kulkas terlebih dahulu.');
      return;
    }

    setIsLoading(true);
    setErrorNotice(null);
    setGeneratedRecipes(null);

    const ingredientsString = ingredients.join(', ');

    try {
      // 1. Try real backend endpoint first
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients: ingredientsString,
          servings,
          difficulty,
          maxTime,
          dietary
        })
      });

      const data = await response.json();

      if (response.ok && data.recipes && Array.isArray(data.recipes) && data.recipes.length > 0) {
        setGeneratedRecipes(data.recipes);
        try { confetti({ particleCount: 60, spread: 60 }); } catch (e) {}
      } else {
        // If API key is not configured or network error, fallback to smart built-in AI generator
        console.warn('Backend API note: Fallback to built-in smart AI generator', data.error);
        const fallbackResult = generateSmartAiRecipe(ingredientsString, {
          servings,
          difficulty,
          maxTime,
          dietary
        });
        setGeneratedRecipes(fallbackResult);
        try { confetti({ particleCount: 50, spread: 60 }); } catch (e) {}
      }
    } catch (err) {
      console.warn('Network / fetch issue, using smart fallback AI:', err);
      // Fallback
      const fallbackResult = generateSmartAiRecipe(ingredientsString, {
        servings,
        difficulty,
        maxTime,
        dietary
      });
      setGeneratedRecipes(fallbackResult);
      try { confetti({ particleCount: 50, spread: 60 }); } catch (e) {}
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveRecipe = (recipe, index) => {
    setSavedAiRecipes(prev => ({
      ...prev,
      [index]: true
    }));
    if (onSaveCustomRecipe) {
      onSaveCustomRecipe({
        ...recipe,
        id: `ai-saved-${Date.now()}-${index}`,
        category: 'Kreasi AI',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
        rating: 5.0,
        reviewsCount: 1,
        title: recipe.nama || recipe.title
      });
    }
    if (onShowToast) {
      onShowToast(`Resep "${recipe.nama || recipe.title}" disimpan ke favorit!`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4EC] text-[#264436] text-xs font-bold border border-[#CDDCCD]">
          <Sparkles className="w-3.5 h-3.5 text-[#4A7C59]" />
          <span>Didukung Google Gemini 3.8 Flash</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E352A]">
          MasakYuk AI Chef
        </h1>
        <p className="text-sm sm:text-base text-[#547154] leading-relaxed">
          Punya bahan apa saja di kulkas hari ini? Masukkan ke dalam kotak di bawah, AI kami akan meracik ide masakan lezat dan anti gagal.
        </p>
      </div>

      {/* Main AI Input Form Card */}
      <div className="bg-[#FAF8F2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DDE7DC] shadow-soft space-y-8">
        
        {/* Step 1: Input Bahan */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="font-serif text-xl font-bold text-[#1E352A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#264436] text-white text-xs flex items-center justify-center font-sans font-bold">1</span>
              <span>Bahan yang Tersedia di Dapurmu</span>
            </label>
            <span className="text-xs text-[#6C8C6C]">
              {ingredients.length} bahan terpilih
            </span>
          </div>

          {/* Active Ingredients Tags */}
          <div className="flex flex-wrap items-center gap-2 p-3 bg-white rounded-2xl border border-[#CDDCCD] min-h-[56px]">
            {ingredients.map((ing, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF4EC] text-[#264436] text-xs font-bold border border-[#CDDCCD] animate-scaleIn"
              >
                <span>{ing}</span>
                <button
                  onClick={() => removeIngredient(idx)}
                  className="p-0.5 rounded-full hover:bg-[#CDDCCD] text-[#6C8C6C] hover:text-[#1E352A]"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {/* Custom Input */}
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addIngredient(customInput);
                }
              }}
              placeholder={ingredients.length === 0 ? "Ketik bahan lalu tekan Enter..." : "Tambah bahan lain..."}
              className="flex-1 min-w-[140px] text-xs sm:text-sm bg-transparent outline-none text-[#1E352A] placeholder:text-[#8FAA8F] py-1 px-2"
            />

            {customInput && (
              <button
                onClick={() => addIngredient(customInput)}
                className="px-3 py-1 rounded-full bg-[#264436] text-white text-xs font-bold flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                <span>Tambah</span>
              </button>
            )}
          </div>

          {/* Quick Selection Chips */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#547154]">Pilih Cepat Bahan Populer:</span>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_INGREDIENTS.map((item, idx) => {
                const isSelected = ingredients.includes(item);
                return (
                  <button
                    key={idx}
                    disabled={isSelected}
                    onClick={() => addIngredient(item)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-[#CDDCCD] text-[#6C8C6C] cursor-not-allowed'
                        : 'bg-white hover:bg-[#EBF4EC] text-[#2F402F] border border-[#DDE7DC] hover:border-[#CDDCCD] active:scale-95'
                    }`}
                  >
                    + {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 2: Cooking Preferences */}
        <div className="space-y-4 pt-4 border-t border-[#E5EDE5]">
          <label className="font-serif text-xl font-bold text-[#1E352A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#264436] text-white text-xs flex items-center justify-center font-sans font-bold">2</span>
            <span>Preferensi & Kebutuhan Masak</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Servings */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#DDE7DC] space-y-1.5">
              <span className="text-xs font-semibold text-[#547154] flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#4A7C59]" />
                Jumlah Porsi
              </span>
              <select
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                className="w-full text-xs font-bold text-[#1E352A] bg-transparent outline-none cursor-pointer"
              >
                <option value="1-2 porsi">1 - 2 Porsi (Sendiri / Pasangan)</option>
                <option value="2-3 porsi">2 - 3 Porsi (Standar)</option>
                <option value="4-5 porsi">4 - 5 Porsi (Keluarga)</option>
              </select>
            </div>

            {/* Difficulty */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#DDE7DC] space-y-1.5">
              <span className="text-xs font-semibold text-[#547154] flex items-center gap-1">
                <ChefHat className="w-3.5 h-3.5 text-[#4A7C59]" />
                Tingkat Kesulitan
              </span>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full text-xs font-bold text-[#1E352A] bg-transparent outline-none cursor-pointer"
              >
                <option value="Sangat Mudah">Sangat Mudah (Anti Gagal)</option>
                <option value="Mudah">Mudah (Rumahan)</option>
                <option value="Sedang">Sedang (Ada Teknik Sedikit)</option>
              </select>
            </div>

            {/* Time */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#DDE7DC] space-y-1.5">
              <span className="text-xs font-semibold text-[#547154] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#4A7C59]" />
                Waktu Maksimal
              </span>
              <select
                value={maxTime}
                onChange={(e) => setMaxTime(e.target.value)}
                className="w-full text-xs font-bold text-[#1E352A] bg-transparent outline-none cursor-pointer"
              >
                <option value="15 menit">Kilat (&lt; 15 menit)</option>
                <option value="25 menit">Santai (20 - 30 menit)</option>
                <option value="Fleksibel">Fleksibel (&gt; 30 menit)</option>
              </select>
            </div>

            {/* Dietary */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#DDE7DC] space-y-1.5">
              <span className="text-xs font-semibold text-[#547154] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#E75A47]" />
                Selera / Pantangan
              </span>
              <select
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                className="w-full text-xs font-bold text-[#1E352A] bg-transparent outline-none cursor-pointer"
              >
                <option value="Semua">Semua Cita Rasa</option>
                <option value="Bebas Pedas">Tidak Pedas (Anak-anak)</option>
                <option value="Pedas Mantap">Pecinta Pedas</option>
                <option value="Vegetarian">Vegetarian (Tanpa Daging)</option>
                <option value="Tinggi Protein">Tinggi Protein & Sehat</option>
              </select>
            </div>

          </div>
        </div>

        {/* Error Notice */}
        {errorNotice && (
          <div className="p-4 rounded-2xl bg-[#FFF4F2] border border-[#FFD5D0] flex items-center gap-3 text-xs sm:text-sm text-[#C93B2B]">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{errorNotice}</span>
          </div>
        )}

        {/* Generate Action Button */}
        <div className="text-center pt-2">
          <button
            onClick={handleGenerate}
            disabled={isLoading || ingredients.length === 0}
            className={`w-full sm:w-auto px-10 py-4 rounded-full font-bold text-base shadow-card transition-all flex items-center justify-center gap-3 mx-auto ${
              isLoading || ingredients.length === 0
                ? 'bg-[#CDDCCD] text-[#6C8C6C] cursor-not-allowed'
                : 'bg-[#264436] hover:bg-[#1E352A] text-white hover:scale-105 active:scale-95'
            }`}
          >
            <Sparkles className="w-5 h-5 text-[#A8C5A8]" />
            <span>{isLoading ? 'Sedang Meracik Resep...' : 'Racik Resep dengan AI'}</span>
          </button>
        </div>

      </div>

      {/* Loading Animation Box */}
      {isLoading && (
        <div className="text-center py-16 bg-[#FAF8F2] rounded-3xl border border-[#DDE7DC] p-8 space-y-5 animate-pulse">
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 rounded-full border-4 border-[#CDDCCD] border-t-[#264436] animate-spin" />
            <ChefHat className="w-8 h-8 text-[#264436] absolute inset-0 m-auto" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#1E352A]">
              Chef AI Sedang Bekerja...
            </h3>
            <p className="text-sm text-[#547154] max-w-md mx-auto">
              Menganalisis kombinasi {ingredients.join(', ')} untuk menghasilkan masakan paling lezat dan pas porsinya.
            </p>
          </div>
        </div>
      )}

      {/* GENERATED RECIPES SECTION */}
      {generatedRecipes && (
        <div className="space-y-6 pt-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5EDE5]">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#4A7C59]">
                Hasil Racikan AI
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E352A]">
                3 Rekomendasi Menu Spesial Untukmu
              </h2>
            </div>

            <button
              onClick={handleGenerate}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EBF4EC] text-[#264436] hover:bg-[#CDDCCD] text-xs font-bold transition-all self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Racik Variasi Baru</span>
            </button>
          </div>

          {/* Cards of AI Recipes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generatedRecipes.map((item, idx) => {
              const isSaved = savedAiRecipes[idx];

              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F2] rounded-3xl p-6 border border-[#DDE7DC] shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    
                    {/* Header Card */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#EBF4EC] text-[#264436]">
                        Pilihan {idx + 1}
                      </span>
                      <button
                        onClick={() => handleSaveRecipe(item, idx)}
                        className={`p-2 rounded-full border transition-all ${
                          isSaved 
                            ? 'bg-[#E75A47] text-white border-[#E75A47]' 
                            : 'bg-white text-[#2F402F] border-[#CDDCCD] hover:bg-[#EBF4EC]'
                        }`}
                        title="Simpan ke favorit"
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Dish Name */}
                    <h3 className="font-serif text-xl font-bold text-[#1E352A] leading-snug">
                      {item.nama || item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#547154] leading-relaxed">
                      {item.deskripsi || item.description}
                    </p>

                    {/* Metadata Pills */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#425842] font-semibold pt-1">
                      <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#E5EDE5]">
                        <Clock className="w-3 h-3 text-[#4A7C59]" />
                        {item.waktu || '20 mnt'}
                      </span>
                      <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#E5EDE5]">
                        <Users className="w-3 h-3 text-[#4A7C59]" />
                        {item.porsi || servings}
                      </span>
                      <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#E5EDE5]">
                        <ChefHat className="w-3 h-3 text-[#4A7C59]" />
                        {item.kesulitan || difficulty}
                      </span>
                    </div>

                    {/* Ingredients summary */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-[#1E352A] block">Bahan:</span>
                      <ul className="text-xs text-[#425842] space-y-1 list-disc list-inside">
                        {(item.bahanUtama || []).map((b, bIdx) => (
                          <li key={bIdx} className="line-clamp-1">{b}</li>
                        ))}
                        {(item.bahanTambahan || []).slice(0, 2).map((b, bIdx) => (
                          <li key={`add-${bIdx}`} className="text-[#6C8C6C] line-clamp-1">{b}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Steps preview */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-[#1E352A] block">Langkah Memasak:</span>
                      <ol className="text-xs text-[#425842] space-y-1.5 list-decimal list-inside">
                        {(item.langkah || []).slice(0, 3).map((st, sIdx) => (
                          <li key={sIdx} className="leading-relaxed">
                            {typeof st === 'string' ? st : st.instruction}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Chef Tip */}
                    {item.tipsChef && (
                      <div className="p-3 rounded-xl bg-[#EBF1EA] text-[11px] text-[#264436] space-y-1">
                        <strong className="block font-bold">💡 Tips Chef:</strong>
                        <p>{item.tipsChef}</p>
                      </div>
                    )}

                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-[#E5EDE5] flex items-center justify-between">
                    <button
                      onClick={() => handleSaveRecipe(item, idx)}
                      className="text-xs font-bold text-[#264436] hover:underline"
                    >
                      {isSaved ? '✓ Tersimpan di Favorit' : '+ Simpan Resep'}
                    </button>
                    <button
                      onClick={() => {
                        // Open as detailed view
                        const adaptedRecipe = {
                          id: `ai-${idx}`,
                          title: item.nama || item.title,
                          category: 'Kreasi AI',
                          cookTime: item.waktu || '20 menit',
                          servings: 2,
                          difficulty: item.kesulitan || 'Mudah',
                          calories: item.kalori || '300 kkal',
                          rating: 5.0,
                          reviewsCount: 1,
                          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
                          description: item.deskripsi,
                          ingredients: (item.bahanUtama || []).concat(item.bahanTambahan || []).map(name => ({
                            name: typeof name === 'string' ? name : name.name,
                            amount: 1,
                            unit: 'secukupnya'
                          })),
                          steps: (item.langkah || []).map((stepText, stIdx) => ({
                            step: stIdx + 1,
                            title: `Langkah ${stIdx + 1}`,
                            instruction: typeof stepText === 'string' ? stepText : stepText.instruction,
                            timeMinutes: 5
                          })),
                          chefTips: item.tipsChef
                        };
                        onSelectRecipe(adaptedRecipe);
                      }}
                      className="px-4 py-2 rounded-full bg-[#264436] text-white text-xs font-bold hover:bg-[#1E352A]"
                    >
                      Lihat Langkah Penuh
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}

