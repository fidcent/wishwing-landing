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
    question: 'What is FidId?',
    answer: 'FidId is a unique identifier for users across all Fidcent apps and web platforms. It allows you to access any Fidcent product with a single account, similar to how "Sign in with Google" works. In the future, you will be able to use "Sign in with FidId" to quickly log in to WishWing and other Fidcent services.',
  },
  {
    category: 'General',
    question: 'What are WishCoins?',
    answer: 'WishCoins are our virtual currency. 1 WishCoin = NGN 2.5. Use them to send gifts, airtime, greetings, and more.',
  },
  {
    category: 'Features',
    question: 'What is group gifting?',
    answer: 'Group gifting allows multiple people to contribute toward one gift goal and track contribution progress.',
  },
  {
    category: 'Features',
    question: 'How do wishlists work?',
    answer: 'You can create wishes, set funding goals, configure visibility, and let others contribute.',
  },
  {
    category: 'Privacy & Security',
    question: 'Is my payment information secure?',
    answer: 'WishWing uses security controls and encrypted transaction flows. Payment handling may involve certified third-party processors.',
  },
  {
    category: 'General',
    question: 'Is WishWing free?',
    answer: 'Yes. The app is free to download. You only pay for WishCoins when you want to send gifts or schedule greetings.',
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
    question: 'What is FidId?',
    answer: 'FidId is a unique identifier for users across all Fidcent apps and web platforms. It allows you to access any Fidcent product with a single account, similar to how "Sign in with Google" works. In the future, you will be able to use "Sign in with FidId" to quickly log in to WishWing and other Fidcent services, making your experience seamless and secure across the entire Fidcent ecosystem.',
  },
  {
    category: 'General',
    question: 'Is WishWing free?',
    answer: 'Yes. The app is free to download. You only pay for WishCoins when you want to send gifts or schedule greetings.',
  },
  {
    category: 'General',
    question: 'What are WishCoins?',
    answer: 'WishCoins are our virtual currency. 1 WishCoin = NGN 2.5. Use them to send gifts, airtime, greetings, and more.',
  },

  // Pricing & Payments
  {
    category: 'Pricing & Payments',
    question: 'How much do WishCoins cost?',
    answer: 'Starting at NGN 250 for 100 WishCoins. Bigger bundles can include bonus coins.',
  },
  {
    category: 'Pricing & Payments',
    question: 'What payment methods do you accept?',
    answer: 'Credit/debit cards, bank transfer, USSD, and mobile money.',
  },
  {
    category: 'Pricing & Payments',
    question: 'Can I get a refund on WishCoin purchases?',
    answer: 'WishCoin purchases are non-refundable, but cash-out options may apply based on platform rules and eligibility conditions.',
  },
  {
    category: 'Pricing & Payments',
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. Applicable fees are displayed before transaction confirmation.',
  },

  // Features
  {
    category: 'Features',
    question: 'Can I import my contacts\' birthdays?',
    answer: 'Yes. WishWing can sync with your phone contacts (with permission) to help import birthdays and organize reminders.',
  },
  {
    category: 'Features',
    question: 'How do greetings work?',
    answer: 'You can schedule personalized greetings to be delivered at your chosen time.',
  },
  {
    category: 'Features',
    question: 'What gifts can I send?',
    answer: 'Current flows include WishCoins and airtime/data. Additional categories may be rolled out in phases.',
  },
  {
    category: 'Features',
    question: 'Does the recipient need the app?',
    answer: 'For some flows (like wishlist and WishCoin account-linked features), recipient app access is required. For other flows (such as certain greeting or airtime/data scenarios), app requirement may differ.',
  },
  {
    category: 'Features',
    question: 'What is group gifting?',
    answer: 'Group gifting allows multiple people to contribute toward one gift goal and track contribution progress.',
  },
  {
    category: 'Features',
    question: 'How do wishlists work?',
    answer: 'You can create wishes, set funding goals, configure visibility, and let others contribute.',
  },

  // Privacy & Security
  {
    category: 'Privacy & Security',
    question: 'Is my payment information secure?',
    answer: 'WishWing uses security controls and encrypted transaction flows. Payment handling may involve certified third-party processors.',
  },
  {
    category: 'Privacy & Security',
    question: 'Who can see my birthday information?',
    answer: 'Visibility depends on your profile and privacy settings.',
  },
  {
    category: 'Privacy & Security',
    question: 'Can I delete my account?',
    answer: 'Yes. You can delete your account from in-app settings at More/Settings > Account > Delete Account.',
  },
  {
    category: 'Privacy & Security',
    question: 'Is WishWing NDPA compliant?',
    answer: 'WishWing processes personal data in line with the Nigeria Data Protection Act (NDPA) 2023 and applicable regulations.',
  },

  // Support
  {
    category: 'Support',
    question: 'How do I contact support?',
    answer: 'Email hello_wishwing@fidcent.com.',
  },
  {
    category: 'Support',
    question: 'What if a gift fails to deliver?',
    answer: 'Contact support at hello_wishwing@fidcent.com for investigation and resolution.',
  },
  {
    category: 'Support',
    question: 'Can I use WishWing outside Nigeria?',
    answer: 'WishWing is currently optimized for Nigeria.',
  },
  {
    category: 'Support',
    question: 'What mobile networks do you support for airtime/data?',
    answer: 'Major Nigerian networks including MTN, Glo, Airtel, and 9Mobile.',
  },

  // Account & Security
  {
    category: 'Account & Security',
    question: 'What account flows are available?',
    answer: 'Signup, login, forgot password, and phone verification prompts are all available in-app.',
  },
  {
    category: 'Account & Security',
    question: 'Is biometric login available?',
    answer: 'Yes. Biometric login is supported on compatible devices.',
  },
  {
    category: 'Account & Security',
    question: 'Where do I find the account deletion option?',
    answer: 'In-app account deletion path: More/Settings > Account > Delete Account.',
  },

  // Contacts & Calendar
  {
    category: 'Contacts & Calendar',
    question: 'Can I manually add or edit contacts?',
    answer: 'Yes. Manual contact add and edit is supported.',
  },
  {
    category: 'Contacts & Calendar',
    question: 'How does the birthday calendar work?',
    answer: 'The birthday calendar supports quick filtering (all/today/this week) and direct actions from each entry.',
  },
  {
    category: 'Contacts & Calendar',
    question: 'Where can I see upcoming birthdays?',
    answer: 'Upcoming birthdays are surfaced on the home screen.',
  },

  // Wishlist & Sharing
  {
    category: 'Wishlist & Sharing',
    question: 'Can I manage my own wishlists?',
    answer: 'Yes. You can create and manage your own wishlists.',
  },
  {
    category: 'Wishlist & Sharing',
    question: 'Can I view friends\' wishlists?',
    answer: 'Yes. Friends wishlist browsing and shared-link flows are supported.',
  },
  {
    category: 'Wishlist & Sharing',
    question: 'How does wishlist contribution tracking work?',
    answer: 'Contribution and progress patterns are built into wishlist flows.',
  },

  // Gifts, Greetings & Wallet
  {
    category: 'Gifts, Greetings & Wallet',
    question: 'How do I send a gift?',
    answer: 'Send gift flows are available in-app.',
  },
  {
    category: 'Gifts, Greetings & Wallet',
    question: 'Can I schedule greetings and gifts?',
    answer: 'Yes. You can schedule greetings and gifts. Scheduled greetings, scheduled gifts, and order history screens are available.',
  },
  {
    category: 'Gifts, Greetings & Wallet',
    question: 'What wallet features are available?',
    answer: 'Wallet top-up, withdraw, bank account management, transaction history, and withdrawal history are all available.',
  },

  // Notifications
  {
    category: 'Notifications',
    question: 'How does the notification center work?',
    answer: 'A notification center with unread counts is supported in-app.',
  },
  {
    category: 'Notifications',
    question: 'Can I control my notification preferences?',
    answer: 'Yes. Notification preferences settings are available in-app.',
  },
];

export const faqCategories = [
  'All',
  'General',
  'Pricing & Payments',
  'Features',
  'Privacy & Security',
  'Support',
  'Account & Security',
  'Contacts & Calendar',
  'Wishlist & Sharing',
  'Gifts, Greetings & Wallet',
  'Notifications',
];
