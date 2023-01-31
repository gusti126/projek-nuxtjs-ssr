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
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        itemprop: 'image',
        content:
          'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek1.822fb18.png',
      },
      {
        hid: 'image',
        name: 'image',
        itemprop: 'image',
        property: 'image',
        content:
          'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek1.822fb18.png',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        itemprop: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        itemprop: 'og:site_name',
        property: 'og:site_name',
        content:
          'Himpunan Mahasiswa Islam Komisariat Fakultas Teknik Cabang Ciputat',
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        itemprop: 'og:image:width',
        property: 'og:image:width',
        content: '300',
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        itemprop: 'og:image:height',
        property: 'og:image:height',
        content: '300',
      },
      {
        itemprop: 'width',
        content: '300',
      },
      {
        itemprop: 'height',
        content: '300',
      },
      {
        itemprop: 'image',
        name: 'image',
        content:
          'https://hmi-komfaktek.vercel.app/_nuxt/img/logo-komfaktek1.822fb18.png',
      },
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
  plugins: [{ src: './plugins/install', ssr: true }],

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
    'vue-currency-filter/nuxt',
    // Or if you have custom options...
    [
      'vue-currency-filter/nuxt',
      {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true,
        avoidEmptyDecimals: undefined,
      },
    ],

    // for multiple instance
    [
      'vue-currency-filter/nuxt',
      [
        {
          // default name 'currency'
          symbol: '$',
          thousandsSeparator: ',',
          fractionCount: 2,
          fractionSeparator: '.',
          symbolPosition: 'front',
          symbolSpacing: true,
          avoidEmptyDecimals: '##',
        },
        {
          // default name 'currency_2'
          name: 'currency_2',
          symbol: 'usd',
          thousandsSeparator: ' ',
          fractionCount: 2,
          fractionSeparator: '.',
          symbolPosition: 'front',
          symbolSpacing: false,
          avoidEmptyDecimals: '',
        },
      ],
    ],
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
    baseURL: 'https://komfaktek.kuakmedia.co/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compilerOptions: {
          // This option is highly recommended
          preserveWhitespace: false,
        },
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
}
