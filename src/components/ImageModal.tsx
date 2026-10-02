import React from 'react';
import { X, MapPin, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface ImageModalProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ url, title, onClose }) => {
  if (!url) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#12141c] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        <div className="p-4 bg-[#0d0f15] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <h3 className="font-serif text-base font-bold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer"
            aria-label="Close image modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative max-h-[75vh] bg-black flex items-center justify-center p-2">
          <img
            src={url}
            alt={title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        <div className="p-4 bg-[#0d0f15] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
          <span className="flex items-center gap-1 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            {SALON_INFO.addressShort}
          </span>
          <a
            href={`tel:${SALON_INFO.phoneClean}`}
            className="text-[#d4af37] font-semibold hover:underline"
          >
            Inquire about this look: +91 70434 32122
          </a>
        </div>
      </div>
    </div>
  );
};
