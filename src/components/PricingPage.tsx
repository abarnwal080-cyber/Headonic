import React, { useState, useEffect } from 'react';
import { FEMALE_PRICING, MALE_PRICING } from '../data/pricingData';
import { ChevronUp, ChevronDown, Check, Phone, Calendar, Sparkles, AlertCircle } from 'lucide-react';

interface PricingPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBooking }) => {
  const [activeGender, setActiveGender] = useState<'female' | 'male'>('female');
  const [expandedPackages, setExpandedPackages] = useState<Record<string, boolean>>({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeCategories = activeGender === 'female' ? FEMALE_PRICING : MALE_PRICING;

  const togglePackage = (id: string) => {
    setExpandedPackages((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToCategory = (catId: string) => {
    const el = document.getElementById(catId);
    if (el) {
      const offset = 140; // top offset for header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatCurrency = (val?: number) => {
    if (val === undefined || val === null) return '';
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="w-full bg-white text-[#222222] min-h-screen pb-20 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER TITLE SECTION */}
        <div className="text-center my-6 md:my-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B89A60]/30 bg-[#B89A60]/5 text-[#A67C36] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#B89A60]" />
            Transparent & Honest Pricing
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight mb-2">
            PRICING & SERVICE MENU
          </h1>
          <p className="text-sm sm:text-base text-[#707070] max-w-2xl mx-auto font-normal mb-6">
            Explore our complete range of female and male beauty, makeup, hair and grooming services with transparent rate cards.
          </p>

          {/* RECOMMENDED FAMOUS SERVICE QUICK SUGGESTIONS */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-50/60 via-amber-100/40 to-amber-50/60 p-4 rounded-2xl border border-amber-200/70 shadow-xs mb-4 text-center">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#A67C36] mb-2.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B89A60]" />
              Popular Recommended Services (Click to view rates)
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { label: '👰 Bridal & Pre-Wedding Makeover', gender: 'female', catId: 'f-bridal' },
                { label: '💇‍♀️ Hair Smoothening & Keratin', gender: 'female', catId: 'f-hair' },
                { label: '✨ Hydrafacial & Skin Care', gender: 'female', catId: 'f-skin' },
                { label: '💈 Men Haircut & Fade', gender: 'male', catId: 'm-hair' },
                { label: '🧔 Beard Spa & Hot Towel', gender: 'male', catId: 'm-beard' },
                { label: '🌸 Cleanups & D-Tan', gender: 'female', catId: 'f-bleach' },
                { label: '💆‍♂️ Men Facial & D-Tan Care', gender: 'male', catId: 'm-skin' },
                { label: '💅 Waxing & Threading', gender: 'female', catId: 'f-beauty' },
              ].map((rec, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveGender(rec.gender as 'female' | 'male');
                    setTimeout(() => scrollToCategory(rec.catId), 100);
                  }}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#222222] border border-amber-300 hover:border-[#B89A60] hover:bg-amber-400 hover:text-zinc-950 transition-all shadow-xs cursor-pointer transform hover:scale-105"
                >
                  {rec.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* STICKY GENDER TABS & CATEGORY SHORTCUT NAVIGATION */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md pt-2 pb-4 mb-8 border-b border-[#EEEEEE] shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            
            {/* FEMALE / MALE TABS */}
            <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-[#EEEEEE] w-full sm:w-auto">
              <button
                onClick={() => setActiveGender('female')}
                className={`flex-1 sm:flex-initial px-8 py-2.5 rounded-lg text-sm sm:text-base font-bold transition-all duration-200 ${
                  activeGender === 'female'
                    ? 'bg-[#B89A60] text-white shadow-md'
                    : 'text-[#707070] hover:text-[#222222]'
                }`}
              >
                Female Services
              </button>
              <button
                onClick={() => setActiveGender('male')}
                className={`flex-1 sm:flex-initial px-8 py-2.5 rounded-lg text-sm sm:text-base font-bold transition-all duration-200 ${
                  activeGender === 'male'
                    ? 'bg-[#B89A60] text-white shadow-md'
                    : 'text-[#707070] hover:text-[#222222]'
                }`}
              >
                Male Services
              </button>
            </div>
          </div>

          {/* CATEGORY SHORTCUT NAVIGATION */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pt-3 max-w-4xl mx-auto px-1">
            <span className="text-xs font-semibold text-[#707070] uppercase tracking-wider shrink-0 mr-1">
              Jump to:
            </span>
            {activeCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="shrink-0 px-3 py-1 rounded-full text-xs font-medium border border-[#EEEEEE] bg-white text-[#222222] hover:border-[#B89A60] hover:text-[#A67C36] transition-colors shadow-xs"
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* CATEGORY CARDS CONTAINER */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {activeCategories.map((category) => {
            const hasFailed = imageErrorMap[category.id];
            const imgSrc = hasFailed ? category.image.fallbackUrl : category.image.url;

              return (
                <div
                  id={category.id}
                  key={category.id}
                  className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  {/* CATEGORY HEADER */}
                  <div className="p-5 sm:p-6 border-b border-[#EEEEEE] bg-gray-50/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* CIRCULAR CATEGORY THUMBNAIL */}
                    <div className="relative shrink-0">
                      <img
                        src={imgSrc}
                        alt={category.image.alt}
                        onError={() => setImageErrorMap((prev) => ({ ...prev, [category.id]: true }))}
                        className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#B89A60]/30 shadow-sm"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#707070] mt-1 font-normal leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenBooking(category.title)}
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#B89A60] text-[#A67C36] hover:bg-[#B89A60] hover:text-white text-xs font-bold transition-all shrink-0"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book Category
                    </button>
                  </div>

                  {/* SERVICES LIST */}
                  <div className="divide-y divide-[#EEEEEE]">
                    {category.services.map((service) => {
                      const isExpanded = expandedPackages[service.id];
                      const hasInclusions = service.inclusions && service.inclusions.length > 0;

                      return (
                        <div key={service.id} className="p-4 sm:p-5 hover:bg-gray-50/30 transition-colors">
                          <div className="flex items-start justify-between gap-4">
                            
                            {/* LEFT COLUMN: SERVICE NAME & DETAILS */}
                            <div className="flex-1 pr-2">
                              <h3 className="text-sm sm:text-base font-bold text-[#222222] leading-snug">
                                {service.name}
                              </h3>

                              {/* NOT AVAILABLE TAG OR INCLUSION EXPANDER */}
                              {service.isNotAvailable ? (
                                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-500">
                                  <AlertCircle className="w-3.5 h-3.5 text-gray-400" />
                                  {service.notAvailableText || 'Not Available'}
                                </div>
                              ) : (
                                hasInclusions && (
                                  <button
                                    onClick={() => togglePackage(service.id)}
                                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#A67C36] hover:text-[#B89A60] transition-colors"
                                  >
                                    {isExpanded ? (
                                      <>
                                        Hide Package Details <ChevronUp className="w-3.5 h-3.5" />
                                      </>
                                    ) : (
                                      <>
                                        View Package Details ({service.inclusions?.length} items) <ChevronDown className="w-3.5 h-3.5" />
                                      </>
                                    )}
                                  </button>
                                )
                              )}
                            </div>

                            {/* RIGHT COLUMN: PRICE DISPLAY */}
                            {!service.isNotAvailable && (
                              <div className="text-right whitespace-nowrap shrink-0">
                                <div className="flex items-baseline justify-end gap-2">
                                  {service.originalPrice && (
                                    <span className="text-xs sm:text-sm line-through text-[#707070] font-normal">
                                      {formatCurrency(service.originalPrice)}
                                    </span>
                                  )}
                                  <span className="text-base sm:text-lg font-extrabold text-[#A67C36]">
                                    {formatCurrency(service.offerPrice)}
                                  </span>
                                </div>

                                <button
                                  onClick={() => onOpenBooking(service.name)}
                                  className="mt-1.5 inline-block text-[11px] font-bold text-[#B89A60] hover:underline"
                                >
                                  Book This
                                </button>
                              </div>
                            )}
                          </div>

                          {/* EXPANDABLE INCLUSIONS BOX */}
                          {hasInclusions && isExpanded && !service.isNotAvailable && (
                            <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-[#EEEEEE] text-xs sm:text-sm text-[#222222]">
                              <div className="font-bold text-[#A67C36] uppercase tracking-wider text-[11px] mb-2">
                                Package Inclusions:
                              </div>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {service.inclusions?.map((inc, i) => (
                                  <li key={i} className="flex items-start gap-2 text-[#222222]">
                                    <Check className="w-4 h-4 text-[#B89A60] shrink-0 mt-0.5" />
                                    <span>{inc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

        {/* BOTTOM BOOKING CALLOUT BANNER */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl border border-[#EEEEEE] bg-gradient-to-r from-gray-50 via-white to-gray-50 p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-[#222222] mb-2">Ready for a Rejuvenating Salon Experience?</h3>
          <p className="text-sm text-[#707070] mb-6 max-w-xl mx-auto">
            Visit Hedonic Unisex Salon at 1st Floor, Sita Complex (Opp. Bandhan Bank), Maharajganj.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-[#B89A60] text-white text-sm font-bold shadow-md hover:bg-[#A67C36] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment Now
            </button>
            <a
              href="tel:919934661858"
              className="px-6 py-3 rounded-xl border border-[#EEEEEE] bg-white text-[#222222] hover:border-[#B89A60] hover:text-[#A67C36] text-sm font-bold transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B89A60]" />
              Call Salon Direct
            </a>
          </div>
        </div>

      </div>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#222222] text-white shadow-lg hover:bg-[#B89A60] transition-all transform hover:scale-105 border border-white/20"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
