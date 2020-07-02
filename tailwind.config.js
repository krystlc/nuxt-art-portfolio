/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'dark-lava': '#463F3A',
        'middle-grey': '#8a817c',
        'pale-silver': '#BCB8B1',
        alabaster: '#F4F3EE',
        melon: '#E0AFA0',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
