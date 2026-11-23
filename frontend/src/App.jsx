import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AiPage from './pages/AiPage';
import ArticlesPage from './pages/ArticlesPage';
import BookmarksPage from './pages/BookmarksPage';
import { RECIPES_DATA } from './data/recipes';
import { Search, X, Sparkles, Utensils } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [modalSearchQuery, setModalSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Persistent bookmarks from localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('masakyuk_bookmarks');
      return saved ? JSON.parse(saved) : [RECIPES_DATA[0], RECIPES_DATA[1]];
    } catch {
      return [RECIPES_DATA[0], RECIPES_DATA[1]];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('masakyuk_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [bookmarks]);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('recipe/')) {
        const idOrSlug = hash.replace('recipe/', '');
        const found = RECIPES_DATA.find(r => r.id === idOrSlug || r.slug === idOrSlug);
        if (found) {
          setSelectedRecipe(found);
          setCurrentPage('detail');
          return;
        }
      }
      if (['home', 'recipes', 'ai', 'articles', 'bookmarks'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (page, options = {}) => {
    if (options.category) {
      setCategoryFilter(options.category);
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage('detail');
    if (recipe.slug) {
      window.location.hash = `recipe/${recipe.slug}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmark = (recipe) => {
    const exists = bookmarks.some(b => b.id === recipe.id);
    if (exists) {
      setBookmarks(bookmarks.filter(b => b.id !== recipe.id));
      showToast(`Resep "${recipe.title || recipe.nama}" dihapus dari favorit.`);
    } else {
      setBookmarks([...bookmarks, recipe]);
      showToast(`Resep "${recipe.title || recipe.nama}" ditambahkan ke favorit!`);
    }
  };

  // Quick modal search filter
  const modalSearchResults = RECIPES_DATA.filter(r => {
    if (!modalSearchQuery.trim()) return false;
    const q = modalSearchQuery.toLowerCase();
    return r.title.toLowerCase().includes(q) ||
      (r.subtitle || '').toLowerCase().includes(q) ||
      r.ingredients.some(ing => ing.name.toLowerCase().includes(q));
  }).slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#1E352A] selection:bg-[#CDDCCD] selection:text-[#1E352A]">
      
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#264436] text-[#FAF8F2] px-5 py-3 rounded-2xl shadow-float border border-[#4A7C59] flex items-center gap-2.5 text-xs sm:text-sm font-semibold animate-slideUp">
          <Sparkles className="w-4 h-4 text-[#A8C5A8]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        favoritesCount={bookmarks.length}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Pages Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectRecipe={handleSelectRecipe}
            bookmarks={bookmarks}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {currentPage === 'recipes' && (
          <RecipesPage
            onSelectRecipe={handleSelectRecipe}
            bookmarks={bookmarks}
            onToggleBookmark={toggleBookmark}
            onNavigate={handleNavigate}
            initialCategory={categoryFilter}
          />
        )}

        {currentPage === 'detail' && (
          <RecipeDetailPage
            recipe={selectedRecipe || RECIPES_DATA[0]}
            onBack={() => handleNavigate('recipes')}
            isBookmarked={bookmarks.some(b => b.id === (selectedRecipe?.id || RECIPES_DATA[0].id))}
            onToggleBookmark={toggleBookmark}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'ai' && (
          <AiPage
            onSelectRecipe={handleSelectRecipe}
            onSaveCustomRecipe={(r) => {
              setBookmarks(prev => [r, ...prev]);
            }}
            onShowToast={showToast}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'articles' && (
          <ArticlesPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'bookmarks' && (
          <BookmarksPage
            bookmarks={bookmarks}
            onSelectRecipe={handleSelectRecipe}
            onToggleBookmark={toggleBookmark}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Quick Search Modal */}
      {searchModalOpen && (
        <div 
          onClick={() => setSearchModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF8F2] rounded-3xl max-w-2xl w-full border border-[#CDDCCD] shadow-float p-5 sm:p-6 space-y-4 animate-scaleIn"
          >
            <div className="flex items-center gap-3 border-b border-[#E5EDE5] pb-3">
              <Search className="w-5 h-5 text-[#4A7C59]" />
              <input
                type="text"
                autoFocus
                value={modalSearchQuery}
                onChange={(e) => setModalSearchQuery(e.target.value)}
                placeholder="Ketik nama masakan atau bahan..."
                className="w-full bg-transparent outline-none text-base text-[#1E352A] placeholder:text-[#8FAA8F] font-medium"
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-full text-[#6C8C6C] hover:text-[#1E352A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results in Modal */}
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {modalSearchResults.length > 0 ? (
                modalSearchResults.map((rec) => (
                  <div
                    key={rec.id}
                    onClick={() => {
                      handleSelectRecipe(rec);
                      setSearchModalOpen(false);
                      setModalSearchQuery('');
                    }}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#EBF4EC] cursor-pointer transition-colors"
                  >
                    <img 
                      src={rec.image} 
                      alt={rec.title} 
                      className="w-12 h-12 rounded-xl object-cover" 
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#1E352A]">{rec.title}</h4>
                      <p className="text-xs text-[#547154] line-clamp-1">{rec.subtitle}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#4A7C59] bg-white px-2.5 py-1 rounded-full border border-[#CDDCCD]">
                      {rec.category}
                    </span>
                  </div>
                ))
              ) : modalSearchQuery.trim() ? (
                <div className="text-center py-8 text-xs text-[#6C8C6C]">
                  Tidak ada resep ditemukan untuk "{modalSearchQuery}".
                </div>
              ) : (
                <div className="text-xs text-[#547154] py-2">
                  <span className="font-semibold block mb-2">Pencarian Populer:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Nasi Goreng', 'Ayam Bakar', 'Tumis Kangkung', 'Sayur Asem', 'Omelet'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setModalSearchQuery(tag)}
                        className="px-3 py-1 rounded-full bg-[#EBF4EC] text-[#264436] font-medium hover:bg-[#CDDCCD]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[#E5EDE5] flex items-center justify-between text-xs text-[#6C8C6C]">
              <span>Tekan Esc atau klik di luar untuk menutup</span>
              <button
                onClick={() => {
                  setSearchModalOpen(false);
                  handleNavigate('ai');
                }}
                className="text-[#264436] font-bold hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#4A7C59]" />
                <span>Cari resep dengan AI</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

