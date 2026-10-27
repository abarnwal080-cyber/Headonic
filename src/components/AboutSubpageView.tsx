import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Award, ShieldCheck, Heart, MapPin, Navigation, Phone, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AboutSubpageViewProps {
  onBack: () => void;
  onBookClick: () => void;
}

export const AboutSubpageView: React.FC<AboutSubpageViewProps> = ({ onBack, onBookClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#1a1626] pt-4 pb-20 animate-fadeIn">
      {/* Top Breadcrumbs & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-pink-200/80">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <button
              onClick={onBack}
              className="text-[#8b6508] hover:underline font-semibold cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-zinc-900 font-bold">About Us</span>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-pink-200 hover:border-purple-400 text-zinc-700 text-xs font-semibold transition-all cursor-pointer hover:text-purple-900 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Subpage Hero Header Card */}
        <div className="relative rounded-3xl overflow-hidden border border-pink-200/90 bg-white/85 backdrop-blur-md shadow-2xl p-6 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/90 border border-pink-300 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            About Hedonic Unisex Salon
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight max-w-3xl mx-auto leading-tight">
            Elevating Everyday Beauty & Grooming in Siwan
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-zinc-500 uppercase tracking-widest font-semibold">
            Maharajganj • Siwan • Bihar
          </p>
        </div>

        {/* Narrative & Description Section */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-pink-200/90 shadow-xl shadow-purple-950/5 space-y-6 text-zinc-700 text-sm sm:text-base leading-relaxed">
          <p>
            Hedonic Unisex Salon is a premier beauty and grooming center situated at the heart of Maharajganj, Siwan, Bihar. Located in a prime commercial hotspot on the 1st Floor of Sita Complex (Maharajganj - Duraundha Road, Near Bandhan Bank), we bridge cosmopolitan styling standards with warm, personalized Bihari hospitality.
          </p>

          <p>
            Known for offering a complete range of hair styling, beauty treatments, and makeup services for both men and women. Whether you need a royal bridal makeover with high-definition pigments, an executive beard trim with an authentic hot towel finish, or advanced hair smoothing treatments, our certified stylists and makeup artists ensure every visit leaves you rejuvenated and confident.
          </p>
        </div>

        {/* The 4 Core Pillars Grid */}
        <div>
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
              Our Core Standards & Distinctions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Why clients across Siwan trust Hedonic Unisex Salon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Pillar 1 */}
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-pink-200/90 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100/90 border border-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-6 h-6 text-[#8b6508]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base sm:text-lg text-zinc-900">
                  100% Certified Artists
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Diploma-trained hair stylists and makeup professionals with bridal expertise.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-pink-200/90 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/90 border border-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base sm:text-lg text-zinc-900">
                  Strict Hygiene & Sterilization
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Fresh single-use disposable sheets, sanitized razor blades, and hospital-grade salon safety.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-pink-200/90 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100/90 border border-purple-300 flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-6 h-6 text-purple-700" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base sm:text-lg text-zinc-900">
                  100% Authentic Branded Products
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Exclusively using certified brands: L’Oréal Professional, Matrix, MAC, O3+, and Kryolan.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-pink-200/90 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100/90 border border-pink-300 flex items-center justify-center shrink-0 shadow-xs">
                <Heart className="w-6 h-6 text-pink-700" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base sm:text-lg text-zinc-900">
                  Unisex Comfort & Complete Privacy
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Dedicated private bridal suite and facial chambers for women, plus a comfortable modern lounge for men.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Directions Box */}
        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-white border border-pink-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center shrink-0 shadow-xs mt-1">
              <MapPin className="w-6 h-6 text-pink-600" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-zinc-900">
                1st Floor, Sita Complex (Opp. Bandhan Bank, Maharajganj)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600">
                Maharajganj - Duraundha Road, Sihauta Bazar, Siwan, Bihar - 841238
              </p>
              <p className="text-xs text-zinc-500 font-medium pt-1">
                Open Daily: 9:00 AM – 9:00 PM (Monday through Sunday)
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Our Mission & Philosophy */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-200/90 shadow-md space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900">
            Our Mission
          </h3>
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
            Our mission is to bring metro-grade aesthetic excellence, uncompromising sterile hygiene, and luxury salon comforts directly to the residents of Maharajganj and Siwan. We believe luxury beauty services should be transparent, respectful, and accessible with genuine products and certified artistry.
          </p>
        </div>

        {/* CTA Bottom Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-100/70 via-purple-100/70 to-pink-50 border border-pink-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">
              Ready for Your Next Look?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Book online today or call our salon reception at Sita Complex.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onBookClick}
              className="px-6 py-3 rounded-full bg-[#d4af37] text-black font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="px-5 py-3 rounded-full border border-pink-300 bg-white text-zinc-700 hover:text-purple-900 hover:border-purple-400 font-semibold text-xs sm:text-sm cursor-pointer shadow-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#8b6508]" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
