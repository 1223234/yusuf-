import React, { useState } from 'react';
import { SlidersHorizontal, Check, RefreshCw, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { WatchDialSim } from './WatchDialSim';

interface WatchConfiguratorProps {
  currency: 'USD' | 'EUR' | 'RUB';
}

export const WatchConfigurator: React.FC<WatchConfiguratorProps> = ({ currency }) => {
  const [caseMaterial, setCaseMaterial] = useState<'titanium' | 'dlc' | 'roseGold'>('titanium');
  const [dialOption, setDialOption] = useState<'anthracite' | 'onyx' | 'aventurine'>('anthracite');
  const [strapOption, setStrapOption] = useState<'titanium-bracelet' | 'fkm-rubber' | 'horween-leather'>('titanium-bracelet');
  const [engravingText, setEngravingText] = useState('FOUNDER NO. 042');
  const [submitted, setSubmitted] = useState(false);

  // Pricing math
  const basePriceUSD = 2450;
  
  const caseAddonUSD = caseMaterial === 'titanium' ? 0 : caseMaterial === 'dlc' ? 300 : 1200;
  const dialAddonUSD = dialOption === 'anthracite' ? 0 : dialOption === 'onyx' ? 250 : 750;
  const strapAddonUSD = strapOption === 'titanium-bracelet' ? 0 : strapOption === 'fkm-rubber' ? -150 : 150;
  const engravingAddonUSD = engravingText.trim().length > 0 ? 120 : 0;

  const totalUSD = basePriceUSD + caseAddonUSD + dialAddonUSD + strapAddonUSD + engravingAddonUSD;
  const totalEUR = Math.round(totalUSD * 0.93);
  const totalRUB = Math.round(totalUSD * 93);

  const getPriceStr = () => {
    if (currency === 'USD') return `$${totalUSD.toLocaleString('en-US')}`;
    if (currency === 'EUR') return `€${totalEUR.toLocaleString('en-US')}`;
    return `${totalRUB.toLocaleString('ru-RU')} ₽`;
  };

  const currentModelId = 
    dialOption === 'aventurine' || caseMaterial === 'roseGold'
      ? 'celestial-gold'
      : caseMaterial === 'dlc' || dialOption === 'onyx'
      ? 'obsidian-gmt'
      : 'monolith-titanium';

  return (
    <section id="configurator" className="py-20 bg-[#0b0c0e] border-t border-[#1e2229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-code text-[#d4af37] uppercase tracking-widest mb-2">
            Ателье персонализации · Bespoke Horology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-normal">
            Конфигуратор VANDEN Bespoke
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Соберите ваш индивидуальный экземпляр: выберите сплав корпуса, текстуру циферблата, ремешок и нанесите персональную лазерную гравировку на вольфрамовый ротор автоподзавода.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Visual Simulation */}
          <div className="lg:col-span-6 bg-[#121418] border border-[#262930] p-8 flex flex-col items-center justify-center rounded-sm min-h-[500px]">
            <div className="text-xs font-code text-neutral-400 mb-6 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>ИНТЕРАКТИВНЫЙ РЕНДЕР КАСТОМИЗАЦИИ</span>
            </div>

            <WatchDialSim modelId={currentModelId} />

            {/* Live Config Summary */}
            <div className="mt-8 pt-6 border-t border-[#1e2229] w-full grid grid-cols-3 gap-2 text-center text-xs font-code">
              <div>
                <span className="text-neutral-500 block text-[10px]">КОРПУС</span>
                <span className="text-neutral-200">
                  {caseMaterial === 'titanium' ? 'Титан Gr.5' : caseMaterial === 'dlc' ? 'DLC Black' : '18K Золото'}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">ЦИФЕРБЛАТ</span>
                <span className="text-neutral-200">
                  {dialOption === 'anthracite' ? 'Антрацит' : dialOption === 'onyx' ? 'Оникс' : 'Авантюрин'}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">БРАСЛЕТ</span>
                <span className="text-neutral-200">
                  {strapOption === 'titanium-bracelet' ? 'Титановый' : strapOption === 'fkm-rubber' ? 'FKM Каучук' : 'Cordovan'}
                </span>
              </div>
            </div>

            {/* Rotor Engraving Preview */}
            {engravingText && (
              <div className="mt-4 p-2.5 bg-[#0b0c0e] border border-[#262930] text-center w-full">
                <span className="text-[10px] text-neutral-500 block font-code">
                  ГРАВИРОВКА НА РОТОРЕ АВТОПОДЗАВОДА (ИТАЛЬЯНСКИЙ КУРСИВ)
                </span>
                <span className="font-display italic text-[#d4af37] text-xs tracking-widest">
                  «{engravingText.toUpperCase()}»
                </span>
              </div>
            )}
          </div>

          {/* Right: Customization Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step 1: Case Material */}
            <div className="bg-[#121418] border border-[#262930] p-6 rounded-sm space-y-3">
              <label className="text-xs font-code text-neutral-300 uppercase tracking-wider block">
                01. Сплав корпуса и безеля
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'titanium', label: 'Титан Grade 5', sub: 'Сатинирование · +$0', icon: 'bg-[#8b909a]' },
                  { id: 'dlc', label: 'Obsidian DLC', sub: 'Алмазный углерод · +$300', icon: 'bg-[#15171c]' },
                  { id: 'roseGold', label: '18K Rose Gold', sub: 'Цельное золото · +$1,200', icon: 'bg-[#c59b6d]' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCaseMaterial(item.id as any)}
                    className={`p-3 text-left border transition-all ${
                      caseMaterial === item.id
                        ? 'border-[#d4af37] bg-[#1a1c22]'
                        : 'border-[#262930] hover:border-neutral-500 bg-[#0b0c0e]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${item.icon} border border-white/20`} />
                      <span className="text-xs font-semibold text-white">{item.label}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 block mt-1 font-code">
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dial */}
            <div className="bg-[#121418] border border-[#262930] p-6 rounded-sm space-y-3">
              <label className="text-xs font-code text-neutral-300 uppercase tracking-wider block">
                02. Материал и отделка циферблата
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'anthracite', label: 'Антрацит Sunray', sub: 'Швейцарское сатинирование · +$0' },
                  { id: 'onyx', label: 'Черный Оникс', sub: 'Полированный минерал · +$250' },
                  { id: 'aventurine', label: 'Синий Авантюрин', sub: 'Звездный кристалл · +$750' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDialOption(item.id as any)}
                    className={`p-3 text-left border transition-all ${
                      dialOption === item.id
                        ? 'border-[#d4af37] bg-[#1a1c22]'
                        : 'border-[#262930] hover:border-neutral-500 bg-[#0b0c0e]'
                    }`}
                  >
                    <span className="text-xs font-semibold text-white block">{item.label}</span>
                    <span className="text-[10px] text-neutral-400 block mt-1 font-code">
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Strap */}
            <div className="bg-[#121418] border border-[#262930] p-6 rounded-sm space-y-3">
              <label className="text-xs font-code text-neutral-300 uppercase tracking-wider block">
                03. Браслет или ремешок
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'titanium-bracelet', label: 'Интегрированный титан', sub: 'Grade 5 · Микро-регулировка' },
                  { id: 'fkm-rubber', label: 'FKM Каучук высокой плотности', sub: 'Спорт/дайвинг · -$150' },
                  { id: 'horween-leather', label: 'Horween Shell Cordovan', sub: 'Ручной шов · +$150' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStrapOption(item.id as any)}
                    className={`p-3 text-left border transition-all ${
                      strapOption === item.id
                        ? 'border-[#d4af37] bg-[#1a1c22]'
                        : 'border-[#262930] hover:border-neutral-500 bg-[#0b0c0e]'
                    }`}
                  >
                    <span className="text-xs font-semibold text-white block">{item.label}</span>
                    <span className="text-[10px] text-neutral-400 block mt-1 font-code">
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Bespoke Laser Engraving */}
            <div className="bg-[#121418] border border-[#262930] p-6 rounded-sm space-y-3">
              <label className="text-xs font-code text-neutral-300 uppercase tracking-wider block flex justify-between">
                <span>04. Индивидуальная гравировка ротора</span>
                <span className="text-[#d4af37]">+$120 (Входит в Private Edition)</span>
              </label>
              <input
                type="text"
                maxLength={24}
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                placeholder="ИМЯ, ДАТА ИЛИ ЛИЧНЫЙ ДЕВИЗ"
                className="w-full px-3.5 py-2.5 bg-[#0b0c0e] border border-[#262930] text-sm text-white font-code tracking-widest focus:outline-none focus:border-[#d4af37]"
              />
              <span className="text-[10px] text-neutral-500 font-code block">
                Максимум 24 латинских или кириллических знака. Лазерная прецизионная гравировка на вольфраме.
              </span>
            </div>

            {/* Final Price & Purchase Action */}
            <div className="bg-gradient-to-r from-[#171a21] to-[#121418] border border-[#d4af37]/40 p-6 rounded-sm space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-code text-neutral-400">
                    ИТОГОВАЯ КОМПЛЕКТАЦИЯ АТЕЛЬЕ
                  </span>
                  <div className="font-code text-3xl font-bold text-white mt-1">
                    {getPriceStr()}
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="text-[#d4af37] font-semibold block font-code">
                    10 ЛЕТ ГАРАНТИИ
                  </span>
                  <span className="text-neutral-400 text-[11px]">
                    NFC паспорт подлинности
                  </span>
                </div>
              </div>

              {!submitted ? (
                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full py-3.5 bg-[#d4af37] hover:bg-[#e2c158] text-[#0b0c0e] font-semibold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Передать спецификацию мастеру мануфактуры</span>
                </button>
              ) : (
                <div className="p-3 bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs text-center font-code flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Спецификация #VND-BESPOKE сохранена. Консьерж свяжется для согласования чертежа.</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
