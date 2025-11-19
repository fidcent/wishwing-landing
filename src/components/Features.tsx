'use client';

import Icon from './Icon';

const features = [
  {
    icon: 'calendar',
    title: 'Smart Birthday Calendar',
    description: 'Never forget a birthday with our intelligent calendar that tracks all your important dates and sends timely reminders.',
  },
  {
    icon: 'gift',
    title: 'Wishlist Management',
    description: 'Create and manage your wishlist, share it with friends, and see what others want for their special day.',
  },
  {
    icon: 'wallet',
    title: 'WishCoin Virtual Currency',
    description: 'Use WishCoins to contribute to friends\' wishlists or send gifts seamlessly. Top up easily and track your spending.',
  },
  {
    icon: 'chatbubble',
    title: 'Automated Greetings',
    description: 'Schedule personalized birthday messages via SMS, WhatsApp, or email to be sent at the perfect time.',
  },
  {
    icon: 'heart',
    title: 'Group Gifting',
    description: 'Pool resources with other friends to give bigger, better gifts that your loved ones really want.',
  },
  {
    icon: 'people',
    title: 'Contact Integration',
    description: 'Sync with your phone contacts to automatically import birthdays and keep everything organized in one place.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-40 px-6 md:px-12 bg-gradient-to-br from-gray-lightest via-white to-gray-lightest">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-purple/10 rounded-full mb-6">
            <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
            Everything You Need to Celebrate Better
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to make every birthday unforgettable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-light/50 hover:border-primary-purple/30 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary-purple transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
