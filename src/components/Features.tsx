'use client';

import Icon from './Icon';

const features = [
  {
    icon: 'calendar',
    title: 'Occasion-Centered Design',
    description: '🎂 Birthdays • 💒 Weddings • 🎄 Holidays • 🏢 Corporate Events • 📅 Smart reminders that never let you miss a celebration',
    details: [
      'Automatically sync dates from phone contacts',
      'Support for all celebration types',
      'Smart reminders and notifications',
      'Track your celebration history'
    ]
  },
  {
    icon: 'heart',
    title: 'Social Wishlists',
    description: '📸 Create wishes with photos • 💰 Set funding goals • 🔗 Share with friends • 🎁 Watch contributions come in and track progress',
    details: [
      'Create unlimited wishes with photos and descriptions',
      'Friends can browse and contribute any amount',
      'Privacy controls for each wishlist',
      'Get notified when wishes are fulfilled'
    ]
  },
  {
    icon: 'people',
    title: 'Group Gifting Made Simple',
    description: '👥 Pool contributions from multiple friends • 💰 Set funding goals • 📊 Track who contributed • 🎯 Perfect for big-ticket gifts',
    details: [
      'Create group gift campaigns with funding goals',
      'Track contributions from all participants',
      'Automatic notifications when fully funded',
      'Coordinate effortlessly with others'
    ]
  },
  {
    icon: 'gift',
    title: 'Real Gifts, Not Just Money',
    description: '🪙 WishCoins feel more thoughtful than cash • 📱 Airtime & data • 🎁 Gift cards • 💐 Physical gifts from partner vendors',
    details: [
      'WishCoins: Emotionally distinct from cash transfers',
      'Airtime: 45 WishCoins = ₦100 airtime',
      'Data: 125 WishCoins = 1GB data',
      'Partner vendors handle fulfillment'
    ]
  },
  {
    icon: 'chatbubble',
    title: 'Automated Greetings',
    description: '⏰ Schedule greetings at perfect times • 💬 SMS, WhatsApp, Email delivery • 📝 50+ customizable templates • 🎨 Make it personal',
    details: [
      'Schedule: Midnight, Morning, Afternoon, Evening',
      'Multiple delivery channels',
      'Template library for every occasion',
      'Save favorites for quick access'
    ]
  },
  {
    icon: 'wallet',
    title: 'Transparent & Secure',
    description: '💰 Real-time balance • 📊 Full transaction history • 💳 Multiple payment methods • 📤 Cash-out option available',
    details: [
      'Track all purchases, transfers, and top-ups',
      'Top-up via cards, bank transfer, USSD, mobile money',
      'Secure transactions with full transparency',
      'Monthly analytics to monitor spending'
    ]
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-purple/10 rounded-full mb-4">
            <span className="text-primary-purple font-medium text-sm">Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            Own Every Occasion
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful features designed around celebrations—birthdays, weddings, holidays, and corporate events
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-200 hover:border-primary-purple/30"
            >
              
              <div className="relative">
              
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary-purple to-primary-pink rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
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