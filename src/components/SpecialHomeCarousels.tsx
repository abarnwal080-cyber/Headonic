import React from 'react';
import { ArrowRight, Sparkles, Scissors, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { FEMALE_SUBPAGES, MALE_SUBPAGES } from '../data/salonData';
import { ServiceSubpage } from '../types';

interface SpecialHomeCarouselsProps {
  onSelectSubpage: (subpage: ServiceSubpage) => void;
}

export const SpecialHomeCarousels: React.FC<SpecialHomeCarouselsProps> = ({
  onSelectSubpage,
}) => {
  // Female Services:
  // 1st (Top/Large): Makeup Artist Services (Bridal Makeup)
  // 2nd & 3rd (Bottom horizontal row, smaller): Hair Services & Styling, Skin Care
  const bridalService = FEMALE_SUBPAGES.find((s) => s.id === 'bridal-makeup') || FEMALE_SUBPAGES[0];
  const femaleHairService = FEMALE_SUBPAGES.find((s) => s.id === 'female-hair') || FEMALE_SUBPAGES[1];
  const femaleSkinService = FEMALE_SUBPAGES.find((s) => s.id === 'skin-care') || FEMALE_SUBPAGES[2];

  // Male Services:
  // 1st (Top/Large): Hair Care Services
  // 2nd & 3rd (Bottom horizontal row, smaller): Beard & Mustache Grooming, Face & Skin Care (Men)
  const maleHairService = MALE_SUBPAGES.find((s) => s.id === 'male-hair') || MALE_SUBPAGES[0];
  const beardService = MALE_SUBPAGES.find((s) => s.id === 'beard-grooming') || MALE_SUBPAGES[1];
  const maleSkinService = MALE_SUBPAGES.find((s) => s.id === 'male-skincare') || MALE_SUBPAGES[2];

  return (
    <section id="services" className="py-12 sm:py-16 bg-transparent border-b border-pink-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/90 border border-pink-300/80 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            Curated Salon Services
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Premium Beauty & Grooming
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-2">
            Click anywhere on any service card to view complete packages, prices & photo gallery.
          </p>
        </div>

        {/* =========================================================================
            1. FEMALE SERVICES SECTION
            Top: Makeup Artist Services (Bridal Makeup) in large format
            Bottom: Hair & Skin Care in horizontal 2-column row (small format)
            ========================================================================= */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 tracking-wide">
                Female Services
              </h3>
            </div>
            <span className="text-xs text-rose-700 font-semibold px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200">
              Ladies Exclusive Suite
            </span>
          </div>

          {/* TOP 1ST: Makeup Artist Services (Bridal Makeup) - Large Featured Card (Clickable Everywhere) */}
          <div
            onClick={() => onSelectSubpage(bridalService)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectSubpage(bridalService);
              }
            }}
            className="group relative rounded-3xl overflow-hidden border border-pink-200/90 bg-white/90 backdrop-blur-md shadow-xl shadow-purple-950/5 p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#d4af37] hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6">
              {/* Landscape 3:2 Ratio Image Container */}
              <div className="w-full md:w-1/2 aspect-[3/2] relative rounded-2xl overflow-hidden bg-pink-50 border border-pink-200/80 shrink-0 shadow-sm">
                <img
                  src={bridalService.bannerImage}
                  alt={bridalService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-rose-700 text-xs font-bold border border-rose-200 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                    #1 Bridal Studio in Siwan
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    HD & Airbrush Bridal
                  </span>
                  <span className="bg-[#d4af37] text-black px-2.5 py-1 rounded-lg font-bold shadow">
                    Tap to open
                  </span>
                </div>
              </div>

              {/* Service Info Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#8b6508] font-bold">
                    Featured Service
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-purple-900 transition-colors">
                    {bridalService.title}
                  </h4>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {bridalService.headline} — {bridalService.description}
                  </p>

                  {/* Highlights mini list */}
                  <div className="pt-1 space-y-1.5">
                    {bridalService.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Treatments available & Clickable Button */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-pink-100">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#8b6508]" />
                    <span>{bridalService.items.length} Bridal Packages</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs tracking-wide shadow-md group-hover:brightness-105">
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM: 2 Other Ladies Services horizontally in one row (Smaller format, Clickable Everywhere) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-4 sm:mt-5">
            {/* 1. Hair Services & Styling */}
            <div
              onClick={() => onSelectSubpage(femaleHairService)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSubpage(femaleHairService);
                }
              }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-200/80 bg-white/90 backdrop-blur-md shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:border-[#d4af37] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Landscape 3:2 Image */}
                <div className="w-full aspect-[3/2] relative rounded-xl sm:rounded-2xl overflow-hidden bg-pink-50 border border-pink-100 mb-2.5 sm:mb-3">
                  <img
                    src={femaleHairService.bannerImage}
                    alt={femaleHairService.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs text-white font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                    Smoothening & Spa
                  </span>
                </div>

                <h4 className="font-serif text-sm sm:text-lg font-bold text-zinc-900 group-hover:text-purple-900 transition-colors line-clamp-1">
                  {femaleHairService.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-600 line-clamp-2 mt-1">
                  {femaleHairService.headline}
                </p>
              </div>

              <div className="pt-2 sm:pt-3 mt-2 border-t border-pink-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-[#8b6508] font-bold">
                  {femaleHairService.items.length} Treatments
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#8b6508] group-hover:translate-x-0.5 transition-transform">
                  <span>Know More</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* 2. Skin Care */}
            <div
              onClick={() => onSelectSubpage(femaleSkinService)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSubpage(femaleSkinService);
                }
              }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-200/80 bg-white/90 backdrop-blur-md shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:border-[#d4af37] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Landscape 3:2 Image */}
                <div className="w-full aspect-[3/2] relative rounded-xl sm:rounded-2xl overflow-hidden bg-pink-50 border border-pink-100 mb-2.5 sm:mb-3">
                  <img
                    src={femaleSkinService.bannerImage}
                    alt={femaleSkinService.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs text-white font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                    Facials & Waxing
                  </span>
                </div>

                <h4 className="font-serif text-sm sm:text-lg font-bold text-zinc-900 group-hover:text-purple-900 transition-colors line-clamp-1">
                  {femaleSkinService.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-600 line-clamp-2 mt-1">
                  {femaleSkinService.headline}
                </p>
              </div>

              <div className="pt-2 sm:pt-3 mt-2 border-t border-pink-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-[#8b6508] font-bold">
                  {femaleSkinService.items.length} Treatments
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#8b6508] group-hover:translate-x-0.5 transition-transform">
                  <span>Know More</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. MALE SERVICES SECTION
            Top: Hair Care Services in large format
            Bottom: Beard Grooming & Face & Skin Care in horizontal 2-column row (small format)
            ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 tracking-wide">
                Male Services
              </h3>
            </div>
            <span className="text-xs text-purple-700 font-semibold px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200">
              Gentlemen Lounge
            </span>
          </div>

          {/* TOP 1ST: Hair Care Services - Large Featured Card (Clickable Everywhere) */}
          <div
            onClick={() => onSelectSubpage(maleHairService)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectSubpage(maleHairService);
              }
            }}
            className="group relative rounded-3xl overflow-hidden border border-pink-200/90 bg-white/90 backdrop-blur-md shadow-xl shadow-purple-950/5 p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#d4af37] hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6">
              {/* Landscape 3:2 Ratio Image Container */}
              <div className="w-full md:w-1/2 aspect-[3/2] relative rounded-2xl overflow-hidden bg-purple-50 border border-purple-200/80 shrink-0 shadow-sm">
                <img
                  src={maleHairService.bannerImage}
                  alt={maleHairService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-purple-700 text-xs font-bold border border-purple-200 shadow-sm">
                    <Scissors className="w-3.5 h-3.5 text-purple-600" />
                    Men's Hair Styling
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    Fades, Color & Smoothening
                  </span>
                  <span className="bg-[#d4af37] text-black px-2.5 py-1 rounded-lg font-bold shadow">
                    Tap to open
                  </span>
                </div>
              </div>

              {/* Service Info Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#8b6508] font-bold">
                    Primary Men's Service
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-purple-900 transition-colors">
                    {maleHairService.title}
                  </h4>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {maleHairService.headline} — {maleHairService.description}
                  </p>

                  {/* Highlights mini list */}
                  <div className="pt-1 space-y-1.5">
                    {maleHairService.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Treatments available & Clickable Button */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-purple-100">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#8b6508]" />
                    <span>{maleHairService.items.length} Men's Treatments</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs tracking-wide shadow-md group-hover:brightness-105">
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM: 2 Other Male Services horizontally in one row (Smaller format, Clickable Everywhere) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-4 sm:mt-5">
            {/* 1. Beard & Mustache Grooming */}
            <div
              onClick={() => onSelectSubpage(beardService)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSubpage(beardService);
                }
              }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-200/80 bg-white/90 backdrop-blur-md shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:border-[#d4af37] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Landscape 3:2 Image */}
                <div className="w-full aspect-[3/2] relative rounded-xl sm:rounded-2xl overflow-hidden bg-purple-50 border border-purple-100 mb-2.5 sm:mb-3">
                  <img
                    src={beardService.bannerImage}
                    alt={beardService.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs text-white font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                    Hot Towel Shave
                  </span>
                </div>

                <h4 className="font-serif text-sm sm:text-lg font-bold text-zinc-900 group-hover:text-purple-900 transition-colors line-clamp-1">
                  {beardService.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-600 line-clamp-2 mt-1">
                  {beardService.headline}
                </p>
              </div>

              <div className="pt-2 sm:pt-3 mt-2 border-t border-purple-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-[#8b6508] font-bold">
                  {beardService.items.length} Treatments
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#8b6508] group-hover:translate-x-0.5 transition-transform">
                  <span>Know More</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* 2. Face & Skin Care (Men) */}
            <div
              onClick={() => onSelectSubpage(maleSkinService)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSubpage(maleSkinService);
                }
              }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-200/80 bg-white/90 backdrop-blur-md shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:border-[#d4af37] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Landscape 3:2 Image */}
                <div className="w-full aspect-[3/2] relative rounded-xl sm:rounded-2xl overflow-hidden bg-purple-50 border border-purple-100 mb-2.5 sm:mb-3">
                  <img
                    src={maleSkinService.bannerImage}
                    alt={maleSkinService.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs text-white font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                    Facials & Champi
                  </span>
                </div>

                <h4 className="font-serif text-sm sm:text-lg font-bold text-zinc-900 group-hover:text-purple-900 transition-colors line-clamp-1">
                  {maleSkinService.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-600 line-clamp-2 mt-1">
                  {maleSkinService.headline}
                </p>
              </div>

              <div className="pt-2 sm:pt-3 mt-2 border-t border-purple-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-[#8b6508] font-bold">
                  {maleSkinService.items.length} Treatments
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#8b6508] group-hover:translate-x-0.5 transition-transform">
                  <span>Know More</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
