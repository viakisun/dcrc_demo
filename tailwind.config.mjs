const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
        heading: ["var(--font-orbitron)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'darc-primary': '#0A4D3C',
        'darc-secondary': '#1E88E5',
        'darc-accent': '#FF6B35',
        'darc-success': '#4CAF50',
        'darc-warning': '#FFC107',
        'darc-danger': '#F44336',
        'darc-cyan': '#00ffff',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
