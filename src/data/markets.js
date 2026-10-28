// Markets monitored by the Gem Wealthholm engine.
// Symbols and names shown for demonstration - adjust to the real coverage.
export const markets = [
  { symbol: 'BTC', name: 'Bitcoin', group: 'Crypto' },
  { symbol: 'ETH', name: 'Ethereum', group: 'Crypto' },
  { symbol: 'SOL', name: 'Solana', group: 'Crypto' },
  { symbol: 'XRP', name: 'Ripple', group: 'Crypto' },
  { symbol: 'ADA', name: 'Cardano', group: 'Crypto' },
  { symbol: 'DOGE', name: 'Dogecoin', group: 'Crypto' },
  { symbol: 'EUR/USD', name: 'Euro - US Dollar', group: 'FX' },
  { symbol: 'GBP/USD', name: 'Pound - US Dollar', group: 'FX' },
  { symbol: 'XAU/USD', name: 'Gold', group: 'Commodities' },
  { symbol: 'WTI', name: 'Crude Oil', group: 'Commodities' },
  { symbol: 'SPX', name: 'S&P 500', group: 'Indices' },
  { symbol: 'NDX', name: 'Nasdaq 100', group: 'Indices' },
]

// The four market groups shown on the homepage ("One Platform,
// Four Markets"): group copy + the symbols that fall under it.
export const marketGroups = [
  {
    name: 'Crypto',
    text: 'Trade Bitcoin, Ethereum and other popular coins. The AI tracks fast price swings that are hard to follow by hand.',
    symbols: ['BTC', 'ETH', 'SOL'],
  },
  {
    name: 'Forex',
    text: 'Follow major pairs like AUD/USD and EUR/USD. Signals are timed with the Sydney, London and New York sessions in mind.',
    symbols: ['EUR/USD', 'GBP/USD'],
  },
  {
    name: 'Stocks',
    text: 'Keep an eye on big names from Australia and overseas, including ASX-listed companies. The AI flags trend changes and unusual volume.',
    symbols: ['SPX', 'NDX'],
  },
  {
    name: 'Commodities',
    text: 'Gold, oil and other raw materials often move with world news. The AI helps you spot those shifts early.',
    symbols: ['XAU/USD', 'WTI'],
  },
]
