/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0B',
        secondary: '#61F2C2',
        textColor: '#FFFBFF',
        effectsColor: '#F24C00',
        backgroundFilter: 'rgba(0, 0, 0, 0.7)',
        cardsColor: 'rgba(255, 255, 255, 0.2)'
      },
      backgroundImage: {
        'backgroundImage': "url('../src/assets/bg-image.jpg')"
      },
      height:{
        'heightFull': 'calc(100vh - 4.7em)'
      }
    },
  },
  plugins: [],
}

