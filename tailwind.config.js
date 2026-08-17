/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        'bg-2': '#111118',
        'bg-3': '#16161e',
        surface: '#1c1c26',
        accent: '#7effd4',
        'accent-blue': '#5b9cf6',
        muted: '#a0a6bd',
      },
      animation: {
        'rotate-ring': 'rotate-ring 14s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'rotate-ring': {
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
