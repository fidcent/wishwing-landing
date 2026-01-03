'use client';

import Icon from './Icon';

const features = [
  {
    icon: 'calendar',
    title: 'Occasion-Centered',
    description: 'Smart reminders for birthdays, weddings, holidays, and corporate events—never miss a celebration.',
  },
  {
    icon: 'heart',
    title: 'Social Wishlists',
    description: 'Create wishes with photos, set funding goals, and watch contributions come in from friends.',
  },
  {
    icon: 'people',
    title: 'Group Gifting',
    description: 'Pool contributions from multiple friends for big-ticket gifts. Track who contributed effortlessly.',
  },
  {
    icon: 'gift',
    title: 'Real Gifts, Not Cash',
    description: 'WishCoins feel thoughtful. Redeem for airtime, data, gift cards, and physical gifts.',
  },
  {
    icon: 'chatbubble',
    title: 'Automated Greetings',
    description: 'Schedule greetings via SMS, WhatsApp, or Email. 50+ customizable templates for every occasion.',
  },
  {
    icon: 'wallet',
    title: 'Transparent & Secure',
    description: 'Real-time balance tracking, full transaction history, multiple payment methods, and cash-out options.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 mb-6 animate-fade-in">
            <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-primary-700 font-semibold text-sm">Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight animate-fade-in-up">
            Own Every{' '}
            <span className="block text-gradient">Occasion</span>
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed animate-fade-in-up animate-delay-100">
            Powerful features designed around celebrations—birthdays, weddings, holidays, and corporate events
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.icon + feature.title}
              className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-neutral-200/50 hover:border-primary-200 animate-fade-in-up"
              style={{ animationDelay: `${features.indexOf(feature) * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {/* Icon Container */}
              <div className="relative w-14 h-14 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <Icon name={feature.icon} size={28} className="text-white relative z-10" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed text-base">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}