/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#000000",
        secondary : "#333333",
        accent: "#555555",
        highlight: "#ff5500"
      }
    },
  },
  plugins: [],
}

