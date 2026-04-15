'use client';

import Image from 'next/image';
import { analytics } from '@/utils/analytics';
import { images } from '@/data/images';
import { appLinks } from '@/data/links';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20"
      style={{ background: 'linear-gradient(to top, #DBD4FF 50%, #FFFFFF 100%)' }}
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#DBD4FF]/30 rounded-full blur-3xl" />
      </div>

      {/* Desktop Phone Mockup - absolutely positioned */}
      <div className="hidden lg:block absolute right-[5%] xl:right-[8%] top-16 bottom-0 w-[420px] xl:w-[480px] 2xl:w-[520px] z-10">
        <Image
          src={images.heroMockup}
          alt="WishWing app mockup showing the gifting experience"
          width={550}
          height={750}
          className="w-full h-auto drop-shadow-2xl"
          style={{ minHeight: '110%' }}
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left max-w-xl lg:max-w-[55%]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-neutral-200/60 shadow-sm mb-8">
              <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs font-semibold rounded-full">New</span>
              <span className="text-sm text-neutral-600">Built for modern gifting</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl text-neutral-900 mb-6 leading-[1.1]">
              Send gifts that actually feel like gifts.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-neutral-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Celebrate Better, Together. Make gift-giving personal, social, and memorable from birthdays to weddings and every occasion in between.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
              <a
                href={appLinks.appStore}
                onClick={() => analytics.trackDownloadClick('ios', 'Hero')}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors duration-200"
                aria-label="Download on the App Store"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Download on the</div>
                  <div className="text-base font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href={appLinks.playStore}
                onClick={() => analytics.trackDownloadClick('android', 'Hero')}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors duration-200"
                aria-label="Get it on Google Play"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Get it on</div>
                  <div className="text-base font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-emerald-500'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {['A', 'B', 'C', 'D'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-neutral-600">
                <span className="font-semibold text-neutral-900">2,000+</span> Active users
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup (mobile) */}
          <div className="flex-1 flex justify-center lg:hidden">
            <div className="relative w-[320px] sm:w-[400px] md:w-[480px]">
              <Image
                src={images.heroMockup}
                alt="WishWing app mockup showing the gifting experience"
                width={550}
                height={750}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
