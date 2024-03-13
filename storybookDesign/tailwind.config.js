module.exports = {
  content: ['./src/components/**/*.{tsx,js}'],
  theme: {
    extend: {},
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')]
};
