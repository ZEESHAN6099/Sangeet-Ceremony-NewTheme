import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../store/useStore';
import { IMAGES } from '../utils/images';
import gsap from 'gsap';

const GateScreen: React.FC = () => {
  const { initializeAudio, openGate, isGateOpened } = useStore();
  const [isUnlocking, setIsUnlocking] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lockBodyRef = useRef<HTMLDivElement>(null);
  const shackleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isGateOpened) return;

    const intro = gsap.timeline();

    intro
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 36, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(
        lockBodyRef.current,
        { scale: 0.88, opacity: 0, rotate: -4 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: 'back.out(1.6)' },
        '-=0.75'
      )
      .fromTo(
        shackleRef.current,
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

    return () => {
      intro.kill();
    };
  }, [isGateOpened]);

  const handleEnter = () => {
    if (isUnlocking) return;

    setIsUnlocking(true);
    initializeAudio();

    const tl = gsap.timeline({
      onComplete: () => {
        openGate();
      },
    });

    tl.to(lockBodyRef.current, {
      scale: 1.08,
      duration: 0.22,
      ease: 'power2.out',
    })
      .to(
        shackleRef.current,
        {
          y: -38,
          rotate: -18,
          transformOrigin: '20% 100%',
          duration: 0.78,
          ease: 'back.out(1.8)',
        },
        '-=0.05'
      )
      .to(
        contentRef.current,
        {
          opacity: 0,
          yPercent: -8,
          duration: 1.05,
          ease: 'power3.inOut',
        },
        '-=0.35'
      );
  };

  return (
    <div
      ref={screenRef}
      className={`fixed inset-0 z-[200] overflow-hidden transition-opacity duration-1000 ${isGateOpened ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.LOCK_ENTRY_BG}
          alt="Royal entrance"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,105,180,0.2),_rgba(255,140,0,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(60,40,10,0.6)] via-[rgba(80,50,15,0.5)] to-[rgba(40,25,5,0.7)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-mehndi-pink/15 via-vibrant-orange/10 to-transparent" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-hot-pink/20 via-mehndi-pink/25 via-vibrant-orange/20 to-transparent blur-[160px]" />
      </div>

      {/* Decorative borders */}
      <div className="pointer-events-none absolute inset-[18px] rounded-[2.2rem] border border-mehndi-pink/20 md:inset-[28px]" />
      <div className="pointer-events-none absolute left-6 top-6 h-24 w-24 border-l-2 border-t-2 border-hot-pink/30 rounded-tl-[2.5rem] md:left-10 md:top-10" />
      <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 border-r-2 border-t-2 border-vibrant-orange/30 rounded-tr-[2.5rem] md:right-10 md:top-10" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-24 w-24 border-b-2 border-l-2 border-warm-red/30 rounded-bl-[2.5rem] md:bottom-10 md:left-10" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-24 w-24 border-b-2 border-r-2 border-mehndi-pink/30 rounded-br-[2.5rem] md:bottom-10 md:right-10" />

      {/* Static sparkles (MAX PERFORMANCE - no animations) */}
      {[...Array(5)].map((_, index) => {
        const colors = ['#FF1493', '#FF69B4', '#FF8C00', '#FF6347', '#FFD700'];
        return (
          <div
            key={index}
            className="pointer-events-none absolute h-2 w-2 rounded-full shadow-[0_0_10px_rgba(255,105,180,0.5)]"
            style={{
              backgroundColor: colors[index % colors.length],
              left: `${10 + index * 20}%`,
              top: `${20 + index * 15}%`,
            }}
          />
        );
      })}

      <div ref={contentRef} className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border-2 border-mehndi-pink/30 bg-gradient-to-b from-[rgba(60,40,10,0.4)] via-[rgba(80,50,15,0.25)] to-[rgba(40,25,5,0.45)] px-8 py-14 text-center shadow-[0_35px_90px_rgba(255,105,180,0.35)] backdrop-blur-2xl md:px-16 md:py-18">
          {/* Inner decorative border */}
          <div className="pointer-events-none absolute inset-[12px] rounded-[2rem] border border-hot-pink/15" />
          
          {/* Corner decorations */}
          <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-mehndi-pink/40 rounded-tl-lg" />
          <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-vibrant-orange/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-warm-red/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-mehndi-pink/40 rounded-br-lg" />

          <p className="relative font-cinzel text-[11px] uppercase tracking-[0.5em] text-mehndi-pink/70 drop-shadow-[0_0_8px_rgba(255,105,180,0.4)]">
            A Royal Invitation Awaits
          </p>
          <h1 className="relative mt-6 font-pinyon text-7xl text-hot-pink drop-shadow-[0_0_20px_rgba(255,20,147,0.6)] md:text-9xl animate-glow-pulse">
            Aleeza & Ibrahim
          </h1>
          <p className="relative mx-auto mt-6 max-w-2xl font-cinzel text-sm uppercase tracking-[0.35em] text-vibrant-orange/80 md:text-[15px]">
            One sacred unlock begins an evening of music, love, family and timeless celebration
          </p>

          {/* Lock with static glow */}
          <div className="relative mx-auto mt-12 flex h-56 w-56 items-center justify-center md:h-64 md:w-64">
            <div
              className="absolute h-36 w-36 rounded-full bg-gradient-to-r from-vibrant-orange/30 via-hot-pink/35 via-mehndi-pink/30 to-transparent opacity-80 blur-[50px] md:h-44 md:w-44"
            />

            <div
              ref={shackleRef}
              className="absolute top-2 h-24 w-28 rounded-t-[999px] border-[12px] border-b-0 border-mehndi-pink/90 shadow-[0_0_30px_rgba(255,105,180,0.6)] md:h-28 md:w-32"
            />
            <div
              ref={lockBodyRef}
              className="relative mt-10 flex h-32 w-36 items-center justify-center rounded-[2.2rem] border-2 border-hot-pink/50 bg-gradient-to-b from-[rgba(80,50,15,0.85)] via-[rgba(100,50,20,0.8)] to-[rgba(60,25,10,0.9)] shadow-[0_25px_60px_rgba(0,0,0,0.5),_0_0_40px_rgba(255,105,180,0.3)] md:h-36 md:w-40"
            >
              <div className="absolute inset-[10px] rounded-[1.8rem] border border-vibrant-orange/20" />
              <div className="absolute top-5 h-px w-14 bg-gradient-to-r from-transparent via-hot-pink/60 to-transparent" />
              <div className="relative h-12 w-10 rounded-full border-2 border-mehndi-pink/80 shadow-[0_0_15px_rgba(255,105,180,0.5)]">
                <div className="absolute left-1/2 top-2.5 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-vibrant-orange to-hot-pink shadow-[0_0_12px_rgba(255,20,147,0.7)]" />
                <div className="absolute left-1/2 top-7 h-5 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-mehndi-pink to-hot-pink" />
              </div>
            </div>
          </div>

          {/* Magical button */}
          <div className="relative mt-10 flex justify-center">
            <button
              onClick={handleEnter}
              disabled={isUnlocking}
              className="group relative overflow-hidden rounded-full border-2 border-mehndi-pink/50 bg-gradient-to-r from-hot-pink via-mehndi-pink via-vibrant-orange to-warm-red px-12 py-5 shadow-[0_20px_50px_rgba(255,105,180,0.4),_0_0_30px_rgba(255,140,0,0.3)] transition-all duration-300 hover:border-hot-pink/80 hover:scale-105 hover:shadow-[0_25px_60px_rgba(255,20,147,0.6),_0_0_50px_rgba(255,140,0,0.5)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-90"
            >
              <span className="pointer-events-none absolute inset-[2px] rounded-full border border-cream/10" />
              <span className="absolute inset-y-0 left-[-30%] w-2/5 rotate-12 bg-gradient-to-r from-transparent via-cream/30 to-transparent blur-xl transition-all duration-800 group-hover:left-[110%]" />
              <span className="relative font-cinzel text-base uppercase tracking-[0.4em] text-cream drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] md:text-lg">
                {isUnlocking ? 'Unlocking The Celebration' : 'Unlock The Celebration'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateScreen;
