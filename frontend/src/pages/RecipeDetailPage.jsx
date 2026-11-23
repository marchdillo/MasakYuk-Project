import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Flame, 
  Star, 
  Heart, 
  Share2, 
  Check, 
  ChefHat, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Info,
  Timer as TimerIcon,
  CheckCircle2,
  BookmarkCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RecipeDetailPage({ 
  recipe, 
  onBack, 
  isBookmarked = false, 
  onToggleBookmark,
  onNavigate,
  onShowToast
}) {
  if (!recipe) return null;

  // Dynamic portion calculator state
  const baseServings = recipe.servings || 2;
  const [currentServings, setCurrentServings] = useState(baseServings);
  const portionMultiplier = currentServings / baseServings;

  // Interactive ingredients checklist state
  const [checkedIngredients, setCheckedIngredients] = useState({});

  // Interactive step completion state
  const [completedSteps, setCompletedSteps] = useState({});

  // Built-in cooking timer state
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 minutes default
  const [timerInitial, setTimerInitial] = useState(300);
  const [timerActive, setTimerActive] = useState(false);

  // Timer interval
  React.useEffect(() => {
    let interval = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && timerActive) {
      setTimerActive(false);
      if (onShowToast) {
        onShowToast('⏰ Waktu memasak selesai! Periksa masakanmu.');
      }
      try {
        confetti({ particleCount: 50, spread: 60 });
      } catch (e) {}
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  const toggleIngredient = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleStep = (stepNumber) => {
    const updated = {
      ...completedSteps,
      [stepNumber]: !completedSteps[stepNumber]
    };
    setCompletedSteps(updated);

    // If all steps completed, celebrate with confetti!
    const allDone = (recipe.steps || []).every(s => updated[s.step]);
    if (allDone) {
      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
      if (onShowToast) {
        onShowToast('🎉 Selamat! Hidangan siap disajikan. Selamat menikmati!');
      }
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (onShowToast) onShowToast('Tautan resep disalin ke papan klip!');
    }
  };

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const setStepTimer = (minutes) => {
    const s = minutes * 60;
    setTimerInitial(s);
    setTimerSeconds(s);
    setTimerActive(true);
    if (onShowToast) onShowToast(`Timer diset untuk ${minutes} menit`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Navigation Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EBF4EC] hover:bg-[#CDDCCD] text-[#264436] font-semibold text-xs sm:text-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Resep</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Share Button */}
          <button
            onClick={handleShare}
            aria-label="Bagikan Resep"
            className="p-2.5 rounded-full bg-[#FAF8F2] hover:bg-[#EBF4EC] text-[#2F402F] border border-[#DDE7DC] shadow-sm transition-all"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(recipe)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm ${
              isBookmarked
                ? 'bg-[#E75A47] text-white'
                : 'bg-[#FAF8F2] text-[#2F402F] border border-[#DDE7DC] hover:bg-[#EBF4EC]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
            <span>{isBookmarked ? 'Disimpan' : 'Simpan'}</span>
          </button>
        </div>
      </div>

      {/* Hero Visual & Title */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F2] rounded-3xl p-6 sm:p-8 border border-[#E5EDE5] shadow-soft">
        
        {/* Left: Recipe Info */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#EBF4EC] text-[#264436] border border-[#CDDCCD]">
              {recipe.category}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#FAF8F2] text-[#F5A623] border border-[#DDE7DC]">
              <Star className="w-3.5 h-3.5 fill-[#F5A623]" />
              <span>{recipe.rating || 4.9}</span>
              <span className="text-[#6C8C6C]">({recipe.reviewsCount || 100} ulasan)</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E352A] leading-tight">
            {recipe.title}
          </h1>

          <p className="text-sm sm:text-base text-[#425842] leading-relaxed">
            {recipe.description || recipe.subtitle}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#E5EDE5]">
            <div className="p-3 rounded-2xl bg-[#EBF1EA] text-center">
              <Clock className="w-4 h-4 text-[#4A7C59] mx-auto mb-1" />
              <div className="text-[10px] text-[#6C8C6C] uppercase font-bold">Waktu Masak</div>
              <div className="text-xs sm:text-sm font-bold text-[#1E352A]">{recipe.cookTime || recipe.waktu}</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#EBF1EA] text-center">
              <Users className="w-4 h-4 text-[#4A7C59] mx-auto mb-1" />
              <div className="text-[10px] text-[#6C8C6C] uppercase font-bold">Porsi</div>
              <div className="text-xs sm:text-sm font-bold text-[#1E352A]">{recipe.servings || recipe.porsi}</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#EBF1EA] text-center">
              <ChefHat className="w-4 h-4 text-[#4A7C59] mx-auto mb-1" />
              <div className="text-[10px] text-[#6C8C6C] uppercase font-bold">Kesulitan</div>
              <div className="text-xs sm:text-sm font-bold text-[#1E352A]">{recipe.difficulty}</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#EBF1EA] text-center">
              <Flame className="w-4 h-4 text-[#E75A47] mx-auto mb-1" />
              <div className="text-[10px] text-[#6C8C6C] uppercase font-bold">Kalori</div>
              <div className="text-xs sm:text-sm font-bold text-[#1E352A]">{recipe.calories || '300 kkal'}</div>
            </div>
          </div>
        </div>

        {/* Right: Recipe Photo */}
        <div className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden shadow-card bg-[#EBF4EC]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Main Content Layout: Ingredients (Left) & Steps (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* INGREDIENTS SECTION (5 cols) */}
        <div className="lg:col-span-5 bg-[#FAF8F2] rounded-3xl p-6 sm:p-7 border border-[#E5EDE5] shadow-soft space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-[#E5EDE5]">
            <h2 className="font-serif text-2xl font-bold text-[#1E352A] flex items-center gap-2">
              <span>Bahan & Takaran</span>
            </h2>

            {/* Dynamic Portion Controls */}
            <div className="flex items-center gap-2 bg-[#EBF1EA] px-3 py-1.5 rounded-full border border-[#DDE7DC]">
              <span className="text-xs font-semibold text-[#425842]">Porsi:</span>
              <button
                onClick={() => setCurrentServings(Math.max(1, currentServings - 1))}
                className="w-5 h-5 rounded-full bg-white text-[#1E352A] font-bold flex items-center justify-center hover:bg-[#CDDCCD] text-xs"
              >
                -
              </button>
              <span className="text-xs font-bold text-[#1E352A] w-4 text-center">
                {currentServings}
              </span>
              <button
                onClick={() => setCurrentServings(currentServings + 1)}
                className="w-5 h-5 rounded-full bg-white text-[#1E352A] font-bold flex items-center justify-center hover:bg-[#CDDCCD] text-xs"
              >
                +
              </button>
            </div>
          </div>

          <p className="text-xs text-[#6C8C6C]">
            Centang bahan yang sudah kamu siapkan di meja dapur:
          </p>

          {/* Interactive Checklist */}
          <div className="space-y-2.5">
            {(recipe.ingredients || []).map((ing, idx) => {
              const isChecked = checkedIngredients[idx];
              // Adjust amount dynamically based on portion multiplier
              const dynamicAmount = ing.amount ? Math.round((ing.amount * portionMultiplier) * 10) / 10 : null;

              return (
                <div
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`flex items-start gap-3 p-3 rounded-2xl cursor-pointer transition-all border ${
                    isChecked 
                      ? 'bg-[#EBF4EC] border-[#CDDCCD] opacity-65 line-through' 
                      : 'bg-white border-[#E5EDE5] hover:border-[#CDDCCD]'
                  }`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${
                    isChecked 
                      ? 'bg-[#264436] border-[#264436] text-white' 
                      : 'border-[#8FAA8F] bg-white'
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1 text-xs sm:text-sm">
                    <span className="font-semibold text-[#1E352A]">{ing.name}</span>
                    {dynamicAmount && (
                      <span className="text-[#4A7C59] font-bold ml-1.5">
                        ({dynamicAmount} {ing.unit})
                      </span>
                    )}
                    {ing.note && (
                      <span className="text-[11px] text-[#6C8C6C] block mt-0.5">
                        {ing.note}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chef Pro Tips Callout */}
          {recipe.chefTips && (
            <div className="p-4 rounded-2xl bg-[#EBF1EA] border border-[#DDE7DC] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#264436]">
                <ChefHat className="w-4 h-4 text-[#4A7C59]" />
                <span>Rahasia Chef MasakYuk</span>
              </div>
              <p className="text-xs text-[#425842] leading-relaxed">
                {recipe.chefTips}
              </p>
            </div>
          )}

        </div>

        {/* COOKING STEPS SECTION (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Steps Header with Timer tool */}
          <div className="bg-[#FAF8F2] rounded-3xl p-6 sm:p-7 border border-[#E5EDE5] shadow-soft space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5EDE5]">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#1E352A]">
                  Langkah Memasak
                </h2>
                <span className="text-xs text-[#6C8C6C]">
                  Ikuti langkah demi langkah untuk hasil masakan sempurna
                </span>
              </div>

              {/* In-App Cooking Timer Widget */}
              <div className="flex items-center gap-3 bg-[#EBF4EC] px-4 py-2 rounded-2xl border border-[#CDDCCD]">
                <TimerIcon className="w-4 h-4 text-[#264436]" />
                <span className="font-mono text-base font-bold text-[#1E352A]">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setTimerActive(!timerActive)}
                  className={`p-1.5 rounded-xl text-white ${timerActive ? 'bg-[#E75A47]' : 'bg-[#264436]'}`}
                  title={timerActive ? 'Jeda Timer' : 'Mulai Timer'}
                >
                  {timerActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => { setTimerActive(false); setTimerSeconds(timerInitial); }}
                  className="p-1.5 rounded-xl bg-white text-[#2F402F] hover:bg-[#CDDCCD]"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Steps List */}
            <div className="space-y-4">
              {(recipe.steps || []).map((stepItem) => {
                const isStepCompleted = completedSteps[stepItem.step];

                return (
                  <div
                    key={stepItem.step}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all ${
                      isStepCompleted 
                        ? 'bg-[#EBF4EC]/60 border-[#CDDCCD]' 
                        : 'bg-white border-[#E5EDE5] hover:border-[#CDDCCD] shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isStepCompleted 
                            ? 'bg-[#264436] text-white' 
                            : 'bg-[#EBF1EA] text-[#264436]'
                        }`}>
                          {stepItem.step}
                        </span>
                        <h3 className={`font-serif text-base sm:text-lg font-bold ${
                          isStepCompleted ? 'line-through text-[#6C8C6C]' : 'text-[#1E352A]'
                        }`}>
                          {stepItem.title}
                        </h3>
                      </div>

                      {/* Quick timer for this step if time is specified */}
                      {stepItem.timeMinutes && (
                        <button
                          onClick={() => setStepTimer(stepItem.timeMinutes)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FAF8F2] text-[#4A7C59] border border-[#CDDCCD] hover:bg-[#EBF4EC]"
                        >
                          <Clock className="w-3 h-3" />
                          <span>{stepItem.timeMinutes} mnt</span>
                        </button>
                      )}
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed pl-10 ${
                      isStepCompleted ? 'text-[#6C8C6C]' : 'text-[#425842]'
                    }`}>
                      {stepItem.instruction}
                    </p>

                    <div className="pl-10 pt-3">
                      <button
                        onClick={() => toggleStep(stepItem.step)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          isStepCompleted
                            ? 'bg-[#264436] text-white'
                            : 'bg-[#FAF8F2] text-[#2F402F] border border-[#DDE7DC] hover:bg-[#EBF4EC]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{isStepCompleted ? 'Langkah Selesai' : 'Tandai Selesai'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Celebration Card */}
            <div className="p-4 rounded-2xl bg-[#EBF1EA] border border-[#CDDCCD] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#264436] flex items-center justify-center text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#A8C5A8]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E352A]">Masakan Selesai?</h4>
                  <p className="text-[11px] text-[#547154]">Simpan resep ini agar mudah ditemukan kembali nanti!</p>
                </div>
              </div>

              <button
                onClick={() => onToggleBookmark(recipe)}
                className="px-4 py-2 rounded-full bg-[#264436] text-white text-xs font-bold hover:bg-[#1E352A] transition-all"
              >
                {isBookmarked ? 'Sudah Tersimpan' : 'Simpan Resep'}
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

