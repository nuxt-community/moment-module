const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')

describe('plugins', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'plugins'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render moment-strftime', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.document.querySelector('p').textContent).toBe('12/25/1995')
  })

  test('render moment-fquarter', async () => {
    const html = await get('/')
    expect(html).toContain('Q3 1995/96')
  })
})
