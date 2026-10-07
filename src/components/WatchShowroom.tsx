import React, { useState } from 'react';
import { WATCH_COLLECTION } from '../data/brandData';
import { WatchModel } from '../types/brand';
import { WatchDialSim } from './WatchDialSim';
import { 
  Sparkles, 
  Shield, 
  Clock, 
  Droplets, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  ShoppingBag,
  Sliders
} from 'lucide-react';

interface WatchShowroomProps {
  currency: 'USD' | 'EUR' | 'RUB';
  onConfigureModel: (modelId: string) => void;
}

export const WatchShowroom: React.FC<WatchShowroomProps> = ({
  currency,
  onConfigureModel,
}) => {
  const [selectedModel, setSelectedModel] = useState<WatchModel>(WATCH_COLLECTION[0]);
  const [viewMode, setViewMode] = useState<'photo' | 'live-dial'>('photo');
  const [isLumeActive, setIsLumeActive] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const formatPrice = (model: WatchModel) => {
    if (currency === 'USD') return `$${model.priceUSD.toLocaleString('en-US')}`;
    if (currency === 'EUR') return `€${model.priceEUR.toLocaleString('en-US')}`;
    return `${model.priceRUB.toLocaleString('ru-RU')} ₽`;
  };

  const handlePreOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail) return;
    setOrderSuccess(true);
  };

  return (
    <section id="collection" className="py-20 bg-[#0b0c0e] text-[#e2e4e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1e2229] pb-6 gap-6">
          <div>
            <div className="text-xs font-code text-[#d4af37] uppercase tracking-widest mb-2">
              Дебютная коллекция · The Monolith Series
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-normal tracking-tight">
              Архитектурная Механика I
            </h2>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Четыре бескомпромиссных воплощения: от монолитного титанового флагмана до ультратонкого костюмного авантюрина.
            </p>
          </div>

          {/* Model Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {WATCH_COLLECTION.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedModel(m);
                  setOrderSuccess(false);
                }}
                className={`px-3.5 py-2 text-xs font-medium transition-all ${
                  selectedModel.id === m.id
                    ? 'bg-[#d4af37] text-[#0b0c0e] font-semibold'
                    : 'bg-[#121418] text-neutral-400 hover:text-white border border-[#262930]'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* Spotlight Showcase of Selected Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Showcase (Photo vs Real-Time Dial) */}
          <div className="lg:col-span-7 bg-[#121418] border border-[#262930] p-6 relative rounded-sm">
            
            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mb-6 border-b border-[#1e2229] pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('photo')}
                  className={`text-xs px-3 py-1 font-medium transition-colors ${
                    viewMode === 'photo'
                      ? 'bg-[#262930] text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Студийная съемка
                </button>
                <button
                  onClick={() => setViewMode('live-dial')}
                  className={`text-xs px-3 py-1 font-medium transition-colors flex items-center gap-1.5 ${
                    viewMode === 'live-dial'
                      ? 'bg-[#262930] text-[#d4af37]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Интерактивный циферблат</span>
                </button>
              </div>

              {selectedModel.limitedEdition && (
                <span className="text-[11px] font-code text-[#d4af37]">
                  {selectedModel.limitedEdition}
                </span>
              )}
            </div>

            {/* Display View */}
            <div className="min-h-[420px] flex items-center justify-center p-4">
              {viewMode === 'photo' ? (
                <div className="relative group w-full flex items-center justify-center">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    className="max-h-[440px] w-auto object-contain rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 text-[10px] text-neutral-500 font-code bg-black/60 px-2 py-0.5 backdrop-blur-sm">
                    40MM MACRO PHOTOGRAPHY
                  </div>
                </div>
              ) : (
                <div className="py-6">
                  <WatchDialSim
                    modelId={selectedModel.id}
                    isLumeMode={isLumeActive}
                    onToggleLume={() => setIsLumeActive(!isLumeActive)}
                  />
                </div>
              )}
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#1e2229]">
              {selectedModel.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Deep Horological Specs & Purchasing Module */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Model Title & Price Card */}
            <div className="bg-[#121418] border border-[#262930] p-6 rounded-sm">
              <div className="text-xs font-code text-neutral-400 uppercase tracking-wider">
                VANDEN ATELIER · SWISS MADE
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl text-white font-medium mt-1">
                {selectedModel.name}
              </h3>

              <p className="text-xs text-[#d4af37] font-medium mt-1">
                {selectedModel.tagline}
              </p>

              <div className="mt-4 pt-4 border-t border-[#1e2229] flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-code">
                    Рекомендуемая цена (MSRP)
                  </div>
                  <div className="font-code text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    {formatPrice(selectedModel)}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-emerald-400 font-code block">
                    В наличии для аллокации
                  </span>
                  <span className="text-[10px] text-neutral-500">
                    Доставка: 3-5 дней
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-xs leading-relaxed mt-4">
                {selectedModel.description}
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full py-3 bg-[#d4af37] hover:bg-[#e2c158] text-[#0b0c0e] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Забронировать</span>
                </button>

                <button
                  onClick={() => onConfigureModel(selectedModel.id)}
                  className="w-full py-3 border border-[#262930] hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 bg-[#171a20]"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Кастомизация</span>
                </button>
              </div>

            </div>

            {/* Architectural Horology Spec Sheet */}
            <div className="bg-[#121418] border border-[#262930] p-6 rounded-sm">
              <h4 className="font-display text-sm tracking-widest text-white uppercase border-b border-[#1e2229] pb-3 mb-4 flex items-center justify-between">
                <span>Технический Паспорт Модели</span>
                <span className="text-[10px] font-code text-neutral-500">SPEC_SHEET_V1</span>
              </h4>

              <div className="space-y-3.5 text-xs">
                
                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                    Корпус
                  </span>
                  <span className="col-span-8 text-neutral-200">
                    {selectedModel.specs.case}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium">Габариты</span>
                  <span className="col-span-8 text-neutral-200 font-code">
                    Ø {selectedModel.specs.caseDiameter} · Толщина {selectedModel.specs.caseThickness}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                    Циферблат
                  </span>
                  <span className="col-span-8 text-neutral-200">
                    {selectedModel.specs.dial}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium">Стрелки</span>
                  <span className="col-span-8 text-neutral-200">
                    {selectedModel.specs.hands}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    Механизм
                  </span>
                  <span className="col-span-8 text-neutral-200">
                    {selectedModel.specs.movement}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium">Запас хода</span>
                  <span className="col-span-8 text-neutral-200 font-code">
                    {selectedModel.specs.powerReserve} ({selectedModel.specs.frequency})
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#d4af37]" />
                    Водозащита
                  </span>
                  <span className="col-span-8 text-neutral-200 font-code">
                    {selectedModel.specs.waterResistance}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pb-2.5 border-b border-[#1a1d24]">
                  <span className="col-span-4 text-neutral-500 font-medium">Браслет / Ремень</span>
                  <span className="col-span-8 text-neutral-200">
                    {selectedModel.specs.strap}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-neutral-500 font-medium">Финишная отделка</span>
                  <span className="col-span-8 text-neutral-300 italic">
                    {selectedModel.specs.finishing}
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Reservation / Pre-order Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121418] border border-[#262930] max-w-md w-full p-6 text-white shadow-2xl relative">
            
            <button
              onClick={() => {
                setOrderModalOpen(false);
                setOrderSuccess(false);
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            {!orderSuccess ? (
              <form onSubmit={handlePreOrder} className="space-y-4">
                <div className="text-xs font-code text-[#d4af37]">
                  PRIVATE ALLOCATION REQUEST
                </div>
                <h3 className="font-display text-xl">
                  Бронирование {selectedModel.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  Вы подаете заявку на номерной экземпляр первой серии. После подтверждения консьерж VANDEN свяжется с вами для выбора серийного номера и согласования параметров гравировки.
                </p>

                <div className="pt-2">
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Александр Волков"
                    className="w-full px-3 py-2 bg-[#0b0c0e] border border-[#262930] text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="collector@domain.com"
                    className="w-full px-3 py-2 bg-[#0b0c0e] border border-[#262930] text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="p-3 bg-[#0b0c0e] border border-[#1e2229] text-xs font-code text-neutral-400 flex justify-between">
                  <span>MSRP к оплате:</span>
                  <span className="text-white font-bold">{formatPrice(selectedModel)}</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#d4af37] hover:bg-[#e2c158] text-[#0b0c0e] font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    Подтвердить запрос в мануфактуру
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#d4af37] mx-auto" />
                <h4 className="font-display text-xl text-white">
                  Запрос зарегистрирован
                </h4>
                <p className="text-xs text-neutral-300 max-w-xs mx-auto">
                  Номер заявки #VN-{(Math.floor(Math.random() * 8999) + 1000)}. 
                  Консьерж свяжется с вами по адресу {customerEmail} в течение 24 часов.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setOrderModalOpen(false);
                      setOrderSuccess(false);
                    }}
                    className="px-6 py-2 bg-[#262930] hover:bg-[#343842] text-xs text-white"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
