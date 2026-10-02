import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, MapPin, Instagram, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'videos', label: 'Videos' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#12131a] border-b border-[#232530] text-xs py-1.5 px-4 text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Sita Complex, Maharajganj, Siwan (Near Reliance Trends Mart)
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              9:00 AM – 9:00 PM (All 7 Days)
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="inline-flex items-center gap-1 text-zinc-300 font-semibold">
              <span className="text-[#d4af37]">★ 4.4</span> on Google
            </span>
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">500+ Family</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header className="sticky top-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#252833] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#99761a] via-[#d4af37] to-[#fbf0b8] p-[1.5px] shadow-lg shadow-amber-950/40">
                <div className="w-full h-full rounded-full bg-[#0d0f14] flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-[#d4af37] tracking-wider group-hover:scale-105 transition-transform">
                    H
                  </span>
                </div>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
                  Hedonic <span className="gold-gradient-text">Unisex Salon</span>
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-400 block -mt-1 font-medium">
                  Maharajganj • Siwan
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'text-[#d4af37] bg-white/5 border border-[#d4af37]/30'
                      : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Header Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-200 border border-zinc-700/80 rounded-full hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onBookClick}
                className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#b88c1b] via-[#d4af37] to-[#e4c45a] text-black shadow-md shadow-amber-900/30 hover:brightness-110 active:scale-95 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onBookClick}
                className="px-2.5 py-1.5 text-xs font-medium rounded-full bg-[#d4af37] text-black flex items-center gap-1"
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d0f14] border-b border-[#252833] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/40'
                      : 'text-zinc-300 hover:bg-zinc-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-[#c69a23] via-[#d4af37] to-[#e4c45a] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Your Slot
              </button>

              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="w-full py-2.5 px-4 text-center rounded-xl border border-zinc-700 text-zinc-200 font-medium text-sm flex items-center justify-center gap-2 hover:border-[#d4af37]"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Call +91 70434 32122
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
