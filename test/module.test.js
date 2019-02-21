jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const getPort = require('get-port')

const config = require('./fixture/nuxt.config')

let nuxt, port

const url = path => `http://localhost:${port}${path}`

const setupNuxt = async (config) => {
  const nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  port = await getPort()
  await nuxt.listen(port)

  return nuxt
}

describe('module', () => {
  test('plugin works', async () => {
    nuxt = await setupNuxt(config)

    const window = await nuxt.renderAndGetWindow(url('/'))
    const month = window.document.querySelector('p').textContent

    expect(window.$nuxt.$moment).toBeDefined()
    expect(window.$nuxt.$moment.locales()).toEqual(['en'])
    expect(month).toBe('December')
  })

  test('array values', async () => {
    nuxt = await setupNuxt({
      ...config,
      modules: [
        [require('../'), ['fa']]
      ]
    })

    const window = await nuxt.renderAndGetWindow(url('/'))
    const month = window.document.querySelector('p').textContent

    expect(window.$nuxt.$moment).toBeDefined()
    expect(window.$nuxt.$moment.locales()).toEqual(['en', 'fa'])
    expect(month).toBe('December')
  })

  test('object values', async () => {
    nuxt = await setupNuxt({
      ...config,
      moment: {
        locales: ['fa', 'de'],
        defaultLocale: 'de'
      }
    })

    const window = await nuxt.renderAndGetWindow(url('/'))
    const month = window.document.querySelector('p').textContent

    expect(window.$nuxt.$moment).toBeDefined()
    expect(window.$nuxt.$moment.locales()).toEqual(['en', 'fa', 'de'])
    expect(month).toBe('Dezember')
  })

  test('plugin disabled', async () => {
    nuxt = await setupNuxt({
      ...config,
      moment: {
        plugin: false
      }
    })

    const window = await nuxt.renderAndGetWindow(url('/disabled'))
    const div = window.document.querySelector('div').textContent

    expect(window.$nuxt.$moment).toBeUndefined()
    expect(div).toContain('Works!')
  })

  afterEach(async () => {
    if (nuxt) {
      await nuxt.close()
    }
  })
})
