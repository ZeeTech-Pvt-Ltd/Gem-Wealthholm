/**
 * Editorial legal document layout: page hero + numbered sections
 * with hairline separators. `title` supports <mark>.
 */
export default function LegalDoc({ eyebrow, title, ghost, intro, updated, sections }) {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          {ghost}
        </span>
        <div className="container">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__text">{intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-doc">
            {sections.map((section, i) => (
              <div className="legal-doc__section" key={section.heading}>
                <h2 className="legal-doc__heading">
                  <span className="legal-doc__num">{String(i + 1).padStart(2, '0')}</span>
                  {section.heading}
                </h2>
                {section.body?.map((p) => (
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
            <p className="legal-doc__updated">Last updated: {updated}</p>
          </div>
        </div>
      </section>
    </>
  )
}
