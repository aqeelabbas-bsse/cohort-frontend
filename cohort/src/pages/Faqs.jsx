import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Button, Section, cx } from '@/components/primitives'
import { ALL_FAQS, FAQ_CATS } from '@/data/site'

export default function Faqs() {
  const [cat, setCat] = useState('All questions')
  const [open, setOpen] = useState(0)

  const list = useMemo(
    () => (cat === 'All questions' ? ALL_FAQS : ALL_FAQS.filter((f) => f.c === cat)),
    [cat]
  )

  // Changing category re-opens the first item, so the panel is never empty.
  const pick = (c) => {
    setCat(c)
    setOpen(0)
  }

  return (
    <Section className="pb-[90px] pt-16">
      <div className="kicker">FAQs</div>
      <h1 className="mt-4 max-w-[660px] text-[36px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[44px] lg:text-[52px]">
        Everything we get asked, answered plainly.
      </h1>

      <div className="mt-11 grid items-start gap-8 lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* Category rail */}
        <div className="grid gap-1 lg:sticky lg:top-24">
          <div className="flex gap-1 overflow-x-auto pb-2 lg:grid lg:overflow-visible lg:pb-0">
            {FAQ_CATS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => pick(c)}
                aria-pressed={cat === c}
                data-on={cat === c}
                className="chip !justify-start !rounded-xl !px-3.5 !py-[11px] !text-[13.5px]"
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.05] p-[18px]">
            <div className="text-[12.5px] font-bold">Still stuck?</div>
            <p className="mb-3.5 mt-2 text-[12px] leading-[1.5] text-[var(--t-50)]">
              Ask us directly. We answer within four hours.
            </p>
            <Button to="/contact" variant="primary" size="sm" className="w-full !justify-center">
              Contact us
            </Button>
          </div>
        </div>

        {/* Answers */}
        <div className="grid gap-2.5">
          {list.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={cx(
                  'rounded-[18px] border transition-colors',
                  isOpen
                    ? 'border-[rgba(255,98,71,.35)] bg-white/[.09]'
                    : 'border-white/10 bg-white/[.05] hover:bg-white/[.08]'
                )}
                style={{ backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)' }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-[22px] text-left"
                >
                  <span className="text-[15px] font-semibold tracking-[-0.015em] sm:text-[16px]">
                    {f.q}
                  </span>
                  <span
                    className={cx(
                      'grid h-[26px] w-[26px] flex-none place-items-center rounded-lg bg-white/[.07] text-flame-200 transition-transform duration-200',
                      isOpen && 'rotate-45'
                    )}
                  >
                    <Plus size={15} strokeWidth={2} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 0.84, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[680px] px-6 pb-[22px] text-[14px] leading-[1.65] text-pretty text-[rgba(243,242,242,.65)]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
