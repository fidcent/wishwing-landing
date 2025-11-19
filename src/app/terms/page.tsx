import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Usage Agreement',
  description: 'Read WishWing\'s Terms of Service. Understand the terms and conditions for using our birthday reminder and gifting platform.',
  openGraph: {
    title: 'WishWing Terms of Service',
    description: 'Terms and conditions for using WishWing.',
    url: 'https://wishwing.fidcent.com/terms',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Terms of Service</h1>
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
              <h2 className="text-3xl font-bold text-text-primary mb-4">Agreement to Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of WishWing's mobile application, 
                website, and related services (collectively, the "Service"). By accessing or using the Service, 
                you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or 
                use the Service.
              </p>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Eligibility</h2>
              <p className="text-text-secondary leading-relaxed">
                You must be at least 13 years old to use the Service. If you are under 18, you represent that 
                you have your parent or guardian's permission to use the Service. By using the Service, you 
                represent and warrant that you meet these eligibility requirements.
              </p>
            </div>

            {/* Account Registration */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Account Registration</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To access certain features of the Service, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We reserve the right to suspend or terminate your account if any information provided proves to 
                be inaccurate, not current, or incomplete.
              </p>
            </div>

            {/* WishCoins and Payments */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">WishCoins and Payments</h2>
              
              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">WishCoins</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                WishCoins are a virtual currency used within the Service. You can purchase WishCoins and use 
                them to send gifts, contribute to wishlists, and access certain features. WishCoins:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Have no monetary value outside the Service</li>
                <li>Are non-refundable except as required by law</li>
                <li>Cannot be transferred or exchanged for cash</li>
                <li>May expire according to applicable laws</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Purchases and Payments</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                All purchases are processed through third-party payment processors (Apple App Store, Google Play 
                Store, or other authorized payment providers). By making a purchase, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Pay all fees and charges as described at the time of purchase</li>
                <li>Provide accurate and complete payment information</li>
                <li>The payment processor's terms and conditions</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Refunds</h3>
              <p className="text-text-secondary leading-relaxed">
                All sales are final. Refunds will only be provided in accordance with applicable law or at our 
                sole discretion. For refund requests, please contact support@wishwing.com.
              </p>
            </div>

            {/* User Content */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">User Content</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Service allows you to post, upload, and share content ("User Content"). You retain ownership 
                of your User Content, but by submitting it to the Service, you grant us a worldwide, non-exclusive, 
                royalty-free license to use, reproduce, modify, and display your User Content for the purpose of 
                operating and improving the Service.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                You represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>You own or have the necessary rights to your User Content</li>
                <li>Your User Content does not violate any third-party rights</li>
                <li>Your User Content complies with these Terms</li>
              </ul>
            </div>

            {/* Prohibited Conduct */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Prohibited Conduct</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Post false, inaccurate, or misleading information</li>
                <li>Impersonate any person or entity</li>
                <li>Upload viruses or other malicious code</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use the Service for any commercial purpose without our consent</li>
                <li>Scrape, spider, or harvest data from the Service</li>
                <li>Reverse engineer or attempt to extract the source code</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Intellectual Property</h2>
              <p className="text-text-secondary leading-relaxed">
                The Service and its original content (excluding User Content), features, and functionality are 
                owned by WishWing and are protected by international copyright, trademark, patent, trade secret, 
                and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any 
                part of our Service without our express written permission.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed">
                The Service may contain links to third-party websites or services that are not owned or controlled 
                by WishWing. We have no control over and assume no responsibility for the content, privacy policies, 
                or practices of any third-party websites or services. You acknowledge and agree that we shall not 
                be responsible or liable for any damage or loss caused by your use of any such third-party services.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Disclaimer of Warranties</h2>
              <p className="text-text-secondary leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS 
                OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT 
                THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WISHWING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
                DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING 
                FROM YOUR USE OF THE SERVICE.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Indemnification</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to indemnify, defend, and hold harmless WishWing, its affiliates, and their respective 
                officers, directors, employees, and agents from any claims, liabilities, damages, losses, and 
                expenses, including reasonable attorneys' fees, arising out of or in any way connected with your 
                access to or use of the Service or your violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Termination</h2>
              <p className="text-text-secondary leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior 
                notice or liability, for any reason, including if you breach these Terms. Upon termination, your 
                right to use the Service will immediately cease. You may also terminate your account at any time 
                by contacting us.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
                which WishWing operates, without regard to its conflict of law provisions. Any disputes arising 
                under these Terms shall be resolved in the courts of that jurisdiction.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Changes to Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by 
                posting the new Terms on this page and updating the "Last updated" date. Your continued use of 
                the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-lightest p-6 rounded-xl">
                <p className="text-text-primary mb-2"><strong>Email:</strong> legal@fidcent.com</p>
                <p className="text-text-primary mb-2"><strong>Support:</strong> hello_wishwing@fidcent.com</p>
                <p className="text-text-primary mb-2"><strong>Website:</strong> wishwing.fidcent.com</p>
                <p className="text-text-primary">
                  <strong>Company:</strong> WishWing - A product of{' '}
                  <a 
                    href="https://tech.fidcent.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-purple hover:underline"
                  >
                    Fidcent
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
