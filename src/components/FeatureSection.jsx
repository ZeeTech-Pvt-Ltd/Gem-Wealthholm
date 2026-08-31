import { Link } from 'react-router-dom'
import GemVisual from './GemVisual'
import Reveal from './Reveal'
import { ArrowRightIcon } from './Icons'

/**
 * Reusable editorial feature section: numbered section head, text column
 * with numbered hairline bullets, and a framed line-art figure.
 * Props:
 *  - eyebrow: mono label, e.g. "01 — Engine"
 *  - title: ReactNode (supports <mark>)
 *  - intro: short paragraph in the section head
 *  - paragraphs: string[]
 *  - bullets: string[] (numbered hairline rows)
 *  - visualVariant: "insights" | "ai" | "shield" (used when no image)
 *  - image / imageAlt: photo to show instead of the SVG visual
 *  - caption: figure caption, e.g. "Fig. 02 — Adaptive models"
 *  - flip: put the figure on the right
 *  - cta: { to, label }
 *  - paper: tint the section background
 */
export default function FeatureSection({
  eyebrow,
  title,
  intro,
  paragraphs,
  bullets,
  visualVariant = 'insights',
  image,
  imageAlt = '',
  caption,
  flip = false,
  cta,
  paper = false,
}) {
  return (
    <section className={`section section--rule${paper ? ' section--paper' : ''}`}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="title">{title}</h2>
            </div>
            {intro && <p className="section-intro">{intro}</p>}
          </div>
        </Reveal>

        <div className={`feature__row${flip ? ' feature__row--flip' : ''}`}>
          <Reveal className="feature__text">
            {paragraphs.map((text) => (
              <p className="quote" key={text}>
                {text}
              </p>
            ))}
            {bullets && (
              <ul className="bullet-rows">
                {bullets.map((bullet, i) => (
                  <li key={bullet}>
                    <span className="bullet-rows__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="bullet-rows__text">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <Link className="link-arrow feature__cta" to={cta.to}>
                {cta.label}
                <ArrowRightIcon />
              </Link>
            )}
          </Reveal>

          <Reveal delay={120} className="feature__media">
            <figure className="figure">
              {image ? (
                <img
                  className="feature__visual feature__visual--photo"
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                />
              ) : (
                <div className="figure__frame">
                  <GemVisual variant={visualVariant} />
                </div>
              )}
              {caption && (
                <figcaption className="figure__caption">
                  <b>{caption}</b>
                </figcaption>
              )}
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
