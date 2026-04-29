import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UserProfileView from '@/components/UserProfileView';

// Identity service base URL
const IDENTITY_API_BASE =
  process.env.IDENTITY_API_URL ?? 'https://api.fidcent.com/identity/api/v1';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PublicUserProfile = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  avatarEmoji: string;
  avatarUrl?: string;
  referralCode: string;
  fidId: string;
  isPublic: boolean;
  isPremium: boolean;
  createdAt: string;
  deepLink?: string;
  webPreviewUrl?: string;
};

export type PublicUserError = {
  status: number;
  code: string;
  message: string;
};

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

async function getPublicProfile(
  identifier: string,
): Promise<{ data?: PublicUserProfile; error?: PublicUserError }> {
  try {
    const res = await fetch(
      `${IDENTITY_API_BASE}/users/public-profile?identifier=${encodeURIComponent(identifier)}`,
      { next: { revalidate: 300 } }, // Cache for 5 minutes
    );

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return {
        error: {
          status: res.status,
          code: body.code ?? 'UNKNOWN_ERROR',
          message: body.message ?? 'User profile not found',
        },
      };
    }

    const { data } = await res.json();
    return { data };
  } catch {
    return {
      error: {
        status: 500,
        code: 'NETWORK_ERROR',
        message: 'Failed to load user profile',
      },
    };
  }
}

// ---------------------------------------------------------------------------
// Dynamic Open Graph metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: Readonly<{
  params: { identifier: string };
}>): Promise<Metadata> {
  const { data } = await getPublicProfile(params.identifier);
  const profileUrl = `https://wishwing.fidcent.com/user/${params.identifier}`;

  if (!data) {
    return {
      title: 'User Profile | WishWing',
      description: 'View this user profile on WishWing — Nigeria\'s digital gifting platform.',
      openGraph: {
        title: 'User Profile | WishWing',
        description: 'View this user profile on WishWing — Nigeria\'s digital gifting platform.',
        url: profileUrl,
        images: [{ url: 'https://wishwing.fidcent.com/og-image.jpg', width: 1200, height: 630, alt: 'WishWing — Digital Gifting Platform' }],
        type: 'profile',
        siteName: 'WishWing by Fidcent',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@WishWingNG',
        title: 'User Profile | WishWing',
        description: 'View this user profile on WishWing — Nigeria\'s digital gifting platform.',
        images: ['https://wishwing.fidcent.com/og-image.jpg'],
      },
    };
  }

  const title = `Check out ${data.displayName} (@${data.fidId}) on WishWing 💫`;
  const description = `${data.isPremium ? '⭐ Premium Member • ' : ''}View ${data.displayName}'s profile on WishWing and send them gifts! Nigeria's digital gifting platform.`;
  const ogImage = `https://wishwing.fidcent.com/og/user/${params.identifier}`;

  return {
    title,
    description,
    alternates: {
      canonical: profileUrl,
    },
    openGraph: {
      title,
      description,
      url: profileUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${data.displayName}'s WishWing profile` }],
      type: 'profile',
      siteName: 'WishWing by Fidcent',
      locale: 'en_NG',
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@WishWingNG',
      creator: '@WishWingNG',
      title: `🪄 ${data.displayName} on WishWing`,
      description,
      images: [ogImage],
    },
    other: {
      'al:ios:url': `wishwing://user/${params.identifier}`,
      'al:ios:app_name': 'WishWing',
      'al:android:url': `wishwing://user/${params.identifier}`,
      'al:android:app_name': 'WishWing',
      'al:android:package': 'com.wishwing.app',
      'al:web:url': profileUrl,
      'profile:username': data.username,
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function UserProfilePage({
  params,
}: Readonly<{
  params: { identifier: string };
}>) {
  const { identifier } = params;
  const { data, error } = await getPublicProfile(identifier);

  // Construct deepLink and webPreviewUrl locally
  const enrichedData = data
    ? {
      ...data,
      deepLink: `wishwing://user/${identifier}`,
      webPreviewUrl: `https://wishwing.fidcent.com/user/${identifier}`,
    }
    : undefined;

  // Build JSON-LD structured data
  const jsonLd = data
    ? {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: data.displayName,
      alternateName: `@${data.username}`,
      url: `https://wishwing.fidcent.com/user/${identifier}`,
      identifier: data.fidId,
      memberOf: {
        '@type': 'Organization',
        name: 'WishWing by Fidcent',
        url: 'https://wishwing.fidcent.com',
      },
    }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 pt-20 pb-16">
        <UserProfileView
          identifier={identifier}
          initialData={enrichedData}
          initialError={error}
        />
      </main>
      <Footer />
    </>
  );
}
