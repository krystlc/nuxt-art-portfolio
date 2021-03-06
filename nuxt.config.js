const defaultDescription = "Loren Valle's Art portfolio"

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - Loren Valle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: defaultDescription,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Loren Valle',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: defaultDescription,
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Loren Valle',
      },
    ],
    script: [
      {
        src: '//kit.fontawesome.com/bc54cd562b.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '//fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/renderRichText'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '~/modules/getContent',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    // Doc: https://www.npmjs.com/package/@nuxtjs/google-gtag
    '@nuxtjs/google-gtag',
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [],
  },
  generate: {
    subFolders: false,
    fallback: true,
    routes: () => {
      const pages = require('./static/data/page.json')
        .map((page) => `${page.fields.slug}`)
        .filter((page) => page !== 'home')
      const collections = require('./static/data/collection.json').map(
        (collection) => `/portfolio/${collection.fields.slug}`
      )
      const landingPages = require('./static/data/landingPage.json').map(
        (landingPage) => `/landing/${landingPage.fields.slug}`
      )
      return [...pages, ...collections, ...landingPages]
    },
  },
  'google-gtag': {
    id: 'UA-11900205-14',
    config: {
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['lorenvalleart.com'],
      },
    },
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
  },
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
  },
}
