import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingCTAsProps {
  onBookClick: () => void;
}

export const FloatingCTAs: React.FC<FloatingCTAsProps> = ({ onBookClick }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= LEFT FLOATING APPOINTMENT BUTTON ================= */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start pointer-events-none">
        <button
          onClick={onBookClick}
          className="pointer-events-auto relative group flex items-center gap-2.5 px-3.5 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-extrabold text-xs sm:text-sm shadow-2xl shadow-amber-950/60 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/40"
          title="Book Appointment"
          aria-label="Book appointment"
        >
          {/* Subtle pulse animation indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-black"></span>
          </span>

          <Calendar className="w-5 h-5 text-black shrink-0 group-hover:rotate-12 transition-transform" />
          <span className="pr-1 tracking-wide">
            Book <span className="hidden sm:inline">Appointment</span>
          </span>
        </button>
      </div>

      {/* ================= RIGHT FLOATING BUTTON (WhatsApp with Authentic Logo & Back to Top) ================= */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-10 h-10 rounded-full bg-zinc-800/90 text-zinc-300 hover:text-white border border-zinc-700/80 shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Button: Icon only as requested */}
        <a
          href={SALON_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-green-950/60 transition-all hover:scale-110 active:scale-95 group border-2 border-white/40"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing online badge */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-100"></span>
          </span>

          {/* Official WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform"
            aria-hidden="true"
          >
            <path d="M12.031 2C6.511 2 2.023 6.48 2.023 11.99c0 1.95.56 3.76 1.53 5.3L2 22l4.88-1.51a9.92 9.92 0 0 0 5.15 1.45c5.52 0 10.01-4.48 10.01-9.99 0-5.51-4.49-9.95-10.009-9.95zm0 18.25c-1.63 0-3.15-.46-4.45-1.25l-.32-.19-3.29 1.02 1.05-3.18-.21-.34a8.17 8.17 0 0 1-1.3-4.32c0-4.55 3.71-8.25 8.27-8.25 4.56 0 8.27 3.7 8.27 8.25 0 4.55-3.71 8.26-8.22 8.26zm4.53-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.21-.18-.46-.31z" />
          </svg>
        </a>

      </div>
    </>
  );
};
