module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Helvetica'],
      mono: ['JetBrains Mono'],
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
