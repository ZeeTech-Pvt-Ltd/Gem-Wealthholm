import LegalDoc from '../components/LegalDoc'

// Template legal text — have qualified counsel review before launch.
const sections = [
  {
    heading: 'What Are Cookies',
    body: [
      'Cookies are small text files placed on your device when you visit a website. They help the website recognise your device, remember your preferences, and understand how the site is used. Similar technologies include local storage, pixels, and tags.',
    ],
  },
  {
    heading: 'How We Use Cookies',
    body: ['We use cookies and similar technologies to:'],
    list: [
      'Keep you signed in and maintain the security of your session.',
      'Remember your preferences, such as language and display settings.',
      'Understand how visitors use the Service so we can improve it.',
      'Measure the performance of our pages and content.',
    ],
  },
  {
    heading: 'Types of Cookies We Use',
    body: ['The cookies used on the Service fall into the following categories:'],
    list: [
      'Strictly necessary cookies: required for the Service to function, including authentication and security. These cannot be switched off.',
      'Preference cookies: remember choices you make, such as language and region.',
      'Analytics cookies: help us understand how visitors interact with the Service. Where used, this information is aggregated and does not identify you directly.',
    ],
  },
  {
    heading: 'Third-Party Cookies',
    body: [
      'Some cookies may be set by third-party services we use, such as analytics providers. These third parties process data in accordance with their own privacy policies.',
    ],
  },
  {
    heading: 'Managing Cookies',
    body: [
      'You can control and delete cookies through your browser settings. You can also set your browser to refuse all or some cookies. Please note that disabling cookies may affect the functionality of the Service, including the ability to remain signed in.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Cookie Policy from time to time. The updated version will be posted on this page with a new "Last updated" date.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'If you have questions about this Cookie Policy, contact us via the details on our contact page.',
    ],
  },
]

export default function Cookies() {
  return (
    <LegalDoc
      eyebrow="08 — Legal"
      title={
        <>
          Cookie <mark>Policy</mark>
        </>
      }
      ghost="COOKIES"
      intro="How we use cookies and similar technologies, and how you can manage them."
      updated="31 August 2026"
      sections={sections}
    />
  )
}
