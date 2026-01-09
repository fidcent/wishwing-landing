import { Metadata } from 'next';

// Home page specific metadata that can be imported and extended
export const homeMetadata: Metadata = {
  title: 'WishWing - Birthday Reminder & Gift App Nigeria | Celebrate Better, Together',
  description: "Nigeria's #1 birthday reminder and gifting app. Automatically send gifts, airtime, data & greetings. Manage wishlists, group gifts & earn WishCoins. Launching Jan 7, 2026. Join 10,000+ Nigerians - Get 1000 FREE WishCoins!",
  alternates: {
    canonical: 'https://wishwing.fidcent.com',
  },
  openGraph: {
    url: 'https://wishwing.fidcent.com',
    type: 'website',
    title: 'WishWing - Birthday Reminder & Gift App Nigeria | Celebrate Better, Together',
    description: "🎂 Nigeria's #1 birthday reminder & gifting app. Send airtime, data & gifts automatically. Earn WishCoins, manage wishlists & group gifts. Join 10,000+ users. Launching Jan 7, 2026 - Get 1000 FREE WishCoins!",
    images: [
      {
        url: 'https://wishwing.fidcent.com/wishwing-logo.png',
        width: 1200,
        height: 630,
        alt: 'WishWing - Birthday Reminder & Gift App for Nigeria',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WishWing - Birthday Reminder & Gift App Nigeria',
    description: "🎂 Nigeria's #1 birthday reminder & gifting app. Send airtime, data & gifts automatically. Earn WishCoins & join 10,000+ users. Get 1000 FREE WishCoins!",
    images: ['https://wishwing.fidcent.com/wishwing-logo.png'],
  },
};
