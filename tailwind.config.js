/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      fontFamily: {
        bebas: "'Bebas Neue', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#FABE4C",
        title: "#363958",
        paragraph: "#3E3E3E",
      },
    },
  },
  plugins: [],
};
