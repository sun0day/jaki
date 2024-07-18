import { describe, expect, it } from 'vitest'
import type { Equal, Expect, ExpectFalse } from '@types'
import { P, extend } from '../src'

describe('test pattern', () => {
  it('extends ts-pattern', () => {
    const JP = extend(P, {
      x: () => 1,
      y: (v: string) => v,
    })

    // @ts-expect-error test P.x
    expect(P.x).toBeUndefined()
    expect(JP._).toBe(P._)
    expect(JP.x()).toBe(1)
    expect(JP.y('')).toBe('')

    type JPType = typeof JP
    type cases = [
      ExpectFalse<'x' extends typeof P ? true : false>,
      Expect<Equal<JPType['x'], () => number>>,
      Expect<Equal<JPType['y'], (v: string) => string>>,
    ]
  })

  it('extends twice', () => {
    const JP = extend(P, {
      x: () => 1,
      y: (v: string) => v,
    })
    const nextJP = extend(JP, {
      z: () => false,
    })

    // @ts-expect-error test JP.z
    expect(JP.z).toBeUndefined()
    expect(nextJP).not.toBe(JP)
    expect(nextJP._).toBe(JP._)
    expect(nextJP.x()).toBe(1)
    expect(nextJP.y('')).toBe('')
    expect(nextJP.z()).toBeFalsy()

    type NextJP = typeof nextJP
    type cases = [
      Expect<Equal<NextJP['x'], () => number>>,
      Expect<Equal<NextJP['y'], (v: string) => string>>,
      Expect<Equal<NextJP['z'], () => boolean>>,
    ]
  })
})
