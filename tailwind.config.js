/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
      },

      colors: {
        defaultColor: "#773820"
      },

      screens: {
        'sm': {'min': '320px', 'max': '480px'},
      }
    },
  },
  plugins: [],
})