import { useState } from 'react'

/**
 * Editorial accordion: hairline-separated rows with mono index numbers
 * and a rotating plus icon. `dark` for the emerald band variant.
 * `startIndex` offsets the displayed numbering (for multi-column FAQs).
 */
export default function Accordion({ items, dark = false, defaultOpen = 0, startIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className={`accordion${dark ? ' accordion--dark' : ''}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        // Supports both feature items ({title, content}) and FAQ items
        // ({question, answer}).
        const title = item.title ?? item.question
        const content = item.content ?? item.answer

        return (
          <div className={`accordion__item${isOpen ? ' is-open' : ''}`} key={title}>
            <button
              className="accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="accordion__index">
                {String(startIndex + index + 1).padStart(2, '0')}
              </span>
              <span className="accordion__label">{title}</span>
              <span className="accordion__icon" aria-hidden="true" />
            </button>
            <div className="accordion__body">
              <div className="accordion__content">{content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
