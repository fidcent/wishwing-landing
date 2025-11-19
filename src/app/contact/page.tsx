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
      <section className="pt-32 pb-20 px-5 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90">
            We'd love to hear from you. Get in touch!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-5 bg-gray-lightest">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-light rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-light rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-text-primary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-light rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-light rounded-lg focus:border-primary-purple focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Have a question, feedback, or just want to say hello? We're here to help! 
                Choose your preferred way to reach us.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Email Support</h3>
                  <p className="text-text-secondary mb-2">We typically respond within 24 hours</p>
                  <a href="mailto:support@wishwing.com" className="text-primary-purple font-semibold hover:underline">
                    support@wishwing.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Live Chat</h3>
                  <p className="text-text-secondary mb-2">Available Mon-Fri, 9AM-6PM EST</p>
                  <button className="text-primary-purple font-semibold hover:underline">
                    Start Chat
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl">🐦</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Social Media</h3>
                  <p className="text-text-secondary mb-2">Follow us for updates and quick responses</p>
                  <div className="flex gap-3">
                    <a href="https://twitter.com/wishwing" className="text-primary-purple font-semibold hover:underline">Twitter</a>
                    <span className="text-text-secondary">•</span>
                    <a href="https://facebook.com/wishwing" className="text-primary-purple font-semibold hover:underline">Facebook</a>
                    <span className="text-text-secondary">•</span>
                    <a href="https://instagram.com/wishwing" className="text-primary-purple font-semibold hover:underline">Instagram</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">In-App Support</h3>
                  <p className="text-text-secondary mb-2">Get help directly within the WishWing app</p>
                  <p className="text-primary-purple font-semibold">
                    Menu → Help & Support
                  </p>
                </div>
              </div>
            </div>

            {/* Business Inquiries */}
            <div className="p-6 bg-primary-purple/10 border-2 border-primary-purple/20 rounded-xl">
              <h3 className="font-bold text-text-primary mb-2">Business Inquiries</h3>
              <p className="text-text-secondary mb-3">
                For partnerships, press, or business opportunities:
              </p>
              <a href="mailto:business@fidcent.com" className="text-primary-purple font-semibold hover:underline">
                business@fidcent.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-text-secondary mb-12">
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
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-lightest p-6 rounded-xl cursor-pointer hover:bg-primary-purple/5 transition-colors"
              >
                <summary className="font-semibold text-text-primary list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary-purple group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary">
              Still have questions?{' '}
              <a href="/contact" className="text-primary-purple font-semibold hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Powered by Fidcent */}
      <section className="py-16 px-5 bg-gradient-primary text-white text-center">
        <p className="text-lg mb-2 opacity-90">A product of</p>
        <a
          href="https://tech.fidcent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl font-bold hover:underline"
        >
          Fidcent
        </a>
      </section>

      <Footer />
    </main>
  );
}
