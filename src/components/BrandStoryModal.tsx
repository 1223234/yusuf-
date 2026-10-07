import React from 'react';
import { BRAND_STORY } from '../data/brandData';
import { X, BookOpen, Quote } from 'lucide-react';

interface BrandStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandStoryModal: React.FC<BrandStoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#121418] border border-[#262930] max-w-3xl w-full my-8 p-6 sm:p-10 text-white shadow-2xl relative rounded-sm">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#1e2229] pb-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-code text-[#d4af37] uppercase tracking-widest mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Летопись Мануфактуры</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-white font-normal">
            {BRAND_STORY.headline}
          </h2>
          <p className="font-display italic text-[#d4af37] text-sm mt-1">
            {BRAND_STORY.tagline}
          </p>
        </div>

        {/* Story Chapters */}
        <div className="space-y-8 text-neutral-300 text-sm leading-relaxed">
          {BRAND_STORY.chapters.map((ch, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-display text-base text-white font-semibold">
                {ch.title}
              </h3>
              <p className="font-light text-neutral-300">
                {ch.text}
              </p>
            </div>
          ))}

          {/* Quote Block */}
          <div className="p-6 bg-[#0b0c0e] border-l-2 border-[#d4af37] relative my-6">
            <Quote className="w-6 h-6 text-[#d4af37]/40 absolute top-4 right-4" />
            <p className="italic text-neutral-200 text-sm">
              «Мы не создаем часы для тех, кто хочет казаться кем-то другим. VANDEN — это инструмент для тех, кто уже нашел себя и ценит каждую секунду внутренней тишины».
            </p>
            <div className="mt-3 text-xs font-code text-[#d4af37]">
              — Совет Мастеров VANDEN · Neuchâtel Atelier
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-6 border-t border-[#1e2229] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#262930] hover:bg-[#343842] text-xs font-medium text-white transition-colors"
          >
            Закрыть манифест
          </button>
        </div>

      </div>
    </div>
  );
};
