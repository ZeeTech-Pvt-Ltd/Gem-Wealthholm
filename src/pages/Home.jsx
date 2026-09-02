import { Link } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'
import FeatureSection from '../components/FeatureSection'
import Accordion from '../components/Accordion'
import IntelligenceGrid from '../components/IntelligenceGrid'
import Testimonials from '../components/Testimonials'
import CtaSection from '../components/CtaSection'
import ActivityTicker from '../components/ActivityTicker'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { ArrowRightIcon } from '../components/Icons'
import { accordionItems, steps } from '../data/features'
import { faqItems } from '../data/faq'
import { markets } from '../data/markets'
import MarketIcon from '../components/MarketIcons'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <span className="hero__ghost" aria-hidden="true">
          WEALTHHOLM
        </span>
        <div className="container">
          <div className="hero__row">
            <div className="hero__main">
              <p className="eyebrow">Gem Wealthholm — AI market intelligence</p>
              <h1 className="hero__title">
                See the market with <mark>clarity</mark>
              </h1>
              <p className="hero__subtitle">
                An AI engine that scans markets around the clock, turns dense
                data into clear signals, and helps you act with more confidence
                — whatever your experience level.
              </p>
              <div className="hero__actions">
                <a href="#join" className="btn btn--ink">
                  Open an account
                </a>
                <Link to="/about-us" className="link-arrow">
                  Explore the platform
                  <ArrowRightIcon />
                </Link>
              </div>
              <ul className="hero__meta">
                <li>
                  <span className="hero__meta-val">24/7</span>
                  <span className="hero__meta-label">Monitoring</span>
                </li>
                <li>
                  <span className="hero__meta-val">65+</span>
                  <span className="hero__meta-label">Markets</span>
                </li>
                <li>
                  <span className="hero__meta-val">0.4s</span>
                  <span className="hero__meta-label">Signal latency</span>
                </li>
              </ul>
            </div>
            <div className="hero__side">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Live market ticker — right below the hero */}
      <ActivityTicker />

      {/* 01 — Engine */}
      <FeatureSection
        paper
        eyebrow="01 — Engine"
        title={
          <>
            The AI engine for <mark>market insights</mark>
          </>
        }
        intro="Gem Wealthholm is built to make market work feel simpler, no matter your experience level."
        paragraphs={[
          'Using artificial intelligence, the platform turns dense market data into clear, practical insights so you can act with more confidence in changing conditions.',
          'Round-the-clock monitoring, a clean interface, and strong security make the platform easy and safe to use. Copy trading opens the door to strategies used by experienced market participants.',
        ]}
        bullets={[
          'Real-time scanning of huge volumes of information',
          'Adaptive models that refresh with new data',
          'Copy trading with proven approaches',
        ]}
        image="/images/feature-engine.webp"
        imageAlt="Gem Wealthholm AI engine dashboard showing live market analysis and trading signals"
        cta={{ to: '/about-us', label: 'Learn more about us' }}
      />

      {/* 02 — Analysis (emerald band) */}
      <section className="section band-emerald">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow eyebrow--light">02 — Analysis</p>
                <h2 className="title">
                  Accurate analysis without <mark>the clutter</mark>
                </h2>
              </div>
              <p className="section-intro">
                The system handles large data sets and brings key signals to
                the surface — without burying you in unnecessary information.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Accordion items={accordionItems} dark defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      {/* 03 — Intelligence */}
      <section className="section section--rule">
        <span className="ghost-num" aria-hidden="true">
          03
        </span>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">03 — Intelligence</p>
                <h2 className="title">
                  Clear intelligence <mark>for traders</mark>
                </h2>
              </div>
              <p className="section-intro">
                A tech-led workspace where artificial intelligence supports
                human judgement — not the other way around.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <IntelligenceGrid />
          </Reveal>
        </div>
      </section>

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

      {/* 04 — How it works */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">04 — How it works</p>
                <h2 className="title">
                  Four steps to <mark>clarity</mark>
                </h2>
              </div>
              <p className="section-intro">
                From sign-up to your first withdrawal — no complex setup, no
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
        </div>
      </section>

      {/* 05 — Analytics */}
      <FeatureSection
        eyebrow="05 — Analytics"
        title={
          <>
            Clear analytics without <mark>emotion</mark>
          </>
        }
        intro="Complex market data becomes clear, structured information — decisions grounded in data, not guesswork."
        paragraphs={[
          'Gem Wealthholm filters out noise and helps you focus on what really matters, making it easier to read market conditions without emotional bias.',
          'The system keeps refreshing its insights with new data. Rather than leaning on stale indicators, it uses adaptive models that respond to market changes in real time.',
        ]}
        bullets={[
          'Signals highlighted the moment they appear',
          'Straightforward read on market conditions',
          'Adaptive models, refreshed continuously',
        ]}
        image="/images/feature-analytics.webp"
        imageAlt="Gem Wealthholm digital investment analytics and market performance charts"
        flip
        cta={{ to: '/faqs', label: 'Read the FAQ' }}
      />

      {/* 06 — Markets */}
      <section className="section section--rule">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">06 — Markets</p>
                <h2 className="title">
                  Markets we <mark>cover</mark>
                </h2>
              </div>
              <p className="section-intro">
                The engine watches crypto, FX, commodities, and indices around
                the clock — signals surface the moment meaningful movement
                appears.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="markets-grid">
              {markets.map((market) => (
                <div className="market-tile" key={market.symbol}>
                  <span className="market-tile__group">{market.group}</span>
                  <div className="market-tile__main">
                    <MarketIcon symbol={market.symbol} />
                    <div className="market-tile__info">
                      <span className="market-tile__symbol">{market.symbol}</span>
                      <span className="market-tile__name">{market.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — FAQ */}
      <section className="section section--rule section--paper">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">07 — FAQ</p>
                <h2 className="title">
                  Frequently asked <mark>questions</mark>
                </h2>
              </div>
              <p className="section-intro">
                Quick answers to the questions we hear most often.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Accordion items={faqItems.slice(0, 6)} defaultOpen={-1} />
          </Reveal>
          <Reveal>
            <Link className="link-arrow feature__cta" to="/faqs">
              Read the full FAQ
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 08 — Voices */}
      <section className="section section--rule">
        <span className="ghost-num" aria-hidden="true">
          08
        </span>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">08 — Voices</p>
                <h2 className="title">
                  What our <mark>users say</mark>
                </h2>
              </div>
              <p className="section-intro">
                Clarity, structure, and round-the-clock insight — in their
                words.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      <CtaSection
        title={
          <>
            See the market with <mark>clarity</mark>
          </>
        }
        form={<RegistrationForm idPrefix="cta" formId="cta-join" submitLabel="Start free access" />}
      />
    </>
  )
}
