import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Heart } from 'lucide-react';

const ArtistPerformance: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const animatedHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Slight card float for magical feeling
    if (cardRef.current) {
      gsap.to(cardRef.current, { y: -8, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }

    // Animated rotating words (one at a time)
    const words = wordsRef.current.filter(Boolean) as HTMLElement[];
    if (words.length) {
      gsap.set(words, { autoAlpha: 0, y: 10, scale: 0.9 });
      const tlWords = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      words.forEach((w) => {
        tlWords.to(w, { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: 'power2.out' })
               .to(w, { autoAlpha: 0, y: -8, scale: 0.88, duration: 0.6, ease: 'power2.in' }, '+=1');
      });
    }
  }, []);

  return (
    <section id="artist" className="section-container panel bg-deep-purple">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mustard-yellow/10 via-transparent to-transparent opacity-70" />
        <div className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-mustard-yellow/10 blur-[90px]" />
        <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-hot-pink/30 blur-[80px]" />
        <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-lime-green/10 blur-[100px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-mustard-yellow" />
            <Heart className="text-hot-pink w-8 h-8 animate-pulse" />
            <div className="h-px w-12 bg-mustard-yellow" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-mustard-yellow text-magical-glow tracking-[0.3em]">
            FAMILY CELEBRATION
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative mx-auto w-full max-w-md group">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-hot-pink/20 via-mustard-yellow/15 to-lime-green/20 blur-3xl transition-all duration-500 group-hover:from-hot-pink/30 group-hover:via-mustard-yellow/25 group-hover:to-lime-green/30" />
            <div className="absolute inset-x-10 -top-5 z-20 rounded-full border border-mustard-yellow/40 bg-deep-purple/90 px-6 py-2 text-center shadow-lg backdrop-blur-md">
              <p className="font-cinzel text-[11px] tracking-[0.45em] text-mustard-yellow/90">TOGETHER AS ONE</p>
            </div>

            <div ref={cardRef} className="relative rounded-[2rem] border border-mustard-yellow/40 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] bg-gradient-to-b from-deep-purple/80 to-transparent">
              <div className="rounded-[1.7rem] border border-lime-green/30 p-6 overflow-hidden relative" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12))' }}>
                <div className="relative aspect-[3/4] rounded-[1.4rem] flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 ref={animatedHeadingRef} className="font-great-vibes text-5xl md:text-6xl text-mustard-yellow drop-shadow-lg mb-4">SOULS & STORIES</h3>
                    <div className="relative h-12 md:h-16">
                      {['LOVE', 'LAUGHTER', 'MUSIC', 'MEMORIES', 'DANCE'].map((w, i) => (
                        <span
                          key={w}
                          ref={(el) => (wordsRef.current[i] = el)}
                          className="absolute inset-0 flex items-center justify-center font-playfair text-2xl md:text-3xl text-hot-pink opacity-0 transform scale-90"
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-lime-green/90">CELEBRATING TOGETHER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-7 text-center md:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-hot-pink/30 bg-lime-green/10 px-5 py-2 mx-auto md:mx-0">
              <div className="h-2 w-2 rounded-full bg-mustard-yellow animate-sparkle" />
              <span className="font-cinzel text-[11px] tracking-[0.35em] text-mustard-yellow/85">WHOLEsome FAMILY TIME</span>
            </div>

            <h4 className="font-playfair italic text-3xl text-hot-pink md:text-4xl text-magical-glow">
              "Where hearts unite and memories blossom"
            </h4>

            <p className="font-montserrat text-lg text-cream/90 leading-relaxed">
             A BEAUTIFUL EVENING FILLED WITH LAUGHTER, LOVE, AND THE WARMTH OF FAMILY. TOGETHER WE CELEBRATE THE BONDS THAT UNITE US, SHARING STORIES, CREATING NEW MEMORIES, AND CHERISHING THE PRECIOUS MOMENTS THAT MAKE LIFE TRULY SPECIAL.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-mustard-yellow/25 bg-white/5 p-5 glassmorphic-magic">
                <p className="font-cinzel text-[11px] tracking-[0.35em] text-lime-green/80">CELEBRATION</p>
                <p className="mt-3 font-playfair text-2xl text-mustard-yellow">Family Time</p>
              </div>
              <div className="rounded-[1.5rem] border border-lime-green/25 bg-white/5 p-5 glassmorphic-magic">
                <p className="font-cinzel text-[11px] tracking-[0.35em] text-hot-pink/80">VIBE</p>
                <p className="mt-3 font-playfair text-2xl text-lime-green">Wholesome</p>
              </div>
            </div>

            <div className="pt-2">
              <div className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-hot-pink/50 to-transparent md:mx-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistPerformance;
