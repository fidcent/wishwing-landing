import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7C3AED' },
    { media: '(prefers-color-scheme: dark)', color: '#7C3AED' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://wishwing.fidcent.com'),
  title: {
    default: 'WishWing by Fidcent - Digital Gifting & Celebration App Nigeria | Send Airtime, Data & Gifts',
    template: '%s | WishWing'
  },
  description: "Nigeria's #1 digital gifting and celebration app by Fidcent Technologies. Send airtime, data, gifts & greetings for birthdays, anniversaries & special occasions. Manage wishlists, group gifts & earn WishCoins. Launching Jan 7, 2026. Join 10,000+ Nigerians - Get 1000 FREE WishCoins!",
  alternates: {
    canonical: 'https://wishwing.fidcent.com',
  },
  applicationName: 'WishWing',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
  keywords: [
    // Core Brand Terms
    'WishWing',
    'WishWing app',
    'WishWing by Fidcent',
    'Fidcent',
    'Fidcent Technologies',
    'Fidcent Tech',
    'Fidcent Nigeria',
    'Fidcent app',
    
    // Digital Gifting
    'digital gifting nigeria',
    'gift app nigeria',
    'send gifts nigeria',
    'online gifting platform',
    'group gifting nigeria',
    'wishlist app',
    'gift reminder app',
    'celebration app nigeria',
    
    // Airtime & Data
    'send airtime nigeria',
    'send data nigeria',
    'buy airtime online',
    'MTN airtime gift',
    'Glo data bundle',
    '9mobile airtime',
    'Airtel data',
    'recharge card gift',
    'data bundle gift',
    
    // Birthday & Occasions
    'birthday app nigeria',
    'birthday reminder app',
    'birthday notification app',
    'nigerian birthday app',
    'birthday calendar app',
    'automated birthday greetings',
    'never forget birthday',
    'automatic birthday wishes',
    'whatsapp birthday message',
    'anniversary reminder',
    'occasion reminder app',
    'celebration reminder',
    
    // WishCoin
    'wishcoin',
    'wishcoin rewards',
    'earn wishcoins',
    'free wishcoins',
    'wishcoin app',
    
    // Location-based
    'Lagos gifting app',
    'Nigerian app',
    'Nigeria fintech',
    'Abuja gifting',
    'Port Harcourt gifts',
    
    // Features
    'group gift contribution',
    'wishlist manager',
    'gift scheduler',
    'automated gifting',
    'social gifting platform'
  ],
  authors: [{ name: 'Fidcent Technologies Limited', url: 'https://fidcent.com' }],
  creator: 'Fidcent Technologies Limited',
  publisher: 'Fidcent Technologies Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    alternateLocale: ['en_US', 'en_GB'],
    url: 'https://wishwing.fidcent.com',
    siteName: 'WishWing by Fidcent',
    title: 'WishWing by Fidcent - Digital Gifting & Celebration App Nigeria',
    description: "🎁 Nigeria's #1 digital gifting & celebration app by Fidcent Technologies. Send airtime, data & gifts for birthdays, anniversaries & special occasions. Earn WishCoins, manage wishlists & group gifts. Launching Jan 7, 2026 - Get 1000 FREE WishCoins!",
    countryName: 'Nigeria',
    emails: ['hello_wishwing@fidcent.com'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WishWing by Fidcent - Digital Gifting & Celebration App for Nigeria',
        type: 'image/png',
      },
      {
        url: '/wishwing-logo.png',
        width: 800,
        height: 600,
        alt: 'WishWing App Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WishWingNG',
    creator: '@FidcentTech',
    title: 'WishWing by Fidcent - Digital Gifting & Celebration App Nigeria',
    description: "🎁 Nigeria's #1 digital gifting app by Fidcent Tech. Send airtime, data & gifts for all occasions. Earn WishCoins & join 10,000+ users. Get 1000 FREE WishCoins!",
    images: ['/og-image.png'],
  },
  appLinks: {
    ios: {
      url: 'wishwing://app',
      app_store_id: 'your-app-store-id',
    },
    android: {
      package: 'com.wishwing.app',
      app_name: 'WishWing',
    },
  },
  category: 'Lifestyle',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" prefix="og: https://ogp.me/ns#">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Nigeria" />
      </head>
      <body itemScope itemType="https://schema.org/WebPage">
        {children}
      </body>
    </html>
  );
}
