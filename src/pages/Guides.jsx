import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { guides } from '../data/guides'
import { ArrowRightIcon } from '../components/Icons'

export default function Guides() {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          GUIDES
        </span>
        <div className="container">
          <p className="eyebrow">04 — Learn</p>
          <h1 className="page-hero__title">
            Gem Wealthholm <mark>guides</mark>
          </h1>
          <p className="page-hero__text">
            Practical articles about the Gem Wealthholm platform — reviews,
            account access, getting started, and how deposits and withdrawals
            work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="guides-list">
              {guides.map((guide, i) => (
                <Link className="guides-list__item" to={`/guides/${guide.slug}`} key={guide.slug}>
                  <span className="guides-list__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="guides-list__body">
                    <span className="guides-list__title">{guide.title}</span>
                    <span className="guides-list__meta">
                      {guide.date} · {guide.readTime}
                    </span>
                  </span>
                  <ArrowRightIcon />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
