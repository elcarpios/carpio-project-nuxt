const axios = require('axios');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin').default;

const pkg = require('./package')

module.exports = {
  vue: {
    config: {
      devtools: true
    }
  },
  mode: 'universal',

  /*
  ** Options for the static generation
  */
  generate: {
    routes: function () {
      return axios.get('https://crp-api.herokuapp.com/api')
        .then(posts => [{ route: '/', payload: posts.data }].concat(posts.data.map(post => ({ route: `/post/${post._id}`, payload: post }))))
        .catch(error => console.log(error));
    },
    fallback: true
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:500' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/essentials.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/axios'],
    ['nuxt-imagemin', {
      externalImages: {
        context: './assets',
        sources: glob.sync('./assets/images/*.{jpg,jpeg,png}'),
        destination: './assets/',
      }
    }]
  ],

  /*
  ** Axios config
  */
  axios: {
    baseURL: 'https://crp-api.herokuapp.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.plugins.push(new CopyWebpackPlugin([
        {
          from: './assets/images',
          to: 'static/images',
          toType: 'dir'
        }
      ]));
    },

  }
}
