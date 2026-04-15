'use client';

import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const topRow = testimonials.slice(0, 4);
  const bottomRow = testimonials.slice(4, 8);

  const renderCard = (t: typeof testimonials[0]) => (
    <div
      key={t.author}
      className="min-w-[280px] sm:min-w-[320px] bg-neutral-50 rounded-2xl p-6 border border-neutral-200/60 flex flex-col shrink-0"
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-neutral-700 text-sm leading-relaxed mb-4 flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
          {t.author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">{t.author}</p>
          <p className="text-xs text-neutral-400">{t.city}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary-200 mb-5">
            <span className="text-primary-600 font-medium text-sm">Testimonials</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4">
            Loved by people who care about gifting
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
            Here&apos;s what early users are saying about WishWing.
          </p>
        </div>
      </div>

      {/* Top row - scrolls left */}
      <div className="mb-5 overflow-hidden">
        <div className="flex gap-5 animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {[...topRow, ...topRow].map((t, i) => (
            <div key={`top-${i}`}>{renderCard(t)}</div>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls right */}
      <div className="overflow-hidden">
        <div className="flex gap-5 animate-[scroll-right_40s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {[...bottomRow, ...bottomRow].map((t, i) => (
            <div key={`bottom-${i}`}>{renderCard(t)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
