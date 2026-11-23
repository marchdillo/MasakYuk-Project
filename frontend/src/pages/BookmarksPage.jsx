import React from 'react';
import { Heart, Utensils, ArrowRight, Sparkles, Trash2 } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';

export default function BookmarksPage({ 
  bookmarks = [], 
  onSelectRecipe, 
  onToggleBookmark,
  onNavigate 
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5EDE5]">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-[#4A7C59]">
            Koleksi Pribadi
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E352A] mt-1">
            Resep Tersimpan ({bookmarks.length})
          </h1>
        </div>

        <button
          onClick={() => onNavigate('recipes')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#264436] text-white text-xs font-bold hover:bg-[#1E352A] transition-all self-start sm:self-auto"
        >
          <Utensils className="w-4 h-4 text-[#A8C5A8]" />
          <span>Tambah Resep Lain</span>
        </button>
      </div>

      {/* Bookmarked Grid */}
      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookmarks.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelectRecipe}
              isBookmarked={true}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#FAF8F2] rounded-3xl border border-[#DDE7DC] p-8 space-y-4">
          <Heart className="w-14 h-14 text-[#CDDCCD] mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-[#1E352A]">
            Belum Ada Resep Tersimpan
          </h3>
          <p className="text-sm text-[#547154] max-w-md mx-auto leading-relaxed">
            Klik ikon hati pada resep favoritmu atau simpan resep kreasi dari MasakYuk AI agar bisa dibuka kembali kapan saja saat memasak.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onNavigate('recipes')}
              className="px-6 py-2.5 rounded-full bg-[#264436] text-white text-xs font-bold hover:bg-[#1E352A] transition-all"
            >
              Jelajahi Resep Sekarang
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

