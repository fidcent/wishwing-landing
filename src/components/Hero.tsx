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
    <section id="home" className="relative min-h-screen bg-gradient-primary overflow-hidden flex items-center justify-center pt-24 md:pt-32 pb-20 md:pb-28 px-6 md:px-12">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-float"
            style={{
              width: `${Math.random() * 20 + 6}px`,
              height: `${Math.random() * 20 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight animate-fadeInUp text-balance tracking-tight">
          Never Miss a Birthday Again
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp animate-delay-200">
          Celebrate every moment with WishWing - the smart app that helps you remember birthdays, 
          manage wishlists, and send the perfect gift every time.
        </p>

        {/* Launch Countdown */}
        <div className="animate-fadeInUp animate-delay-300">
          <LaunchCountdown />
        </div>

        {/* CTA Buttons - Only show after launch */}
        {isLaunched && (
          <div className="flex flex-wrap justify-center gap-5 mb-8 animate-fadeInUp animate-delay-400">
          <button 
            className="h-16 px-10 bg-white text-primary-purple rounded-2xl font-bold text-lg shadow-2xl hover:-translate-y-1 hover:shadow-3xl transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/50"
            onClick={() => analytics.trackDownloadClick('ios', 'Hero')}
            aria-label="Download WishWing on the App Store"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download on App Store
          </button>
          <button 
            className="h-16 px-10 bg-white text-primary-purple rounded-2xl font-bold text-lg shadow-2xl hover:-translate-y-1 hover:shadow-3xl transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/50"
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

        {/* Social Proof */}
        <div className="text-white/90 animate-fadeInUp animate-delay-600">
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <p className="text-base font-medium">Trusted by 10,000+ happy users</p>
        </div>

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
