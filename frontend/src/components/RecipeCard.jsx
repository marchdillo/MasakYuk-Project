import React from 'react';
import { Clock, Users, Flame, Star, Heart, ArrowRight } from 'lucide-react';

export default function RecipeCard({ 
  recipe, 
  onSelect, 
  isBookmarked = false, 
  onToggleBookmark 
}) {
  return (
    <div 
      className="group bg-[#FAF8F2] rounded-3xl p-3 sm:p-4 border border-[#E5EDE5] hover:border-[#CDDCCD] shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#EBF4EC]">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F2]/90 backdrop-blur-md text-[#264436] shadow-sm">
              {recipe.category}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(recipe);
            }}
            aria-label={isBookmarked ? "Hapus dari favorit" : "Simpan ke favorit"}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FAF8F2]/90 backdrop-blur-md flex items-center justify-center text-[#2F402F] hover:scale-110 active:scale-95 transition-all shadow-sm"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isBookmarked 
                  ? 'fill-[#E75A47] text-[#E75A47]' 
                  : 'text-[#2F402F] hover:text-[#E75A47]'
              }`} 
            />
          </button>

          {/* Bottom Overlay Info on Image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
              <Star className="w-3.5 h-3.5 text-[#F5A623] fill-[#F5A623]" />
              <span>{recipe.rating}</span>
              <span className="text-white/70">({recipe.reviewsCount || 40})</span>
            </div>

            <div className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
              {recipe.difficulty}
            </div>
          </div>
        </div>

        {/* Content Info */}
        <div className="mt-3.5 px-1 space-y-2">
          <h3 
            onClick={() => onSelect(recipe)}
            className="font-serif text-lg sm:text-xl font-bold text-[#1E352A] group-hover:text-[#264436] transition-colors line-clamp-1 cursor-pointer"
          >
            {recipe.title}
          </h3>

          <p className="text-xs text-[#547154] line-clamp-2 leading-relaxed">
            {recipe.subtitle || recipe.description}
          </p>
        </div>
      </div>

      {/* Meta Footer & Action */}
      <div className="mt-4 pt-3 border-t border-[#E5EDE5] px-1 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-[#547154] font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#6C8C6C]" />
            {recipe.cookTime || recipe.waktu || '20 mnt'}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#6C8C6C]" />
            {recipe.servings || recipe.porsi || '2 porsi'}
          </span>
        </div>

        <button
          onClick={() => onSelect(recipe)}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#264436] hover:text-[#1E352A] transition-colors group/btn"
        >
          <span>Detail</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

