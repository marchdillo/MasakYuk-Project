import React, { useState } from 'react';
import { 
  ChefHat, 
  Sparkles, 
  Bookmark, 
  Menu, 
  X, 
  UtensilsCrossed, 
  BookOpen, 
  Home, 
  Compass, 
  Search,
  Heart
} from 'lucide-react';

export default function Navbar({ 
  currentPage, 
  onNavigate, 
  favoritesCount = 0,
  onOpenSearch
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'recipes', label: 'Resep & Kategori', icon: UtensilsCrossed },
    { id: 'ai', label: 'MasakYuk AI', icon: Sparkles, highlight: true },
    { id: 'articles', label: 'Tips & Artikel', icon: BookOpen },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#E5EDE5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand matching design */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#264436] flex items-center justify-center text-white shadow-md shadow-[#264436]/20 group-hover:scale-105 transition-transform">
              <ChefHat className="w-6 h-6 text-[#EBF4EC]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1E352A] group-hover:text-[#264436] transition-colors">
                Masak<span className="text-[#4A7C59]">Yuk</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#6C8C6C]">
                Inspirasi Masak Harian
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-[#264436] text-white shadow-sm'
                      : 'text-[#2F402F] hover:bg-[#EBF4EC] hover:text-[#1E352A]'
                  } ${item.highlight && !isActive ? 'text-[#264436] font-semibold' : ''}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#AFC6AF]' : item.highlight ? 'text-[#4A7C59]' : 'text-[#6C8C6C]'}`} />
                  <span>{item.label}</span>
                  {item.highlight && !isActive && (
                    <span className="text-[10px] bg-[#EBF4EC] text-[#264436] font-bold px-1.5 py-0.5 rounded-full border border-[#CDDCCD]">
                      AI
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Cari Resep"
                className="p-2.5 rounded-full text-[#2F402F] hover:bg-[#EBF4EC] hover:text-[#1E352A] transition-colors border border-transparent hover:border-[#CDDCCD]"
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Saved / Favorites Button */}
            <button
              onClick={() => handleNavClick('bookmarks')}
              aria-label="Resep Tersimpan"
              className={`relative p-2.5 rounded-full transition-all ${
                currentPage === 'bookmarks'
                  ? 'bg-[#264436] text-white'
                  : 'text-[#2F402F] hover:bg-[#EBF4EC] border border-[#DDE7DC]'
              }`}
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-[#E75A47] text-[#E75A47]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E75A47] text-white text-[11px] font-bold rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Primary CTA: Coba MasakYuk AI */}
            <button
              onClick={() => handleNavClick('ai')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#264436] text-[#FAF8F2] text-sm font-semibold shadow-md shadow-[#264436]/15 hover:bg-[#1E352A] hover:shadow-lg transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#A8C5A8]" />
              <span>Coba AI</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-xl text-[#2F402F] hover:bg-[#EBF4EC] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F2] border-b border-[#DDE7DC] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                  isActive 
                    ? 'bg-[#264436] text-white' 
                    : 'text-[#2F402F] hover:bg-[#EBF4EC]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#A8C5A8]' : 'text-[#6C8C6C]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.highlight && (
                  <span className="text-xs bg-[#EBF4EC] text-[#264436] font-bold px-2 py-0.5 rounded-full border border-[#CDDCCD]">
                    Cerdas
                  </span>
                )}
              </button>
            );
          })}

          <button
            onClick={() => handleNavClick('bookmarks')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
              currentPage === 'bookmarks' ? 'bg-[#264436] text-white' : 'text-[#2F402F] hover:bg-[#EBF4EC]'
            }`}
          >
            <div className="flex items-center gap-3">
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-[#E75A47] text-[#E75A47]' : 'text-[#6C8C6C]'}`} />
              <span>Resep Tersimpan</span>
            </div>
            {favoritesCount > 0 && (
              <span className="text-xs bg-[#E75A47] text-white font-bold px-2 py-0.5 rounded-full">
                {favoritesCount} resep
              </span>
            )}
          </button>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('ai')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#264436] text-white font-semibold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#A8C5A8]" />
              <span>Racik Menu dengan MasakYuk AI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

