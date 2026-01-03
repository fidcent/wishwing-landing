'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { analytics, useScrollDepth } from '@/utils/analytics';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WaitlistForm from '@/components/WaitlistForm';
import ProblemSection from '@/components/ProblemSection';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import WishCoinSection from '@/components/WishCoinSection';
import GiftingShowcase from '@/components/GiftingShowcase';
import VisionSection from '@/components/VisionSection';
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
    description: 'Nigeria\'s digital gifting infrastructure. Transform cash-based gift-giving into social, meaningful celebrations.',
    founder: {
      '@type': 'Organization',
      name: 'Fidcent Technologies Limited',
      url: 'https://tech.fidcent.com',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'hello_wishwing@fidcent.com',
      url: 'https://wishwing.fidcent.com/contact',
    },
    sameAs: [
      'https://twitter.com/wishwing',
      'https://facebook.com/wishwing',
      'https://instagram.com/wishwing',
      'https://linkedin.com/company/wishwing',
    ],
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'WishWing',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NGN',
    },
    author: {
      '@type': 'Organization',
      name: 'Fidcent Technologies Limited',
    },
    description: 'Nigeria\'s digital gifting platform. Create wishlists, coordinate group gifts, and celebrate every occasion with WishCoins. Transform how you give and receive gifts.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
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
          text: 'WishWing is Nigeria\'s social gifting platform that transforms cash-based gift-giving into structured, meaningful celebrations. It uses WishCoins—a virtual currency designed specifically for gifting—to make every occasion memorable.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does WishWing launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WishWing is launching soon on iOS and Android app stores. Join the waitlist to be notified when we go live!',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WishWing free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! The app is free to download. You only pay for WishCoins when you want to send gifts or schedule greetings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are WishCoins?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WishCoins are our virtual currency that standardizes gifting—more meaningful than impersonal cash transfers. 1 WishCoin = ₦2.5. Use them to send gifts, contribute to wishlists, coordinate group gifts, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do WishCoins cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Starting at ₦250 for 100 WishCoins. Bigger bundles include bonus coins (up to 20% extra).',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept credit/debit cards (Visa, Mastercard, Verve), bank transfer, USSD, and mobile money.',
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
        id="app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main id="main-content" className="min-h-screen">
        <Navigation />
        <Hero />
        <WaitlistForm />
        <ProblemSection />
        <Features />
        <HowItWorks />
        <WishCoinSection />
        <GiftingShowcase />
        <VisionSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
