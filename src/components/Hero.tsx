'use client';

import { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';
import LaunchCountdown from './LaunchCountdown';

export default function Hero() {
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const launchDate = new Date('2026-01-07T00:00:00').getTime();
    const now = new Date().getTime();
    setIsLaunched(now >= launchDate);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary-purple via-primary-pink to-primary-purple overflow-hidden flex items-center justify-center pt-24 md:pt-32 pb-20 md:pb-28 px-6 md:px-12">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp text-balance">
          Nigeria's Digital Gifting Platform
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeInUp animate-delay-200">
          Transform how you celebrate. WishWing makes gift-giving personal, social, and memorable—from birthdays to weddings and every occasion in between.
        </p>

        {/* Launch Countdown */}
        <div className="animate-fadeInUp animate-delay-300">
          <LaunchCountdown />
        </div>

        {/* CTA Buttons - Only show after launch */}
        {isLaunched && (
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fadeInUp animate-delay-400">
          <button 
            className="h-14 px-8 bg-white text-primary-purple rounded-full font-semibold text-base shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/70"
            onClick={() => analytics.trackDownloadClick('ios', 'Hero')}
            aria-label="Download WishWing on the App Store"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download on App Store
          </button>
          <button 
            className="h-14 px-8 bg-white text-primary-purple rounded-full font-semibold text-base shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/70"
            onClick={() => analytics.trackDownloadClick('android', 'Hero')}
            aria-label="Download WishWing on Google Play"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Get it on Google Play
          </button>
        </div>
        )}

        {/* App Mockup (reduced size per request) */}
        <div className="mt-12 md:mt-16 max-w-[220px] md:max-w-[320px] mx-auto">
          <div className="relative animate-float" style={{ animationDuration: '6s' }}>
            {/* Placeholder for app screenshot - using a gradient box with logo */}
            <div className="relative aspect-[9/16] rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-4 border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-white/30 rounded-full"/>
              </div>
              <div className="p-6 pt-12 space-y-4 flex flex-col items-center justify-center h-full">
                <img src="/wishwing-logo.png" alt="WishWing App" className="w-24 h-24 mb-4" />
                <div className="h-12 bg-white/20 rounded-lg w-full"/>
                <div className="h-32 bg-white/15 rounded-xl w-full"/>
                <div className="h-24 bg-white/15 rounded-xl w-full"/>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-50 bg-gradient-to-br from-purple-400 to-pink-400"/>
          </div>
        </div>
      </div>
    </section>
  );
}
