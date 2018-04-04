# @nuxtjs/moment
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/moment/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/moment)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/moment.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/moment)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/moment-module.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/moment-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/moment-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/moment-module)
[![Dependencies](https://david-dm.org/nuxt-community/moment-module/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/moment-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

Easily remove unused Moment.js locales in Nuxt.js projects using [moment-locales-webpack-plugin](https://github.com/iamakulov/moment-locales-webpack-plugin).

<div align="center">
  <img src="./assets/img1.png" width="600px">
</div>

## Usage

`yarn add moment @nuxtjs/moment` OR `npm i moment @nuxtjs/moment`

Add `@nuxtjs/moment` to `modules` section of `nuxt.config.js`

To strip all locales except “en”:

```js
{
  modules: [
    '@nuxtjs/moment',
 ]
}
```

Or to strip all locales except “en”, “es-us” and “fa“

```js
{
  modules: [
    ['@nuxtjs/moment', ['es-us', 'fa']]
 ]
}
```

**Note:** “en” is built into Moment and can’t be removed)

**Note:** You can also directly pass [moment-locales-webpack-plugin](https://github.com/iamakulov/moment-locales-webpack-plugin) options as the second (options) parameter.

## Development

- Clone this repository
- Install dependnecies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Thanks [Ivan Akulov](https://github.com/iamakulov) for making this awesome webpack plugin. 💖

Copyright (c) Nuxt Community.
