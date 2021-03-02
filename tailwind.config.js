module.exports = {
  purge: [
    './src/**/*.{tsx,ts,js,jsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    "fontFamily": {
      "secondary": ['Quattrocento']
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '8rem',
        }
      },
      colors: {
        "bg-primary": "#0A0B1A",
        "bg-card": "#111229"
      }
    },
  },
  variants: {
    extend: {
      margin: [['last']]
    },
  },
  plugins: [],
}
