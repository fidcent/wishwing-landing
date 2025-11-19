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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-light/50' : 'bg-white/80 backdrop-blur-md'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <img src="/logo.png" alt="WishWing Logo" className="w-10 h-10" />
          <span className="font-display text-2xl text-primary-purple">WishWing</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                analytics.trackNavigationClick(link.label);
              }}
              className="text-gray-dark font-medium hover:text-primary-purple transition-all duration-300 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-purple after:transition-all after:duration-300 hover:after:w-full pb-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download CTA Button */}
        <div className="hidden md:block">
          <a
            href="#download"
            onClick={(e) => {
              handleNavClick(e, '#download');
              analytics.trackCTAClick('Download App', 'Navigation');
            }}
            className="px-7 py-3 bg-gradient-primary text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            Download App
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
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
              href="#download"
              onClick={(e) => {
                handleNavClick(e, '#download');
                analytics.trackCTAClick('Download App', 'Mobile Menu');
              }}
              className="mt-4 px-8 py-3 bg-white text-primary-purple rounded-full font-semibold w-64 text-center cursor-pointer"
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
