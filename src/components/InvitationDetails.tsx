import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../utils/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Heart, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InvitationDetails: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hostsRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);
  const namesRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const hosts = [
    { name: "Sana Iqbal", delay: 0 },
    { name: "Tehseen Shahzad", delay: 0.2 },
    { name: "Saima Raffat", delay: 0.3 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
        }
      });

      tl.fromTo(
        backgroundRef.current,
        { scale: 1.15, opacity: 0.1 },
        { scale: 1, opacity: 0.45, duration: 1.4, ease: 'power2.out' }
      )
      .fromTo(
        cardRef.current,
        { y: 80, scale: 0.9, opacity: 0, rotationX: 10 },
        { y: 0, scale: 1, opacity: 1, rotationX: 0, duration: 1.2, ease: 'power4.out' },
        '-=1'
      )
      .fromTo(
        hostsRef.current?.children || [],
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.15, ease: 'power3.out' },
        '-=0.35'
      )
      .fromTo(
        phraseRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        namesRef.current,
        { scale: 0.82, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.05, ease: 'back.out(1.4)' },
        '-=0.4'
      )
      .fromTo(
        dateRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Flower SVG component
  const Flower = ({ color, delay, rotate, size }: { color: string; delay?: string; rotate?: number; size?: number }) => (
    <svg
      width={size || 40}
      height={size || 40}
      viewBox="0 0 24 24"
      fill="none"
      style={{ animationDelay: delay, transform: `rotate(${rotate || 0}deg)` }}
      className="text-magical-glow"
    >
      {/* Flower petals */}
      <path d="M12 2C11.4 2 11 2.4 11 3V6L8.5 4.5C8 4.2 7.3 4.4 7.1 4.9L5 9C4.7 9.6 5.1 10.3 5.7 10.5L9 12L5.7 13.5C5.1 13.7 4.7 14.4 5 15L7.1 19.1C7.3 19.6 8 19.8 8.5 19.5L11 18V21C11 21.6 11.4 22 12 22C12.6 22 13 21.6 13 21V18L15.5 19.5C16 19.8 16.7 19.6 16.9 19.1L19 15C19.3 14.4 18.9 13.7 18.3 13.5L15 12L18.3 10.5C18.9 10.3 19.3 9.6 19 9L16.9 4.9C16.7 4.4 16 4.2 15.5 4.5L13 6V3C13 2.4 12.6 2 12 2Z" fill={color} opacity="0.9" />
      <circle cx="12" cy="12" r="3" fill="#FFD17A" />
    </svg>
  );

  return (
    <section ref={sectionRef} id="invitation" className="section-container panel overflow-visible">
      <div className="absolute inset-0 z-0">
        <img
          ref={backgroundRef}
          src={IMAGES.INVITATION_BG}
          alt="Invitation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(60,40,10,0.8)] via-[rgba(80,50,15,0.6)] to-[rgba(40,25,5,0.5)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,185,15,0.2),_transparent_55%)]" />
      </div>

      {/* Floating flowers around the card */}
      <div className="absolute top-10 left-10 z-5 animate-sparkle">
        <Flower color="#FFD700" size={50} />
      </div>
      <div className="absolute top-20 right-12 z-5 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Flower color="#FFC107" size={45} rotate={45} />
      </div>
      <div className="absolute bottom-16 left-16 z-5 animate-sparkle" style={{ animationDelay: '1s' }}>
        <Flower color="#FFD17A" size={55} rotate={30} />
      </div>
      <div className="absolute bottom-10 right-10 z-5 animate-sparkle" style={{ animationDelay: '1.5s' }}>
        <Flower color="#FFE066" size={40} rotate={-20} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Main Invitation Card */}
        <div
          ref={cardRef}
          className="relative p-10 md:p-14 rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.45),_0_0_60px_rgba(255,185,15,0.25),_0_0_80px_rgba(255,215,0,0.2)] backdrop-blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 185, 15, 0.2), rgba(255, 215, 0, 0.15), rgba(255, 240, 150, 0.12))'
          }}
        >
          {/* Inner decorative borders */}
          <div className="pointer-events-none absolute inset-[10px] rounded-[2.5rem] border-2 border-royal-gold/30" />
          <div className="pointer-events-none absolute inset-[18px] rounded-[2.3rem] border border-soft-yellow/20" />
          <div className="pointer-events-none absolute inset-[26px] rounded-[2.1rem] border border-golden-amber/15" />

          {/* Animated Corner Decorations */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-royal-gold rounded-tl-[2rem] shadow-[0_0_20px_rgba(255,185,15,0.4)]" />
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-soft-yellow rounded-tr-[2rem] shadow-[0_0_20px_rgba(255,240,150,0.4)]" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-golden-amber rounded-bl-[2rem] shadow-[0_0_20px_rgba(255,215,0,0.4)]" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-royal-gold rounded-br-[2rem] shadow-[0_0_20px_rgba(255,185,15,0.4)]" />

          {/* Floating Sparkles on card */}
          <div className="absolute top-6 left-12 text-soft-yellow animate-sparkle">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="absolute top-20 right-16 text-golden-amber animate-sparkle" style={{ animationDelay: '0.4s' }}>
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div className="absolute bottom-8 right-12 text-mustard-yellow animate-sparkle" style={{ animationDelay: '0.8s' }}>
            <Heart className="w-7 h-7 fill-current" />
          </div>
          <div className="absolute bottom-16 left-16 text-soft-yellow animate-sparkle" style={{ animationDelay: '1.2s' }}>
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Hosts Section */}
          <div ref={hostsRef} className="text-center mb-12 pt-6 md:pt-0">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {hosts.map((host, index) => (
                <div key={index} className="relative group">
                  <span className="font-cinzel text-base md:text-xl tracking-[0.35em] text-mustard-yellow uppercase text-magical-glow">
                    {host.name}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-golden-amber/70 via-soft-yellow/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Divider with flowers */}
          <div className="flex items-center justify-center gap-5 my-10">
            <div><Flower color="#FFD700" size={30} /></div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-mustard-yellow/60 to-golden-amber/60" />
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-soft-yellow/80 animate-sparkle" />
              <div className="w-4 h-4 rotate-45 border-2 border-golden-amber/70 bg-mustard-yellow/20 shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
              <div className="w-5 h-5 rounded-full bg-mustard-yellow/80 animate-sparkle" style={{ animationDelay: '0.15s' }} />
              <div className="w-4 h-4 rotate-45 border-2 border-soft-yellow/70 bg-golden-amber/20 shadow-[0_0_15px_rgba(255,240,150,0.5)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-soft-yellow/80 animate-sparkle" style={{ animationDelay: '0.3s' }} />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-golden-amber/60 to-mustard-yellow/60" />
            <div><Flower color="#FFD17A" size={30} rotate={45} /></div>
          </div>

          {/* Main Phrase */}
          <p ref={phraseRef} className="font-playfair text-xl md:text-2xl text-center text-cream/95 italic leading-relaxed mb-12 px-6 drop-shadow-[0_0_10px_rgba(255,253,208,0.5)]">
            Cordially Invite You to Celebrate the
          </p>

          {/* Mayoun Celebration with flowers on corners */}
          <div className="flex items-center justify-center mb-12 px-4 overflow-visible">
            <div className="relative px-10 py-6">
              {/* Corner flowers */}
              <div className="absolute -left-1 -top-1 animate-sparkle">
                <Flower color="#FFD700" size={28} />
              </div>
              <div className="absolute -right-1 -top-1 animate-sparkle" style={{ animationDelay: '0.2s' }}>
                <Flower color="#FFC107" size={28} rotate={90} />
              </div>
              <div className="absolute -left-1 -bottom-1 animate-sparkle" style={{ animationDelay: '0.4s' }}>
                <Flower color="#FFD17A" size={28} rotate={180} />
              </div>
              <div className="absolute -right-1 -bottom-1 animate-sparkle" style={{ animationDelay: '0.6s' }}>
                <Flower color="#FFE066" size={28} rotate={270} />
              </div>

              {/* Main Text - split into two lines */}
              <div className="text-center">
                <span className="block font-cinzel text-2xl md:text-3xl tracking-[0.4em] text-mustard-yellow text-magical-glow animate-glow-pulse" style={{ textShadow: '0 0 15px rgba(255,185,15,0.9), 0 0 25px rgba(255,215,0,0.6), 0 0 35px rgba(255,240,150,0.4)' }}>
                  MAYOUN
                </span>
                <span className="block font-cinzel text-2xl md:text-3xl tracking-[0.4em] text-soft-yellow text-magical-glow animate-glow-pulse mt-3" style={{ textShadow: '0 0 15px rgba(255,240,150,0.9), 0 0 25px rgba(255,185,15,0.6), 0 0 35px rgba(255,215,0,0.4)' }}>
                  CELEBRATION
                </span>
              </div>
            </div>
          </div>

          {/* Couple Names with heart divider */}
          <div ref={namesRef} className="text-center mb-12 px-6">
            <div className="flex items-center justify-center gap-5">
              <span className="font-pinyon text-5xl md:text-7xl text-mustard-yellow text-magical-glow animate-glow-pulse">Aleeza</span>
              <div className="flex flex-col items-center">
                <Heart className="w-10 h-10 text-golden-amber animate-glow-pulse drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] fill-current" />
                <div className="text-cream/70 font-cinzel text-xs tracking-[0.3em] mt-2">AND</div>
              </div>
              <span className="font-pinyon text-5xl md:text-7xl text-mustard-yellow text-magical-glow animate-glow-pulse">Ibrahim</span>
            </div>
          </div>

          {/* Decorative Divider with more flowers */}
          <div className="flex items-center justify-center gap-5 my-10">
            <div><Flower color="#FFC107" size={25} rotate={-30} /></div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-soft-yellow/50" />
            <svg width="40" height="40" viewBox="0 0 24 24" className="text-golden-amber/80 animate-glow-pulse drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
              <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-soft-yellow/50" />
            <div><Flower color="#FFE066" size={25} rotate={30} /></div>
          </div>

          {/* Date Section */}
          <div ref={dateRef} className="text-center">
            {/* Date with decorative flowers */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <Flower color="#FFD17A" size={22} rotate={-45} />
              <p className="font-pinyon text-4xl md:text-5xl text-mustard-yellow text-magical-glow animate-glow-pulse" style={{ textShadow: '0 0 18px rgba(255,185,15,0.9), 0 0 30px rgba(255,215,0,0.6)' }}>
                July 10, 2026
              </p>
              <Flower color="#FFD17A" size={22} rotate={45} />
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-soft-yellow/40" />
              <Heart className="w-5 h-5 text-soft-yellow fill-current animate-sparkle" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-soft-yellow/40" />
            </div>

            {/* Time with decorative frame */}
            <div className="inline-block relative px-5 py-2.5 rounded-full border-2 border-soft-yellow/40 bg-gradient-to-r from-soft-yellow/10 via-golden-amber/10 to-mustard-yellow/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,240,150,0.2)]">
              {/* Corner decorations on frame */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-golden-amber rounded-tl-md" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-mustard-yellow rounded-tr-md" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-soft-yellow rounded-bl-md" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-golden-amber rounded-br-md" />
              
              <p className="font-cinzel font-bold text-base md:text-lg tracking-[0.25em] text-golden-amber text-magical-glow animate-glow-pulse" style={{ textShadow: '0 0 12px rgba(255,215,0,0.9), 0 0 20px rgba(255,185,15,0.6)' }}>
                6:30 PM
              </p>
            </div>
          </div>

          {/* Bottom Decorative Border */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-transparent via-golden-amber/40 via-mustard-yellow/40 via-soft-yellow/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default InvitationDetails;
