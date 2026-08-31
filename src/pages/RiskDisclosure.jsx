import LegalDoc from '../components/LegalDoc'

// Template legal text — have qualified counsel review before launch.
const sections = [
  {
    heading: 'General Risk Statement',
    body: [
      'Trading and investing in financial markets involves significant risk and can result in the loss of part or all of your capital. You should carefully consider whether trading is appropriate for you in light of your experience, objectives, and financial circumstances.',
    ],
  },
  {
    heading: 'Market Volatility',
    body: [
      'Prices of cryptocurrencies, forex, commodities, indices, and other assets can fluctuate rapidly and unpredictably. Sudden price movements can occur at any time, including outside regular trading hours, and may result in losses greater than you anticipated.',
    ],
  },
  {
    heading: 'No Investment Advice',
    body: [
      'Gem Wealthholm provides technology and information tools. Nothing on the platform — including AI-generated analysis, signals, or other content — constitutes personalised investment advice, a recommendation, or a solicitation to trade. All content is provided for informational purposes only.',
    ],
  },
  {
    heading: 'Limitations of AI Tools',
    body: [
      'AI-assisted analysis and signals are based on historical and real-time data and statistical models. Models can be wrong, may not reflect all market conditions, and do not guarantee accurate predictions. Signals should never be relied upon in isolation, and automated outputs are no substitute for your own judgement.',
    ],
  },
  {
    heading: 'Past Performance',
    body: [
      'Any past performance shown on the platform, whether simulated or actual, is not a reliable indicator of future results. Hypothetical or backtested performance has inherent limitations and may overstate results achievable in live markets.',
    ],
  },
  {
    heading: 'Liquidity and Execution',
    body: [
      'Market conditions may affect the speed and price at which orders are executed. Low liquidity can lead to slippage, wider spreads, and difficulty entering or exiting positions at expected prices.',
    ],
  },
  {
    heading: 'Technology and Cybersecurity Risks',
    body: [
      'Online platforms are subject to technology failures, outages, and security threats, including unauthorised access, phishing, and other attacks. We employ security measures to protect the Service, but no online system is completely immune to risk.',
    ],
  },
  {
    heading: 'Regulatory Risks',
    body: [
      'The legal and regulatory treatment of digital assets and trading platforms varies by jurisdiction and continues to evolve. Changes in law or regulation may affect the availability, value, or legality of certain assets or features.',
    ],
  },
  {
    heading: 'Your Responsibility',
    body: [
      'You are solely responsible for your own trading and investment decisions and for verifying any information before acting on it. Never trade with money you cannot afford to lose.',
    ],
  },
  {
    heading: 'Seek Independent Advice',
    body: [
      'Before using the Service or engaging in any trading activity, you should seek independent professional advice tailored to your personal circumstances.',
    ],
  },
]

export default function RiskDisclosure() {
  return (
    <LegalDoc
      eyebrow="07 — Legal"
      title={
        <>
          Risk <mark>Disclosure</mark>
        </>
      }
      ghost="RISK"
      intro="The risks you should understand before using the Gem Wealthholm platform."
      updated="31 August 2026"
      sections={sections}
    />
  )
}
