module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  moment: {
    plugins: [
      'moment-strftime',
      'moment-fquarter'
    ]
  }
}
