module.exports = {
  rootDir: __dirname,
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
