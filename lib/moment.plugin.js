import Vue from 'vue'
import moment from 'moment'

<%= options.locales.map(l => `import 'moment/locale/${l}'`).join('\n') %>

if (!Vue.prototype.hasOwnProperty('$moment')) {
  Object.defineProperty(Vue.prototype, '$moment', {
    get() {
      return moment
    }
  })
}

