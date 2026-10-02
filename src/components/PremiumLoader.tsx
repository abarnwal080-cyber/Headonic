import React, { useState, useEffect } from 'react';
import {
  Scissors,
  Crown,
  Sparkles,
  Gem,
  ShieldCheck,
  MapPin,
  Star,
  CheckCircle2,
  Flame,
} from 'lucide-react';

interface PremiumLoaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

const SERVICE_ICONS = [
  {
    id: 'bridal',
    label: 'Royal Bridal Glam',
    hindi: 'रॉयल दुल्हन शृंगार',
    icon: Crown,
    color: 'from-amber-400 to-yellow-600',
    desc: 'HD & Airbrush Bridal Makeover',
  },
  {
    id: 'hair',
    label: 'Precision Hair Styling',
    hindi: 'हेयर कटिंग और स्मूदनिंग',
    icon: Scissors,
    color: 'from-yellow-400 to-amber-600',
    desc: 'Keratin, Fades & Balayage',
  },
  {
    id: 'skin',
    label: 'Radiant Skincare',
    hindi: 'ग्लोइंग स्किन और फेशियल',
    icon: Sparkles,
    color: 'from-amber-300 to-yellow-500',
    desc: 'Hydrafacial & De-Tan Glow',
  },
  {
    id: 'beard',
    label: 'Beard & Grooming',
    hindi: 'दाढ़ी स्टाइलिंग और शेव',
    icon: Flame,
    color: 'from-yellow-500 to-amber-700',
    desc: 'Hot Towel Shave & Sculpting',
  },
  {
    id: 'luxury',
    label: '100% Genuine Brands',
    hindi: 'ओरिजिनल लग्जरी प्रोडक्ट्स',
    icon: Gem,
    color: 'from-amber-400 to-yellow-600',
    desc: 'L’Oréal, Matrix, MAC & O3+',
  },
  {
    id: 'hygiene',
    label: 'Hospital-Grade Hygiene',
    hindi: 'पूर्ण स्वच्छता और सैनिटाइजेशन',
    icon: ShieldCheck,
    color: 'from-yellow-400 to-amber-500',
    desc: 'Sterilized Tools & Private Suites',
  },
];

const LOADING_STEPS = [
  { progress: 15, text: 'Initializing Royal Ambiance...', subtext: 'Maharajganj’s Premier Beauty Sanctuary' },
  { progress: 38, text: 'Celebrating Pride of Maharajganj...', subtext: 'Serving Siwan & Duraundha with Excellence' },
  { progress: 65, text: 'Loading Precision Styling & Bridal Glam...', subtext: 'Certified Makeup Artists & Master Barbers' },
  { progress: 88, text: 'Preparing 100% Genuine Luxury Experience...', subtext: 'Near Reliance Trends Mart · Sita Complex' },
  { progress: 100, text: 'Welcome to Hedonic Unisex Salon', subtext: 'Where Beauty Meets Royal Elegance' },
];

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ onComplete, forceShow = false }) => {
  const [progress, setProgress] = useState(0);
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  // Smooth progress increment
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease the loading speed
        const increment = prev < 40 ? 3 : prev < 75 ? 2.5 : prev < 90 ? 2 : 1.5;
        const nextVal = Math.min(100, prev + increment);
        return nextVal;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Icon rotation sync
  useEffect(() => {
    const iconInterval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % SERVICE_ICONS.length);
    }, 600);

    return () => clearInterval(iconInterval);
  }, []);

  // Completion trigger with elegant exit
  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsFadingOut(true);
        const removeTimer = setTimeout(() => {
          setIsRendered(false);
          if (onComplete) onComplete();
        }, 650);
        return () => clearTimeout(removeTimer);
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  if (!isRendered && !forceShow) return null;

  // Current dynamic step message
  const currentStep =
    LOADING_STEPS.find((step) => progress <= step.progress) || LOADING_STEPS[LOADING_STEPS.length - 1];

  const CurrentActiveIcon = SERVICE_ICONS[activeIconIndex].icon;

  return (
    <div
      role="status"
      aria-label="Loading Hedonic Unisex Salon"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#07080b] text-[#f4efe6] transition-all duration-700 overflow-hidden select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient background gold glow & geometric luxury grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-[#d4af37]/20 via-[#99761a]/10 to-transparent rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        
        {/* Subtle decorative luxury background rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-amber-500/5 animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-dashed border-amber-500/5 animate-[spin_90s_linear_infinite_reverse]" />
      </div>

      {/* Main Loader Content Card */}
      <div className="relative z-10 w-full max-w-lg px-6 sm:px-8 py-8 flex flex-col items-center text-center">
        
        {/* Top "Proud Of Maharajganj" Luxury Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/60 via-[#1e1709] to-amber-950/60 border border-[#d4af37]/40 shadow-lg shadow-amber-950/50 mb-6 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-[#d4af37] animate-bounce" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-amber-300 font-sans">
            Proud of Maharajganj · Siwan · Bihar
          </span>
          <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
        </div>

        {/* Central Royal Animated Emblem / Icon Vortex */}
        <div className="relative mb-6">
          {/* Rotating outer dash ring */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-[#d4af37]/40 animate-[spin_12s_linear_infinite] p-1.5 flex items-center justify-center">
            {/* Inner counter-rotating ring */}
            <div className="w-full h-full rounded-full border border-[#f5de88]/30 animate-[spin_8s_linear_infinite_reverse] p-2 flex items-center justify-center" />
          </div>

          {/* Central Medallion */}
          <div className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#16140b] via-[#241e0f] to-[#121008] border-2 border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center p-2">
            <CurrentActiveIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#f5de88] transition-all duration-300 transform scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="text-[9px] font-bold tracking-widest text-[#d4af37] mt-0.5 uppercase">
              HEDONIC
            </span>
          </div>

          {/* Micro floating stars */}
          <div className="absolute -top-1 left-2 w-2 h-2 rounded-full bg-[#f3e5ab] animate-ping" />
          <div className="absolute bottom-2 -right-1 w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
        </div>

        {/* Brand Name & Typography */}
        <div className="space-y-1 mb-6">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-sm">
            HEDONIC <span className="gold-gradient-text">UNISEX SALON</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-light tracking-wide">
            Royal Beauty Makeovers &bull; Hair Styling &bull; Gents Grooming
          </p>
        </div>

        {/* Interactive 6-Service Icon Bar with Active Glow */}
        <div className="w-full max-w-sm grid grid-cols-6 gap-2 p-2 rounded-2xl bg-[#12131a]/80 border border-zinc-800/80 mb-6 backdrop-blur-sm">
          {SERVICE_ICONS.map((svc, idx) => {
            const Icon = svc.icon;
            const isActive = idx === activeIconIndex;
            return (
              <div
                key={svc.id}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-[#d4af37]/25 to-amber-950/40 border border-[#d4af37] text-[#fbf0b8] scale-105 shadow-md shadow-amber-950/60'
                    : 'text-zinc-500 hover:text-zinc-300 opacity-60'
                }`}
                title={svc.label}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-[#f5de88] animate-pulse' : ''}`} />
              </div>
            );
          })}
        </div>

        {/* Active Service Badge Caption */}
        <div className="h-6 flex items-center justify-center gap-1.5 text-xs text-amber-200/90 font-medium mb-4 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{SERVICE_ICONS[activeIconIndex].label}</span>
          <span className="text-zinc-500 text-[10px]">({SERVICE_ICONS[activeIconIndex].hindi})</span>
        </div>

        {/* Luxury Golden Progress Bar & Tabular Counter */}
        <div className="w-full max-w-xs sm:max-w-sm space-y-2">
          {/* Bar container */}
          <div className="relative h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <div
              className="h-full bg-gradient-to-r from-[#99761a] via-[#d4af37] to-[#fbf0b8] rounded-full transition-all duration-150 ease-out relative shadow-[0_0_12px_rgba(212,175,55,0.8)]"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>

          {/* Progress footer info */}
          <div className="flex justify-between items-center text-[11px] text-zinc-400 font-sans">
            <span className="truncate pr-2 text-zinc-300 font-medium">
              {currentStep.text}
            </span>
            <span className="font-mono tabular-nums text-amber-300 font-semibold shrink-0">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Landmark & Trust Anchor */}
        <div className="mt-7 pt-4 border-t border-zinc-800/60 w-full flex items-center justify-between text-[11px] text-zinc-400">
          <div className="flex items-center gap-1 text-zinc-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>4.4 ★ Google Verified</span>
          </div>

          <div className="flex items-center gap-1 text-zinc-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Sita Complex, Maharajganj</span>
          </div>
        </div>

      </div>
    </div>
  );
};
