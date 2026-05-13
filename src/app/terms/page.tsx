import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - WishWing App Store Ready',
  description: 'Read WishWing\'s Terms of Service. Understand the terms and conditions for using our contact-driven and birthday-based gifting platform.',
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
      <PageHeader badge="Legal" title="Terms of Service" subtitle="Last updated: May 13, 2026" />

      {/* Content Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12">

            {/* Introduction */}
            <div>
              <p className="text-text-secondary leading-relaxed mb-4">
                These Terms of Service (Terms) govern your access to and use of the WishWing mobile application,
                website, and related services (collectively, the Service). WishWing is a product of Fidcent Technologies Limited.
              </p>
              <p className="text-text-secondary leading-relaxed">
                By creating an account, accessing, or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
              </p>
            </div>

            {/* 1. Who we are */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">1. Who We Are</h2>
              <div className="bg-gray-lightest p-6 rounded-xl space-y-1">
                <p className="text-text-primary"><strong>Company:</strong> Fidcent Technologies Limited (WishWing)</p>
                <p className="text-text-primary">
                  <strong>Website:</strong>{' '}
                  <a href="https://wishwing.fidcent.com" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">
                    https://wishwing.fidcent.com
                  </a>
                </p>
                <p className="text-text-primary">
                  <strong>Legal contact:</strong>{' '}
                  <a href="mailto:legal@fidcent.com" className="text-primary-purple hover:underline">legal@fidcent.com</a>
                </p>
                <p className="text-text-primary">
                  <strong>Support:</strong>{' '}
                  <a href="mailto:hello_wishwing@fidcent.com" className="text-primary-purple hover:underline">hello_wishwing@fidcent.com</a>
                </p>
              </div>
            </div>

            {/* 2. Eligibility */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">2. Eligibility</h2>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>The Service is intended for users aged 4 years and above.</li>
                <li>Children under 4 are not permitted to use the Service.</li>
                <li>If you are under 18, you may use the Service only with parent or legal guardian consent and supervision where required by applicable law.</li>
                <li>You represent that your use of the Service complies with all applicable laws in your jurisdiction.</li>
              </ul>
            </div>

            {/* 3. Account registration and security */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">3. Account Registration and Security</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To use key features, you may need to create an account.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>Provide accurate, current, and complete information.</li>
                <li>Keep your account information up to date.</li>
                <li>Maintain the confidentiality of your login credentials.</li>
                <li>Notify us promptly if you suspect unauthorized access to your account.</li>
                <li>Be responsible for activity occurring under your account, except where caused by our failure to implement reasonable security controls.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                We may suspend or restrict accounts for suspected fraud, abuse, legal risk, or material breach of these Terms.
              </p>
            </div>

            {/* 4. Core service model */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">4. Core Service Model and Data-Linked Features</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                WishWing is a contact-driven and birthday-based gifting platform.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">Core service behaviors include:</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>Contact-based matching and discovery, including identifying whether a phone contact is already on WishWing.</li>
                <li>Mutuality logic between users based on saved contacts and account associations.</li>
                <li>Birthday and event workflows, including reminders and suggested gifting journeys.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                Your use of these features is also governed by our Privacy Policy.
              </p>
            </div>

            {/* 5. Permissions */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">5. Permissions and Device Features</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Certain features require device permissions, such as contacts, notifications, and photo library access.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>You can deny or revoke permissions in device settings.</li>
                <li>Some features may not work properly without required permissions.</li>
                <li>Enabling biometric login is optional and subject to device support.</li>
              </ul>
            </div>

            {/* 6. WishCoins, purchases, payments */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">6. WishCoins, Purchases, and Payments</h2>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">6.1 WishCoins</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                WishCoins are virtual units for eligible in-app experiences.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>WishCoins are not legal tender and have no cash value outside the Service.</li>
                <li>WishCoins are not bank deposits and are not insured.</li>
                <li>Except where required by applicable law, WishCoins are non-transferable and non-refundable.</li>
                <li>We may update eligible uses, limits, or rules for WishCoins with notice where required.</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">6.2 App Store Billing and Third-Party Processors</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Purchases may be processed by Apple App Store, Google Play, or authorized payment providers.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">By making a purchase, you agree that:</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>You will pay all charges shown at checkout.</li>
                <li>You are bound by the applicable app store and payment processor terms.</li>
                <li>Billing, cancellation, and refund mechanics may be controlled by the provider through which you purchased.</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">6.3 Refunds</h3>
              <p className="text-text-secondary leading-relaxed">
                Unless required by law, purchases are final. Where your transaction is handled by Apple or Google,
                refund requests may need to be made through the relevant store process. For support, contact{' '}
                <a href="mailto:hello_wishwing@fidcent.com" className="text-primary-purple hover:underline">hello_wishwing@fidcent.com</a>.
              </p>
            </div>

            {/* 7. User content */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">7. User Content and License</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may submit content such as profile images, wishlist text, occasion notes, and related materials (User Content).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>You retain ownership of User Content you lawfully own.</li>
                <li>You grant WishWing a non-exclusive, worldwide, royalty-free license to host, store, reproduce, adapt, display, and distribute User Content only as needed to operate, secure, improve, and provide the Service.</li>
                <li>You represent that you have the rights needed to submit that User Content and that it does not violate law or third-party rights.</li>
              </ul>
            </div>

            {/* 8. Acceptable use */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">8. Acceptable Use and Prohibited Conduct</h2>
              <p className="text-text-secondary leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>Use the Service unlawfully or for fraud.</li>
                <li>Impersonate any person or entity.</li>
                <li>Upload malware or attempt to bypass security controls.</li>
                <li>Interfere with system integrity, availability, or performance.</li>
                <li>Scrape, harvest, or exfiltrate data without authorization.</li>
                <li>Infringe intellectual property or privacy rights.</li>
                <li>Use the Service to harass, abuse, exploit, or harm others.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                We may investigate violations and take appropriate action, including suspension, termination, and legal reporting.
              </p>
            </div>

            {/* 9. Intellectual property */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">9. Intellectual Property</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Except for User Content and third-party materials, the Service and all related software, branding,
                interfaces, and content are owned by WishWing or its licensors and protected by applicable intellectual property laws.
              </p>
              <p className="text-text-secondary leading-relaxed">
                No rights are granted except as expressly stated in these Terms.
              </p>
            </div>

            {/* 10. Third-party services */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">10. Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed">
                The Service may integrate or link to third-party products or websites. We are not responsible for
                third-party services, content, or practices. Your use of third-party services is governed by their
                terms and privacy policies.
              </p>
            </div>

            {/* 11. Account deletion and termination */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">11. Account Deletion and Termination</h2>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">11.1 Deleting Your Account</h3>
              <p className="text-text-secondary leading-relaxed mb-4">You can initiate account deletion in-app:</p>
              <div className="bg-gray-lightest px-6 py-4 rounded-xl mb-4">
                <p className="text-text-primary font-mono text-sm">More/Settings &gt; Account &gt; Delete Account</p>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Deleting your account will permanently disable access to your account and begin deletion or
                de-identification of personal data, subject to legal retention obligations.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">11.2 Our Right to Suspend or Terminate</h3>
              <p className="text-text-secondary leading-relaxed">
                We may suspend or terminate access for breach of these Terms, security risk, legal requirements,
                fraud, abuse, or prolonged inactivity as permitted by law.
              </p>
            </div>

            {/* 12. Service availability */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">12. Service Availability and Changes</h2>
              <p className="text-text-secondary leading-relaxed">
                We may modify, suspend, or discontinue parts of the Service, with notice where required by law.
                We do not guarantee uninterrupted availability, but we aim to maintain reliable service.
              </p>
            </div>

            {/* 13. Disclaimers */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">13. Disclaimers</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To the maximum extent permitted by law, the Service is provided on an as is and as available
                basis. We disclaim implied warranties including merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Nothing in these Terms excludes rights that cannot be excluded under applicable consumer law.
              </p>
            </div>

            {/* 14. Limitation of liability */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">14. Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To the maximum extent permitted by law, WishWing and its affiliates are not liable for indirect,
                incidental, special, consequential, exemplary, or punitive damages, or loss of profits, goodwill,
                or data arising from or related to your use of the Service.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Where liability cannot be excluded, our aggregate liability is limited to the amount you paid to
                WishWing for the specific Service giving rise to the claim in the 12 months before the event, or
                NGN 50,000, whichever is greater, unless a different limit is required by mandatory law.
              </p>
            </div>

            {/* 15. Indemnity */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">15. Indemnity</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You agree to indemnify and hold harmless WishWing, its affiliates, officers, employees, and
                agents from claims, losses, liabilities, and expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>Your misuse of the Service,</li>
                <li>Your violation of these Terms, or</li>
                <li>Your infringement of third-party rights.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                This indemnity does not apply to the extent the claim is caused by our negligence, willful
                misconduct, or breach of law.
              </p>
            </div>

            {/* 16. Governing law */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">16. Governing Law and Dispute Resolution</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                These Terms are governed by the laws of the Federal Republic of Nigeria.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Any dispute arising from or relating to these Terms or the Service will be subject to the
                exclusive jurisdiction of the courts of Lagos State, Nigeria, unless mandatory law in your
                jurisdiction requires otherwise.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Before filing formal proceedings, both parties agree to attempt good-faith resolution by
                contacting{' '}
                <a href="mailto:legal@fidcent.com" className="text-primary-purple hover:underline">legal@fidcent.com</a>.
              </p>
            </div>

            {/* 17. Changes to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">17. Changes to These Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update these Terms from time to time. If we make material changes, we will provide notice
                through the app, website, or other reasonable means. Your continued use of the Service after the
                effective date of updated Terms means you accept the updated Terms.
              </p>
            </div>

            {/* 18. Contact us */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">18. Contact Us</h2>
              <div className="bg-gray-lightest p-6 rounded-xl space-y-2">
                <p className="text-text-primary">
                  <strong>Legal:</strong>{' '}
                  <a href="mailto:legal@fidcent.com" className="text-primary-purple hover:underline">legal@fidcent.com</a>
                </p>
                <p className="text-text-primary">
                  <strong>Support:</strong>{' '}
                  <a href="mailto:hello_wishwing@fidcent.com" className="text-primary-purple hover:underline">hello_wishwing@fidcent.com</a>
                </p>
                <p className="text-text-primary">
                  <strong>Website:</strong>{' '}
                  <a href="https://wishwing.fidcent.com" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">
                    https://wishwing.fidcent.com
                  </a>
                </p>
                <p className="text-text-primary">
                  <strong>Company:</strong> WishWing, a product of Fidcent Technologies Limited
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
