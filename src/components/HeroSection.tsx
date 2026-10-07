import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Cpu } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/brandData';

interface HeroSectionProps {
  onExploreCollection: () => void;
  onOpenConfigurator: () => void;
  onOpenStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollection,
  onOpenConfigurator,
  onOpenStory,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0b0c0e] border-b border-[#1e2229]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#1c212a]/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
        
        {/* Brand Kicker / Status */}
        <div className="flex items-center gap-3 text-xs text-neutral-400 mb-6 font-code">
          <span className="text-[#d4af37] font-semibold tracking-widest uppercase">
            Maison Fondée 2024
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Neuchâtel & Geneva, Switzerland</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300">Monolith Series I</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Manifesto & Brand Vision */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] text-balance">
              {BRAND_IDENTITY.primarySlogan}
            </h1>

            <p className="font-display text-xl sm:text-2xl text-[#d4af37] font-light italic">
              «{BRAND_IDENTITY.sloganRU}»
            </p>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              Современный швейцарский часовой дом, возрождающий силу архитектурного минимализма. 
              Корпуса из монолитного титана Grade 5, мануфактурная ручная отделка калибра и 
              криптографическая сапфировая аутентификация в ценовом диапазоне честной роскоши.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCollection}
                className="px-6 py-3.5 bg-[#d4af37] hover:bg-[#e2c158] text-[#0b0c0e] font-semibold text-xs tracking-widest uppercase transition-colors flex items-center gap-2 group"
              >
                <span>Изучить Первую Коллекцию</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConfigurator}
                className="px-6 py-3.5 border border-[#262930] hover:border-[#d4af37] text-white hover:text-[#d4af37] font-medium text-xs tracking-widest uppercase transition-colors bg-[#121418]"
              >
                Сконфигурировать Модель
              </button>

              <button
                onClick={onOpenStory}
                className="px-4 py-3.5 text-xs text-neutral-400 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Манифест марки
              </button>
            </div>

            {/* Spec Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1e2229]">
              <div>
                <div className="font-code text-xs text-neutral-400">МАТЕРИАЛ</div>
                <div className="text-sm font-semibold text-white mt-1">Титан Grade 5</div>
                <div className="text-[11px] text-neutral-500">1200 HV Ceramic Shield</div>
              </div>

              <div>
                <div className="font-code text-xs text-neutral-400">КАЛИБР</div>
                <div className="text-sm font-semibold text-white mt-1">VN-01 Swiss Auto</div>
                <div className="text-[11px] text-neutral-500">4 Гц · 56ч хода</div>
              </div>

              <div>
                <div className="font-code text-xs text-neutral-400">БЕЗОПАСНОСТЬ</div>
                <div className="text-sm font-semibold text-white mt-1">NFC Sapphire Key</div>
                <div className="text-[11px] text-neutral-500">10 лет гарантии</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#262930] bg-[#121418] shadow-2xl group">
              <img
                src="/src/assets/images/hero_vanden_watch_1791365011652.jpg"
                alt="VANDEN Monolith Horlogerie"
                className="w-full h-full object-cover aspect-[16/10] sm:aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-transparent opacity-60" />

              {/* In-image caption / metadata */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div className="backdrop-blur-md bg-black/60 px-3 py-1.5 border border-white/10">
                  <span className="font-display tracking-widest text-[#d4af37]">VANDEN MONOLITH</span>
                  <span className="text-neutral-400 ml-2">· Calibre VN-01</span>
                </div>
                <div className="backdrop-blur-md bg-black/60 px-3 py-1.5 border border-white/10 font-code text-neutral-300 hidden sm:block">
                  NEUCHÂTEL ATELIER
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-5 -left-4 sm:left-6 backdrop-blur-md bg-[#121418]/95 border border-[#262930] p-3 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1c222b] flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="text-white font-medium">Бескомпромиссная D2C модель</div>
                <div className="text-neutral-400 text-[11px]">Без 500% наценок ритейлеров</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
