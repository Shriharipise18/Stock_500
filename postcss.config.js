export default {
  plugins: {
    'postcss-nesting': {},  // or 'postcss-nested'
    '@tailwindcss/postcss': {
      tailwindcss: {},  // This is the new way to include Tailwind
    },
    'autoprefixer': {},
  }
}