const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './dev/**/*.{js,vue,ts}',
    './src/lib-components/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      wide: '.015em',
    },
    extend: {
      colors: {
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        'card-background': 'var(--color-card-background)',
        background: 'var(--color-background)',
        'app-bar-background': 'var(--color-app-bar-background)',
        icon: 'var(--color-icon)',
        'icon-hover': 'var(--color-icon-hover)',
        current: 'var(--color-current)',
        border: 'var(--color-border)',
      },
      transitionProperty: {
        width: 'width',
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
