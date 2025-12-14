'use client';

import { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#wishcoins', label: 'WishCoins' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      // On homepage - scroll to element
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // On another page - navigate to homepage with hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity cursor-pointer group">
          <img src="/logo.png" alt="WishWing Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent' 
              : 'text-white drop-shadow-lg'
          }`}>
            WishWing
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                analytics.trackNavigationClick(link.label);
              }}
              className="text-gray-dark font-medium hover:text-primary-purple transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download CTA Button */}
        <div className="hidden md:block">
          <a
            href="#early-access"
            onClick={(e) => {
              handleNavClick(e, '#early-access');
              analytics.trackCTAClick('Join Waitlist', 'Navigation');
            }}
            className="px-6 py-2.5 bg-primary-purple text-white rounded-full font-medium hover:bg-secondary-purple transition-colors duration-200 cursor-pointer"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-primary-purple transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-primary-purple transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-primary-purple transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-gradient-primary z-40 animate-fadeInUp">
          <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  analytics.trackNavigationClick(link.label);
                }}
                className="text-white text-2xl font-semibold hover:scale-110 transition-transform cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={(e) => {
                handleNavClick(e, '#early-access');
                analytics.trackCTAClick('Join Waitlist', 'Mobile Menu');
              }}
              className="mt-4 px-8 py-3 bg-white text-primary-purple rounded-full font-semibold w-64 text-center cursor-pointer"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
