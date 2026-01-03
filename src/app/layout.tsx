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
    default: 'WishWing - Never Miss a Birthday Again | Gift App Nigeria',
    template: '%s | WishWing'
  },
  description: "WishWing helps you remember every birthday and send perfect gifts. Schedule greetings, send airtime, manage wishlists with WishCoins. Launching Jan 7, 2026 in Nigeria. Get 1000 FREE WishCoins!",
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
    'birthday app nigeria',
    'gift app',
    'wishcoin',
    'send airtime',
    'birthday reminder',
    'wishlist app',
    'group gifting',
    'nigerian app',
    'send data nigeria',
    'birthday calendar',
    'automated greetings',
    'whatsapp birthday message',
    'MTN airtime',
    'Glo data',
    'Fidcent Technologies',
    'Lagos app',
    'Nigerian fintech'
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
    siteName: 'WishWing',
    title: 'WishWing - Never Miss a Birthday Again | Gift App Nigeria',
    description: "Smart birthday management app for Nigeria. Send gifts, schedule greetings, manage wishlists with WishCoins. Launching Jan 7, 2026. Get 1000 FREE WishCoins!",
    countryName: 'Nigeria',
    images: [
      {
        url: '/wishwing-logo.png',
        width: 1200,
        height: 630,
        alt: 'WishWing - Birthday & Gifting App for Nigeria',
        type: 'image/png',
      },
      {
        url: '/wishwing-logo.png',
        width: 800,
        height: 600,
        alt: 'WishWing App Interface',
        type: 'image/png',
      },
    ],
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
  twitter: {
    card: 'summary_large_image',
    title: 'WishWing - Never Miss a Birthday Again',
    description: 'Launching Jan 7, 2026. Get 1000 FREE WishCoins! Send airtime, data & gifts to loved ones across Nigeria.',
    images: ['/wishwing-logo.png'],
    creator: '@wishwing',
    site: '@wishwing',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com',
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
