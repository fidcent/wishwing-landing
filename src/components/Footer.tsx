'use client';

import Link from 'next/link';
import { footerQuickLinks, footerCompanyLinks } from '@/data/navigation';
import { socialLinks } from '@/data/links';

const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="WishWing"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold text-white font-logo">
                WISHWING
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Celebrate Better, Together. Nigeria&apos;s digital gifting platform for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => link.scroll ? handleScrollClick(e, link.href) : undefined}
                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Socials</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} WishWing. All Rights Reserved
            </p>
            <p className="text-neutral-500 text-sm mt-1">
              A Product of{' '}
              <a
                href="https://fidcent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Fidcent Technologies Limited
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-neutral-400">
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Large decorative WishWing text */}
      <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 select-none" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 text-center leading-none">
          <span
            className="text-[8rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] font-bold tracking-tight"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            WishWing
          </span>
        </div>
      </div>
    </footer>
  );
}
