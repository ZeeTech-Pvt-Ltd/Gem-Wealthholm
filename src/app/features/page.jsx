import FeatureSection from '../../components/FeatureSection'
import CtaSection from '../../components/CtaSection'
import Reveal from '../../components/Reveal'
import Main from '../../components/Main'
import SeoScripts from '../../components/SeoScripts'
import { buildMetadata } from '../../lib/seo'
import { platformFeatures } from '../../data/features'
import {
  ShieldIcon,
  EyeIcon,
  SparkIcon,
  ClockIcon,
  CheckIcon,
  CardsIcon,
} from '../../components/Icons'

const featureIcons = {
  spark: SparkIcon,
  eye: EyeIcon,
  check: CheckIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
  cards: CardsIcon,
}

export const metadata = buildMetadata('/features')

export default function Features() {
  return (
    <Main>
      <SeoScripts route="/features" />
      <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          FEATURES
        </span>
        <div className="container">
          <p className="eyebrow">01 - Platform</p>
          <h1 className="page-hero__title">
            Features built around <mark>clarity</mark>
          </h1>
          <p className="page-hero__text">
            Every Gem Wealthholm feature serves one goal: turning dense market
            data into clear, practical insights you can act on.
          </p>
        </div>
      </section>

      {/* Core features */}
      <section className="section section--rule">
        <span className="ghost-num" aria-hidden="true">
          02
        </span>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">02 - Core features</p>
                <h2 className="title">
                  Everything you need, <mark>nothing you don’t</mark>
                </h2>
              </div>
              <p className="section-intro">
                A focused toolkit that supports your judgement - artificial
                intelligence never replaces it.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid-3">
              {platformFeatures.map((feature) => {
                const Icon = featureIcons[feature.icon] || SparkIcon
                return (
                  <article className="value-card" key={feature.title}>
                    <span className="value-card__icon">
                      <Icon />
                    </span>
                    <h3 className="value-card__title">{feature.title}</h3>
                    <p className="value-card__text">{feature.text}</p>
                  </article>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signals */}
      <FeatureSection
        eyebrow="03 - Signals"
        title={
          <>
            Signals you can <mark>act on</mark>
          </>
        }
        intro="The moment meaningful movement appears, you see it - in plain language."
        paragraphs={[
          'The engine watches impulses, reversals and trend changes across crypto, FX, commodities and indices, and highlights what matters as it happens.',
          'Every signal is presented with the context you need to make your own call - the platform informs your judgement, it never makes decisions for you.',
        ]}
        bullets={[
          'Signals surfaced the moment they appear',
          'Insights explained in plain language',
          'Adaptive models, refreshed continuously',
        ]}
        image="/images/Signals you can act on.webp"
        imageAlt="Gem Wealthholm signal feed dashboard showing live market signals and chart"
      />

      {/* Copy trading */}
      <FeatureSection
        eyebrow="04 - Copy trading"
        title={
          <>
            Proven approaches, <mark>made approachable</mark>
          </>
        }
        paragraphs={[
          'You can follow established strategies and apply them in your own activity, with a clear history of every move so nothing is hidden.',
          'Review at your own pace - once a day or more often - and stay in control of how and when you act.',
        ]}
        bullets={[
          'Strategies from experienced participants',
          'A clear log of every move',
          'You stay in control of your activity',
        ]}
        image="/images/Proven approaches, made approachable.webp"
        imageAlt="Gem Wealthholm copy trading dashboard with strategy cards and move history"
        flip
        cta={{ to: '/how-it-works', label: 'See how it works' }}
      />

      <CtaSection
        title={
          <>
            See the market with <mark>clarity</mark>
          </>
        }
        ghostWord="AI"
      />
      </>
    </Main>
  )
}
