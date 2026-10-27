import React, { useState } from 'react';
import { Calendar, Phone, Star, ShieldCheck, Sparkles, Gem, HeartHandshake, Eye, MapPin } from 'lucide-react';
import { SALON_INFO, TRUST_BADGES, SALON_HIGHLIGHTS } from '../data/salonData';

interface HeroSectionProps {
  onBookClick: () => void;
  onOpenImageModal: (url: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick, onOpenImageModal }) => {
  const [imageErrorExterior, setImageErrorExterior] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-pink-200/50">
      {/* Ambient soft background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-pink-300/30 via-purple-200/25 to-rose-200/20 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-purple-200/20 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline & Intro Header */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-200/80 shadow-md shadow-pink-900/5">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
            Hedonic Unisex Salon <br className="hidden sm:inline" />
            <span className="gold-gradient-text text-2xl sm:text-4xl lg:text-5xl block sm:inline mt-1 sm:mt-0">
              – Beauty & Grooming for Everyone
            </span>
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 text-zinc-800 font-medium">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
              1st Floor, Sita Complex, Maharajganj (Near Bandhan Bank)
            </span>
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b5881a] via-[#d4af37] to-[#e7c75c] text-black font-bold text-sm tracking-wide shadow-lg shadow-amber-900/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <Phone className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Call +91 70434 32122</span>
            </a>
          </div>
        </div>

        {/* ================= VENUE SNAPSHOT (LANDSCAPE 2:3) =================
            Left: Exterior image
            Right: Replaced with uploaded video in 2:3 landscape
        ================================================================== */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-[11px] uppercase tracking-widest text-[#8b6508] font-bold bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-pink-200 shadow-sm">
              Official Venue Snapshot
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Cute Landscape Frame 1: Exterior View */}
            <div className="group relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-br from-pink-200/90 via-white to-purple-200/90 shadow-lg transition-all hover:scale-[1.01] hover:border-[#d4af37]">
              <div
                onClick={() => onOpenImageModal(SALON_INFO.exteriorImage, 'Hedonic Salon Exterior - Sita Complex Maharajganj')}
                className="relative cursor-pointer aspect-[3/2] w-full rounded-xl overflow-hidden bg-pink-50 block"
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
                  <div className="w-full h-full flex flex-col items-center justify-center bg-pink-50 p-4 text-center">
                    <MapPin className="w-8 h-8 text-pink-600 mb-2" />
                    <span className="text-sm font-semibold text-zinc-900">Sita Complex Exterior</span>
                    <span className="text-xs text-zinc-500">Maharajganj - Duraundha Rd</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-200 font-semibold border border-amber-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Salon Exterior View
                  </div>
                  <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[11px] text-white flex items-center gap-1 font-medium">
                    <Eye className="w-3.5 h-3.5 text-amber-300" /> Click to Expand
                  </span>
                </div>
              </div>
              <div className="px-2 py-2 flex items-center justify-between text-xs text-zinc-700 font-medium">
                <span>1st Floor, Sita Complex Entrance</span>
                <span className="text-[#8b6508] font-bold">Near Bandhan Bank</span>
              </div>
            </div>

            {/* Cute Landscape Frame 2: Uploaded Interior Video (Replaced image as requested) */}
            <div className="group relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-br from-purple-200/90 via-white to-pink-200/90 shadow-lg transition-all hover:scale-[1.01] hover:border-[#d4af37]">
              <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-black block shadow-inner">
                <video
                  src="/assets/aistudio/WhatsApp_Video_2026-10-26_at_9.28.20_PM_f19a1501.mp4"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-300 font-semibold border border-amber-400/40 flex items-center gap-1.5 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Live Interior Tour
                  </div>
                  <span className="bg-purple-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-white font-medium border border-purple-400/30 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> 4K Venue View
                  </span>
                </div>
              </div>
              <div className="px-2 py-2 flex items-center justify-between text-xs text-zinc-700">
                <span className="font-medium">Plush Styling Stations & AC Lounge</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> 100% Sanitized
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons / Illustrations with Vibrant SVGs ("Jo icon aur svg hai use vibrant mein rakhon") */}
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

              // Vibrant palette styling per index
              const iconStyles = [
                'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/25',
                'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25',
                'bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/25',
                'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25',
              ];

              return (
                <div
                  key={index}
                  className="bg-white/90 hover:bg-white border border-pink-200/90 hover:border-[#d4af37] rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col items-center text-center group shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-2xl ${iconStyles[index % 4]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-zinc-900 text-xs sm:text-sm mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-8 border-t border-pink-200/60 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-pink-200/80 hover:border-[#d4af37] transition-all shadow-sm hover:shadow-md"
              >
                <div className="text-xl sm:text-2xl font-bold font-serif text-zinc-900 flex items-center justify-center gap-1">
                  <span className="gold-gradient-text">{badge.value}</span>
                </div>
                <div className="text-xs font-bold text-zinc-800 mt-0.5">{badge.label}</div>
                <div className="text-[10px] text-zinc-500 font-medium">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
