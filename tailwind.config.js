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
        background: "var(--background)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
      },
      backgroundImage: {
        primaryGradient: "var(--primary-gradient)",
      },
      fontFamily: {
        sans: ["var(--font-josefin)", "sans-serif"],
        display: ["var(--font-cinzel)", "serif"],
      },
      boxShadow: {
        default: "var(--default-shadow)",
        primary: "var(--primary-shadow)",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
