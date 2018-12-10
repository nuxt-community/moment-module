const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  dev: false,
  modules: [
    ['@@', {
      locales: ['fa', 'de'],
      defaultLocale: 'de'
    }]
  ]
}
