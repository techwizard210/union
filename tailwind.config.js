/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      navSize: "16px"
    },
    colors: {
      navColor: "#78716c",
    },
    extend: {
    },
  },
  plugins: [],
});
