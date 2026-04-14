export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

/** FAQ items shown on the homepage (subset) */
export const homepageFAQs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is WishWing?',
    answer: 'WishWing is a mobile app that helps you remember birthdays, manage wishlists, and send gifts using our virtual currency called WishCoins.',
  },
  {
    category: 'General',
    question: 'How is this different from just sending money?',
    answer: 'WishWing turns gifting into an experience. Instead of an impersonal bank transfer, you can create wishlists, coordinate group gifts, schedule messages, and make every occasion feel intentional.',
  },
  {
    category: 'General',
    question: 'How do I receive gifts?',
    answer: 'When someone sends you a gift through WishWing, you receive WishCoins which you can redeem for airtime, data, gift cards, or cash out to your bank account.',
  },
  {
    category: 'Features',
    question: 'Can multiple people contribute to one gift?',
    answer: 'Yes! WishWing makes group gifting easy. Create a group gift, set a goal amount, share the link, and everyone can contribute any amount they choose.',
  },
  {
    category: 'General',
    question: 'What are WishCoins?',
    answer: 'WishCoins are our virtual currency. 1 WishCoin = ₦2.5. Use them to send gifts, airtime, greetings, contribute to wishlists, and more.',
  },
  {
    category: 'Privacy & Security',
    question: 'Is my money safe?',
    answer: 'Absolutely. We use industry-standard encryption and are PCI DSS compliant. Every transaction is protected and fully traceable.',
  },
  {
    category: 'General',
    question: 'Who can use WishWing?',
    answer: 'Anyone in Nigeria! Whether you\'re celebrating a birthday, wedding, graduation, or just want to send a thoughtful gift — WishWing is for you.',
  },
];

/** All FAQ items for the dedicated /faq page */
export const allFAQs: FAQItem[] = [
  // General
  {
    category: 'General',
    question: 'What is WishWing?',
    answer: 'WishWing is a mobile app that helps you remember birthdays, manage wishlists, and send gifts using our virtual currency called WishCoins.',
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
    answer: 'Starting at ₦250 for 100 WishCoins. Bigger bundles include bonus coins (up to 20% extra).',
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
    answer: 'Schedule personalized messages to be sent via SMS, WhatsApp, Email, or push notification at your chosen time.',
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
    answer: 'Pool contributions with multiple friends to give bigger gifts. Track who has contributed, set funding goals, and the recipient gets notified automatically.',
  },
  {
    category: 'Features',
    question: 'How do wishlists work?',
    answer: 'Create unlimited wishes with photos and descriptions, set funding goals in WishCoins, and control privacy. Friends can browse your wishlist and contribute any amount.',
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
    answer: 'Email hello_wishwing@fidcent.com or use in-app chat. We respond within 24 hours.',
  },
  {
    category: 'Support',
    question: 'What if a gift fails to deliver?',
    answer: 'Contact support immediately at hello_wishwing@fidcent.com. We\'ll investigate and issue a refund if the failure was on our end.',
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

export const faqCategories = ['All', 'General', 'Pricing & Payments', 'Features', 'Privacy & Security', 'Support'];
