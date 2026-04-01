/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#e0f3e0',
          200: '#c2e7c2',
          300: '#95d495',
          400: '#5bb85d',
          500: '#2e8b32', // Main primary color (lighter green)
          600: '#1a5f1d',
          700: '#145317',
          800: '#0f4213',
          900: '#0a2f0a',
        },
        secondary: {
          50: '#fffde7',
          100: '#fff9c4',
          200: '#fff59d',
          300: '#fff176',
          400: '#ffee58',
          500: '#ffc107', // Main secondary color (gold)
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Standardized font sizes
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px - Default paragraph
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px - Large paragraph
        'xl': ['1.25rem', { lineHeight: '1.5' }],      // 20px - Small heading
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px - Section subtitle
        '3xl': ['1.875rem', { lineHeight: '1.3' }],    // 30px - Section title
        '4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px - Page title
        '5xl': ['3rem', { lineHeight: '1.1' }],        // 48px - Hero title
        '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px - Large hero
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
