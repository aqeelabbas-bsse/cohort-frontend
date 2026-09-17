import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { stagger } from '@/components/Reveal'
import { Badge, Chip, DayStrip, Glass, Section } from '@/components/primitives'
import { CASE_STATS, FOLIO, FOLIO_CATS, FOLIO_DAYS } from '@/data/site'

export default function Portfolio() {
  const [cat, setCat] = useState('All')

  // Derived, not stored. Storing a filtered copy in state is the classic way to
  // end up rendering stale data after the source list changes.
  const shown = useMemo(() => (cat === 'All' ? FOLIO : FOLIO.filter((f) => f.cat === cat)), [cat])

  return (
    <>
      <Section className="pb-6 pt-16">
        <div className="kicker">Portfolio</div>
        <h1 className="mt-4 max-w-[720px] text-[36px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[46px] lg:text-[54px]">
          Apps that cleared review with us.
        </h1>
        <p className="mt-5 max-w-[580px] text-[16px] leading-[1.6] text-[var(--t-70)] sm:text-[17px]">
          A sample of the 3,471. Published with permission; we never list an app without it.
        </p>

        <div className="mt-[30px] flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {FOLIO_CATS.map((c) => (
            <Chip key={c} on={cat === c} onClick={() => setCat(c)}>
              {c}
            </Chip>
          ))}
        </div>
      </Section>

      {/* Featured case study */}
      <Section tight>
        <Reveal>
          <Glass
            weight="strong"
            className="grid overflow-hidden rounded-[26px] lg:grid-cols-[1fr_.9fr]"
          >
            <div className="p-7 sm:p-10">
              <span className="rounded-full bg-[rgba(236,48,19,.9)] px-[11px] py-[5px] text-[10px] font-extrabold uppercase tracking-[0.1em] text-white">
                Featured case study
              </span>
              <h2 className="mt-[22px] text-[27px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[34px]">
                Trailkit went from rejected twice to featured in Outdoors.
              </h2>
              <p className="mt-4 max-w-[520px] text-[14.5px] leading-[1.6] text-pretty text-[var(--t-60)]">
                Two failed attempts at self-organised testing, both broken by testers going quiet
                around day six. Cohort filled fourteen slots in nine hours, caught the same drop-off
                pattern on day six, and auto-replaced before the counter noticed.
              </p>
              <dl className="mt-[30px] grid grid-cols-3 gap-5 border-t border-white/10 pt-6">
                {CASE_STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="text-[22px] font-extrabold tracking-[-0.04em] text-flame-200 sm:text-[26px]">
                      {s.value}
                    </dt>
                    <dd className="mt-[3px] text-[12px] text-[var(--t-50)]">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col justify-center gap-3.5 bg-black/30 p-7 sm:p-10">
              <div className="flex items-center gap-3.5">
                <div
                  className="h-[52px] w-[52px] flex-none rounded-2xl"
                  style={{
                    background: 'linear-gradient(140deg,#8fd7b0,#1f5c43)',
                    boxShadow: '0 6px 20px rgba(0,0,0,.4)',
                  }}
                />
                <div>
                  <div className="text-[17px] font-extrabold tracking-[-0.025em]">Trailkit</div>
                  <div className="mt-0.5 font-mono text-[11.5px] text-[var(--t-50)]">
                    com.northbeam.trailkit
                  </div>
                </div>
              </div>

              <DayStrip
                days={FOLIO_DAYS}
                height={34}
                label="Fourteen days recorded, one auto-replacement on day six"
              />

              <div className="text-[11.5px] text-[var(--t-40)]">
                Fourteen days, zero resets. Amber marks the auto-replacement.
              </div>

              <blockquote className="mt-3.5 rounded-[14px] border border-white/10 bg-white/[.05] p-[18px] text-[13.5px] leading-[1.6] text-[var(--t-80)]">
                We lost the streak twice on our own before this. Production access came through on
                day fifteen.
                <footer className="mt-2.5 text-[12px] text-[var(--t-50)]">
                  Marta Beier, solo developer
                </footer>
              </blockquote>
            </div>
          </Glass>
        </Reveal>
      </Section>

      {/* Grid */}
      <Section className="pb-[90px]">
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.26, delay: stagger(i, 0.03, 8), ease: 'easeOut' }}
                className="glass glass-hover h-full rounded-[22px] p-6 transition-transform hover:-translate-y-[5px]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="h-11 w-11 rounded-[14px]"
                    style={{ background: p.icon, boxShadow: '0 5px 16px rgba(0,0,0,.4)' }}
                  />
                  <Badge bg="rgba(143,215,176,.15)" fg="#a8e6c4" bd="rgba(143,215,176,.32)">
                    {p.status}
                  </Badge>
                </div>

                <h3 className="mt-4 text-[17px] font-extrabold tracking-[-0.025em]">{p.name}</h3>
                <div className="mt-[3px] text-[12px] font-semibold text-flame-200">{p.cat}</div>
                <p className="mt-3 text-[13px] leading-[1.55] text-pretty text-[var(--t-60)]">
                  {p.body}
                </p>

                <dl className="mt-[18px] flex gap-4 border-t border-white/[.09] pt-4">
                  {[
                    [p.fill, 'to fill'],
                    [p.slots, 'slots'],
                    [p.resets, 'resets'],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <dt className="text-[15px] font-extrabold tracking-[-0.02em]">{v}</dt>
                      <dd className="mt-0.5 text-[10.5px] text-[var(--t-40)]">{l}</dd>
                    </div>
                  ))}
                </dl>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {shown.length === 0 && (
          <p className="py-16 text-center text-[14px] text-[var(--t-50)]">
            No published apps in that category yet. Try another filter.
          </p>
        )}
      </Section>
    </>
  )
}
