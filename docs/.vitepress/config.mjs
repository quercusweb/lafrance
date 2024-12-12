import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "La France",
  description: "La France !",
// Script Tianji pour le suivi et analyse sans cookies 
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
  ],
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
          { text: 'Bourse', link: 'bourse/bourse' },
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
          { text: 'Dollar', link: 'forex/dollar', icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'} }
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
