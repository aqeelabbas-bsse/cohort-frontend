import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { iconFor } from '@/lib/icons'

import Accordion from '@/components/Accordion'
import CohortCard from '@/components/CohortCard'
import Reveal, { stagger } from '@/components/Reveal'
import {
  Avatar,
  Button,
  Glass,
  IconTile,
  Section,
  SectionHead,
  StatRow,
} from '@/components/primitives'
import {
  CORE_FAQS,
  HERO_STATS,
  POINTS_LADDER,
  QUOTES,
  STEPS,
  TRUST,
} from '@/data/content'
import { AVATARS } from '@/data/palette'

export default function Landing() {
  return (
    <>
      <Hero />
      <Section tight>
        <StatRow items={HERO_STATS} />
      </Section>
      <HowItWorks />
      <Compliance />
      <PointsLoop />
      <Testimonials />
      <Faq />
      <ClosingBanner />
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   1 · HERO
   Left: the claim. Right: the proof, as a live cohort monitor.
   ════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <Section className="grid items-center gap-12 pb-10 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:pt-[78px]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 0.84, 0.3, 1] }}
      >
        <span className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-white/[.13] bg-white/[.06] py-[7px] pl-[9px] pr-3.5 text-[12.5px] font-medium text-[var(--t-80)] backdrop-blur-lg">
          <span className="rounded-full bg-[rgba(236,48,19,.9)] px-2 py-[3px] text-[10.5px] font-extrabold uppercase tracking-[0.09em] text-white">
            New
          </span>
          Google Play's 12-tester rule, handled end to end
        </span>

        <h1 className="text-balance text-[40px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[52px] lg:text-[63px]">
          12 verified testers.
          <br />
          14 unbroken days.
          <br />
          <span className="text-flame-300">One production release.</span>
        </h1>

        <p className="mt-6 max-w-[520px] text-[16px] leading-[1.55] text-pretty text-[var(--t-70)] sm:text-[17px]">
          Cohort assembles a device-verified tester pool for your closed track, proves engagement
          with daily screenshots, and replaces anyone who drops before the counter resets.
        </p>

        <div className="mt-[34px] flex flex-wrap gap-3">
          <Button to="/signup" variant="primary" size="lg">
            Start a 14-day cohort
            <ArrowRight size={17} strokeWidth={2.2} />
          </Button>
          <Button to="/testers" variant="glass" size="lg" className="!font-semibold">
            Test apps, earn points
          </Button>
        </div>

        <div className="mt-[30px] flex items-center gap-3.5">
          <div className="flex">
            {AVATARS.slice(0, 4).map((g, i) => (
              <Avatar key={g} gradient={g} ring className={i > 0 ? '-ml-2.5' : ''} />
            ))}
            <div className="-ml-2.5 grid h-8 w-8 place-items-center rounded-full border-2 border-ink-800 bg-white/10 text-[10px] font-extrabold text-white/75">
              +8
            </div>
          </div>
          <span className="text-[13px] leading-[1.4] text-[var(--t-50)]">
            4,100 verified testers across 61 device models
            <br />
            Median time to a full cohort: 19 hours
          </span>
        </div>
      </motion.div>

      <CohortCard />
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   2 · HOW IT WORKS
   The 01–04 markers earn their place here: this genuinely is a sequence, and
   step 3 cannot happen before step 1.
   ════════════════════════════════════════════════════════════════════════ */
function HowItWorks() {
  return (
    <Section id="how">
      <SectionHead
        kicker="How it works"
        title="Four steps between your AAB and a production listing"
      />
      <div className="mt-[38px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => {
          const Icon = iconFor(s.icon)
          return (
            <Reveal key={s.no} delay={stagger(i)}>
              <Glass hover className="h-full rounded-[22px] px-[22px] pb-[26px] pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-[0.1em] text-[var(--t-40)]">
                    {s.no}
                  </span>
                  <IconTile>
                    <Icon size={17} strokeWidth={1.8} />
                  </IconTile>
                </div>
                <div className="mt-[18px] text-[17px] font-bold tracking-[-0.02em]">{s.title}</div>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-pretty text-[var(--t-60)]">
                  {s.body}
                </p>
              </Glass>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   3 · COMPLIANCE
   Sticky headline on the left, the four mechanisms scrolling past on the right.
   ════════════════════════════════════════════════════════════════════════ */
function Compliance() {
  return (
    <Section>
      <div className="grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
        <div className="lg:sticky lg:top-24">
          <SectionHead
            kicker="Compliance, mechanised"
            title="The four checks that keep the counter alive"
            lede="Play's requirement is not 12 signups — it is 12 accounts opted in and genuinely engaged for 14 consecutive days. Every mechanism below exists to protect that streak."
            max=""
          />
        </div>

        <div className="grid gap-3.5">
          {TRUST.map((t, i) => {
            const Icon = iconFor(t.icon)
            return (
              <Reveal key={t.title} delay={stagger(i)}>
                <Glass className="flex gap-[18px] rounded-[20px] p-6">
                  <IconTile size={42} radius={13} accent={false}>
                    <Icon size={18} strokeWidth={1.8} />
                  </IconTile>
                  <div>
                    <div className="text-[16px] font-bold tracking-[-0.02em]">{t.title}</div>
                    <p className="mt-1.5 text-[13.5px] leading-[1.55] text-pretty text-[var(--t-60)]">
                      {t.body}
                    </p>
                    <div className="mt-[11px] font-mono text-[11.5px] text-mint">{t.meta}</div>
                  </div>
                </Glass>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   4 · THE RECIPROCAL LOOP
   One wide panel. The three-row ladder on the right is the pricing argument in
   its shortest possible form: 10 → 140 → 1,680.
   ════════════════════════════════════════════════════════════════════════ */
function PointsLoop() {
  return (
    <Section>
      <Reveal>
        <Glass weight="strong" className="rounded-[26px] p-7 sm:p-11">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="kicker">The reciprocal loop</div>
              <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.12] tracking-[-0.04em] sm:text-[36px]">
                Test other people's apps. Get yours tested for free.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-pretty text-[var(--t-60)]">
                Every day you open an assigned app and file proof, you bank 10 points. 140 points
                buys one 14-day tester slot — so two weeks of honest testing funds a full slot of
                your own. Paying customers skip the queue instead of earning it.
              </p>
              <div className="mt-[26px] flex flex-wrap gap-2.5">
                <Button to="/testers" variant="primary" size="md" className="!font-bold">
                  Open tester portal
                </Button>
                <Button to="/pricing" variant="quiet" size="md">
                  Skip the queue instead
                </Button>
              </div>
            </div>

            <div className="grid gap-3">
              {POINTS_LADDER.map((row) => (
                <div
                  key={row.value}
                  className="flex items-center gap-4 rounded-2xl border p-5"
                  style={{
                    background: row.highlight ? 'rgba(255,98,71,.1)' : 'rgba(0,0,0,.3)',
                    borderColor: row.highlight ? 'rgba(255,98,71,.28)' : 'rgba(255,255,255,.09)',
                  }}
                >
                  <div className="min-w-[64px] text-[24px] font-extrabold tracking-[-0.04em] text-flame-200 sm:text-[26px]">
                    {row.value}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold">{row.title}</div>
                    <div className="mt-[3px] text-[12.5px] text-[var(--t-50)]">{row.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Glass>
      </Reveal>
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   5 · TESTIMONIALS
   ════════════════════════════════════════════════════════════════════════ */
function Testimonials() {
  return (
    <Section>
      <SectionHead kicker="From the queue" title="Developers who shipped" />
      <div className="mt-[34px] grid gap-[18px] md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.name} delay={stagger(i)}>
            <Glass className="flex h-full flex-col rounded-[22px] px-6 py-[26px]">
              <div
                className="mb-3.5 flex gap-[3px] text-flame-300"
                role="img"
                aria-label="Rated five out of five"
              >
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="flex-1 text-[14.5px] leading-[1.6] text-pretty text-[var(--t-80)]">
                {q.text}
              </p>
              <div className="mt-5 flex items-center gap-[11px] border-t border-white/[.09] pt-[18px]">
                <Avatar gradient={q.av} />
                <div>
                  <div className="text-[13px] font-bold">{q.name}</div>
                  <div className="text-[11.5px] text-[var(--t-50)]">{q.role}</div>
                </div>
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   6 · FAQ
   ════════════════════════════════════════════════════════════════════════ */
function Faq() {
  return (
    <Section>
      <div className="grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
        <div>
          <div className="kicker">Questions</div>
          <h2 className="mt-3.5 text-[30px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[38px]">
            The 14-day rule, precisely
          </h2>
        </div>
        <Reveal>
          <Accordion items={CORE_FAQS} />
        </Reveal>
      </div>
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   7 · CLOSING BANNER
   The one place the accent runs as a full field, exactly as the design system
   prescribes. Everything else on the page is ink on ground.
   ════════════════════════════════════════════════════════════════════════ */
function ClosingBanner() {
  return (
    <Section className="pb-[90px]">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[26px] px-7 py-10 sm:px-12 sm:py-14"
          style={{
            background: 'linear-gradient(140deg,#ec3013,#7c1405)',
            boxShadow: '0 30px 80px rgba(236,48,19,.35), 0 1px 0 rgba(255,255,255,.3) inset',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(600px 400px at 85% 120%, rgba(255,255,255,.22), transparent 60%)',
            }}
          />
          <div className="relative flex flex-wrap items-end justify-between gap-10">
            <div>
              <h2 className="max-w-[560px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[46px]">
                Your next release is 14 days out.
              </h2>
              <p className="mt-4 max-w-[480px] text-[15px] text-white/80 sm:text-[16px]">
                Submit the package name, pick a cohort size, and watch the counter start tonight.
              </p>
            </div>
            <Button to="/signup" variant="ink" size="lg" className="!px-7 !py-[17px]">
              Create your cohort
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
