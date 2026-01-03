'use client';

import Icon from './Icon';

const problems = [
  {
    icon: 'cash',
    title: 'Cash Feels Impersonal',
    description: 'Bank transfers lack emotional connection and feel transactional rather than thoughtful',
  },
  {
    icon: 'cube',
    title: 'Physical Gifting is Complex',
    description: 'Logistics of buying, wrapping, and delivering gifts—especially across distances—is challenging',
  },
  {
    icon: 'people',
    title: 'Group Gifting is Hard',
    description: 'Coordinating contributions from multiple friends for bigger gifts is frustrating and manual',
  },
  {
    icon: 'calendar',
    title: 'Important Dates Get Missed',
    description: 'Busy lives mean birthdays, anniversaries, and celebrations often slip through the cracks',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-600 font-medium text-sm">The Problem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
            Gift-Giving in Nigeria is Broken
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
            Gift-giving is culturally important and happens frequently—but current options are fragmented and feel more transactional than emotional.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200/50 hover:shadow-strong transition-all duration-300 flex gap-5"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name={problem.icon} size={28} className="text-red-500" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Transition */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 rounded-2xl shadow-strong">
            <p className="text-white font-semibold text-lg">
              WishWing transforms gifting from transactional to emotional ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
