import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Search,
  Sparkles,
  Share2
} from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';

export default function ArticlesPage({ onNavigate, onShowToast }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeArticle, setActiveArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Penyimpanan Bahan', 'Tips Memasak', 'Info Kuliner'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchCat = selectedCategory === 'Semua' || art.category === selectedCategory;
    const matchSearch = searchQuery.trim() === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleShare = (art) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (onShowToast) onShowToast('Tautan artikel disalin!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-widest uppercase text-[#4A7C59]">
          Edukasi & Trik Dapur
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E352A]">
          Artikel & Tips Memasak
        </h1>
        <p className="text-sm sm:text-base text-[#547154] leading-relaxed">
          Pelajari teknik penyimpanan bahan agar tahan berminggu-minggu, rahasia menumis sayur ala restoran, dan panduan bumbu dasar Nusantara.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#FAF8F2] rounded-3xl p-4 sm:p-6 border border-[#DDE7DC] shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#264436] text-white shadow-sm'
                  : 'bg-white text-[#425842] border border-[#DDE7DC] hover:border-[#CDDCCD]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6C8C6C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari tips atau artikel..."
            className="w-full pl-10 pr-8 py-2 rounded-xl bg-white border border-[#CDDCCD] text-xs sm:text-sm text-[#1E352A] placeholder:text-[#8FAA8F] focus:outline-none focus:border-[#264436]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6C8C6C] hover:text-[#1E352A]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => setActiveArticle(art)}
            className="bg-[#FAF8F2] rounded-3xl p-6 border border-[#E5EDE5] hover:border-[#CDDCCD] shadow-soft hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#EBF4EC] relative mb-4">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F2]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#264436]">
                  {art.category}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-[#6C8C6C]">
                  <span>{art.author}</span>
                  <span>•</span>
                  <span>{art.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E352A] group-hover:text-[#4A7C59] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#547154] leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5EDE5] flex items-center justify-between text-xs font-bold text-[#264436]">
              <span>Baca Artikel Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF8F2] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#CDDCCD] shadow-float p-6 sm:p-8 space-y-6 animate-scaleIn"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E5EDE5]">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EBF4EC] text-[#264436]">
                {activeArticle.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="p-2 rounded-full hover:bg-[#EBF4EC] text-[#2F402F]"
                  title="Bagikan"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full hover:bg-[#EBF4EC] text-[#2F402F]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#6C8C6C]">
                <span>Ditulis oleh: <strong>{activeArticle.author}</strong></span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E352A]">
                {activeArticle.title}
              </h2>

              <div className="aspect-[16/8] rounded-2xl overflow-hidden bg-[#EBF4EC] my-4">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-sm max-w-none text-[#425842] leading-relaxed space-y-4 font-normal">
                {activeArticle.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="font-serif text-lg font-bold text-[#1E352A] pt-2">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={pIdx} className="text-sm text-[#425842] leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Highlights Tips Box */}
              {activeArticle.tips && activeArticle.tips.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#EBF1EA] border border-[#CDDCCD] space-y-3 mt-6">
                  <h4 className="font-serif text-base font-bold text-[#1E352A] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
                    <span>Poin Kunci Tips:</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#264436]">
                    {activeArticle.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-[#4A7C59] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Bottom Action */}
            <div className="pt-4 border-t border-[#E5EDE5] flex items-center justify-between">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#264436] text-white text-xs font-bold hover:bg-[#1E352A]"
              >
                Tutup Bacaan
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

