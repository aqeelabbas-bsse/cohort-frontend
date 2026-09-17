import { DAY, strip } from './palette'
import { CORE_FAQS } from './content'

/* ── About ──────────────────────────────────────────────────────────────── */

export const ABOUT_STATS = [
  { value: '2024', label: 'Founded, two people, one spare room' },
  { value: '3,471', label: 'Apps taken to production' },
  { value: '4,100', label: 'Verified testers, 61 device models' },
  { value: '31', label: 'Countries represented in the pool' },
]

export const VALUES = [
  {
    icon: 'Users',
    title: 'Testers are people, not inventory',
    body: 'Every tester is paid in points at a published rate, sees exactly what a task involves before claiming it, and can leave a cohort without penalty in the first 24 hours.',
  },
  {
    icon: 'FileCheck',
    title: 'Evidence over assurance',
    body: 'We do not ask you to trust us. Every testing day produces a timestamped artefact you can inspect, and the day-14 export is a document you could hand to a reviewer.',
  },
  {
    icon: 'XCircle',
    title: 'No fake engagement, ever',
    body: 'Emulators, farmed accounts and scripted opens are permanent bans on both sides of the marketplace. It is the one rule with no second chance.',
  },
  {
    icon: 'Coins',
    title: 'Boring, legible pricing',
    body: 'One price per cohort, one points rate, no per-tester upsells and no surprise renewal. If we cannot fill your cohort in 72 hours you get everything back.',
  },
]

export const MILESTONES = [
  {
    when: 'Nov 2023',
    title: 'Google changes the rules',
    body: 'Personal developer accounts must run a twelve-tester closed test for fourteen unbroken days before applying for production. Indie release plans everywhere quietly break.',
  },
  {
    when: 'Mar 2024',
    title: 'We miss our own launch',
    body: 'Our first app sat in closed testing for six weeks because testers kept going quiet around day six. We rebuilt the tracking in a spreadsheet, then realised the spreadsheet was the product.',
  },
  {
    when: 'Aug 2024',
    title: 'First 100 cohorts',
    body: 'The reciprocal points model arrives: test other developers apps, fund your own slots. Ninety-four of the first hundred cohorts reach day fourteen without a reset.',
  },
  {
    when: 'Feb 2025',
    title: 'Auto-replacement ships',
    body: 'Two consecutive missed days now refills the slot from the priority pool automatically. Median replacement time settles at just over six hours.',
  },
  {
    when: 'Jun 2026',
    title: '3,471 apps published',
    body: 'Across 31 countries and 61 device models, with a 94.7% review approval rate on first application. Still two people.',
  },
]

export const TEAM = [
  {
    name: 'Marta Beier',
    role: 'Co-founder, product & design',
    bio: 'Shipped Android apps for eleven years, most of them alone. Designs everything you see and answers the support inbox before lunch.',
    av: 'linear-gradient(140deg,#5a6cff,#2b2f5e)',
  },
  {
    name: 'Devansh Rao',
    role: 'Co-founder, engineering',
    bio: 'Built the attestation pipeline and the replacement engine. Believes any compliance problem is really a scheduling problem in disguise.',
    av: 'linear-gradient(140deg,#ff8a75,#ae1800)',
  },
]

/* ── Services ───────────────────────────────────────────────────────────── */

export const SERVICES = [
  {
    icon: 'Users',
    title: 'Closed testing cohorts',
    tag: 'The core service',
    cta: 'Start a cohort',
    to: '/submit',
    body: 'Twelve or more verified testers opted into your closed track, engaged daily for fourteen consecutive days, with auto-replacement covering anyone who drops. Ends with a signed compliance record.',
    chips: ['Device attestation', 'Daily proof', 'Auto-replace', 'Compliance PDF'],
    priceLabel: 'From',
    price: '$49',
    per: 'per cohort',
    priceNote:
      'Or 1,680 points earned by testing other apps. Free accounts queue behind paid ones.',
  },
  {
    icon: 'Smartphone',
    title: 'Device coverage matrix',
    tag: 'Add-on',
    cta: 'Add coverage',
    to: '/pricing',
    body: 'Choose the exact device models, Android versions and screen classes your cohort runs on. Useful when a crash only reproduces on one OEM skin, or when a reviewer asks about tablet support.',
    chips: ['61 models', 'API 26 to 35', 'Tablets & foldables', 'OEM skins'],
    priceLabel: 'From',
    price: '$29',
    per: 'per cohort',
    priceNote: 'Charged once per cohort regardless of how many models you pin.',
  },
  {
    icon: 'CircleAlert',
    title: 'Structured bug reporting',
    tag: 'Add-on',
    cta: 'Enable reports',
    to: '/pricing',
    body: 'Turn passive testers into a QA pass. Testers file reproducible reports against a script you write, with device metadata, logcat excerpts and a screen recording attached automatically.',
    chips: ['Repro steps', 'Logcat capture', 'Screen recording', 'Severity triage'],
    priceLabel: 'From',
    price: '$39',
    per: 'per cohort',
    priceNote: 'Includes triage by us — you receive deduplicated reports, not a raw pile.',
  },
  {
    icon: 'Building2',
    title: 'Managed release runway',
    tag: 'Studio only',
    cta: 'Talk to us',
    to: '/contact',
    body: 'For agencies running many client apps at once. Named reviewer, sub-workspaces per client, CI webhooks that open a cohort the moment a build lands, and a two-hour response SLA.',
    chips: ['Unlimited cohorts', 'Client workspaces', 'API & webhooks', '2h SLA'],
    priceLabel: 'From',
    price: '$199',
    per: 'per month',
    priceNote: 'Replaces per-cohort pricing entirely. Billed monthly, cancel any time.',
  },
]

/* ── Process ────────────────────────────────────────────────────────────── */

export const PROCESS_STEPS = [
  {
    n: '1',
    title: 'Connect the Play track',
    when: '~5 min',
    who: 'You',
    body: 'Paste your package name and the closed-testing opt-in URL. We check the track is live, open to new testers and reachable, before anything is charged. No credentials, no keys, no Play Console access.',
  },
  {
    n: '2',
    title: 'Size the cohort and pay',
    when: '~2 min',
    who: 'You',
    body: 'Twelve is the Play minimum; we default to fourteen so two drop-outs cannot break the streak. Pay with points earned by testing, or with a card to draw from the priority pool.',
  },
  {
    n: '3',
    title: 'Slots fill from the pool',
    when: '6h median on Pro',
    who: 'Us',
    body: 'Testers matched on device model, Android version and language claim slots. Each one passes device attestation and a Play account age check at claim time, then opts into your track.',
  },
  {
    n: '4',
    title: 'Daily proof, fourteen times',
    when: 'Days 1 to 14',
    who: 'Testers',
    body: 'Every tester opens your build, completes the task you wrote, and uploads a timestamped screenshot. Automated checks reject anything stale, cropped from another device, or reused.',
  },
  {
    n: '5',
    title: 'Drops replaced automatically',
    when: '6h 12m median',
    who: 'Us',
    body: 'Two consecutive missed days flags the slot and refills it from the priority pool. Because you provisioned spares, your compliant count never falls below twelve and the counter never restarts.',
  },
  {
    n: '6',
    title: 'Export and apply',
    when: 'Day 14, same hour',
    who: 'You',
    body: 'A signed PDF listing every tester, every day and every proof artefact. Attach it to your production access application and submit. Median approval on first application: 94.7%.',
  },
]

export const NEVER_DO = [
  'Touch your signing keys or Play Console credentials',
  'Accept emulator installs or recycled accounts',
  'Promise review approval — that is Google\u2019s call',
]

/* ── Portfolio ──────────────────────────────────────────────────────────── */

export const FOLIO_CATS = ['All', 'Productivity', 'Finance', 'Health', 'Games', 'Utilities']

export const FOLIO = [
  { name: 'Fieldnote', cat: 'Productivity', status: 'Published', fill: '11h', slots: '12', resets: '0', icon: 'linear-gradient(140deg,#9bb7ff,#2b2f5e)', body: 'Offline-first field notes for surveyors. Needed tablet coverage across three OEMs before review would pass.' },
  { name: 'Pocket Ledger', cat: 'Finance', status: 'Published', fill: '7h', slots: '14', resets: '0', icon: 'linear-gradient(140deg,#8fd7b0,#1f5c43)', body: 'Envelope budgeting app. Two spare slots absorbed a mid-cohort drop-out without the developer noticing.' },
  { name: 'Switchback', cat: 'Health', status: 'Published', fill: '19h', slots: '16', resets: '0', icon: 'linear-gradient(140deg,#d7d3d3,#444141)', body: 'Walking tracker with background location. Structured bug reports surfaced a Doze-mode kill on one OEM skin.' },
  { name: 'Rowan Radio', cat: 'Utilities', status: 'Published', fill: '4h', slots: '12', resets: '0', icon: 'linear-gradient(140deg,#ffc4b8,#ae1800)', body: 'Community radio streaming. Fastest fill on record — a one-minute daily task and a generous points rate.' },
  { name: 'Cadence', cat: 'Health', status: 'Published', fill: '14h', slots: '12', resets: '0', icon: 'linear-gradient(140deg,#5a6cff,#2b2f5e)', body: 'Interval training timer. Ran two consecutive cohorts for a v1 and a v2 track in the same month.' },
  { name: 'Tilecraft', cat: 'Games', status: 'Published', fill: '22h', slots: '18', resets: '0', icon: 'linear-gradient(140deg,#a8e6c4,#2c6b4f)', body: 'Puzzle game with daily levels. Eighteen slots because the studio wanted engagement data alongside compliance.' },
  { name: 'Nomad Maps', cat: 'Utilities', status: 'Published', fill: '9h', slots: '12', resets: '0', icon: 'linear-gradient(140deg,#ffb4a3,#c94b39)', body: 'Offline map packs. Device matrix pinned to low-storage handsets to prove the download flow held up.' },
  { name: 'Ledgerline', cat: 'Finance', status: 'Published', fill: '16h', slots: '14', resets: '0', icon: 'linear-gradient(140deg,#c9c4ff,#3a3470)', body: 'Invoice tracker for freelancers. Cleared review on first application after a previous self-run test failed twice.' },
  { name: 'Draftbox', cat: 'Productivity', status: 'Published', fill: '12h', slots: '12', resets: '0', icon: 'linear-gradient(140deg,#ffd9a3,#8a5a12)', body: 'Markdown editor with sync. Structured reports caught a data-loss bug on rotation before public release.' },
]

/** The featured case's strip: fourteen days, one amber where the swap happened. */
export const FOLIO_DAYS = strip(14, (i) => (i === 5 ? DAY.LATE : DAY.OK))

export const CASE_STATS = [
  { value: '9h', label: 'To a full cohort' },
  { value: '1', label: 'Replacement, unnoticed' },
  { value: 'Day 15', label: 'Production approved' },
]

/* ── Contact ────────────────────────────────────────────────────────────── */

export const CONTACT_METHODS = [
  { icon: 'CircleAlert', title: 'Live cohort emergency', body: 'Your counter is at risk right now', sla: '< 1h' },
  { icon: 'Mail', title: 'Sales and plans', body: 'hello@cohort.dev', sla: '< 4h' },
  { icon: 'Users', title: 'Tester support', body: 'Proof rejected, points missing, account checks', sla: '< 6h' },
]

export const CONTACT_TOPICS = [
  'Live cohort issue',
  'Plans and billing',
  'Tester support',
  'Something else',
]

export const SUPPORT_HOURS = [
  { label: 'Monday to Friday', value: '08:00 – 20:00 UTC' },
  { label: 'Weekend, live cohorts only', value: '10:00 – 16:00 UTC' },
  { label: 'Auto-replacement engine', value: 'always on', tone: '#a8e6c4' },
]

/* ── FAQs ───────────────────────────────────────────────────────────────── */

const EXTRA_FAQS = [
  { c: 'Compliance', q: 'Does the fourteen days have to be consecutive?', a: 'Yes. Play requires twelve testers opted in continuously for fourteen days. A gap resets the counter, which is why our replacement engine triggers on the second missed day rather than waiting for you to notice.' },
  { c: 'Compliance', q: 'What exactly is in the compliance export?', a: 'A signed PDF listing every tester slot, the opt-in timestamp, each of the fourteen days with its proof artefact reference, any replacements with their timing, and a summary attestation. It is designed to be attached to a production access application unedited.' },
  { c: 'Testers', q: 'How are testers vetted?', a: 'Device attestation confirms a real physical device rather than an emulator, and a Play account age check rules out accounts created to farm slots. Testers also carry a standing score based on proof acceptance across past cohorts.' },
  { c: 'Testers', q: 'Can I bring my own testers?', a: 'Yes. Invite them from the dashboard and they occupy slots at no cost — you only pay for slots we fill. Your own testers are held to the same daily proof requirement so the compliance record stays uniform.' },
  { c: 'Points', q: 'Do points expire?', a: 'Points expire twelve months after they are earned. Points spent on a cohort that we cannot fill within 72 hours are returned in full and the clock on them resets.' },
  { c: 'Points', q: 'Can I convert points to cash?', a: 'No. Points are testing credit only — that is what keeps the loop reciprocal rather than turning it into paid clicking, which is exactly the behaviour Play polices.' },
  { c: 'Billing', q: 'When am I charged?', a: 'On cohort creation for Pro, monthly in advance for Studio. Nothing is charged until we have verified your closed track is live and open, so a misconfigured track costs you nothing.' },
  { c: 'Billing', q: 'What is the refund rule?', a: 'If we cannot fill twelve compliant slots within 72 hours of cohort creation, you get a full automatic refund. Cancel before day one and you get a full refund minus any slots already filled.' },
]

/** The five landing FAQs are Compliance questions; the page adds the rest. */
export const ALL_FAQS = CORE_FAQS.map((f) => ({ ...f, c: 'Compliance' })).concat(EXTRA_FAQS)

export const FAQ_CATS = ['All questions', 'Compliance', 'Testers', 'Points', 'Billing']

/* ── Referrals ──────────────────────────────────────────────────────────── */

export const REF_STEPS = [
  { n: '01', icon: 'Link2', title: 'Share your link', body: 'Every account gets a permanent referral link. Drop it in a Discord, a newsletter, or a reply to someone stuck in closed testing.' },
  { n: '02', icon: 'Gift', title: 'They start with 150 points', body: 'Credited on signup, and their first cohort jumps the free queue — so the link is worth something to them before it is worth anything to you.' },
  { n: '03', icon: 'Coins', title: 'You bank 300 on day one', body: 'The moment their first cohort reaches day one, 300 points land in your balance. That is two tester slots, for a link, with no cap on how many times it happens.' },
]

export const REF_ROWS = [
  { name: 'Devansh Rao', when: '3 days ago', status: 'Cohort live', pts: '+300', live: true, av: 'linear-gradient(140deg,#ff8a75,#ae1800)' },
  { name: 'Kelsey Ohara', when: '6 days ago', status: 'Cohort live', pts: '+300', live: true, av: 'linear-gradient(140deg,#8fd7b0,#1f5c43)' },
  { name: 'Tobias Lund', when: '1 week ago', status: 'Signed up', pts: 'pending', live: false, av: 'linear-gradient(140deg,#5a6cff,#2b2f5e)' },
  { name: 'Nadia Osei', when: '2 weeks ago', status: 'Cohort live', pts: '+300', live: true, av: 'linear-gradient(140deg,#ffc4b8,#c94b39)' },
  { name: 'Mei Chen', when: '3 weeks ago', status: 'Signed up', pts: 'pending', live: false, av: 'linear-gradient(140deg,#d7d3d3,#605d5d)' },
]

export const LEADERS = [
  { rank: '01', name: 'Jonas Weber', count: '41', pct: '100%', av: 'linear-gradient(140deg,#9bb7ff,#3a4a8f)', top: true },
  { rank: '02', name: 'Sara Halim', count: '33', pct: '80%', av: 'linear-gradient(140deg,#8fd7b0,#1f5c43)', top: true },
  { rank: '03', name: 'Owen Doyle', count: '27', pct: '66%', av: 'linear-gradient(140deg,#ffc4b8,#c94b39)', top: true },
  { rank: '04', name: 'Marta Beier', count: '14', pct: '34%', av: 'linear-gradient(140deg,#5a6cff,#2b2f5e)', top: false },
  { rank: '05', name: 'Ken Watanabe', count: '11', pct: '27%', av: 'linear-gradient(140deg,#d7d3d3,#605d5d)', top: false },
]

/* ── Payments ───────────────────────────────────────────────────────────── */

export const PAY_TILES = [
  { label: 'Current plan', value: 'Pro', note: 'Renews 1 Sep 2026' },
  { label: 'Spent this year', value: '$312.40', note: 'Across 6 cohorts' },
  { label: 'Points balance', value: '1,240', note: '8 tester slots fundable' },
  { label: 'Points earned', value: '4,180', note: '2,700 of it from referrals' },
]

export const TRANSACTIONS = [
  { kind: 'Card', title: 'Pro cohort · TK-4471', ref: 'com.northbeam.trailkit', date: '29 Jul 2026', method: 'Visa 4242', amount: '$44.60' },
  { kind: 'Points', title: 'Referral bonus · Devansh R.', ref: 'REF-8841', date: '27 Jul 2026', method: 'Points', amount: '+300', tone: '#a8e6c4' },
  { kind: 'Points', title: 'Testing day banked · Cadence', ref: 'TD-22910', date: '26 Jul 2026', method: 'Points', amount: '+10', tone: '#a8e6c4' },
  { kind: 'Card', title: 'Device coverage matrix', ref: 'ADD-3312', date: '22 Jul 2026', method: 'Visa 4242', amount: '$29.00' },
  { kind: 'Points', title: 'Cohort funded · Fieldnote', ref: 'FN-4402', date: '14 Jul 2026', method: 'Points', amount: '−1,680', tone: '#ffb4a3' },
  { kind: 'Card', title: 'Pro cohort · LG-4390', ref: 'com.ledgerline.app', date: '02 Jul 2026', method: 'Amex 1009', amount: '$49.00' },
  { kind: 'Points', title: 'Referral bonus · Kelsey O.', ref: 'REF-8802', date: '28 Jun 2026', method: 'Points', amount: '+300', tone: '#a8e6c4' },
]

export const CARDS = [
  { brand: 'VISA', brandBg: 'linear-gradient(140deg,#3b4a9e,#1a2050)', num: '•••• •••• •••• 4242', exp: 'Expires 09 / 29', primary: true },
  { brand: 'AMEX', brandBg: 'linear-gradient(140deg,#4a6d7c,#1d2f37)', num: '•••• •••••• 71009', exp: 'Expires 04 / 28', primary: false },
]

export const INVOICES = [
  { id: 'INV-2026-0714', date: '29 Jul 2026', amt: '$44.60' },
  { id: 'INV-2026-0702', date: '22 Jul 2026', amt: '$29.00' },
  { id: 'INV-2026-0688', date: '02 Jul 2026', amt: '$49.00' },
]
