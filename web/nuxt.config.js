module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nekolog-web',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/vuetify'
  ],
  mode: 'spa',
  env: {
    apiKey: "AIzaSyCjdTSwCsKAw0Hb8eHXqUz14aH-G5hszOA",
    authDomain: "nekolog-a8b2a.firebaseapp.com",
    databaseURL: "https://nekolog-a8b2a.firebaseio.com",
    projectId: "nekolog-a8b2a",
    storageBucket: "nekolog-a8b2a.appspot.com",
    messagingSenderId: "734137811077"
  },
  vuetify: {
    theme: {
      primary: "#FFC107",
      secondary: "#F57C00",
      accent: "#1E88E5",
      error: "#B71C1C",
      warning: "#9C27B0",
      info: "#CDDC39",
      success: "#66BB6A"
    }
  }

}
