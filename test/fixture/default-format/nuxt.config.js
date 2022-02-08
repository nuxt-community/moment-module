module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    defaultFormat: '[test] YYYY-MM-DD'
  }
}
