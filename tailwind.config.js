/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      // Pink tones
      'hot-pink': ({ opacityValue = 1 }) => `rgba(255, 20, 147, ${opacityValue})`,
      'deep-pink': ({ opacityValue = 1 }) => `rgba(255, 20, 147, ${opacityValue})`,
      'mehndi-pink': ({ opacityValue = 1 }) => `rgba(255, 105, 180, ${opacityValue})`,
      'mehndi-pink-light': ({ opacityValue = 1 }) => `rgba(255, 182, 193, ${opacityValue})`,
      'mehndi-pink-dark': ({ opacityValue = 1 }) => `rgba(219, 112, 147, ${opacityValue})`,
      'blush-pink': ({ opacityValue = 1 }) => `rgba(255, 182, 193, ${opacityValue})`,
      
      // Orange tones
      'mehndi-orange': ({ opacityValue = 1 }) => `rgba(255, 140, 0, ${opacityValue})`,
      'mehndi-orange-light': ({ opacityValue = 1 }) => `rgba(255, 165, 0, ${opacityValue})`,
      'mehndi-orange-dark': ({ opacityValue = 1 }) => `rgba(255, 69, 0, ${opacityValue})`,
      'coral': ({ opacityValue = 1 }) => `rgba(255, 127, 80, ${opacityValue})`,
      'tangerine': ({ opacityValue = 1 }) => `rgba(242, 140, 40, ${opacityValue})`,
      
      // Mustard/Yellow tones
      'mustard-yellow': ({ opacityValue = 1 }) => `rgba(255, 185, 15, ${opacityValue})`,
      'soft-yellow': ({ opacityValue = 1 }) => `rgba(255, 223, 0, ${opacityValue})`,
      'sunset-yellow': ({ opacityValue = 1 }) => `rgba(255, 167, 38, ${opacityValue})`,
      
      // Green tones
      'lime-green': ({ opacityValue = 1 }) => `rgba(190, 242, 100, ${opacityValue})`,
      'soft-green': ({ opacityValue = 1 }) => `rgba(132, 204, 22, ${opacityValue})`,
      'forest-green': ({ opacityValue = 1 }) => `rgba(64, 124, 41, ${opacityValue})`,
      
      // Purple tones
      'royal-purple': ({ opacityValue = 1 }) => `rgba(120, 81, 169, ${opacityValue})`,
      'deep-purple': ({ opacityValue = 1 }) => `rgba(75, 0, 130, ${opacityValue})`,
      'lavender': ({ opacityValue = 1 }) => `rgba(230, 230, 250, ${opacityValue})`,
      'violet': ({ opacityValue = 1 }) => `rgba(143, 0, 255, ${opacityValue})`,
      
      // Neutral white tones
      'cream': ({ opacityValue = 1 }) => `rgba(255, 253, 208, ${opacityValue})`,
      'ivory': ({ opacityValue = 1 }) => `rgba(255, 255, 240, ${opacityValue})`,
      'off-white': ({ opacityValue = 1 }) => `rgba(250, 240, 230, ${opacityValue})`,
      'pearl-white': ({ opacityValue = 1 }) => `rgba(240, 240, 240, ${opacityValue})`,
      
      // Default Tailwind colors
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
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
            textShadow: '0 0 15px rgba(255, 185, 15, 0.6), 0 0 30px rgba(255, 105, 180, 0.4)' 
          },
          '50%': { 
            textShadow: '0 0 25px rgba(255, 185, 15, 0.9), 0 0 45px rgba(255, 105, 180, 0.7), 0 0 60px rgba(190, 242, 100, 0.5)' 
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
