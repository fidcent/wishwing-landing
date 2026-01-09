'use client';

import { analytics } from '@/utils/analytics';
import LaunchCountdown from './LaunchCountdown';

export default function Hero() {
  const isLaunched = false;

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 overflow-hidden flex items-center justify-center pt-20 md:pt-24 pb-16 md:pb-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/50 shadow-soft mb-8 animate-fade-in-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            <span className="text-sm font-medium text-neutral-700">Launching Soon</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight animate-fade-in-up">
            Nigeria's Digital
            <br />
            <span className="text-gradient">Gifting Platform</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-100 font-light">
            Celebrate Better, Together. Make gift-giving personal, social, and memorablefrom birthdays to weddings and every occasion in between.
          </p>

          {/* Launch Countdown */}
          <div className="mb-12 animate-fade-in-up animate-delay-200">
            <LaunchCountdown />
          </div>

          {/* CTA Buttons */}
          {isLaunched && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up animate-delay-300">
              <button 
                className="group relative px-8 py-4 bg-primary-600 text-white rounded-2xl font-semibold text-base shadow-strong hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => analytics.trackDownloadClick('ios', 'Hero')}
                aria-label="Download WishWing on the App Store"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <span>App Store</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur" />
              </button>
              
              <button 
                className="group relative px-8 py-4 bg-neutral-900 text-white rounded-2xl font-semibold text-base shadow-strong hover:shadow-strong hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => analytics.trackDownloadClick('android', 'Hero')}
                aria-label="Download WishWing on Google Play"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Google Play</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
