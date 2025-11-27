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
    comingSoon: true,
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
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Send the Perfect Gift
          </h2>
          <p className="text-base md:text-lg text-text-secondary">
            Choose from a variety of gift options
          </p>
        </div>

        {/* Gift Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {giftCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-gray-lightest p-6 rounded-xl hover:shadow-md transition-shadow duration-200 text-center"
            >
              {/* Coming Soon Badge */}
              {category.comingSoon && (
                <div className="absolute top-2 right-2 bg-primary-purple/10 text-primary-purple text-xs font-medium px-2 py-1 rounded-full">
                  Soon
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <Icon name={category.icon} size={24} className="text-primary-purple" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-text-primary mb-1">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
