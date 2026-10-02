import React, { useState } from 'react';
import { Calendar, Phone, Star, ShieldCheck, Sparkles, Gem, HeartHandshake, Eye, MapPin, CheckCircle2 } from 'lucide-react';
import { SALON_INFO, TRUST_BADGES, SALON_HIGHLIGHTS } from '../data/salonData';

interface HeroSectionProps {
  onBookClick: () => void;
  onOpenImageModal: (url: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick, onOpenImageModal }) => {
  const [imageErrorExterior, setImageErrorExterior] = useState(false);
  const [imageErrorInterior, setImageErrorInterior] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-[#1f222b]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/10 via-yellow-600/10 to-rose-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-amber-600/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline & Intro Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-amber-300/5 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Maharajganj’s Premier Beauty & Grooming Destination</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Hedonic Unisex Salon <br className="hidden sm:inline" />
            <span className="gold-gradient-text text-2xl sm:text-4xl lg:text-5xl block sm:inline mt-1 sm:mt-0">
              – Beauty & Grooming for Everyone
            </span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
              1st Floor, Sita Complex, Maharajganj (Near Reliance Trends Mart)
            </span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span className="inline-flex items-center gap-1 bg-[#d4af37]/15 px-2.5 py-0.5 rounded-full text-amber-300 font-semibold text-xs sm:text-sm border border-[#d4af37]/30">
              <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
              4.4 out of 5 on Google
            </span>
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onBookClick}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b5881a] via-[#d4af37] to-[#e7c75c] text-black font-bold text-sm tracking-wide shadow-xl shadow-amber-950/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="px-5 sm:px-7 py-3.5 rounded-full border border-zinc-700/80 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all flex items-center gap-2 group shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#d4af37] group-hover:animate-bounce" />
              <span>Call +91 70434 32122</span>
            </a>
          </div>
        </div>

        {/* SPECIFIC USER REQUIREMENT:
            "Note:- Parlour ke naam ke nicche exterior ani interior view small cute frame mein horizontally
            ek dusre ke bagal mein honge landscape 2:3 uske baad icons ka use karna illustration ke liye."
        */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/40">
              Official Venue Snapshot
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Cute Landscape Frame 1: Exterior View */}
            <div className="group relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-br from-[#d4af37]/40 via-zinc-800 to-[#d4af37]/20 shadow-xl transition-all hover:scale-[1.01] hover:border-[#d4af37]">
              <div
                onClick={() => onOpenImageModal(SALON_INFO.exteriorImage, 'Hedonic Salon Exterior - Sita Complex Maharajganj')}
                className="relative cursor-pointer aspect-[3/2] w-full rounded-xl overflow-hidden bg-zinc-900 block"
              >
                {!imageErrorExterior ? (
                  <img
                    src={SALON_INFO.exteriorImage}
                    alt="Hedonic Unisex Salon Exterior View Sita Complex Maharajganj Siwan"
                    onError={() => setImageErrorExterior(true)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-4 text-center">
                    <MapPin className="w-8 h-8 text-[#d4af37] mb-2" />
                    <span className="text-sm font-semibold text-white">Sita Complex Exterior</span>
                    <span className="text-xs text-zinc-400">Maharajganj - Duraundha Rd</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-200 font-medium border border-amber-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Salon Exterior View
                  </div>
                  <span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[11px] text-zinc-300 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-[#d4af37]" /> Click to Expand
                  </span>
                </div>
              </div>
              <div className="px-2 py-2 flex items-center justify-between text-xs text-zinc-400">
                <span>1st Floor, Sita Complex Entrance</span>
                <span className="text-[#d4af37] font-medium">Near Trends Mart</span>
              </div>
            </div>

            {/* Cute Landscape Frame 2: Interior View */}
            <div className="group relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-br from-[#d4af37]/40 via-zinc-800 to-[#d4af37]/20 shadow-xl transition-all hover:scale-[1.01] hover:border-[#d4af37]">
              <div
                onClick={() => onOpenImageModal(SALON_INFO.interiorImage, 'Hedonic Salon Interior Styling Chairs & Lounge')}
                className="relative cursor-pointer aspect-[3/2] w-full rounded-xl overflow-hidden bg-zinc-900 block"
              >
                {!imageErrorInterior ? (
                  <img
                    src={SALON_INFO.interiorImage}
                    alt="Hedonic Unisex Salon Luxury Interior View Maharajganj Siwan"
                    onError={() => setImageErrorInterior(true)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-4 text-center">
                    <Sparkles className="w-8 h-8 text-[#d4af37] mb-2" />
                    <span className="text-sm font-semibold text-white">Luxury Salon Interior</span>
                    <span className="text-xs text-zinc-400">Styling Stations & Wash Bar</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-200 font-medium border border-amber-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    Luxury Interior Ambiance
                  </div>
                  <span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[11px] text-zinc-300 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-[#d4af37]" /> Click to Expand
                  </span>
                </div>
              </div>
              <div className="px-2 py-2 flex items-center justify-between text-xs text-zinc-400">
                <span>Plush Styling Stations & AC Lounge</span>
                <span className="text-emerald-400 font-medium">100% Sanitized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons / Illustrations ("uske baad icons ka use karna illustration ke liye") */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {SALON_HIGHLIGHTS.map((item, index) => {
              const IconComponent =
                index === 0
                  ? Sparkles
                  : index === 1
                  ? ShieldCheck
                  : index === 2
                  ? Gem
                  : HeartHandshake;

              return (
                <div
                  key={index}
                  className="bg-[#12141c] hover:bg-[#161924] border border-[#232634] hover:border-[#d4af37]/40 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#33250b] to-[#1a1c24] border border-[#d4af37]/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner">
                    <IconComponent className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="font-semibold text-white text-xs sm:text-sm mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-8 border-t border-[#1f222b] max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 hover:border-amber-500/30 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center justify-center gap-1">
                  <span className="gold-gradient-text">{badge.value}</span>
                </div>
                <div className="text-xs font-semibold text-zinc-200 mt-0.5">{badge.label}</div>
                <div className="text-[10px] text-zinc-400">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
