/**
 * Flat SVG badge icons for the Markets grid — one per asset.
 * Brand-colored circles with mono monograms; indices get a lime
 * chart glyph, crude oil a droplet. Renders everywhere, no assets.
 */

const palette = {
  BTC: '#f7931a',
  ETH: '#627eea',
  SOL: '#9945ff',
  XRP: '#23292f',
  ADA: '#0033ad',
  DOGE: '#c2a633',
  BNB: '#f3ba2f',
  DOT: '#e6007a',
  'EUR/USD': '#0d121b',
  'GBP/USD': '#0d121b',
  'XAU/USD': '#c9a227',
  WTI: '#14181f',
  SPX: '#0d121b',
  NDX: '#004938',
}

const monograms = {
  BTC: 'BTC',
  ETH: 'ETH',
  SOL: 'SOL',
  XRP: 'XRP',
  ADA: 'ADA',
  DOGE: 'DOGE',
  BNB: 'BNB',
  DOT: 'DOT',
  'EUR/USD': '€$',
  'GBP/USD': '£$',
  'XAU/USD': 'AU',
}

function Badge({ color, children, className = 'market-tile__icon' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill={color} />
      <text
        x="16"
        y="16"
        dy="0.36em"
        textAnchor="middle"
        fontFamily="'Space Mono', monospace"
        fontSize={String(children).length <= 2 ? 11 : 9}
        fontWeight="700"
        fill="#ffffff"
      >
        {children}
      </text>
    </svg>
  )
}

export default function MarketIcon({ symbol, className = 'market-tile__icon' }) {
  if (symbol === 'SPX' || symbol === 'NDX') {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill={palette[symbol]} />
        <polyline
          points="7,22 13,16 17,18 25,8"
          fill="none"
          stroke="#d6fa03"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 8 H25 V12"
          fill="none"
          stroke="#d6fa03"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (symbol === 'WTI') {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 3 C16 3 5.5 13 5.5 21.5 A10.5 10.5 0 0 0 26.5 21.5 C26.5 13 16 3 16 3 Z"
          fill={palette.WTI}
        />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="'Space Mono', monospace"
          fontSize="8"
          fontWeight="700"
          fill="#ffffff"
        >
          WTI
        </text>
      </svg>
    )
  }

  return (
    <Badge color={palette[symbol] || '#0d121b'} className={className}>
      {monograms[symbol] || '?'}
    </Badge>
  )
}
