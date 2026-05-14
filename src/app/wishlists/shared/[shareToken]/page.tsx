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
      title: 'A Wish Is Waiting | WishWing',
      description: "Someone shared a wishlist with you on WishWing — where gifting feels as good to give as it does to receive.",
      openGraph: {
        title: 'A Wish Is Waiting | WishWing',
        description: "Someone shared a wishlist with you on WishWing — where gifting feels as good to give as it does to receive.",
        images: [{ url: 'https://wishwing.fidcent.com/og-image.png', width: 1200, height: 630, alt: 'WishWing — Send Gifts That Actually Feel Like Gifts' }],
        type: 'website',
        siteName: 'WishWing by Fidcent',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@fidcenttech',
        title: 'A Wish Is Waiting | WishWing',
        description: "Someone shared a wishlist with you on WishWing — where gifting feels as good to give as it does to receive.",
        images: ['https://wishwing.fidcent.com/og-image.png'],
      },
    };
  }

  const { wishlist, ownerName, shareMessage, webPreviewUrl } = data;
  const pct = Math.min(100, Math.max(0, wishlist.progressPercentage ?? 0));
  const title = `${ownerName} has a wish ✨ — ${wishlist.title}`;
  const description = shareMessage
    ?? wishlist.description
    ?? `Help ${ownerName} make it happen! ${pct}% funded so far, with ${wishlist.itemCount} things they'd love.`;
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
      site: '@fidcenttech',
      creator: '@fidcenttech',
      title: `✨ ${ownerName}'s wish — ${wishlist.title}`,
      description: `✨ ${ownerName} shared their wishlist — ${pct}% funded. See what they're wishing for.`,
      images: [ogImage],
    },
    other: {
      'al:ios:url': data.deepLink,
      'al:ios:app_name': 'WishWing',
      'al:android:url': data.deepLink,
      'al:android:app_name': 'WishWing',
      'al:android:package': 'org.fidcent.wishwing',
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
