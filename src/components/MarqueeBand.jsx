/**
 * Tilted scrolling mono-text band — a signature editorial accent.
 * `ink` variant flips to a dark band with lime text.
 */
export default function MarqueeBand({ items, ink = false, ariaLabel }) {
  const doubled = [...items, ...items] // seamless loop

  return (
    <div
      className={`marquee-band${ink ? ' marquee-band--ink' : ''}`}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="marquee-band__track">
        {doubled.map((item, i) => (
          <span className="marquee-band__item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
