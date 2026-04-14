'use client';

import { useState, useEffect, useCallback } from 'react';
import { analytics } from '@/utils/analytics';
import { navLinks } from '@/data/navigation';
import { appLinks } from '@/data/links';

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

  useEffect(() => {
    const handleResize = () => {
      if (globalThis.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    globalThis.addEventListener('resize', handleResize);
    return () => globalThis.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (globalThis.location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-neutral-900/95 backdrop-blur-xl shadow-xl'
              : 'bg-neutral-900'
          }`}
        >
          <div className="flex items-center justify-between h-14 px-5 lg:px-6">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200 shrink-0"
            >
              <img
                src="/logo.png"
                alt="WishWing Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold tracking-tight text-white font-logo">
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
                  className="px-3 lg:px-4 py-1.5 rounded-full text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href={appLinks.appStore}
                onClick={() => analytics.trackCTAClick('Get Started', 'Navigation')}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-neutral-900 transition-all duration-200"
              >
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 z-40 transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-neutral-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  analytics.trackNavigationClick(link.label);
                }}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                <span className="text-base font-medium">{link.label}</span>
                <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          <div className="px-4 pb-4">
            <div className="h-px bg-white/10 mb-4" />
            <a
              href={appLinks.appStore}
              onClick={() => analytics.trackCTAClick('Get Started', 'Mobile Menu')}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-neutral-900 transition-all duration-200"
            >
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
