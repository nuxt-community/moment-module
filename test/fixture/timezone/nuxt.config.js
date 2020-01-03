module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    timezone: {
      matchZones: 'America/Los_Angeles'
    }
  }
}
