import React from 'react';
import { SlidersHorizontal, FileText } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currency: 'USD' | 'EUR' | 'RUB';
  setCurrency: (c: 'USD' | 'EUR' | 'RUB') => void;
  onOpenStory: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  onOpenStory,
}) => {
  const navItems = [
    { id: 'collection', label: 'Коллекция I' },
    { id: 'philosophy', label: 'Концепция и УТП' },
    { id: 'identity', label: 'Айдентика и Логотип' },
    { id: 'packaging', label: 'Упаковка' },
    { id: 'configurator', label: 'Конфигуратор' },
    { id: 'marketing', label: 'Маркетинг & Запуск' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0c0e]/90 backdrop-blur-md border-b border-[#1e2229] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('collection')}
          className="text-left group focus:outline-none"
        >
          <span className="font-display text-2xl tracking-[0.3em] font-semibold text-white group-hover:text-[#d4af37] transition-colors">
            VANDEN
          </span>
          <span className="block text-[9px] tracking-[0.4em] text-neutral-400 font-body -mt-0.5 uppercase">
            Horlogerie Suisse
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-xs uppercase tracking-[0.15em] transition-colors relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#d4af37]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Currency Toggle */}
          <div className="flex items-center border border-[#262930] rounded-sm bg-[#121418] p-0.5 text-[11px] font-code">
            {(['USD', 'EUR', 'RUB'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-2 py-0.5 transition-colors ${
                  currency === c
                    ? 'bg-[#262930] text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {c === 'USD' ? '$' : c === 'EUR' ? '€' : '₽'}
              </button>
            ))}
          </div>

          {/* Read Brand Story Button */}
          <button
            onClick={onOpenStory}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 border border-[#262930] hover:border-[#d4af37]/60 hover:text-white transition-colors bg-[#121418]"
          >
            <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden sm:inline">История бренда</span>
          </button>

          {/* Configurator Shortcut */}
          <button
            onClick={() => setActiveTab('configurator')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0b0c0e] bg-[#d4af37] hover:bg-[#e2c158] transition-colors whitespace-nowrap"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Собрать часы</span>
          </button>
        </div>

      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-[#1e2229] gap-4 scrollbar-none text-xs">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap uppercase tracking-wider py-1 ${
              activeTab === item.id
                ? 'text-[#d4af37] border-b border-[#d4af37] font-semibold'
                : 'text-neutral-400'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
