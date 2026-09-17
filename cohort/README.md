# Cohort — Android Testers Community (frontend)

**20 screens. All built.**

---

## Setup in VS Code

### 1. Prerequisites

Install **Node.js 18 or newer** from [nodejs.org](https://nodejs.org) (LTS is fine).
Check it worked:

```bash
node -v     # should print v18.x.x or higher
npm -v
```

### 2. Open the project

Unzip `cohort-frontend.zip`, then either:

- **VS Code → File → Open Folder…** → pick the `cohort` folder, or
- from a terminal: `code cohort`

Open the folder that contains `package.json` — not its parent. Vite reads config
relative to the folder you open.

### 3. Install dependencies

Open the integrated terminal with `` Ctrl+` `` (`` Cmd+` `` on Mac) and run:

```bash
npm install
```

Takes about a minute. Creates `node_modules/` (already gitignored).

### 4. Start the dev server

```bash
npm run dev
```

Vite prints a local URL — usually `http://localhost:5173` — and opens it. Edit
any file under `src/` and the browser updates instantly without losing state.

### 5. Recommended extensions

VS Code will prompt to install these when you open the folder (they're listed in
`.vscode/extensions.json`):

| Extension | What it does here |
| --- | --- |
| **Tailwind CSS IntelliSense** | Autocomplete + hover previews for every utility, including the custom `flame-*`, `mint`, `bone` colours |
| **ESLint** | Catches unused imports, bad hook usage |
| **Prettier** | Formats on save, using the included `.prettierrc` |
| **ES7+ React snippets** | `rafce` scaffolds a component |

`.vscode/settings.json` is included and already turns on format-on-save and
Tailwind IntelliSense inside `cx()` calls.

### 6. Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally so you can check the real bundle
```

### Deploying

This is a single-page app, so the host must rewrite all paths to `index.html` —
otherwise a hard refresh on `/pricing` returns 404. Config for both common hosts
is already in the repo:

- **Vercel** — `vercel.json` (rewrite rule). Just import the repo.
- **Netlify** — `public/_redirects`. Build command `npm run build`, publish
  directory `dist`.

### Troubleshooting

| Symptom | Fix |
| --- | --- |
| `'vite' is not recognized` | You skipped `npm install`, or you're in the wrong folder |
| Port 5173 already in use | `npm run dev -- --port 3000` |
| Blank page, console shows a bare-module error | Restart the dev server — Vite's dependency cache goes stale after a dependency change |
| Tailwind classes do nothing | Confirm the file is under `src/` and ends in `.jsx`; `tailwind.config.js` only scans `./src/**/*.{js,jsx}` |
| Fonts look wrong | Archivo loads from Google Fonts. Offline? Install it locally or swap the `<link>` in `index.html` |

---

## Stack, and why

| Choice | Reason |
| --- | --- |
| **Vite + React 18 (plain JS)** | Fast HMR, zero config, no TypeScript overhead |
| **Tailwind CSS** | Layout and spacing utilities |
| **A CSS component layer** (`src/index.css`) | The glass, button and field recipes are 8–10 CSS declarations each. As Tailwind arbitrary values they become unreadable; as `@layer components` classes they stay one source of truth |
| **Framer Motion** | Scroll reveals, page transitions, accordion height, filter re-layout. Replaces the mockup's hand-rolled `IntersectionObserver` |
| **React Router 6** | Real URLs. The mockup swapped screens with a `state.screen` string, so nothing was linkable, bookmarkable or back-button-able |
| **lucide-react** | The icon set the design system specifies |

---

## Project layout

```
cohort/
├─ index.html                Fonts, meta, mount point
├─ vite.config.js            @ → /src alias
├─ tailwind.config.js        Design tokens
├─ vercel.json               SPA rewrite (Vercel)
├─ public/_redirects         SPA rewrite (Netlify)
├─ .vscode/                  Editor settings + extension recommendations
│
└─ src/
   ├─ main.jsx               Mounts <BrowserRouter>
   ├─ App.jsx                Route table, layout shell, scroll restoration
   ├─ index.css              Tokens + component classes (the design system)
   │
   ├─ components/
   │  ├─ primitives.jsx      Section, SectionHead, Glass, Button, Chip, Avatar,
   │  │                      DayStrip, StatRow, Badge, IconTile, cx()
   │  ├─ Navbar.jsx          Sticky glass nav + "More" dropdown + mobile sheet
   │  ├─ Footer.jsx          Brand column, four link columns, status bar
   │  ├─ Reveal.jsx          Scroll reveal + stagger helper + page variants
   │  ├─ CohortCard.jsx      The hero's live cohort monitor
   │  └─ Accordion.jsx       Single-open FAQ accordion
   │
   ├─ data/
   │  ├─ palette.js          DAY states, avatar gradients, strip() builder
   │  ├─ content.js          Nav, footer, landing copy
   │  ├─ site.js             About, services, process, portfolio, contact,
   │  │                      FAQs, referrals, payments
   │  ├─ app.js              Roster, tiles, proof queue, tester apps, plans
   │  └─ legal.js            The three legal documents
   │
   ├─ lib/
   │  └─ icons.js            Explicit icon registry (see note below)
   │
   └─ pages/                 20 screens
      Landing · About · Services · Process · Portfolio · Pricing
      Signup · Login · Forgot · Submit · Dashboard · Testers · Task
      Referrals · Payments · Contact · Faqs · Legal (×3) · NotFound
```

---

## Routes

| Route | Screen |
| --- | --- |
| `/` | Landing |
| `/about` `/services` `/process` `/portfolio` `/pricing` | Marketing |
| `/signup` `/login` `/forgot` | Account |
| `/submit` | Submit an app (live cohort sizer) |
| `/dashboard` | Developer dashboard (roster + proof queue) |
| `/testers` `/task` | Tester portal + task detail |
| `/referrals` `/payments` | Growth + billing |
| `/contact` `/faqs` | Support |
| `/privacy` `/terms` `/refund` | Legal (one component, three documents) |
| anything else | 404 with real suggestions |

---

## Content lives in `data/`, not in JSX

Every list on every page — steps, trust points, quotes, FAQs, the roster, the
transaction ledger, the legal clauses — is an array in `src/data/`. Pages map
over them. This means:

- copy changes never touch a component,
- swapping the arrays for `fetch()` calls later is a one-line change per page,
- the same data feeds two screens (landing FAQ and `/faqs`, `DAY` states and
  five different strip renderers).

Data files reference icons by **name** (`icon: 'ShieldCheck'`) so they stay free
of JSX imports. `lib/icons.js` resolves the name to a component.

### Why `lib/icons.js` exists

The obvious way to resolve icon names is `import * as Icons from 'lucide-react'`.
Don't. A namespace import defeats tree-shaking — Rollup can't prove which members
are unused, so all ~1,500 icons ship.

Measured on this project:

| Import style | JS bundle | gzipped |
| --- | --- | --- |
| `import * as Icons` | 1,088 kB | 237 kB |
| Explicit registry | **328 kB** | **105 kB** |

A 70% cut for one file of named imports.

---

## Bundle

Routes are code-split with `React.lazy`. The landing page ships in the main
bundle (most people land there); everything else downloads on navigation.

```
index.js      328 kB │ gzip: 105 kB   ← React, Router, Motion, Landing
site.js        15 kB │ gzip:   6 kB   ← shared marketing data
Legal.js       12 kB │ gzip:   5 kB
Dashboard.js    7 kB │ gzip:   2 kB
…14 more page chunks, all under 7 kB
index.css      38 kB │ gzip:   8 kB
```

---

## The design system

Everything traces back to `src/index.css` and `tailwind.config.js`.

**Ground** `#0a0908`, with a fixed three-lobe radial mesh on `body::before`
(flame top-left, blue top-right, coral bottom). It never scrolls and never
intercepts pointer events — it's atmosphere.

**Glass**, three weights:

| Class | Where |
| --- | --- |
| `.glass` | Standard cards — steps, quotes, trust rows, KPI tiles |
| `.glass-strong` | Hero card, form panels, featured case study |
| `.glass-well` | Dark inset trays *inside* a glass card |

**Accent ramp** is a single Play-red family (`flame-100` → `flame-900`), used
sparingly: primary buttons, eyebrows, icon tiles, and at most one full-field
moment per page — the closing banner.

**Semantic day colours** live in `data/palette.js`:

| State | Meaning |
| --- | --- |
| `DAY.OK` | Proof received and verified |
| `DAY.LATE` | Proof received outside the window |
| `DAY.MISS` | No proof — the day that breaks a streak |
| `DAY.OFF` | Day not reached yet |

Nothing else in the codebase decides what a "late day" looks like.

### `DayStrip` is the signature element

Fourteen cells, one per required testing day. It carries the whole product
thesis — a streak you must not break — and reappears at five sizes: the hero
monitor (38px), the featured case study (34px), the roster (18px), the task
streak grid (30px, two rows of seven), and the tester's active commitments
(8px). One component, so it can never drift between screens.

---

## Motion

| Effect | Where | Duration |
| --- | --- | --- |
| Page transition | Every route change | 320ms in / 180ms out |
| Scroll reveal | `<Reveal>`, staggered ≤ 6 × 60ms | 620ms |
| Hero float | Cohort card | 7s loop |
| Glass sheen | Cohort card | 6s loop |
| Accordion height | FAQ, FAQs page | 280ms |
| Filter re-layout | Portfolio grid | 260ms, `layout` + `AnimatePresence` |
| Form state swap | Contact, Forgot | 280ms cross-fade |

All easing is `cubic-bezier(.16,.84,.3,1)`, lifted from the mockup.

`prefers-reduced-motion: reduce` collapses every animation and transition to
~0ms, and `<Reveal>` / `<CohortCard>` additionally skip their loops entirely
rather than running them fast.

---

## Accessibility

Deliberate departures from the mockup, all in the same direction — the prototype
used `<span onClick>` for every interactive element, which neither a keyboard nor
a screen reader can reach.

- Navigation renders as `<Link>`; actions render as `<button>`.
- `Button` picks its element from its props: `to` → `<Link>`, `href` → `<a>`,
  otherwise `<button>`.
- Forms are real `<form>` elements with `<label htmlFor>` and `autoComplete`.
- "Keep me signed in" is a real `<input type="checkbox">`, visually replaced.
- The proof dropzone wraps a real `<input type="file">`, so it works by click,
  keyboard and drag.
- Every data visualisation carries `role="img"` and a text `aria-label`.
- Dropdowns close on click-outside and `Escape`; triggers carry `aria-expanded`.
- Filters carry `aria-pressed`; the legal contents rail uses real `#` anchors
  with `scroll-mt-24` so headings clear the sticky navbar.
- Visible focus ring: `2px solid #ff563c`, offset 2px.
- Every layout is responsive from 360px up. The mockup was fixed-width desktop,
  so all mobile breakpoints are new work.

---

## Verification

All 22 components and screens were server-rendered through `react-dom/server` as
a smoke test — every one renders without throwing. Production build is clean with
no warnings.
