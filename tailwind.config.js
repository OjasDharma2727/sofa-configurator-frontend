/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#4A4238",
        brandRed: "#EF4040",
        brandText: "#5E5A54",
        brandBg: "#FBF7F2",
      },
    },
  },
  plugins: [],
};
