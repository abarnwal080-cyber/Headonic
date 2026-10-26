import React from 'react';
import { ArrowLeft, Star, Instagram, ExternalLink, Heart, Sparkles, MessageCircle, Phone, MapPin, CheckCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface ReviewSocialPageProps {
  onBack: () => void;
  onBookClick?: () => void;
}

export const ReviewSocialPage: React.FC<ReviewSocialPageProps> = ({ onBack, onBookClick }) => {
  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Soft Ambient Warm Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-pink-100/60 via-amber-50/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-200/80 text-zinc-700 hover:text-zinc-950 hover:border-[#d4af37] text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#b8860b]" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* ================= 1. TOP: SALON NAME & LOGO ================= */}
        <div className="text-center mb-10">
          {/* Logo */}
          <div className="inline-block relative mb-4">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-400/30 via-pink-400/25 to-purple-400/25 blur-md" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-white shadow-xl shadow-pink-900/10 border-2 border-[#d4af37]/60 overflow-hidden mx-auto">
              <img
                src={SALON_INFO.logoUrl}
                alt="Hedonic Unisex Salon Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Salon Name */}
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-2">
            Hedonic <span className="gold-gradient-text">Unisex Salon</span>
          </h1>

          {/* Location & Tagline */}
          <p className="text-sm sm:text-base text-zinc-600 font-medium flex items-center justify-center gap-1.5 mb-3">
            <MapPin className="w-4 h-4 text-pink-600 shrink-0" />
            <span>1st Floor, Sita Complex, Maharajganj, Siwan</span>
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span>5.0 / 5 Rating</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-600 font-medium">128+ Verified Reviews</span>
          </div>
        </div>

        {/* Action Cards Container */}
        <div className="space-y-6">

          {/* ================= 2. GIVE REVIEW ON GOOGLE ================= */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-xl shadow-amber-900/5 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-900/10 transition-all">
            <div className="flex items-start gap-4">
              {/* Google G / 5-Star Icon */}
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-200 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                    Official Google Listing
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 leading-tight">
                  Give Review on Google
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Loved your haircut, facial, bridal glam, or grooming? Share your 5-star experience and help Maharajganj choose the best salon.
                </p>
              </div>
            </div>

            {/* Direct Google Review CTA Button */}
            <div className="mt-5 pt-4 border-t border-amber-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
                <span className="text-xs font-bold text-zinc-700 ml-1.5">5.0 Star Rating</span>
              </div>

              <a
                href={SALON_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Write a Review on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* ================= 3. FOLLOW ON INSTAGRAM ================= */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-7 border-2 border-pink-200 shadow-xl shadow-pink-900/5 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-900/10 transition-all">
            <div className="flex items-start gap-4">
              {/* Instagram Gradient Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shrink-0 shadow-md">
                <Instagram className="w-7 h-7" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-0.5 rounded-full">
                    Official Instagram
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 leading-tight">
                  Follow on Instagram
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Join 500+ followers for daily live hair transformations, bridal before &amp; after reels, and exclusive salon discounts.
                </p>
              </div>
            </div>

            {/* Direct Instagram CTA Button */}
            <div className="mt-5 pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-zinc-700">
                <span className="text-xs font-semibold text-pink-600">@hedonicunisexsalon</span>
                <span className="text-xs text-zinc-400">•</span>
                <span className="text-xs font-medium text-zinc-500">500+ Community</span>
              </div>

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#ee2a7b] via-[#e1306c] to-[#c13584] text-white font-bold text-sm shadow-md shadow-pink-500/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4 ml-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Quick Contact & WhatsApp Shortcut */}
        <div className="mt-8 bg-zinc-50/80 rounded-2xl p-5 border border-zinc-200/80 text-center">
          <p className="text-xs font-semibold text-zinc-600 mb-3">
            Want to book an appointment or ask about services?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SALON_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 text-xs font-semibold shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-600" />
              <span>Call +91 70434 32122</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
