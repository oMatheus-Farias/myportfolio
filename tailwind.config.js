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
        backgroundFilter: 'rgba(0, 0, 0, 0.7)'
      },
      backgroundImage: {
        'backgroundImage': "url('../src/assets/bg-image.jpg')"
      },
    },
  },
  plugins: [],
}

