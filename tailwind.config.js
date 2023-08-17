/** @type {import('tailwindcss').Config} */
export default {
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
}

