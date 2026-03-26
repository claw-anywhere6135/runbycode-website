'use client';

import { useRef } from 'react';

interface HorizontalScrollCardsProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
}

export default function HorizontalScrollCards({
  title,
  subtitle,
  badge,
  children,
}: HorizontalScrollCardsProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 px-0">
        <div>
          {badge && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-950/40 border border-blue-800/30 rounded-full px-3 py-1 mb-3">
              {badge}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-gray-400 text-sm max-w-xl">{subtitle}</p>
          )}
        </div>

        {/* Nav buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Zurueck"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center justify-center"
          >
            <i className="fa-solid fa-chevron-left text-sm" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Weiter"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center justify-center"
          >
            <i className="fa-solid fa-chevron-right text-sm" />
          </button>
        </div>
      </div>

      {/* Fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-4 w-12 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #050505, transparent)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-4 w-12 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #050505, transparent)',
          }}
        />

        {/* Scroll track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
