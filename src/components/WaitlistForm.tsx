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

  // Fetch waitlist count on mount
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/auth/waitlist/count/wishwing`);
        if (response.ok) {
          const data = await response.json();
          setWaitlistCount(data.count || 0);
        }
      } catch (err) {
        // Silently fail, use fallback count
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
      // Track the signup attempt
      analytics.trackEvent({
        category: 'Waitlist',
        action: 'signup_attempt',
        label: email,
      });

      // Call the waitlist API
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
      
      // Update count after successful signup
      if (waitlistCount !== null) {
        setWaitlistCount(waitlistCount + 1);
      }
      
      setIsSubmitted(true);
      analytics.trackEvent({
        category: 'Waitlist',
        action: 'signup_success',
        label: email,
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    } catch (err) {
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
    <section id="early-access" className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-br from-primary-purple to-primary-pink">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-white font-medium text-sm">🎉 Launch Offer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Join the Waitlist
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-3">
            Get <span className="font-semibold text-yellow-300">1,000 FREE WishCoins</span> when we launch
          </p>
          <p className="text-lg md:text-2xl font-semibold text-white mb-2">
            January 7, 2026
          </p>
          <p className="text-sm md:text-base text-white/75">
            📱 iOS & Android
          </p>
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="flex-1 px-5 py-3.5 rounded-full text-base bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-3.5 bg-white hover:bg-gray-light text-primary-purple font-semibold text-base rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            {error && (
              <p className="text-white/90 text-sm mt-2">{error}</p>
            )}
            <p className="text-white/70 text-sm">
              Join <span className="font-medium text-white">{waitlistCount !== null ? waitlistCount.toLocaleString() : '10,000'}+</span> early adopters. No spam, launch updates only.
            </p>
          </form>
        ) : (
          <div className="max-w-xl mx-auto p-8 bg-white/15 backdrop-blur-md rounded-2xl">
            <div className="text-5xl mb-3">✅</div>
            <h3 className="text-2xl font-semibold text-white mb-2">You're on the list!</h3>
            <p className="text-white/85 text-base mb-1">
              We'll notify you on January 7, 2026.
            </p>
            <p className="text-white font-medium text-base">
              1,000 WishCoins reserved! 🎉
            </p>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-4xl mb-3">🪙</div>
            <h3 className="font-bold text-lg mb-2">1000 FREE WishCoins</h3>
            <p className="text-white/80 text-sm">Worth ₦2,500 - yours free on launch day!</p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Early Access</h3>
            <p className="text-white/80 text-sm">Be among the first to download the app</p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Launch Day Notification</h3>
            <p className="text-white/80 text-sm">Get notified the moment it's available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
