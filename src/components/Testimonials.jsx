import { ratingSummary, testimonials } from '../data/testimonials'
import { StarIcon, CheckIcon } from './Icons'

function Stars({ rating }) {
  return (
    <span className="testimonial__stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} className={n > rating ? 'is-dim' : ''} />
      ))}
    </span>
  )
}

export default function Testimonials() {
  return (
    <>
      {/* Rating summary */}
      <div className="rating-summary">
        <span className="rating-summary__value">{ratingSummary.average}</span>
        <Stars rating={5} />
        <span className="rating-summary__label">{ratingSummary.label}</span>
        <span className="rating-summary__count">{ratingSummary.count}</span>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <figure className="testimonial" key={t.name}>
            <div className="testimonial__head">
              <Stars rating={t.rating} />
              <span className="testimonial__date">{t.date}</span>
            </div>
            <blockquote className="testimonial__text">{t.quote}</blockquote>
            <figcaption className="testimonial__foot">
              <span className="testimonial__person">
                <span className="testimonial__avatar" aria-hidden="true">
                  {t.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span>
                  <span className="testimonial__name">{t.name}</span>
                  <br />
                  <span className="testimonial__location">{t.location}</span>
                </span>
              </span>
              <span className="testimonial__badge">
                <CheckIcon />
                Verified member
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
