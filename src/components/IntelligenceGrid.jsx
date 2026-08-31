import { gridCards } from '../data/features'

export default function IntelligenceGrid() {
  return (
    <div className="grid-3">
      {gridCards.map((card) => (
        <article className="intel-card" key={card.step}>
          <span className="intel-card__step" aria-hidden="true">
            {card.step}
          </span>
          <h3 className="intel-card__title">{card.title}</h3>
          <p className="intel-card__text">{card.text}</p>
        </article>
      ))}
    </div>
  )
}
