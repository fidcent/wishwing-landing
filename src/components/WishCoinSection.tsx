'use client';

const benefits = [
  'More meaningful than cash transfers',
  'Pool contributions for group gifts',
  'Redeem for airtime, data, and real gifts',
  'Easy top-up via cards, bank, or mobile money',
  'Secure with transparent transactions',
];

export default function WishCoinSection() {
  return (
    <section id="wishcoins" className="py-20 md:py-28 px-6 bg-gradient-to-br from-primary-purple to-primary-pink">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coin Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              {/* 3D Coin */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg flex items-center justify-center border-4 border-yellow-200/50">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl mb-2">🪙</div>
                  <div className="text-white font-display text-xl md:text-2xl font-bold">
                    WishCoin
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              WishCoins: The Currency of Celebration
            </h2>

            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
              Unlike impersonal cash transfers, WishCoins are designed specifically for gifting. 
              They're flexible, emotionally meaningful, and perfect for any celebration—from birthdays to weddings.
            </p>

            <p className="text-base text-white/90 mb-6">
              <span className="font-semibold text-white">₦2.5 per WishCoin</span> • Redeem for airtime, data, gift cards, or real gifts
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="px-7 py-3 bg-white text-primary-purple rounded-full font-semibold text-base hover:bg-gray-light transition-colors duration-200 shadow-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
