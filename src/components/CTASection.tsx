'use client';

import { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

export default function CTASection() {
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const launchDate = new Date('2026-01-07T00:00:00').getTime();
    const now = new Date().getTime();
    setIsLaunched(now >= launchDate);
  }, []);

  return (
    <section id="download" className="py-20 md:py-32 px-5 bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 5 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to Never Miss a Birthday?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed">
          {isLaunched 
            ? 'Download WishWing today and get 1000 FREE WishCoins to get started!'
            : 'Be the first to know when WishWing launches on January 7, 2026!'}
        </p>

        {/* Bonus Highlight */}
        <div className="inline-block bg-white/20 backdrop-blur-md border-2 border-white/40 px-10 py-5 rounded-2xl mb-12 shadow-xl">
          <span className="text-white font-bold text-lg md:text-xl">
            🎉 Special Launch Offer: 1000 FREE WishCoins!
          </span>
        </div>

        {/* Download Buttons - Only show after launch */}
        {isLaunched && (
          <>
            <div className="flex flex-wrap justify-center gap-5 mb-8">
          <button 
            className="h-16 px-10 bg-white text-primary-purple rounded-2xl font-bold text-lg shadow-2xl hover:-translate-y-1 hover:shadow-3xl transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/50"
            onClick={() => analytics.trackDownloadClick('ios', 'CTA Section')}
            aria-label="Download WishWing on the App Store"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download on App Store
          </button>
          <button 
            className="h-16 px-10 bg-white text-primary-purple rounded-2xl font-bold text-lg shadow-2xl hover:-translate-y-1 hover:shadow-3xl transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/50"
            onClick={() => analytics.trackDownloadClick('android', 'CTA Section')}
            aria-label="Download WishWing on Google Play"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Get it on Google Play
          </button>
        </div>

        {/* Free Badge */}
        <p className="text-white/80 text-sm font-medium">
          100% Free to Download
        </p>
          </>
        )}

        {/* Pre-launch message */}
        {!isLaunched && (
          <div className="inline-block bg-white/20 backdrop-blur-md border-2 border-white/40 px-8 py-4 rounded-2xl">
            <p className="text-white font-semibold text-lg">
              📱 Coming Soon to App Stores
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
