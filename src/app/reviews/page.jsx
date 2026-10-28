import FeatureSection from '../../components/FeatureSection'
import CtaSection from '../../components/CtaSection'
import Reveal from '../../components/Reveal'
import Main from '../../components/Main'
import SeoScripts from '../../components/SeoScripts'
import { buildMetadata } from '../../lib/seo'
import Testimonials from '../../components/Testimonials'

export const metadata = buildMetadata('/reviews')

export default function Reviews() {
  return (
    <Main>
      <SeoScripts route="/reviews" />
      <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          REVIEWS
        </span>
        <div className="container">
          <p className="eyebrow">Voices</p>
          <h1 className="page-hero__title">
            What members say about <mark>Gem Wealthholm</mark>
          </h1>
          <p className="page-hero__text">
            Feedback from members across Australia - in their own words.
          </p>
        </div>
      </section>

      {/* Member reviews */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">Member reviews</p>
                <h2 className="title">
                  Real feedback, <mark>real words</mark>
                </h2>
              </div>
              <p className="section-intro">
                Reviews reflect individual member experiences. Market activity
                involves risk, and your experience may differ.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* What members value */}
      <FeatureSection
        eyebrow="What members value"
        title={
          <>
            The themes that <mark>repeat</mark>
          </>
        }
        intro="Across the feedback, the same points come up again and again."
        paragraphs={[
          'Members tell us the platform earns trust by being honest about what it can and cannot do, and by leaving every decision in their hands.',
          'Support replies quickly, withdrawals are straightforward, and nobody is pushed to deposit more than they planned.',
        ]}
        bullets={[
          'An honest dashboard that shows its work',
          'Real support, from real people',
          'Copy trading with a clear log of every move',
          'No pressure - you set your own pace',
        ]}
        image="/images/The themes that repea.webp"
        imageAlt="Gem Wealthholm shield with the gem mark - security and trust"
      />

      <CtaSection
        title={
          <>
            Join the members who see the market <mark>clearly</mark>
          </>
        }
        ghostWord="4.8"
      />
      </>
    </Main>
  )
}
