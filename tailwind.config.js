// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        backgroundLight: "var(--backgroundLight)",
      },
      backgroundImage: {
        primaryGradient: "var(--primaryGradient)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        default: "var(--defaultShadow)",
      },
      screen: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
