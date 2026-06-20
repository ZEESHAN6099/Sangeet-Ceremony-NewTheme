import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import GateScreen from '../components/GateScreen';
import RevealHall from '../components/RevealHall';
import InvitationDetails from '../components/InvitationDetails';
import VenueDetails from '../components/VenueDetails';
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

    // Configure ScrollTrigger for smoother performance
    ScrollTrigger.defaults({
      markers: false,
    });

    const panels = gsap.utils.toArray('.panel');
    
    // OPTIMIZED: Simple panel appearance animations
    panels.forEach((panel: any, i) => {
      gsap.fromTo(panel.children, 
        { 
          y: 40, 
          opacity: 0 
        }, 
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            fastScrollEnd: true,
          }
        }
      );
    });

    // Configure global scroll settings for super smooth scrolling
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      limitCallbacks: true,
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
        <RSVPForm />
        <GuestBook />
        <Countdown />
      </div>

      {/* REMOVED: Decorative Sidebar for maximum performance */}
    </main>
  );
};

export default Home;
