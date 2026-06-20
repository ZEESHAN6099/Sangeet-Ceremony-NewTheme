import React, { useEffect } from 'react';
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

const Home: React.FC = () => {
  const { isGateOpened, isScrollLocked } = useStore();

  const slides = [
    { id: 'reveal', component: <RevealHall /> },
    { id: 'invitation', component: <InvitationDetails /> },
    { id: 'venue', component: <VenueDetails /> },
    { id: 'rsvp', component: <RSVPForm /> },
    { id: 'guestbook', component: <GuestBook /> },
    { id: 'countdown', component: <Countdown /> },
  ];

  // Handle scroll locking
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isScrollLocked]);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative bg-rose-dark">
      <AudioControl />
      <ParticleBackground />
      <GateScreen />

      {/* Main Container with Vertical Scrolling */}
      <div 
        className={`transition-opacity duration-1000 ${isGateOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {slides.map((slide) => (
          <section
            key={slide.id}
            id={slide.id}
            className="min-h-screen w-full"
          >
            {slide.component}
          </section>
        ))}
      </div>

      {/* Smooth Scrolling Styles */}
      <style>{`
        html, body {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }
        
        body::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }
        
        body::-webkit-scrollbar-thumb {
          background: transparent;
        }
        
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
