import React from 'react';
import { PACKAGING_CONCEPT } from '../data/brandData';
import { Box, KeyRound, Wrench, Shield, Sparkles, Compass } from 'lucide-react';

export const PackagingExperience: React.FC = () => {
  return (
    <section id="packaging" className="py-20 bg-[#0b0c0e] border-t border-[#1e2229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-code text-[#d4af37] uppercase tracking-widest mb-2">
            Ритуал первого обладания · Unboxing Excellence
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
            Монолитный Алюминиевый Ковчег
          </h2>
          <p className="text-neutral-400 text-base mt-3 leading-relaxed">
            В большинстве брендов коробка отправляется в шкаф или выбрасывается. 
            Ковчег VANDEN спроектирован как вечный архитектурный объект интерьера из фрезерованного авиационного алюминия весом 1.25 кг.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Packaging High-Res Photography */}
          <div className="lg:col-span-7 bg-[#121418] border border-[#262930] p-4 rounded-sm shadow-2xl relative group overflow-hidden">
            <img
              src={PACKAGING_CONCEPT.image}
              alt="VANDEN Monolith Luxury Packaging"
              className="w-full aspect-[4/3] object-cover rounded-sm group-hover:scale-[1.02] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
              <div className="bg-black/80 backdrop-blur-md px-3.5 py-2 border border-white/10 font-code">
                <span className="text-[#d4af37] font-semibold">SOLID BILLET ALUMINUM</span>
                <span className="text-neutral-400 ml-2">· CNC Milled 1.25 KG</span>
              </div>
            </div>
          </div>

          {/* Unboxing Architecture */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121418] border border-[#262930] p-6 rounded-sm">
              <h3 className="font-display text-xl text-white mb-2">
                Сенсорный Ритуал Распаковки
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {PACKAGING_CONCEPT.unboxingRitual}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-code text-[#d4af37] uppercase tracking-wider">
                Материальные стандарты кейса:
              </h4>
              {PACKAGING_CONCEPT.materials.map((mat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 bg-[#121418] p-3 border border-[#1e2229]">
                  <Box className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Contents Breakdown Cards */}
        <div>
          <h3 className="font-display text-2xl text-white mb-6">
            Комплектация каждого экземпляра VANDEN
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGING_CONCEPT.contents.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121418] border border-[#262930] p-6 rounded-sm hover:border-[#d4af37]/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-code text-[#d4af37]">0{idx + 1}</span>
                  {idx === 0 ? (
                    <Compass className="w-4 h-4 text-[#d4af37]" />
                  ) : idx === 1 ? (
                    <Wrench className="w-4 h-4 text-[#d4af37]" />
                  ) : idx === 3 ? (
                    <KeyRound className="w-4 h-4 text-[#d4af37]" />
                  ) : (
                    <Shield className="w-4 h-4 text-[#d4af37]" />
                  )}
                </div>

                <h4 className="font-display text-base text-white font-medium mb-1.5">
                  {item.item}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
