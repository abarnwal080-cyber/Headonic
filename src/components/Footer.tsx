import React from 'react';
import { MapPin, Phone, Instagram, Clock, Star, Sparkles, Heart, Navigation, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onBookClick: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onBookClick, onReplayIntro }) => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-pink-200/80 text-zinc-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-pink-200/70">
          
          {/* Col 1 & 2: Brand Story & Trust Badges */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SALON_INFO.logoUrl}
                alt="Hedonic Unisex Salon Logo"
                className="w-10 h-10 rounded-full shadow-sm object-cover border border-amber-200"
              />
              <div>
                <span className="font-serif text-xl font-bold text-zinc-900 block">
                  Hedonic <span className="gold-gradient-text">Unisex Salon</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-zinc-500">
                  Maharajganj, Siwan, Bihar
                </span>
              </div>
            </div>

            <p className="text-zinc-600 leading-relaxed pr-4 text-xs">
              Premier beauty, bridal, and grooming center in Maharajganj, Siwan. Certified hair styling, HD bridal transformations, facial aesthetics, and classic barbershop shaves for both ladies and gentlemen.
            </p>

            {/* Badges in footer */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={() => onNavClick('review-social')}
                className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-900 hover:bg-amber-500/25 border border-amber-300 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs cursor-pointer transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                5/5 Rating on Google
              </button>
              <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-900 border border-purple-200 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                1k+ Happy Clients
              </span>
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-pink-100 text-pink-900 hover:bg-pink-200 border border-pink-200 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                500+ Insta Fam
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-zinc-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  About Us & Hygiene
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  All Services (Female & Male)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('gallery')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('videos')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Instagram Reels & Videos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('reviews')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Customer Reviews (5/5★)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('review-social')}
                  className="hover:text-[#d4af37] text-amber-700 font-semibold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  Rate & Review Us (Google / Insta)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-zinc-900 uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2 text-zinc-600">
              <li>• HD & Airbrush Bridal Makeup</li>
              <li>• Keratin & Protein Smoothening</li>
              <li>• Hydrafacial & Diamond Facials</li>
              <li>• Men’s Fade Haircut & Styling</li>
              <li>• Hot Towel Classic Shave</li>
              <li>• Ayurvedic Champi Head Massage</li>
              <li>• Chocolate & Rica Body Waxing</li>
              <li>• Saree & Lehenga Draping</li>
            </ul>
          </div>

          {/* Col 5: Contact & Timings */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-zinc-900 uppercase tracking-wider">
              Salon Location & Hours
            </h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2 text-zinc-700">
                <MapPin className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <span>
                  1st Floor, Sita Complex, Maharajganj - Duraundha Rd, Near Reliance Trends Mart, Sihauta Bazar, Siwan, Bihar - 841238
                </span>
              </p>

              <p className="flex items-center gap-2 text-zinc-700">
                <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                <a href={`tel:${SALON_INFO.phoneClean}`} className="hover:text-purple-800 font-semibold">
                  {SALON_INFO.mobile}
                </a>
              </p>

              <p className="flex items-center gap-2 text-zinc-700">
                <Clock className="w-4 h-4 text-pink-600 shrink-0" />
                <span>9:00 AM – 9:00 PM (All 7 Days)</span>
              </p>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={SALON_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-pink-100 hover:bg-pink-600 hover:text-white text-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-700 transition-colors"
                  aria-label="Google Maps"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Hedonic Unisex Salon. All rights reserved. Maharajganj, Siwan, Bihar.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-zinc-600 font-medium">Certified Unisex Beauty Parlour</span>
            <span>•</span>
            {onReplayIntro && (
              <>
                <button
                  onClick={onReplayIntro}
                  className="text-purple-700 hover:text-purple-900 font-medium transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-pink-600" />
                  <span>Replay Intro</span>
                </button>
                <span>•</span>
              </>
            )}
            <button onClick={onBookClick} className="text-[#8b6508] font-bold hover:underline cursor-pointer">
              Book Appointment Now
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
