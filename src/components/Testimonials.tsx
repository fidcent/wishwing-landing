'use client';

const testimonials = [
  {
    quote: "WishWing has completely changed how I celebrate birthdays. I never forget anyone's special day anymore!",
    author: 'Sarah M.',
    role: 'Regular User',
  },
  {
    quote: 'The WishCoin system is brilliant! It makes group gifting so much easier.',
    author: 'James K.',
    role: 'Power User',
  },
  {
    quote: 'Love the scheduled greetings feature. My friends think I\'m super organized now!',
    author: 'Maria L.',
    role: 'Happy Customer',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 md:px-12 bg-gradient-to-br from-gray-lightest via-white to-gray-lightest">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-purple/10 rounded-full mb-6">
            <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-primary leading-tight">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-light/50 relative group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-dark text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
