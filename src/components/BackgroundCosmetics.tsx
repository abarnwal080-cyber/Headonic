import React from 'react';
import { Sparkles, Scissors, Crown, Heart, Star, SprayCan as Perfume, Gem, Flower2 } from 'lucide-react';

// Custom Lipstick SVG component
const LipstickIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    stroke="currentColor"
    strokeWidth="1"
  >
    <path d="M9 11h6v10H9z" fill="currentColor" opacity="0.8" />
    <path d="M10 4.5C10 3 11 2 12 2s2 1 2 2.5V8h-4V4.5z" fill="currentColor" />
    <path d="M8 8h8v3H8z" fill="currentColor" opacity="0.9" />
  </svg>
);

// Custom Nail Polish / Lotion Bottle SVG
const BottleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M10 2h4v3h-4z" />
    <path d="M11 5h2v3h-2z" />
    <path d="M7 9h10v12H7z" opacity="0.85" />
  </svg>
);

interface CosmeticPoint {
  top: string;
  left: string;
  size: string;
  iconType: 'lipstick' | 'sparkle' | 'scissors' | 'crown' | 'star' | 'perfume' | 'heart' | 'bottle' | 'gem' | 'flower';
  duration: string;
  delay: string;
  colorClass: string;
}

// Positioned across the website background, explicitly leaving the top header text area clean
const COSMETIC_ITEMS: CosmeticPoint[] = [
  // Far Left & Far Right Margins only at top (Header text area excluded)
  { top: '3%', left: '2%', size: 'w-7 h-7', iconType: 'lipstick', duration: '3.8s', delay: '0s', colorClass: 'text-pink-400' },
  { top: '5%', left: '95%', size: 'w-8 h-8', iconType: 'crown', duration: '4.5s', delay: '1.2s', colorClass: 'text-amber-400' },
  { top: '12%', left: '3%', size: 'w-6 h-6', iconType: 'star', duration: '3.2s', delay: '0.5s', colorClass: 'text-purple-400' },
  { top: '14%', left: '94%', size: 'w-7 h-7', iconType: 'sparkle', duration: '5.0s', delay: '2.1s', colorClass: 'text-rose-400' },

  // Below Header Text Area (Starting below 20% down)
  { top: '22%', left: '6%', size: 'w-8 h-8', iconType: 'perfume', duration: '4.2s', delay: '1.5s', colorClass: 'text-purple-400' },
  { top: '24%', left: '92%', size: 'w-6 h-6', iconType: 'heart', duration: '3.5s', delay: '0.2s', colorClass: 'text-pink-500' },
  { top: '29%', left: '12%', size: 'w-7 h-7', iconType: 'bottle', duration: '4.8s', delay: '2.4s', colorClass: 'text-rose-400' },
  { top: '32%', left: '88%', size: 'w-8 h-8', iconType: 'lipstick', duration: '3.9s', delay: '0.9s', colorClass: 'text-amber-400' },
  { top: '37%', left: '5%', size: 'w-6 h-6', iconType: 'flower', duration: '5.2s', delay: '1.7s', colorClass: 'text-pink-400' },

  // Center & Main Body Region
  { top: '42%', left: '93%', size: 'w-7 h-7', iconType: 'gem', duration: '4.1s', delay: '0.4s', colorClass: 'text-purple-500' },
  { top: '46%', left: '4%', size: 'w-8 h-8', iconType: 'crown', duration: '3.6s', delay: '2.0s', colorClass: 'text-amber-400' },
  { top: '50%', left: '85%', size: 'w-6 h-6', iconType: 'star', duration: '4.7s', delay: '1.1s', colorClass: 'text-rose-400' },
  { top: '54%', left: '8%', size: 'w-7 h-7', iconType: 'scissors', duration: '3.4s', delay: '0.6s', colorClass: 'text-purple-400' },
  { top: '58%', left: '91%', size: 'w-8 h-8', iconType: 'lipstick', duration: '4.9s', delay: '2.5s', colorClass: 'text-pink-500' },

  // Lower Section
  { top: '64%', left: '5%', size: 'w-6 h-6', iconType: 'sparkle', duration: '4.3s', delay: '0.3s', colorClass: 'text-amber-400' },
  { top: '68%', left: '93%', size: 'w-7 h-7', iconType: 'perfume', duration: '3.7s', delay: '1.8s', colorClass: 'text-rose-400' },
  { top: '72%', left: '10%', size: 'w-8 h-8', iconType: 'heart', duration: '5.1s', delay: '0.7s', colorClass: 'text-pink-400' },
  { top: '76%', left: '88%', size: 'w-6 h-6', iconType: 'flower', duration: '4.0s', delay: '2.2s', colorClass: 'text-purple-400' },
  { top: '80%', left: '6%', size: 'w-7 h-7', iconType: 'bottle', duration: '3.8s', delay: '1.0s', colorClass: 'text-amber-500' },

  // Bottom Region
  { top: '85%', left: '92%', size: 'w-8 h-8', iconType: 'star', duration: '4.4s', delay: '0.1s', colorClass: 'text-rose-400' },
  { top: '89%', left: '14%', size: 'w-6 h-6', iconType: 'lipstick', duration: '3.9s', delay: '1.9s', colorClass: 'text-pink-400' },
  { top: '93%', left: '86%', size: 'w-7 h-7', iconType: 'crown', duration: '5.3s', delay: '0.8s', colorClass: 'text-amber-400' },
  { top: '96%', left: '4%', size: 'w-6 h-6', iconType: 'sparkle', duration: '4.1s', delay: '2.3s', colorClass: 'text-purple-400' },
];

export const BackgroundCosmetics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {COSMETIC_ITEMS.map((item, idx) => {
        const renderIcon = () => {
          switch (item.iconType) {
            case 'lipstick':
              return <LipstickIcon className={item.size} />;
            case 'sparkle':
              return <Sparkles className={item.size} />;
            case 'scissors':
              return <Scissors className={item.size} />;
            case 'crown':
              return <Crown className={item.size} />;
            case 'star':
              return <Star className={`${item.size} fill-current`} />;
            case 'perfume':
              return <Perfume className={item.size} />;
            case 'heart':
              return <Heart className={`${item.size} fill-current`} />;
            case 'bottle':
              return <BottleIcon className={item.size} />;
            case 'gem':
              return <Gem className={item.size} />;
            case 'flower':
              return <Flower2 className={item.size} />;
            default:
              return <Star className={`${item.size} fill-current`} />;
          }
        };

        return (
          <div
            key={idx}
            className={`absolute ${item.colorClass} transition-all`}
            style={{
              top: item.top,
              left: item.left,
              animation: `blinkInOut ${item.duration} ease-in-out infinite ${item.delay}`,
            }}
          >
            {renderIcon()}
          </div>
        );
      })}
    </div>
  );
};
