module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    defaultTimezone: 'America/Los_Angeles'
  }
}
