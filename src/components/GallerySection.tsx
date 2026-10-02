import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Calendar, Grid, Play, Pause, Layers } from 'lucide-react';
import { ALL_GALLERY_IMAGES } from '../data/salonData';
import { GalleryImage } from '../types';

interface GallerySectionProps {
  onBookClick: (prefillNote?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookClick }) => {
  // Mode: 'carousel' (very small frames carousel) or 'full' (full grid view)
  const [viewMode, setViewMode] = useState<'carousel' | 'full'>('carousel');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Carousel state
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  // Auto-slide carousel for very small frames (every 2.5s)
  useEffect(() => {
    if (viewMode !== 'carousel' || isPaused || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % ALL_GALLERY_IMAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [viewMode, isPaused, lightboxIndex]);

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + ALL_GALLERY_IMAGES.length) % ALL_GALLERY_IMAGES.length);
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % ALL_GALLERY_IMAGES.length);
  };

  // Lightbox handlers
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

  const currentImage: GalleryImage | null =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0b0c10] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio & Salon Moments
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Our Work Gallery
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Real clients, precision fades, royal bridal makeovers, and luxury salon interior in Maharajganj.
          </p>

          {/* VIEW SWITCH TABS (Carousel in Very Small Frames vs Full Gallery) */}
          <div className="mt-6 inline-flex p-1 rounded-full bg-[#151722] border border-zinc-800 shadow-xl">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-gradient-to-r from-[#b78b1a] to-[#d4af37] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Small Frames Carousel</span>
            </button>

            <button
              onClick={() => setViewMode('full')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'full'
                  ? 'bg-gradient-to-r from-[#b78b1a] to-[#d4af37] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Click to View Full Gallery</span>
            </button>
          </div>
        </div>

        {/* ================= OPTION 1: VERY SMALL FRAMES CAROUSEL ================= */}
        {viewMode === 'carousel' && (
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="space-y-6 animate-fadeIn"
          >
            {/* Auto-sliding Carousel of Very Small Frames */}
            <div className="relative bg-[#12141c] border border-zinc-800/80 rounded-3xl p-4 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-xs text-zinc-400 font-medium">
                  Auto-sliding Miniature Showcase ({ALL_GALLERY_IMAGES.length} Photos)
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevCarousel}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextCarousel}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="text-[11px] text-zinc-400 hover:text-white px-2 py-1 flex items-center gap-1 ml-1"
                  >
                    {isPaused ? <Play className="w-3 h-3 text-[#d4af37]" /> : <Pause className="w-3 h-3" />}
                    <span>{isPaused ? 'Resume' : 'Pause'}</span>
                  </button>
                </div>
              </div>

              {/* Horizontal Multi-Card Track with Very Small Frames */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5 sm:gap-3 overflow-hidden">
                {Array.from({ length: 8 }).map((_, slotIdx) => {
                  const imgIdx = (carouselIndex + slotIdx) % ALL_GALLERY_IMAGES.length;
                  const img = ALL_GALLERY_IMAGES[imgIdx];
                  return (
                    <div
                      key={`${img.id}-${slotIdx}`}
                      onClick={() => {
                        setSelectedCategory('all');
                        setLightboxIndex(imgIdx);
                      }}
                      className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-[#d4af37] cursor-pointer transition-all duration-300 hover:scale-105 shadow-md"
                      title={img.title}
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Feature highlight for active miniature */}
              <div className="mt-4 pt-3 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-zinc-300">
                  Currently focused:{' '}
                  <strong className="text-[#d4af37]">
                    {ALL_GALLERY_IMAGES[carouselIndex]?.title}
                  </strong>
                </span>

                <button
                  onClick={() => setViewMode('full')}
                  className="px-4 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] font-semibold hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Click to View Full Gallery</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= OPTION 2: FULL GRID GALLERY VIEW ================= */}
        {viewMode === 'full' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#d4af37] text-black shadow-lg shadow-amber-950/40'
                      : 'bg-[#151722] text-zinc-400 hover:text-white border border-[#252835]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredImages.map((img, index) => (
                <div
                  key={img.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-[#d4af37] cursor-pointer transition-all duration-300 shadow-md"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <span className="text-white text-xs font-semibold line-clamp-1">
                      {img.title}
                    </span>
                    <span className="text-[10px] text-[#d4af37] flex items-center gap-1 mt-0.5">
                      <Eye className="w-3 h-3" /> Click to enlarge
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setViewMode('carousel')}
                className="text-xs text-zinc-400 hover:text-white underline"
              >
                Switch back to compact carousel
              </button>
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {currentImage && (
          <div
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#12141c] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Top Controls */}
              <div className="p-4 bg-[#0d0f15] border-b border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                    {currentImage.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400">{currentImage.alt}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const note = `I liked the photo "${currentImage.title}" in your gallery!`;
                      setLightboxIndex(null);
                      onBookClick(note);
                    }}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4af37] text-black text-xs font-semibold hover:brightness-110 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book This Look
                  </button>

                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Frame with Nav Buttons */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px] p-2">
                <img
                  src={currentImage.url}
                  alt={currentImage.alt}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
                />

                <button
                  onClick={handlePrevLightbox}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white border border-zinc-700 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center cursor-pointer transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextLightbox}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white border border-zinc-700 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center cursor-pointer transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom footer status */}
              <div className="p-3 bg-[#0d0f15] border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span>
                  Photo {lightboxIndex! + 1} of {filteredImages.length}
                </span>
                <button
                  onClick={() => {
                    const note = `I liked the photo "${currentImage.title}" in your gallery!`;
                    setLightboxIndex(null);
                    onBookClick(note);
                  }}
                  className="sm:hidden text-[#d4af37] font-semibold flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" /> Book This Look
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
