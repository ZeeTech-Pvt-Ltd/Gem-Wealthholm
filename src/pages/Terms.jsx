import LegalDoc from '../components/LegalDoc'

// Template legal text — have qualified counsel review before launch.
const sections = [
  {
    heading: 'Acceptance of Terms',
    body: [
      'These Terms of Use ("Terms") govern your access to and use of the Gem Wealthholm website and platform ("the Service"). By creating an account or otherwise using the Service, you confirm that you have read, understood, and agree to be bound by these Terms, together with our Privacy Notice, Risk Disclosure, and Cookie Policy.',
      'If you do not agree to these Terms, you must not register for or use the Service.',
    ],
  },
  {
    heading: 'Eligibility',
    body: [
      'The Service is available only to individuals who are at least 18 years old and who can form legally binding contracts under applicable law. By using the Service, you represent and warrant that you meet these requirements and that your use of the Service is lawful in your jurisdiction.',
    ],
  },
  {
    heading: 'Nature of the Service',
    body: [
      'Gem Wealthholm provides technology and information tools, including AI-assisted market analysis, signals, and related content. The Service is provided for informational purposes only.',
      'Gem Wealthholm is not a licensed financial adviser, broker, or investment manager. Nothing on the Service constitutes personalised investment advice, a recommendation, an offer, or a solicitation to buy or sell any asset. Any decision you make — and its outcome — remains your responsibility.',
    ],
  },
  {
    heading: 'Account Registration and Security',
    body: [
      'You agree to provide accurate, current, and complete information when registering and to keep that information up to date. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately if you suspect any unauthorised use of your account.',
    ],
  },
  {
    heading: 'Deposits and Withdrawals',
    body: [
      'Details of payment methods, minimum amounts, and processing times are displayed within the platform. Deposits and withdrawals are processed in accordance with our internal procedures and applicable law. We may require additional identity verification before processing a withdrawal.',
    ],
  },
  {
    heading: 'Fees',
    body: [
      'Where applicable, fees are disclosed before you commit to any action. By proceeding, you authorise the deduction of such fees. We may adjust fees from time to time with notice as required by law.',
    ],
  },
  {
    heading: 'Acceptable Use',
    body: [
      'You agree not to misuse the Service, including by attempting to gain unauthorised access, interfering with its operation, using automated means to extract data, or using the Service for any unlawful purpose.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'The Service and all content, software, and materials made available through it are owned by or licensed to Gem Wealthholm and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the Service without our prior written consent.',
    ],
  },
  {
    heading: 'Third-Party Services',
    body: [
      'The Service may link to or integrate with third-party services. We are not responsible for the content, availability, or practices of any third party. Your use of third-party services is subject to their own terms.',
    ],
  },
  {
    heading: 'Disclaimers',
    body: [
      'The Service is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, we disclaim all warranties, whether express or implied, including fitness for a particular purpose, accuracy, and non-infringement. We do not guarantee uninterrupted, error-free, or secure operation.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted by law, Gem Wealthholm, its affiliates, officers, and employees shall not be liable for any indirect, incidental, special, or consequential damages, or for any loss of profits, data, or goodwill, arising out of or in connection with your use of the Service.',
    ],
  },
  {
    heading: 'Suspension and Termination',
    body: [
      'We may suspend or terminate your access to the Service at any time, with or without notice, including where we reasonably believe you have breached these Terms or applicable law.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    body: [
      'We may update these Terms from time to time. The updated version will be posted on this page with a new "Last updated" date. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'These Terms are governed by the laws of Australia. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of New South Wales, Australia.',
    ],
  },
]

export default function Terms() {
  return (
    <LegalDoc
      eyebrow="05 — Legal"
      title={
        <>
          Terms of <mark>Use</mark>
        </>
      }
      ghost="LEGAL"
      intro="The rules that govern your use of the Gem Wealthholm platform."
      updated="31 August 2026"
      sections={sections}
    />
  )
}
