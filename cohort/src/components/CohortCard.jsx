import { motion, useReducedMotion } from 'framer-motion'
import { Badge, DayStrip, Glass } from './primitives'
import { HERO_DAYS } from '@/data/content'

const DAY_OF = 9
const TOTAL = 14
const PCT = Math.round((DAY_OF / TOTAL) * 100) // 64%

const ROWS = [
  { label: 'Testers opted in', value: '12 / 12' },
  { label: 'Proof received today', value: '12 / 12', tone: 'var(--mint, #a8e6c4)' },
  { label: 'Replacements used', value: '1' },
]

/**
 * The hero's centrepiece: a live-looking cohort monitor.
 *
 * It floats on a 7s loop and a light sweeps across the glass every 6s. Both are
 * ambient — they carry no information, so `prefers-reduced-motion` kills them
 * outright rather than shortening them.
 */
export default function CohortCard() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={reduced ? '' : 'animate-float'}
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 0.84, 0.3, 1] }}
    >
      <Glass
        weight="strong"
        className={`relative overflow-hidden rounded-[26px] p-[22px] ${reduced ? '' : 'sheen'}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
              Active cohort
            </div>
            <div className="mt-[5px] text-[17px] font-extrabold tracking-[-0.03em] sm:text-[19px]">
              com.northbeam.trailkit
            </div>
          </div>
          <Badge bg="rgba(143,215,176,.16)" fg="#a8e6c4" bd="rgba(143,215,176,.35)">
            On track
          </Badge>
        </div>

        {/* Progress well */}
        <div className="glass-well mt-[22px] flex items-center gap-5 rounded-[18px] p-[18px]">
          {/* Conic donut — the streak, as a dial */}
          <div
            className="relative grid h-[86px] w-[86px] flex-none place-items-center rounded-full"
            style={{
              background: `conic-gradient(#ff563c 0 ${PCT}%, rgba(255,255,255,.09) ${PCT}% 100%)`,
            }}
            role="img"
            aria-label={`Day ${DAY_OF} of ${TOTAL}`}
          >
            <div className="grid h-[66px] w-[66px] place-items-center rounded-full bg-ink-700 text-center leading-none">
              <div>
                <div className="text-[22px] font-extrabold tracking-[-0.03em]">{DAY_OF}</div>
                <div className="mt-0.5 text-[9.5px] font-semibold text-[var(--t-50)]">
                  of {TOTAL} days
                </div>
              </div>
            </div>
          </div>

          <dl className="grid flex-1 gap-[9px]">
            {ROWS.map((r) => (
              <div key={r.label} className="flex justify-between text-[12.5px]">
                <dt className="text-[var(--t-60)]">{r.label}</dt>
                <dd className="font-bold" style={{ color: r.tone }}>
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Daily engagement strip */}
        <div className="glass-well mt-4 rounded-[18px] px-[18px] pb-[18px] pt-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.11em] text-[rgba(243,242,242,.45)]">
              Daily engagement
            </span>
            <span className="text-[11px] text-[var(--t-40)]">D1 — D14</span>
          </div>
          <DayStrip days={HERO_DAYS} height={38} label="Nine of fourteen days recorded" />
        </div>
      </Glass>
    </motion.div>
  )
}
