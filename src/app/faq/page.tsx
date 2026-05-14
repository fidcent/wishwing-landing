import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Everything You Need to Know — WishWing FAQ',
  description: "From WishCoins to wishlists to group gifting — here's everything you need to know before your first celebration on WishWing.",
  openGraph: {
    title: 'Everything You Need to Know — WishWing FAQ',
    description: 'Curious how WishWing works? WishCoins, wishlists, group gifting — all your questions answered.',
    url: 'https://wishwing.fidcent.com/faq',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fidcenttech',
    title: 'Everything You Need to Know — WishWing FAQ',
    description: 'Curious how WishWing works? WishCoins, wishlists, group gifting — all your questions answered.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/faq',
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader badge="Common Questions" title="Frequently asked questions" subtitle="Last updated: May 13, 2026" />

      <FaqSection />
      
      <Footer />
    </main>
  );
}
