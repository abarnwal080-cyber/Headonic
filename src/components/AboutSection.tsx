import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, MapPin, CheckCircle, Clock, Users, ArrowUpRight, Check } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-transparent border-b border-pink-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#b8860b]" />
            Our Heritage & Standards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            About Hedonic Unisex Salon
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            The landmark destination in Maharajganj, Siwan for contemporary hair craft, certified bridal transformations, and relaxing unisex self-care rituals.
          </p>
        </div>

        {/* Story Card (without the duplicate exterior/interior images below this section) */}
        <div className="bg-white/85 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-pink-200/80 shadow-xl shadow-purple-900/5 space-y-6 mb-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
            Elevating Everyday Beauty & Grooming in Siwan
          </h3>
          
          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
            <strong className="text-zinc-900 font-semibold">Hedonic Unisex Salon</strong> is a premier beauty and grooming center situated at the heart of Maharajganj, Siwan, Bihar. Located in a prime commercial hotspot on the 1st Floor of Sita Complex (Maharajganj - Duraundha Road, Near Bandhan Bank), we bridge cosmopolitan styling standards with warm, personalized Bihari hospitality.
          </p>

          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            Known for offering a complete range of hair styling, beauty treatments, and makeup services for both men and women. Whether you need a royal bridal makeover with high-definition pigments, an executive beard trim with an authentic hot towel finish, or advanced hair smoothing treatments, our certified stylists and makeup artists ensure every visit leaves you rejuvenated and confident.
          </p>

          {/* Core Quality Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-pink-100">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 text-xs text-zinc-700 shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-900 block font-semibold mb-0.5">100% Certified Artists</strong>
                Diploma-trained hair stylists and makeup professionals with bridal expertise.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 text-xs text-zinc-700 shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-900 block font-semibold mb-0.5">Strict Hygiene & Sterilization</strong>
                Fresh single-use disposable sheets, sanitized razor blades, and hospital-grade salon safety.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 text-xs text-zinc-700 shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-900 block font-semibold mb-0.5">100% Authentic Branded Products</strong>
                Exclusively using certified brands: L’Oréal Professional, Matrix, MAC, O3+, and Kryolan.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 text-xs text-zinc-700 shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-900 block font-semibold mb-0.5">Unisex Comfort & Complete Privacy</strong>
                Dedicated private bridal suite and facial chambers for women, plus a comfortable modern lounge for men.
              </div>
            </div>
          </div>

          {/* Location Cue */}
          <div className="pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-zinc-600 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#b8860b]" />
              1st Floor, Sita Complex (Opp. Bandhan Bank, Maharajganj)
            </span>
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b6508] font-bold hover:underline inline-flex items-center gap-1"
            >
              Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-200/70 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-200 flex items-center justify-center">
              <Heart className="w-5 h-5 text-rose-500" />
            </div>
            <h4 className="font-serif text-lg font-bold text-zinc-900">Our Mission</h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              To deliver world-class salon experiences and personalized aesthetic services in Maharajganj, making luxury grooming accessible, hygienic, and affordable for every client.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-200/70 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-serif text-lg font-bold text-zinc-900">Our Vision</h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              To be the gold-standard beauty salon across the entire Siwan and Saran division, recognized for unrivaled bridal artistry, precision barbering, and client trust.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-200/70 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#b8860b]" />
            </div>
            <h4 className="font-serif text-lg font-bold text-zinc-900">Hygiene Promise</h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              We practice strict sanitization protocols: fresh single-use towels, sterilized razor holders, UV disinfection boxes, and hospital-grade salon sanitizers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
