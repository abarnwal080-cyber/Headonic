import React, { useState } from 'react';
import { Phone, Menu, X, Tag } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBookClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing & Rate Card 🏷️' },
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
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm transition-all">
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
                className="w-11 h-11 rounded-full shadow-md group-hover:scale-105 transition-transform object-cover border-2 border-amber-400"
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
              {navItems.map((item) => {
                const isPricing = item.id === 'pricing';
                const isActive = activeTab === item.id;

                if (isPricing) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className="ml-1 px-4 py-2 rounded-full text-xs xl:text-sm font-extrabold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 shadow-md hover:shadow-lg border-2 border-amber-500 hover:brightness-105 transition-all transform hover:scale-105 flex items-center gap-1.5 cursor-pointer ring-2 ring-amber-300/40 animate-pulse"
                    >
                      <Tag className="w-3.5 h-3.5 text-zinc-950" />
                      <span>Pricing & Rates</span>
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-amber-900 bg-amber-50 border border-amber-300'
                        : 'text-zinc-700 hover:text-amber-900 hover:bg-amber-50/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => handleNav('pricing')}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-full border border-amber-500 shadow-sm transition-all cursor-pointer"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Rates Card</span>
              </button>

              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-700 border border-gray-200 bg-white rounded-full hover:border-amber-400 hover:text-amber-900 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => handleNav('pricing')}
                className="px-3 py-1.5 text-xs font-extrabold rounded-full bg-amber-400 text-zinc-950 flex items-center gap-1 border border-amber-500 shadow-sm"
              >
                <Tag className="w-3 h-3 text-zinc-950" />
                <span>Pricing</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-700 hover:text-zinc-900 rounded-lg hover:bg-gray-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
              {navItems.map((item) => {
                const isPricing = item.id === 'pricing';
                const isActive = activeTab === item.id;

                if (isPricing) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className="col-span-2 text-left px-4 py-3 rounded-xl text-sm font-extrabold bg-amber-400 text-zinc-950 border-2 border-amber-500 shadow-md flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-zinc-950" />
                        Pricing & Service Menu
                      </span>
                      <span className="text-xs bg-zinc-950 text-amber-300 px-2 py-0.5 rounded-full uppercase font-bold">
                        View Rates
                      </span>
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-amber-900 border border-amber-300 font-semibold'
                        : 'text-zinc-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="w-full py-2.5 px-4 text-center rounded-xl border border-gray-200 text-zinc-700 font-medium text-sm flex items-center justify-center gap-2 hover:border-amber-400 bg-white"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                Call +91 70434 32122
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
