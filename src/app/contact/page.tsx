import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Have questions about WishWing? Get in touch with our team. We\'re here to help with birthday reminders, wishlists, and gifting.',
  openGraph: {
    title: 'Contact WishWing',
    description: 'Get in touch with the WishWing team.',
    url: 'https://wishwing.fidcent.com/contact',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90">
            We'd love to hear from you. Get in touch!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-5 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-soft border border-neutral-200/50">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:scale-[1.02] hover:shadow-glow-primary transition-all duration-300 shadow-strong"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Have a question, feedback, or just want to say hello? We're here to help! 
                Choose your preferred way to reach us.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Email Support</h3>
                  <p className="text-neutral-600 mb-2">We typically respond within 24 hours</p>
                  <a href="mailto:hello_wishwing@fidcent.com" className="text-primary-600 font-semibold hover:underline">
                    hello_wishwing@fidcent.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Live Chat</h3>
                  <p className="text-neutral-600 mb-2">Available Mon-Fri, 9AM-6PM EST</p>
                  <button className="text-primary-600 font-semibold hover:underline">
                    Start Chat
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
                <div className="text-3xl">🐦</div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Social Media</h3>
                  <p className="text-neutral-600 mb-2">Follow us for updates and quick responses</p>
                  <div className="flex gap-3">
                    <a href="https://twitter.com/wishwing" className="text-primary-600 font-semibold hover:underline">Twitter</a>
                    <span className="text-neutral-600">•</span>
                    <a href="https://facebook.com/wishwing" className="text-primary-600 font-semibold hover:underline">Facebook</a>
                    <span className="text-neutral-600">•</span>
                    <a href="https://instagram.com/wishwing" className="text-primary-600 font-semibold hover:underline">Instagram</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">In-App Support</h3>
                  <p className="text-neutral-600 mb-2">Get help directly within the WishWing app</p>
                  <p className="text-primary-600 font-semibold">
                    Menu → Help & Support
                  </p>
                </div>
              </div>
            </div>

            {/* Business Inquiries */}
            <div className="p-6 bg-primary-50 border-2 border-primary-200 rounded-xl">
              <h3 className="font-bold text-neutral-900 mb-2">Business Inquiries</h3>
              <p className="text-neutral-600 mb-3">
                For partnerships, press, or business opportunities:
              </p>
              <a href="mailto:business@fidcent.com" className="text-primary-600 font-semibold hover:underline">
                business@fidcent.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-neutral-600 mb-12">
            Find quick answers to common questions
          </p>
          
          <div className="space-y-4">
            {[
              {
                q: 'How do I download the WishWing app?',
                a: 'WishWing is available on both iOS (App Store) and Android (Google Play Store). Simply search for "WishWing" or use the download buttons on our homepage.',
              },
              {
                q: 'What are WishCoins and how do they work?',
                a: 'WishCoins are our virtual currency that makes gifting easy. You can purchase WishCoins and use them to send gifts, contribute to wishlists, or send directly to friends.',
              },
              {
                q: 'Is WishWing free to use?',
                a: 'Yes! WishWing is 100% free to download and use.',
              },
              {
                q: 'How do I report a bug or technical issue?',
                a: 'Please email us at hello_wishwing@fidcent.com with details about the issue, including your device type and what you were trying to do. Screenshots help too!',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-neutral-50 p-6 rounded-xl cursor-pointer hover:bg-primary-50 transition-colors border border-neutral-200/50"
              >
                <summary className="font-semibold text-neutral-900 list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600">
              Still have questions?{' '}
              <a href="/contact" className="text-primary-600 font-semibold hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Powered by Fidcent */}
      <section className="py-16 px-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center">
        <p className="text-lg mb-2 opacity-90">A product of</p>
        <a
          href="https://fidcent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl font-bold hover:underline"
        >
          Fidcent Technologies Limited
        </a>
      </section>

      <Footer />
    </main>
  );
}
