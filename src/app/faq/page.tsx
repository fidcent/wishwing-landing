import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - WishWing',
  description: 'Find answers to common questions about WishWing - pricing, features, launch date, payment methods, and more. Get help with birthday reminders and gifting.',
  openGraph: {
    title: 'WishWing FAQ - All Your Questions Answered',
    description: 'Everything you need to know about WishWing birthday and gifting app.',
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
      <PageHeader badge="Common Questions" title="Frequently asked questions" subtitle="Everything you need to know about WishWing" />

      <FAQ />
      
      <Footer />
    </main>
  );
}
