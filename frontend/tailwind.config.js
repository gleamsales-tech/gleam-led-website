/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#0ea5e9',
          foreground: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
