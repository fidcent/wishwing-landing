'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { analytics, useScrollDepth } from '@/utils/analytics';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WaitlistForm from '@/components/WaitlistForm';
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
    description: 'Smart birthday and gifting app for Nigeria. Never miss a birthday again.',
    founder: {
      '@type': 'Organization',
      name: 'Fidcent Technologies Limited',
      url: 'https://tech.fidcent.com',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@wishwing.com',
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
    datePublished: '2026-01-07',
    description: 'Never miss a birthday again. Smart calendar, wishlists, and seamless gifting with WishCoins. Send airtime, data, and gifts across Nigeria.',
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
          text: 'WishWing is a mobile app that helps you remember birthdays, manage wishlists, and send gifts using our virtual currency called WishCoins.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does WishWing launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WishWing launches on January 7, 2026 on iOS and Android app stores.',
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
          text: 'WishCoins are our virtual currency. 1 WishCoin = ₦2.5. Use them to send gifts, airtime, greetings, and more.',
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
