import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cx } from './primitives'

/**
 * Single-open accordion.
 *
 * `defaultOpen = 0` matches the mockup, which lands with the first answer
 * showing — an empty stack of closed rows reads as unfinished.
 *
 * Height animation is done with `height: 'auto'` on a motion element rather than
 * a max-height CSS trick, so the easing is correct regardless of answer length.
 */
export default function Accordion({ items, defaultOpen = 0, variant = 'plain' }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="grid gap-2.5">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.q}
            className={cx(
              'rounded-2xl border transition-colors',
              isOpen
                ? 'border-[rgba(255,98,71,.35)] bg-white/[.09]'
                : 'border-white/[.1] bg-white/[.055] hover:bg-white/[.09]'
            )}
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-[22px] py-5 text-left"
            >
              <span className="text-[14.5px] font-semibold tracking-[-0.01em] sm:text-[15px]">
                {item.q}
              </span>
              {variant === 'plus' ? (
                <span
                  className={cx(
                    'flex-none text-[20px] font-normal leading-none text-flame-200 transition-transform duration-200',
                    isOpen && 'rotate-45'
                  )}
                >
                  +
                </span>
              ) : (
                <span className="flex-none text-[20px] font-normal leading-none text-flame-200">
                  {isOpen ? '−' : '+'}
                </span>
              )}
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
                  <p className="max-w-[640px] px-[22px] pb-5 text-[13.5px] leading-[1.6] text-pretty text-[var(--t-60)]">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
