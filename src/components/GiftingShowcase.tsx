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
    <section id="gifting" className="py-20 md:py-32 px-5 bg-gray-lightest">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-4">
            Send the Perfect Gift
          </h2>
          <p className="text-base md:text-lg text-text-secondary">
            Choose from a wide variety of gift options
          </p>
        </div>

        {/* Gift Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {giftCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center"
            >
              {/* Coming Soon Badge */}
              {category.comingSoon && (
                <div className="absolute top-3 right-3 bg-warning text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  Coming Soon
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-purple/10 to-secondary-purple/10 flex items-center justify-center">
                  <Icon name={category.icon} size={32} className="text-primary-purple" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-text-secondary">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
