import React from 'react';
import { BRAND_IDENTITY } from '../data/brandData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenStory: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenStory }) => {
  return (
    <footer className="bg-[#08090b] border-t border-[#1a1d23] text-neutral-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#16181d]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-display text-2xl tracking-[0.3em] font-semibold text-white">
              VANDEN
            </div>
            <div className="text-[11px] font-code text-[#d4af37] tracking-widest uppercase">
              {BRAND_IDENTITY.legalName}
            </div>
            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              Независимый часовой дом, соединяющий швейцарские традиции ручной отделки калибров, 
              монолитный титан Grade 5 и эстетику архитектурного минимализма.
            </p>
            <div className="text-[11px] text-neutral-500 font-code">
              Atelier: Rue des Horlogers 14, 2000 Neuchâtel, Switzerland
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-code text-[11px] text-white uppercase tracking-wider block">
              КОЛЛЕКЦИЯ
            </span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActiveTab('collection')} className="hover:text-white transition-colors">
                  Monolith 40 Titanium
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('collection')} className="hover:text-white transition-colors">
                  Obsidian GMT True Time
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('collection')} className="hover:text-white transition-colors">
                  Celestial 38 Gold
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('collection')} className="hover:text-white transition-colors">
                  Chrono-Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-code text-[11px] text-white uppercase tracking-wider block">
              ДОМ И СТРАТЕГИЯ
            </span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActiveTab('philosophy')} className="hover:text-white transition-colors">
                  Философия и УТП
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('identity')} className="hover:text-white transition-colors">
                  Фирменный стиль и Логотип
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('packaging')} className="hover:text-white transition-colors">
                  Алюминиевый ковчег
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('marketing')} className="hover:text-white transition-colors">
                  Маркетинг и Запуск
                </button>
              </li>
              <li>
                <button onClick={onOpenStory} className="hover:text-white transition-colors text-[#d4af37]">
                  История мануфактуры
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Legal & Standards */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-code text-[11px] text-white uppercase tracking-wider block">
              ГАРАНТИИ
            </span>
            <div className="space-y-1.5 text-neutral-400 text-[11px]">
              <div>10 лет гарантии мануфактуры</div>
              <div>NFC Cryptographic Soul</div>
              <div>Швейцарский сертификат хода</div>
              <div>Бесплатная доставка с охраной</div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} VANDEN HORLOGERIE S.A. Все права защищены. Silence In Motion.
          </div>
          <div className="flex items-center gap-4 font-code">
            <span>SWISS CRAFT</span>
            <span>·</span>
            <span>GRADE 5 TITANIUM</span>
            <span>·</span>
            <span>D2C LUXURY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
