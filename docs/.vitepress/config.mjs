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
          { text: '⚖️ Indices', link: 'bourse/indices' },
          { text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-candlestick"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/></svg> Actions', link: 'bourse/actions' },
          { text: '💰 ETF', link: 'bourse/etf' },
          { text: '💶 Obligations', link: 'bourse/obligations' },
          { text: '🥇 Or', link: 'bourse/gold' }
        ]
      },
      {
        text: 'Cryptomonnaie',
        collapsed: false,
        items: [
          { text: '👜 Wallets', link: 'crypto/wallets' },
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
          { text: '🏠 Résidence Principale', link: 'immo/rp' },
          { text: '🏘️ SCI', link: 'immo/sci' }
        ]
      },
      {
        text: 'Comparatifs',
        collapsed: false,
        items: [
          { text: '📊 PEA', link: 'comparatifs/pea' },
          { text: '📈 Compte titre', link: 'comparatifs/compte-titre' },
          { text: '📉 Assurance Vie', link: 'comparatifs/assurance-vie' },
          { text: '🏛️ Banques', link: 'comparatifs/banques'},
          { text: '🏦 Courtiers', link: 'comparatifs/courtiers'}
        ]
      },
      {
        text: 'Forex',
        collapsed: false,
        items: [
          { text: '💶 Euro', link: 'forex/euro' },
          { text: '💵 Dollar', link: 'forex/dollar' }
        ]
      },
      {
        text: 'Entreprenariat',
        collapsed: false,
        items: [
          { text: '👨‍🎓 Avocats', link: 'entreprise/avocats' }
        ]
      },
      {
        text: 'Fiscalité',
        collapsed: false,
        items: [
          { text: '💸 Donations', link: 'fiscal/donations' },
          { text: '👴 Succession', link: 'fiscal/succession' }
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
