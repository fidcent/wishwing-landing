'use client';

import { useState } from 'react';
import { allFAQs, faqCategories } from '@/data/faq';
import { contactInfo } from '@/data/links';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = faqCategories;

  const filteredFAQs = activeCategory === 'All'
    ? allFAQs
    : allFAQs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
            Everything you need to know about WishWing. Can&apos;t find an answer?{' '}
            <a href={`mailto:${contactInfo.supportEmail}`} className="text-primary-600 hover:underline">
              {contactInfo.supportEmail}
            </a>
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {filteredFAQs.map((faq, index) => (
            <div
              key={`${faq.category}-${index}`}
              className="bg-neutral-50 rounded-xl border border-neutral-200/60 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <div className="pr-4">
                  <span className="text-xs text-primary-600 font-medium">{faq.category}</span>
                  <h3 className="font-medium text-neutral-900 text-sm mt-0.5">{faq.question}</h3>
                </div>
                <svg
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-5 pb-4">
                  <p className="text-neutral-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
