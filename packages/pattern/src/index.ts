import { P, match } from 'ts-pattern'

// type JSAstPatternCreator = (params?: any) => any

// type JSAstPatternDefineTuple = [string, JSAstPatternCreator]

// type JSAstPatternDefineObject<T extends JSAstPatternDefineTuple> = { [key in T[0]]: T[1] }

// type JSAstPatternDefineMerge<A extends JSAstPatternDefineTuple, B = object> = {
//   [K in keyof JSAstPatternDefineObject<A> | keyof B]:
//   K extends keyof B ? B[K] :
//     K extends keyof JSAstPatternDefineObject<A> ? JSAstPatternDefineObject<A>[K] : never;
// }

// type JSAstPatternRecord<Defines extends readonly JSAstPatternDefineTuple[]> =
//   Defines extends [infer D, ...infer Rest]
//     ? D extends JSAstPatternDefineTuple
//       ? JSAstPatternDefineMerge<D, Rest extends readonly JSAstPatternDefineTuple[] ? JSAstPatternRecord<Rest> : object>
//       : object
//     : object

type JSAstPatternDefine = Record<string, (params?: any) => any>

type JSAstPattern = typeof P & {
  define: <Defines extends JSAstPatternDefine>(defines: Defines) => Defines & JSAstPattern
  [key: string | symbol]: unknown
}

function createJP(obj: any = {}) {
  return new Proxy(obj as JSAstPattern, {
    get: (obj, key) => {
      return match(key).returnType<JSAstPattern[keyof JSAstPattern]>().with(
        'define',
        () => {
          return (definition: JSAstPatternDefine) => {
            return createJP(Object.keys(definition).reduce((newObj, key) => ({ ...newObj, [key]: definition[key] }), {}))
          }
        },
      ).with(
        P._,
        key => obj[key] ?? P[key],
      ).exhaustive()
    },
  })
}

export const JP = createJP()
