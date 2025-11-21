import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Your Data Protection',
  description: 'Read WishWing\'s Privacy Policy. Learn how we protect your data, handle birthday information, and ensure your privacy.',
  openGraph: {
    title: 'WishWing Privacy Policy',
    description: 'Learn how we protect your data and ensure your privacy.',
    url: 'https://wishwing.fidcent.com/privacy',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Privacy Policy</h1>
          <p className="text-xl opacity-90">
            Last updated: November 19, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                At WishWing, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our mobile application and website. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the application.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Personal Information</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Register for an account</li>
                <li>Use our services and features</li>
                <li>Make purchases or transactions</li>
                <li>Contact our customer support</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Information Collected Automatically</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you access the app, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Usage data (features used, time spent, interactions)</li>
                <li>Location data (with your permission)</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Contact Information</h3>
              <p className="text-text-secondary leading-relaxed">
                With your permission, we may access your device's contact list to help you manage birthday 
                reminders and send gifts to your contacts. This information is stored securely and used only 
                for the purposes of providing our services.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send birthday reminders and notifications</li>
                <li>Process transactions and manage WishCoins</li>
                <li>Personalize your experience</li>
                <li>Communicate with you about updates, offers, and support</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Sharing Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              
              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Service Providers</h3>
              <p className="text-text-secondary leading-relaxed">
                We may share your information with third-party service providers who perform services on our 
                behalf, such as payment processing, data analysis, email delivery, and hosting services.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Legal Requirements</h3>
              <p className="text-text-secondary leading-relaxed">
                We may disclose your information if required to do so by law or in response to valid requests 
                by public authorities (e.g., a court or government agency).
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Business Transfers</h3>
              <p className="text-text-secondary leading-relaxed">
                If we are involved in a merger, acquisition, or asset sale, your information may be transferred. 
                We will provide notice before your information is transferred and becomes subject to a different 
                privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">With Your Consent</h3>
              <p className="text-text-secondary leading-relaxed">
                We may share your information for any other purpose with your consent.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Data Security</h2>
              <p className="text-text-secondary leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Your Privacy Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent where we rely on it</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacies@fidcent.com" className="text-primary-purple hover:underline">
                  privacies@fidcent.com
                </a>
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Children's Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Third-Party Links</h2>
              <p className="text-text-secondary leading-relaxed">
                Our app may contain links to third-party websites or services that are not owned or controlled 
                by WishWing. We are not responsible for the privacy practices of these third parties. We 
                encourage you to review their privacy policies.
              </p>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">International Data Transfers</h2>
              <p className="text-text-secondary leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of 
                residence. These countries may have data protection laws that are different from the laws of 
                your country. We take steps to ensure that your information receives an adequate level of 
                protection.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Changes to This Privacy Policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-lightest p-6 rounded-xl">
                <p className="text-text-primary mb-2"><strong>Email:</strong> privacies@fidcent.com</p>
                <p className="text-text-primary mb-2"><strong>Website:</strong> wishwing.fidcent.com</p>
                <p className="text-text-primary">
                  <strong>Company:</strong> WishWing - A product of{' '}
                  <a 
                    href="https://tech.fidcent.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-purple hover:underline"
                  >
                    Fidcent Technologies Limited
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
