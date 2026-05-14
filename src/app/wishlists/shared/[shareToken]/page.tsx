import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SharedWishlistView from '@/components/SharedWishlistView';

// Adjust if your wishlist API lives at a different base path
const WISHLIST_API_BASE =
  process.env.WISHLIST_API_URL ?? 'https://api.fidcent.com/wishlist/api/v1';

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
      description: 'View this shared wishlist on WishWing — Nigeria\'s digital gifting platform.',
      openGraph: {
        title: 'Shared Wishlist | WishWing',
        description: 'View this shared wishlist on WishWing — Nigeria\'s digital gifting platform.',
        images: [{ url: 'https://wishwing.fidcent.com/og-image.png', width: 1200, height: 630, alt: 'WishWing — Digital Gifting Platform' }],
        type: 'website',
        siteName: 'WishWing by Fidcent',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@WishWingNG',
        title: 'Shared Wishlist | WishWing',
        description: 'View this shared wishlist on WishWing — Nigeria\'s digital gifting platform.',
        images: ['https://wishwing.fidcent.com/og-image.png'],
      },
    };
  }

  const { wishlist, ownerName, shareMessage, webPreviewUrl } = data;
  const pct = Math.min(100, Math.max(0, wishlist.progressPercentage ?? 0));
  const title = `${ownerName}'s Wishlist — ${wishlist.title}`;
  const description = shareMessage
    ?? wishlist.description
    ?? `Help ${ownerName} reach their wishlist goal! ${pct}% funded with ${wishlist.itemCount} items.`;
  const ogImage = `https://wishwing.fidcent.com/og/wishlist/${params.shareToken}`;

  return {
    title,
    description,
    alternates: {
      canonical: webPreviewUrl,
    },
    openGraph: {
      title,
      description,
      url: webPreviewUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${ownerName}'s wishlist: ${wishlist.title}` }],
      type: 'website',
      siteName: 'WishWing by Fidcent',
      locale: 'en_NG',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@WishWingNG',
      creator: '@WishWingNG',
      title: `🎁 ${title}`,
      description: `${pct}% funded • ${wishlist.itemCount} items — ${description}`,
      images: [ogImage],
    },
    other: {
      'al:ios:url': data.deepLink,
      'al:ios:app_name': 'WishWing',
      'al:android:url': data.deepLink,
      'al:android:app_name': 'WishWing',
      'al:android:package': 'com.wishwing.app',
      'al:web:url': webPreviewUrl,
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

  // Build JSON-LD structured data
  const jsonLd = data
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: data.wishlist.title,
        description: data.shareMessage ?? data.wishlist.description,
        numberOfItems: data.wishlist.itemCount,
        author: {
          '@type': 'Person',
          name: data.ownerName,
        },
        url: data.webPreviewUrl,
        publisher: {
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
