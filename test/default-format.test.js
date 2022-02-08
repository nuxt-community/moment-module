const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('format', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'default-format'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('test 2014-06-01')
  })
})
