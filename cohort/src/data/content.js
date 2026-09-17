import { DAY, strip } from './palette'

/* ── Navigation ─────────────────────────────────────────────────────────── */

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
]

/** The "More" dropdown. `icon` is a Lucide component name, resolved at render. */
export const MENU_LINKS = [
  { label: 'Developer dashboard', to: '/dashboard', icon: 'LineChart' },
  { label: 'Tester portal', to: '/testers', icon: 'Users' },
  { label: 'Payments', to: '/payments', icon: 'CreditCard' },
  { label: 'Referrals', to: '/referrals', icon: 'Share2' },
  { label: 'Contact', to: '/contact', icon: 'Mail' },
  { label: 'FAQs', to: '/faqs', icon: 'HelpCircle' },
  { label: 'Privacy policy', to: '/privacy', icon: 'Shield' },
  { label: 'Terms & conditions', to: '/terms', icon: 'FileText' },
  { label: 'Return & refund policy', to: '/refund', icon: 'RotateCcw' },
]

export const FOOTER_COLS = [
  {
    head: 'Product',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Process', to: '/process' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Submit an app', to: '/submit' },
      { label: 'Portfolio', to: '/portfolio' },
    ],
  },
  {
    head: 'For testers',
    links: [
      { label: 'Tester portal', to: '/testers' },
      { label: 'Task guide', to: '/task' },
      { label: 'Referrals', to: '/referrals' },
      { label: 'Sign up', to: '/signup' },
    ],
  },
  {
    head: 'Account',
    links: [
      { label: 'Log in', to: '/login' },
      { label: 'Create account', to: '/signup' },
      { label: 'Forgot password', to: '/forgot' },
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Payments', to: '/payments' },
    ],
  },
  {
    head: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Privacy policy', to: '/privacy' },
      { label: 'Terms & conditions', to: '/terms' },
    ],
  },
]

/* ── Landing ────────────────────────────────────────────────────────────── */

/** Hero strip: eight verified days, one late, today in progress, then unreached. */
export const HERO_DAYS = strip(14, (i) => {
  if (i === 8) return 'linear-gradient(180deg,#ff7259,#dd2b0f)' // today
  if (i > 8) return DAY.OFF
  if (i === 4) return 'rgba(143,215,176,.34)' // a lighter day — proof came late
  return 'rgba(143,215,176,.55)'
})

export const HERO_STATS = [
  { value: '94.7%', label: 'Review approval rate' },
  { value: '3,471', label: 'Apps published via Cohort' },
  { value: '19h', label: 'Median time to fill 12 slots' },
  { value: '0', label: 'Counter resets on our watch' },
]

export const STEPS = [
  {
    no: '01',
    icon: 'Link2',
    title: 'Connect the Play track',
    body: 'Paste your package name and closed-testing opt-in URL. We validate the track is live and open before charging anything.',
  },
  {
    no: '02',
    icon: 'Users',
    title: 'Size the cohort',
    body: 'Twelve is the minimum Play accepts. Add spare slots so a drop-out never costs you the streak.',
  },
  {
    no: '03',
    icon: 'Sun',
    title: 'Testers opt in and open daily',
    body: 'Each tester joins from a verified device and Play account, then files proof of an authentic session every day.',
  },
  {
    no: '04',
    icon: 'FileCheck',
    title: 'Export the compliance record',
    body: 'On day 14 you get a signed PDF of participation and can apply for production access the same hour.',
  },
]

export const TRUST = [
  {
    icon: 'ShieldCheck',
    title: 'Verified device and Play account',
    body: 'Every tester passes a device attestation and a Play account age check before they can claim a slot. No emulators, no fresh throwaway accounts.',
    meta: '61 device models · 4,100 verified accounts',
  },
  {
    icon: 'Camera',
    title: 'Daily proof-of-open screenshots',
    body: 'Testers upload a timestamped screenshot from inside your build. Anything that fails the automated check is rejected and reassigned within the hour.',
    meta: 'Median proof latency: 3h 40m',
  },
  {
    icon: 'Timer',
    title: '14-day countdown per tester',
    body: 'The dashboard tracks each tester on their own clock, not a shared one, so you see exactly who threatens the cohort before Play does.',
    meta: 'Per-tester streak, day-level resolution',
  },
  {
    icon: 'RefreshCw',
    title: 'Auto-replace inactive testers',
    body: 'Miss two consecutive days and the slot is refilled from the priority pool automatically. Your spare slots absorb it without a restart.',
    meta: 'Avg replacement time: 6h 12m',
  },
]

export const POINTS_LADDER = [
  {
    value: '+10',
    title: 'One verified day of testing',
    note: 'Open the app, complete the task, upload proof',
    highlight: false,
  },
  {
    value: '140',
    title: 'One 14-day tester slot',
    note: 'Twelve slots complete a compliant cohort',
    highlight: false,
  },
  {
    value: '1,680',
    title: 'A full self-funded cohort',
    note: 'Or $49 on Pro, filled from the priority pool',
    highlight: true,
  },
]

export const QUOTES = [
  {
    text: 'We lost the streak twice on our own before this. Cohort caught a tester going dark on day 6 and swapped them the same evening — production access came through on day 15.',
    name: 'Marta Beier',
    role: 'Solo dev · Trailkit',
    av: 'linear-gradient(140deg,#5a6cff,#2b2f5e)',
  },
  {
    text: 'The compliance PDF is the part I did not expect to care about. Review came back in under 48 hours with zero follow-up questions.',
    name: 'Devansh Rao',
    role: 'CTO · Fieldnote Labs',
    av: 'linear-gradient(140deg,#ff8a75,#ae1800)',
  },
  {
    text: 'I funded three of my own cohorts purely on points from testing other apps. For a pre-revenue side project that is the whole difference.',
    name: 'Kelsey Ohara',
    role: 'Indie · Pocket Ledger',
    av: 'linear-gradient(140deg,#8fd7b0,#1f5c43)',
  },
]

/** The five landing FAQs. The /faqs page extends this set with more categories. */
export const CORE_FAQS = [
  {
    q: 'Does Google actually require 12 testers for 14 days?',
    a: 'For personal developer accounts created after November 2023, Play requires at least 12 testers opted into a closed test, continuously, for 14 days before you can apply for production access. Cohort is built around that specific rule.',
  },
  {
    q: 'What happens if a tester stops opening my app?',
    a: 'Two consecutive missed days flags the slot. We refill it from the priority pool automatically. If you provisioned spare slots, your compliant count never drops below 12, so the counter keeps running.',
  },
  {
    q: 'Are these real people on real devices?',
    a: 'Yes. Every account passes device attestation and a Play account age check, and each testing day requires a timestamped in-app screenshot that clears an automated authenticity check.',
  },
  {
    q: 'How do points work if I do not want to pay?',
    a: 'Test other developers apps: each verified day of testing banks 10 points, and 140 points funds one 14-day tester slot. Free accounts are queued behind paid ones for tester assignment.',
  },
  {
    q: 'Can I run more than one app at a time?',
    a: 'On Pro you can run two concurrent cohorts, and Studio removes the cap. Each cohort keeps its own 14-day clock and its own compliance record.',
  },
]

export const SIGNUP_PROMISES = [
  'No card required to open an account or bank points',
  'Device attestation runs once, at signup, on your side too',
  'Cancel a cohort before day 1 and points return in full',
]
