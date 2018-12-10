import moment from 'moment'

<%= options.locales.map(l => `import 'moment/locale/${l}'`).join('\n') %>

<% if(options.defaultLocale) { %>moment.locale('<%= options.defaultLocale %>')<% } %>

export default (ctx, inject) => {
  inject('moment', moment)
}
