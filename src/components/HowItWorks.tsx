'use client';

import Icon from './Icon';

const steps = [
  {
    number: 1,
    title: 'Add Your Contacts',
    description: 'Import birthdays automatically from your phone contacts',
    icon: 'person-add',
  },
  {
    number: 2,
    title: 'Get Reminders',
    description: 'Never miss a special day with smart notifications',
    icon: 'notifications',
  },
  {
    number: 3,
    title: 'Send Gifts & Greetings',
    description: 'Make their day memorable with perfect gifts',
    icon: 'gift',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-40 px-6 md:px-12 bg-gradient-to-br from-white via-gray-lightest/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-purple/10 rounded-full mb-6">
            <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-4 leading-tight">
            How WishWing Works
          </h2>
          <p className="text-xl md:text-2xl text-secondary-purple font-semibold">
            Simple, Smart, Seamless
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary-purple via-secondary-purple to-accent-pink rounded-full opacity-30"/>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center group">
                {/* Step Number Circle */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary text-white flex items-center justify-center text-4xl font-extrabold shadow-2xl border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  <span className="relative">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-primary-purple/10 rounded-2xl flex items-center justify-center">
                    <Icon name={step.icon} size={32} className="text-secondary-purple" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-purple transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-text-secondary leading-relaxed text-lg max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
