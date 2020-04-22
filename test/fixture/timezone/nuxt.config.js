module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    timezone: {
      matchZones: 'America/Los_Angeles'
    }
  }
}
