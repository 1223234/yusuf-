import React from 'react';
import { BRAND_IDENTITY } from '../data/brandData';
import { 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Check, 
  X, 
  Compass, 
  Layers 
} from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-[#0b0c0e] border-t border-[#1e2229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-code text-[#d4af37] uppercase tracking-widest mb-2">
            Фундамент и миссия дома
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
            Философия Архитектурного Времени
          </h2>
          <p className="text-neutral-400 text-base mt-3 leading-relaxed">
            VANDEN был рожден как антитеза показному консьюмеризму и искусственному дефициту. 
            Мы возвращаем наручным часам их истинное предназначение: быть скульптурным выражением личности и точнейшим инструментом мысли.
          </p>
        </div>

        {/* 1. Name Meaning & Etymology Deep Dive */}
        <div className="bg-[#121418] border border-[#262930] p-8 lg:p-12 mb-12 rounded-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-code text-neutral-500 uppercase tracking-widest block mb-2">
                СЕМАНТИКА И ИМЯ
              </span>
              <h3 className="font-display text-4xl text-white tracking-widest">
                VANDEN
              </h3>
              <p className="font-code text-xs text-[#d4af37] mt-1">
                [ˈvæn.dən] · Neuchâtel, Suisse
              </p>
              <div className="mt-4 p-3 bg-[#0b0c0e] border border-[#1e2229] text-xs font-light text-neutral-300 italic">
                «Скала посреди стремительной реки времени»
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-white">Этимологические корни:</strong> Имя бренда восходит к скандинавско-швейцарскому корню <span className="text-[#d4af37]">«Vand»</span> (символ воды, безостановочного течения времени) и древнему корню <span className="text-[#d4af37]">«Den»</span> (каменная вершина, неприступный утес). В европейской фонетике имя также перекликается с латинским термином <span className="text-white italic">«Evidentia»</span> — кристальная очевидность, истина, не требующая доказательств.
              </p>
              <p>
                <strong className="text-white">Смысловая нагрузка:</strong> В мире, перегруженном поверхностными трендами и цифровым шумом, VANDEN символизирует точку опоры. Это манифест человека, чей статус определяется глубиной мышления, а не логотипом на одежде.
              </p>
            </div>

          </div>
        </div>

        {/* 2. Core Pillars (4 Cards) */}
        <div className="mb-16">
          <h3 className="font-display text-2xl text-white mb-6">
            Четыре Принципа Архитектурного Времени
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_IDENTITY.philosophy.corePrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="bg-[#121418] border border-[#262930] p-6 hover:border-[#d4af37]/60 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="font-code text-xs text-[#d4af37] mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display text-lg text-white font-medium mb-3 group-hover:text-[#d4af37] transition-colors">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Unique Selling Propositions (USP) Grid */}
        <div className="mb-16 bg-gradient-to-b from-[#121418] to-[#0e1014] border border-[#262930] p-8 lg:p-12 rounded-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-code text-[#d4af37] uppercase tracking-widest block mb-1">
              КОНКУРЕНТНОЕ ПРЕВОСХОДСТВО (USP)
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white">
              Почему VANDEN побеждает традиционную часовую индустрию
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRAND_IDENTITY.competitiveAdvantage.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#1c222b] border border-[#262930] flex items-center justify-center text-[#d4af37] shrink-0 font-code font-bold text-xs">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-display text-base text-white font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Target Audience & Positioning Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Target Audience Profile */}
          <div className="lg:col-span-5 bg-[#121418] border border-[#262930] p-6 sm:p-8 rounded-sm space-y-4">
            <span className="text-xs font-code text-[#d4af37] uppercase tracking-widest block">
              ПОРТРЕТ ВЛАДЕЛЬЦА VANDEN
            </span>
            <h3 className="font-display text-2xl text-white">
              Поколение «Тихой Роскоши»
            </h3>
            
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="pb-2 border-b border-[#1e2229]">
                <span className="text-neutral-500 block font-code mb-0.5">ДЕМОГРАФИЯ</span>
                <span>Мужчины и женщины 25–45 лет. Доход High / Ultra-High.</span>
              </div>
              <div className="pb-2 border-b border-[#1e2229]">
                <span className="text-neutral-500 block font-code mb-0.5">ПРОФЕССИИ</span>
                <span>Основатели IT-компаний, архитекторы, инвесторы, дизайнеры, хирурги.</span>
              </div>
              <div className="pb-2 border-b border-[#1e2229]">
                <span className="text-neutral-500 block font-code mb-0.5">ПСИХОГРАФИЯ</span>
                <span>Отвергают логоманию. Ценят инженерию, фактуру материалов и приватность.</span>
              </div>
              <div>
                <span className="text-neutral-500 block font-code mb-0.5">БОЛЬ РЫНКА</span>
                <span>Не желают годами стоять в очередях за серийным Rolex или носить пластиковый smartwatch на важные встречи.</span>
              </div>
            </div>
          </div>

          {/* Competitive Comparison Matrix */}
          <div className="lg:col-span-7 bg-[#121418] border border-[#262930] p-6 sm:p-8 rounded-sm">
            <span className="text-xs font-code text-[#d4af37] uppercase tracking-widest block mb-2">
              СРАВНИТЕЛЬНЫЙ АНАЛИЗ РЫНКА
            </span>
            <h3 className="font-display text-2xl text-white mb-6">
              VANDEN vs. Традиционные Сегменты
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#262930] text-neutral-400 font-code">
                    <th className="pb-3 font-normal">ПАРАМЕТР</th>
                    <th className="pb-3 font-semibold text-[#d4af37]">VANDEN</th>
                    <th className="pb-3 font-normal">Конгломератный люкс</th>
                    <th className="pb-3 font-normal">Серийный масс-премиум</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2229] text-neutral-300">
                  <tr>
                    <td className="py-3 font-medium text-white">Средняя цена</td>
                    <td className="py-3 font-code text-[#d4af37] font-semibold">$2,450 – $4,400</td>
                    <td className="py-3 font-code text-neutral-400">$12,000 – $45,000</td>
                    <td className="py-3 font-code text-neutral-400">$2,000 – $4,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Материал корпуса</td>
                    <td className="py-3 text-white">Титан Gr.5 + Нанокерамика</td>
                    <td className="py-3 text-neutral-400">Сталь 904L / Золото</td>
                    <td className="py-3 text-neutral-400">Стандартная сталь 316L</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Отделка механизма</td>
                    <td className="py-3 text-white">Ручной Anglage + Côtes</td>
                    <td className="py-3 text-white">Ручная отделка</td>
                    <td className="py-3 text-neutral-400">Машинная штамповка</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Цифровая защита</td>
                    <td className="py-3 text-emerald-400 font-code">NFC Блокчейн-паспорт</td>
                    <td className="py-3 text-neutral-400">Бумажный талон</td>
                    <td className="py-3 text-neutral-400">Пластиковая карта</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Доступность</td>
                    <td className="py-3 text-emerald-400">Прямой D2C заказ</td>
                    <td className="py-3 text-rose-400">Списки ожидания 2-5 лет</td>
                    <td className="py-3 text-neutral-300">Везде в торговых центрах</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
