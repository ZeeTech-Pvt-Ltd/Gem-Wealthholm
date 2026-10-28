'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import FeatureSection from './FeatureSection'
import Accordion from './Accordion'
import Testimonials from './Testimonials'
import CtaSection from './CtaSection'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { ArrowRightIcon, ShieldIcon, EyeIcon, SparkIcon, ClockIcon, CheckIcon, CardsIcon, PinIcon } from './Icons'
import { steps, platformFeatures } from '../data/features'
import { homeFaqItems } from '../data/faq'
import { marketGroups } from '../data/markets'
import MarketIcon from './MarketIcons'

const featureIcons = {
  spark: SparkIcon,
  eye: EyeIcon,
  check: CheckIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
  cards: CardsIcon,
}

const whyAustralia = [
  {
    icon: ClockIcon,
    title: 'Aussie time zones',
    text: 'Alerts and support fit your day, from Perth to Brisbane.',
  },
  {
    icon: CardsIcon,
    title: 'AUD-friendly',
    text: 'See your account in Australian dollars and fund it with ease.',
  },
  {
    icon: PinIcon,
    title: 'Local focus',
    text: 'Market coverage includes ASX-listed names and AUD currency pairs.',
  },
  {
    icon: SparkIcon,
    title: 'Plain English',
    text: 'No heavy jargon. Every signal is easy to understand.',
  },
]

const compareRows = [
  { label: 'Market watching', manual: 'A few hours a day', gem: '24/7' },
  { label: 'Markets covered', manual: 'Usually one or two', gem: 'Crypto, forex, stocks, commodities' },
  { label: 'Decision basis', manual: 'Gut feel and news', gem: 'Price data and patterns' },
  { label: 'Emotional bias', manual: 'High', gem: 'Reduced' },
  { label: 'Time needed', manual: 'Hours of research', gem: 'Minutes to review signals' },
  { label: 'Final decision', manual: 'You', gem: 'Still you' },
]

/**
 * Below-the-fold home content. Renders after the first paint so the
 * hero (the LCP element) commits without waiting for the whole
 * below-fold tree (server-renders as null, hydrates, then appears
 * after a rAF - the .main--home guard keeps the footer out of view).
 */
export default function DeferredHomeBody() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  if (!ready) return null

  return (
    <>
      {/* Stats */}
      <section className="stats-band" aria-label="Platform statistics">
        <div className="container">
          <Reveal>
            <div className="stats-band__grid">
              <div className="stats-band__cell">
                <div className="stats-band__value">
                  <CountUp to={24} />
                  <em>/7</em>
                </div>
                <div className="stats-band__label">Monitoring</div>
              </div>
              <div className="stats-band__cell">
                <div className="stats-band__value">
                  <CountUp to={65} />
                  <em>+</em>
                </div>
                <div className="stats-band__label">Markets covered</div>
              </div>
              <div className="stats-band__cell">
                <div className="stats-band__value">
                  <CountUp to={100} />
                  <em>%</em>
                </div>
                <div className="stats-band__label">Encrypted channels</div>
              </div>
              <div className="stats-band__cell">
                <div className="stats-band__value">
                  <CountUp to={99.9} decimals={1} />
                  <em>%</em>
                </div>
                <div className="stats-band__label">Platform uptime</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 - What is Gem Wealthholm */}
      <FeatureSection
        paper
        eyebrow="What is Gem Wealthholm"
        title={
          <>
            What Is <mark>Gem Wealthholm?</mark>
          </>
        }
        intro="Gem Wealthholm is an online trading platform built for people in Australia."
        paragraphs={[
          'It uses artificial intelligence to scan crypto, forex, stock and commodity markets, then shows you trade ideas based on real price data. You choose what to act on.',
          'There is no app to download, and you can open an account from 347 A$. The platform keeps watch around the clock and presents every insight in plain language.',
        ]}
        bullets={[
          'Real-time scanning of huge volumes of information',
          'Adaptive models that refresh with new data',
          'Copy trading with proven approaches',
        ]}
        image="/images/The AI engine for market insights.webp"
        imageAlt="Gem Wealthholm AI engine dashboard showing live market analysis and trading signals"
      />

      {/* 02 - How it works */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">How it works</p>
                <h2 className="title">
                  Get Started in <mark>Simple Steps</mark>
                </h2>
              </div>
              <p className="section-intro">
                From sign-up to your first withdrawal - no complex setup, no
                jargon.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid-4">
              {steps.map((item) => (
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
          <Reveal>
            <div className="feature__cta-row">
              <a href="#join" className="btn btn--ink">
                Start Step 1 Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 - Markets */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">Markets</p>
                <h2 className="title">
                  One Platform, <mark>Four Markets</mark>
                </h2>
              </div>
              <p className="section-intro">
                The engine watches crypto, forex, stocks and commodities
                around the clock - signals surface the moment meaningful
                movement appears.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid-4">
              {marketGroups.map((group) => (
                <article className="market-group-card" key={group.name}>
                  <h3 className="market-group-card__title">{group.name}</h3>
                  <p className="market-group-card__text">{group.text}</p>
                  <div className="market-group-card__symbols">
                    {group.symbols.map((symbol) => (
                      <span className="market-chip" key={symbol}>
                        <MarketIcon symbol={symbol} />
                        {symbol}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 - Key features */}
      <section className="section section--rule section--paper">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">Features</p>
                <h2 className="title">
                  Tools That Make Trading <mark>Easier</mark>
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

      {/* 05 - Why Australians choose Gem Wealthholm */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">Why Australians</p>
                <h2 className="title">
                  Built Around How <mark>Australians Trade</mark>
                </h2>
              </div>
              <p className="section-intro">
                Most trading tools are made for US or European hours. Gem
                Wealthholm is set up for life in Australia.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid-4">
              {whyAustralia.map((item) => {
                const Icon = item.icon
                return (
                  <article className="value-card" key={item.title}>
                    <span className="value-card__icon">
                      <Icon />
                    </span>
                    <h3 className="value-card__title">{item.title}</h3>
                    <p className="value-card__text">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </Reveal>
          <Reveal>
            <p className="section-note">
              That is why more people are looking for an AI trading platform
              Australia can relate to - not one built for somewhere else.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 06 - AI vs manual trading */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">Comparison</p>
                <h2 className="title">
                  AI-Assisted Trading vs <mark>Doing It All Yourself</mark>
                </h2>
              </div>
              <p className="section-intro">
                The engine handles the watching and the number-crunching - the
                final call always stays with you.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="compare">
              <div className="compare__row compare__row--head">
                <span className="compare__label" aria-hidden="true" />
                <span className="compare__cell">Manual Trading</span>
                <span className="compare__cell compare__cell--gem">Gem Wealthholm</span>
              </div>
              {compareRows.map((row) => (
                <div className="compare__row" key={row.label}>
                  <span className="compare__label">{row.label}</span>
                  <span className="compare__cell">{row.manual}</span>
                  <span className="compare__cell compare__cell--gem">{row.gem}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 - Is Gem Wealthholm safe */}
      <FeatureSection
        eyebrow="Safety"
        title={
          <>
            Is Gem Wealthholm <mark>Safe</mark> to Use?
          </>
        }
        intro="We know trust matters before you sign up. Here is how we protect you:"
        paragraphs={[
          'Gem Wealthholm puts honesty first. Trading always carries risk, and we will never promise guaranteed profits.',
          'Clear terms, a full risk disclosure and encrypted channels are the foundation - everything else is built on top of them.',
        ]}
        bullets={[
          'Encrypted data - protected with SSL encryption',
          'Secure accounts - login protection keeps your account private',
          'Clear terms - no hidden fees, easy-to-find policies',
          'You stay in control - the AI suggests, you decide',
        ]}
        image="/images/Clear analytics without emotion.webp"
        imageAlt="Gem Wealthholm digital investment analytics and market performance charts"
        cta={{ to: '#join', label: 'Open My Free Account' }}
      />

      {/* 08 - Voices */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">Voices</p>
                <h2 className="title">
                  What our <mark>users say</mark>
                </h2>
              </div>
              <p className="section-intro">
                Clarity, structure, and round-the-clock insight - in their
                words.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Testimonials limit={4} />
          </Reveal>
          <Reveal>
            <Link className="link-arrow feature__cta" href="/reviews">
              Read all reviews
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 09 - FAQ */}
      <section className="section section--rule section--paper">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">FAQ</p>
                <h2 className="title">
                  Frequently asked <mark>questions</mark>
                </h2>
              </div>
              <p className="section-intro">
                Quick answers to the questions Australians ask most often.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Accordion items={homeFaqItems.slice(0, 6)} defaultOpen={-1} />
          </Reveal>
          <Reveal>
            <Link className="link-arrow feature__cta" href="/faqs">
              Read the full FAQ
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection
        center
        title={
          <>
            Ready to Try a Smarter AI Trading Platform in{' '}
            <mark>Australia</mark>?
          </>
        }
        text="Join Gem Wealthholm today. Sign up for free and let AI do the heavy market research for you."
      />
    </>
  )
}
