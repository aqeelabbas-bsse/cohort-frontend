import { DAY, avatarAt, strip } from './palette'

/* ── Developer dashboard ────────────────────────────────────────────────── */

export const DASH_TILES = [
  { label: 'Compliant slots', value: '12', delta: '+1', deltaColor: '#a8e6c4', note: '2 spares held in reserve' },
  { label: 'Day of 14', value: '9', delta: '5 left', deltaColor: 'rgba(243,242,242,.5)', note: 'Eligible 12 Aug, 09:00' },
  { label: 'Proofs today', value: '12', delta: '100%', deltaColor: '#a8e6c4', note: 'Last received 22 min ago' },
  { label: 'Points spent', value: '1,960', delta: '14 slots', deltaColor: 'rgba(243,242,242,.5)', note: '1,240 remaining' },
]

/**
 * The roster.
 *
 * `kind` describes how a tester's fortnight went, and `daysFor` turns that into
 * fourteen cells. Keeping the rule in one function means a "risk" tester looks
 * identical everywhere it is drawn.
 */
const ROSTER_RAW = [
  ['Ana Ruiz', 'Pixel 7a', 9, 'ok'],
  ['Tobias Lund', 'Galaxy S23', 9, 'ok'],
  ['Priya Sundaram', 'Redmi Note 13', 7, 'risk'],
  ['Ken Watanabe', 'Pixel 6', 9, 'ok'],
  ['Nadia Osei', 'Galaxy A54', 9, 'ok'],
  ['Luis Ferreira', 'Moto G84', 8, 'late'],
  ['Mei Chen', 'Pixel 8 Pro', 9, 'ok'],
  ['Owen Doyle', 'Nothing Phone 2', 9, 'ok'],
  ['Sara Halim', 'Galaxy S22', 9, 'ok'],
  ['Jonas Weber', 'Pixel 7 Pro', 9, 'ok'],
  ['Ines Bauer', 'Xperia 10 V', 3, 'replaced'],
  ['Dev Malhotra', 'OnePlus 12R', 9, 'ok'],
]

const daysFor = (kind) =>
  strip(14, (i) => {
    if (i > 8) return DAY.OFF // not reached yet — today is day 9
    if (kind === 'risk' && i === 5) return DAY.MISS
    if (kind === 'late' && i === 6) return DAY.LATE
    if (kind === 'replaced' && i > 2 && i < 5) return DAY.MISS
    if (kind === 'replaced' && i >= 5) return DAY.LATE
    return DAY.OK
  })

const STREAK_COLOR = { risk: '#ffb4a3', replaced: '#ff8a75', ok: '#a8e6c4', late: '#a8e6c4' }

export const ROSTER = ROSTER_RAW.map(([name, device, streak, kind], i) => ({
  name,
  device,
  av: avatarAt(i),
  streak: `${streak}d`,
  streakColor: STREAK_COLOR[kind],
  days: daysFor(kind),
}))

/** Legend for the roster grid — the strip is meaningless without it. */
export const DAY_LEGEND = [
  { color: DAY.OK, label: 'Proof verified' },
  { color: DAY.LATE, label: 'Late' },
  { color: DAY.MISS, label: 'Missed — replaced' },
  { color: DAY.OFF, label: 'Upcoming' },
]

export const PROOF_QUEUE = [
  {
    name: 'Nadia Osei',
    time: '22 min ago · day 9',
    badge: 'Verified',
    badgeBg: 'rgba(143,215,176,.18)',
    badgeFg: '#a8e6c4',
    thumb: 'linear-gradient(160deg,#2b3a34,#0f1512)',
  },
  {
    name: 'Luis Ferreira',
    time: '3h ago · day 9',
    badge: 'In review',
    badgeBg: 'rgba(255,255,255,.1)',
    badgeFg: 'rgba(243,242,242,.75)',
    thumb: 'linear-gradient(160deg,#3a3330,#141110)',
  },
  {
    name: 'Priya Sundaram',
    time: 'not received',
    badge: 'Overdue',
    badgeBg: 'rgba(236,48,19,.2)',
    badgeFg: '#ff8a75',
    thumb: 'linear-gradient(160deg,#3a2320,#150e0d)',
  },
]

/* ── Tester portal ──────────────────────────────────────────────────────── */

export const OPEN_APPS = [
  {
    name: 'Fieldnote',
    cat: 'Productivity',
    task: 'Create one note and sync it · 2 min/day',
    pts: '+140 pts',
    slots: '3 of 12 slots left',
    icon: 'linear-gradient(140deg,#9bb7ff,#2b2f5e)',
  },
  {
    name: 'Pocket Ledger',
    cat: 'Finance',
    task: 'Log an expense, check the weekly chart · 3 min/day',
    pts: '+140 pts',
    slots: '7 of 14 slots left',
    icon: 'linear-gradient(140deg,#8fd7b0,#1f5c43)',
  },
  {
    name: 'Rowan Radio',
    cat: 'Music',
    task: 'Play one station for 60 seconds · 1 min/day',
    pts: '+140 pts',
    slots: '1 of 12 slots left',
    icon: 'linear-gradient(140deg,#ffc4b8,#ae1800)',
  },
  {
    name: 'Switchback',
    cat: 'Health',
    task: 'Record a walk, screenshot the summary · 4 min/day',
    pts: '+170 pts',
    slots: '11 of 16 slots left',
    icon: 'linear-gradient(140deg,#d7d3d3,#444141)',
  },
]

export const MY_TASKS = [
  {
    name: 'Trailkit',
    state: 'Day 9 due',
    color: '#ffb4a3',
    icon: 'linear-gradient(140deg,#8fd7b0,#1f5c43)',
    days: strip(14, (i) => (i < 8 ? DAY.OK : i === 8 ? 'rgba(255,180,163,.75)' : DAY.OFF)),
  },
  {
    name: 'Cadence',
    state: 'Day 12',
    color: '#a8e6c4',
    icon: 'linear-gradient(140deg,#5a6cff,#2b2f5e)',
    days: strip(14, (i) => (i < 12 ? DAY.OK : DAY.OFF)),
  },
  {
    name: 'Nomad Maps',
    state: 'Complete',
    color: '#a8e6c4',
    icon: 'linear-gradient(140deg,#ffc4b8,#c94b39)',
    days: strip(14, () => DAY.OK),
  },
]

/* ── Task detail ────────────────────────────────────────────────────────── */

export const TASK_STEPS = [
  { n: '1', text: 'Open Trailkit from the Play closed-testing build', done: true },
  { n: '2', text: 'Log one trail entry with a distance value', done: true },
  { n: '3', text: 'Screenshot the summary card and upload below', done: false },
]

/** Fourteen numbered cells — eight banked, today outstanding, five to come. */
export const STREAK_GRID = Array.from({ length: 14 }, (_, i) => ({
  n: String(i + 1),
  bg: i < 8 ? 'rgba(143,215,176,.22)' : i === 8 ? 'rgba(236,48,19,.28)' : 'rgba(255,255,255,.05)',
  bd: i < 8 ? 'rgba(143,215,176,.4)' : i === 8 ? 'rgba(255,98,71,.5)' : 'rgba(255,255,255,.1)',
  fg: i < 8 ? '#a8e6c4' : i === 8 ? '#ff8a75' : 'rgba(243,242,242,.35)',
}))

export const PROOF_THUMBS = [
  'linear-gradient(160deg,#2b3a34,#0f1512)',
  'linear-gradient(160deg,#33352b,#131410)',
  'linear-gradient(160deg,#2b3140,#101318)',
  'linear-gradient(160deg,#3a3330,#141110)',
]

/* ── Pricing ────────────────────────────────────────────────────────────── */

export const PLANS = [
  {
    name: 'Free',
    price: '$0',
    per: 'funded by points',
    blurb:
      'Test other apps, bank points, spend them on your own cohort. Queued behind paid accounts.',
    featured: false,
    cta: 'Start earning',
    features: [
      '10 points per verified testing day',
      '140 points funds one 14-day slot',
      'Free queue: ~31h to fill 12 slots',
      'Daily proof verification included',
      'One cohort at a time',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    per: 'per cohort',
    blurb:
      'Priority pool. Twelve compliant slots inside six hours, with spares and the compliance export.',
    featured: true,
    cta: 'Skip the queue',
    features: [
      'Priority pool — median 5h 40m to fill',
      '2 spare slots included',
      'Auto-replace with no cohort restart',
      'Signed compliance PDF on day 14',
      'Two concurrent cohorts',
    ],
  },
  {
    name: 'Studio',
    price: '$199',
    per: 'per month',
    blurb:
      'For agencies shipping client apps continuously. Unlimited cohorts and a named reviewer.',
    featured: false,
    cta: 'Talk to us',
    features: [
      'Unlimited concurrent cohorts',
      'Client sub-workspaces and roles',
      'Device coverage matrix by model',
      'API and webhook for CI pipelines',
      'Named reviewer, 2h response SLA',
    ],
  },
]

export const CHECKOUT_LINES = [
  { label: 'Pro cohort · 12 slots', value: '$49.00' },
  { label: '2 spare slots', value: '$8.00' },
  { label: 'Points credit applied', value: '−$12.40', tone: '#a8e6c4' },
]
