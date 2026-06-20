/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      // GOLD/YELLOW PRIMARY THEME
      'royal-gold': ({ opacityValue = 1 }) => `rgba(212, 175, 55, ${opacityValue})`,
      'royal-gold-light': ({ opacityValue = 1 }) => `rgba(230, 195, 80, ${opacityValue})`,
      'royal-gold-dark': ({ opacityValue = 1 }) => `rgba(180, 140, 40, ${opacityValue})`,
      
      'mustard-yellow': ({ opacityValue = 1 }) => `rgba(255, 185, 15, ${opacityValue})`,
      'mustard-yellow-light': ({ opacityValue = 1 }) => `rgba(255, 200, 50, ${opacityValue})`,
      'mustard-yellow-dark': ({ opacityValue = 1 }) => `rgba(220, 150, 5, ${opacityValue})`,
      
      'soft-yellow': ({ opacityValue = 1 }) => `rgba(255, 223, 0, ${opacityValue})`,
      'soft-yellow-light': ({ opacityValue = 1 }) => `rgba(255, 240, 150, ${opacityValue})`,
      
      'sunset-yellow': ({ opacityValue = 1 }) => `rgba(255, 167, 38, ${opacityValue})`,
      
      'golden-amber': ({ opacityValue = 1 }) => `rgba(255, 191, 0, ${opacityValue})`,
      'golden-yellow': ({ opacityValue = 1 }) => `rgba(255, 215, 0, ${opacityValue})`,
      
      // Neutral warm tones
      'cream': ({ opacityValue = 1 }) => `rgba(255, 253, 208, ${opacityValue})`,
      'ivory': ({ opacityValue = 1 }) => `rgba(255, 255, 240, ${opacityValue})`,
      'warm-white': ({ opacityValue = 1 }) => `rgba(255, 250, 230, ${opacityValue})`,
      
      // Default Tailwind colors
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      
      // Soft accents (minimal use)
      'soft-pink': ({ opacityValue = 1 }) => `rgba(255, 200, 200, ${opacityValue})`,
      'soft-orange': ({ opacityValue = 1 }) => `rgba(255, 180, 100, ${opacityValue})`,
    },
    extend: {
      fontFamily: {
        pinyon: ['"Pinyon Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s infinite linear',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { 
            textShadow: '0 0 15px rgba(212, 175, 55, 0.6), 0 0 30px rgba(255, 185, 15, 0.4)' 
          },
          '50%': { 
            textShadow: '0 0 25px rgba(212, 175, 55, 0.9), 0 0 45px rgba(255, 215, 0, 0.7), 0 0 60px rgba(255, 223, 0, 0.5)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
      },
    },
  },
  plugins: [],
};
