'use client';

import { useEffect, useState } from 'react';

export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const launchDate = new Date('2026-01-07T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        setIsLaunched(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLaunched) {
    return (
      <div className="inline-block bg-white/15 backdrop-blur-sm border-2 border-white/30 px-6 py-3 rounded-full mb-8">
        <span className="text-white font-semibold text-base md:text-lg">
          🎉 Now Available on App Store & Google Play!
        </span>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="inline-block bg-white/15 backdrop-blur-sm border-2 border-white/30 px-6 py-4 rounded-2xl">
        <p className="text-white/90 text-sm md:text-base mb-1 font-medium">
          🚀 Launching on App Stores
        </p>
        <p className="text-white font-bold text-lg md:text-xl mb-3">
          January 7, 2026
        </p>
        <div className="flex gap-3 md:gap-6 justify-center">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Mins' },
            { value: timeLeft.seconds, label: 'Secs' },
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 mb-1">
                <span className="text-white font-bold text-xl md:text-3xl tabular-nums">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white/70 text-xs md:text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
