import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { ArrowRightIcon } from './Icons'

export default function CtaSection({
  eyebrow = 'Ready when you are',
  title,
  text = 'Join Gem Wealthholm today and let AI-powered insights help you make more informed decisions — around the clock.',
  ghostWord = 'GW',
  form = null,
}) {
  return (
    <section className="cta-banner">
      <span className="cta-banner__ghost" aria-hidden="true">
        {ghostWord}
      </span>
      <div className="container">
        <Reveal>
          {form ? (
            <div className="cta-banner__grid">
              <div>
                <p className="eyebrow eyebrow--light">{eyebrow}</p>
                <h2 className="cta-banner__title">{title}</h2>
                <p className="cta-banner__text">{text}</p>
                <div className="cta-banner__actions">
                  <Link className="btn btn--ghost-light" to="/contact-us">
                    Contact support
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
              <div>{form}</div>
            </div>
          ) : (
            <>
              <p className="eyebrow eyebrow--light">{eyebrow}</p>
              <h2 className="cta-banner__title">{title}</h2>
              <p className="cta-banner__text">{text}</p>
              <div className="cta-banner__actions">
                <Link className="btn btn--lime" to="/#join">
                  Open an account
                </Link>
                <Link className="btn btn--ghost-light" to="/contact-us">
                  Contact support
                  <ArrowRightIcon />
                </Link>
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}
