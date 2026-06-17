import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import GateScreen from '../components/GateScreen';
import RevealHall from '../components/RevealHall';
import InvitationDetails from '../components/InvitationDetails';
import VenueDetails from '../components/VenueDetails';
import ArtistPerformance from '../components/ArtistPerformance';
import RSVPForm from '../components/RSVPForm';
import GuestBook from '../components/GuestBook';
import Countdown from '../components/Countdown';
import AudioControl from '../components/AudioControl';
import ParticleBackground from '../components/ParticleBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const { isGateOpened, isScrollLocked } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGateOpened) return;

    const panels = gsap.utils.toArray('.panel');
    
    // Smooth appearance of panels
    panels.forEach((panel: any, i) => {
      gsap.fromTo(panel.children, 
        { 
          y: 100, 
          opacity: 0 
        }, 
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Parallax effect for background images
      const bg = panel.querySelector('img');
      if (bg) {
        gsap.to(bg, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isGateOpened]);

  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isScrollLocked]);

  return (
    <main 
      ref={containerRef}
      className={`relative min-h-screen bg-rose-dark transition-opacity duration-1000 ${isGateOpened ? 'opacity-100' : 'opacity-100'}`}
    >
      <AudioControl />
      <ParticleBackground />
      <GateScreen />
      
      <div className={`transition-all duration-1000 ${isGateOpened ? 'blur-0 scale-100 opacity-100' : 'blur-2xl scale-110 opacity-0'}`}>
        <RevealHall />
        <InvitationDetails />
        <VenueDetails />
        <ArtistPerformance />
        <RSVPForm />
        <GuestBook />
        <Countdown />
      </div>

      {/* Decorative Sidebar (Optional) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[150] hidden lg:flex flex-col gap-8">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-royal-gold/50 to-transparent" />
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-royal-gold/40 vertical-text uppercase">
          Aleeza & Ibrahim
        </p>
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-royal-gold/50 to-transparent" />
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </main>
  );
};

export default Home;
