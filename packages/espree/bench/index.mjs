import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Bench } from 'tinybench'
import * as acorn from 'acorn'
import * as walk from 'acorn-walk'

const bench = new Bench({ time: 1500 })

const root = join(process.cwd(), 'bench/fixtures')

const read10KCodeSync = () => readFileSync(join(root, './AnimationAction.js'))
const read100KCodeSync = () => readFileSync(join(root, './axios.js'))
const read1MCodeSync = () => readFileSync(join(root, './three.js'))
const read10KCode = () => readFile(join(root, './AnimationAction.js'))
const read100KCode = () => readFile(join(root, './axios.js'))
const read1MCode = () => readFile(join(root, './three.js'))

function walkVar(ast) {
  const nodes = []

  walk.simple(ast, {
    VariableDeclaration(node) {
      // nodes.push(node)
    },
  })
  walk.simple(ast, {
    IfStatement(node) {
      // nodes.push(node)
    },
  })
  return nodes
}

bench
  .add('parse 10k file and query ast synchronously', () => {
    const code = read10KCodeSync()
    const ast = acorn.parse(code, { sourceType: 'module' })
    walkVar(ast)
  })
  .add('parse 100k file and query ast synchronously', () => {
    const code = read100KCodeSync()
    const ast = acorn.parse(code, { sourceType: 'module' })
    walkVar(ast)
  })
  .add('parse 1M file and query ast synchronously', () => {
    const code = read1MCodeSync()
    const ast = acorn.parse(code, { sourceType: 'module' })
    walkVar(ast)
  })
  .add('parse 10k file and query ast asynchronously', async () => {
    const code = await read10KCode()
    const ast = acorn.parse(code, { sourceType: 'module' })
    walkVar(ast)
  })
  .add('parse 100k file and query ast asynchronously', async () => {
    const code = await read100KCode()
    const ast = acorn.parse(code, { sourceType: 'module' })
    walkVar(ast)
  })
  .add('parse 1M file and query ast asynchronously', async () => {
    const code = await read1MCode()
    const ast = acorn.parse(code, { sourceType: 'module' })
    walkVar(ast)
  })
  //   let ast = babelParse(content, {babelOptions: {sourceType: "module", babelrc: false,
  //     configFile: false,}})
  //   let nodes = []
  //   walk(ast, {
  //     enter(node) {
  //       if(node.type === 'VariableDeclaration') {
  //         nodes.push(node)
  //       }
  //     }
  //   })
  // })

await bench.warmup() // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run()

console.table(bench.table())
