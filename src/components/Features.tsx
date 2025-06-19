
import React from 'react';
import { Calendar, Users, Gift, Bell, Wallet, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Birthday Tracking",
      description: "Never forget another birthday with intelligent reminders across all your devices and platforms.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Collaborative Gifting",
      description: "Friends and family can contribute to wish list items, making meaningful gifts more affordable.",
      color: "text-green-600"
    },
    {
      icon: Gift,
      title: "Personal Wish Lists",
      description: "Create and share wish lists with photos and descriptions. Let others know exactly what you want.",
      color: "text-purple-600"
    },
    {
      icon: Bell,
      title: "Multi-Channel Reminders",
      description: "Get notified via app, SMS, email, and WhatsApp. Choose how you want to be reminded.",
      color: "text-orange-600"
    },
    {
      icon: Wallet,
      title: "WishCoins Wallet",
      description: "Built-in digital wallet for easy transactions, micro-payments, and seamless gift contributions.",
      color: "text-teal-600"
    },
    {
      icon: MessageCircle,
      title: "Digital Greetings",
      description: "Send personalized messages and pre-recorded video greetings to make celebrations special.",
      color: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="bg-wishwing-gradient bg-clip-text text-transparent block">
              Celebrate Better
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WishWing combines smart technology with heartfelt connections to make every celebration memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color === 'text-blue-600' ? 'from-blue-500 to-blue-600' : 
                feature.color === 'text-green-600' ? 'from-green-500 to-green-600' :
                feature.color === 'text-purple-600' ? 'from-purple-500 to-purple-600' :
                feature.color === 'text-orange-600' ? 'from-orange-500 to-orange-600' :
                feature.color === 'text-teal-600' ? 'from-teal-500 to-teal-600' :
                'from-pink-500 to-pink-600'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
