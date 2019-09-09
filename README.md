# @nuxtjs/moment

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Efficient Moment.js integration for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

<p align="center"><img src="./assets/img1.png" width="600px"></p>

## Features

- Remove unused Moment.js locales using [moment-locales-webpack-plugin](https://github.com/iamakulov/moment-locales-webpack-plugin) for much less bundle size.
- Inject `$moment` to the context everywhere.

## Setup

Install `@nuxtjs/moment` to your project:

```bash
yarn add --dev @nuxtjs/moment
# OR
npm i --save-dev @nuxtjs/moment
```

- Add `@nuxtjs/moment` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    '@nuxtjs/moment'
  ]
}
```

**NOTE:** If you are using Nuxt older than **v2.9** you have to install module as a `dependency` (No `--dev` or `--save-dev` flags) and also use `modules` section in `nuxt.config.js` instead of `buildModules`.

## Configuration

To strip all locales except `en`:

```js
export default {
  modules: [
    '@nuxtjs/moment'
  ]
}
```

To strip all locales except `en`, `fr` and `fa`:

```js
export default {
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['fa']
  }
}
```

**Note:** `en` is built into Moment and can’t be removed!

### Set default locale

You can set a default locale via the `defaultLocale` option. It must be included
int the locales you keep (or `'en'`) and will only work when using the plugin option.

```js
export default {
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    defaultLocale: 'de'
    locales: ['de']
  }
}
```

### Disable plugin

This module also registers a plugin to include all needed locales as well as injecting moment as `$moment` to Vue context. You can disable this behaviour using `plugin: false`.

```js
export default {
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    plugin: false
  }
}
```


### Using inside templates

Instead of a filter, you can easily use `$moment` service from templates (and yes, it is reactive!).

```html
<div v-text="$moment(...)"></div>
<div>{{ $moment(...) }}</div>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Thanks [Ivan Akulov](https://github.com/iamakulov) for making this awesome webpack plugin. 💖

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/moment.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/moment
[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/moment/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/moment
[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/moment-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/moment-module
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/moment-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/moment-module
[david-dm-src]: https://david-dm.org/nuxt-community/moment-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/moment-module
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
