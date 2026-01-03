'use client';

import { useState, useEffect, useCallback } from 'react';
import { analytics } from '@/utils/analytics';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.scrollY > 20);
    };

    globalThis.addEventListener('scroll', handleScroll, { passive: true });
    return () => globalThis.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (globalThis.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    globalThis.addEventListener('resize', handleResize);
    return () => globalThis.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#features', label: 'Features', icon: '✨' },
    { href: '#how-it-works', label: 'How It Works', icon: '🎯' },
    { href: '#wishcoins', label: 'WishCoins', icon: '🪙' },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (globalThis.location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    } else {
      globalThis.location.href = `/${href}`;
    }
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-neutral-100' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-all duration-200 group shrink-0"
            >
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="WishWing Logo" 
                  className="h-9 sm:h-11 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent">
                WISHWING
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    analytics.trackNavigationClick(link.label);
                  }}
                  className="relative px-3 lg:px-4 py-2 rounded-full font-medium text-sm text-neutral-600 hover:text-primary-600 transition-all duration-200 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-primary-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a
                href="#early-access"
                onClick={(e) => {
                  handleNavClick(e, '#early-access');
                  analytics.trackCTAClick('Join Waitlist', 'Navigation');
                }}
                className="inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-sm shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:from-primary-500 hover:to-primary-600 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Join Waitlist</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100/80 hover:bg-neutral-200/80 active:scale-95 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-neutral-700 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-neutral-700 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-neutral-700 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-16 sm:top-18 left-0 right-0 bottom-0 z-40 transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white h-full overflow-y-auto">
          {/* Nav Links */}
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  analytics.trackNavigationClick(link.label);
                }}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-neutral-700 hover:text-primary-600 hover:bg-primary-50 active:bg-primary-100 transition-all duration-200 ${
                  isMobileMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ 
                  animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  animationFillMode: 'backwards'
                }}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-lg font-semibold">{link.label}</span>
                <svg className="w-5 h-5 ml-auto text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

          {/* CTA Section */}
          <div className="px-4 py-6">
            <a
              href="#early-access"
              onClick={(e) => {
                handleNavClick(e, '#early-access');
                analytics.trackCTAClick('Join Waitlist', 'Mobile Menu');
              }}
              className={`flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl active:scale-[0.98] transition-all duration-200 ${
                isMobileMenuOpen ? 'animate-fade-in-up' : ''
              }`}
              style={{ 
                animationDelay: isMobileMenuOpen ? '150ms' : '0ms',
                animationFillMode: 'backwards'
              }}
            >
              <span>Join the Waitlist</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            {/* Additional Info */}
            <p className="mt-4 text-center text-sm text-neutral-500">
              Be the first to know when we launch 🚀
            </p>
          </div>

          {/* Bottom Decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-50/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </>
  );
}
