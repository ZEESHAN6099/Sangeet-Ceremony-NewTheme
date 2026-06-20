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
  const dateRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const dressRef = useRef<HTMLDivElement>(null);
  const sparkleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flowerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isGateOpened) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Initial state
    gsap.set([frameRef.current, namesRef.current, textRef.current, dateRef.current, timeRef.current, dressRef.current], {
      opacity: 0
    });

    // Animation sequence - SIMPLIFIED
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
    .fromTo(dateRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(timeRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(dressRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, [isGateOpened]);

  // Flower SVG component
  const Flower = ({ className, color, size = 40, rotation = 0 }: { className?: string, color: string, size?: number, rotation?: number }) => (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Petals */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="16"
          rx="8"
          ry="14"
          fill={color}
          opacity={0.9}
          transform={`rotate(${angle} 32 32)`}
        />
      ))}
      {/* Center */}
      <circle cx="32" cy="32" r="7" fill="#FFD17A" />
      <circle cx="32" cy="32" r="4" fill="#FFB74D" />
    </svg>
  );

  const SmallFlower = ({ className, color, size = 24 }: { className?: string, color: string, size?: number }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx="16"
          cy="8"
          rx="4"
          ry="7"
          fill={color}
          opacity={0.85}
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
      <circle cx="16" cy="16" r="4" fill="#FFD17A" />
    </svg>
  );

  const Leaf = ({ className, color, rotation = 0 }: { className?: string, color: string, rotation?: number }) => (
    <svg className={className} width="30" height="20" viewBox="0 0 30 20" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
      <path
        d="M15 0 C20 5, 25 10, 30 10 C25 10, 20 15, 15 20 C10 15, 5 10, 0 10 C5 10, 10 5, 15 0 Z"
        fill={color}
        opacity={0.7}
      />
    </svg>
  );

  return (
    <section id="reveal-hall" className="section-container panel">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.REVEAL_HALL} 
          alt="Reveal Hall" 
          className="w-full h-full object-cover opacity-30 brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/70 via-hot-pink/40 to-lime-green/35 mix-blend-multiply" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-mustard-yellow/30 rounded-tl-full animate-float" />
      <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-lime-green/30 rounded-tr-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-hot-pink/30 rounded-bl-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-mustard-yellow/30 rounded-br-full animate-float" style={{ animationDelay: '1.5s' }} />

      <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
        {/* Main Framed Card with Floral Border */}
        <div className="relative">
          {/* Left Border Flowers */}
          <div className="absolute -left-8 top-0 bottom-0 flex flex-col items-center justify-around py-4">
            <div ref={(el) => flowerRefs.current[0] = el}><Flower color="#FF6AA3" size={45} rotation={-15} /></div>
            <div ref={(el) => flowerRefs.current[1] = el}><SmallFlower color="#BFF264" size={28} /></div>
            <div ref={(el) => flowerRefs.current[2] = el}><Flower color="#FFD17A" size={40} rotation={10} /></div>
            <div ref={(el) => flowerRefs.current[3] = el}><SmallFlower color="#FF6AA3" size={24} /></div>
            <div ref={(el) => flowerRefs.current[4] = el}><Flower color="#BFF264" size={42} rotation={-10} /></div>
          </div>

          {/* Right Border Flowers */}
          <div className="absolute -right-8 top-0 bottom-0 flex flex-col items-center justify-around py-4">
            <div ref={(el) => flowerRefs.current[5] = el}><Flower color="#BFF264" size={42} rotation={15} /></div>
            <div ref={(el) => flowerRefs.current[6] = el}><SmallFlower color="#FFD17A" size={26} /></div>
            <div ref={(el) => flowerRefs.current[7] = el}><Flower color="#FF6AA3" size={44} rotation={-8} /></div>
            <div ref={(el) => flowerRefs.current[8] = el}><SmallFlower color="#BFF264" size={26} /></div>
            <div ref={(el) => flowerRefs.current[9] = el}><Flower color="#FFD17A" size={40} rotation={12} /></div>
          </div>

          {/* Top Border Flowers */}
          <div className="absolute -top-8 left-0 right-0 flex items-center justify-around px-4">
            <div ref={(el) => flowerRefs.current[10] = el}><Flower color="#FFD17A" size={38} rotation={-20} /></div>
            <div ref={(el) => flowerRefs.current[11] = el}><SmallFlower color="#FF6AA3" size={24} /></div>
            <div ref={(el) => flowerRefs.current[12] = el}><Flower color="#BFF264" size={46} /></div>
            <div ref={(el) => flowerRefs.current[13] = el}><SmallFlower color="#FFD17A" size={26} /></div>
            <div ref={(el) => flowerRefs.current[14] = el}><Flower color="#FF6AA3" size={40} rotation={20} /></div>
          </div>

          {/* Bottom Border Flowers */}
          <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-around px-4">
            <div ref={(el) => flowerRefs.current[15] = el}><Flower color="#BFF264" size={40} rotation={15} /></div>
            <div ref={(el) => flowerRefs.current[16] = el}><SmallFlower color="#FF6AA3" size={26} /></div>
            <div ref={(el) => flowerRefs.current[17] = el}><Flower color="#FFD17A" size={44} /></div>
            <div ref={(el) => flowerRefs.current[18] = el}><SmallFlower color="#BFF264" size={24} /></div>
            <div ref={(el) => flowerRefs.current[19] = el}><Flower color="#FF6AA3" size={38} rotation={-15} /></div>
          </div>

          {/* Corner Decorations with Leaves */}
          <div className="absolute -top-12 -left-12">
            <div className="relative">
              <div ref={(el) => flowerRefs.current[20] = el}><Flower color="#FF6AA3" size={55} rotation={-30} /></div>
              <div className="absolute top-8 left-8"><Leaf color="#84b335" rotation={45} /></div>
              <div className="absolute top-4 left-12"><Leaf color="#BFF264" rotation={70} /></div>
            </div>
          </div>

          <div className="absolute -top-12 -right-12">
            <div className="relative">
              <div ref={(el) => flowerRefs.current[21] = el}><Flower color="#BFF264" size={55} rotation={30} /></div>
              <div className="absolute top-8 right-8"><Leaf color="#84b335" rotation={-45} /></div>
              <div className="absolute top-4 right-12"><Leaf color="#BFF264" rotation={-70} /></div>
            </div>
          </div>

          <div className="absolute -bottom-12 -left-12">
            <div className="relative">
              <div ref={(el) => flowerRefs.current[22] = el}><Flower color="#FFD17A" size={52} rotation={30} /></div>
              <div className="absolute bottom-8 left-8"><Leaf color="#84b335" rotation={-45} /></div>
              <div className="absolute bottom-4 left-12"><Leaf color="#BFF264" rotation={-20} /></div>
            </div>
          </div>

          <div className="absolute -bottom-12 -right-12">
            <div className="relative">
              <div ref={(el) => flowerRefs.current[23] = el}><Flower color="#FF6AA3" size={52} rotation={-30} /></div>
              <div className="absolute bottom-8 right-8"><Leaf color="#84b335" rotation={45} /></div>
              <div className="absolute bottom-4 right-12"><Leaf color="#BFF264" rotation={20} /></div>
            </div>
          </div>

          {/* Main Card */}
          <div 
            ref={frameRef} 
            className="relative w-full rounded-[28px] border border-mehndi-orange/50 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:p-12"
            style={{
              background: 'linear-gradient(180deg, rgba(10,8,15,0.65), rgba(20,10,18,0.65))',
              boxShadow: '0 30px 90px rgba(12,8,20,0.6), inset 0 0 60px rgba(255,185,15,0.06)',
              borderColor: 'rgba(255,140,0,0.18)'
            }}
          >
            {/* Sparkles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  sparkleRefs.current[i] = el;
                }}
                className="pointer-events-none absolute z-20 h-1 w-1 rounded-full"
                style={{
                  top: `${8 + ((i * 14) % 84)}%`,
                  left: `${5 + ((i * 19) % 90)}%`,
                  backgroundColor: i % 4 === 0 ? '#8A2BE2' : i % 4 === 1 ? '#87CEEB' : i % 4 === 2 ? '#FF1493' : '#1E90FF',
                }}
              />
            ))}

            {/* Framed Names with Floral Corners */}
            <div className="relative flex items-center justify-center mb-10 p-6 md:p-8">
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
                <h2 ref={namesRef} className="font-pinyon text-5xl md:text-7xl text-mustard-yellow leading-none select-none">
                  Aleeza & Ibrahim
                </h2>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-hot-pink/50 to-transparent" />
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-mustard-yellow/50 to-transparent" />
                </div>
              </div>
            </div>
            
            {/* Main Subtitle */}
            <p ref={textRef} className="font-cinzel text-lg md:text-xl text-cream/90 tracking-[0.25em] leading-relaxed mb-10 max-w-3xl mx-auto">
              AN ENCHANTING NIGHT OF MUSIC, LAUGHTER, AND A CELEBRATION OF LOVE THAT WILL ECHO THROUGH GENERATIONS.
            </p>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Date */}
              <div ref={dateRef} className="flex items-center gap-4 p-4 rounded-xl border border-mustard-yellow/20 bg-gradient-to-r from-mustard-yellow/5 to-transparent">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-hot-pink/40 bg-gradient-to-br from-hot-pink/8 to-transparent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-hot-pink">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-playfair text-xl md:text-2xl text-cream" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>July 10, 2026</p>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-hot-pink/70">Save the Date</p>
                </div>
              </div>

              {/* Time */}
              <div ref={timeRef} className="flex items-center gap-4 p-4 rounded-xl border border-lime-green/20 bg-gradient-to-r from-lime-green/5 to-transparent">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-lime-green/40 bg-gradient-to-br from-lime-green/8 to-transparent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lime-green">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-playfair text-xl md:text-2xl text-cream" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>6:30 PM</p>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-lime-green/70">Evening Celebration</p>
                </div>
              </div>
            </div>

            {/* Dress Code Badge */}
            <div 
              ref={dressRef}
              className="inline-flex items-center gap-3 rounded-full px-6 py-3"
              style={{
                background: 'linear-gradient(135deg, rgba(120, 81, 169, 0.45), rgba(75, 0, 130, 0.35))',
                border: '1px solid rgba(255,185,15,0.28)',
                boxShadow: '0 10px 40px rgba(255,185,15,0.08), 0 0 50px rgba(75,0,130,0.25)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-royal-purple">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-cinzel text-[11px] uppercase tracking-[0.2em] text-lavender">
                  Welcome! We’re so glad you’re here to make memories with us.              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-royal-purple">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevealHall;
