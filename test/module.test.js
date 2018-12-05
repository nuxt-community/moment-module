jest.setTimeout(120000)

const { Nuxt, Builder } = require('nuxt-edge')
const config = require('./fixture/nuxt.config')

const url = path => `http://localhost:3000${path}`

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(3000)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('moment plugin works', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$moment).toBeDefined()

    const month = window.document.querySelector('p').textContent
    expect(month).toBe('Dezember')
  })

  test('defined locales are set', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$moment.locales()).toEqual(['en', 'fa', 'de'])
  })
})
