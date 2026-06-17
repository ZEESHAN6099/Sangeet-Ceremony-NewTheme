import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../utils/images';
import { useStore } from '../store/useStore';
import gsap from 'gsap';

const RevealHall: React.FC = () => {
  const { isGateOpened } = useStore();
  const letterARef = useRef<HTMLDivElement>(null);
  const letterIRef = useRef<HTMLDivElement>(null);
  const ampersandRef = useRef<HTMLSpanElement>(null);
  const namesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGateOpened) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Initial state
    gsap.set([letterARef.current, letterIRef.current, ampersandRef.current, namesRef.current, textRef.current], {
      opacity: 0
    });

    // Animation sequence
    tl.fromTo(letterARef.current,
      { x: -200, opacity: 0, rotation: -20 },
      { x: 0, opacity: 1, rotation: 0, duration: 1.5, ease: 'power4.out' }
    )
    .fromTo(letterIRef.current,
      { x: 200, opacity: 0, rotation: 20 },
      { x: 0, opacity: 1, rotation: 0, duration: 1.5, ease: 'power4.out' },
      '<'
    )
    .to([letterARef.current, letterIRef.current], {
      filter: 'drop-shadow(0 0 25px rgba(255, 185, 15, 0.9)) drop-shadow(0 0 40px rgba(255, 20, 147, 0.6)) drop-shadow(0 0 50px rgba(190, 242, 100, 0.4))',
      duration: 0.8,
      ease: 'sine.inOut'
    })
    .fromTo(ampersandRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.6, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(namesRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );

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
        {/* Monogram AI */}
        <div className="relative flex items-center justify-center mb-12 h-40">
          <div ref={letterARef} className="relative">
            <span className="font-playfair text-9xl md:text-[12rem] text-mustard-yellow text-magical-glow leading-none select-none animate-glow-pulse">A</span>
          </div>
          <span ref={ampersandRef} className="font-pinyon text-5xl text-lime-green/60 mx-4 mt-8">&</span>
          <div ref={letterIRef} className="relative">
            <span className="font-playfair text-9xl md:text-[12rem] text-mustard-yellow text-magical-glow leading-none select-none animate-glow-pulse">I</span>
          </div>
        </div>
        
        {/* Main Subtitle */}
        <p ref={textRef} className="font-cinzel text-lg md:text-xl text-cream/90 tracking-[0.25em] leading-relaxed mb-8 max-w-3xl">
          AN ENCHANTING NIGHT OF MUSIC, LAUGHTER, AND A CELEBRATION OF LOVE THAT WILL ECHO THROUGH GENERATIONS.
        </p>

        {/* Names beneath the text */}
        <div ref={namesRef} className="space-y-2">
          <h2 className="font-pinyon text-5xl md:text-6xl text-mustard-yellow text-magical-glow animate-glow-pulse">
            Aleeza & Ibrahim
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-hot-pink/50 to-transparent" />
            <div className="w-3 h-3 rounded-full bg-lime-green animate-sparkle" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-mustard-yellow/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevealHall;
