/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#D87D4A",
          light: "#FBAF85",
        },
        dark: {
          DEFAULT: "#101010",
          light: "#F1F1F1",
          offwhite: "#FAFAFA",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
