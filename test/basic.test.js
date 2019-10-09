const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'basic'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('moment should be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$moment).toBeDefined()
    expect(window.$nuxt.$moment.locales()).toEqual(['en'])
  })

  test('render month', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.document.querySelector('p').textContent).toBe('December')
  })

  test('render year', async () => {
    const html = await get('/')
    expect(html).toContain('1995')
  })
})
