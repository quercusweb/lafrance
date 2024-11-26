import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Make France Great Again",
  description: "MFGA",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Répertoire', link: '/repertoire' }
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
          { text: 'Indices', link: 'bourse/indices' },
          { text: 'Actions', link: 'bourse/actions' },
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
          { text: 'BNB', link: 'crypto/bnb' },
        ]
      },
      {
        text: 'Immobilier',
        collapsed: false,
        items: [
          { text: 'Résidence Principale', link: 'immo/rp' },
          { text: 'SCI', link: 'immo/sci' }
        ]
      },
      {
        text: 'Comparatifs',
        collapsed: false,
        items: [
          { text: 'PEA', link: 'comparatifs/pea' },
          { text: 'Compte titre', link: 'comparatifs/compte-titre' },
          { text: 'Assurance Vie', link: 'comparatifs/assurance-vie' },
          { text: 'Banques', link: 'comparatifs/banques'},
          { text: 'Courtiers', link: 'comparatifs/courtiers'}
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
      { icon: 'github', link: 'https://github.com/quercusweb/mfga'},
      { icon: 'instagram', link: 'https://www.instagram.com/quercusweb'},
      { icon: 'link', link: 'https://www.quercusweb.fr'}
    ]
  }
})
