
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Busy Mom of Three",
      content: "WishWing has been a lifesaver! I never miss my kids' friends' birthdays anymore, and the group gifting feature means we can give meaningful presents without breaking the bank.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "College Student",
      content: "The WishCoins system is genius. I can easily contribute small amounts to friends' wish lists throughout the month. It's made gift-giving so much more collaborative and fun!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Working Professional",
      content: "The reminders across WhatsApp and email ensure I never forget important dates. The personalized video messages feature adds such a special touch to celebrations.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by Thousands of
            <span className="bg-wishwing-gradient bg-clip-text text-transparent block">
              Celebration Heroes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how WishWing is transforming the way people celebrate together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="w-8 h-8 text-wishwing-green mb-4 opacity-60" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-wishwing-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
