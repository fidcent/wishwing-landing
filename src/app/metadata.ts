import { Metadata } from 'next';

// Home page specific metadata that can be imported and extended
export const homeMetadata: Metadata = {
  title: 'WishWing — Celebrate Better, Together',
  description: 'Send gifts and greetings, create wishlists, and never miss a special moment. WishWing makes gifting personal for birthdays, weddings, and every occasion in Nigeria.',
  alternates: {
    canonical: 'https://wishwing.fidcent.com',
  },
  openGraph: {
    url: 'https://wishwing.fidcent.com',
    type: 'website',
    title: 'WishWing — Celebrate Better, Together',
    description: '🎁 Send gifts and greetings, create wishlists, and never miss a special moment. Built for Nigeria.',
    images: [
      {
        url: 'https://wishwing.fidcent.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WishWing — Celebrate Better, Together',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WishWing — Celebrate Better, Together',
    description: '🎁 Send gifts and greetings, create wishlists, and never miss a special moment. Built for Nigeria.',
    images: ['https://wishwing.fidcent.com/og-image.png'],
  },
};
