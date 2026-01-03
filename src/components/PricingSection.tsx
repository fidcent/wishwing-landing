'use client';

import Icon from './Icon';

const pricingBundles = [
  {
    name: 'Starter',
    coins: 100,
    price: 250,
    bonus: 0,
    total: 100,
    savings: null,
    popular: false,
  },
  {
    name: 'Popular',
    coins: 500,
    price: 1200,
    bonus: 50,
    total: 550,
    savings: 13,
    popular: true,
  },
  {
    name: 'Premium',
    coins: 1000,
    price: 2300,
    bonus: 150,
    total: 1150,
    savings: 15,
    popular: false,
  },
  {
    name: 'Ultimate',
    coins: 5000,
    price: 10500,
    bonus: 1000,
    total: 6000,
    savings: 20,
    popular: false,
    bestValue: true,
  },
];

const useCases = [
  {
    icon: '📱',
    title: 'Send Airtime',
    description: '45 WishCoins = ₦100 airtime',
    coins: 45,
  },
  {
    icon: '📊',
    title: 'Send Data',
    description: '125 WishCoins = 1GB data',
    coins: 125,
  },
  {
    icon: '💸',
    title: 'Transfer to Friends',
    description: '2% fee (minimum ₦5)',
    coins: null,
  },
  {
    icon: '💐',
    title: 'Order Physical Gifts',
    description: '2,200 WishCoins = Flower bouquet',
    coins: 2200,
  },
  {
    icon: '💰',
    title: 'Cash Out',
    description: '5% fee (1,000 WishCoin minimum)',
    coins: null,
  },
];

const paymentMethods = [
  { name: 'Visa', logo: '💳' },
  { name: 'Mastercard', logo: '💳' },
  { name: 'Verve', logo: '💳' },
  { name: 'Bank Transfer', logo: '🏦' },
  { name: 'USSD', logo: '📱' },
  { name: 'Mobile Money', logo: '💰' },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-40 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 mb-6 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Buy WishCoins to send gifts, airtime, and greetings. <span className="font-semibold text-primary-600">1 WishCoin = ₦2.5</span>
          </p>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            🇳🇬 All prices in Nigerian Naira (NGN) • No hidden fees • Bigger bundles = More bonus coins
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pricingBundles.map((bundle) => (
            <div
              key={bundle.name}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-strong ${
                bundle.popular
                  ? 'border-primary-600 bg-gradient-to-br from-primary-50 to-accent-50'
                  : bundle.bestValue
                  ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              {/* Badge */}
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary-600 text-white text-sm font-bold rounded-full shadow-medium">
                    Most Popular
                  </span>
                </div>
              )}
              {bundle.bestValue && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full">
                    ⭐ Best Value
                  </span>
                </div>
              )}

              {/* Bundle Name */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{bundle.name}</h3>
              
              {/* Price */}
              <div className="mb-4">
                <div className="text-4xl font-extrabold text-primary-600 mb-1">
                  ₦{bundle.price.toLocaleString()}
                </div>
                <div className="text-sm text-neutral-600">
                  {bundle.coins.toLocaleString()} WishCoins
                </div>
              </div>

              {/* Bonus */}
              {bundle.bonus > 0 && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-green-700 font-semibold text-sm">
                    🎁 +{bundle.bonus} Bonus Coins
                  </div>
                  <div className="text-green-600 text-xs">
                    Total: {bundle.total.toLocaleString()} WishCoins
                  </div>
                </div>
              )}

              {/* Savings */}
              {bundle.savings && (
                <div className="text-primary-600 font-bold text-sm mb-4">
                  💰 You Save {bundle.savings}%
                </div>
              )}

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                  bundle.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-medium hover:shadow-strong'
                    : bundle.bestValue
                    ? 'bg-yellow-400 text-neutral-900 hover:bg-yellow-300'
                    : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                Coming Jan 7, 2026
              </button>
            </div>
          ))}
        </div>

        {/* Special Launch Offer */}
        <div className="mb-20 p-8 md:p-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-3xl text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Special Launch Offer
          </h3>
          <p className="text-xl md:text-2xl text-white mb-2">
            Get <span className="font-bold underline">1000 FREE WishCoins</span> when you download on launch day
          </p>
          <p className="text-lg text-white/90">
            Worth ₦2,500 • Limited to first 10,000 users
          </p>
        </div>

        {/* What Can You Do With WishCoins */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            What Can You Do With WishCoins?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200/50 hover:border-primary-600 hover:shadow-strong transition-all duration-300"
              >
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h4 className="font-bold text-lg text-neutral-900 mb-2">{useCase.title}</h4>
                <p className="text-neutral-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Payment Methods Accepted
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full hover:border-primary-600 hover:shadow-medium transition-all duration-300"
              >
                <span className="text-2xl">{method.logo}</span>
                <span className="font-semibold text-neutral-900">{method.name}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-600 text-sm mt-6">
            🔒 All payments secured with industry-standard encryption • PCI DSS Compliant
          </p>
        </div>
      </div>
    </section>
  );
}
