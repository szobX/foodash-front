const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jif",
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      orange: {
        ...colors.orange,
        lighten: "#f2f2ee",
        DEFAULT: "#FF6F59",
      },
      green: {
        ...colors.green,
        DEFAULT: "#43AA8B",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        current: "currentColor",

        valid: colors.green[500],
        error: colors.red[500],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
