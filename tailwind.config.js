/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    colors: {
      primary: "#E5E5CC",
      secondary: "#3B4434",
      black: "#1A1A1A",
      white: "#E6E6E6",
    },
    fontFamily: {
      sans: ["Switzer", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
