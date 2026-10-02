import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Sparkles } from 'lucide-react';
import { SALON_VIDEOS } from '../data/salonData';
import { SalonVideo } from '../types';

export const VideoGallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTheaterVideo, setActiveTheaterVideo] = useState<SalonVideo | null>(null);

  // Auto-slide carousel for Videos (slides smoothly every 3 seconds)
  useEffect(() => {
    if (isPaused || activeTheaterVideo !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SALON_VIDEOS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, activeTheaterVideo]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SALON_VIDEOS.length) % SALON_VIDEOS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SALON_VIDEOS.length);
  };

  const currentVideo = SALON_VIDEOS[currentIndex];

  return (
    <section id="videos" className="py-16 sm:py-24 bg-[#0d0f15] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Live Client Transformations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Video Gallery
          </h2>
        </div>

        {/* ================= AUTO-SLIDING VIDEO (Nothing written below) ================= */}
        {/* User request: "Video gallery mein ke videos auto slide ho unke nicche kucch likha na ho" */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-sm sm:max-w-md mx-auto"
        >
          {/* Main Video Frame */}
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black border-2 border-[#d4af37]/40 shadow-2xl shadow-black/80">
            <video
              key={currentVideo.id}
              src={currentVideo.url}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPaused(true)}
              onPause={() => setIsPaused(false)}
            />

            {/* Left / Right Carousel Controls overlay on the video */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white border border-zinc-700/80 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-all cursor-pointer z-20 shadow-lg opacity-80 hover:opacity-100"
              aria-label="Previous Video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white border border-zinc-700/80 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-all cursor-pointer z-20 shadow-lg opacity-80 hover:opacity-100"
              aria-label="Next Video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expand button top right */}
            <button
              onClick={() => setActiveTheaterVideo(currentVideo)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-zinc-300 hover:text-white flex items-center justify-center border border-zinc-700 hover:border-[#d4af37] transition-all cursor-pointer z-20"
              title="Expand video"
              aria-label="Expand video"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Minimal Dots Indicator (Only navigation dots, NO text written underneath) */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {SALON_VIDEOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-7 bg-[#d4af37]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Slide to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Theater Video Modal */}
        {activeTheaterVideo && (
          <div
            onClick={() => setActiveTheaterVideo(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-black border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-3 bg-zinc-950 flex items-center justify-end border-b border-zinc-800">
                <button
                  onClick={() => setActiveTheaterVideo(null)}
                  className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-[9/16] bg-black">
                <video
                  src={activeTheaterVideo.url}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
