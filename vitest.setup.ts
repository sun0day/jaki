import { afterAll, beforeAll } from 'vitest'

beforeAll(async () => {
  globalThis.TMP = null
})

afterAll(() => {
})
