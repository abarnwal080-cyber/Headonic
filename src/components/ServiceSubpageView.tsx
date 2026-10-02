import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Sparkles, CheckCircle2, Phone, Calendar, Image as ImageIcon, MapPin, Share2 } from 'lucide-react';
import { ServiceSubpage } from '../types';
import { SALON_INFO } from '../data/salonData';

interface ServiceSubpageViewProps {
  subpage: ServiceSubpage;
  onBack: () => void;
  onBookService: (serviceName: string) => void;
  onOpenImageModal: (url: string, title: string) => void;
}

export const ServiceSubpageView: React.FC<ServiceSubpageViewProps> = ({
  subpage,
  onBack,
  onBookService,
  onOpenImageModal,
}) => {
  // Scroll to top when subpage opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [subpage.id]);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f4efe6] pt-4 pb-20 animate-fadeIn">
      {/* Breadcrumb & Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <button
              onClick={onBack}
              className="text-[#d4af37] hover:underline font-medium cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={onBack}
              className="hover:text-zinc-200 transition-colors cursor-pointer"
            >
              {subpage.category === 'female' ? 'Female Services' : 'Male Services'}
            </button>
            <span>/</span>
            <span className="text-white font-semibold">{subpage.title}</span>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#d4af37] text-zinc-200 text-xs font-semibold transition-all cursor-pointer hover:text-[#d4af37]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Hero Banner for Subpage */}
        <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-zinc-950 shadow-2xl">
          <div className="relative aspect-[16/7] sm:aspect-[21/8] w-full overflow-hidden">
            <img
              src={subpage.bannerImage}
              alt={subpage.title}
              className="w-full h-full object-cover brightness-75"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/50 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 -mt-20 sm:-mt-24 relative z-10">
            <span
              className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
                subpage.category === 'female'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}
            >
              {subpage.category === 'female' ? 'Female Service Special' : 'Men’s Grooming Special'}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {subpage.title}
            </h1>
            <p className="text-amber-200/90 text-sm sm:text-base font-medium mt-2 max-w-2xl">
              {subpage.headline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onBookService(subpage.title)}
                className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </button>

              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="px-5 sm:px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#d4af37] text-zinc-200 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call +91 70434 32122</span>
              </a>
            </div>
          </div>
        </div>

        {/* Overview & Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-[#13151f] p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              Detailed Service Overview
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {subpage.description}
            </p>
            <div className="pt-2 text-xs text-zinc-400 flex items-center gap-2 border-t border-zinc-800">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Available at 1st Floor, Sita Complex, Maharajganj, Siwan</span>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#13151f] p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl space-y-4">
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider text-xs">
              Why Choose Hedonic for {subpage.title}?
            </h3>
            <div className="space-y-3">
              {subpage.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Itemized Treatments with Pricing & Microcopy */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Treatments & Packages
            </h2>
            <span className="text-xs text-zinc-400">
              {subpage.items.length} options available
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {subpage.items.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#141622] border border-[#26293a] hover:border-[#d4af37]/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-md"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-[#d4af37] transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {item.hinglishDesc && (
                    <p className="text-xs sm:text-sm text-amber-200/90 font-medium italic">
                      "{item.hinglishDesc}"
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.englishDesc}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-zinc-400 pt-1">
                    {item.duration && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        {item.duration}
                      </span>
                    )}
                    {item.startingPrice && (
                      <span className="text-emerald-400 font-bold">
                        Starts at {item.startingPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <button
                    onClick={() => onBookService(`${subpage.title} - ${item.name}`)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Treatment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Showcase Photo Gallery */}
        {subpage.images && subpage.images.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <ImageIcon className="w-6 h-6 text-[#d4af37]" />
                Photo Showcase for {subpage.title}
              </h2>
              <span className="text-xs text-zinc-400">Click to enlarge</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {subpage.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenImageModal(imgUrl, `${subpage.title} - Photo ${idx + 1}`)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-[#d4af37] cursor-pointer shadow-lg"
                >
                  <img
                    src={imgUrl}
                    alt={`${subpage.title} portfolio item ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs text-white font-semibold bg-black/75 px-3 py-1.5 rounded-full border border-zinc-600">
                      View Full Size
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subpage Bottom Action Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-[#181a26] to-amber-950/20 border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-white">
              Ready to experience {subpage.title}?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Book your appointment today or call our reception at Sita Complex for custom queries.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onBookService(subpage.title)}
              className="px-6 py-3 rounded-full bg-[#d4af37] text-black font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              Book Now
            </button>
            <button
              onClick={onBack}
              className="px-5 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-semibold text-xs sm:text-sm cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
