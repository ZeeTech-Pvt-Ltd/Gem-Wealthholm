import FeatureSection from '../../components/FeatureSection'
import CtaSection from '../../components/CtaSection'
import Reveal from '../../components/Reveal'
import Main from '../../components/Main'
import SeoScripts from '../../components/SeoScripts'
import { buildMetadata } from '../../lib/seo'
import RegistrationForm from '../../components/RegistrationForm'
import { stepsDetailed } from '../../data/features'

export const metadata = buildMetadata('/how-it-works')

export default function HowItWorks() {
  return (
    <Main>
      <SeoScripts route="/how-it-works" />
      <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          HOW
        </span>
        <div className="container">
          <p className="eyebrow">Process</p>
          <h1 className="page-hero__title">
            From sign-up to first signal: how it <mark>works</mark>
          </h1>
          <p className="page-hero__text">
            Four straightforward steps stand between you and a clearer read on
            the market - no jargon, no complex setup.
          </p>
        </div>
      </section>

      {/* The four steps */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">The four steps</p>
                <h2 className="title">
                  Four steps to <mark>clarity</mark>
                </h2>
              </div>
              <p className="section-intro">
                From opening an account to your first withdrawal - the whole
                journey, step by step.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid-4">
              {stepsDetailed.map((item) => (
                <article className="intel-card" key={item.step}>
                  <span className="intel-card__step" aria-hidden="true">
                    STEP {item.step}
                  </span>
                  <h3 className="intel-card__title">{item.title}</h3>
                  <p className="intel-card__text">{item.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* From data to decision */}
      <FeatureSection
        eyebrow="The engine"
        title={
          <>
            From data to <mark>decision</mark>
          </>
        }
        intro="Inside the platform, one continuous loop turns market data into something you can act on."
        paragraphs={[
          'The engine scans huge volumes of information in real time, watching for impulses, reversals and trend changes across 65+ markets.',
          'What matters is highlighted the moment it appears, explained in plain language, and left for you to weigh up - the platform informs your judgement, it never replaces it.',
        ]}
        bullets={[
          'Scan - continuous scanning, day and night',
          'Analyse - adaptive models spot shifts and patterns',
          'Signal - meaningful movement, surfaced instantly',
          'Decide - every decision stays yours',
        ]}
        image="/images/From data to decision.webp"
        imageAlt="Gem Wealthholm AI engine flow from market scan to signal"
      />

      {/* Around the clock */}
      <FeatureSection
        eyebrow="Around the clock"
        title={
          <>
            What happens while <mark>you sleep</mark>
          </>
        }
        intro="Markets never close, so neither does the monitoring."
        paragraphs={[
          'The platform keeps watching while you are away. When meaningful movement appears overnight, it is already in your feed the next time you look.',
          'Copy trading works the same way - strategies keep running with a full log of every move, so you can review at your own pace.',
        ]}
        bullets={[
          '24/7 monitoring across 65+ markets',
          'Signals surfaced with 0.4s latency',
          'Encrypted channels for every transaction',
        ]}
        image="/images/What happens while you sleep.webp"
        imageAlt="Gem Wealthholm around-the-clock monitoring with the glowing gem mark"
        flip
        cta={{ to: '/features', label: 'Explore the features' }}
      />

      <CtaSection
        title={
          <>
            Start with <mark>step one</mark>
          </>
        }
        text="Opening an account is free and takes a couple of minutes. From there, the platform does the heavy lifting."
        ghostWord="HOW"
        form={<RegistrationForm idPrefix="how" formId="how-join" submitLabel="Start free access" />}
      />
      </>
    </Main>
  )
}
