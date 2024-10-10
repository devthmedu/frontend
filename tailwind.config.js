/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#4F46E5',
        },
        dark: {
          background: '#1F2937',
          text: '#ffffff',
          primary: '#A78BFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite,
  ],
};
