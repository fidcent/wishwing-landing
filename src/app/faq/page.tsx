import Navigation from '@/components/Navigation';
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-5 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Everything you need to know about WishWing
          </p>
        </div>
      </section>

      <FAQ />
      
      <Footer />
    </main>
  );
}
