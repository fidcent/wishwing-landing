'use client';

import { peopleAvatars } from '@/data/people';

export default function VisionSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #DBD4FF 0%, #FFFFFF 50%)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* People Arc */}
        <div className="relative mb-12 h-32 sm:h-40 md:h-48">
          {peopleAvatars.map((person, index) => {
            const total = peopleAvatars.length;
            const angle = (Math.PI * (index / (total - 1))) - Math.PI;
            const radiusX = 220;
            const radiusY = 80;
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY - 20;
            const size = index % 3 === 0 ? 'w-12 h-12 text-sm' : index % 3 === 1 ? 'w-10 h-10 text-xs' : 'w-14 h-14 text-base';

            return (
              <div
                key={index}
                className={`absolute ${person.color} ${size} rounded-full border-2 ${person.borderColor} flex items-center justify-center text-white font-bold shadow-md`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {person.initials}
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <blockquote className="max-w-3xl mx-auto">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-snug">
            No more &ldquo;Happy birthday + transfer&rdquo;.{' '}
            <br className="hidden sm:block" />
            Celebrate people in a way that actually feels{' '}
            <em className="text-gradient not-italic">special</em>.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
