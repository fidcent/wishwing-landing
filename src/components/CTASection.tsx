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
    <section id="download" className="py-20 md:py-28 px-6 bg-gradient-to-br from-primary-purple to-primary-pink">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Own the Occasion Layer
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8">
          {isLaunched 
            ? 'Join thousands of Nigerians making celebrations memorable. Get 1,000 FREE WishCoins!'
            : 'Be part of Nigeria\'s gifting revolution. Join the waitlist for early access on January 7, 2026'}
        </p>

        {/* Download Buttons - Only show after launch */}
        {isLaunched && (
          <div className="flex flex-wrap justify-center gap-4">
          <button 
            className="h-14 px-8 bg-white text-primary-purple rounded-full font-semibold text-base shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/70"
            onClick={() => analytics.trackDownloadClick('ios', 'CTA Section')}
            aria-label="Download WishWing on the App Store"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            App Store
          </button>
          <button 
            className="h-14 px-8 bg-white text-primary-purple rounded-full font-semibold text-base shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/70"
            onClick={() => analytics.trackDownloadClick('android', 'CTA Section')}
            aria-label="Download WishWing on Google Play"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Google Play
          </button>
        </div>
        )}

        {/* Pre-launch CTA */}
        {!isLaunched && (
          <div className="space-y-6">
            <a
              href="#early-access"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#early-access');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                analytics.trackCTAClick('Join Waitlist', 'CTA Section');
              }}
              className="inline-block px-8 py-4 bg-white text-primary-purple rounded-full font-semibold text-base shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Join the Waitlist
            </a>
            <div className="inline-block bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full ml-4">
              <p className="text-white font-medium text-base">
                📱 Coming January 7, 2026
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
