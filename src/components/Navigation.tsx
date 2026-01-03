'use client';

import { useState, useEffect } from 'react';
import { analytics } from '@/utils/analytics';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.scrollY > 50);
    };

    globalThis.addEventListener('scroll', handleScroll);
    return () => globalThis.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#wishcoins', label: 'WishCoins' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (globalThis.location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    } else {
      globalThis.location.href = `/${href}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-neutral-200/50' 
          : 'bg-white/5 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
        >
          <img 
            src="/logo.png" 
            alt="WishWing Logo" 
            className={`h-14 w-auto transition-all duration-300 ${
              isScrolled ? 'drop-shadow-sm' : 'drop-shadow-[0_4px_16px_rgba(124,58,237,0.5)]'
            }`}
          />
          <span className={`text-3xl font-extrabold tracking-tight transition-all duration-300 ${
            isScrolled 
              ? 'text-neutral-900' 
              : 'bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(124,58,237,0.8)]'
          }`}>
            WISHWING
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                analytics.trackNavigationClick(link.label);
              }}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                isScrolled
                  ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  : 'text-neutral-900 hover:text-primary-600 hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#early-access"
            onClick={(e) => {
              handleNavClick(e, '#early-access');
              analytics.trackCTAClick('Join Waitlist', 'Navigation');
            }}
            className="px-6 py-2.5 bg-primary-600 text-white rounded-xl font-semibold text-sm shadow-medium hover:shadow-glow-primary hover:bg-primary-700 transition-all duration-300"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-neutral-100/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900' : 'bg-neutral-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900' : 'bg-neutral-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900' : 'bg-neutral-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl z-40 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                analytics.trackNavigationClick(link.label);
              }}
              className="text-neutral-900 text-2xl font-semibold hover:text-primary-600 transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
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
            className="mt-4 px-8 py-4 bg-primary-600 text-white rounded-2xl font-semibold text-lg shadow-strong hover:shadow-glow-primary transition-all animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
