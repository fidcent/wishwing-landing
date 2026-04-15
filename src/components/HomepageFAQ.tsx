'use client';

import { useState } from 'react';
import Link from 'next/link';
import { homepageFAQs } from '@/data/faq';
import { contactInfo } from '@/data/links';

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Heading + Contact */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary-200 mb-5">
              <span className="text-primary-600 font-medium text-sm">FAQ</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4">
              Questions? We&apos;ve got answers.
            </h2>
            <p className="text-neutral-500 text-base md:text-lg mb-8">
              Can&apos;t find what you&apos;re looking for? Reach out to our support team.
            </p>

            {/* Contact card */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/60">
              <p className="font-semibold text-neutral-900 mb-2">Contact support</p>
              <a
                href={`mailto:${contactInfo.supportEmail}`}
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                {contactInfo.supportEmail}
              </a>
              <div className="mt-4">
                <Link
                  href="/faq"
                  className="text-sm text-primary-600 font-medium hover:text-primary-700"
                >
                  View all FAQs &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {homepageFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral-200/60 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-neutral-900 text-sm pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-4">
                    <p className="text-neutral-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
