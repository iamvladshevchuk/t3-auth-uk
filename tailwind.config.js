/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: {
        900: "#02050C",
        800: "#0B1120",
        700: "#0B1427"
      },
      primary: {
        900: "#771FE8"
      },
      white: {
        100: "#F2EAFF",
        600: "#75688A"
      },
      transparent: "transparent"
    }
  },
  plugins: [],
};
