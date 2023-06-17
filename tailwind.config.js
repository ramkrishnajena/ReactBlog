/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screens: {
      sm: "320px",
      lg: "600px",
    },
    extend: {
      colors: {
        primary: "#645CAA",
        secondary: "#A084CA",
        third: "#BFACE0",
        fourth: "#EBC7E8",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
