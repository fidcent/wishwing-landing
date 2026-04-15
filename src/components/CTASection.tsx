'use client';

import Image from 'next/image';
import { appLinks } from '@/data/links';
import { images } from '@/data/images';

export default function CTASection() {
  return (
    <section
      id="download"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #DBD4FF 0%, #FFFFFF 60%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          {/* Left: Text + Download buttons */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">
              Ready to celebrate better?
            </h2>
            <p className="text-neutral-500 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Download WishWing and start making every occasion feel special.
            </p>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={appLinks.appStore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                App Store
              </a>
              <a
                href={appLinks.playStore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Center: Phone mockup */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-[200px] md:w-[240px] rounded-3xl overflow-hidden shadow-xl border border-neutral-200/50">
              <Image
                src={images.mockupSendGift}
                alt="WishWing app - send a gift"
                width={240}
                height={480}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: QR Code */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200/60 mb-4">
              <div className="w-36 h-36 bg-neutral-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-neutral-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <p className="text-xs text-neutral-400">QR Code</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-500">Scan to download</p>
          </div>
        </div>
      </div>
    </section>
  );
}
