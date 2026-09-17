/**
 * The three legal documents, keyed by route slug.
 *
 * One shape, three instances — so `/privacy`, `/terms` and `/refund` all render
 * from the same component and can never drift apart in layout.
 */
export const LEGAL_DOCS = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy policy',
    updated: '12 June 2026',
    reading: '6 minute read',
    intro:
      'This policy explains what Cohort collects, why each item exists, and how long we keep it. We collect the minimum a compliance product can function on, and we have never sold data to anyone.',
    sections: [
      { n: '01', h: 'What we collect from developers', b: 'Account email, a hashed password, your Play Console developer ID, the package names and opt-in URLs you submit, and billing metadata held by our payment processor. We never receive or store your signing keys, and we never request Play Console access.' },
      { n: '02', h: 'What we collect from testers', b: 'Account email, the Play account email used to opt into tracks, a device attestation token, device model and Android version, and the proof artefacts uploaded during a cohort. Attestation tokens confirm a real device; they are not a persistent hardware identifier we can trace across services.' },
      {
        n: '03',
        h: 'Proof artefacts',
        b: 'Screenshots uploaded as proof of a testing session are visible to the developer running that cohort and to our review systems. They are retained for the life of the cohort plus ninety days so a compliance record can be re-issued, then deleted permanently.',
        list: [
          'Visible to: the cohort owner, our automated checks, and our two-person support team when a dispute is raised.',
          'Never visible to: other testers, other developers, or anybody outside Cohort.',
          'Deleted: 90 days after the cohort closes, automatically and irreversibly.',
        ],
      },
      { n: '04', h: 'Cookies and analytics', b: 'One session cookie to keep you logged in and one preference cookie for interface state. We run privacy-preserving, self-hosted page analytics with no cross-site identifiers, no advertising pixels, and no third-party trackers of any kind.' },
      { n: '05', h: 'Sharing and processors', b: 'Payments are handled by our payment processor, who receives your billing details directly and never shares full card data with us. Transactional email is delivered by an email provider. That is the complete list of processors; we do not share data with anyone else.' },
      { n: '06', h: 'Your rights', b: 'You can export everything we hold on you from account settings, and you can delete your account at any time. Deletion removes your profile, proof artefacts and points balance within thirty days, except records we must retain for tax and fraud purposes.' },
      { n: '07', h: 'Contacting us', b: 'Write to privacy@cohort.dev. A named human replies, usually within four working hours. If you are in the EEA or UK you also have the right to complain to your local supervisory authority.' },
    ],
  },

  terms: {
    slug: 'terms',
    title: 'Terms & conditions',
    updated: '12 June 2026',
    reading: '8 minute read',
    intro:
      'These terms govern your use of Cohort as a developer, a tester, or both. Plain language on purpose — if a clause needs a lawyer to parse, it needs rewriting.',
    sections: [
      { n: '01', h: 'What Cohort provides', b: 'We match verified testers to your closed testing track, verify their daily engagement, replace testers who become inactive, and produce a compliance record. We are a coordination and evidence service; we are not affiliated with Google LLC, and we do not act on your behalf inside the Play Console.' },
      { n: '02', h: 'What we do not promise', b: 'We cannot promise that Google grants production access. Approval is entirely Google\u2019s decision, based on your app, your policies and your listing. What we promise is that your closed test satisfies the twelve-tester, fourteen-day requirement, evidenced in the compliance export.' },
      {
        n: '03',
        h: 'Your obligations as a developer',
        b: 'The build you submit must be a genuine app you have the right to distribute, free of malware, and compliant with Play policy. Tasks you set for testers must be completable in a few minutes and must never require payment, personal data beyond what the app already asks for, or off-platform activity.',
        list: [
          'No asking testers to leave reviews, ratings or feedback on the Play listing — that violates Play policy and gets both of us removed.',
          'No collecting tester personal data outside what your app\u2019s own privacy policy discloses.',
          'No tasks requiring a purchase, a signup elsewhere, or more than roughly five minutes a day.',
        ],
      },
      { n: '04', h: 'Your obligations as a tester', b: 'Testing must happen on a real, physical device you control, using a Play account that is genuinely yours. Proof must come from an actual session with the app on that device on that day. Emulators, farmed accounts, recycled screenshots and scripted opens are permanent bans on first offence, with points forfeited.' },
      { n: '05', h: 'Points', b: 'Points are testing credit with no cash value and cannot be exchanged for money. They expire twelve months after being earned. We may adjust the earning rate for future activity with thirty days notice; points already banked keep their value at the rate in force when earned.' },
      { n: '06', h: 'Payment and renewal', b: 'Per-cohort charges are taken on cohort creation, after track verification. Studio subscriptions bill monthly in advance and can be cancelled at any time, effective at the end of the paid period. Prices may change with thirty days notice; a cohort already created is never repriced.' },
      { n: '07', h: 'Suspension and termination', b: 'We may suspend an account that breaks these terms, attempts to game the proof system, or exposes other users to risk. Where suspension is our error, we restore the account and refund anything affected. You may close your account at any time; live cohorts run to completion or are refunded pro rata.' },
      { n: '08', h: 'Liability', b: 'Our total liability for any claim is limited to the amount you paid us in the twelve months before it arose. We are not liable for lost revenue, lost store rankings, or delayed launches. Nothing here limits liability for fraud or anything else that cannot lawfully be limited.' },
      { n: '09', h: 'Changes to these terms', b: 'Material changes are emailed to every account holder thirty days before they take effect. Continuing to use Cohort after that date means you accept the revised terms; if you do not, close your account and we refund any unused balance.' },
    ],
  },

  refund: {
    slug: 'refund',
    title: 'Return & refund policy',
    updated: '12 June 2026',
    reading: '4 minute read',
    intro:
      'Software has no shipping label, so a return here means one thing: your money back when the service did not do what it said it would. These are the exact conditions, with no discretion involved on our side.',
    sections: [
      { n: '01', h: 'The 72-hour fill guarantee', b: 'If we cannot fill twelve compliant tester slots within 72 hours of cohort creation, the cohort is cancelled and refunded in full, automatically. You do not need to ask, and the refund is issued to the original payment method within five working days. Point-funded cohorts have their points returned immediately with the expiry clock reset.' },
      { n: '02', h: 'Cancelling before day one', b: 'Cancel at any point before the cohort\u2019s first testing day and you receive a full refund minus the pro-rata cost of slots already filled. Filled slots are charged because a tester has already passed attestation and opted into your track — real work happened.' },
      {
        n: '03',
        h: 'After the cohort starts',
        b: 'Once day one begins, cohorts are non-refundable, because testers are committing fourteen days on the strength of it. The exception is a failure on our side: if the compliance record is incomplete through our fault, we re-run the cohort at no charge or refund it in full, your choice.',
        list: [
          'Refundable: our systems failed to verify or replace, and the record is unusable.',
          'Not refundable: Google declined production access for reasons relating to your app, listing or policies.',
          'Not refundable: you withdrew the build, closed the track, or changed the package mid-cohort.',
        ],
      },
      { n: '04', h: 'Add-ons', b: 'Device coverage and structured bug reporting follow the cohort they were bought for. If the cohort is refunded, its add-ons are refunded with it. Bought mid-cohort and unused, they are refunded pro rata against days remaining.' },
      { n: '05', h: 'Studio subscriptions', b: 'Cancel any time; the plan runs to the end of the paid month and does not renew. We do not refund partial months, but we also never charge for a month you did not use — cancellation takes effect immediately at the next billing date.' },
      { n: '06', h: 'Points', b: 'Points spent on a refunded cohort are returned in full, with their original expiry date restored. Points cannot be converted to cash under any circumstance, including account closure, because they are testing credit rather than a stored-value balance.' },
      { n: '07', h: 'How to request a refund', b: 'Email refunds@cohort.dev or use the contact form with your cohort ID. Automatic refunds under the fill guarantee need no action. Everything else gets a decision from a named person within two working days, and if we say no, we say exactly which clause applies and why.' },
    ],
  },
}

export const LEGAL_TABS = [
  { label: 'Privacy policy', to: '/privacy', slug: 'privacy' },
  { label: 'Terms & conditions', to: '/terms', slug: 'terms' },
  { label: 'Return & refund policy', to: '/refund', slug: 'refund' },
]
