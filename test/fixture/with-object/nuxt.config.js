module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    locales: ['es', 'de'],
    defaultLocale: 'de'
  }
}
