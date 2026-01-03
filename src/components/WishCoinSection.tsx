'use client';

import { analytics } from '@/utils/analytics';

const benefits = [
  {
    icon: '💝',
    title: 'More Meaningful',
    description: 'Unlike cash transfers, WishCoins are designed specifically for gifting'
  },
  {
    icon: '🤝',
    title: 'Pool Together',
    description: 'Friends and family can contribute to group gifts easily'
  },
  {
    icon: '🎁',
    title: 'Flexible Redemption',
    description: 'Redeem for airtime, data, gift cards, or real gifts'
  },
  {
    icon: '⚡',
    title: 'Easy Top-Up',
    description: 'Add funds via cards, bank transfer, or mobile money'
  },
  {
    icon: '🔒',
    title: 'Secure & Transparent',
    description: 'Every transaction is protected and fully traceable'
  },
];

export default function WishCoinSection() {
  return (
    <section id="wishcoins" className="relative py-20 md:py-32 px-6 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Large Coin Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl mb-6 animate-scale-in">
            <span className="text-5xl">🪙</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            WishCoins: The Currency of{' '}
            <span className="text-gradient-alt">Celebration</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed animate-fade-in-up animate-delay-100">
            Unlike impersonal cash transfers, WishCoins are designed specifically for gifting. 
            Flexible, meaningful, and perfect for any celebration.
          </p>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in-up animate-delay-200">
            <span className="text-2xl">₦</span>
            <span className="text-white font-bold text-lg">2.5 per WishCoin</span>
            <span className="text-white/70">•</span>
            <span className="text-white/90">Start gifting today</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100 + 300}ms` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-3xl transition-all duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Call-to-Action Card */}
          <div className="group relative bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 border border-white/20 hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="relative text-center flex flex-col items-center justify-center h-full">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Start?
              </h3>
              <p className="text-white/90 mb-6">
                Join the waitlist and get 1,000 FREE WishCoins
              </p>
              <a
                href="#early-access"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#early-access');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  analytics.trackCTAClick('Join Waitlist', 'CTA Section');
                }}
                className="px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Join Waitlist
              </a>
              {/* <button 
                onClick={() => {
                  const waitlistSection = document.querySelector('#waitlist');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Join Waitlist
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
