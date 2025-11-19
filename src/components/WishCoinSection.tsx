'use client';

const benefits = [
  'Send gifts instantly',
  'Contribute to wishlists',
  'Easy top-up options',
  'Secure transactions',
];

export default function WishCoinSection() {
  return (
    <section id="wishcoins" className="py-20 md:py-32 px-5 bg-gradient-wishcoin relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coin Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto animate-rotateFloat">
              {/* 3D Coin Placeholder */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-2xl flex items-center justify-center border-8 border-yellow-200">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl mb-2">🪙</div>
                  <div className="text-white font-display text-2xl md:text-3xl font-bold drop-shadow-lg">
                    WishCoin
                  </div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-gradient-to-br from-yellow-300 to-orange-400"/>
            </div>
          </div>

          {/* Content */}
          <div className="text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
              What Are WishCoins?
            </h2>

            <p className="text-base md:text-lg text-white/95 leading-relaxed mb-8">
              Your virtual currency for gifting and celebrations. WishCoins make it easy to send gifts, 
              contribute to friends' wishlists, and celebrate special moments together.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-wishcoin-shadow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="px-10 py-4 bg-white text-wishcoin-shadow rounded-full font-semibold text-lg shadow-2xl hover:scale-105 hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
