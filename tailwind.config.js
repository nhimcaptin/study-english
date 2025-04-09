/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ["class"],
  content: ["./**/*.{js,ts,jsx,tsx}"], 
  corePlugins: {
    preflight: false,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
