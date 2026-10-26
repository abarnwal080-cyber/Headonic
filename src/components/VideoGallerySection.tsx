import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Sparkles, RefreshCw } from 'lucide-react';
import Player from '@vimeo/player';
import { SALON_VIDEOS } from '../data/salonData';

export const VideoGallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const currentVideo = SALON_VIDEOS[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SALON_VIDEOS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SALON_VIDEOS.length) % SALON_VIDEOS.length);
  }, []);

  // Initialize Vimeo Player SDK & attach 'ended' event listener for auto-advance
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      const player = new Player(iframe);
      playerRef.current = player;

      const handleEnded = () => {
        handleNext();
      };

      player.on('ended', handleEnded);

      // Backup postMessage listener for Vimeo events
      const handleMessage = (event: MessageEvent) => {
        try {
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          if (data && (data.event === 'ended' || data.event === 'finish')) {
            handleNext();
          }
        } catch {
          // Ignore non-Vimeo postMessages
        }
      };

      window.addEventListener('message', handleMessage);

      return () => {
        player.off('ended', handleEnded);
        window.removeEventListener('message', handleMessage);
        player.destroy().catch(() => {});
      };
    } catch {
      // Fallback
    }
  }, [currentIndex, isMuted, handleNext]);

  return (
    <section id="videos" className="py-16 sm:py-24 relative overflow-hidden bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-300/70 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            Live Client Transformations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-2">
            Video Gallery
          </h2>
        </div>

        {/* ================= FIXED 9:16 VERTICAL REEL PLAYER ================= */}
        <div className="relative max-w-[340px] sm:max-w-[380px] mx-auto">
          {/* Main 9:16 Aspect Ratio Frame */}
          <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-black border-2 border-pink-300/80 shadow-2xl shadow-purple-950/20">
            <iframe
              ref={iframeRef}
              key={`${currentVideo.vimeoId}-${isMuted}`}
              src={`https://player.vimeo.com/video/${currentVideo.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=${isMuted ? 1 : 0}`}
              className="absolute inset-0 w-full h-full border-0 object-cover"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              title={currentVideo.title}
            />

            {/* Subtle Controls Overlay */}
            {/* Left Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-all cursor-pointer z-20 shadow-lg opacity-80 hover:opacity-100"
              aria-label="Previous Video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-all cursor-pointer z-20 shadow-lg opacity-80 hover:opacity-100"
              aria-label="Next Video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Top Sound Control (Unmute / Mute) */}
            <button
              onClick={() => setIsMuted((prev) => !prev)}
              className="absolute top-3.5 right-3.5 px-2.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white/90 hover:text-white border border-white/25 flex items-center gap-1.5 text-xs font-medium cursor-pointer z-20 shadow-md transition-all hover:border-[#d4af37]"
              title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px]">Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px]">Sound On</span>
                </>
              )}
            </button>

            {/* Auto-advance Indicator Badge */}
            <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/15 text-[10px] font-medium flex items-center gap-1 pointer-events-none z-20">
              <RefreshCw className="w-2.5 h-2.5 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Auto Next</span>
            </div>
          </div>

          {/* Minimal Dots Indicator (Nothing else written below the video) */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {SALON_VIDEOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#d4af37]' : 'w-2 bg-pink-300/80 hover:bg-pink-400'
                }`}
                aria-label={`Slide to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
