import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Learn About WishWing',
  description: 'Discover the story behind WishWing, a product of Fidcent. Learn how we help people never miss a birthday and celebrate every special moment.',
  openGraph: {
    title: 'About WishWing - Birthday Reminder App',
    description: 'Learn about WishWing and our mission to help you celebrate every birthday.',
    url: 'https://wishwing.fidcent.com/about',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About WishWing</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Never miss a birthday. Celebrate every moment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            At WishWing, we believe that birthdays are special moments that deserve to be celebrated. 
            Our mission is to ensure that no birthday goes unnoticed, no matter how busy life gets.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            We're building a platform that combines smart reminders, wishlist management, and seamless 
            gifting to make celebrating birthdays effortless and meaningful.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            WishWing is more than just a reminder app – it's your personal celebration assistant, 
            helping you stay connected with the people who matter most.
          </p>
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
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Reliability</h3>
              <p className="text-text-secondary">
                We ensure you never miss an important date with timely reminders and smart notifications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">💜</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Connection</h3>
              <p className="text-text-secondary">
                We help you strengthen relationships by making it easy to show you care on special days.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Innovation</h3>
              <p className="text-text-secondary">
                We continuously improve our platform with features like WishCoins and group gifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Built by Fidcent
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            WishWing is proudly developed by{' '}
            <a 
              href="https://tech.fidcent.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-purple hover:underline font-semibold"
            >
              Fidcent
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
            <a
              href="/#home"
              className="px-8 py-4 bg-white text-primary-purple rounded-xl font-semibold shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
