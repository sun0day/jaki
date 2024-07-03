import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "js-ast-ql",
  description: "Fast Javascript ast library.",
  base: "/js-ast-ql/dist",
  outDir: "./dist",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Doc', link: '/introduction' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Introduction",
        link: "/introduction"
      },
      {
        text: "Quick Start",
        link: "/quick-start"
      },
      {
        text: 'Query API',
        items: [
          { text: 'Basic Query', link: '/basic-query' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Roadmap',
        link: "/roadmap"
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sun0day/js-ast-ql' }
    ]
  }
})
