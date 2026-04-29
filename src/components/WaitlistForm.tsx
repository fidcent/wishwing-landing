'use client';

import { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const apiBaseUrl = 'https://api.fidcent.com/identity/api/v1';

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/auth/waitlist/count/wishwing`);
        if (response.ok) {
          const result = await response.json();
          setWaitlistCount(result.data?.count || 0);
        }
      } catch (err) {
        console.error('Failed to fetch waitlist count:', err);
      }
    };

    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      analytics.trackEvent({
        category: 'Waitlist',
        action: 'signup_attempt',
        label: email,
      });

      const response = await fetch(`${apiBaseUrl}/auth/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          appName: 'wishwing',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }
      
      if (waitlistCount !== null) {
        setWaitlistCount(waitlistCount + 1);
      }
      
      setIsSubmitted(true);
      analytics.trackEvent({
        category: 'Waitlist',
        action: 'signup_success',
        label: email,
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    } catch (err) {
      console.error('Waitlist signup error:', err);
      setError('Something went wrong. Please try again.');
      analytics.trackEvent({
        category: 'Waitlist',
        action: 'signup_error',
        label: email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold text-sm">Launch Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Join the Waitlist
          </h2>
          
          <p className="text-lg md:text-xl text-white/95 mb-4 animate-fade-in-up animate-delay-100">
            Get <span className="font-bold text-yellow-300">1,000 FREE WishCoins</span> when we launch
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-white animate-fade-in-up animate-delay-200">
            <div className="flex items-center gap-2 text-base md:text-lg font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Launching Soon</span>
            </div>
            <span className="hidden sm:inline text-white/50">•</span>
            <span className="text-base md:text-lg text-white/90">iOS & Android</span>
          </div>
        </div>

        {/* Form */}
        {isSubmitted ? (
          <div className="max-w-xl mx-auto p-8 md:p-10 bg-white/20 backdrop-blur-xl rounded-3xl shadow-strong mb-12 animate-scale-in">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">You're on the list!</h3>
            <p className="text-white/90 text-base md:text-lg mb-2">
              We'll notify you when we launch.
            </p>
            <p className="text-white font-semibold text-lg">
              1,000 WishCoins reserved! 🎉
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-300">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 rounded-2xl text-base bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed shadow-strong transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-base rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-strong hover:shadow-glow-primary hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </span>
                ) : 'Join Waitlist'}
              </button>
            </div>
            {error && (
              <p className="text-white/95 text-sm bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-xl mb-3">{error}</p>
            )}
            <p className="text-white/80 text-sm md:text-base">
              {/* Join <span className="font-bold text-white">{waitlistCount === null ? '0' : waitlistCount.toLocaleString()}+</span> early adopters • No spam, launch updates only */}
              Join early adopters • No spam, launch updates only
            </p>
          </form>
        )}

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 bg-white/15 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🪙</span>
            </div>
            <h3 className="font-bold text-lg md:text-xl text-white mb-2">1000 FREE WishCoins</h3>
            <p className="text-white/80 text-sm md:text-base">Worth ₦2,500 - yours free on launch day!</p>
          </div>
          
          <div className="p-6 md:p-8 bg-white/15 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="font-bold text-lg md:text-xl text-white mb-2">Early Access</h3>
            <p className="text-white/80 text-sm md:text-base">Be among the first to download the app</p>
          </div>
          
          <div className="p-6 md:p-8 bg-white/15 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="font-bold text-lg md:text-xl text-white mb-2">Launch Day Alert</h3>
            <p className="text-white/80 text-sm md:text-base">Get notified the moment it's available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
