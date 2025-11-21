import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://wishwing.fidcent.com'),
  title: {
    default: 'WishWing - Never Miss a Birthday Again | Smart Birthday Reminder App',
    template: '%s | WishWing'
  },
  description: "Celebrate every moment with WishWing - the smart app that helps you remember birthdays, manage wishlists, and send the perfect gift every time. Download now and get 1000 FREE WishCoins!",
  keywords: [
    'birthday reminder app',
    'birthday calendar',
    'wishlist app',
    'gift giving app',
    'virtual currency gifting',
    'never miss birthdays',
    'WishCoins',
    'group gifting',
    'automated birthday wishes',
    'birthday notification app',
    'gift recommendation app',
    'birthday management',
    'Fidcent'
  ],
  authors: [{ name: 'Fidcent Technologies Limited', url: 'https://tech.fidcent.com' }],
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
    locale: 'en_US',
    url: 'https://wishwing.fidcent.com',
    siteName: 'WishWing',
    title: 'WishWing - Never Miss a Birthday Again',
    description: "Celebrate every moment with WishWing - the smart app that helps you remember birthdays, manage wishlists, and send the perfect gift every time.",
    images: [
      {
        url: '/wishwing-logo.png',
        width: 1200,
        height: 630,
        alt: 'WishWing - Birthday Reminder App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WishWing - Never Miss a Birthday Again',
    description: 'Smart birthday reminders, wishlists, and effortless gifting with WishCoins.',
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
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
