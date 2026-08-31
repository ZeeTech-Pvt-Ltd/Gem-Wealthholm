/**
 * Decorative SVG illustration — flat line-art in editorial style:
 * thin ink strokes, one lime facet, dotted grid, dashed chart line.
 * Variants: "insights" (gem + rising chart), "ai" (gem + signal nodes),
 *           "shield" (gem inside shield outline), "chart" (candlestick
 *           trading chart with trend line), "dashboard" (trading
 *           dashboard with watchlist, dual-line chart, and KPI tiles)
 */

// Watchlist rows for the dashboard variant: symbol, change, sparkline points
const watchlist = [
  { symbol: 'BTC', change: '+2.4%', up: true, spark: '100,12 120,6 140,10 160,0 180,-6' },
  { symbol: 'ETH', change: '+1.8%', up: true, spark: '100,4 120,10 140,2 160,8 180,-4' },
  { symbol: 'SOL', change: '-0.6%', up: false, spark: '100,-2 120,-8 140,-4 160,-10 180,0' },
  { symbol: 'XRP', change: '+3.1%', up: true, spark: '100,10 120,2 140,8 160,-4 180,-10' },
]

const kpiTiles = [
  { label: 'AI SCORE', value: '87' },
  { label: 'SIGNALS', value: '12+' },
  { label: 'UPTIME', value: '99.9%' },
]

// Candlestick data in viewBox coords: x, openY, closeY, highY, lowY.
// Smaller y = higher price. Up candles (closeY < openY) fill emerald.
const candles = [
  { x: 70, open: 310, close: 292, high: 282, low: 326 },
  { x: 108, open: 292, close: 276, high: 266, low: 310 },
  { x: 146, open: 276, close: 288, high: 262, low: 302 },
  { x: 184, open: 288, close: 268, high: 258, low: 306 },
  { x: 222, open: 268, close: 250, high: 240, low: 284 },
  { x: 260, open: 250, close: 258, high: 238, low: 274 },
  { x: 298, open: 258, close: 230, high: 220, low: 276 },
  { x: 336, open: 230, close: 216, high: 206, low: 252 },
  { x: 374, open: 216, close: 226, high: 202, low: 242 },
  { x: 412, open: 226, close: 196, high: 186, low: 244 },
  { x: 450, open: 196, close: 152, high: 140, low: 216 },
]

const chartTimes = ['09:00', '10:00', '11:00', '12:00', '13:00']

export default function GemVisual({ variant = 'insights' }) {
  return (
    <svg
      className="feature__visual"
      viewBox="0 0 520 400"
      role="img"
      aria-label="Gem Wealthholm illustration"
    >
      {/* panel */}
      <rect
        x="1"
        y="1"
        width="518"
        height="398"
        fill="#ffffff"
        stroke="#0d121b"
        strokeWidth="1.5"
      />
      <rect x="10" y="10" width="500" height="380" fill="none" stroke="#e8e8e2" strokeWidth="1" />

      {/* dotted grid */}
      <g fill="#0d121b" opacity="0.14">
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i}>
            {Array.from({ length: 6 }).map((__, j) => (
              <circle key={j} cx={60 + i * 50} cy={70 + j * 52} r="1.6" />
            ))}
          </g>
        ))}
      </g>

      {variant === 'dashboard' ? (
        <g>
          {/* top bar */}
          <text x="30" y="34" fontFamily="'Space Mono', monospace" fontSize="11" fontWeight="700" fill="#0d121b">
            MARKET DASHBOARD
          </text>
          <rect x="444" y="24" width="9" height="9" fill="#d6fa03" stroke="#0d121b" strokeWidth="1" />
          <text x="460" y="34" fontFamily="'Space Mono', monospace" fontSize="11" fontWeight="700" fill="#0d121b">
            LIVE
          </text>
          <line x1="30" y1="48" x2="490" y2="48" stroke="#0d121b" strokeWidth="1" />

          {/* watchlist column */}
          <text x="30" y="68" fontFamily="'Space Mono', monospace" fontSize="9" fill="#9aa1ab">
            WATCHLIST
          </text>
          {watchlist.map((row, i) => {
            const y = 86 + i * 42
            return (
              <g key={row.symbol}>
                <text x="30" y={y} fontFamily="'Space Mono', monospace" fontSize="13" fontWeight="700" fill="#0d121b">
                  {row.symbol}
                </text>
                <text
                  x="188"
                  y={y}
                  textAnchor="end"
                  fontFamily="'Space Mono', monospace"
                  fontSize="11"
                  fontWeight="700"
                  fill={row.up ? '#004938' : '#c0392b'}
                >
                  {row.change}
                </text>
                <polyline
                  points={row.spark}
                  transform={`translate(0 ${y - 12})`}
                  fill="none"
                  stroke={row.up ? '#004938' : '#c0392b'}
                  strokeWidth="1.5"
                />
                {i < watchlist.length - 1 && (
                  <line x1="30" y1={y + 14} x2="188" y2={y + 14} stroke="#0d121b" strokeWidth="1" opacity="0.15" />
                )}
              </g>
            )
          })}
          <line x1="200" y1="56" x2="200" y2="250" stroke="#0d121b" strokeWidth="1" opacity="0.25" />

          {/* main chart */}
          <rect x="210" y="62" width="280" height="188" fill="none" stroke="#0d121b" strokeWidth="1.5" />
          {[90, 140, 190, 240].map((gy) => (
            <line key={gy} x1="210" y1={gy} x2="490" y2={gy} stroke="#0d121b" strokeWidth="1" strokeDasharray="3 5" opacity="0.15" />
          ))}
          {/* emerald main line */}
          <polyline
            points="230,230 270,210 310,220 350,170 390,180 430,120 470,90"
            fill="none"
            stroke="#004938"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* lime dashed signal line */}
          <polyline
            points="230,190 270,230 310,160 350,210 390,150 430,200 470,110"
            fill="none"
            stroke="#d6fa03"
            strokeWidth="2.5"
            strokeDasharray="7 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="470" cy="90" r="5" fill="#004938" stroke="#0d121b" strokeWidth="1.5" />
          <circle cx="470" cy="110" r="5" fill="#d6fa03" stroke="#0d121b" strokeWidth="1.5" />

          {/* KPI tiles */}
          {kpiTiles.map((tile, i) => {
            const x = 30 + i * 165
            return (
              <g key={tile.label}>
                <rect x={x} y="276" width="150" height="84" fill="#ffffff" stroke="#0d121b" strokeWidth="1.5" />
                <text x={x + 14} y="302" fontFamily="'Space Mono', monospace" fontSize="9" fontWeight="700" fill="#9aa1ab">
                  {tile.label}
                </text>
                <text x={x + 14} y="342" fontFamily="'Space Grotesk', sans-serif" fontSize="30" fontWeight="700" fill="#0d121b">
                  {tile.value}
                </text>
              </g>
            )
          })}
        </g>
      ) : variant === 'chart' ? (
        <g>
          {/* baseline */}
          <line x1="40" y1="330" x2="480" y2="330" stroke="#0d121b" strokeWidth="1" opacity="0.3" />

          {/* trend line */}
          <line
            x1="70"
            y1="326"
            x2="450"
            y2="216"
            stroke="#004938"
            strokeWidth="2"
            strokeDasharray="8 7"
          />

          {/* candles */}
          {candles.map((c) => {
            const up = c.close < c.open
            const top = Math.min(c.open, c.close)
            const height = Math.max(Math.abs(c.close - c.open), 10)
            return (
              <g key={c.x}>
                {/* wick */}
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke="#0d121b" strokeWidth="2" />
                {/* body */}
                <rect
                  x={c.x - 7}
                  y={top}
                  width="14"
                  height={height}
                  fill={up ? '#004938' : '#ffffff'}
                  stroke="#0d121b"
                  strokeWidth="2"
                />
              </g>
            )
          })}

          {/* current price marker */}
          <circle cx="450" cy="152" r="8" fill="#d6fa03" stroke="#0d121b" strokeWidth="2" />
          <line
            x1="40"
            y1="152"
            x2="480"
            y2="152"
            stroke="#0d121b"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.45"
          />

          {/* y-axis price levels */}
          {[
            [150, '96.4K'],
            [200, '94.0K'],
            [250, '91.6K'],
            [300, '89.2K'],
          ].map(([y, label]) => (
            <g key={y}>
              <line x1="472" y1={y} x2="480" y2={y} stroke="#0d121b" strokeWidth="1" />
              <text
                x="474"
                y={y - 6}
                fontFamily="'Space Mono', monospace"
                fontSize="11"
                fill="#9aa1ab"
              >
                {label}
              </text>
            </g>
          ))}

          {/* x-axis time labels */}
          {chartTimes.map((t, i) => (
            <text
              key={t}
              x={70 + i * 95}
              y="346"
              fontFamily="'Space Mono', monospace"
              fontSize="10.5"
              fill="#9aa1ab"
              textAnchor={i === 0 ? 'start' : i === chartTimes.length - 1 ? 'end' : 'middle'}
            >
              {t}
            </text>
          ))}
        </g>
      ) : (
        <g>
          {variant !== 'shield' && (
            <g>
              {/* gem — outline with one lime facet */}
              <path
                d="M260 96 L352 196 L260 296 L168 196 Z"
                fill="#ffffff"
                stroke="#0d121b"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M168 196 L260 236 L352 196" fill="none" stroke="#0d121b" strokeWidth="1.5" />
              <path d="M260 96 L260 236 L260 296" fill="none" stroke="#0d121b" strokeWidth="1.5" />
              <path d="M168 196 L260 236 L260 196 Z" fill="#d6fa03" stroke="#0d121b" strokeWidth="1.5" />
            </g>
          )}

          {variant === 'insights' && (
            <g>
              {/* rising chart — dashed */}
              <path
                d="M60 330 L140 272 L210 296 L300 190 L365 218 L450 108"
                fill="none"
                stroke="#004938"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="8 7"
              />
              <circle cx="450" cy="108" r="8" fill="#d6fa03" stroke="#0d121b" strokeWidth="2" />
              <circle cx="300" cy="190" r="6" fill="#ffffff" stroke="#0d121b" strokeWidth="2" />
              <circle cx="60" cy="330" r="6" fill="#ffffff" stroke="#0d121b" strokeWidth="2" />
              {/* baseline labels */}
              <line x1="40" y1="330" x2="480" y2="330" stroke="#0d121b" strokeWidth="1" opacity="0.25" />
            </g>
          )}

          {variant === 'ai' && (
            <g>
              {/* signal nodes */}
              <g stroke="#0d121b" strokeWidth="1.5">
                <line x1="58" y1="84" x2="152" y2="178" strokeDasharray="4 5" />
                <line x1="58" y1="316" x2="152" y2="230" strokeDasharray="4 5" />
                <line x1="462" y1="84" x2="368" y2="178" strokeDasharray="4 5" />
                <line x1="462" y1="316" x2="368" y2="230" strokeDasharray="4 5" />
              </g>
              {[
                [58, 84],
                [58, 316],
                [462, 84],
                [462, 316],
              ].map(([cx, cy]) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="13" fill="#ffffff" stroke="#0d121b" strokeWidth="2" />
                  <circle cx={cx} cy={cy} r="4.5" fill="#d6fa03" />
                </g>
              ))}
            </g>
          )}

          {variant === 'shield' && (
            <g>
              {/* shield */}
              <path
                d="M260 70 L392 116 V210 C392 290 340 345 260 372 C180 345 128 290 128 210 V116 Z"
                fill="#ffffff"
                stroke="#0d121b"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* padlock */}
              <rect
                x="232"
                y="196"
                width="56"
                height="44"
                rx="4"
                fill="#d6fa03"
                stroke="#0d121b"
                strokeWidth="2.5"
              />
              <path
                d="M242 196 V184 A18 18 0 0 1 278 184 V196"
                fill="none"
                stroke="#0d121b"
                strokeWidth="2.5"
              />
              <circle cx="260" cy="216" r="4" fill="#0d121b" />
              <rect x="257.5" y="218" width="5" height="10" fill="#0d121b" />
            </g>
          )}
        </g>
      )}

      {/* corner ticks */}
      <g stroke="#0d121b" strokeWidth="2">
        <line x1="30" y1="42" x2="52" y2="42" />
        <line x1="30" y1="42" x2="30" y2="64" />
        <line x1="490" y1="358" x2="468" y2="358" />
        <line x1="490" y1="358" x2="490" y2="336" />
      </g>

      {/* mono coordinates (the dashboard variant draws its own title) */}
      {variant !== 'dashboard' && (
        <text x="30" y="30" fontFamily="'Space Mono', monospace" fontSize="11" fill="#9aa1ab">
          {variant === 'chart' ? 'BTC/USD — 1H' : '00:00 UTC'}
        </text>
      )}
      <text x="412" y="382" fontFamily="'Space Mono', monospace" fontSize="11" fill="#9aa1ab">
        {variant === 'chart' ? 'TREND +12.4%' : variant === 'dashboard' ? '24-7 MONITORING' : 'SIGNAL / 0.4s'}
      </text>
    </svg>
  )
}
