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
  const phraseRef = useRef<HTMLDivElement>(null);
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
          <div ref={phraseRef} className="mb-10 text-center">
            {/* "Cordially Invite" pill */}
            <div className="inline-block px-6 py-2 rounded-full mb-5"
              style={{ background: 'rgba(120,30,0,0.80)', border: '1px solid rgba(255,140,0,0.7)', boxShadow: '0 0 20px rgba(255,140,0,0.5), 0 0 35px rgba(255,20,147,0.3)' }}>
              <p className="font-playfair text-lg md:text-xl italic font-bold"
                style={{ color: '#FFD580', textShadow: '0 0 10px rgba(255,185,15,1), 0 0 22px rgba(255,140,0,0.8)' }}>
                Cordially Invite You to Celebrate the
              </p>
            </div>

            {/* "Mayoun Celebration" bold glowing badge */}
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 rounded-2xl blur-md" style={{ background: 'linear-gradient(135deg, #FF1493, #FF8C00, #FFB90F)', opacity: 0.8 }} />
              <div className="relative rounded-2xl px-6 py-4"
                style={{ background: 'linear-gradient(135deg, rgba(180,20,80,0.95), rgba(200,70,0,0.95), rgba(180,110,0,0.95))', border: '1.5px solid rgba(255,185,15,0.8)', boxShadow: '0 0 25px rgba(255,20,147,0.7), 0 0 45px rgba(255,140,0,0.6)' }}>
                <p className="font-cinzel text-xl md:text-2xl tracking-[0.25em] uppercase font-bold"
                  style={{ color: '#fff8e7', textShadow: '0 0 12px rgba(255,220,100,1), 0 0 28px rgba(255,185,15,0.9), 0 0 50px rgba(255,80,0,0.7)' }}>
                  ✦ Mayoun Celebration ✦
                </p>
              </div>
            </div>
          </div>

          {/* Couple Names */}
          <div ref={namesRef} className="text-center mb-6">
            {/* Outer frame glow */}
            <div className="relative mx-auto" style={{ maxWidth: '720px' }}>
              {/* Blurred halo behind the frame */}
              <div className="absolute inset-0 rounded-3xl blur-xl opacity-60"
                style={{ background: 'linear-gradient(135deg, #16a34a, #FFB90F, #FF8C00, #16a34a)' }} />

              {/* Frame */}
              <div className="relative rounded-3xl px-6 pt-6 pb-5"
                style={{
                  background: 'linear-gradient(160deg, rgba(10,50,10,0.92) 0%, rgba(30,20,0,0.92) 50%, rgba(10,50,10,0.92) 100%)',
                  border: '2px solid rgba(74,222,128,0.55)',
                  boxShadow: '0 0 0 1px rgba(255,185,15,0.2), 0 0 30px rgba(74,222,128,0.35), 0 0 55px rgba(255,140,0,0.25), inset 0 0 30px rgba(0,0,0,0.4)',
                }}>

                {/* Top mehndi ornament row */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #4ade80, #FFB90F)' }} />
                  {/* Mehndi leaf SVG */}
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4 C20 4 8 12 8 22 C8 30 14 36 20 36 C26 36 32 30 32 22 C32 12 20 4 20 4Z" fill="rgba(74,222,128,0.85)" />
                    <path d="M20 4 L20 36" stroke="#FFB90F" strokeWidth="1.2" />
                    <path d="M12 16 Q20 20 28 16" stroke="#FFB90F" strokeWidth="0.8" fill="none" />
                    <path d="M10 22 Q20 27 30 22" stroke="#FFB90F" strokeWidth="0.8" fill="none" />
                  </svg>
                  <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="#FFB90F" /><circle cx="12" cy="12" r="7" fill="none" stroke="rgba(74,222,128,0.7)" strokeWidth="1" /></svg>
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4 C20 4 8 12 8 22 C8 30 14 36 20 36 C26 36 32 30 32 22 C32 12 20 4 20 4Z" fill="rgba(74,222,128,0.85)" transform="scale(-1,1) translate(-40,0)" />
                    <path d="M20 4 L20 36" stroke="#FFB90F" strokeWidth="1.2" />
                    <path d="M12 16 Q20 20 28 16" stroke="#FFB90F" strokeWidth="0.8" fill="none" />
                    <path d="M10 22 Q20 27 30 22" stroke="#FFB90F" strokeWidth="0.8" fill="none" />
                  </svg>
                  <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #4ade80, #FFB90F)' }} />
                </div>

                {/* Names row */}
                <div className="flex items-center justify-center gap-4 md:gap-6">
                  {/* Aleeza */}
                  <div className="relative">
                    <span className="font-pinyon text-7xl md:text-8xl block leading-none"
                      style={{
                        color: '#4ade80',
                        textShadow: '0 0 18px rgba(74,222,128,1), 0 0 40px rgba(74,222,128,0.7), 0 0 65px rgba(255,185,15,0.5)',
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
                      }}>
                      Aleeza
                    </span>
                    <div className="mt-1 h-0.5 w-full rounded-full"
                      style={{ background: 'linear-gradient(to right, transparent, #4ade80, #FFB90F, transparent)' }} />
                  </div>

                  {/* Ampersand with mehndi ring */}
                  <div className="flex flex-col items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#4ade80" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" fill="#FFB90F" /></svg>
                    <span className="font-playfair text-3xl md:text-4xl font-bold leading-none"
                      style={{ color: '#FFB90F', textShadow: '0 0 15px rgba(255,185,15,1), 0 0 30px rgba(255,140,0,0.8)' }}>
                      &
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#4ade80" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" fill="#FFB90F" /></svg>
                  </div>

                  {/* Ibrahim */}
                  <div className="relative">
                    <span className="font-pinyon text-7xl md:text-8xl block leading-none"
                      style={{
                        color: '#4ade80',
                        textShadow: '0 0 18px rgba(74,222,128,1), 0 0 40px rgba(74,222,128,0.7), 0 0 65px rgba(255,185,15,0.5)',
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
                      }}>
                      Ibrahim
                    </span>
                    <div className="mt-1 h-0.5 w-full rounded-full"
                      style={{ background: 'linear-gradient(to right, transparent, #FFB90F, #4ade80, transparent)' }} />
                  </div>
                </div>

                {/* Bottom mehndi ornament row */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #FF8C00, #FFB90F)' }} />
                  <svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2 L14.5 9.5 L22 9.5 L16 14.5 L18.5 22 L12 17.5 L5.5 22 L8 14.5 L2 9.5 L9.5 9.5Z" fill="#FF8C00" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 2 L14.5 9.5 L22 9.5 L16 14.5 L18.5 22 L12 17.5 L5.5 22 L8 14.5 L2 9.5 L9.5 9.5Z" fill="#FFB90F" /></svg>
                  <svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2 L14.5 9.5 L22 9.5 L16 14.5 L18.5 22 L12 17.5 L5.5 22 L8 14.5 L2 9.5 L9.5 9.5Z" fill="#FF8C00" /></svg>
                  <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #FF8C00, #FFB90F)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-5 my-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-royal-purple/60" />
            <svg width="26" height="26" viewBox="0 0 24 24" style={{ color: '#FF1493', filter: 'drop-shadow(0 0 8px rgba(255,20,147,0.8))' }}>
              <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-royal-purple/60" />
          </div>

          {/* Date Section */}
          <div ref={dateRef} className="text-center">
            <div className="inline-block px-8 py-3 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(78, 81, 169, 0.92), rgba(140, 30, 90, 0.92))',
                border: '2px solid rgba(140, 30, 90, 0.7)',
                boxShadow: '0 0 0 1.5px rgba(120, 81, 169, 0.4), 0 0 30px rgba(140, 30, 90, 0.5), 0 0 55px rgba(255, 20, 147, 0.4), 0 0 0 3px rgba(120, 81, 169, 0.2), inset 0 0 30px rgba(0,0,0,0.5)',
              }}>
              <p 
  className="font-cinzel text-2xl md:text-3xl tracking-[0.35em] font-extrabold uppercase bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#CCFF00] bg-clip-text text-transparent filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
  style={{ 
    textShadow: '0 0 10px rgba(147, 51, 234, 0.8), 0 0 25px rgba(255, 20, 147, 0.6), 0 0 40px rgba(204, 255, 0, 0.4)' 
  }}
>
  JULY 10, 2026
</p>
              <div className="my-2 h-px" style={{ background: 'linear-gradient(to right, transparent, #FF1493, #FFA726, #FF1493, transparent)' }} />
              <p className="font-montserrat text-sm font-semibold tracking-widest uppercase text-[#FF9E2C]"
   style={{ 
     textShadow: '0 0 10px rgba(255, 158, 44, 0.9), 0 0 20px rgba(147, 51, 234, 0.8), 0 0 35px rgba(255, 20, 147, 0.6)' 
   }}>
  6:30 in the Evening
</p>
            </div>
          </div>

{/* Bottom Decorative Border */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-royal-purple/50 via-hot-pink/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default InvitationDetails;
