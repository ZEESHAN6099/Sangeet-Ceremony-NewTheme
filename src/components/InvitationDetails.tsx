import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../utils/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const hosts = [
    { name: "Sana Iqbal", delay: 0 },
    { name: "Tehseen Shazad", delay: 0.2 },
    { name: "Siama Raffat", delay: 0.4 }
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
        { scale: 1.12, opacity: 0.15 },
        { scale: 1, opacity: 0.4, duration: 1.4, ease: 'power2.out' }
      )
        // Card entrance
        .fromTo(
          cardRef.current,
          { y: 70, scale: 0.92, opacity: 0, rotationX: 8 },
          { y: 0, scale: 1, opacity: 1, rotationX: 0, duration: 1.2, ease: 'power4.out' },
          '-=1'
        )
        // Corner decorations animate in
        .fromTo(
          cornerRefs.current.filter(Boolean),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
          '-=0.45'
        )
        // Hosts names appear with stagger
        .fromTo(
          hostsRef.current?.children || [],
          { y: -26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.35'
        )
        // Phrase slides up
        .fromTo(
          phraseRef.current,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.3'
        )
        // Main names with glow pulse
        .fromTo(
          namesRef.current,
          { scale: 0.86, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.4)' },
          '-=0.4'
        )
        // Date appears
        .fromTo(
          dateRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        );

      gsap.to(namesRef.current, {
        filter: 'drop-shadow(0 0 25px rgba(197, 160, 89, 0.7))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(cardRef.current, {
        y: -8,
        duration: 3.2,
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
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 via-maroon-dark/60 to-maroon/40" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        {/* Main Invitation Card */}
        <div 
          ref={cardRef}
          className="relative p-10 md:p-14 bg-gradient-to-br from-maroon-dark/80 via-maroon/60 to-maroon-dark/80 backdrop-blur-md border border-gold/30 rounded-lg shadow-2xl"
        >
          {/* Animated Corner Decorations */}
          <div ref={el => cornerRefs.current[0] = el} className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-gold" />
          <div ref={el => cornerRefs.current[1] = el} className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-gold" />
          <div ref={el => cornerRefs.current[2] = el} className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-gold" />
          <div ref={el => cornerRefs.current[3] = el} className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-gold" />

          {/* Hosts Section */}
          <div ref={hostsRef} className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {hosts.map((host, index) => (
                <div key={index} className="relative group">
                  <span className="font-cinzel text-base md:text-lg tracking-[0.25em] text-gold-light uppercase">
                    {host.name}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rotate-45 border border-gold/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {/* Main Phrase */}
          <p ref={phraseRef} className="font-playfair text-lg md:text-xl text-center text-gold-light/90 italic leading-relaxed mb-8 px-4">
            Cordially Invite You to Celebrate the
            <span className="block font-cinzel text-sm tracking-[0.2em] text-gold mt-2 uppercase">
              Sangeet Night
            </span>
          </p>

          {/* Couple Names */}
          <div ref={namesRef} className="text-center mb-8">
            <div className="flex items-center justify-center gap-4">
              <span className="font-pinyon text-5xl md:text-7xl text-gold drop-shadow-lg">Aleeza</span>
              <span className="font-playfair text-3xl text-gold/60">&</span>
              <span className="font-pinyon text-5xl md:text-7xl text-gold drop-shadow-lg">Ibrahim</span>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold/50">
              <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          {/* Date Section */}
          <div ref={dateRef} className="text-center">
            <p className="font-cinzel text-xl md:text-2xl tracking-[0.3em] text-gold">
              JULY 10, 2026
            </p>
            <p className="font-montserrat text-xs tracking-widest text-gold/50 mt-2 uppercase">
              6:30 in the Evening
            </p>
          </div>

          {/* Bottom Decorative Border */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default InvitationDetails;
