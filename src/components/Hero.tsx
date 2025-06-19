
import React from 'react';
import { Button } from "@/components/ui/button";
import { Gift, Heart, Bell, Smartphone } from 'lucide-react';
import WishWingLogo from './WishWingLogo';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-wishwing-gradient rounded-full opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-wishwing-gradient rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-wishwing-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-wishwing-blue rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <WishWingLogo size="lg" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Never Miss a
          <span className="bg-wishwing-gradient bg-clip-text text-transparent block">
            Birthday Again
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          The mobile app that helps you celebrate every special moment with timely reminders, 
          collaborative gift funding, and meaningful wishes that bring people together.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-shadow">
            <Bell className="w-5 h-5 text-wishwing-blue" />
            <span className="text-sm font-medium">Smart Reminders</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-shadow">
            <Gift className="w-5 h-5 text-wishwing-green" />
            <span className="text-sm font-medium">Group Gifting</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium">Personal Wishes</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-wishwing-gradient text-white font-semibold px-8 py-6 text-lg rounded-2xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Download for iOS
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-gray-300 font-semibold px-8 py-6 text-lg rounded-2xl hover:bg-wishwing-gradient-light hover:border-wishwing-green transition-all duration-300"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Download for Android
          </Button>
        </div>

        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-2 bg-wishwing-gradient-light border border-wishwing-green/20 rounded-full px-4 py-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-wishwing-green rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Coming Soon to App Stores</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
