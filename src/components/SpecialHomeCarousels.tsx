import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Scissors, Clock } from 'lucide-react';
import { FEMALE_SUBPAGES, MALE_SUBPAGES } from '../data/salonData';
import { ServiceSubpage } from '../types';

interface SpecialHomeCarouselsProps {
  onSelectSubpage: (subpage: ServiceSubpage) => void;
}

export const SpecialHomeCarousels: React.FC<SpecialHomeCarouselsProps> = ({
  onSelectSubpage,
}) => {
  // Female Carousel state
  const [femaleIndex, setFemaleIndex] = useState(0);
  const [femalePaused, setFemalePaused] = useState(false);

  // Male Carousel state
  const [maleIndex, setMaleIndex] = useState(0);
  const [malePaused, setMalePaused] = useState(false);

  // Auto-slide every 1.5 seconds (1500ms)
  useEffect(() => {
    if (femalePaused) return;
    const interval = setInterval(() => {
      setFemaleIndex((prev) => (prev + 1) % FEMALE_SUBPAGES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [femalePaused]);

  useEffect(() => {
    if (malePaused) return;
    const interval = setInterval(() => {
      setMaleIndex((prev) => (prev + 1) % MALE_SUBPAGES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [malePaused]);

  const currentFemale = FEMALE_SUBPAGES[femaleIndex];
  const currentMale = MALE_SUBPAGES[maleIndex];

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#0e1017] border-b border-[#1f222b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* ================= 1. FEMALE SERVICES CAROUSEL (1:1 IMAGE) ================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                Female Services
              </h2>
            </div>
            <span className="text-xs text-zinc-400">
              {femaleIndex + 1} / {FEMALE_SUBPAGES.length} • Auto-sliding (1.5s)
            </span>
          </div>

          {/* Card with 1:1 Aspect Ratio Image */}
          <div
            onMouseEnter={() => setFemalePaused(true)}
            onMouseLeave={() => setFemalePaused(false)}
            className="group relative rounded-3xl overflow-hidden border border-[#d4af37]/40 bg-[#141622] shadow-2xl p-4 sm:p-6 transition-all"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* 1:1 Aspect Ratio Image Container */}
              <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-inner shrink-0">
                <img
                  key={currentFemale.id}
                  src={currentFemale.bannerImage}
                  alt={currentFemale.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* 1:1 Badge & Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-rose-300 text-xs font-semibold border border-rose-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                    Ladies Exclusive
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-center sm:text-left">
                  <span className="text-[11px] text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    1:1 High-Resolution Capture
                  </span>
                </div>

                {/* Left / Right arrow overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFemaleIndex((prev) => (prev - 1 + FEMALE_SUBPAGES.length) % FEMALE_SUBPAGES.length);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center border border-zinc-700 hover:border-[#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFemaleIndex((prev) => (prev + 1) % FEMALE_SUBPAGES.length);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center border border-zinc-700 hover:border-[#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Service Info & "Know More" Button (Opens Subpage) */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    Featured Female Service
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {currentFemale.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {currentFemale.headline} — {currentFemale.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{currentFemale.items.length} Packages & Treatments Available</span>
                  </div>
                </div>

                {/* Know More Button: Opens dedicated subpage */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectSubpage(currentFemale)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {FEMALE_SUBPAGES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setFemaleIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      femaleIndex === idx ? 'w-8 bg-[#d4af37]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to ${s.title}`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-zinc-400">
                Click <strong>Know More</strong> to open complete subpage view
              </span>
            </div>
          </div>
        </div>

        {/* ================= 2. MALE SERVICES CAROUSEL (1:1 IMAGE) ================= */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                Male Services
              </h2>
            </div>
            <span className="text-xs text-zinc-400">
              {maleIndex + 1} / {MALE_SUBPAGES.length} • Auto-sliding (1.5s)
            </span>
          </div>

          {/* Card with 1:1 Aspect Ratio Image */}
          <div
            onMouseEnter={() => setMalePaused(true)}
            onMouseLeave={() => setMalePaused(false)}
            className="group relative rounded-3xl overflow-hidden border border-[#d4af37]/40 bg-[#141622] shadow-2xl p-4 sm:p-6 transition-all"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* 1:1 Aspect Ratio Image Container */}
              <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-inner shrink-0">
                <img
                  key={currentMale.id}
                  src={currentMale.bannerImage}
                  alt={currentMale.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* 1:1 Badge & Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-500/30">
                    <Scissors className="w-3.5 h-3.5 text-amber-400" />
                    Gents Grooming
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-center sm:text-left">
                  <span className="text-[11px] text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    1:1 High-Resolution Capture
                  </span>
                </div>

                {/* Left / Right arrow overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMaleIndex((prev) => (prev - 1 + MALE_SUBPAGES.length) % MALE_SUBPAGES.length);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center border border-zinc-700 hover:border-[#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
                  aria-label="Previous male service"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMaleIndex((prev) => (prev + 1) % MALE_SUBPAGES.length);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center border border-zinc-700 hover:border-[#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
                  aria-label="Next male service"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Service Info & "Know More" Button (Opens Subpage) */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    Featured Men's Service
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {currentMale.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {currentMale.headline} — {currentMale.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{currentMale.items.length} Custom Men's Options</span>
                  </div>
                </div>

                {/* Know More Button: Opens dedicated subpage */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectSubpage(currentMale)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {MALE_SUBPAGES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setMaleIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      maleIndex === idx ? 'w-8 bg-[#d4af37]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to ${s.title}`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-zinc-400">
                Click <strong>Know More</strong> to open complete subpage view
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
