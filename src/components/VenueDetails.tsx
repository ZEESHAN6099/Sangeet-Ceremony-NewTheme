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
      textShadow: '0 0 18px rgba(197, 160, 89, 0.75)',
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
          className="h-full w-full object-cover opacity-10 brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-maroon-dark" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4">
        <div
          ref={cardRef}
          className="relative w-full rounded-[28px] border border-gold/20 bg-gradient-to-br from-maroon/45 to-maroon-dark/65 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12"
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                sparkleRefs.current[i] = el;
              }}
              className="pointer-events-none absolute z-20 h-1 w-1 rounded-full bg-gold-light"
              style={{
                top: `${12 + ((i * 17) % 76)}%`,
                left: `${8 + ((i * 23) % 84)}%`,
              }}
            />
          ))}

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="z-10 space-y-8">
              <div className="text-left">
                <h2
                  ref={titleRef}
                  className="mb-2 font-cinzel text-4xl tracking-[0.15em] text-gold md:text-6xl"
                >
                  SANGEET
                  <br />
                  NIGHT
                </h2>
                <div className="h-px w-32 bg-gradient-to-r from-gold to-transparent opacity-50" />
              </div>

              <div ref={timeRef} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gold"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>

                <div>
                  <p className="font-playfair text-2xl text-gold-light">6:30 PM</p>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gold/40">
                    In the Evening
                  </p>
                </div>
              </div>

              <button
                ref={locationRef}
                type="button"
                onClick={openMaps}
                className="group block w-full rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-500 hover:border-gold/30 hover:bg-gold/5"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-cinzel text-lg text-gold-light transition-colors group-hover:text-gold">
                      RAZBERRY'S WEDDING VENUE
                    </h3>
                    <p className="font-playfair text-sm italic text-gold/60">Frenchtown, NJ</p>
                    <p className="mt-2 font-montserrat text-xs leading-relaxed text-gold/40">
                      834 NJ-12
                      <br />
                      Frenchtown, NJ 08825
                    </p>
                    <div className="mt-4 flex items-center gap-2 font-cinzel text-[10px] tracking-widest text-gold/30 transition-colors group-hover:text-gold">
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
                className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-black/20 px-5 py-2"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold/60">
                  Exclusive Couples Only Celebration
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            <div ref={archRef} className="relative group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-4 border-gold/20">
                <img
                  src={IMAGES.VENUE_BG}
                  alt="Razberry's Wedding Venue"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="font-pinyon text-4xl text-gold drop-shadow-lg">Razberry's</p>
                  <p className="font-cinzel text-[10px] tracking-[0.4em] text-gold/40">WEDDING VENUE</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-2 rounded-t-full border border-gold/10" />
            </div>
          </div>
        </div>

        <div ref={carRef} className="mt-8 w-full max-w-xl">
          <button
            type="button"
            onClick={openMaps}
            className="group relative mx-auto flex w-full max-w-[30rem] items-center justify-center gap-5 overflow-hidden rounded-full border border-gold/30 bg-gradient-to-r from-maroon/70 via-maroon-dark/90 to-maroon/70 px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-gold/60 hover:shadow-[0_14px_36px_rgba(109,71,20,0.35)]"
          >
            <div className="pointer-events-none absolute inset-[1px] rounded-full border border-gold/10" />
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-10 -bottom-3 h-[2px] overflow-hidden">
              <div className="flex h-full w-[200%] gap-4 animate-[road-move_0.8s_linear_infinite]">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="h-full w-4 bg-gold/40" />
                ))}
              </div>
            </div>

            <div className="relative transition-transform duration-500 group-hover:translate-x-3">
              <svg width="50" height="30" viewBox="0 0 60 40" aria-hidden="true">
                <path d="M5 25 L10 15 L18 12 L42 12 L50 15 L55 25 L55 30 L5 30 Z" fill="#C5A059" />
                <circle cx="15" cy="30" r="5" fill="#1A0F0F" stroke="#C5A059" />
                <circle cx="45" cy="30" r="5" fill="#1A0F0F" stroke="#C5A059" />
                <rect x="52" y="22" width="4" height="3" fill="#FFBF00" className="animate-pulse" />
              </svg>
            </div>

            <div className="text-center">
              <span className="font-cinzel text-sm tracking-[0.35em] text-gold transition-colors group-hover:text-gold-light">
                LOCATE ON MAP
              </span>
              <div className="mt-1 h-px w-full scale-x-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
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
