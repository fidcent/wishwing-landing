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
  { name: 'Facebook', icon: '📘', url: 'https://facebook.com/wishwing' },
  { name: 'Twitter/X', icon: '🐦', url: 'https://twitter.com/wishwing' },
  { name: 'Instagram', icon: '📸', url: 'https://instagram.com/wishwing' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/wishwing' },
  { name: 'TikTok', icon: '🎵', url: '#', badge: 'Coming Soon' },
];

const contactInfo = [
  { label: 'Support Email', value: 'support@wishwing.com', icon: '📧', link: 'mailto:support@wishwing.com' },
  { label: 'Help & Inquiries', value: 'help@wishwing.com', icon: '❓', link: 'mailto:help@wishwing.com' },
  { label: 'Business Inquiries', value: 'business@fidcent.com', icon: '💼', link: 'mailto:business@fidcent.com' },
  { label: 'Response Time', value: 'Within 24 hours', icon: '⏱️', link: null },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">About WishWing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Nigeria's Digital Gifting Infrastructure</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Transforming cash-based gift-giving into meaningful celebrations
          </p>
          <p className="text-lg opacity-80">
            A product of Fidcent Technologies Limited
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              About Fidcent Technologies
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Fidcent Technologies Limited is a Nigerian fintech and software development company 
              focused on building innovative digital solutions for African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-primary-purple/5 to-primary-pink/5 rounded-3xl border border-primary-purple/20">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-bold text-lg text-text-primary mb-2">Founded</h3>
              <p className="text-text-secondary">2024</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-primary-purple/5 to-primary-pink/5 rounded-3xl border border-primary-purple/20">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-bold text-lg text-text-primary mb-2">Headquarters</h3>
              <p className="text-text-secondary">Lagos, Nigeria</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-primary-purple/5 to-primary-pink/5 rounded-3xl border border-primary-purple/20">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-lg text-text-primary mb-2">Focus</h3>
              <p className="text-text-secondary">African Markets</p>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Company Website</h3>
            <a 
              href="https://tech.fidcent.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-purple hover:underline text-lg font-semibold"
            >
              🌐 tech.fidcent.com
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-5 bg-gradient-to-br from-gray-lightest to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12 text-center">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p className="text-xl font-semibold text-primary-purple">
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
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Why Nigeria Loves WishWing
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Built for Nigeria's thriving digital economy and strong gifting culture
            </p>
          </div>

          {/* Market Stats */}
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
      </section>

      {/* Values Section */}
      <section className="py-20 px-5 bg-gray-lightest">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">💜</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Emotion Over Transaction</h3>
              <p className="text-text-secondary">
                We believe gifting should feel personal and meaningful, not like another bank transfer.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Social by Design</h3>
              <p className="text-text-secondary">
                Celebrations are better together. Our features encourage sharing, contributing, and connecting.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Occasion-First</h3>
              <p className="text-text-secondary">
                Every feature is built around celebrations—birthdays, weddings, holidays, and corporate events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Built by Fidcent Technologies Limited
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            WishWing is proudly developed by{' '}
            <a 
              href="https://tech.fidcent.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-purple hover:underline font-semibold"
            >
              Fidcent Technologies Limited
            </a>
            , a technology company committed to creating innovative solutions that 
            enhance everyday life and strengthen human connections.
          </p>
          <a
            href="https://tech.fidcent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Learn More About Fidcent
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-5 bg-gradient-to-br from-gray-lightest to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary-purple hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-text-primary mb-2">{info.label}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-primary-purple hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-secondary">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-8">Follow Us on Social Media</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                social.badge ? (
                  <div
                    key={index}
                    className="relative flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full opacity-60 cursor-not-allowed"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-semibold text-text-primary">{social.name}</span>
                    <span className="absolute -top-2 -right-2 px-2 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full">
                      {social.badge}
                    </span>
                  </div>
                ) : (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary-purple hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-semibold text-text-primary">{social.name}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Among the First to Try WishWing
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join us on January 7, 2026 and never miss another birthday.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#early-access"
              className="px-8 py-4 bg-white text-primary-purple rounded-xl font-semibold shadow-xl hover:-translate-y-0.5 transition-all"
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
