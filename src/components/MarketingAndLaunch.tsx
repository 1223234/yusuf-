import React, { useState } from 'react';
import { LAUNCH_STRATEGY, AD_CAMPAIGNS, INSTAGRAM_CONCEPT } from '../data/brandData';
import { 
  Instagram, 
  Globe, 
  Camera, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share2, 
  ExternalLink,
  Target,
  Sparkles
} from 'lucide-react';

export const MarketingAndLaunch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'campaigns' | 'instagram' | 'website'>('strategy');
  const [activeCampaignIdx, setActiveCampaignIdx] = useState(0);

  return (
    <section id="marketing" className="py-20 bg-[#0b0c0e] border-t border-[#1e2229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-code text-[#d4af37] uppercase tracking-widest mb-2">
            Стратегия экспансии и позиционирование
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
            Маркетинг Запуска & Медиа-Платформа
          </h2>
          <p className="text-neutral-400 text-base mt-3 leading-relaxed">
            Как независимый дом завоёвывает мировой рынок без миллиардных бюджетов: 
            стратегия закрытых аллокаций, эстетический визуальный сторителлинг и цифровая культура тихой роскоши.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 border-b border-[#1e2229]">
          {[
            { id: 'strategy', label: '01. Стратегия запуска (3 Фазы)' },
            { id: 'campaigns', label: '02. Рекламные кампании и Фотосеты' },
            { id: 'instagram', label: '03. Концепт Instagram (@vanden)' },
            { id: 'website', label: '04. Архитектура веб-сайта' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#d4af37] text-[#0b0c0e] font-semibold'
                  : 'bg-[#121418] text-neutral-400 hover:text-white border border-[#262930]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: 3-Phase Launch Strategy */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {LAUNCH_STRATEGY.map((phase, idx) => (
                <div
                  key={idx}
                  className="bg-[#121418] border border-[#262930] p-6 lg:p-8 rounded-sm relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-code mb-3">
                      <span className="text-[#d4af37] font-bold">{phase.phase}</span>
                      <span className="text-neutral-500">{phase.timeline}</span>
                    </div>

                    <h3 className="font-display text-xl text-white font-semibold mb-2">
                      {phase.title}
                    </h3>

                    <p className="text-xs text-neutral-300 italic mb-6">
                      «{phase.objective}»
                    </p>

                    <div className="space-y-4 pt-4 border-t border-[#1e2229]">
                      <span className="text-[11px] font-code text-neutral-400 uppercase tracking-wider block">
                        КЛЮЧЕВЫЕ ТАКТИКИ:
                      </span>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {phase.tactics.map((tac, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#d4af37] mt-0.5">·</span>
                            <span>{tac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#1e2229]">
                    <span className="text-[10px] font-code text-emerald-400 uppercase block mb-1">
                      ЦЕЛЕВЫЕ ПОКАЗАТЕЛИ (KPI):
                    </span>
                    <ul className="text-[11px] text-neutral-400 space-y-1 font-code">
                      {phase.kpis.map((kpi, k) => (
                        <li key={k}>✓ {kpi}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Ad Campaigns & Editorial Photoshoots */}
        {activeTab === 'campaigns' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Campaign Selector Column */}
            <div className="lg:col-span-4 space-y-3">
              {AD_CAMPAIGNS.map((camp, idx) => (
                <button
                  key={camp.id}
                  onClick={() => setActiveCampaignIdx(idx)}
                  className={`w-full p-5 text-left border rounded-sm transition-all ${
                    activeCampaignIdx === idx
                      ? 'border-[#d4af37] bg-[#1a1c22]'
                      : 'border-[#262930] hover:border-neutral-500 bg-[#121418]'
                  }`}
                >
                  <span className="text-[10px] font-code text-[#d4af37] uppercase block mb-1">
                    КАМПАНИЯ 0{idx + 1}
                  </span>
                  <h4 className="font-display text-base text-white font-medium">
                    {camp.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 italic">
                    «{camp.slogan}»
                  </p>
                </button>
              ))}
            </div>

            {/* Campaign Detail Spotlight */}
            <div className="lg:col-span-8 bg-[#121418] border border-[#262930] p-8 rounded-sm space-y-6">
              {(() => {
                const current = AD_CAMPAIGNS[activeCampaignIdx];
                return (
                  <>
                    <div className="border-b border-[#1e2229] pb-4">
                      <span className="text-xs font-code text-[#d4af37] uppercase tracking-wider block">
                        РЕЖИССЕРСКИЙ БРИФ И МУДБОРД
                      </span>
                      <h3 className="font-display text-2xl text-white mt-1">
                        {current.title}
                      </h3>
                      <div className="font-display text-lg text-[#d4af37] italic mt-1">
                        {current.slogan}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 bg-[#0b0c0e] border border-[#1e2229]">
                        <span className="text-neutral-500 block font-code text-[10px] uppercase">
                          ЛОКАЦИЯ И ДЕКОРАЦИИ
                        </span>
                        <span className="text-neutral-200 mt-1 block">
                          {current.location}
                        </span>
                      </div>

                      <div className="p-4 bg-[#0b0c0e] border border-[#1e2229]">
                        <span className="text-neutral-500 block font-code text-[10px] uppercase">
                          ЦЕЛЕВАЯ ЭМОЦИЯ
                        </span>
                        <span className="text-neutral-200 mt-1 block">
                          {current.targetEmotion}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-code text-neutral-400 uppercase tracking-wider block mb-2">
                        ВИЗУАЛЬНОЕ НАПРАВЛЕНИЕ КАМЕРЫ (DIRECTOR'S CUT)
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed bg-[#0b0c0e] p-4 border border-[#1e2229]">
                        {current.visualDirection}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-code text-[#d4af37] uppercase tracking-wider block mb-2">
                        ОБРАЗЕЦ РЕКЛАМНОГО МАНИФЕСТА В ПЕЧАТНЫХ И ЦИФРОВЫХ МЕДИА
                      </span>
                      <div className="p-5 bg-gradient-to-r from-[#171a22] to-[#121418] border-l-2 border-[#d4af37] text-neutral-200 text-sm leading-relaxed font-light italic">
                        {current.copySample}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>

          </div>
        )}

        {/* Tab 3: Interactive Instagram Concept (@vanden.horlogerie) */}
        {activeTab === 'instagram' && (
          <div className="bg-[#121418] border border-[#262930] p-6 sm:p-10 rounded-sm">
            
            {/* Instagram Profile Header Mockup */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-[#1e2229] pb-8 mb-8">
              {/* Profile Avatar */}
              <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] p-1 shrink-0 bg-[#0b0c0e] flex items-center justify-center">
                <span className="font-display font-bold text-xl text-white tracking-widest">
                  VN
                </span>
              </div>

              {/* Profile Info */}
              <div className="text-center sm:text-left space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <span className="font-code text-base font-semibold text-white">
                    vanden.horlogerie
                  </span>
                  <span className="px-3 py-1 bg-[#262930] text-xs text-white rounded-sm font-medium">
                    Подписаться
                  </span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-6 text-xs text-neutral-300 font-code pt-1">
                  <span><strong>124</strong> публикаций</span>
                  <span><strong>38.6K</strong> подписчиков</span>
                  <span><strong>28</strong> подписок</span>
                </div>

                <div className="text-xs text-neutral-300 space-y-0.5 pt-1">
                  <div className="font-semibold text-white">VANDEN Horlogerie Suisse</div>
                  <div className="text-neutral-400">Haute Horlogerie · Neuchâtel & Geneva</div>
                  <div>Silence In Motion. Architectural timepieces in Grade 5 Titanium.</div>
                  <a href="#collection" className="text-[#d4af37] hover:underline block font-code">
                    vandenwatches.com/monolith-series
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Feed Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSTAGRAM_CONCEPT.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#0b0c0e] border border-[#1e2229] rounded-sm overflow-hidden group hover:border-[#d4af37]/60 transition-colors"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#15171c]">
                    <img
                      src={post.image}
                      alt={post.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-[10px] font-code text-[#d4af37] px-2 py-0.5 uppercase">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-neutral-400">
                      <div className="flex items-center gap-3">
                        <Heart className="w-4 h-4 hover:text-rose-500 cursor-pointer transition-colors" />
                        <MessageCircle className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                        <Share2 className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                      </div>
                      <span className="text-[10px] font-code text-neutral-500">
                        {post.engagement}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">
                      <strong className="text-white mr-1.5 font-code">vanden.horlogerie</strong>
                      {post.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 4: Website Concept */}
        {activeTab === 'website' && (
          <div className="bg-[#121418] border border-[#262930] p-8 lg:p-12 rounded-sm space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-code text-[#d4af37] uppercase tracking-wider block mb-1">
                ЦИФРОВОЙ ФЛАГМАНСКИЙ БУТИК
              </span>
              <h3 className="font-display text-2xl text-white">
                Архитектура веб-сайта vandenwatches.com
              </h3>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                В отличие от традиционных часовых сайтов с медленными флеш-анимациями и отсутствием цен, сайт VANDEN — это мгновенная, тактильная платформа с 3D-детализацией и прямой покупкой.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-5 bg-[#0b0c0e] border border-[#1e2229]">
                <Globe className="w-5 h-5 text-[#d4af37] mb-3" />
                <h4 className="font-display text-sm text-white font-semibold mb-1">
                  1. Интерактивный витринный зал
                </h4>
                <p className="text-neutral-400 leading-relaxed">
                  Плавный осмотр циферблата с переключением день/ночь, работающим балансовым колесом и макросъемкой шестеренок.
                </p>
              </div>

              <div className="p-5 bg-[#0b0c0e] border border-[#1e2229]">
                <Target className="w-5 h-5 text-[#d4af37] mb-3" />
                <h4 className="font-display text-sm text-white font-semibold mb-1">
                  2. Bespoke Конфигуратор
                </h4>
                <p className="text-neutral-400 leading-relaxed">
                  Выбор сплавов (титан / DLC / золото), ремешков и лазерная гравировка на роторе с мгновенным пересчетом финальной цены.
                </p>
              </div>

              <div className="p-5 bg-[#0b0c0e] border border-[#1e2229]">
                <Sparkles className="w-5 h-5 text-[#d4af37] mb-3" />
                <h4 className="font-display text-sm text-white font-semibold mb-1">
                  3. Личный кабинет коллекционера
                </h4>
                <p className="text-neutral-400 leading-relaxed">
                  Синхронизация с сапфировым NFC-ключом часов: история сервисного обслуживания, точность хода калибра и закрытые приглашения.
                </p>
              </div>

              <div className="p-5 bg-[#0b0c0e] border border-[#1e2229]">
                <TrendingUp className="w-5 h-5 text-[#d4af37] mb-3" />
                <h4 className="font-display text-sm text-white font-semibold mb-1">
                  4. Прозрачность и консьерж
                </h4>
                <p className="text-neutral-400 leading-relaxed">
                  Прямой чат с часовщиком ателье, выбор серийного номера в реальном времени и защищенная оплата криптовалютой / картой.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
