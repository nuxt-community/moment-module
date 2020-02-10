const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('default-timezone', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'default-timezone'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('5am PDT')
  })
})
