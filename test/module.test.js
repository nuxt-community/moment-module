const { Nuxt, Builder } = require('nuxt-edge/lib')
// const request = require('request-promise-native')

const config = require('./fixture/nuxt.config')

const url = path => `http://localhost:3000${path}`
// const get = path => request(url(path))

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(config)
    process.env.NODE_ENV = 'production'
    await new Builder(nuxt).build()
    await nuxt.listen(3000)
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('moment plugin works', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$moment).toBeDefined()
  })

  test('defined locales are set', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$moment.locales()).toEqual(['en', 'fa'])
  })
})
