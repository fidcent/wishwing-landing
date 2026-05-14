import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { socialLinks, contactInfo } from '@/data/links';

export const metadata: Metadata = {
  title: 'About WishWing - Nigeria\'s Digital Gifting Platform | Fidcent Technologies',
  description: 'WishWing transforms cash-based gift-giving into meaningful celebrations. Built by Fidcent Technologies, we\'re creating Nigeria\'s default digital gifting infrastructure.',
  openGraph: {
    title: 'About WishWing - Nigeria\'s Social Gifting Platform',
    description: 'Learn about WishWing\'s mission to own the occasion layer in Nigeria—becoming the default tool for birthdays, weddings, holidays, and every celebration.',
    url: 'https://wishwing.fidcent.com/about',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* <PageHeader
        badge="About WishWing"
        title="Nigeria's gifting layer"
        subtitle="We're turning 'happy birthday + transfer' into something that actually feels like a celebration."
      /> */}

      {/* Mission */}
      <section
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #DBD4FF 0%, #FFFFFF 60%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200/60 bg-white/80 shadow-sm mb-8 text-sm text-neutral-600 font-medium">
            Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-neutral-900 leading-tight mb-8">
            Own the{' '}
            <span className="text-gradient">occasion layer</span>{' '}
            in Nigeria.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Gift-giving is frequent and culturally important in Nigeria—but the current options are broken. Cash transfers feel impersonal. Physical gifting is logistically hard. Group gifting is nearly impossible to coordinate.
          </p>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            WishWing is a social gifting platform powered by WishCoins. We sit between payments, social connection, and commerce—focused entirely on occasions and the people who make them matter.
          </p>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200/60 bg-neutral-50 shadow-sm mb-6 text-sm text-neutral-600 font-medium">
              The Problem
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">
              Gifting in Nigeria is broken
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              We&apos;re not here to fix a niche problem. We&apos;re building the infrastructure that millions of Nigerians need for every celebration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'Cash feels impersonal',
                desc: "A bank transfer doesn't say \"I care.\" It says \"I had to.\"",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: 'Group gifting is chaos',
                desc: 'Collecting contributions from 10 people across WhatsApp groups is exhausting.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H18v-.008zm0 2.25h.008v.008H18V15z" />
                  </svg>
                ),
                title: 'Occasions get missed',
                desc: 'No centralised reminder system means important moments slip by unnoticed.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
                title: 'Physical gifting is hard',
                desc: 'Logistics, delivery, and returns make physical gifts more stress than joy.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 bg-neutral-50 rounded-3xl border border-neutral-200/50 hover:border-primary-300 hover:shadow-strong transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 text-base mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200/60 bg-white shadow-sm mb-6 text-sm text-neutral-600 font-medium">
              What we believe
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">
              Our values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: 'Emotion over transaction',
                desc: 'We believe gifting should feel personal and meaningful—not like another bank transfer. Every feature is designed to carry feeling, not just funds.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: 'Social by design',
                desc: 'Celebrations are better together. Every feature is built to encourage sharing, contributing, and connecting—not just sending money.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: 'Occasion-first',
                desc: 'We build everything around celebrations—birthdays, weddings, holidays, and corporate events. The occasion is the product.',
              },
            ].map((val) => (
              <div key={val.title} className="bg-white p-8 rounded-3xl border border-neutral-200/50 hover:border-primary-300 hover:shadow-strong transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 text-lg mb-3">{val.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Fidcent */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200/60 bg-neutral-50 shadow-sm mb-6 text-sm text-neutral-600 font-medium">
                Who built this
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-6 leading-tight">
                Built by{' '}
                <a
                  href="https://fidcent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient hover:opacity-80 transition-opacity"
                >
                  Fidcent Technologies
                </a>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Fidcent Technologies Limited is a Nigerian software development company building innovative digital solutions for African markets. WishWing is our flagship consumer product.
              </p>
              <a
                href="https://fidcent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors"
              >
                Visit fidcent.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2024', icon: '📅' },
                { label: 'Headquarters', value: 'Lagos, Nigeria', icon: '🏙️' },
                { label: 'Focus', value: 'African Markets', icon: '🌍' },
                { label: 'Flagship Product', value: 'WishWing', icon: '🎁' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-neutral-50 rounded-3xl border border-neutral-200/50">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="font-semibold text-neutral-900 text-sm">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #DBD4FF 0%, #FFFFFF 60%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200/60 bg-white/80 shadow-sm mb-6 text-sm text-neutral-600 font-medium">
              Get in touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">
              We&apos;d love to hear from you
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Questions, partnerships, press enquiries—reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {[
              {
                label: 'Support',
                value: contactInfo.supportEmail,
                href: `mailto:${contactInfo.supportEmail}`,
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
              },
              {
                label: 'Business',
                value: contactInfo.businessEmail,
                href: `mailto:${contactInfo.businessEmail}`,
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                label: 'Response time',
                value: 'Within 24 hours',
                href: null as string | null,
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-white rounded-3xl border border-neutral-200/50 hover:border-primary-300 hover:shadow-strong transition-all duration-300">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium text-primary-600 hover:underline break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-neutral-900">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Social links */}
          {/* <div className="text-center">
            <p className="text-sm text-neutral-500 mb-6 uppercase tracking-widest font-medium">Follow us</p>
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white rounded-full border border-neutral-200/80 text-sm font-medium text-neutral-700 hover:border-primary-400 hover:text-primary-600 hover:shadow-strong transition-all duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
