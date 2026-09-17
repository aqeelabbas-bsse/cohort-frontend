import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered reveal.
 *
 * The mockup did this with a raw IntersectionObserver that stamped a `.seen`
 * class and a staggered `animationDelay`. Framer Motion's `whileInView` gives
 * the same behaviour declaratively, and `viewport={{ once: true }}` reproduces
 * the original's `unobserve()` — an element animates once and then stays put.
 *
 * `delay` is the stagger. Keep it under ~0.36s (6 × 60ms) so a long grid never
 * leaves the reader waiting on the last card, exactly as the original clamped
 * its index with Math.min(i, 6).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  as = 'div',
  className = '',
  ...rest
}) {
  const reduced = useReducedMotion()
  const M = motion[as] || motion.div

  // Reduced motion: keep the element, drop the movement.
  if (reduced) {
    return (
      <M className={className} {...rest}>
        {children}
      </M>
    )
  }

  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.08 }}
      transition={{ duration: 0.62, delay, ease: [0.16, 0.84, 0.3, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Cap the stagger so late items in a long list don't feel abandoned. */
export const stagger = (i, step = 0.06, max = 6) => Math.min(i, max) * step

/** Page transition used by the route shell. */
export const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 0.84, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: 'easeIn' } },
}
