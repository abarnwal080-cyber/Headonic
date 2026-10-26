import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';

interface PremiumLoaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ onComplete, forceShow = false }) => {
  const [progress, setProgress] = useState(0);
  const [isHide, setIsHide] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let value = 0;
    const totalTime = 2400; // 2.4 seconds smooth experience
    const intervalTime = 20;
    const step = 100 / (totalTime / intervalTime);

    const timer = setInterval(() => {
      value += step;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);
        setProgress(100);

        setTimeout(() => {
          setIsHide(true);
          setTimeout(() => {
            setIsMounted(false);
            if (onComplete) onComplete();
          }, 700);
        }, 400);
      } else {
        setProgress(Math.floor(value));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isMounted && !forceShow) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-center items-center bg-white transition-opacity duration-700 ease-out select-none px-4 ${
        isHide ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 45%, #ffffff 0%, #fffbf6 55%, #fff5ea 100%)',
      }}
    >
      {/* Soft Ambient Warm Backdrop Circles */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-orange-100/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-pink-100/30 blur-3xl pointer-events-none -z-10 translate-y-12" />

      <div className="flex flex-col items-center text-center max-w-lg w-full mx-auto relative z-10">
        
        {/* Center Logo in Bigger Size */}
        <div className="relative mb-6">
          {/* Subtle pulsating golden-orange halo */}
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-orange-400/30 via-amber-300/20 to-pink-400/30 blur-md animate-pulse" />
          
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1.5 bg-white shadow-xl shadow-orange-500/10 border-2 border-orange-200/80 flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105">
            <img
              src={SALON_INFO.logoUrl}
              alt="Hedonic Unisex Salon Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Sole Text Required: "Best Unisex Salon of Maharajganj" */}
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-snug mb-8">
          Best Unisex Salon of Maharajganj
        </h1>

        {/* Orange Refill Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm px-2">
          {/* Progress Bar Track */}
          <div className="h-2.5 w-full bg-orange-100/80 rounded-full overflow-hidden p-0.5 border border-orange-200/60 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transition-all duration-75 ease-out shadow-sm shadow-orange-500/50"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Percentage Display */}
          <div className="flex justify-between items-center mt-2.5 px-1 text-xs font-semibold text-orange-600">
            <span className="tracking-wider uppercase text-[11px] text-zinc-400 font-medium">Loading Experience</span>
            <span className="tabular-nums font-bold text-sm text-orange-600">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
