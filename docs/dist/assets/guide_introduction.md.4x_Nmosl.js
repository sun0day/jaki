import{_ as e,c as t,o as a,a1 as s}from"./chunks/framework.B4IhSLAB.js";const f=JSON.parse('{"title":"What is js-ast-ql ?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction.md","filePath":"guide/introduction.md"}'),r={name:"guide/introduction.md"},o=s('<h1 id="what-is-js-ast-ql" tabindex="-1">What is <code>js-ast-ql</code> ? <a class="header-anchor" href="#what-is-js-ast-ql" aria-label="Permalink to &quot;What is `js-ast-ql` ?&quot;">​</a></h1><p><code>js-ast-ql</code> is a library that aims to help developers efficiently query Javascript ast and manipulate source code. It follows the functional programming paradigm(pattern matching, pure function, immutable data, etc...) which makes it pretty easy to use.</p><p>All ast nodes returned by <code>js-ast-ql</code> APIs are in <a href="https://github.com/estree/estree" target="_blank" rel="noreferrer">ESTree-compatible</a> form. These ast nodes originally generated by <a href="https://github.com/acornjs/acorn" target="_blank" rel="noreferrer">acorn</a>(a tiny, fast JavaScript parser). Parallelizing fast ast parsing and fast file reading makes it possible to parse and query tons of Javascript files in seconds. See <a href="./.html">benchmark</a> for more details.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Currently, <code>js-ast-ql</code> focuses on implementing ast query APIs, code shift and other advanced APIs will be added soon 🚀.</p></div>',4),i=[o];function n(c,l,d,p,h,m){return a(),t("div",null,i)}const _=e(r,[["render",n]]);export{f as __pageData,_ as default};
