import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import { Volume2, VolumeX } from 'lucide-react';

const AudioControl: React.FC = () => {
  const { isAudioPlaying, isAudioInitialized, toggleAudio } = useStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      console.log("Audio initialized, playing:", isAudioPlaying);
      if (isAudioPlaying) {
        audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying, isAudioInitialized]);

  return (
    <div className="fixed top-6 right-6 z-[250] flex items-center gap-4">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="/ishq_sufiyana_female.mp3"
      />
      
      <button
        onClick={toggleAudio}
        className={`group relative p-4 rounded-full bg-gradient-to-br from-mustard-yellow/20 via-lavender/20 to-hot-pink/20 backdrop-blur-xl border-2 border-mustard-yellow/40 shadow-[0_10px_30px_rgba(255,185,15,0.3)] transition-all duration-500 hover:scale-115 hover:border-hot-pink/70 hover:shadow-[0_15px_40px_rgba(255,20,147,0.4),_0_0_30px_rgba(255,185,15,0.5),_0_0_40px_rgba(190,242,100,0.3)] ${
          isAudioPlaying ? 'text-mustard-yellow text-magical-glow' : 'text-mustard-yellow/40'
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-hot-pink/10 via-mustard-yellow/15 to-lime-green/10 blur-xl opacity-70 group-hover:opacity-100" />
        <div className="relative">
          {isAudioPlaying ? <Volume2 className="w-7 h-7 drop-shadow-[0_0_10px_rgba(255,185,15,0.7)]" /> : <VolumeX className="w-7 h-7" />}
        </div>
      </button>

      {isAudioPlaying && (
        <div className="flex gap-1.5 h-5 items-end">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-lime-green via-hot-pink to-mustard-yellow shadow-[0_0_8px_rgba(255,20,147,0.6),_0_0_15px_rgba(255,185,15,0.4)] animate-[music-bar_1s_ease-in-out_infinite]"
              style={{
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>
      )}
      
      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 20%; }
          25% { height: 70%; }
          50% { height: 100%; }
          75% { height: 50%; }
        }
      `}</style>
    </div>
  );
};

export default AudioControl;
