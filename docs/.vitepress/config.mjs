import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Make France Great Again",
  description: "MFGA",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Bourse',
        items: [
          { text: 'Actions', link: '/actions' },
          { text: 'ETF', link: '/etf' },
          { text: 'Obligations', link: '/obligations' }
        ]
      },
      {
        text: 'Cryptomonnaie',
        items: [
          { text: 'Bitcoin', link: '/bitcoin' },
          { text: 'Ethereum', link: '/ethereum' }
        ]
      },
      {
        text: 'Immobilier',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Forex',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Astuces',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Comparatifs',
        items: [
          { text: 'PEA', link: '/pea' },
          { text: 'Compte titre', link: '/compte-titre' },
          { text: 'Assurance Vie', link: '/assurance-vie' },
          { text: 'Banques', link: '/banques'},
          { text: 'Courtiers', link: '/courtiers'}
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quercusweb/mfga'},
      { icon: 'instagram', link: 'https://www.instagram.com/quercusweb'},
      { icon: 'planet', link: 'https://www.quercusweb.fr'}
    ]
  }
})