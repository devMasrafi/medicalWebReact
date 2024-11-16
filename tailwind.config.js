/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      workSans: ['"Work Sans", sans-serif'],
      yesevaOne: ['"Yeseva One", serif'],
    },
    extend: {
      backgroundImage: {
        heroImg: "url('./images/heroImg.svg')",
        aboutHeroImg: "url('./images/AboutHeroImg.jpg')",
        aboutMessageBg: "url('./images/AboutUserMessage.png')",
        ourServiceBg: "url('./images/ourServiceImg/ourService.png')",
        ourServiceBgOverlay:
          "url('./images/ourServiceImg/ourServiceOverlay.svg')",
      },
      colors: {
        mainColor: "#1F2B6C",
        secColor: "#159EEC",
        AscColor: "#BFD2F8",
      },
    },
  },
  plugins: [],
};
