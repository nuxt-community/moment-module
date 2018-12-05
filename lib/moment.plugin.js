import Vue from 'vue'
import moment from 'moment'

<%= options.locales.map(l => `import 'moment/locale/${l}'`).join('\n') %>

export default (ctx, inject) => {
  inject('moment', moment)
}
