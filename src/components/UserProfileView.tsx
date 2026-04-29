'use client';

import { useState } from 'react';
import type { PublicUserProfile, PublicUserError } from '@/app/user/[identifier]/page';

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

type ErrorInfo = {
  icon: string;
  heading: string;
  body: string;
};

function resolveError(error: PublicUserError): ErrorInfo {
  switch (error.code) {
    case 'USER_NOT_FOUND':
      return {
        icon: '🔍',
        heading: 'User not found',
        body: 'This user profile doesn\'t exist or is not publicly visible.',
      };
    case 'PROFILE_PRIVATE':
      return {
        icon: '🔒',
        heading: 'Profile is private',
        body: 'This user has set their profile to private.',
      };
    default:
      return {
        icon: '🌐',
        heading: 'Something went wrong',
        body: error.message ?? 'Unable to load this profile right now.',
      };
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ErrorState({ error }: Readonly<{ error: PublicUserError }>) {
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

// Share profile section
function ShareProfileSection({
  identifier,
  displayName,
}: Readonly<{ identifier: string; displayName: string }>) {
  const profileUrl = `https://wishwing.fidcent.com/user/${identifier}`;
  const encodedUrl = encodeURIComponent(profileUrl);
  const encodedText = encodeURIComponent(`Check out ${displayName}'s profile on WishWing! 🪄`);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-300/40 via-accent-300/40 to-primary-300/40 rounded-2xl" />
      <div className="relative m-[1px] bg-white/90 backdrop-blur-sm rounded-[15px] p-5">
        <p className="text-sm font-bold text-neutral-700 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-base">📱</span>
          Share this profile
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            id="share-whatsapp-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-medium transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.393-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004A9.87 9.87 0 015.12 20.14l-.38-.226-3.926 1.03 1.05-3.83-.25-.396A9.83 9.83 0 010 12.067C0 5.955 4.935 1.02 12.05 1.02c3.44 0 6.672 1.34 9.098 3.772a12.77 12.77 0 013.769 9.095c-.005 6.112-4.942 11.047-11.048 11.047" />
            </svg>
            WhatsApp
          </a>

          {/* Twitter/X */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            id="share-twitter-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl font-semibold text-sm hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-medium transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share on X
          </a>

          {/* Copy link */}
          <button
            onClick={handleCopy}
            id="copy-profile-link-btn"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-medium ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Copy Link
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Detail row item
function DetailItem({
  icon,
  label,
  value,
}: Readonly<{ icon: string; label: string; value: string }>) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-base shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-semibold text-neutral-700">{value}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main view
// ---------------------------------------------------------------------------

export default function UserProfileView({
  identifier,
  initialData,
  initialError,
}: Readonly<{
  identifier: string;
  initialData?: PublicUserProfile;
  initialError?: PublicUserError;
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

  const { displayName, username, avatarEmoji, isPremium, deepLink, fidId, createdAt } = initialData;

  // Format join date
  const joinDate = createdAt
    ? new Date(createdAt).toLocaleDateString('en-NG', { month: 'long', year: 'numeric' })
    : null;

  return (
    <div className="max-w-lg mx-auto px-4 py-8 animate-fade-in-up relative">
      {/* Floating decorative orbs */}
      <div className="absolute -top-16 -right-12 w-44 h-44 bg-primary-400/15 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-56 h-56 bg-accent-300/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Back link */}
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

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-strong overflow-hidden mb-5 relative">
        {/* Hero header */}
        <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 px-8 pt-12 pb-20 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-12 right-0 w-28 h-28 bg-white/5 rounded-full translate-x-1/3" />
          <div className="absolute bottom-0 left-1/2 w-64 h-32 bg-white/3 rounded-full -translate-x-1/2 translate-y-1/2" />

          {/* Avatar with glowing ring */}
          <div className="relative inline-block mb-5">
            <div className="absolute inset-0 w-[112px] h-[112px] mx-auto rounded-full bg-accent-400/30 blur-xl animate-pulse-slow" />
            <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/15 backdrop-blur-sm border-[3px] border-white/30 text-6xl shadow-strong animate-float" style={{ animationDuration: '4s' }}>
              {avatarEmoji}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-1.5 font-display">
            {displayName}
          </h1>
          <p className="text-white/60 text-base font-medium mb-4">@{username}</p>

          {isPremium && (
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-900 rounded-full text-xs font-bold shadow-medium">
              <span className="animate-pulse-slow">⭐</span>
              Premium Member
            </span>
          )}
        </div>

        <div className="px-7 pb-7">
          {/* Open in app CTA — overlapping hero */}
          <a
            href={deepLink}
            id="open-profile-in-app"
            className="group -mt-7 relative flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white rounded-2xl font-bold text-base shadow-strong hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 mb-6 overflow-hidden"
          >
            {/* Hover shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <svg className="w-5 h-5 shrink-0 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="relative z-10">View Profile in WishWing</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Profile details */}
          <div className="bg-neutral-50/80 rounded-2xl border border-neutral-100 px-5 mb-5 divide-y divide-neutral-100">
            {fidId && (
              <DetailItem icon="🆔" label="FID ID" value={fidId} />
            )}
            {joinDate && (
              <DetailItem icon="📅" label="Member Since" value={joinDate} />
            )}
            <DetailItem
              icon={isPremium ? '⭐' : '👤'}
              label="Account Type"
              value={isPremium ? 'Premium' : 'Standard'}
            />
          </div>

          {/* Share profile */}
          <ShareProfileSection identifier={identifier} displayName={displayName} />
        </div>
      </div>

      <p className="text-center text-xs text-neutral-400 mt-5">
        Powered by{' '}
        <a href="/" className="font-semibold text-primary-500 hover:text-primary-600 hover:underline transition-colors">
          WishWing
        </a>{' '}
        — Nigeria&apos;s digital gifting platform
      </p>
    </div>
  );
}
