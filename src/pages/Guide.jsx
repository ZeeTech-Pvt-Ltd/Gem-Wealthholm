import { Link, Navigate, useParams } from 'react-router-dom'
import { getGuide, guides } from '../data/guides'
import { ArrowRightIcon } from '../components/Icons'

export default function Guide() {
  const { slug } = useParams()
  const guide = getGuide(slug)

  if (!guide) return <Navigate to="/guides" replace />

  const next = guides[guides.indexOf(guide) + 1]

  return (
    <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          GUIDE
        </span>
        <div className="container">
          <p className="eyebrow">04 — Learn</p>
          <h1 className="page-hero__title">{guide.title}</h1>
          <p className="page-hero__text">
            {guide.date} · {guide.readTime}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-doc">
            {guide.sections.map((section, i) => (
              <div className="legal-doc__section" key={section.heading}>
                <h2 className="legal-doc__heading">
                  <span className="legal-doc__num">{String(i + 1).padStart(2, '0')}</span>
                  {section.heading}
                </h2>
                {section.body.map((p) => (
                  <p className="legal-doc__text" key={p}>
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="legal-doc__list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="guide-next">
              {next ? (
                <Link className="link-arrow" to={`/guides/${next.slug}`}>
                  Next: {next.title}
                  <ArrowRightIcon />
                </Link>
              ) : (
                <Link className="link-arrow" to="/guides">
                  Back to all guides
                  <ArrowRightIcon />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
