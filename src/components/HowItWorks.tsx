'use client';

const steps = [
  {
    number: 1,
    title: 'Connect Your Circle',
    description: 'Import contacts and sync birthdays, anniversaries, and special occasions automatically',
    icon: 'person-add',
  },
  {
    number: 2,
    title: 'Create & Share Wishlists',
    description: 'Build wishlists for your occasions and let friends contribute with WishCoins',
    icon: 'notifications',
  },
  {
    number: 3,
    title: 'Celebrate Together',
    description: 'Send meaningful gifts, coordinate group contributions, and make every moment special',
    icon: 'gift',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 mb-6 animate-fade-in">
            <svg className="w-4 h-4 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-accent-700 font-semibold text-sm">How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight animate-fade-in-up">
            <span className="text-gradient">Gifting Made</span>
            <span className="block">Social</span>
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed animate-fade-in-up animate-delay-100">
            From remembering occasions to sending the perfect gift—all in one place
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium" />
                    <div className="relative w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                      {step.number}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
