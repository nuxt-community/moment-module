module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    locales: ['es', 'de'],
    defaultLocale: 'de'
  }
}
