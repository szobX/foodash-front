const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        current: "currentColor",
        org: "#ee6c4d",
        "org-100": "#fef2ef",
      },
    },
  },
  plugins: [],
};
