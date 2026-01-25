const { Ovo } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lighHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],  
      },
    },
  },
  plugins: [],
}

