'use client';

import { useState } from 'react';
import type { SharedWishlistData, SharedWishlistError } from '@/app/wishlists/shared/[shareToken]/page';

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

const WISHLIST_API_BASE =
  process.env.NEXT_PUBLIC_WISHLIST_API_URL ??
  'https://api.fidcent.com/wishcenter/wishlist/api/v1';

type ErrorInfo = {
  icon: string;
  heading: string;
  body: string;
};

function resolveError(error: SharedWishlistError): ErrorInfo {
  switch (error.code) {
    case 'INVALID_SHARE_LINK':
      return {
        icon: '🔗',
        heading: 'This link is no longer valid',
        body: 'The wishlist link you followed has been removed or never existed.',
      };
    case 'SHARING_DISABLED':
      return {
        icon: '🔒',
        heading: 'This wishlist is no longer shared',
        body: 'The owner has turned off sharing for this wishlist.',
      };
    case 'SHARE_LINK_EXPIRED':
      return {
        icon: '⏰',
        heading: 'This link has expired',
        body: 'The share link you followed is past its expiry date.',
      };
    default:
      return {
        icon: '🌐',
        heading: 'Something went wrong',
        body: error.message ?? 'Unable to load this wishlist right now.',
      };
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ErrorState({ error }: Readonly<{ error: SharedWishlistError }>) {
  const info = resolveError(error);

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center animate-fade-in-up">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center text-5xl shadow-soft">
        {info.icon}
      </div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-3 font-display">{info.heading}</h1>
      <p className="text-neutral-500 text-lg mb-10 leading-relaxed">{info.body}</p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl font-semibold shadow-strong hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to WishWing
      </a>
    </div>
  );
}

// Animated progress bar
function ProgressBar({ pct }: Readonly<{ pct: number }>) {
  return (
    <div className="relative">
      <div className="h-4 w-full rounded-full bg-neutral-200/80 overflow-hidden shadow-inner-soft">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 transition-all duration-1000 ease-out relative"
          style={{ width: `${pct}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
      {/* Glow under the progress bar */}
      <div
        className="absolute -bottom-2 left-0 h-4 rounded-full opacity-30 blur-md bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent = false,
}: Readonly<{
  icon: string;
  label: string;
  value: string;
  accent?: boolean;
}>) {
  return (
    <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/80 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-lg font-bold ${accent ? 'text-primary-600' : 'text-neutral-800'}`}>
        {value}
      </p>
    </div>
  );
}

function AppStoreButtons({
  links,
  deepLink,
}: Readonly<{
  links: { ios: string; android: string };
  deepLink: string;
}>) {
  return (
    <div className="flex flex-col gap-4">
      {/* Open in app — primary CTA */}
      <a
        href={deepLink}
        id="open-in-app-cta"
        className="group relative flex items-center justify-center gap-3 w-full py-4.5 px-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white rounded-2xl font-bold text-base shadow-strong hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        {/* Animated shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span className="relative z-10">Open in WishWing App</span>
        <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Don&apos;t have the app?</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {/* iOS */}
        <a
          href={links.ios}
          target="_blank"
          rel="noopener noreferrer"
          id="ios-download-btn"
          className="flex-1 flex items-center justify-center gap-3 py-3.5 px-5 bg-neutral-900 text-white rounded-2xl font-semibold text-sm shadow-medium hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-strong transition-all duration-200"
          aria-label="Download on the App Store"
        >
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
          </svg>
          <span>
            <span className="block text-[10px] leading-none opacity-80">Download on the</span>
            <span className="block text-sm font-bold">App Store</span>
          </span>
        </a>

        {/* Android */}
        <a
          href={links.android}
          target="_blank"
          rel="noopener noreferrer"
          id="android-download-btn"
          className="flex-1 flex items-center justify-center gap-3 py-3.5 px-5 bg-neutral-900 text-white rounded-2xl font-semibold text-sm shadow-medium hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-strong transition-all duration-200"
          aria-label="Get it on Google Play"
        >
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76c.3.17.65.19.98.07l12.79-7.37-2.74-2.73-11.03 10.03zm-1.15-19.64C1.73 4.6 1.5 5.1 1.5 5.74v12.52c0 .64.23 1.14.53 1.62l.09.08 7.01-7.01v-.16L2.03 4.12zm15.61 8.54-2.15-2.16-2.74 2.74 2.74 2.73 2.16-2.16c.61-.61.61-1.54-.01-2.15zM4.16.24C3.83.09 3.45.12 3.18.32L14.21 11.35l-2.73-2.73L4.16.24z" />
          </svg>
          <span>
            <span className="block text-[10px] leading-none opacity-80">Get it on</span>
            <span className="block text-sm font-bold">Google Play</span>
          </span>
        </a>
      </div>
    </div>
  );
}

// Interest registration form
function InterestForm({ shareToken }: Readonly<{ shareToken: string }>) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const res = await fetch(
        `${WISHLIST_API_BASE}/wishlists/shared/${shareToken}/interest`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            ...(message.trim() ? { message: message.trim() } : {}),
          }),
        },
      );

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? 'Something went wrong');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/60 rounded-3xl text-center animate-scale-in overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-bold text-green-800 text-lg mb-2">Interest registered!</p>
          <p className="text-sm text-green-700 leading-relaxed max-w-sm mx-auto">
            You&apos;ll receive an email with a download link so you can contribute when the app is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-accent-400 to-primary-400 rounded-3xl" />
      <div className="relative m-[1.5px] bg-white rounded-[22px] p-7">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-lg shrink-0">
            💌
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-800 mb-0.5">Want to contribute?</p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Let the owner know you&apos;re interested — we&apos;ll email you a link once you can contribute.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            disabled={submitting}
            id="interest-name"
            className="w-full px-4 py-3.5 rounded-xl text-sm bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white disabled:opacity-50 transition-all"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={submitting}
            id="interest-email"
            className="w-full px-4 py-3.5 rounded-xl text-sm bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white disabled:opacity-50 transition-all"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add a personal message (optional)"
            rows={2}
            disabled={submitting}
            id="interest-message"
            className="w-full px-4 py-3.5 rounded-xl text-sm bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white disabled:opacity-50 resize-none transition-all"
          />
          {error && (
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-2.5 rounded-xl">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={submitting}
            id="register-interest-btn"
            className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-bold text-sm hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                <span>Register Interest</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main view
// ---------------------------------------------------------------------------

export default function SharedWishlistView({
  shareToken,
  initialData,
  initialError,
}: Readonly<{
  shareToken: string;
  initialData?: SharedWishlistData;
  initialError?: SharedWishlistError;
}>) {
  if (initialError) {
    return <ErrorState error={initialError} />;
  }

  if (!initialData) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="animate-spin h-10 w-10 border-4 border-primary-200 border-t-primary-600 rounded-full" />
      </div>
    );
  }

  const { wishlist, ownerName, shareMessage, deepLink, appStoreLinks } = initialData;
  const pct = Math.min(100, Math.max(0, wishlist.progressPercentage ?? 0));

  const initials = ownerName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="max-w-xl mx-auto px-4 py-8 animate-fade-in-up relative">
      {/* Floating decorative orbs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute -bottom-10 -right-16 w-56 h-56 bg-accent-300/15 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* WishWing badge */}
      <a
        href="/"
        id="back-to-wishwing"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-neutral-200/60 shadow-soft mb-7 text-sm font-medium text-neutral-600 hover:text-primary-600 hover:border-primary-200 hover:shadow-medium transition-all duration-300"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        WishWing
      </a>

      {/* Main card */}
      <div className="bg-white rounded-3xl shadow-strong overflow-hidden mb-6 relative">
        {/* Gradient hero header */}
        <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 px-7 pt-8 pb-12 overflow-hidden">
          {/* Decorative elements in hero */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          {/* Owner row */}
          <div className="relative flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold text-lg shadow-medium shrink-0">
              {initials}
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-0.5">
                Shared Wishlist
              </p>
              <p className="text-lg font-bold text-white leading-tight">
                {ownerName}
              </p>
            </div>
            {wishlist.status === 'OPEN' ? (
              <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-400/20 backdrop-blur-sm border border-green-400/30 text-green-200 rounded-full text-xs font-semibold">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                Open
              </span>
            ) : (
              <span className="ml-auto px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/70 rounded-full text-xs font-semibold">
                {wishlist.status}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="relative text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug font-display">
            {wishlist.title}
          </h1>

          {/* Share message */}
          {(shareMessage || wishlist.description) && (
            <p className="relative text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
              {shareMessage ?? wishlist.description}
            </p>
          )}
        </div>

        <div className="px-7 pb-7">
          {/* Progress section — overlaps hero */}
          <div className="relative -mt-6 bg-white rounded-2xl border border-neutral-100 shadow-medium p-5 mb-6">
            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex items-baseline justify-between mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary-600 font-display">{pct}%</span>
                  <span className="text-sm text-neutral-400 font-medium">funded</span>
                </div>
                <span className="text-sm text-neutral-500">
                  {(wishlist.totalWishcoinsReceived ?? 0).toLocaleString()} / {(wishlist.totalWishcoinsNeeded ?? 0).toLocaleString()} WC
                </span>
              </div>
              <ProgressBar pct={pct} />
            </div>

            {/* Stats row */}
            <div className="flex gap-3">
              <StatCard
                icon="🪙"
                label="Received"
                value={`${(wishlist.totalWishcoinsReceived ?? 0).toLocaleString()} WC`}
                accent
              />
              <StatCard
                icon="🎯"
                label="Goal"
                value={`${(wishlist.totalWishcoinsNeeded ?? 0).toLocaleString()} WC`}
              />
              <StatCard
                icon="📋"
                label="Items"
                value={`${wishlist.itemCount}`}
              />
            </div>
          </div>

          {/* App CTAs */}
          <AppStoreButtons links={appStoreLinks} deepLink={deepLink} />
        </div>
      </div>

      {/* Register interest */}
      <InterestForm shareToken={shareToken} />

      {/* Footer note */}
      <p className="text-center text-xs text-neutral-400 mt-7">
        Powered by{' '}
        <a href="/" className="font-semibold text-primary-500 hover:text-primary-600 hover:underline transition-colors">
          WishWing
        </a>{' '}
        — Nigeria&apos;s digital gifting platform
      </p>
    </div>
  );
}
