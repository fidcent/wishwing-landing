
import React from 'react';
import { UserPlus, Calendar, Gift, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Sign Up & Connect",
      description: "Create your account and add friends and family with their birthdays and special dates."
    },
    {
      icon: Calendar,
      number: "02", 
      title: "Get Smart Reminders",
      description: "Receive timely notifications across all platforms so you never miss an important celebration."
    },
    {
      icon: Gift,
      number: "03",
      title: "Create & Share Wishes",
      description: "Build wish lists and share them with loved ones who can contribute to make dreams come true."
    },
    {
      icon: Heart,
      number: "04",
      title: "Celebrate Together",
      description: "Send meaningful greetings, contribute to gifts, and make every celebration unforgettable."
    }
  ];

  return (
    <section className="py-20 bg-wishwing-gradient-light" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How WishWing
            <span className="bg-wishwing-gradient bg-clip-text text-transparent block">
              Works for You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to transform how you celebrate with the people you care about most.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0">
              {/* Step content */}
              <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold bg-wishwing-gradient bg-clip-text text-transparent">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-wishwing-gradient rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-gradient-to-b from-wishwing-green to-wishwing-blue opacity-30"></div>
              )}

              {/* Visual element */}
              <div className={`flex-1 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-wishwing-gradient rounded-2xl flex items-center justify-center opacity-20">
                    <step.icon className="w-16 h-16 text-white" />
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

export default HowItWorks;
