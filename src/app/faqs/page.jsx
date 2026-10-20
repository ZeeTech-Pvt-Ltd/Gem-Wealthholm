import Accordion from '../../components/Accordion'
import CtaSection from '../../components/CtaSection'
import Reveal from '../../components/Reveal'
import Main from '../../components/Main'
import SeoScripts from '../../components/SeoScripts'
import { buildMetadata } from '../../lib/seo'
import { faqItems } from '../../data/faq'

export const metadata = buildMetadata('/faqs')

export default function Faq() {
  return (
    <Main>
      <SeoScripts route="/faqs" />
      <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          FAQ
        </span>
        <div className="container">
          <p className="eyebrow">03 - Support</p>
          <h1 className="page-hero__title">
            Gem Wealthholm <mark>FAQs</mark>
          </h1>
          <p className="page-hero__text">
            Everything you need to know about the Gem Wealthholm platform,
            security, and how to get started.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <Accordion items={faqItems} defaultOpen={-1} />
          </Reveal>
        </div>
      </section>

      <CtaSection
        title={
          <>
            Still have <mark>questions?</mark>
          </>
        }
        text="Our team is happy to help. Reach out through the contact page and we'll get back to you as quickly as possible."
        ghostWord="Q?"
      />
      </>
    </Main>
  )
}
