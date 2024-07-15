# Quick start

```typescript
import { parse, AstType, AstKind } from 'jaki'
import { shift, act } from 'jaki.shift'

// init ast from source code 
const code = `let a = 1;let b = 2`
const ast = parse(code)

// query ast nodes
const node = ast.query({
  type: AstType.VariableDeclaration,
  kind: AstKind.Let,
  id: "a"
})[0]

/* log ast nodes' primitive json
 * {
 *   "type": "VariableDeclaration",
 *   "kind": "let",
 *   "declarations": [
 *     {
 *       "type": "VariableDeclarator",
 *       "id": {
 *         "type": "Identifier",
 *         "name": "a"
 *         ...
 *       },
 *       "init": {
 *         "type": "Literal",
 *         "value": 1,
 *         "raw": "1"
 *         ...
 *       }
 *     }
 *   ]
 *   ...
 * }
 */
console.log(node.json())

// record how to modify the ast node
const astActions = act(node).id("newA").kind(AstKind.Const)

/* 
 * apply ast changes to source code,
 * new code would be `const newA = 1;let b = 2`
 */
const newCode = shift(code, astActions)

```
