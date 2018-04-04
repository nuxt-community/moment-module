const path = require('path')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

const defaults = {
  locales: [],
  plugin: true
}

module.exports = function momentModule (moduleOptions) {
  if (Array.isArray(moduleOptions)) {
    moduleOptions = {
      locales: moduleOptions
    }
  }

  const options = Object.assign({}, defaults, moduleOptions, this.options.moment)

  this.extendBuild(config => {
    config.plugins.push(new MomentLocalesPlugin({
      localesToKeep: options.locales
    }))
  })

  if (options.plugin) {
    this.addPlugin({
      src: path.resolve(__dirname, 'moment.plugin.js'),
      fileName: 'moment.js',
      options
    })
  }
}
