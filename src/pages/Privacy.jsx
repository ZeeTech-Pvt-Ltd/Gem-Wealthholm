import LegalDoc from '../components/LegalDoc'

// Template legal text — have qualified counsel review before launch.
const sections = [
  {
    heading: 'Introduction',
    body: [
      'Gem Wealthholm ("we", "us", "our") respects your privacy and treats personal information with transparency and integrity. This Privacy Notice explains what information we collect, how we use it, and the choices you have.',
    ],
  },
  {
    heading: 'Information We Collect',
    body: ['We collect information you provide directly to us and information collected automatically:'],
    list: [
      'Identity and contact details: name, email address, phone number, and country.',
      'Account information: login credentials, preferences, and communication history.',
      'Financial information: payment details and transaction records, where required to operate your account.',
      'Technical information: IP address, browser type, device information, and usage data collected through cookies and similar technologies.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: ['We use your information to:'],
    list: [
      'Create and manage your account and provide the Service.',
      'Process deposits and withdrawals and comply with our legal obligations.',
      'Personalise and improve the Service, including our AI tools.',
      'Communicate with you about your account, updates, and support requests.',
      'Prevent fraud, abuse, and other harmful activity.',
    ],
  },
  {
    heading: 'Legal Bases for Processing',
    body: [
      'We process personal information where it is necessary to perform our contract with you, to comply with legal obligations, to pursue our legitimate interests (such as improving the Service and preventing fraud), or where you have given consent.',
    ],
  },
  {
    heading: 'Sharing Your Information',
    body: [
      'We do not sell your personal information. We share information only with service providers who help us operate the Service (such as payment processors and hosting providers), with professional advisers, or where required by law.',
      'Service providers are contractually bound to protect your information and may only use it to perform services on our behalf.',
    ],
  },
  {
    heading: 'Data Retention',
    body: [
      'We retain personal information only for as long as necessary to provide the Service, meet legal and regulatory requirements, resolve disputes, and enforce our agreements. When information is no longer needed, we delete or anonymise it.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'We use appropriate technical and organisational measures to protect your information, including encryption of data in transit, managed access controls, and regular security reviews. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Your Rights',
    body: ['Depending on your jurisdiction, you may have the right to:'],
    list: [
      'Access the personal information we hold about you.',
      'Request correction of inaccurate or incomplete information.',
      'Request deletion of your information, subject to legal requirements.',
      'Object to or restrict certain processing activities.',
      'Withdraw consent where processing is based on consent.',
      'Lodge a complaint with your local data protection authority.',
    ],
  },
  {
    heading: 'Cookies and Similar Technologies',
    body: [
      'We use cookies and similar technologies to operate the Service, remember your preferences, and understand how the Service is used. For more detail, see our Cookie Policy.',
    ],
  },
  {
    heading: 'International Transfers',
    body: [
      'Your information may be processed in countries other than your own. Where such transfers occur, we apply appropriate safeguards in accordance with applicable data protection law.',
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      'The Service is not directed to individuals under the age of 18, and we do not knowingly collect personal information from minors.',
    ],
  },
  {
    heading: 'Changes to This Notice',
    body: [
      'We may update this Privacy Notice from time to time. The updated version will be posted on this page with a new "Last updated" date.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'If you have questions about this Privacy Notice or wish to exercise your rights, contact us via the details on our contact page.',
    ],
  },
]

export default function Privacy() {
  return (
    <LegalDoc
      eyebrow="06 — Legal"
      title={
        <>
          Privacy <mark>Notice</mark>
        </>
      }
      ghost="PRIVACY"
      intro="How Gem Wealthholm collects, uses, and protects your personal information."
      updated="31 August 2026"
      sections={sections}
    />
  )
}
