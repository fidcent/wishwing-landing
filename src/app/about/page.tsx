import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About WishWing - Nigeria\'s Digital Gifting Platform | Fidcent Technologies',
  description: 'WishWing transforms cash-based gift-giving into meaningful celebrations. Built by Fidcent Technologies, we\'re creating Nigeria\'s default digital gifting infrastructure.',
  openGraph: {
    title: 'About WishWing - Nigeria\'s Social Gifting Platform',
    description: 'Learn about WishWing\'s mission to own the occasion layer in Nigeria—becoming the default tool for birthdays, weddings, holidays, and every celebration.',
    url: 'https://wishwing.fidcent.com/about',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/about',
  },
};

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    url: 'https://facebook.com/wishwing' 
  },
  { 
    name: 'Twitter/X', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    url: 'https://twitter.com/wishwing' 
  },
  { 
    name: 'Instagram', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
    url: 'https://instagram.com/wishwing' 
  },
  { 
    name: 'LinkedIn', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    url: 'https://linkedin.com/company/fidcent' 
  },
  { 
    name: 'TikTok', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>,
    url: '#', 
    badge: 'Coming Soon' 
  },
];

const contactInfo = [
  { label: 'Support Email', value: 'hello_wishwing@fidcent.com', icon: '📧', link: 'mailto:hello_wishwing@fidcent.com' },
  { label: 'Help & Inquiries', value: 'hello_wishwing@fidcent.com', icon: '❓', link: 'mailto:hello_wishwing@fidcent.com' },
  { label: 'Business Inquiries', value: 'business@fidcent.com', icon: '💼', link: 'mailto:business@fidcent.com' },
  { label: 'Response Time', value: 'Within 24 hours', icon: '⏱️', link: null },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-sm">About WishWing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight animate-fade-in-up">
            Nigeria's Digital
            <br />
            <span className="text-gradient-alt">Gifting Infrastructure</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-100 font-light">
            Transforming cash-based gift-giving into meaningful celebrations
          </p>
          
          <p className="text-base md:text-lg text-white/80 animate-fade-in-up animate-delay-200">
            A product of Fidcent Technologies Limited
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              About Fidcent Technologies
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Fidcent Technologies Limited is a Nigerian fintech and software development company 
              focused on building innovative digital solutions for African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Founded</h3>
              <p className="text-neutral-600">2024</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Headquarters</h3>
              <p className="text-neutral-600">Lagos, Nigeria</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Focus</h3>
              <p className="text-neutral-600">African Markets</p>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-gradient-to-br from-neutral-50 to-white rounded-3xl border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Company Website</h3>
            <a 
              href="https://fidcent.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline text-lg font-semibold"
            >
              🌐 fidcent.com
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-5 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
            <p className="text-xl font-semibold text-primary-600">
              To become Nigeria's default digital gifting infrastructure—transforming informal, 
              cash-based gift-giving into structured, social, and emotionally meaningful experiences.
            </p>
            <p>
              Gift-giving in Nigeria is frequent and culturally important, but current options are fragmented. 
              Cash transfers feel impersonal, physical gifting is logistically complex, group gifting is hard 
              to coordinate, and people often miss important occasions.
            </p>
            <p>
              WishWing is a social gifting platform powered by WishCoins—our virtual currency. 
              We sit between payments, social interaction, and commerce, focusing on occasions 
              and relationships rather than transactions.
            </p>
            <p>
              Our strategic goal is to own the "occasion layer" in Nigeria—becoming the default tool 
              people use whenever there is something to celebrate, from birthdays to weddings, 
              holidays, and corporate events.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      {/* <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Why Nigeria Loves WishWing
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Built for Nigeria's thriving digital economy and strong gifting culture
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary-purple/5 to-white rounded-2xl border border-primary-purple/20">
              <div className="text-3xl mb-2">🇳🇬</div>
              <div className="text-3xl font-bold text-primary-purple mb-1">220M</div>
              <div className="text-sm text-text-secondary">People in Nigeria</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-purple/5 to-white rounded-2xl border border-primary-purple/20">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-3xl font-bold text-primary-purple mb-1">88-99M</div>
              <div className="text-sm text-text-secondary">Smartphone Users</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-purple/5 to-white rounded-2xl border border-primary-purple/20">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-3xl font-bold text-primary-purple mb-1">50M+</div>
              <div className="text-sm text-text-secondary">Digital Payment Users</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-purple/5 to-white rounded-2xl border border-primary-purple/20">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-3xl font-bold text-primary-purple mb-1">25-30%</div>
              <div className="text-sm text-text-secondary">YoY Payment Growth</div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary-purple to-primary-pink rounded-3xl text-center">
            <p className="text-white text-xl font-semibold">
              🎉 Strong Gifting Culture: Nigerians spend ₦50,000-150,000 annually on gifts
            </p>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 px-5 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
              <div className="text-4xl mb-4">💜</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Emotion Over Transaction</h3>
              <p className="text-neutral-600">
                We believe gifting should feel personal and meaningful, not like another bank transfer.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Social by Design</h3>
              <p className="text-neutral-600">
                Celebrations are better together. Our features encourage sharing, contributing, and connecting.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Occasion-First</h3>
              <p className="text-neutral-600">
                Every feature is built around celebrations—birthdays, weddings, holidays, and corporate events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Built by Fidcent Technologies Limited
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            WishWing is proudly developed by{' '}
            <a 
              href="https://fidcent.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline font-semibold"
            >
              Fidcent Technologies Limited
            </a>{' '}
            , a technology company committed to creating innovative solutions that 
            enhance everyday life and strengthen human connections.
          </p>
          <a
            href="https://fidcent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-strong hover:shadow-glow-primary"
          >
            Learn More About Fidcent
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-5 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((info) => (
              <div key={info.label} className="p-6 bg-white rounded-2xl border border-neutral-200/50 hover:border-primary-600 hover:shadow-strong transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">{info.label}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-primary-600 hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-neutral-600">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Follow Us on Social Media</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                social.badge ? (
                  <div
                    key={social.name}
                    className="relative flex items-center gap-3 px-6 py-3 bg-white border-2 border-neutral-200 rounded-full opacity-60 cursor-not-allowed"
                  >
                    <span className="text-neutral-400">{social.icon}</span>
                    <span className="font-semibold text-neutral-900">{social.name}</span>
                    <span className="absolute -top-2 -right-2 px-2 py-1 bg-yellow-400 text-neutral-900 text-xs font-bold rounded-full">
                      {social.badge}
                    </span>
                  </div>
                ) : (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-neutral-200 rounded-full hover:border-primary-600 hover:shadow-strong transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-neutral-600 group-hover:text-primary-600 transition-colors">{social.icon}</span>
                    <span className="font-semibold text-neutral-900">{social.name}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Among the First to Try WishWing
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join the waitlist and celebrate better, together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#early-access"
              className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold shadow-strong hover:-translate-y-0.5 transition-all"
            >
              Join Waitlist
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
