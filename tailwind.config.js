const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      wide: '.015em',
    },
    extend: {
      colors: {
        orange: colors.orange,
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {
    display: ['group-hover'],
    position: ({ after }) => after(['group-hover']),
    border: ({ after }) => after(['hover']),
    opacity: ({ after }) => after(['disabled']),
    backgroundColor: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
    outline: ['focus'],
  },
  plugins: [],
  corePlugins: {
    outline: false,
  },
}
