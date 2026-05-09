import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Charte Fort Apache (Laurence — Mig's Communication)
        sage: {
          DEFAULT: '#A4B49E',
          dark: '#8B9C85',
        },
        midnight: {
          DEFAULT: '#3E515D',
          dark: '#2A3942',
        },
        cream: {
          DEFAULT: '#F8F4E8',
          dark: '#EDE6D2',
        },
        terracotta: {
          DEFAULT: '#C1643D',
          dark: '#A55333',
        },

        // Alias rétro-compatibles : remappent les anciennes clés vers la
        // palette charte pour éviter les régressions visuelles sur les
        // composants/pages non explicitement réécrits dans cette V1.
        foret: {
          DEFAULT: '#3E515D',
          light: '#4D6573',
          dark: '#3E515D',
        },
        sable: {
          DEFAULT: '#A4B49E',
          light: '#C5D1C0',
          dark: '#8B9C85',
        },
        bordeaux: {
          DEFAULT: '#C1643D',
          light: '#D17850',
          dark: '#A55333',
        },
        creme: {
          DEFAULT: '#F8F4E8',
        },
        charbon: {
          DEFAULT: '#3E515D',
        },
      },
      fontFamily: {
        display: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        // Alias rétro-compat : mappe l'ancien font-serif vers Roboto charte.
        serif: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
