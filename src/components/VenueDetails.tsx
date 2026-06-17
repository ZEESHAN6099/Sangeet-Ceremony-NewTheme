import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../utils/images';

gsap.registerPlugin(ScrollTrigger);

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Razberry\'s+Wedding+Venue+834+NJ-12+Frenchtown+NJ+08825';

const VenueDetails: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const sparkleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
      },
    });

    timeline
      .fromTo(
        cardRef.current,
        { opacity: 0, y: 110, scale: 0.92, rotationX: -8 },
        { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.25, ease: 'power3.out' }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, x: -36, letterSpacing: '0.32em' },
        { opacity: 1, x: 0, letterSpacing: '0.15em', duration: 0.95, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        timeRef.current,
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        locationRef.current,
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.45'
      )
      .fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        archRef.current,
        { opacity: 0, x: 80, rotation: 5, scale: 0.96 },
        { opacity: 1, x: 0, rotation: 0, scale: 1, duration: 1.1, ease: 'power3.out' },
        '-=1'
      )
      .fromTo(
        carRef.current,
        { opacity: 0, x: -180, y: 60 },
        { opacity: 1, x: 0, y: 0, duration: 1.25, ease: 'power3.out' },
        '-=0.3'
      );

    sparkleRefs.current.forEach((sparkle, index) => {
      if (!sparkle) return;

      gsap.to(sparkle, {
        scale: 1.8,
        opacity: 0,
        duration: 2.1 + (index % 4) * 0.25,
        delay: index * 0.18,
        repeat: -1,
        ease: 'sine.inOut',
      });
    });

gsap.to(titleRef.current, {
      textShadow: '0 0 18px rgba(120, 81, 169, 0.75)',
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(archRef.current, {
      y: -10,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(carRef.current, {
      y: -6,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      timeline.kill();
    };
  }, []);

  const openMaps = () => {
    window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} id="venue" className="section-container panel overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.VENUE_BG}
          alt="Venue background"
          className="h-full w-full object-cover opacity-30 brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/70 via-hot-pink/40 to-lime-green/35 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl md:max-w-5xl flex-col items-center px-4">
        <div
          ref={cardRef}
          className="relative w-full rounded-[28px] border border-mehndi-orange/50 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:p-12"
          style={{
            background: 'linear-gradient(180deg, rgba(10,8,15,0.65), rgba(20,10,18,0.65))',
            boxShadow: '0 30px 90px rgba(12,8,20,0.6), inset 0 0 60px rgba(255,185,15,0.06)',
            borderColor: 'rgba(255,140,0,0.18)'
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                sparkleRefs.current[i] = el;
              }}
              className="pointer-events-none absolute z-20 h-1 w-1 rounded-full"
              style={{
                top: `${12 + ((i * 17) % 76)}%`,
                left: `${8 + ((i * 23) % 84)}%`,
                backgroundColor: i % 4 === 0 ? '#8A2BE2' : i % 4 === 1 ? '#87CEEB' : i % 4 === 2 ? '#FF1493' : '#1E90FF',
              }}
            />
          ))}

          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="z-10 space-y-8">
              <div className="text-left">
                <h2
                  ref={titleRef}
                  className="mb-2 font-cinzel text-3xl md:text-6xl tracking-normal md:tracking-[0.12em]"
                  style={{
                    color: '#FFD580',
                    textShadow: '0 6px 26px rgba(255,185,15,0.95), 0 0 40px rgba(255,20,147,0.25)',
                    lineHeight: 1
                  }}
                >
                  <span className="inline md:block">Mayoun Celebration</span>{' '}
                  <span className="inline md:block" style={{ color: '#FFB84D' }}>NIGHT</span>
                </h2>
                <div className="h-px w-32 bg-gradient-to-r from-mehndi-orange to-transparent opacity-50" />
              </div>

              <div ref={timeRef} className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-lime-green/40 bg-gradient-to-br from-lime-green/8 to-transparent">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-lime-green"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>

                  <div>
                  <p className="font-playfair text-xl md:text-3xl" style={{ color: '#FFE6B3', textShadow: '0 6px 18px rgba(0,0,0,0.6)' }}>6:30 PM</p>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-lime-green/70">
                    In the Evening
                  </p>
                </div>
              </div>

              <button
                ref={locationRef}
                type="button"
                onClick={openMaps}
                className="group block w-full rounded-xl border border-royal-gold/20 p-4 md:p-6 text-left transition-all duration-400 hover:border-lime-green/40 hover:scale-[1.01]"
                style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))', boxShadow: '0 10px 30px rgba(0,0,0,0.45), 0 0 30px rgba(255,185,15,0.04)'}}
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-green/10 text-lime-green shadow-[0_0_15px_rgba(190,242,100,0.3)]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 90 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-cinzel text-lg md:text-xl text-royal-gold transition-colors" style={{ textShadow: '0 6px 22px rgba(255,185,15,0.85)' }}>
                      RAZBERRY'S WEDDING VENUE
                    </h3>
                    <p className="font-playfair text-sm italic text-cream/95">Frenchtown, NJ</p>
                    <p className="mt-2 font-montserrat text-sm leading-relaxed text-cream/90">
                      834 NJ-12
                      <br />
                      Frenchtown, NJ 08825
                    </p>
                    <div className="mt-4 flex items-center gap-2 font-cinzel text-[11px] tracking-widest text-mustard-yellow/90">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                      </svg>
                      CLICK FOR DIRECTIONS
                    </div>
                  </div>
                </div>
              </button>

              <div
                ref={badgeRef}
                className="inline-flex items-center gap-3 rounded-full px-5 py-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(120, 81, 169, 0.45), rgba(75, 0, 130, 0.35))',
                  border: '1px solid rgba(255,185,15,0.28)',
                  boxShadow: '0 10px 40px rgba(255,185,15,0.08), 0 0 50px rgba(75,0,130,0.25)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-royal-purple">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-lavender text-magical-glow">
                  A MAGICAL GATHERING OF FAMILY AND FRIENDS
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-royal-purple">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            <div ref={archRef} className="relative group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-4 border-mehndi-orange/30 transition-all duration-700 group-hover:border-lime-green/40 group-hover:shadow-[0_0_40px_rgba(255,140,0,0.4)]">
                <img
                  src={IMAGES.VENUE_BG}
                  alt="Razberry's Wedding Venue"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-purple via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="font-pinyon text-4xl text-mehndi-orange text-magical-glow drop-shadow-lg">Razberry's</p>
                  <p className="font-cinzel text-[10px] tracking-[0.4em] text-lime-green/70">WEDDING VENUE</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-2 rounded-t-full border border-mehndi-orange/20" />
            </div>
          </div>
        </div>

        <div ref={carRef} className="mt-6 w-full max-w-xl">
          <button
            type="button"
            onClick={openMaps}
            className="group relative mx-auto flex w-full max-w-[30rem] items-center justify-center gap-5 overflow-hidden rounded-full border border-mehndi-orange/40 bg-gradient-to-r from-hot-pink/70 via-mehndi-orange/80 to-lime-green/70 px-6 py-3 md:px-8 md:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-hot-pink/70 hover:shadow-[0_14px_36px_rgba(0,0,0,0.35),_0_0_40px_rgba(255,140,0,0.35)] hover:scale-[1.03]"
          >
            <div className="pointer-events-none absolute inset-[1px] rounded-full border border-cream/10" />
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-lime-green/30 to-transparent" />
            <div className="pointer-events-none absolute inset-x-10 -bottom-3 h-[2px] overflow-hidden">
              <div className="flex h-full w-[200%] gap-4 animate-[road-move_0.8s_linear_infinite]">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="h-full w-4 bg-lime-green/50" />
                ))}
              </div>
            </div>

            <div className="relative transition-transform duration-500 group-hover:translate-x-3">
              <svg width="50" height="30" viewBox="0 0 60 40" aria-hidden="true">
                <path d="M5 25 L10 15 L18 12 L42 12 L50 15 L55 25 L55 30 L5 30 Z" fill="#FF8C00" />
                <circle cx="15" cy="30" r="5" fill="#1A0F0F" stroke="#FF8C00" />
                <circle cx="45" cy="30" r="5" fill="#1A0F0F" stroke="#FF8C00" />
                <rect x="52" y="22" width="4" height="3" fill="#BEF264" className="animate-pulse" />
              </svg>
            </div>

            <div className="text-center">
              <span className="font-cinzel text-sm tracking-[0.35em] text-cream transition-colors group-hover:text-lime-green text-magical-glow">
                LOCATE ON MAP
              </span>
              <div className="mt-1 h-px w-full scale-x-0 bg-gradient-to-r from-transparent via-hot-pink/40 via-mehndi-orange/40 to-lime-green/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes road-move {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-32px);
          }
        }
      `}</style>
    </section>
  );
};

export default VenueDetails;
