import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - WishWing',
  description: 'Find answers to common questions about WishWing — pricing, features, WishCoins, wishlists, gifting, account security, and more.',
  openGraph: {
    title: 'WishWing FAQ - All Your Questions Answered',
    description: 'Everything you need to know about WishWing — the contact-driven, birthday-based gifting app.',
    url: 'https://wishwing.fidcent.com/faq',
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

      <FAQ />
      
      <Footer />
    </main>
  );
}
