import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f0ede8',
        ink: '#0a0a0a',
        blue: { DEFAULT: '#0053CD', dark: '#003fa0' },
        warm: '#7a7772',
        rule: 'rgba(10,10,10,.1)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3.5rem, 11.5vw, 13rem)',
        'dxl': 'clamp(3rem, 9vw, 10rem)',
        'dlg': 'clamp(2.5rem, 6vw, 7rem)',
        'dmd': 'clamp(1.8rem, 3.5vw, 4rem)',
        'dsm': 'clamp(1.3rem, 2vw, 2.2rem)',
      },
      animation: {
        'marquee': 'marquee-scroll 28s linear infinite',
        'marquee-slow': 'marquee-scroll 38s linear infinite',
        'scroll-tick': 'scroll-tick 2s ease-in-out infinite',
      },
      keyframes: {
        'marquee-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'scroll-tick': {
          '0%,100%': { height: '60px', opacity: '0.3' },
          '50%': { height: '20px', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
