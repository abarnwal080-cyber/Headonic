import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/salonData';

interface ReviewsSectionProps {
  onOpenReviewSocial?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenReviewSocial }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide carousel for Reviews (slides every 3.0s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CLIENT_REVIEWS.length) % CLIENT_REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length);
  };

  const currentReview = CLIENT_REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-14 sm:py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Simple Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 tracking-wide">
            Client Reviews
          </h2>
        </div>

        {/* ================= SIMPLE REVIEW CARD ================= */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-3xl bg-white/85 backdrop-blur-md border border-pink-200/90 p-6 sm:p-10 shadow-xl shadow-purple-950/5 text-center space-y-5"
        >
          {/* 1. Exactly 5 Vibrant Golden Stars */}
          <div className="flex items-center justify-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 filter drop-shadow-xs" />
            ))}
          </div>

          {/* 2. Just Review styled in Amaranth Bold as requested */}
          <p className="font-amaranth font-bold text-lg sm:text-xl text-zinc-900 leading-relaxed max-w-xl mx-auto min-h-[72px] flex items-center justify-center tracking-wide">
            "{currentReview.comment}"
          </p>

          {/* 3. Name and Vibrant Verified Tick SVG */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="font-bold text-sm sm:text-base text-zinc-900 tracking-wide font-amaranth">
              {currentReview.author}
            </span>

            {/* Vibrant Verified Tick SVG */}
            <svg
              className="w-4 h-4 text-emerald-500 shrink-0 inline-block fill-current filter drop-shadow-xs"
              viewBox="0 0 20 20"
              aria-label="Verified Client"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Minimal Controls & Indicator Dots */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-pink-100/90 hover:bg-pink-200 text-zinc-700 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {CLIENT_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#d4af37]' : 'w-2 bg-pink-300 hover:bg-pink-400'
                  }`}
                  aria-label={`Slide to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-pink-100/90 hover:bg-pink-200 text-zinc-700 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Give Review on Google CTA */}
        {onOpenReviewSocial && (
          <div className="mt-6 text-center">
            <button
              onClick={onOpenReviewSocial}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Give Review on Google / Follow on Instagram</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
