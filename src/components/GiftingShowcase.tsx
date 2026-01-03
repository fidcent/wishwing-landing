'use client';

import Icon from './Icon';

const giftCategories = [
  {
    icon: 'wallet',
    title: 'WishCoins',
    description: 'Send WishCoins directly',
    comingSoon: false,
  },
  {
    icon: 'gift',
    title: 'Physical Gifts',
    description: 'Flowers, chocolates & more',
    comingSoon: false,
  },
  {
    icon: 'phone',
    title: 'Airtime & Data',
    description: 'Mobile top-ups',
    comingSoon: false,
  },
  {
    icon: 'card',
    title: 'Gift Cards',
    description: 'Amazon, iTunes, Netflix',
    comingSoon: false,
  },
  {
    icon: 'briefcase',
    title: 'Booked Services',
    description: 'Photoshoots, spa, makeup & more',
    comingSoon: true,
  },
  {
    icon: 'film',
    title: 'Movies & Experiences',
    description: 'Tickets, streaming, and live events',
    comingSoon: true,
  },
];

export default function GiftingShowcase() {
  return (
    <section id="gifting" className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 bg-accent-100 rounded-full mb-4">
            <span className="text-accent-600 font-medium text-sm">Gift Options</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Beyond Cash Transfers
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            WishWing sits between payments, social interaction, and commerce—making every gift personal and memorable
          </p>
        </div>

        {/* Gift Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {giftCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-neutral-50 p-6 rounded-xl hover:shadow-strong transition-all duration-300 text-center border border-neutral-200/50"
            >
              {/* Coming Soon Badge */}
              {category.comingSoon && (
                <div className="absolute top-2 right-2 bg-accent-100 text-accent-600 text-xs font-medium px-2 py-1 rounded-full">
                  Soon
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-soft">
                  <Icon name={category.icon} size={24} className="text-primary-600" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-neutral-900 mb-1">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
