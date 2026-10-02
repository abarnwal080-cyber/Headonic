import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
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
    <section id="reviews" className="py-14 sm:py-20 bg-[#0b0c10] border-b border-[#1f222b]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Simple Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Client Reviews
          </h2>
        </div>

        {/* ================= SIMPLE REVIEW CARD ================= */}
        {/* Request: "Reviews ko simple just review and 5 stars and name and verified tick svg" */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-3xl bg-[#12141c] border border-[#d4af37]/40 p-6 sm:p-10 shadow-2xl text-center space-y-5"
        >
          {/* 1. Exactly 5 Golden Stars */}
          <div className="flex items-center justify-center gap-1 text-[#d4af37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
            ))}
          </div>

          {/* 2. Just Review */}
          <p className="font-serif text-base sm:text-lg text-zinc-200 italic leading-relaxed max-w-xl mx-auto min-h-[72px] flex items-center justify-center">
            "{currentReview.comment}"
          </p>

          {/* 3. Name and Verified Tick SVG */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="font-semibold text-sm sm:text-base text-white tracking-wide">
              {currentReview.author}
            </span>

            {/* Verified Tick SVG */}
            <svg
              className="w-4 h-4 text-emerald-400 shrink-0 inline-block fill-current"
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
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
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
                    currentIndex === idx ? 'w-6 bg-[#d4af37]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Slide to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
