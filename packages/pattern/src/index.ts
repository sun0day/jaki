import type { P } from 'ts-pattern'

type JSAstPatternDefine = Record<string | symbol, (params?: any) => any>

export function extend<PT extends typeof P, D extends JSAstPatternDefine>(pt: PT, define: D) {
  return new Proxy({} as PT & D, {
    get: (obj, key) => {
      return define[key] ?? pt[key]
    },
  })
}

export * from 'ts-pattern'
