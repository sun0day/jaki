# What is `js-ast-ql` ?

`js-ast-ql` is a library that aims to help developers efficiently query Javascript ast and manipulate source code.

## Design Pattern

`js-ast-ql` follows the functional programming paradigm(pattern matching, pure function, immutable data, etc...) which makes it pretty easy to use.

## Code Parsing

Ideally, `js-ast-ql` is suitable for all [ESTree-compatible](https://github.com/estree/estree) asts. There is no restriction on the parser as long as it generates the `ESTree-compatible` ast. `js-ast-ql` recommends to use [acorn](https://github.com/acornjs/acorn) since it's tiny and fast.

## Built-in Ast Graph

## High Performance

Parallelizing fast ast parsing and fast file reading makes it possible to parse and query tons of Javascript files in seconds. See [benchmark]() for more details.

## Type Safe

`js-ast-ql` does a lot work on making APIs more intuitive and safer. It's very friendly to intelligent type inference.

## Highly composable

`js-ast-ql` cares about your disk spaces. It's divided into multiple isolated sub-packages. Install them when you need them.

|package|version|description|
|----|----|------|
|`js-ast-ql`|


## Code Shift & Advanced Add-ons

::: info
Currently, `js-ast-ql` focuses on implementing ast query APIs, code shift and other advanced APIs will be added soon :rocket:.
:::
