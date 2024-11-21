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
      { text: 'Home', link: '/' },
      { text: 'Répertoire', link: '/repertoire' }
    ],
    
    sidebar: [
      {
        text: 'Bourse',
        collapsed: false,
        items: [
          { text: 'Actions', link: 'bourse/actions' },
          { text: 'ETF', link: 'bourse/etf' },
          { text: 'Obligations', link: 'bourse/obligations' }
        ]
      },
      {
        text: 'Cryptomonnaie',
        collapsed: false,
        items: [
          { text: 'Wallets', link: 'crypto/wallets' },
          { text: 'Bitcoin', link: 'crypto/bitcoin' },
          { text: 'Ethereum', link: 'crypto/ethereum' },
          { text: 'Tether', link: 'crypto/tether' },
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
          { text: 'PEA', link: '/pea' },
          { text: 'Compte titre', link: '/compte-titre' },
          { text: 'Assurance Vie', link: '/assurance-vie' },
          { text: 'Banques', link: '/banques'},
          { text: 'Courtiers', link: '/courtiers'}
        ]
      },
      {
        text: 'Forex',
        collapsed: false,
        items: [
          { text: 'Euro €', link: 'forex/euro' },
          { text: 'Dollar $', link: 'forex/dollar' }
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
      { icon: 'diamond', link: 'https://www.quercusweb.fr'}
    ]
  }
})