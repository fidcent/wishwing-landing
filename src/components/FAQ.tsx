'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General
  {
    category: 'General',
    question: 'What is WishWing?',
    answer: 'WishWing is a mobile app that helps you remember birthdays, manage wishlists, and send gifts using our virtual currency called WishCoins.',
  },
  {
    category: 'General',
    question: 'When does WishWing launch?',
    answer: 'WishWing launches on January 7, 2026 on iOS and Android app stores.',
  },
  {
    category: 'General',
    question: 'Is WishWing free?',
    answer: 'Yes! The app is free to download. You only pay for WishCoins when you want to send gifts or schedule greetings.',
  },
  {
    category: 'General',
    question: 'What are WishCoins?',
    answer: 'WishCoins are our virtual currency. 1 WishCoin = ₦2.5. Use them to send gifts, airtime, greetings, and more.',
  },
  
  // Pricing & Payments
  {
    category: 'Pricing & Payments',
    question: 'How much do WishCoins cost?',
    answer: 'Starting at ₦250 for 100 WishCoins. Bigger bundles include bonus coins (up to 20% extra). We offer Starter (100 coins), Popular (550 coins with bonus), Premium (1,150 coins with bonus), and Ultimate (6,000 coins with bonus) packages.',
  },
  {
    category: 'Pricing & Payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards (Visa, Mastercard, Verve), bank transfer, USSD, and mobile money.',
  },
  {
    category: 'Pricing & Payments',
    question: 'Can I get a refund on WishCoin purchases?',
    answer: 'WishCoin purchases are non-refundable, but you can cash out (5% fee, 1,000 minimum) after 30 days.',
  },
  {
    category: 'Pricing & Payments',
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees! Transfer fee: 2% (minimum ₦5), Cash-out fee: 5%. All fees are clearly stated before transactions.',
  },
  
  // Features
  {
    category: 'Features',
    question: 'Can I import my contacts\' birthdays?',
    answer: 'Yes! WishWing syncs with your phone contacts to automatically import birthdays and keep everything organized.',
  },
  {
    category: 'Features',
    question: 'How do greetings work?',
    answer: 'Schedule personalized messages to be sent via SMS, WhatsApp, Email, or push notification at your chosen time (Midnight, Morning, Afternoon, Evening, or Custom time).',
  },
  {
    category: 'Features',
    question: 'What gifts can I send?',
    answer: 'Currently: WishCoins, airtime, data, and gift cards. Coming soon: flowers, cakes, experiences, and more physical gifts.',
  },
  {
    category: 'Features',
    question: 'Does the recipient need the app?',
    answer: 'For airtime/data/greetings: No. For WishCoin transfers and wishlist features: Yes, they need the app.',
  },
  {
    category: 'Features',
    question: 'What is group gifting?',
    answer: 'Pool contributions with multiple friends to give bigger gifts. Track who has contributed, set funding goals, and the recipient gets notified automatically when the goal is met.',
  },
  {
    category: 'Features',
    question: 'How do wishlists work?',
    answer: 'Create unlimited wishes with photos and descriptions, set funding goals in WishCoins, and control privacy (Public/Private/Friends-Only). Friends can browse your wishlist and contribute any amount.',
  },
  
  // Privacy & Security
  {
    category: 'Privacy & Security',
    question: 'Is my payment information secure?',
    answer: 'Yes. We use industry-standard encryption and are PCI DSS compliant. We never store full card details.',
  },
  {
    category: 'Privacy & Security',
    question: 'Who can see my birthday information?',
    answer: 'Only you control who sees your information. Set your profile to Public, Friends-Only, or Private.',
  },
  {
    category: 'Privacy & Security',
    question: 'Can I delete my account?',
    answer: 'Yes, anytime from app settings. All data will be permanently deleted within 30 days.',
  },
  {
    category: 'Privacy & Security',
    question: 'Is WishWing NDPR compliant?',
    answer: 'Yes, WishWing is fully compliant with Nigeria Data Protection Regulation (NDPR) and international data protection standards.',
  },
  
  // Support
  {
    category: 'Support',
    question: 'How do I contact support?',
    answer: 'Email support@wishwing.com or use in-app chat. We respond within 24 hours.',
  },
  {
    category: 'Support',
    question: 'What if a gift fails to deliver?',
    answer: 'Contact support immediately at support@wishwing.com. We\'ll investigate and issue a refund if the failure was on our end.',
  },
  {
    category: 'Support',
    question: 'Can I use WishWing outside Nigeria?',
    answer: 'Currently optimized for Nigeria. International expansion planned for 2027.',
  },
  {
    category: 'Support',
    question: 'What mobile networks do you support for airtime/data?',
    answer: 'All major Nigerian networks: MTN, Glo, Airtel, and 9Mobile.',
  },
];

const categories = ['All', 'General', 'Pricing & Payments', 'Features', 'Privacy & Security', 'Support'];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-40 px-6 md:px-12 bg-gradient-to-br from-gray-lightest via-white to-primary-purple/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-purple/10 rounded-full mb-6">
            <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about WishWing. Can't find an answer? Contact us at{' '}
            <a href="mailto:support@wishwing.com" className="text-primary-purple hover:underline">
              support@wishwing.com
            </a>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-purple text-white shadow-lg'
                  : 'bg-white text-text-secondary border border-gray-200 hover:border-primary-purple'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary-purple transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1 pr-4">
                  <div className="text-xs text-primary-purple font-semibold mb-1">{faq.category}</div>
                  <h3 className="font-bold text-lg text-text-primary">{faq.question}</h3>
                </div>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary-purple to-primary-pink rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
          <p className="text-white/90 mb-6">Our support team is here to help!</p>
          <a
            href="mailto:support@wishwing.com"
            className="inline-block px-8 py-3 bg-white text-primary-purple font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
