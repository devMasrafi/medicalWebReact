/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'workSans': ['"Work Sans", sans-serif'],
      'yesevaOne': ['"Yeseva One", serif']
    },
    extend: {
      backgroundImage: {
        'heroImg': "url('./images/heroImg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'mainColor': '#1F2B6C',
        'secColor': '#159EEC',
        'AscColor': '#BFD2F8',
      },
    },
  },
  plugins: [],
}