import RegistrationForm from '../components/RegistrationForm'
import Reveal from '../components/Reveal'
import { MailIcon, PinIcon, ClockIcon } from '../components/Icons'

const contactCards = [
  {
    icon: MailIcon,
    title: 'Support email',
    text: 'support@gemwealth-holm.com',
  },
  {
    icon: PinIcon,
    title: 'Office',
    text: 'Sydney, NSW, Australia',
  },
  {
    icon: ClockIcon,
    title: 'Support hours',
    text: 'Monday – Friday, 9:00 – 18:00 AEST',
  },
]

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero__ghost" aria-hidden="true">
          HELLO
        </span>
        <div className="container">
          <p className="eyebrow">02 — Contact</p>
          <h1 className="page-hero__title">
            Get in <mark>touch</mark>
          </h1>
          <p className="page-hero__text">
            Questions about the platform, your account, or working with us?
            Our team is happy to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact__grid">
            <Reveal>
              <p className="eyebrow">01 — Direct line</p>
              {contactCards.map((card) => {
                const Icon = card.icon
                return (
                  <div className="contact-card" key={card.title}>
                    <span className="contact-card__icon">
                      <Icon />
                    </span>
                    <div>
                      <div className="contact-card__title">{card.title}</div>
                      <div className="contact-card__text">{card.text}</div>
                    </div>
                  </div>
                )
              })}
            </Reveal>
            <Reveal delay={120}>
              <RegistrationForm idPrefix="contact" formId="contact-join" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
