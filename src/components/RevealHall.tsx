import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../utils/images';
import { useStore } from '../store/useStore';
import gsap from 'gsap';

const RevealHall: React.FC = () => {
  const { isGateOpened } = useStore();
  const namesRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGateOpened) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Initial state
    gsap.set([frameRef.current, namesRef.current, textRef.current], {
      opacity: 0
    });

    // Animation sequence: frame reveal then names and text
    tl.fromTo(frameRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    )
    .fromTo(namesRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.7'
    )
    .to(frameRef.current, {
      filter: 'drop-shadow(0 0 30px rgba(255, 185, 15, 0.9)) drop-shadow(0 0 50px rgba(255, 20, 147, 0.6))',
      duration: 0.8,
      ease: 'sine.inOut'
    });

    // Subtle floating animation
    gsap.to(containerRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      tl.kill();
    };
  }, [isGateOpened]);

  return (
    <section id="reveal-hall" className="section-container panel">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.REVEAL_HALL} 
          alt="Reveal Hall" 
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/80 via-transparent to-hot-pink/80" />
        <div className="absolute inset-0 mehndi-gradient" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-mustard-yellow/30 rounded-tl-full animate-float" />
      <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-lime-green/30 rounded-tr-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-hot-pink/30 rounded-bl-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-mustard-yellow/30 rounded-br-full animate-float" style={{ animationDelay: '1.5s' }} />

      <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
        {/* Framed Names with Floral Corners */}
        <div ref={frameRef} className="relative flex items-center justify-center mb-12 p-6 md:p-8 rounded-3xl bg-black/30 backdrop-blur-sm border-2 border-transparent" style={{
          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.15))',
        }}>
          {/* Decorative floral corners (SVG) */}
          <svg className="absolute -top-6 -left-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
            <path d="M6 22 C12 6, 28 6, 34 22 C28 18, 12 18, 6 22 Z" fill="#FF6AA3" opacity="0.95" transform="translate(4,6) scale(1.1)" />
            <path d="M4 28 C14 18, 22 18, 32 28 C22 24, 14 24, 4 28 Z" fill="#FFD17A" opacity="0.9" transform="translate(6,4) scale(0.9)" />
          </svg>
            <svg className="absolute -top-6 -left-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
              <g transform="translate(32,32)">
                <g fill="#FF6AA3" opacity="0.95">
                  <g transform="rotate(0)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(72)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(144)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(216)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(288)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                </g>
                <circle r="5" fill="#FFD17A" />
              </g>
            </svg>
          <svg className="absolute -top-6 -right-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
            <path d="M58 22 C52 6, 36 6, 30 22 C36 18, 52 18, 58 22 Z" fill="#FF6AA3" opacity="0.95" transform="translate(-4,6) scale(1.1)" />
            <path d="M60 28 C50 18, 42 18, 32 28 C42 24, 50 24, 60 28 Z" fill="#BFF264" opacity="0.9" transform="translate(-6,4) scale(0.9)" />
          </svg>
            <svg className="absolute -top-6 -right-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
              <g transform="translate(32,32)">
                <g fill="#BFF264" opacity="0.95">
                  <g transform="rotate(0)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(72)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(144)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(216)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(288)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                </g>
                <circle r="5" fill="#FFD17A" />
              </g>
            </svg>
          <svg className="absolute -bottom-6 -left-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
            <path d="M6 42 C12 26, 28 26, 34 42 C28 38, 12 38, 6 42 Z" fill="#f5dd08" opacity="0.9" transform="translate(4,2) scale(1)" />
            <path d="M4 36 C14 46, 22 46, 32 36 C22 40, 14 40, 4 36 Z" fill="#e26092" opacity="0.9" transform="translate(6,6) scale(0.9)" />
          </svg>
            <svg className="absolute -bottom-6 -left-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
              <g transform="translate(32,32)">
                <g fill="#FF6AA3" opacity="0.95">
                  <g transform="rotate(0)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(72)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(144)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(216)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(288)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                </g>
                <circle r="5" fill="#BFF264" />
              </g>
            </svg>
          <svg className="absolute -bottom-6 -right-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
            <path d="M58 42 C52 26, 36 26, 30 42 C36 38, 52 38, 58 42 Z" fill="#84b335" opacity="0.9" transform="translate(-4,2) scale(1)" />
            <path d="M60 36 C50 46, 42 46, 32 36 C42 40, 50 40, 60 36 Z" fill="#f7af29" opacity="0.9" transform="translate(-6,6) scale(0.9)" />
          </svg>
            <svg className="absolute -bottom-6 -right-6 w-20 h-20 md:w-28 md:h-28" viewBox="0 0 64 64" fill="none" aria-hidden>
              <g transform="translate(32,32)">
                <g fill="#BFF264" opacity="0.95">
                  <g transform="rotate(0)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(72)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(144)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(216)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                  <g transform="rotate(288)"><path d="M0,-12 q6,6 0,12 q-6,-6 0,-12 Z"/></g>
                </g>
                <circle r="5" fill="#FFD17A" />
              </g>
            </svg>

          <div className="relative z-10 text-center">
            <h2 ref={namesRef} className="font-pinyon text-4xl md:text-6xl text-mustard-yellow text-magical-glow leading-none select-none">
              Aleeza & Ibrahim
            </h2>
            <div className="mt-3 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-hot-pink/50 to-transparent" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-mustard-yellow/50 to-transparent" />
            </div>
          </div>
        </div>
        
        {/* Main Subtitle */}
        <p ref={textRef} className="font-cinzel text-lg md:text-xl text-cream/90 tracking-[0.25em] leading-relaxed mb-8 max-w-3xl">
          AN ENCHANTING NIGHT OF MUSIC, LAUGHTER, AND A CELEBRATION OF LOVE THAT WILL ECHO THROUGH GENERATIONS.
        </p>

        {/* Event date / detail */}
      </div>
    </section>
  );
};

export default RevealHall;
