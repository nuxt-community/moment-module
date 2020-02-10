module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    defaultTimezone: 'America/Los_Angeles'
  }
}
