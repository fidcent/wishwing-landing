import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#8B7FFF',
          pink: '#D77FF5',
          DEFAULT: '#8B7FFF',
        },
        secondary: {
          purple: '#A28FFF',
          DEFAULT: '#A28FFF',
        },
        accent: {
          pink: '#C147E9',
          DEFAULT: '#C147E9',
        },
        wishcoin: {
          gold: '#FFD700',
          shadow: '#FFA500',
        },
        gray: {
          lightest: '#FAFBFC',
          light: '#F3F4F6',
          medium: '#9CA3AF',
          dark: '#374151',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
      },
      fontFamily: {
        display: ['Pacifico', 'cursive'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(108, 99, 255, 0.4)',
        'wishcoin': '0 0 15px rgba(255, 215, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C63FF 0%, #9B4DFF 50%, #C147E9 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
        'gradient-wishcoin': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 100%)',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'rotateFloat': 'rotateFloat 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-30px) translateX(5px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        rotateFloat: {
          '0%, 100%': {
            transform: 'rotateY(0deg) translateY(0)',
          },
          '50%': {
            transform: 'rotateY(180deg) translateY(-20px)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 8px 24px rgba(108, 99, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 8px 32px rgba(108, 99, 255, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
