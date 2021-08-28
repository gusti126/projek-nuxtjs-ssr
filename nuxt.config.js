export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HMI Komfaktek melangkah maju',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Himpunan Mahasiswa Islam Komisariat Fakultas Teknik Cabang Ciputat',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content:
          'terbinanya insan akademis, pencipta, pengabdi yang bernafaskan Islam, dan bertangung jawab atas terwujudnya masyarakat adil makmur yang diridhoi Allah SWT ',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'HMI KOMFAKTEK | Melangkah Maju',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo-komfaktek.png' },
      {
        rel: 'shortcut icon',
        hid: 'shortcut-icon',
        type: 'image/png',
        href: '/logo-komfaktek.png',
      },
      {
        rel: 'apple-touch-icon',
        hid: 'apple-touch-icon',
        type: 'image/png',
        href: '/logo-komfaktek.png',
      },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 60 * 60 * 24 * 30,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'login', method: 'post' },
          logout: false,
          user: { url: 'profile', method: 'get' },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://komfaktek.gustirizkia.my.id/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
