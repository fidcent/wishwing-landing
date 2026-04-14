'use client';

import Image from 'next/image';
import { images } from '@/data/images';

const steps = [
  {
    number: 1,
    title: 'Connect Your Circle',
    description: 'Import contacts and sync birthdays, anniversaries, and special occasions automatically. Never miss a moment.',
    image: images.mockupBirthdaysMarch,
  },
  {
    number: 2,
    title: 'Create & Share Wishlists',
    description: 'Build wishlists for your occasions and share them with friends and family. Let people contribute with WishCoins.',
    image: images.mockupWishlists,
  },
  {
    number: 3,
    title: 'Celebrate Together',
    description: 'Send meaningful gifts, coordinate group contributions, and make every moment special — all from one place.',
    image: images.mockupSendGift,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4">
            How WishWing Works
          </h2>
          <p className="text-base md:text-lg text-neutral-500">
            3 easy steps to celebrate people properly — from remembering to giving with heart.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-3 py-1 bg-primary-100 rounded-full mb-4">
                    <span className="text-primary-600 font-semibold text-sm">Step {step.number}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className="flex-1 flex justify-center">
                  <div className="w-[220px] sm:w-[250px] md:w-[280px] rounded-3xl overflow-hidden shadow-xl border border-neutral-200/50">
                    <Image
                      src={step.image}
                      alt={`${step.title} - WishWing app screenshot`}
                      width={280}
                      height={560}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
