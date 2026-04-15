'use client';

import Image from 'next/image';
import { images } from '@/data/images';

const smallBenefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Flexible Redemption',
    description: 'Redeem for airtime, data, gift cards, or real gifts.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save Time',
    description: 'Send gifts instantly — no wrapping, no delivery.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure & Transparent',
    description: 'Every transaction is protected and fully traceable.',
  },
];

export default function WishCoinSection() {
  return (
    <section id="wishcoins" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 mb-5">
            <span className="text-white/90 font-medium text-sm">WishCoin</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            WishCoins: The Currency of Celebration
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Unlike impersonal cash transfers, WishCoins are designed specifically for gifting. Flexible, meaningful, and perfect for any celebration.
          </p>
        </div>

        {/* Coin Image */}
        <div className="flex justify-center mb-14">
          <Image
            src={images.wishcoins3d}
            alt="WishCoins 3D coins"
            width={200}
            height={200}
            className="w-40 md:w-52 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Two main cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* More Meaningful */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">More Meaningful</h3>
            <p className="text-white/60 mb-6">
              WishCoins carry intention — they say &ldquo;I thought about this&rdquo; instead of just sending money.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['bg-purple-500', 'bg-blue-500', 'bg-pink-500'].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-neutral-900 flex items-center justify-center text-white text-xs font-bold`}>
                    {['M', 'T', 'A'][i]}
                  </div>
                ))}
              </div>
              <div className="text-white/50 text-sm">Mary, Timothy, and more</div>
            </div>
          </div>

          {/* Pool Together */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Pool Together</h3>
            <p className="text-white/60 mb-6">
              Friends and family can contribute to group gifts easily — no awkward coordination needed.
            </p>
            <div className="flex items-center gap-2">
              {['bg-emerald-500', 'bg-amber-500', 'bg-cyan-500', 'bg-rose-500'].map((color, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className={`w-7 h-7 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold`}>
                    {['K', 'S', 'D', 'I'][i]}
                  </div>
                  {i < 3 && (
                    <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Small benefits row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {smallBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{benefit.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
