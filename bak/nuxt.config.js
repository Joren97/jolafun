const routerObject =
  process.env.NODE_ENV === 'test'
    ? {
      router: {
        base: '/projects/jolafun',
      },
    }
    : {};

export default {
  ...routerObject,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jolafun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description',
        content: 'Wij verhuren springkastelen en reuzespelen voor elke gelegenheid. Ontdek het aanbod op onze website!'
      },
      {
        hid: 'keywords', name: 'keywords',
        content: 'springkasteel, verhuur, huren, Geel, GEEL, springkastelen cools, geel, 2440, bbq, verjaardagsfeest, communiefeest, babyborrel, reuzespelen, 4 op een rij, mikado, jolafun'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'aos/dist/aos.css',
    '@/assets/scss/main.scss',
    '@/assets/scss/spacing.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/fontawesome", ssr: false },
    { src: "~/plugins/smoothscroll", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    [
      '@nuxtjs/recaptcha',
      {
        version: 3,
        siteKey: '6LdhomocAAAAAK-BUk3mRVDyVjAdrLk8frwof7j9',
      },
    ],
  ],
  axios: {
    baseURL: 'https://www.jolafun.be/wp-json',
    progress: false,
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'nl',
      name: "Jolafun",
      short_name: "Jolafun"
    },
    icon: {
      fileName: "app-icon.png"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
