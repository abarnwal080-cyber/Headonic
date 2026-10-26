import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Eye, X, ChevronLeft, ChevronRight, Calendar, Layers, Image as ImageIcon } from 'lucide-react';
import { ALL_GALLERY_IMAGES } from '../data/salonData';
import { GalleryImage } from '../types';

interface GallerySubpageViewProps {
  onBack: () => void;
  onBookClick: (prefillNote?: string) => void;
}

export const GallerySubpageView: React.FC<GallerySubpageViewProps> = ({ onBack, onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'bridal', label: 'Bridal Makeup' },
    { id: 'party', label: 'Party Makeup' },
    { id: 'female-hair', label: 'Female Hair' },
    { id: 'male-hair', label: 'Male Hair & Fades' },
    { id: 'beard', label: 'Beard Grooming' },
    { id: 'skincare', label: 'Face & Skin Care' },
    { id: 'ambiance', label: 'Salon Views' },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? ALL_GALLERY_IMAGES
      : ALL_GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

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
            <span className="text-zinc-900 font-bold">Photo Gallery</span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/90 border border-pink-300 text-pink-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            Hedonic Portfolio Showcase
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Full Salon Photo Gallery
          </h1>
          <p className="text-zinc-600 text-xs sm:text-sm">
            Explore authentic transformations from our bridal artists, hairstylists, and grooming specialists in Maharajganj, Siwan.
          </p>
        </div>

        {/* Category Filter Pills with vibrant active state */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black shadow-md shadow-amber-900/15 scale-105'
                  : 'bg-white/90 text-zinc-700 hover:text-purple-900 border border-pink-200/90 hover:border-purple-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white/90 border border-pink-200/90 hover:border-[#d4af37] cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5">
                <span className="text-white text-xs font-bold line-clamp-1">
                  {img.title}
                </span>
                <span className="text-[11px] text-amber-300 flex items-center gap-1 mt-1 font-medium">
                  <Eye className="w-3.5 h-3.5" /> Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-50 via-purple-50 to-white border border-pink-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left mt-8">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">
              Inspired by Our Work?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Book your customized session or royal bridal makeover at Hedonic Unisex Salon today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onBookClick('From Full Gallery View')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={onBack}
              className="px-5 py-3 rounded-full border border-pink-300 bg-white text-zinc-700 hover:text-purple-900 hover:border-purple-400 font-semibold text-xs sm:text-sm cursor-pointer shadow-xs"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-zinc-950 border border-pink-300/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                  {filteredImages[lightboxIndex].title}
                </h4>
                <span className="text-xs text-amber-400 font-medium capitalize">
                  {filteredImages[lightboxIndex].category} • Photo {lightboxIndex + 1} of {filteredImages.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 border border-zinc-700 text-white hover:text-[#d4af37] hover:border-[#d4af37] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 border border-zinc-700 text-white hover:text-[#d4af37] hover:border-[#d4af37] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer with Direct Book Call to Action */}
            <div className="p-4 bg-zinc-900/90 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-zinc-400">
                Hedonic Unisex Salon, Sita Complex Maharajganj, Siwan
              </span>

              <button
                onClick={() => {
                  const title = filteredImages[lightboxIndex].title;
                  setLightboxIndex(null);
                  onBookClick(`Book look like: ${title}`);
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#b78b1a] via-[#d4af37] to-[#e4c45a] text-black font-bold text-xs shadow hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Get This Look</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
