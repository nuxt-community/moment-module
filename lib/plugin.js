import moment from 'moment'

<%= options.locales.map(l => `import 'moment/locale/${l}'`).join('\n') %>

<%= options.plugins.map(p => `import '${p}'`).join('\n') %>

<% if(options.defaultLocale) { %>moment.locale('<%= options.defaultLocale %>')<% } %>

<% if(options.defaultTimezone) { %>moment.tz.setDefault('<%= options.defaultTimezone %>')<% } %>

<% if(options.defaultFormat) { %>moment.defaultFormat = '<%= options.defaultFormat %>'<% } %>

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
