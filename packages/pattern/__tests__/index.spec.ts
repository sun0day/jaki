import { describe, expect, it } from 'vitest'
import type { Equal, Expect } from '@types'
import type { NumberPattern, StringPattern } from 'ts-pattern/dist/types/Pattern'
import { JP } from '../src'

describe('test pattern', () => {
  it('jP should inherit ts-pattern', () => {
    expect(JP._).toBeDefined()
    expect(JP.string).toBeDefined()

    type JPT = typeof JP
    type cases = [
      Expect<Equal<JPT['string'], StringPattern>>,
      Expect<Equal<JPT['number'], NumberPattern>>,
    ]
  })

  it('extends JP', () => {
    const newJP = JP.define({
      x: () => 1,
      y: (v: string) => v,
    })

    expect(JP.x).toBeUndefined()
    expect(newJP).not.toBe(JP)
    expect(newJP._).toBe(JP._)
    expect(newJP.define).toBeDefined()
    expect(newJP.x()).toBe(1)
    expect(newJP.y('')).toBe('')

    type NewJP = typeof newJP
    type cases = [
      Expect<Equal<NewJP['x'], () => number>>,
      Expect<Equal<NewJP['y'], (v: string) => string>>,
    ]
  })
})
