/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./public/index.html", "./public/script.js"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        "background-light": "#f8f5f5",
        "background-dark": "#230f0f",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

