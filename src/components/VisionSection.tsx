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
          <div className="inline-block px-4 py-1.5 bg-primary-purple/10 rounded-full mb-4">
            <span className="text-primary-purple font-medium text-sm">Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            Building Africa's Celebration Ecosystem
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto">
            WishWing isn't just an app—it's the future of how Africa celebrates. We're creating digital infrastructure that makes every occasion meaningful.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary-purple/5 to-primary-pink/5 rounded-2xl border border-primary-purple/20 hover:border-primary-purple/40 transition-colors duration-200"
            >
              <div className="text-5xl mb-4">{point.emoji}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Statement */}
        <div className="bg-gradient-to-br from-primary-purple to-primary-pink rounded-3xl p-8 md:p-12 text-center">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-4">
            WishWing sits at the intersection of <span className="font-semibold text-white">payments</span>, <span className="font-semibold text-white">social interaction</span>, and <span className="font-semibold text-white">commerce</span>—focusing on relationships and occasions rather than transactions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              <span className="text-white font-medium">🎂 Birthdays</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              <span className="text-white font-medium">💒 Weddings</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              <span className="text-white font-medium">🎄 Holidays</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
              <span className="text-white font-medium">🏢 Corporate Events</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
