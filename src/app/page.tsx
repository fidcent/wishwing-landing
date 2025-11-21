'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { analytics, useScrollDepth } from '@/utils/analytics';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import WishCoinSection from '@/components/WishCoinSection';
import GiftingShowcase from '@/components/GiftingShowcase';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize analytics
    analytics.init();
    analytics.trackPageView('/');

    // Setup scroll depth tracking
    const cleanup = useScrollDepth();
    
    return cleanup;
  }, []);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WishWing',
    url: 'https://wishwing.fidcent.com',
    logo: 'https://wishwing.fidcent.com/wishwing-logo.png',
    description: 'Never miss a birthday again with WishWing',
    founder: {
      '@type': 'Organization',
      name: 'Fidcent Technologies Limited',
      url: 'https://tech.fidcent.com',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: 'https://wishwing.fidcent.com/contact',
    },
    sameAs: [
      'https://twitter.com/wishwing',
      'https://facebook.com/wishwing',
      'https://instagram.com/wishwing',
      'https://linkedin.com/company/wishwing',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is WishWing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WishWing is a smart birthday reminder app that helps you never miss a birthday. It includes features like wishlist management, WishCoin virtual currency for gifting, and automated greetings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do WishCoins work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WishCoins are our virtual currency that you can use to send gifts, contribute to wishlists, and purchase gift cards. You can top up easily and track your spending within the app.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WishWing free to download?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! WishWing is 100% free to download and use.',
        },
      },
      {
        '@type': 'Question',
        name: 'What platforms is WishWing available on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WishWing is available on both iOS (App Store) and Android (Google Play Store).',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main id="main-content" className="min-h-screen">
        <Navigation />
        <Hero />
        <Features />
        <HowItWorks />
        <WishCoinSection />
        <GiftingShowcase />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
