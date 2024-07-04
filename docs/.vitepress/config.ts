import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "js-ast-ql",
  description: "Fast Javascript ast library.",
  base: "/js-ast-ql/dist",
  outDir: "./dist",
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/parse' },
      { text: 'Roadmap', link: '/roadmap' }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          link: "/guide/introduction",
        },
        {
          text: "Quick Start",
          link: "/guide/quick-start",
        },
      ],
      "/api/": [
        {
          text: "ESTree",
          link: "/api/estree",
        },
        {
          text: "parse",
          link: "/api/parse"
        },
        {
          text: "Query",
          items: [{
            text: "Ast",
            link: "/api/ast"
          }, {
            text: "AstNode",
            collapsed: true,
            items: [{
              text: "VariableDeclaration",
              link: "/api/variable-declaration"
            }]
          }]
        }, 
        {
          text: "Shift",
          items: [{
            text: "shift",
            link: "/api/shift"
          }]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sun0day/js-ast-ql' }
    ]
  }
})
