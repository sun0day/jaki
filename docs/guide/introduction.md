# What is `jaki` ?

`jaki` is a library designed to help developers analyze and manipulate source code by querying Javascript or Typescript ast efficiently.

## ESTree Parsing

Ideally, `jaki` is suitable for all [ESTree-compatible](https://github.com/estree/estree) asts. There is no restriction on the parser as long as it generates the `ESTree-compatible` ast. Even so, there are still some differences between `ESTree`s parsed by different parsers. `jaki` are mainly tested on [Espree](https://github.com/eslint/espree) and [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) for now and will be compatible with more parsers that can generate `ESTree-compatible` asts in the future.

All APIs' inputs and outputs are designed around `ESTree`. You can find `ESTree` type definitions [here](https://www.npmjs.com/package/@typescript-eslint/types?activeTab=code).

## Ast Matching

`jaki` uses [pattern matching](https://stackoverflow.com/questions/2502354/what-is-pattern-matching-in-functional-languages) to query ast nodes, which makes it pretty easy to use. It extends [ts-pattern](https://github.com/gvergnaud/ts-pattern) to [JP](), and provides two ways(**JSON matching** and **grammar matching**) to match ast nodes.

Let's say we want to search `VariableDeclaration` of `let foo = any_value;`. Compared with the traditional visitor pattern, the `jaki` method would be like:

```typescript
// visitor pattern
import * as espree from 'espree'
import * as walk from 'acorn-walk'

const ast = espree.parse(code)
const nodes = []
walk.simple(ast, {
  VariableDeclaration(node) {
    if(node.kind === 'let' &&
         node.declarations.length === 1 &&
           node.declarations[0].id.name === 'foo') {
      nodes.push(node)
    }
  }
})

```

```typescript
// jaki JSON matching
import * as espree from 'espree'
import { find, JP } from 'jaki'
const ast = espree.parse(code)
let nodes = find(
  ast,
  JP.VariableDeclaration({
    kind: 'let',
    declarations: [ { id: { name: 'foo' } } ]
  })
)

// jaki grammar matching
nodes = find(ast, JP.VariableDeclaration(`let foo = $(*);`))
```

## Built-in Ast Graph

In order to find target ast nodes based on other nodes more quickly, `jaki` internally maintains a `AstGraph` data structure which describes relationships(scope, reference, etc...) between ast nodes. `AstGraph` is progressively built by calling query APIs. In other words, `AstGraph`'s size depends on the ast nodes you visited. `AstGraph` reuses the visited ast nodes and stores their relationships in several `WeakMap`s, so you don't have to worry about its memory usage.

## High Performance

Parallelizing fast ast parsing and fast file reading makes it possible to parse and query tons of Javascript files in seconds. See [benchmark]() for more details.

## Type Safe

`jaki` does a lot work on making APIs more intuitive and safer. It's very friendly to intelligent type inference.

## Highly composable

`jaki` cares about your disk spaces. It's divided into multiple isolated sub-packages. Install them when you need them.

|package|version|description|
|----|----|------|
|`jaki`|

## Code Shift & Advanced Add-ons

::: info
Currently, `jaki` focuses on implementing ast query APIs, code shift and other advanced APIs will be added soon :rocket:.
:::
