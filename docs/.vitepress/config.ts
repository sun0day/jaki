import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'jaki',
  description: 'Fast Javascript ast library.',
  base: '/jaki/dist',
  outDir: './dist',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/parse' },
      { text: 'v0.1', link: '' },
      // { text: 'Roadmap', link: '/roadmap' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          link: '/guide/introduction',
        },
        {
          text: 'Quick Start',
          link: '/guide/quick-start',
        },
      ],
      '/api/': [
        {
          text: 'ESTree',
          link: '/api/estree',
        },
        {
          text: 'parse',
          link: '/api/parse',
        },
        {
          text: 'Query',
          items: [{
            text: 'Ast',
            link: '/api/ast',
          }, {
            text: 'AstNode',
            collapsed: true,
            items: [{
              text: 'VariableDeclaration',
              link: '/api/variable-declaration',
            }],
          }],
        },
        {
          text: 'Shift',
          items: [{
            text: 'shift',
            link: '/api/shift',
          }],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sun0day/jaki' },
    ],
  },
})
