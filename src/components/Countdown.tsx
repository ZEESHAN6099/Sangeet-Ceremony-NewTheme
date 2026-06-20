import React, { useEffect, useMemo, useState } from 'react';
import { IMAGES } from '../utils/images';
import { Calendar, Sparkles } from 'lucide-react';

const Countdown: React.FC = () => {
  const targetDate = new Date('July 10, 2026 18:30:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownItems = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSaveDate = () => {
    const googleCalendarUrl =
      'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent('Aleeza & Ibrahim Sangeet Night') +
      '&dates=' + encodeURIComponent('20260710T183000/20260710T233000') +
      '&details=' + encodeURIComponent(
        'A celebration woven with love, family and friends, tradition and timeless memories.'
      ) +
      '&location=' +
      encodeURIComponent("Razberry's Wedding Venue, 834 NJ-12, Frenchtown, NJ 08825");

    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="countdown" className="section-container panel overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.COUNTDOWN_BG}
          alt="Countdown Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(60,40,10,0.8)] via-[rgba(80,50,15,0.4)] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,185,15,0.16),_transparent_34%)]" />
        <div className="absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-royal-gold/10 blur-[120px]" />
        <div className="absolute bottom-12 left-10 h-32 w-32 rounded-full bg-golden-amber/35 blur-[90px]" />
        <div className="absolute right-10 top-20 h-36 w-36 rounded-full bg-soft-yellow/10 blur-[100px]" />
      </div>

      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-soft-yellow/70 animate-sparkle"
          style={{
            left: `${8 + ((index * 9) % 84)}%`,
            top: `${10 + ((index * 11) % 74)}%`,
            animationDelay: `${index * 0.25}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <div className="mx-auto max-w-5xl rounded-[2rem] glassmorphic-magic px-6 py-12 shadow-[0_28px_70px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-x-16 top-0 h-32 bg-gradient-to-b from-royal-gold/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-[12px] rounded-[1.6rem] border border-royal-gold/10" />

          <div className="relative mb-12">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-golden-amber/60" />
              <Sparkles className="h-7 w-7 text-soft-yellow" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-soft-yellow/60" />
            </div>

            <p className="font-cinzel text-[11px] uppercase tracking-[0.45em] text-soft-yellow/70">
              Save The Evening
            </p>
            <h2 className="mt-5 font-cinzel text-2xl leading-tight text-mustard-yellow text-magical-glow sm:text-3xl md:text-5xl md:tracking-[0.2em]">
              WE LOOK FORWARD TO
              <br />
              CELEBRATING WITH YOU
            </h2>
            <p className="mx-auto mt-5 max-w-3xl font-playfair text-lg italic text-cream/80 sm:text-xl md:text-2xl">
              An unforgettable night draws closer with every passing moment.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {countdownItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[1.75rem] border border-mustard-yellow/20 bg-gradient-to-b from-golden-amber/30 to-black/20 p-5 shadow-[0_14px_35px_rgba(0,0,0,0.28),_0_0_20px_rgba(255,185,15,0.2)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35),_0_0_40px_rgba(255,185,15,0.35)] sm:p-6 md:p-8"
              >
                <div className="pointer-events-none absolute inset-[1px] rounded-[1.65rem] border border-mustard-yellow/10" />
                <div className="pointer-events-none absolute left-1/2 top-3 h-10 w-20 -translate-x-1/2 bg-mustard-yellow/10 blur-2xl" />
                <span className="relative mb-2 block font-playfair text-3xl text-mustard-yellow text-magical-glow sm:text-4xl md:text-6xl">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="relative font-cinzel text-[10px] uppercase tracking-[0.22em] text-soft-yellow/70 sm:text-[11px] md:text-xs md:tracking-[0.28em]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <button
              onClick={handleSaveDate}
              className="group relative mx-auto inline-flex max-w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-mustard-yellow/40 bg-gradient-to-r from-golden-amber via-mustard-yellow to-soft-yellow px-6 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.35),_0_0_30px_rgba(255,185,15,0.25)] transition-all duration-300 hover:border-golden-amber/70 hover:shadow-[0_18px_40px_rgba(0,0,0,0.4),_0_0_50px_rgba(255,185,15,0.4)] active:scale-[0.985] sm:gap-3 sm:px-10"
            >
              <span className="pointer-events-none absolute inset-[1px] rounded-full border border-cream/10" />
              <span className="absolute inset-y-0 left-[-20%] w-1/3 rotate-12 bg-white/15 blur-xl transition-all duration-700 group-hover:left-[100%]" />
              <Calendar className="relative h-5 w-5 text-cream" />
              <span className="relative text-center font-cinzel text-[11px] uppercase tracking-[0.22em] text-cream text-magical-glow sm:text-sm sm:tracking-[0.3em]">
                Open Google Calendar
              </span>
            </button>
          </div>

          <div className="pt-10">
            <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-golden-amber/40 to-transparent" />
            <div className="pt-6 font-pinyon text-4xl text-cream/60 md:text-5xl">
              Aleeza & Ibrahim
            </div>
            <p className="mt-2 px-4 font-cinzel text-[10px] uppercase tracking-[0.22em] text-soft-yellow/60 sm:text-[11px] sm:tracking-[0.3em]">
              July 10, 2026 • Razberry's Wedding Venue
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
