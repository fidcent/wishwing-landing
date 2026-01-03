import Link from 'next/link';

export const metadata = {
  title: 'Refund & Cancellation Policy - WishWing',
  description: 'WishWing refund and cancellation policy for WishCoins, physical gifts, airtime, data, and scheduled greetings.',
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-purple to-primary-pink py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Clear terms for refunds and cancellations
          </p>
          <p className="text-sm text-white/80 mt-4">
            Last Updated: November 27, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Quick Navigation */}
        <div className="mb-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <h2 className="font-bold text-lg text-text-primary mb-4">Quick Navigation</h2>
          <ul className="space-y-2 text-primary-purple">
            <li><a href="#wishcoins" className="hover:underline">• WishCoin Purchases</a></li>
            <li><a href="#physical-gifts" className="hover:underline">• Physical Gifts</a></li>
            <li><a href="#airtime-data" className="hover:underline">• Airtime/Data Top-Ups</a></li>
            <li><a href="#greetings" className="hover:underline">• Scheduled Greetings</a></li>
            <li><a href="#contact" className="hover:underline">• Contact Support</a></li>
          </ul>
        </div>

        {/* WishCoin Purchases */}
        <section id="wishcoins" className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">WishCoin Purchases</h2>
          
          <div className="space-y-4 text-text-secondary">
            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <p className="font-semibold text-text-primary mb-2">⚠️ Important: Non-Refundable</p>
              <p>All WishCoin purchases are final and non-refundable once the transaction is completed.</p>
            </div>

            <h3 className="text-xl font-bold text-text-primary mt-6">Cash-Out Option</h3>
            <p>While WishCoin purchases cannot be refunded, you have the option to cash out your WishCoins:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Minimum Amount:</strong> 1,000 WishCoins</li>
              <li><strong>Processing Fee:</strong> 5% of the total amount</li>
              <li><strong>Holding Period:</strong> 30 days from purchase date</li>
              <li><strong>Processing Time:</strong> 3-5 business days</li>
            </ul>

            <h3 className="text-xl font-bold text-text-primary mt-6">Exceptions</h3>
            <p>Refunds may be issued in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Technical errors resulting in duplicate charges</li>
              <li>Failed transactions where WishCoins were not credited to your account</li>
              <li>Unauthorized transactions (subject to investigation)</li>
            </ul>

            <p className="mt-4">
              To request a refund for technical issues, contact{' '}
              <a href="mailto:hello_wishwing@fidcent.com" className="text-primary-purple hover:underline">
                hello_wishwing@fidcent.com
              </a>{' '}
              within 48 hours of the transaction.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Physical Gifts */}
        <section id="physical-gifts" className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Physical Gifts</h2>
          
          <div className="space-y-4 text-text-secondary">
            <h3 className="text-xl font-bold text-text-primary">Cancellation Window</h3>
            <p>You may cancel physical gift orders under the following conditions:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Free Cancellation:</strong> Within 2 hours of order placement</li>
              <li><strong>After 2 Hours:</strong> Cancellation subject to vendor approval and may incur a 10% fee</li>
              <li><strong>After Dispatch:</strong> Orders cannot be cancelled once dispatched</li>
            </ul>

            <h3 className="text-xl font-bold text-text-primary mt-6">Damaged or Incorrect Items</h3>
            <p>If you receive damaged or incorrect items:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Report the issue within 24 hours of delivery</li>
              <li>Provide photographic evidence of the damage or error</li>
              <li>You will receive a full refund to your WishCoin wallet OR a replacement</li>
            </ul>

            <h3 className="text-xl font-bold text-text-primary mt-6">Delivery Failures</h3>
            <p>If a gift cannot be delivered due to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Incorrect Address:</strong> No refund (customer error)</li>
              <li><strong>Recipient Unavailable:</strong> Will attempt re-delivery; refund after 3 failed attempts</li>
              <li><strong>Vendor/Courier Error:</strong> Automatic full refund to WishCoin wallet</li>
            </ul>

            <div className="p-6 bg-green-50 border-l-4 border-green-400 rounded-r-lg mt-6">
              <p className="font-semibold text-text-primary mb-2">✅ Refund Processing</p>
              <p>All approved refunds for physical gifts are automatically credited to your WishCoin wallet within 24 hours.</p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Airtime/Data Top-Ups */}
        <section id="airtime-data" className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Airtime/Data Top-Ups</h2>
          
          <div className="space-y-4 text-text-secondary">
            <div className="p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
              <p className="font-semibold text-text-primary mb-2">❌ No Refunds After Delivery</p>
              <p>Airtime and data top-ups are non-refundable once successfully delivered to the recipient's phone number.</p>
            </div>

            <h3 className="text-xl font-bold text-text-primary mt-6">Failed Transactions</h3>
            <p>If a top-up transaction fails:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You will receive an automatic refund to your WishCoin wallet within 24 hours</li>
              <li>You will be notified via push notification and email</li>
              <li>No action required from your side</li>
            </ul>

            <h3 className="text-xl font-bold text-text-primary mt-6">Wrong Phone Number</h3>
            <p>If you entered the wrong phone number:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Unfortunately, we cannot reverse transactions once delivered</li>
              <li>Always double-check the phone number before confirming</li>
              <li>The app will show a confirmation screen before processing</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Scheduled Greetings */}
        <section id="greetings" className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Scheduled Greetings</h2>
          
          <div className="space-y-4 text-text-secondary">
            <h3 className="text-xl font-bold text-text-primary">Cancellation Policy</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Free Cancellation:</strong> Up to 1 hour before scheduled time</li>
              <li><strong>Within 1 Hour:</strong> Cannot be cancelled</li>
              <li><strong>Refund:</strong> Full WishCoin refund for cancelled greetings</li>
            </ul>

            <h3 className="text-xl font-bold text-text-primary mt-6">Failed Delivery</h3>
            <p>If a greeting fails to deliver due to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Technical Issues:</strong> Automatic full refund to WishCoin wallet</li>
              <li><strong>Invalid Contact Details:</strong> No refund (customer error)</li>
              <li><strong>Recipient Blocked Number:</strong> No refund (beyond our control)</li>
            </ul>

            <p className="mt-4">
              Failed delivery notifications are sent immediately. Refunds are processed automatically within 1 hour.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Refund Processing Times */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Refund Processing Times</h2>
          
          <div className="space-y-3 text-text-secondary">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-text-primary">WishCoin Wallet Refunds</p>
                <p className="text-sm">Instant to 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">💳</span>
              <div>
                <p className="font-semibold text-text-primary">Card/Bank Refunds (Cash-Outs)</p>
                <p className="text-sm">3-5 business days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold text-text-primary">Mobile Money Refunds</p>
                <p className="text-sm">1-3 business days</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Contact Support */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Contact Support</h2>
          
          <div className="space-y-4 text-text-secondary">
            <p>
              For refund requests, complaints, or questions about this policy, please contact us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-primary-purple/5 to-primary-pink/5 rounded-2xl border border-primary-purple/20">
                <p className="font-semibold text-text-primary mb-2">📧 Email Support</p>
                <a href="mailto:hello_wishwing@fidcent.com" className="text-primary-purple hover:underline">
                  hello_wishwing@fidcent.com
                </a>
                <p className="text-sm mt-1">Response within 24 hours</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary-purple/5 to-primary-pink/5 rounded-2xl border border-primary-purple/20">
                <p className="font-semibold text-text-primary mb-2">💬 In-App Chat</p>
                <p className="text-text-secondary">Available in the app</p>
                <p className="text-sm mt-1">Mon-Fri, 8am-8pm WAT</p>
              </div>
            </div>

            <p className="mt-6">
              <strong>What to Include in Your Request:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your account email address</li>
              <li>Transaction ID or order number</li>
              <li>Date and time of transaction</li>
              <li>Detailed description of the issue</li>
              <li>Screenshots or photos (if applicable)</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Policy Updates */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Policy Updates</h2>
          
          <div className="space-y-4 text-text-secondary">
            <p>
              We may update this Refund & Cancellation Policy from time to time. Changes will be posted on this page
              with an updated "Last Updated" date.
            </p>
            <p>
              Continued use of WishWing after policy updates constitutes acceptance of the new terms.
            </p>
          </div>
        </section>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-text-secondary mb-4">Related Policies</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="text-primary-purple hover:underline">
              Terms of Service
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/privacy" className="text-primary-purple hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-primary-purple hover:underline">
              Contact Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/" className="text-primary-purple hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
