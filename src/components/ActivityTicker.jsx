import MarketIcon from './MarketIcons'

// Sample market data — replace with live data from an API in production.
const tickerData = [
  { symbol: 'BTC', price: '97,240.10', change: '+2.4%', up: true },
  { symbol: 'ETH', price: '3,418.55', change: '+1.8%', up: true },
  { symbol: 'SOL', price: '188.32', change: '-0.6%', up: false },
  { symbol: 'XRP', price: '2.14', change: '+3.1%', up: true },
  { symbol: 'ADA', price: '0.92', change: '-1.2%', up: false },
  { symbol: 'DOGE', price: '0.31', change: '+4.7%', up: true },
  { symbol: 'BNB', price: '712.40', change: '+0.9%', up: true },
  { symbol: 'DOT', price: '8.74', change: '-0.3%', up: false },
]

export default function ActivityTicker() {
  const items = [...tickerData, ...tickerData] // duplicated for a seamless loop

  return (
    <div className="ticker" role="region" aria-label="Live market activity">
      <div className="ticker__live">
        <span className="ticker__dot" aria-hidden="true" />
        <span className="ticker__live-text">Live market</span>
        <span className="ticker__indicative">Indicative</span>
      </div>
      <div className="ticker__rail">
        <div className="ticker__track">
          {items.map((item, i) => (
            <span className="ticker__item" key={`${item.symbol}-${i}`}>
              <MarketIcon symbol={item.symbol} className="ticker__icon" />
              <span className="ticker__symbol">{item.symbol}</span>
              <span className="ticker__price">${item.price}</span>
              <span className={`ticker__change--${item.up ? 'up' : 'down'}`}>
                {item.change}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
