import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';

const AudioControl: React.FC = () => {
  const { isAudioPlaying, isAudioInitialized } = useStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.1;

    if (isAudioPlaying) {
      audioRef.current.play().catch(() => {
        // Playback may be blocked by browser autoplay policies; GateScreen triggers initializeAudio on Enter.
      });
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying, isAudioInitialized]);

  // Render only the hidden audio element (no controls or icons)
  return (
    <audio ref={audioRef} loop src="/hum_tumhare.mp3" aria-hidden="true" className="hidden" />
  );
};

export default AudioControl;
