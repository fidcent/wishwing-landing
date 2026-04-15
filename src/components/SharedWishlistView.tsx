'use client';

import { useState } from 'react';
import type { SharedWishlistData, SharedWishlistError } from '@/app/wishlists/shared/[shareToken]/page';

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

const WISHLIST_API_BASE =
  process.env.NEXT_PUBLIC_WISHLIST_API_URL ??
  'https://api-dev.fidcent.com/wishcenter/wishlist/api/v1';

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
      <div className="text-6xl mb-6">{info.icon}</div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-3">{info.heading}</h1>
      <p className="text-neutral-500 text-lg mb-10">{info.body}</p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-2xl font-semibold shadow-medium hover:bg-primary-700 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to WishWing
      </a>
    </div>
  );
}

// Progress ring (SVG-based)
function ProgressCircle({ pct }: Readonly<{ pct: number }>) {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg width="96" height="96" viewBox="0 0 96 96" className="rotate-[-90deg]">
      <circle cx="48" cy="48" r={r} fill="none" stroke="#E5E5E5" strokeWidth="8" />
      <circle
        cx="48"
        cy="48"
        r={r}
        fill="none"
        stroke="url(#wishGrad)"
        strokeWidth="8"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="wishGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
      </defs>
    </svg>
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
    <div className="flex flex-col gap-3">
      {/* Open in app — primary CTA for users who might have it */}
      <a
        href={deepLink}
        className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl font-semibold text-base shadow-strong hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.414l-4.707-4.707 1.414-1.414L11 13.586l6.293-6.293 1.414 1.414L11 16.414z" />
        </svg>
        Open in WishWing App
      </a>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-neutral-200" />
        <span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Don't have the app?</span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {/* iOS */}
        <a
          href={links.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-3 py-3 px-5 bg-neutral-900 text-white rounded-2xl font-semibold text-sm shadow-medium hover:bg-neutral-800 hover:-translate-y-0.5 transition-all duration-200"
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
          className="flex-1 flex items-center justify-center gap-3 py-3 px-5 bg-neutral-900 text-white rounded-2xl font-semibold text-sm shadow-medium hover:bg-neutral-800 hover:-translate-y-0.5 transition-all duration-200"
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
      <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center animate-scale-in">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-semibold text-green-800 mb-1">Interest registered!</p>
        <p className="text-sm text-green-700">
          You'll receive an email with a download link so you can contribute when the app is ready.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-neutral-200 rounded-2xl p-6 bg-white/80 backdrop-blur-sm">
      <p className="text-sm font-semibold text-neutral-700 mb-4">
        📩 Let the owner know you&apos;re interested — we&apos;ll email you a link once you can contribute.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:opacity-50"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:opacity-50"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Add a message (optional)"
          rows={2}
          disabled={submitting}
          className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:opacity-50 resize-none"
        />
        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-xl">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-primary-600 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
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
            'Register Interest'
          )}
        </button>
      </form>
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
    <div className="max-w-xl mx-auto px-4 py-12 animate-fade-in-up">
      {/* WishWing badge */}
      <a
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-neutral-200/60 shadow-soft mb-8 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        WishWing
      </a>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-strong overflow-hidden mb-6">
        {/* Gradient header bar */}
        <div className="h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

        <div className="p-8">
          {/* Owner row */}
          <div className="flex items-center gap-4 mb-6">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-medium shrink-0">
              {initials}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-0.5">
                Shared wishlist
              </p>
              <p className="text-lg font-bold text-neutral-900 leading-tight">
                {ownerName}
              </p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-neutral-900 mb-2 leading-snug">
            {wishlist.title}
          </h1>

          {/* Share message or description */}
          {(shareMessage || wishlist.description) && (
            <p className="text-neutral-600 text-base mb-6 leading-relaxed">
              {shareMessage ?? wishlist.description}
            </p>
          )}

          {/* Progress section */}
          <div className="bg-neutral-50 rounded-2xl p-5 mb-6">
            <div className="flex items-center gap-6">
              {/* Progress circle */}
              <div className="relative shrink-0">
                <ProgressCircle pct={pct} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-neutral-900">{pct}%</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-xs text-neutral-400 font-medium mb-1">Funded</p>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-neutral-400">Received</p>
                    <p className="font-bold text-primary-700">
                      {(wishlist.totalWishcoinsReceived ?? 0).toLocaleString()} WC
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Needed</p>
                    <p className="font-bold text-neutral-700">
                      {(wishlist.totalWishcoinsNeeded ?? 0).toLocaleString()} WC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item count */}
            <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center gap-2 text-sm text-neutral-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>
                <strong className="text-neutral-700">{wishlist.itemCount}</strong> items on this wishlist
              </span>
              {wishlist.status === 'OPEN' ? (
                <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  {' '}Open
                </span>
              ) : (
                <span className="ml-auto px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-full text-xs font-semibold">
                  {wishlist.status}
                </span>
              )}
            </div>
          </div>

          {/* App CTAs */}
          <AppStoreButtons links={appStoreLinks} deepLink={deepLink} />
        </div>
      </div>

      {/* Register interest */}
      <InterestForm shareToken={shareToken} />

      {/* Footer note */}
      <p className="text-center text-xs text-neutral-400 mt-6">
        Powered by{' '}
        <a href="/" className="font-semibold text-primary-500 hover:underline">
          WishWing
        </a>{' '}
        — Nigeria&apos;s digital gifting platform
      </p>
    </div>
  );
}
