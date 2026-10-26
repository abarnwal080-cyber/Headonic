import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/salonData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/40 text-[#8b6508] text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#b8860b]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
            Common Questions About Hedonic Salon
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/85 backdrop-blur-md border border-pink-200/90 shadow-xs overflow-hidden transition-all hover:border-pink-300"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-purple-900 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base text-zinc-900">
                  {faq.q}
                </span>
                <span className="text-[#b8860b] shrink-0">
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-700 leading-relaxed border-t border-pink-100/90 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
