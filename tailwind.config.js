const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: 'class',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      ...colors,
      current: 'currentColor',
      orange: {
        ...colors.orange,
        lighten: '#f2f2ee',
        DEFAULT: '#FF6F59',
        dark: '#ff4d32',
      },
      green: {
        ...colors.green,
        DEFAULT: '#43AA8B',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        current: 'currentColor',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
        valid: colors.green[500],
        error: colors.red[500],
        background: colors.gray['100'],
        primary: colors.orange['DEFAULT'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'green',
            a: {
              color: 'red',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
