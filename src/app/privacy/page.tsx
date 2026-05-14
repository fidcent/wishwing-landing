import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Privacy Matters to Us — WishWing Privacy Policy',
  description: 'We handle your personal information with care. Read how WishWing collects, uses, and protects your data.',
  openGraph: {
    title: 'Your Privacy Matters — WishWing Privacy Policy',
    description: 'We handle your data with care. Read how WishWing collects, uses, and protects your personal information.',
    url: 'https://wishwing.fidcent.com/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fidcenttech',
    title: 'Your Privacy Matters — WishWing Privacy Policy',
    description: 'We handle your data with care. Read how WishWing collects, uses, and protects your personal information.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader badge="Legal" title="Privacy Policy" subtitle="Last updated: May 13, 2026" />

      {/* Content Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12">

            {/* Introduction */}
            <div>
              <p className="text-text-secondary leading-relaxed">
                WishWing, a product of Fidcent Technologies Limited, respects your privacy. This Privacy Policy
                explains what information we collect, why we collect it, how we use it, and the choices you have.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                If you do not agree with this Privacy Policy, please do not use the app.
              </p>
            </div>

            {/* 1. Who we are */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">1. Who We Are</h2>
              <div className="bg-gray-lightest p-6 rounded-xl space-y-1">
                <p className="text-text-primary"><strong>Data Controller:</strong> Fidcent Technologies Limited (WishWing)</p>
                <p className="text-text-primary">
                  <strong>Website:</strong>{' '}
                  <a href="https://wishwing.fidcent.com" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline">
                    https://wishwing.fidcent.com
                  </a>
                </p>
                <p className="text-text-primary">
                  <strong>Privacy Contact:</strong>{' '}
                  <a href="mailto:privacies@fidcent.com" className="text-primary-purple hover:underline">
                    privacies@fidcent.com
                  </a>
                </p>
              </div>
            </div>

            {/* 2. What we collect */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">2. What We Collect</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We collect information you provide directly, information collected with your permission, and limited technical information.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">A. Account and Profile Information</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Password credentials (stored securely and never displayed in plain text)</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">B. Contact Data (Permission-Based)</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>If you grant Contacts permission, we access selected contact details (such as name and phone number) to power contact-based features.</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">C. Transaction and Service Data</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Gift activity, wallet and payment-related records, referral usage, support interactions, and service history needed to provide WishWing features.</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">D. Device and Technical Data</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Device type, operating system, app version, push token, identifiers needed for security, reliability, fraud prevention, and notifications.</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">E. Optional Media Data</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Profile and wishlist images you choose to upload.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We do not use your camera unless explicitly stated in-app and authorized by you.
              </p>
            </div>

            {/* 3. Why we collect */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">3. Why We Collect This Data</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We collect and use data to operate core features, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li><strong>Contact-driven identity matching:</strong> phone number is used as the primary identifier to determine whether a contact is already on WishWing and to support mutual contact relationships.</li>
                <li><strong>Birthday-driven gifting:</strong> date of birth enables birthday reminders, occasion timelines, and birthday-based gift experiences.</li>
                <li><strong>Account security and verification:</strong> including login protection and fraud/risk controls.</li>
                <li>Transaction and wallet operations.</li>
                <li>User support, service improvement, and legal compliance.</li>
              </ul>
            </div>

            {/* 4. Legal bases */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">4. Legal Bases for Processing</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on your jurisdiction, we process data on one or more of these grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li><strong>Performance of a contract:</strong> to provide WishWing services you request.</li>
                <li><strong>Legitimate interests:</strong> to secure and improve our platform and prevent abuse.</li>
                <li><strong>Consent:</strong> for permission-based data such as Contacts and certain notifications.</li>
                <li><strong>Legal obligations:</strong> where required by applicable law.</li>
              </ul>
            </div>

            {/* 5. Contacts and social graph */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">5. Contacts and Social Graph Processing</h2>
              <p className="text-text-secondary leading-relaxed mb-4">When you enable Contacts:</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>We use contact data to help you find people, identify existing WishWing users, and support gifting/reminder flows.</li>
                <li>We process only what is reasonably necessary for these features.</li>
                <li>We do not message your contacts without your action.</li>
                <li>You can revoke Contacts permission at any time in your device settings, though some features may no longer work as intended.</li>
              </ul>
            </div>

            {/* 6. How we share */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">6. How We Share Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We do not sell your personal data.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">We may share data with:</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Service providers that host infrastructure, enable notifications, analytics, customer support, fraud prevention, and related operations.</li>
                <li>Payment and transaction partners where needed for wallet and gifting functions.</li>
                <li>Legal or regulatory authorities when required by law.</li>
                <li>Successors in a merger, acquisition, or asset transfer, subject to applicable law.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                All processors are expected to protect data and process it only for authorized purposes.
              </p>
            </div>

            {/* 7. Data retention */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">7. Data Retention</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We keep personal data only for as long as needed for the purposes described in this Policy, including legal, tax, accounting, fraud prevention, and dispute-resolution obligations.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4"><strong>Typical retention approach:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li><strong>Active account data:</strong> kept while your account is active.</li>
                <li><strong>Account profile data after deletion request:</strong> deleted or de-identified within 30 days, except where legal retention is required.</li>
                <li><strong>Security, audit, and access logs:</strong> retained for up to 12 months for security and incident response.</li>
                <li><strong>Customer support records:</strong> retained for up to 24 months after ticket closure.</li>
                <li><strong>Transaction and financial records:</strong> retained for up to 7 years after account closure where required by applicable law, audit, tax, anti-fraud, or anti-money-laundering obligations.</li>
                <li><strong>Backup snapshots:</strong> retained for up to 90 days before automatic overwrite/deletion.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Where a dispute, investigation, or legal hold applies, relevant records may be retained for longer until the matter is resolved.
              </p>
            </div>

            {/* 8. Account deletion */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">8. Account Deletion and Your Controls</h2>
              <p className="text-text-secondary leading-relaxed mb-4">You can request deletion directly in-app:</p>
              <div className="bg-gray-lightest px-6 py-4 rounded-xl mb-4">
                <p className="text-text-primary font-mono text-sm">More/Settings &gt; Account &gt; Delete Account</p>
              </div>
              <p className="text-text-secondary leading-relaxed mb-2"><strong>What this does:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>Initiates permanent account deletion workflow.</li>
                <li>Removes or de-identifies personal data, except where retention is required by law (for example, financial compliance, fraud prevention, or unresolved disputes).</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may also contact{' '}
                <a href="mailto:privacies@fidcent.com" className="text-primary-purple hover:underline">privacies@fidcent.com</a>{' '}
                for privacy requests, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>Access</li>
                <li>Correction</li>
                <li>Deletion</li>
                <li>Portability (where applicable)</li>
                <li>Withdrawal of consent (where processing relies on consent)</li>
                <li>Objection/restriction (where applicable)</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-6">
                We may verify identity before completing requests.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">Nigeria Data Protection (NDPA 2023)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                For users in Nigeria, we process personal data in line with the Nigeria Data Protection Act (NDPA) 2023 and applicable regulations. Subject to applicable law, you may request:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>Confirmation that we process your personal data and access to a copy.</li>
                <li>Correction of inaccurate or incomplete personal data.</li>
                <li>Deletion of personal data where retention is no longer necessary or lawful.</li>
                <li>Restriction of processing in specific circumstances.</li>
                <li>Objection to processing based on legitimate interests.</li>
                <li>Data portability where technically feasible and legally required.</li>
                <li>Withdrawal of consent for consent-based processing.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-4">
                You can exercise these rights by contacting{' '}
                <a href="mailto:privacies@fidcent.com" className="text-primary-purple hover:underline">privacies@fidcent.com</a>.
                We aim to acknowledge and respond within 30 days, subject to identity verification and lawful exceptions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                You also have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC).
              </p>
            </div>

            {/* 9. International transfers */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">9. International Transfers</h2>
              <p className="text-text-secondary leading-relaxed">
                Your data may be processed in countries outside your residence. Where required, we apply safeguards
                designed to protect personal data in cross-border transfers.
              </p>
            </div>

            {/* 10. Security */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">10. Security</h2>
              <p className="text-text-secondary leading-relaxed">
                We use administrative, technical, and organizational safeguards designed to protect personal data,
                including access controls, encryption in transit, and secure storage practices. No system is absolutely
                secure, but we continuously improve our safeguards.
              </p>
            </div>

            {/* 11. Children's privacy */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-text-secondary leading-relaxed mb-4"><strong>Minimum user age statement:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                <li>WishWing is intended for users aged 4 years and above.</li>
                <li>Children under 4 are not permitted to use WishWing.</li>
                <li>In Nigeria, if a user is under 18, use of the service should be with parent or legal guardian consent and supervision where required by applicable law.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                If you believe a child has provided personal data in violation of applicable law, contact{' '}
                <a href="mailto:privacies@fidcent.com" className="text-primary-purple hover:underline">privacies@fidcent.com</a>{' '}
                and we will take appropriate action.
              </p>
            </div>

            {/* 12. Third-party services */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">12. Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed">
                WishWing may link to third-party services. Their privacy practices are governed by their own policies, not this Policy.
              </p>
            </div>

            {/* 13. Changes */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">13. Changes to This Policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. We will post the updated version and revise the Last updated date.
              </p>
            </div>

            {/* 14. Contact us */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">14. Contact Us</h2>
              <div className="bg-gray-lightest p-6 rounded-xl space-y-2">
                <p className="text-text-primary">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:legal@fidcent.com" className="text-primary-purple hover:underline">legal@fidcent.com</a>
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
