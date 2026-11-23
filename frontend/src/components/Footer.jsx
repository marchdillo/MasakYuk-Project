import React from 'react';
import { ChefHat, Heart, Sparkles, UtensilsCrossed, ArrowUpRight, Github, Mail, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="relative bg-[#233023] text-[#FAF8F2] pt-16 pb-12 overflow-hidden mt-20">
      
      {/* Decorative Top Curve Accent */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#FAF8F2] to-transparent opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#3D4732]">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FAF8F2] flex items-center justify-center text-[#264436] shadow-md">
                <ChefHat className="w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F2]">
                Masak<span className="text-[#A8C5A8]">Yuk</span>
              </span>
            </div>

            <p className="text-sm text-[#CDDCCD] leading-relaxed max-w-sm">
              Platform inspirasi memasak harian keluarga Indonesia. Temukan ratusan resep lezat, tips kuliner teruji, dan racik menu cerdas otomatis dari isi kulkasmu bersama MasakYuk AI.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2F402F] text-xs text-[#AFC6AF] border border-[#425842]">
                <Sparkles className="w-3.5 h-3.5 text-[#A8C5A8]" />
                Didukung Google Gemini AI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2F402F] text-xs text-[#AFC6AF] border border-[#425842]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A8C5A8]" />
                100% Resep Teruji
              </span>
            </div>
          </div>

          {/* Col 3: Jelajahi Resep */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#A8C5A8]">
              Jelajahi Resep
            </h4>
            <ul className="space-y-2 text-sm text-[#CDDCCD]">
              <li>
                <button onClick={() => onNavigate('recipes', { category: 'Sarapan' })} className="hover:text-white transition-colors">
                  Sarapan Cepat & Praktis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recipes', { category: 'Ayam & Daging' })} className="hover:text-white transition-colors">
                  Ayam & Olahan Daging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recipes', { category: 'Sayur & Sup' })} className="hover:text-white transition-colors">
                  Sayur Segar & Aneka Sup
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recipes', { category: 'Ikan & Seafood' })} className="hover:text-white transition-colors">
                  Ikan & Hidangan Laut
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recipes', { category: 'Menu Diet' })} className="hover:text-white transition-colors">
                  Menu Sehat & Rendah Kalori
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Fitur Unggulan */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#A8C5A8]">
              Fitur MasakYuk
            </h4>
            <ul className="space-y-2 text-sm text-[#CDDCCD]">
              <li>
                <button onClick={() => onNavigate('ai')} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>MasakYuk AI Generator</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#A8C5A8]" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors">
                  Tips Penyimpanan Bahan Kulkas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors">
                  Teknik Menumis & Bumbu Dapur
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bookmarks')} className="hover:text-white transition-colors">
                  Koleksi Resep Favorit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Sprint & Tim */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#A8C5A8]">
              Tim Pengembang
            </h4>
            <p className="text-xs text-[#AFC6AF] leading-relaxed">
              Dikerjakan sesuai roadmap Sprint Frontend:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Azizah (Frontend Lead)', 'Rafi\'i', 'Dillo', 'Deni', 'Bilkis'].map((name, i) => (
                <span key={i} className="text-[11px] bg-[#2F402F] text-[#CDDCCD] px-2 py-0.5 rounded-md border border-[#425842]">
                  {name}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <span className="text-xs text-[#AFC6AF] block">
                Framework: React + Vite + Tailwind
              </span>
              <span className="text-xs text-[#AFC6AF] block">
                Backend: Express + Google Gemini API
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AFC6AF]">
          <p>© {new Date().getFullYear()} MasakYuk. Semua hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#CDDCCD]">
              Dibuat dengan rasa cinta <Heart className="w-3.5 h-3.5 text-[#E75A47] fill-[#E75A47]" /> untuk pecinta kuliner
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

