import React, { useState } from 'react';
import { COLOR_PALETTE, TYPOGRAPHY_SYSTEM } from '../data/brandData';
import { Copy, Check, Eye, Maximize } from 'lucide-react';

export const BrandIdentityVisuals: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="identity" className="py-20 bg-[#0b0c0e] border-t border-[#1e2229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-code text-[#d4af37] uppercase tracking-widest mb-2">
            Визуальная ДНК и дизайн-система
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
            Логотип, Палитра и Типографика
          </h2>
          <p className="text-neutral-400 text-base mt-3 leading-relaxed">
            Визуальная идентификация дома VANDEN построена на принципах сакральной геометрии, 
            монументального швейцарского конструктивизма и строгой анти-декоративной дисциплины.
          </p>
        </div>

        {/* 1. Logo & Monogram Study */}
        <div className="bg-[#121418] border border-[#262930] p-8 lg:p-12 mb-16 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Logo Emblem Display & Grid */}
            <div className="lg:col-span-6 bg-[#08090b] border border-[#1e2229] p-8 flex flex-col items-center justify-center relative rounded-sm min-h-[360px]">
              {/* Construction Grid background */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px), linear-gradient(to right, #262930 1px, transparent 1px), linear-gradient(to bottom, #262930 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* The VANDEN Vector Monogram Badge */}
              <div className="relative z-10 flex flex-col items-center">
                <svg
                  viewBox="0 0 160 160"
                  className="w-32 h-32 text-white mb-6 select-none"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="74"
                    fill="none"
                    stroke="#262930"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                  
                  {/* Monogram V-N Architectural Geometry */}
                  <polygon
                    points="80,45 106,108 92,108 80,78 68,108 54,108"
                    fill="#ffffff"
                  />
                  
                  {/* Chevron balance bridge */}
                  <polygon
                    points="80,32 86,42 74,42"
                    fill="#d4af37"
                  />

                  {/* Axis crosshairs */}
                  <line x1="80" y1="4" x2="80" y2="156" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="4" y1="80" x2="156" y2="80" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.4" />
                </svg>

                {/* Primary Brand Wordmark */}
                <span className="font-display text-3xl tracking-[0.35em] text-white font-bold ml-2">
                  VANDEN
                </span>
                <span className="font-code text-[10px] tracking-[0.45em] text-[#d4af37] mt-1 uppercase">
                  HORLOGERIE SUISSE
                </span>
              </div>

              <div className="absolute bottom-3 left-4 text-[10px] font-code text-neutral-500">
                PROPORTIONS: 1.618 GOLDEN RATIO · 45° APEX
              </div>
            </div>

            {/* Logo Anatomy & Usage Guidelines */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-code text-[#d4af37] uppercase tracking-wider block mb-1">
                  АНАТОМИЯ ЗНАКА
                </span>
                <h3 className="font-display text-2xl text-white">
                  Архитектурный шеврон «V»
                </h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Монограмма представляет собой синтез балансового моста швейцарского механизма и монументального архитектурного треугольника. Верхний золотой клин символизирует полдень — наивысшую точку солнечного восхождения и абсолютной точности.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-code">
                <div className="p-3 bg-[#0b0c0e] border border-[#1e2229]">
                  <span className="text-neutral-500 block text-[10px]">ЗАВОДНАЯ ГОЛОВКА</span>
                  <span className="text-white mt-1 block">Гравировка знака V 0.8мм</span>
                </div>
                <div className="p-3 bg-[#0b0c0e] border border-[#1e2229]">
                  <span className="text-neutral-500 block text-[10px]">РОТОР АВТОПОДЗАВОДА</span>
                  <span className="text-white mt-1 block">Скелетонизированный V</span>
                </div>
                <div className="p-3 bg-[#0b0c0e] border border-[#1e2229]">
                  <span className="text-neutral-500 block text-[10px]">ЗАСТЕЖКА БРАСЛЕТА</span>
                  <span className="text-white mt-1 block">Лазерная микрогравировка</span>
                </div>
                <div className="p-3 bg-[#0b0c0e] border border-[#1e2229]">
                  <span className="text-neutral-500 block text-[10px]">САПФИРОВЫЙ КЛЮЧ</span>
                  <span className="text-white mt-1 block">NFC антенна в форме лого</span>
                </div>
              </div>

              <div className="p-4 bg-[#0e1116] border-l-2 border-[#d4af37] text-xs text-neutral-300">
                <strong className="text-white block mb-0.5">Правило охранной зоны:</strong>
                Минимальное свободное пространство вокруг логотипа равно половине высоты буквы «V». Запрещено искажать пропорции, наносить обводку или использовать на цветных кричащих фонах.
              </div>
            </div>

          </div>
        </div>

        {/* 2. Color Palette with 60-30-10 Rule */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-code text-[#d4af37] uppercase tracking-wider block mb-1">
                КОЛОРИСТИЧЕСКИЙ КОДЕКС
              </span>
              <h3 className="font-display text-2xl text-white">
                Палитра благородных материалов (60 · 30 · 10)
              </h3>
            </div>
            <div className="text-xs font-code text-neutral-400">
              Нажмите на плашку цвета для копирования HEX
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COLOR_PALETTE.map((c) => (
              <div
                key={c.name}
                onClick={() => copyToClipboard(c.hex)}
                className="bg-[#121418] border border-[#262930] hover:border-[#d4af37] p-4 rounded-sm cursor-pointer transition-all group"
              >
                {/* Color Swatch */}
                <div
                  className="w-full h-24 rounded-sm mb-3 border border-white/10 relative overflow-hidden"
                  style={{ backgroundColor: c.hex }}
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-code">
                    {copiedHex === c.hex ? (
                      <span className="flex items-center gap-1 text-emerald-300">
                        <Check className="w-3.5 h-3.5" /> Скопировано
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> Скопировать
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  {c.name}
                </div>
                <div className="font-code text-[11px] text-neutral-400 mt-0.5">
                  {c.hex} · RGB({c.rgb})
                </div>
                <div className="text-[10px] text-[#d4af37] font-code mt-1">
                  {c.role}
                </div>
                <p className="text-[11px] text-neutral-400 mt-2 leading-snug">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Typography Hierarchy System */}
        <div className="bg-[#121418] border border-[#262930] p-8 lg:p-12 rounded-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-code text-[#d4af37] uppercase tracking-wider block mb-1">
              ТИПОГРАФИЧЕСКАЯ ИЕРАРХИЯ
            </span>
            <h3 className="font-display text-2xl text-white">
              Правило 2+1: Римская антиква, швейцарский гротеск и калибровочный моноширинный
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Display Font */}
            <div className="space-y-3 p-5 bg-[#0b0c0e] border border-[#1e2229]">
              <span className="text-[11px] font-code text-[#d4af37]">DISPLAY / BRAND HEADINGS</span>
              <h4 className="font-display text-2xl text-white tracking-wider">
                {TYPOGRAPHY_SYSTEM.display.font}
              </h4>
              <div className="text-xs text-neutral-400 font-display">
                Aa Bb Cc Dd Ee Ff Gg Hh 0123456789
              </div>
              <p className="text-xs text-neutral-400 pt-2 border-t border-[#1e2229]">
                {TYPOGRAPHY_SYSTEM.display.character}
              </p>
            </div>

            {/* Body Font */}
            <div className="space-y-3 p-5 bg-[#0b0c0e] border border-[#1e2229]">
              <span className="text-[11px] font-code text-[#d4af37]">BODY / PROSE & EDITORIAL</span>
              <h4 className="font-body text-xl font-medium text-white">
                {TYPOGRAPHY_SYSTEM.body.font}
              </h4>
              <div className="text-xs text-neutral-400 font-body">
                Аа Бб Вв Гг Дд Ее Жж 0123456789
              </div>
              <p className="text-xs text-neutral-400 pt-2 border-t border-[#1e2229]">
                {TYPOGRAPHY_SYSTEM.body.character}
              </p>
            </div>

            {/* Mono Font */}
            <div className="space-y-3 p-5 bg-[#0b0c0e] border border-[#1e2229]">
              <span className="text-[11px] font-code text-[#d4af37]">CALIBER & CHRONOMETRY DATA</span>
              <h4 className="font-code text-lg text-white font-bold">
                {TYPOGRAPHY_SYSTEM.mono.font}
              </h4>
              <div className="text-xs text-neutral-400 font-code tabular-nums">
                VN-01 · 28,800 VPH · 56H RESERVE
              </div>
              <p className="text-xs text-neutral-400 pt-2 border-t border-[#1e2229]">
                {TYPOGRAPHY_SYSTEM.mono.character}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
