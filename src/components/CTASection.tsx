'use client';

import { analytics } from '@/utils/analytics';

export default function CTASection() {
  const isLaunched = false;

  return (
    <section id="download" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up">
            Own the Occasion{' '}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-100 font-light">
          {isLaunched 
            ? 'Join thousands of Nigerians making celebrations memorable. Get 1,000 FREE WishCoins!'
            : 'Be part of Nigeria\'s gifting revolution. Join the waitlist for early access.'}
        </p>

        {/* Download Buttons */}
        {isLaunched && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-200">
            <button 
              className="group relative px-8 py-4 bg-white text-primary-600 rounded-2xl font-semibold text-base shadow-strong hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              onClick={() => analytics.trackDownloadClick('ios', 'CTA Section')}
              aria-label="Download WishWing on the App Store"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <span>App Store</span>
            </button>
            
            <button 
              className="group relative px-8 py-4 bg-neutral-900 text-white rounded-2xl font-semibold text-base shadow-strong hover:shadow-strong hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              onClick={() => analytics.trackDownloadClick('android', 'CTA Section')}
              aria-label="Download WishWing on Google Play"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Google Play</span>
            </button>
          </div>
        )}

        {/* Pre-launch CTA */}
        {!isLaunched && (
          <div className="animate-fade-in-up animate-delay-200">
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
              className="inline-flex items-center px-10 py-5 bg-white text-primary-600 rounded-2xl font-bold text-lg shadow-strong hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300"
            >
              <span>Join the Waitlist</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
