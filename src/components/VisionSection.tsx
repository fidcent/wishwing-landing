'use client';

const visionPoints = [
  {
    emoji: '🎯',
    title: 'Own the Occasion Layer',
    description: 'Become Nigeria\'s default tool whenever there\'s something to celebrate',
  },
  {
    emoji: '🤝',
    title: 'Connect Everyone',
    description: 'Build an ecosystem linking individuals, merchants, and corporates around celebrations',
  },
  {
    emoji: '🌍',
    title: 'Expand Across Africa',
    description: 'After establishing market leadership in Nigeria, scale to the entire continent',
  },
];

export default function VisionSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-600 font-medium text-sm">Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
            Building Africa's Celebration Ecosystem
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
            WishWing isn't just an app—it's the future of how Africa celebrates. We're creating digital infrastructure that makes every occasion meaningful.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-200 hover:border-primary-600 transition-all duration-300 hover:shadow-strong"
            >
              <div className="text-5xl mb-4">{point.emoji}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {point.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
