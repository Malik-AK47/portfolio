/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // enables dark mode manually via a 'dark' class
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0D1117",
        bgSecondary: "#161B22",
        accent: "#00C2FF",
        accent2: "#9C27B0",
        textPrimary: "#FFFFFF",
        textSecondary: "#B0B0B0",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
