import { Metadata } from 'next';

// Home page specific metadata that can be imported and extended
export const homeMetadata: Metadata = {
  title: 'WishWing \u2014 Send Gifts That Actually Feel Like Gifts',
  description: "Because a bank transfer doesn't say 'I care.' WishWing makes celebrating the people you love effortless \u2014 wishlists, group gifts, birthday reminders, and WishCoins. Built for Nigeria.",
  alternates: {
    canonical: 'https://wishwing.fidcent.com',
  },
  openGraph: {
    url: 'https://wishwing.fidcent.com',
    type: 'website',
    title: 'WishWing \u2014 Send Gifts That Actually Feel Like Gifts',
    description: "\ud83c\udf81 Because a bank transfer doesn't say 'I care.' Make every celebration in Nigeria personal, joyful, and effortless.",
    images: [
      {
        url: 'https://wishwing.fidcent.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WishWing \u2014 Send Gifts That Actually Feel Like Gifts',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WishWing \u2014 Send Gifts That Actually Feel Like Gifts',
    description: "\ud83c\udf81 Gifting that actually says 'I care.' Wishlists, group gifts, birthday reminders & WishCoins \u2014 built for Nigeria.",
    images: ['https://wishwing.fidcent.com/og-image.png'],
  },
};
