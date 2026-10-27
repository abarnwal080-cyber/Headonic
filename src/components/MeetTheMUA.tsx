import React from 'react';
import { Award, Sparkles, GraduationCap, CheckCircle2, Calendar, Star, Heart, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MeetTheMUAProps {
  onBookClick?: (serviceName?: string) => void;
}

export const MeetTheMUA: React.FC<MeetTheMUAProps> = ({ onBookClick }) => {
  const ownerImage = 'https://plain-apac-prod-public.komododecks.com/202610/27/Kr6ZT1F2wqIig0sB5XiD/image.png';

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-pink-50/30 border-y border-amber-100/60">
      
      {/* Decorative Background Glow Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Badge */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 via-amber-50 to-pink-100 border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs mb-3">
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>Master Makeup Artist &amp; Founder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Meet the MUA <span className="text-amber-800 font-normal">( Owner )</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-pink-400 to-amber-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white rounded-3xl border-2 border-amber-200/80 shadow-xl shadow-amber-900/5 overflow-hidden lg:grid lg:grid-cols-12 lg:items-center relative">
          
          {/* Decorative Corner Ribbon */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-10">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>10+ Years Experience</span>
          </div>

          {/* Left Column: Owner Portrait Image */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex justify-center bg-gradient-to-b from-amber-50/50 to-pink-50/30">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Outer Golden Glow Border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-300 to-pink-400 opacity-60 blur-md group-hover:opacity-90 transition-all duration-300" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-amber-300 shadow-2xl aspect-[3/4]">
                <img
                  src={ownerImage}
                  alt="Mr. Amarjeet Kumar - Founder & Master MUA"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Name Tag on Mobile */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <p className="font-serif text-xl font-bold text-amber-200">Mr. Amarjeet Kumar</p>
                  <p className="text-xs text-zinc-200 font-medium">Founder &amp; Certified Celebrity MUA</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Achievements */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:pl-4 flex flex-col justify-between">
            
            <div>
              {/* Name & Title */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
                  Certified Master Stylist &amp; Educator
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mt-3">
                  Mr. Amarjeet Kumar
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 font-medium mt-1">
                  Founder &amp; Lead Artist at Hedonic Unisex Salon, Maharajganj
                </p>
              </div>

              {/* Bio Paragraph */}
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                With over a decade of mastery in royal Indian bridal makeovers, HD skin techniques, and precision hair artistry, <strong className="text-zinc-900 font-semibold">Mr. Amarjeet Kumar</strong> has established Hedonic Unisex Salon as Maharajganj&apos;s premier beauty and grooming destination. Passionate about bringing international standards to Siwan, he personally oversees all signature bridal makeup, advanced keratin treatments, and skin consultations.
              </p>

              {/* Key Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* Stat 1: Experience */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-zinc-900">10+ Years Experience</h4>
                    <p className="text-xs text-zinc-600">Deep expertise in bridal HD makeup &amp; styling</p>
                  </div>
                </div>

                {/* Stat 2: Students Trained */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200/80">
                  <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-zinc-900">200+ Students Trained</h4>
                    <p className="text-xs text-zinc-600">Certified instructor for aspiring MUAs</p>
                  </div>
                </div>

                {/* Stat 3: Certified Professional */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-zinc-900">100% Certified</h4>
                    <p className="text-xs text-zinc-600">Trained in L’Oréal, MAC &amp; Kryolan techniques</p>
                  </div>
                </div>

                {/* Stat 4: Happy Clients */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200/80">
                  <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-zinc-900">1000+ Happy Brides</h4>
                    <p className="text-xs text-zinc-600">Trusted for weddings across Siwan &amp; Maharajganj</p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTAs & Direct Owner Consultation */}
            <div className="pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onBookClick?.('Consultation with Mr. Amarjeet Kumar')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-sm shadow-md shadow-amber-500/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Bridal / MUA Consultation</span>
              </button>

              <a
                href={SALON_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
