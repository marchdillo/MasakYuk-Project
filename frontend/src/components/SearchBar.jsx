import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Cari masakan atau bahan (misal: ayam, nasi, telur, kangkung)...",
  suggestions = ["Ayam", "Telur", "Kangkung", "Nasi Goreng", "Sayur Asem", "Sarapan", "Diet"],
  onSelectSuggestion,
  onOpenAi
}) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <div className="absolute left-4.5 pointer-events-none text-[#6C8C6C]">
          <Search className="w-5 h-5" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-full bg-[#FAF8F2] border-2 border-[#CDDCCD] text-[#1E352A] placeholder:text-[#8FAA8F] text-sm sm:text-base font-medium shadow-soft focus:outline-none focus:border-[#264436] focus:ring-4 focus:ring-[#CDDCCD]/30 transition-all"
        />

        {value && (
          <button
            onClick={onClear}
            className="absolute right-4 p-1.5 rounded-full text-[#6C8C6C] hover:text-[#1E352A] hover:bg-[#EBF4EC] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggestion Chips */}
      <div className="flex items-center flex-wrap gap-2 text-xs text-[#547154] px-1">
        <span className="font-semibold text-[#2F402F]">Pencarian Cepat:</span>
        {suggestions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelectSuggestion ? onSelectSuggestion(item) : onChange(item)}
            className="px-3 py-1 rounded-full bg-[#EBF4EC] hover:bg-[#CDDCCD] text-[#264436] font-medium transition-all hover:scale-105 active:scale-95"
          >
            {item}
          </button>
        ))}

        {onOpenAi && (
          <button
            onClick={onOpenAi}
            className="ml-auto inline-flex items-center gap-1 text-[#264436] font-bold hover:underline"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4A7C59]" />
            <span>Punya sisa bahan kulkas? Coba AI</span>
          </button>
        )}
      </div>
    </div>
  );
}

