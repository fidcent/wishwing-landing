'use client';

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
        body: 'This user profile doesn`t exist or is not publicly visible.',
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

// Share profile section
function ShareProfileSection({
  identifier,
  displayName,
}: Readonly<{ identifier: string; displayName: string }>) {
  const profileUrl = `https://wishwing.fidcent.com/user/${identifier}`;
  const encodedUrl = encodeURIComponent(profileUrl);
  const encodedText = encodeURIComponent(`Check out ${displayName}'s profile on WishWing! 🪄`);

  return (
    <div className="border border-neutral-200 rounded-2xl p-6 bg-white/80 backdrop-blur-sm">
      <p className="text-sm font-semibold text-neutral-700 mb-4">📱 Share this profile</p>
      <div className="flex flex-col sm:flex-row gap-3">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.393-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-3.582 0-6.917-2.536-6.917-5.651 0-3.114 3.335-5.653 6.917-5.653 3.582 0 6.924 2.538 6.924 5.653 0 3.115-3.342 5.651-6.924 5.651z" />
          </svg>
          WhatsApp
        </a>

        {/* Copy link */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(profileUrl);
            alert('Profile link copied to clipboard!');
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl font-semibold text-sm hover:bg-neutral-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Copy Link
        </button>
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

  const { displayName, username, avatarEmoji, isPremium, fidId, deepLink } = initialData;

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
          {/* Avatar & Name */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="text-8xl mb-4">{avatarEmoji}</div>
            <h1 className="text-3xl font-bold text-neutral-900 leading-tight mb-1">
              {displayName}
            </h1>
            <p className="text-neutral-500 text-lg mb-3">@{username}</p>

            {/* Premium badge */}
            {isPremium && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                <span>⭐</span>
                Premium Member
              </span>
            )}
          </div>

          {/* Profile CTA Section */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 mb-6">
            <p className="text-sm text-neutral-600 mb-4">
              Join {displayName} on WishWing and create amazing wishlists together! 🎁
            </p>
            <a
              href={deepLink}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-medium hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.414l-4.707-4.707 1.414-1.414L11 13.586l6.293-6.293 1.414 1.414L11 16.414z" />
              </svg>
              Open in WishWing App
            </a>
          </div>

          {/* FID display */}
          <div className="text-center p-4 bg-neutral-50 rounded-xl mb-6">
            <p className="text-xs text-neutral-400 font-medium mb-1">WISHWING ID</p>
            <p className="font-mono text-sm font-semibold text-neutral-700">{fidId}</p>
          </div>

          {/* Share section */}
          <ShareProfileSection identifier={identifier} displayName={displayName} />
        </div>
      </div>

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
