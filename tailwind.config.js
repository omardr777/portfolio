/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        primary: "#121212",
        secondary: "#888888",
        tertiary: "#1e1e1e",
        "black-100": "#181818",
        "black-200": "#0f0f0f",
        "white-100": "#e0e0e0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
