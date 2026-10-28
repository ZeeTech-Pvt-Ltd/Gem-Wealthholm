import Link from 'next/link'
import Reveal from '../../components/Reveal'
import Main from '../../components/Main'
import SeoScripts from '../../components/SeoScripts'
import { buildMetadata } from '../../lib/seo'
import { guides } from '../../data/guides'
import { ArrowRightIcon } from '../../components/Icons'

export const metadata = buildMetadata('/guides')

export default function Guides() {
  return (
    <Main>
      <SeoScripts route="/guides" />
      <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          GUIDES
        </span>
        <div className="container">
          <p className="eyebrow">Learn</p>
          <h1 className="page-hero__title">
            Gem Wealthholm <mark>guides</mark>
          </h1>
          <p className="page-hero__text">
            Practical articles about the Gem Wealthholm platform - reviews,
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
                <Link className="guides-list__item" href={`/guides/${guide.slug}`} key={guide.slug}>
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
    </Main>
  )
}
