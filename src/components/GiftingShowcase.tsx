'use client';

const giftCategories = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'WishCoins',
    description: 'Send WishCoins directly to anyone for any occasion.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: 'Physical Gifts',
    description: 'Flowers, chocolates, and thoughtful presents delivered.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Airtime & Data',
    description: 'Mobile top-ups for MTN, Glo, Airtel, and 9Mobile.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Gift Cards',
    description: 'Amazon, iTunes, Netflix, and more popular brands.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Booked Services',
    description: 'Photoshoots, spa, makeup & more booked as gifts.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    title: 'Movies & Experiences',
    description: 'Tickets, streaming subscriptions, and live events.',
  },
];

export default function GiftingShowcase() {
  return (
    <section id="benefits" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary-200 mb-5">
            <span className="text-primary-600 font-medium text-sm">More Benefits</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4">
            Beyond Cash Transfers
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
            WishWing sits between payments, social interaction, and commerce — making every gift personal and memorable.
          </p>
        </div>

        {/* Gift Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {giftCategories.map((category, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 text-center border border-neutral-200/60"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm border border-neutral-100">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-neutral-500">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
