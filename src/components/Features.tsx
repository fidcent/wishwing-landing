'use client';

import Icon from './Icon';

const features = [
  {
    icon: 'people',
    title: 'Smart Contact Management',
    description: '📱 Auto-import birthdays from phone contacts • 🏷️ Categorize by Family, Friends, Work • 🔍 Smart search and filtering • ✏️ Edit relationships easily • 📊 Track your gifting history',
    details: [
      'Automatically sync birthdays from your phone contacts',
      'Organize contacts by relationship type',
      'Quick search with intelligent filtering',
      'Statistics dashboard showing contacts and upcoming events'
    ]
  },
  {
    icon: 'chatbubble',
    title: 'Intelligent Greeting Automation',
    description: '⏰ Schedule greetings at perfect times (Midnight, Morning, Afternoon, Evening) • 💬 Send via SMS, WhatsApp, Email • 📝 50+ pre-written templates • 🎨 Customize your messages',
    details: [
      'Schedule times: Midnight (500₦), Morning (300₦), Afternoon (250₦), Evening (200₦)',
      'Multiple delivery channels: SMS, WhatsApp, Email, Push Notification',
      'Template library with birthday, anniversary, and holiday greetings',
      'Save favorite templates for quick access'
    ]
  },
  {
    icon: 'gift',
    title: 'Send Real Gifts, Not Just Wishes',
    description: '🪙 Transfer WishCoins • 📱 Send airtime & data (MTN, Glo, Airtel, 9Mobile) • 🎁 Gift cards (Amazon, iTunes, Netflix) • 💐 Physical gifts coming soon',
    details: [
      'WishCoins: Direct transfer to recipient wallet',
      'Airtime: 45 WishCoins = ₦100 airtime',
      'Data: 125 WishCoins = 1GB data',
      'Coming soon: flowers, cakes, spa services, experiences'
    ]
  },
  {
    icon: 'heart',
    title: 'Group Gifting Made Easy',
    description: '👥 Pool contributions with multiple friends • 💰 Set funding goals • 📊 Track who contributed • 🎯 Auto-notify recipient when goal is met',
    details: [
      'Create group gift campaigns with funding goals',
      'Track contributions from all participants',
      'Automatic notifications when fully funded',
      'Perfect for big-ticket gifts'
    ]
  },
  {
    icon: 'calendar',
    title: 'Your Birthday Wishlist Hub',
    description: '📸 Create wishes with photos • 💰 Set funding goals in WishCoins • 🔒 Control privacy (Public/Private/Friends-Only) • 🎁 Track progress with visual indicators',
    details: [
      'Create unlimited wishes with photos and descriptions',
      'Friends can browse and contribute any amount',
      'Privacy controls for each wishlist',
      'Get notified when wishes are fulfilled'
    ]
  },
  {
    icon: 'wallet',
    title: 'Complete Financial Transparency',
    description: '💰 Real-time balance display • 📊 Detailed transaction history • 💳 Multiple top-up methods • 📤 Cash-out option (5% fee) • 📈 Monthly spending analytics',
    details: [
      'Track all purchases, transfers, and top-ups',
      'Top-up via cards, bank transfer, USSD, mobile money',
      'Cash-out: 5% fee, 1,000 WishCoin minimum, 30-day holding',
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
            Everything You Need
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful features to make every birthday unforgettable
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