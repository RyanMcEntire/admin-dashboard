/** @type {import('tailwindcss').Config} */


const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      sky: colors.sky,
      yellow: colors.yellow,
      rose: colors.rose,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
    },
    plugins: [],
  },
};
