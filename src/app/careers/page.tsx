import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team',
  description: 'Join the WishWing team at Fidcent. Explore career opportunities and help us build the future of birthday celebrations.',
  openGraph: {
    title: 'Careers at WishWing',
    description: 'Join our team and help build the future of birthday celebrations.',
    url: 'https://wishwing.fidcent.com/careers',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/careers',
  },
};

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable features for our mobile and web platforms.',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create delightful user experiences that make celebrating birthdays effortless.',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Drive user growth and build our brand across digital channels.',
    },
    {
      title: 'Customer Success Specialist',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help users get the most out of WishWing and ensure exceptional experiences.',
    },
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive health, dental, and vision coverage' },
    { icon: '🏖️', title: 'Flexible PTO', description: 'Unlimited paid time off policy' },
    { icon: '🌍', title: 'Remote Work', description: 'Work from anywhere in the world' },
    { icon: '📚', title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
    { icon: '🚀', title: 'Growth Opportunities', description: 'Clear career progression paths' },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Help millions of people celebrate life's special moments
          </p>
          <a
            href="#open-positions"
            className="inline-block px-8 py-4 bg-white text-primary-purple rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Why Join WishWing?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            We're on a mission to make celebrating birthdays effortless and meaningful. 
            Join a team that values innovation, collaboration, and making a real impact 
            on people's lives.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-gray-lightest rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">🎯 Meaningful Work</h3>
              <p className="text-text-secondary">
                Build products that strengthen relationships and create joyful moments.
              </p>
            </div>
            <div className="p-6 bg-gray-lightest rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">🚀 Fast Growth</h3>
              <p className="text-text-secondary">
                Join a rapidly growing startup with opportunities to make significant impact.
              </p>
            </div>
            <div className="p-6 bg-gray-lightest rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">🤝 Great Culture</h3>
              <p className="text-text-secondary">
                Work with talented, passionate people who care about what they build.
              </p>
            </div>
            <div className="p-6 bg-gray-lightest rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">💡 Innovation</h3>
              <p className="text-text-secondary">
                Experiment with new ideas and technologies to solve real problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-5 bg-gray-lightest">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="p-6 border-2 border-gray-light rounded-xl hover:border-primary-purple hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-primary-purple/10 text-primary-purple rounded-full font-medium">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-lightest text-text-secondary rounded-full">
                        📍 {position.location}
                      </span>
                      <span className="px-3 py-1 bg-gray-lightest text-text-secondary rounded-full">
                        ⏰ {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-gradient-primary text-white rounded-full font-semibold hover:scale-105 transition-transform">
                    Apply Now
                  </button>
                </div>
                <p className="text-text-secondary">{position.description}</p>
              </div>
            ))}
          </div>

          {/* No Perfect Match */}
          <div className="mt-12 text-center p-8 bg-gray-lightest rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Don't see a perfect match?
            </h3>
            <p className="text-text-secondary mb-4">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-6 py-3 border-2 border-primary-purple text-primary-purple rounded-full font-semibold hover:bg-primary-purple hover:text-white transition-all">
              Send General Application
            </button>
          </div>
        </div>
      </section>

      {/* Powered by Fidcent */}
      <section className="py-16 px-5 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-4 opacity-90">
            WishWing is a product of
          </p>
          <a
            href="https://tech.fidcent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-bold hover:underline"
          >
            Fidcent Technologies Limited
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
