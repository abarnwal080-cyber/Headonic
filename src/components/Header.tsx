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
    { id: 'review-social', label: 'Rate & Review' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main sticky navigation header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-pink-200/50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <img
                src={SALON_INFO.logoUrl}
                alt="Hedonic Unisex Salon Logo"
                className="w-11 h-11 rounded-full shadow-md shadow-pink-900/10 group-hover:scale-105 transition-transform object-cover border border-amber-200"
              />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 block">
                  Hedonic <span className="gold-gradient-text">Unisex Salon</span>
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-500 block -mt-1 font-medium">
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
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'text-[#8b6508] bg-pink-100/70 border border-[#d4af37]/50 font-semibold'
                      : 'text-zinc-700 hover:text-purple-900 hover:bg-pink-50/60'
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
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-700 border border-pink-200 bg-white/80 rounded-full hover:border-[#d4af37] hover:text-[#8b6508] transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onBookClick}
                className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#b88c1b] via-[#d4af37] to-[#e4c45a] text-black shadow-md shadow-amber-900/20 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onBookClick}
                className="px-2.5 py-1.5 text-xs font-medium rounded-full bg-[#d4af37] text-black flex items-center gap-1 font-semibold"
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-700 hover:text-zinc-900 rounded-lg hover:bg-pink-50"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-pink-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-pink-100/80 text-[#8b6508] border border-[#d4af37]/40 font-semibold'
                      : 'text-zinc-700 hover:bg-pink-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-pink-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-[#c69a23] via-[#d4af37] to-[#e4c45a] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book Your Slot
              </button>

              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="w-full py-2.5 px-4 text-center rounded-xl border border-pink-200 text-zinc-700 font-medium text-sm flex items-center justify-center gap-2 hover:border-[#d4af37] bg-white/80"
              >
                <Phone className="w-4 h-4 text-[#b8860b]" />
                Call +91 70434 32122
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
