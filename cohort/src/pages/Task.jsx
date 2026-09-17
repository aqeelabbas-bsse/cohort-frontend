import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Upload } from 'lucide-react'
import { Button, Glass, Section, cx } from '@/components/primitives'
import { PROOF_THUMBS, STREAK_GRID, TASK_STEPS } from '@/data/app'

export default function Task() {
  const navigate = useNavigate()

  return (
    <Section className="pb-[90px] pt-12">
      <nav className="mb-5 flex items-center gap-2.5 text-[12.5px] text-[var(--t-40)]">
        <Link to="/testers" className="text-inherit no-underline hover:text-white">
          Tester portal
        </Link>
        <span>/</span>
        <span className="text-[var(--t-80)]">Trailkit · day 9</span>
      </nav>

      <div className="grid items-start gap-6 lg:grid-cols-[1fr_.74fr]">
        {/* Main panel */}
        <Glass weight="strong" className="rounded-[24px] p-7 sm:p-[30px]">
          <header className="flex flex-wrap items-center gap-[18px]">
            <div
              className="h-[60px] w-[60px] flex-none rounded-[18px]"
              style={{
                background: 'linear-gradient(140deg,#8fd7b0,#1f5c43)',
                boxShadow: '0 6px 20px rgba(0,0,0,.45)',
              }}
            />
            <div>
              <h1 className="text-[24px] font-extrabold tracking-[-0.035em] sm:text-[26px]">
                Trailkit
              </h1>
              <div className="mt-1 font-mono text-[12px] text-[var(--t-50)]">
                com.northbeam.trailkit · 34.2 MB · min SDK 26
              </div>
            </div>
            <div className="flex-1" />
            <div className="text-right">
              <div className="text-[22px] font-extrabold tracking-[-0.03em] text-flame-200">+10</div>
              <div className="text-[11px] text-[var(--t-40)]">points today</div>
            </div>
          </header>

          <hr className="my-6 border-0 border-t border-white/10" />

          <h2 className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
            Today's task
          </h2>
          <ol className="mt-3.5 grid gap-2.5">
            {TASK_STEPS.map((s) => (
              <li
                key={s.n}
                className="glass-well flex items-center gap-3 rounded-[14px] px-4 py-3.5"
              >
                <span
                  className="grid h-[22px] w-[22px] flex-none place-items-center rounded-[7px] border text-[11px] font-extrabold"
                  style={{
                    background: s.done ? 'rgba(143,215,176,.2)' : 'rgba(255,255,255,.08)',
                    borderColor: s.done ? 'rgba(143,215,176,.45)' : 'rgba(255,255,255,.18)',
                    color: s.done ? '#a8e6c4' : 'rgba(243,242,242,.7)',
                  }}
                >
                  {s.n}
                </span>
                <span className="text-[14px] text-[var(--t-80)]">{s.text}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-[26px] text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
            Proof of session
          </h2>
          <Dropzone />

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Button
              variant="primary"
              size="lg"
              className="flex-1 !justify-center"
              onClick={() => navigate('/testers')}
            >
              Submit day 9 proof
            </Button>
            <Button variant="quiet" size="lg" className="!font-semibold">
              Report a bug instead
            </Button>
          </div>
        </Glass>

        {/* Rail */}
        <div className="grid gap-4">
          <Glass className="rounded-[22px] p-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
              Your streak
            </div>
            <div className="mt-2.5 flex items-baseline gap-2.5">
              <span className="text-[36px] font-extrabold tracking-[-0.04em]">8</span>
              <span className="text-[13px] text-[var(--t-50)]">days unbroken</span>
            </div>

            {/* Two rows of seven — a fortnight reads as two weeks, not one line */}
            <div className="mt-[18px] grid grid-cols-7 gap-1.5">
              {STREAK_GRID.map((d) => (
                <div
                  key={d.n}
                  className="grid h-[30px] place-items-center rounded-lg border text-[10px] font-bold"
                  style={{ background: d.bg, borderColor: d.bd, color: d.fg }}
                >
                  {d.n}
                </div>
              ))}
            </div>

            <p className="mt-4 text-[12.5px] leading-[1.55] text-[var(--t-50)]">
              Miss two consecutive days and the slot returns to the pool — you keep points already
              banked, but forfeit the completion bonus of 60.
            </p>
          </Glass>

          <div className="rounded-[20px] border border-white/10 bg-white/[.05] p-[22px] backdrop-blur-xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(243,242,242,.45)]">
              Recent proofs
            </div>
            <div className="mt-3.5 grid grid-cols-4 gap-2">
              {PROOF_THUMBS.map((bg, i) => (
                <div
                  key={i}
                  className="rounded-[10px] border border-white/[.14]"
                  style={{ aspectRatio: '9 / 16', background: bg }}
                />
              ))}
            </div>
            <div className="mt-3 text-[11.5px] text-[var(--t-40)]">
              All 8 accepted · avg review 41 min
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/**
 * Proof dropzone.
 *
 * A real <input type="file"> sits behind the visual target, so the control works
 * by click, by keyboard, and by drag. `dragDepth` is a counter rather than a
 * boolean because dragenter/dragleave fire for every child element — a boolean
 * flickers off the moment the pointer crosses the inner icon.
 */
function Dropzone() {
  const [over, setOver] = useState(false)
  const [file, setFile] = useState(null)
  const depth = useRef(0)
  const input = useRef(null)

  const take = (f) => f && setFile(f.name)

  return (
    <div
      onDragEnter={(e) => {
        e.preventDefault()
        depth.current += 1
        setOver(true)
      }}
      onDragLeave={() => {
        depth.current -= 1
        if (depth.current <= 0) setOver(false)
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault()
        depth.current = 0
        setOver(false)
        take(e.dataTransfer.files?.[0])
      }}
      onClick={() => input.current?.click()}
      className={cx(
        'mt-3.5 cursor-pointer rounded-[18px] border-[1.5px] border-dashed p-8 text-center transition-colors sm:p-[34px]',
        over || file
          ? 'border-[rgba(255,98,71,.55)] bg-[rgba(255,98,71,.07)]'
          : 'border-white/20 bg-white/[.035] hover:border-[rgba(255,98,71,.55)] hover:bg-[rgba(255,98,71,.07)]'
      )}
    >
      <input
        ref={input}
        type="file"
        accept="image/png,image/jpeg"
        className="sr-only"
        onChange={(e) => take(e.target.files?.[0])}
      />

      <div className="mx-auto grid h-11 w-11 place-items-center rounded-[14px] border border-white/[.14] bg-white/[.08] text-flame-200">
        <Upload size={20} strokeWidth={1.9} />
      </div>

      <div className="mt-3.5 text-[14.5px] font-bold">
        {file ? file : "Drop today's screenshot"}
      </div>
      <div className="mt-1 text-[12.5px] text-[var(--t-50)]">
        {file
          ? 'Ready to submit. Click to choose a different file.'
          : 'PNG from the device that claimed this slot · timestamp must be within 24h'}
      </div>
    </div>
  )
}
