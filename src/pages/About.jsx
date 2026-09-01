import FeatureSection from '../components/FeatureSection'
import Reveal from '../components/Reveal'
import { values } from '../data/features'
import { ShieldIcon, EyeIcon, SparkIcon } from '../components/Icons'

const valueIcons = { shield: ShieldIcon, eye: EyeIcon, spark: SparkIcon }

export default function About() {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          ABOUT
        </span>
        <div className="container">
          <p className="eyebrow">01 — Company</p>
          <h1 className="page-hero__title">
            About <mark>Gem Wealthholm</mark>
          </h1>
          <p className="page-hero__text">
            We build technology that makes market information understandable —
            so people can make better-informed decisions with structure and
            context.
          </p>
        </div>
      </section>

      <FeatureSection
        paper
        eyebrow="01 — Mission"
        title={
          <>
            Smarter investing, powered by <mark>technology</mark>
          </>
        }
        intro="Artificial intelligence supports human judgement — it never replaces it."
        paragraphs={[
          'Gem Wealthholm was created to make market work feel simpler, no matter your experience level. The platform turns dense market data into clear, practical insights so you can act with more confidence in changing conditions.',
          'The system scans huge volumes of information in real time, watching for shifts, spotting patterns, and reacting quickly to market signals — without needing to dig through complex analytics.',
        ]}
        bullets={[
          'Insights presented in plain language',
          'Adaptive models, not stale indicators',
          'Built for beginners and experienced users alike',
        ]}
        image="/images/feature-protection.webp"
        imageAlt="Gem Wealthholm platform features for smarter investing with AI technology"
      />

      {/* Values */}
      <section className="section section--rule">
        <span className="ghost-num" aria-hidden="true">
          02
        </span>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">02 — Values</p>
                <h2 className="title">
                  What we <mark>stand for</mark>
                </h2>
              </div>
              <p className="section-intro">
                Three principles guide everything we build.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid-3">
              {values.map((value) => {
                const Icon = valueIcons[value.icon] || SparkIcon
                return (
                  <article className="value-card" key={value.title}>
                    <span className="value-card__icon">
                      <Icon />
                    </span>
                    <h3 className="value-card__title">{value.title}</h3>
                    <p className="value-card__text">{value.text}</p>
                  </article>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Protection */}
      <FeatureSection
        eyebrow="03 — Protection"
        title={
          <>
            Control and protection, <mark>by design</mark>
          </>
        }
        intro="Security that lets you focus on the market, not on technical risk."
        paragraphs={[
          'Data is protected, access is managed, and transactions travel through secure channels. Gem Wealthholm treats information with transparency and integrity.',
          'The tools exist to support your judgement — every decision remains yours.',
        ]}
        bullets={[
          'Encrypted channels for every transaction',
          'Managed access and protected data',
          'Human judgement stays at the centre',
        ]}
        image="/images/feature-mission.webp"
        imageAlt="Gem Wealthholm security and protection for safe online investing"
        flip
      />
    </>
  )
}
