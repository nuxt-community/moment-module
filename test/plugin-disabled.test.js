const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')

describe('plugin disabled', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'plugin-disabled'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('moment should be undefined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$moment).toBeUndefined()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
