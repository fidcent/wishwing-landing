import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SharedWishlistView from '@/components/SharedWishlistView';

// Adjust if your wishlist API lives at a different base path
const WISHLIST_API_BASE =
  process.env.WISHLIST_API_URL ?? 'https://api-dev.fidcent.com/wishlist/api/v1';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SharedWishlistData = {
  wishlist: {
    _id: string;
    title: string;
    description: string;
    status: string;
    totalWishcoinsNeeded: number;
    totalWishcoinsReceived: number;
    itemCount: number;
    progressPercentage: number;
  };
  ownerName: string;
  shareMessage?: string;
  deepLink: string;
  webPreviewUrl: string;
  appStoreLinks: { ios: string; android: string };
};

export type SharedWishlistError = {
  status: number;
  code: string;
  message: string;
};

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

async function getSharedWishlist(
  shareToken: string,
): Promise<{ data?: SharedWishlistData; error?: SharedWishlistError }> {
  try {
    const res = await fetch(
      `${WISHLIST_API_BASE}/wishlists/shared/${shareToken}`,
      { next: { revalidate: 60 } },
    );

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return {
        error: {
          status: res.status,
          code: body.code ?? 'UNKNOWN_ERROR',
          message: body.message ?? 'An error occurred',
        },
      };
    }

    const data: SharedWishlistData = await res.json();
    return { data };
  } catch {
    return {
      error: {
        status: 500,
        code: 'NETWORK_ERROR',
        message: 'Failed to load wishlist',
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
  params: { shareToken: string };
}>): Promise<Metadata> {
  const { data } = await getSharedWishlist(params.shareToken);

  if (!data) {
    return {
      title: 'Shared Wishlist | WishWing',
      description: 'View this shared wishlist on WishWing.',
    };
  }

  const { wishlist, ownerName, shareMessage, webPreviewUrl } = data;
  const title = `${ownerName}'s Wishlist — ${wishlist.title}`;
  const description = shareMessage ?? wishlist.description;
  const ogImage = `https://wishwing.fidcent.com/og/wishlist/${params.shareToken}.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: webPreviewUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
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

export default async function SharedWishlistPage({
  params,
}: Readonly<{
  params: { shareToken: string };
}>) {
  const { shareToken } = params;
  const { data, error } = await getSharedWishlist(shareToken);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 pt-20 pb-16">
        <SharedWishlistView
          shareToken={shareToken}
          initialData={data}
          initialError={error}
        />
      </main>
      <Footer />
    </>
  );
}
