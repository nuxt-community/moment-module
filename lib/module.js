const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = function module (moduleOptions) {
  if (!moduleOptions) {
    moduleOptions = {}
  }

  if (Array.isArray(moduleOptions)) {
    moduleOptions = {
      localesToKeep: moduleOptions
    }
  }

  this.extendBuild(config => {
    config.plugins.push(new MomentLocalesPlugin(moduleOptions))
  })
}
