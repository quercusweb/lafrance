import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'script',
      {
        async: true,
        defer: true,
        src: 'https://online.quercusweb.fr/tracker.js',
        'data-website-id': 'cm4k88c9o000x8dduhkopjowt'
      }
    ]
  ]
  title: "La France",
  description: "La France !",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Articles', link: 'blog/articles' },
    ],
    
    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: '📰 Derniers articles', link: 'blog/articles' }
        ]
      },
      {
        text: 'Bourse',
        collapsed: false,
        items: [
          { text: 'Actions', link: 'bourse/bourse' },
          { text: 'Indices', link: 'bourse/indices' },
          { text: 'ETF', link: 'bourse/etf' },
          { text: 'Obligations', link: 'bourse/obligations' },
          { text: 'Or', link: 'bourse/gold' }
        ]
      },
      {
        text: 'Cryptomonnaie',
        collapsed: false,
        items: [
          { text: 'Wallets', link: 'crypto/wallets' },
          { text: 'Bitcoin', link: 'crypto/bitcoin' },
          { text: 'Ethereum', link: 'crypto/ethereum' },
          { text: 'Stablecoin', link: 'crypto/stablecoin' },
          { text: 'Solana', link: 'crypto/solana' },
          { text: 'BNB', link: 'crypto/bnb' }
        ]
      },
      {
        text: 'Immobilier',
        collapsed: false,
        items: [
          { text: 'Résidence Principale', link: 'immo/rp' },
          { text: 'SCI, SCPI, SIIC, REITs, OPCI', link: 'immo/sci' }
        ]
      },
      {
        text: 'Comparatifs',
        collapsed: false,
        items: [
          { text: 'PEA', link: 'comparatifs/pea' },
          { text: 'Compte titre', link: 'comparatifs/compte-titre' },
          { text: 'Assurance Vie', link: 'comparatifs/assurance-vie' },
          { text: 'Banques', link: 'comparatifs/banques'}
        ]
      },
      {
        text: 'Forex',
        collapsed: false,
        items: [
          { text: 'Euro', link: 'forex/euro' },
          { text: 'Dollar', link: 'forex/dollar' }
        ]
      },
      {
        text: 'Entreprenariat',
        collapsed: false,
        items: [
          { text: 'Avocats', link: 'entreprise/avocats' }
        ]
      },
      {
        text: 'Fiscalité',
        collapsed: false,
        items: [
          { text: 'Donations', link: 'fiscal/donations' },
          { text: 'Succession', link: 'fiscal/succession' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/quercusweb'},
      { icon: 'github', link: 'https://github.com/quercusweb/lafrance'}
      
    ]
  }
})
