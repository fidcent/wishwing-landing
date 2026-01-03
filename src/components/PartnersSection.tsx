'use client';

const partners = [
  { name: 'Paystack', description: 'Secure payment gateway', icon: '💳' },
  { name: 'Flutterwave', description: 'Alternative payment processing', icon: '💰' },
  { name: 'Twilio', description: 'SMS and WhatsApp delivery', icon: '📱' },
  { name: 'SendGrid', description: 'Email notifications', icon: '📧' },
  { name: 'Firebase', description: 'Push notifications', icon: '🔔' },
  { name: 'AWS', description: 'Cloud hosting', icon: '☁️' },
  { name: 'Cloudflare', description: 'CDN and security', icon: '🛡️' },
];

const trustBadges = [
  { label: '256-bit SSL Encryption', icon: '🔐' },
  { label: 'PCI DSS Compliant', icon: '🛡️' },
  { label: 'NDPR Compliant', icon: '✅' },
  { label: 'Secure Payments', icon: '💳' },
];

export default function PartnersSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-br from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badges */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Your Security is Our Priority
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Industry-standard security protecting your data and transactions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-strong transition-all duration-300"
              >
                <div className="text-4xl mb-3">{badge.icon}</div>
                <p className="text-sm font-semibold text-neutral-900 text-center">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Trusted Partners & Integrations
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We work with industry-leading platforms to deliver the best experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-2xl border border-neutral-200/50 hover:border-primary-600 hover:shadow-strong transition-all duration-300 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>
                <h3 className="font-bold text-lg text-neutral-900 mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-neutral-600 text-center">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 text-sm">
              Note: Physical gift delivery partnerships (Jumia, Konga) coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
