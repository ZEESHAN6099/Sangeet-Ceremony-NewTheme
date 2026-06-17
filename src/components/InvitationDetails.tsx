import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../utils/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InvitationDetails: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hostsRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);
  const namesRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const cornerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sparkleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const hosts = [
    { name: "Sana Iqbal", delay: 0 },
    { name: "Tehseen Shahzad", delay: 0.2 },
    { name: "Saima Raffat", delay: 0.4 }
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
        // Card entrance
        .fromTo(
          cardRef.current,
          { y: 80, scale: 0.9, opacity: 0, rotationX: 10 },
          { y: 0, scale: 1, opacity: 1, rotationX: 0, duration: 1.2, ease: 'power4.out' },
          '-=1'
        )
        // Corner decorations animate in
        .fromTo(
          cornerRefs.current.filter(Boolean),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.65, stagger: 0.1, ease: 'back.out(1.7)' },
          '-=0.45'
        )
        // Sparkles animate in
        .fromTo(
          sparkleRefs.current.filter(Boolean),
          { scale: 0, opacity: 0, rotation: -180 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.5)' },
          '-=0.3'
        )
        // Hosts names appear with stagger
        .fromTo(
          hostsRef.current?.children || [],
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.15, ease: 'power3.out' },
          '-=0.35'
        )
        // Phrase slides up
        .fromTo(
          phraseRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: 'power2.out' },
          '-=0.3'
        )
        // Main names with glow pulse
        .fromTo(
          namesRef.current,
          { scale: 0.82, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.05, ease: 'back.out(1.4)' },
          '-=0.4'
        )
        // Date appears
        .fromTo(
          dateRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
          '-=0.3'
        );

      gsap.to(namesRef.current, {
        filter: 'drop-shadow(0 0 35px rgba(255, 185, 15, 0.9)) drop-shadow(0 0 50px rgba(255, 20, 147, 0.6)) drop-shadow(0 0 60px rgba(190, 242, 100, 0.4))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(cardRef.current, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="invitation" className="section-container panel overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          ref={backgroundRef}
          src={IMAGES.INVITATION_BG}
          alt="Invitation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/60 via-hot-pink/55 to-lime-green/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,185,15,0.2),_transparent_55%)]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        {/* Main Invitation Card */}
        <div
          ref={cardRef}
          className="relative p-10 md:p-14 glassmorphic-magic rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.45),_0_0_60px_rgba(255,185,15,0.25),_0_0_80px_rgba(255,20,147,0.2)]"
        >
          {/* Floating Sparkles around card */}
          <div ref={el => sparkleRefs.current[0] = el} className="absolute -top-4 left-8 text-lime-green animate-sparkle">
            <Sparkles className="w-6 h-6" />
          </div>
          <div ref={el => sparkleRefs.current[1] = el} className="absolute top-12 -right-4 text-hot-pink animate-sparkle" style={{ animationDelay: '0.4s' }}>
            <Sparkles className="w-5 h-5" />
          </div>
          <div ref={el => sparkleRefs.current[2] = el} className="absolute -bottom-4 right-12 text-mustard-yellow animate-sparkle" style={{ animationDelay: '0.8s' }}>
            <Sparkles className="w-6 h-6" />
          </div>
          <div ref={el => sparkleRefs.current[3] = el} className="absolute bottom-8 -left-4 text-lime-green animate-sparkle" style={{ animationDelay: '1.2s' }}>
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Inner decorative border */}
          <div className="pointer-events-none absolute inset-[10px] rounded-[1.6rem] border border-mustard-yellow/15" />
          <div className="pointer-events-none absolute inset-[18px] rounded-[1.4rem] border border-hot-pink/10" />
          
          {/* Animated Corner Decorations */}
          <div ref={el => cornerRefs.current[0] = el} className="absolute -top-3 -left-3 w-16 h-16 border-t-3 border-l-3 border-mustard-yellow rounded-tl-[1.5rem] shadow-[0_0_15px_rgba(255,185,15,0.5)]" />
          <div ref={el => cornerRefs.current[1] = el} className="absolute -top-3 -right-3 w-16 h-16 border-t-3 border-r-3 border-lime-green rounded-tr-[1.5rem] shadow-[0_0_15px_rgba(190,242,100,0.5)]" />
          <div ref={el => cornerRefs.current[2] = el} className="absolute -bottom-3 -left-3 w-16 h-16 border-b-3 border-l-3 border-hot-pink rounded-bl-[1.5rem] shadow-[0_0_15px_rgba(255,20,147,0.5)]" />
          <div ref={el => cornerRefs.current[3] = el} className="absolute -bottom-3 -right-3 w-16 h-16 border-b-3 border-r-3 border-mustard-yellow rounded-br-[1.5rem] shadow-[0_0_15px_rgba(255,185,15,0.5)]" />

          {/* Hosts Section */}
          <div ref={hostsRef} className="text-center mb-10">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
              {hosts.map((host, index) => (
                <div key={index} className="relative group">
                  <span className="font-cinzel text-base md:text-lg tracking-[0.3em] text-mustard-yellow uppercase text-magical-glow">
                    {host.name}
                  </span>
                  <div className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-hot-pink/70 via-lime-green/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-5 my-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-mehndi-orange/60 to-hot-pink/60" />
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-lime-green/80 animate-sparkle" />
              <div className="w-3 h-3 rotate-45 border-2 border-hot-pink/70 bg-mehndi-orange/20 shadow-[0_0_10px_rgba(255,20,147,0.5)]" />
              <div className="w-4 h-4 rounded-full bg-mehndi-orange/80 animate-sparkle" style={{ animationDelay: '0.15s' }} />
              <div className="w-3 h-3 rotate-45 border-2 border-lime-green/70 bg-hot-pink/20 shadow-[0_0_10px_rgba(190,242,100,0.5)]" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-hot-pink/60 to-mehndi-orange/60" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-hot-pink/60 to-mehndi-orange/60" />
          </div>

          {/* Main Phrase */}
          <p ref={phraseRef} className="font-playfair text-xl md:text-2xl text-center text-cream/95 italic leading-relaxed mb-10 px-6 drop-shadow-[0_0_10px_rgba(255,253,208,0.5)]">
            Cordially Invite You to Celebrate the
            <span className="block font-cinzel text-sm tracking-[0.3em] text-hot-pink mt-4 uppercase text-magical-glow animate-glow-pulse">
              Mayoun Celebration
            </span>
          </p>

          {/* Couple Names */}
          <div ref={namesRef} className="text-center mb-10">
            <div className="flex items-center justify-center gap-6">
              <span className="font-pinyon text-6xl md:text-8xl text-mehndi-orange  ">Aleeza</span>
              <span className="font-playfair text-4xl text-hot-pink/80 drop-shadow-[0_0_10px_rgba(255,20,147,0.6)]">&</span>
              <span className="font-pinyon text-6xl md:text-8xl text-mehndi-orange ">Ibrahim</span>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-5 my-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-lime-green/50" />
            <svg width="30" height="30" viewBox="0 0 24 24" className="text-hot-pink/80 animate-glow-pulse drop-shadow-[0_0_10px_rgba(255,20,147,0.6)]">
              <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-lime-green/50" />
          </div>

          {/* Date Section */}
          <div ref={dateRef} className="text-center">
            <p className="font-cinzel text-2xl md:text-3xl tracking-[0.35em] text-lime-green text-magical-glow">
              JULY 10, 2026
            </p>
            <p className="font-montserrat text-sm tracking-widest text-lime-green/80 mt-3 uppercase">
              6:30 in the Evening
            </p>
          </div>

          {/* Bottom Decorative Border */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-hot-pink/40 via-mustard-yellow/40 via-lime-green/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default InvitationDetails;
