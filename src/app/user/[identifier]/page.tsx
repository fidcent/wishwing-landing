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

  if (!data) {
    return {
      title: 'User Profile | WishWing',
      description: 'View this user profile on WishWing.',
    };
  }

  const title = `${data.displayName} on WishWing`;
  const description = `${data.isPremium ? '⭐ Premium Member • ' : ''}Join ${data.displayName} and discover their WishWing profile.`;
  const ogImage = `https://wishwing.fidcent.com/og/user/${params.identifier}.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://wishwing.fidcent.com/user/${params.identifier}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
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

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 pt-20 pb-16">
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
