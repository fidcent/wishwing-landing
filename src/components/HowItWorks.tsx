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
    <section id="how-it-works" className="py-20 md:py-28 px-6 md:px-12 bg-gray-lightest">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-purple/10 rounded-full mb-4">
            <span className="text-primary-purple font-medium text-sm">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-3 leading-tight">
            Simple & Seamless
          </h2>
          <p className="text-base md:text-lg text-text-secondary">
            Get started in three easy steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                {/* Step Number Circle */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary-purple to-primary-pink text-white flex items-center justify-center text-2xl font-bold shadow-sm">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-text-secondary text-sm">
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
