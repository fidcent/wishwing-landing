'use client';

const features = [
  {
    title: 'Never miss a moment',
    description: 'Get reminders for birthdays, weddings, and special occasions so you always show up.',
    illustration: (
      <div className="relative h-48 bg-neutral-100 rounded-xl flex items-center justify-center overflow-hidden">
        {/* Calendar illustration */}
        <div className="w-32 h-36 bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden">
          <div className="h-8 bg-primary-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">MARCH</span>
          </div>
          <div className="p-2 grid grid-cols-7 gap-0.5 text-[8px] text-center text-neutral-400">
            {['S','M','T','W','T','F','S'].map((d,i) => <span key={i} className="font-medium">{d}</span>)}
            {Array.from({length: 31}, (_, i) => (
              <span key={i} className={`py-0.5 rounded-full ${i+1 === 15 ? 'bg-primary-500 text-white font-bold' : ''}`}>
                {i + 1}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-primary-100 text-primary-700 text-[10px] font-semibold rounded-full">
          Smart Reminder
        </div>
      </div>
    ),
  },
  {
    title: 'Gift together, easily',
    description: 'Friends can contribute to one meaningful gift — no stress, no confusion.',
    illustration: (
      <div className="relative h-48 bg-neutral-100 rounded-xl flex items-center justify-center">
        {/* Connected avatars illustration */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">A</div>
            <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold">B</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-8 h-0.5 bg-primary-300 rounded" />
            <div className="w-8 h-0.5 bg-primary-300 rounded" />
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-8 h-0.5 bg-primary-300 rounded" />
            <div className="w-8 h-0.5 bg-primary-300 rounded" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center text-white font-bold">C</div>
            <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold">D</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Make it personal again',
    description: 'Turn money into something thoughtful and memorable. No more impersonal transfers.',
    illustration: (
      <div className="relative h-48 bg-neutral-100 rounded-xl flex items-center justify-center">
        {/* Cash to gift transformation */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-10 bg-emerald-100 border border-emerald-300 rounded-lg flex items-center justify-center">
            <span className="text-emerald-600 font-bold text-sm">₦</span>
          </div>
          <div className="flex items-center">
            <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl border border-primary-200 flex items-center justify-center shadow-md">
            <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section id="features" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary-200 mb-5">
            <span className="text-primary-600 font-medium text-sm">Features</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4">
            Wing fixes gifting in a simple way.
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
            Everything you need to celebrate people properly — in one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/60 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                {feature.description}
              </p>
              {feature.illustration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
