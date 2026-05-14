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
    default: 'WishWing — Send Gifts That Actually Feel Like Gifts',
    template: '%s | WishWing'
  },
  description: "Celebrating the people you love shouldn't feel like a chore. WishWing makes every birthday, wedding, and special occasion personal — wishlists, group gifts, auto-reminders, and WishCoins. Built for Nigeria.",
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
    other: {
      'facebook-domain-verification': 'empofbr0sn1bdot3yq1fz542cpqoxu',
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
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    alternateLocale: ['en_US', 'en_GB'],
    url: 'https://wishwing.fidcent.com',
    siteName: 'WishWing by Fidcent',
    title: 'WishWing — Send Gifts That Actually Feel Like Gifts',
    description: "🎁 Gifting that actually says 'I care.' Wishlists, group gifts, birthday reminders & WishCoins — built for Nigeria.",
    countryName: 'Nigeria',
    emails: ['hello_wishwing@fidcent.com'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WishWing — Send Gifts That Actually Feel Like Gifts',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fidcenttech',
    creator: '@fidcenttech',
    title: 'WishWing — Send Gifts That Actually Feel Like Gifts',
    description: "🎁 Because a bank transfer doesn't say 'I care.' Wishlists, group gifts, birthday reminders & WishCoins — built for Nigeria.",
    images: ['/og-image.png'],
  },
  appLinks: {
    ios: {
      url: 'wishwing://app',
      app_store_id: '6762185672',
    },
    android: {
      package: 'org.fidcent.wishwing',
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
    <html lang="en-NG">
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
