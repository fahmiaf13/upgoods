module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darker: {
          100: "#393E46",
          200: "#5C636E",
        },
        whiter: "#F3F3F3",
        sun: "#F8B500",
        tomato: "#FB3640",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
