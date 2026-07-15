/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: "#3C5A5D",
        ink: "#0C1415",
        muted: "#707F81",
        surface: "#F6F6F6",
      },
    },
  },
  plugins: [],
}
