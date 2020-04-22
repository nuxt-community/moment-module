module.exports = {
  rootDir: __dirname,
  buildModules: [
    [require('../../../'), ['es', 'de']]
  ],
  moment: {
    defaultLocale: 'de'
  }
}
