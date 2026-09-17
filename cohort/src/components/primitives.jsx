import { Link } from 'react-router-dom'
import Reveal from './Reveal'

/* ---------------------------------------------------------------------------
 * cx — the tiny class joiner. Filters out false/undefined so you can write
 * cx('glass', isOpen && 'ring-1') without littering ternaries everywhere.
 * ------------------------------------------------------------------------ */
export const cx = (...parts) => parts.filter(Boolean).join(' ')

/* ---------------------------------------------------------------------------
 * Section — one page band. Owns the 1240px measure and the vertical rhythm so
 * no page has to remember the padding numbers.
 * ------------------------------------------------------------------------ */
export function Section({ children, className = '', tight = false, id, ...rest }) {
  return (
    <section id={id} className={cx('shell', tight ? 'py-8 sm:py-10' : 'py-10 sm:py-[52px]', className)} {...rest}>
      {children}
    </section>
  )
}

/* ---------------------------------------------------------------------------
 * SectionHead — eyebrow + headline + optional lede.
 * The eyebrow is not decoration: it names the band so a reader scanning the
 * page can locate themselves without reading the headline.
 * ------------------------------------------------------------------------ */
export function SectionHead({ kicker, title, lede, className = '', max = 'max-w-[660px]' }) {
  return (
    <Reveal className={className}>
      {kicker && <div className="kicker">{kicker}</div>}
      <h2
        className={cx(
          'mt-3.5 text-[30px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[40px]',
          max
        )}
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-[620px] text-[15px] leading-[1.6] text-pretty text-[var(--t-60)] sm:text-[15.5px]">
          {lede}
        </p>
      )}
    </Reveal>
  )
}

/* ---------------------------------------------------------------------------
 * Glass — the surface every card in this product is made of.
 * `weight` picks the recipe, `hover` opts into the accent border on hover.
 * ------------------------------------------------------------------------ */
export function Glass({
  children,
  weight = 'default', // 'default' | 'strong' | 'well'
  hover = false,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const weights = { default: 'glass', strong: 'glass-strong', well: 'glass-well' }
  return (
    <Tag className={cx(weights[weight], hover && 'glass-hover', className)} {...rest}>
      {children}
    </Tag>
  )
}

/* ---------------------------------------------------------------------------
 * Button — one component, four skins, and it renders as whatever the job needs:
 *   <Button to="/signup">   → react-router <Link>  (navigation)
 *   <Button onClick={fn}>   → <button>             (action)
 *   <Button href="mailto:"> → <a>                  (external)
 * Getting this right is what keeps the keyboard and screen-reader experience
 * honest; the mockup used <span onClick> everywhere, which neither can reach.
 * ------------------------------------------------------------------------ */
export function Button({
  children,
  variant = 'primary', // primary | glass | ink | quiet
  size = 'md', // sm | md | lg
  to,
  href,
  className = '',
  ...rest
}) {
  const variants = {
    primary: 'btn-primary',
    glass: 'btn-glass',
    ink: 'btn-ink',
    quiet:
      'border-white/[.14] text-[rgba(243,242,242,.85)] hover:bg-white/[.09] bg-transparent',
  }
  const sizes = {
    sm: 'rounded-[11px] px-[14px] py-[9px] text-[13.5px]',
    md: 'rounded-[13px] px-[18px] py-[12px] text-[14px]',
    lg: 'rounded-[14px] px-6 py-[15px] text-[15px] font-bold',
  }
  const classes = cx('btn', variants[variant], sizes[size], className)

  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{children}</a>
  return <button type="button" className={classes} {...rest}>{children}</button>
}

/* ---------------------------------------------------------------------------
 * Chip — filter pill. Controlled: the parent owns `on`.
 * ------------------------------------------------------------------------ */
export function Chip({ on = false, children, className = '', ...rest }) {
  // className is merged, not replaced — spreading `...rest` onto the element
  // after a literal className="chip" would silently drop the base class.
  return (
    <button
      type="button"
      className={cx('chip', className)}
      data-on={on}
      aria-pressed={on}
      {...rest}
    >
      {children}
    </button>
  )
}

/* ---------------------------------------------------------------------------
 * Avatar — a gradient disc. No photography anywhere in this product, so a
 * deterministic gradient per person is the identity device.
 * ------------------------------------------------------------------------ */
export function Avatar({ gradient, size = 32, ring = false, label, className = '' }) {
  return (
    <div
      aria-hidden={!label}
      aria-label={label}
      className={cx('flex-none rounded-full', className)}
      style={{
        width: size,
        height: size,
        background: gradient,
        border: ring ? '2px solid var(--ink-800)' : undefined,
      }}
    />
  )
}

/* ---------------------------------------------------------------------------
 * DayStrip — the signature element.
 * Fourteen cells, one per required testing day. This one component carries the
 * product's entire thesis (a streak you must not break) and it reappears on the
 * hero, the roster, the portfolio and the tester portal at different sizes.
 * ------------------------------------------------------------------------ */
export function DayStrip({ days, height = 38, gap = 4, radius = 6, label = '14-day engagement' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="grid"
      style={{ gridTemplateColumns: `repeat(${days.length}, 1fr)`, gap }}
    >
      {days.map((d, i) => (
        <div key={i} style={{ height, borderRadius: radius, background: d.bg }} />
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------------------
 * StatRow — the four-up figure band under the hero. One hairline grid, so the
 * cells read as a single object rather than four floating cards.
 * ------------------------------------------------------------------------ */
export function StatRow({ items }) {
  return (
    <Reveal className="grid grid-cols-2 overflow-hidden rounded-[22px] border border-white/[.12] bg-white/[.09] backdrop-blur-2xl md:grid-cols-4"
      style={{ gap: 1 }}
    >
      {items.map((s) => (
        <div key={s.label} className="bg-[rgba(18,16,15,.55)] px-6 py-[26px]">
          <div className="text-[28px] font-extrabold tracking-[-0.04em] sm:text-[34px]">{s.value}</div>
          <div className="mt-1 text-[12.5px] text-[var(--t-50)]">{s.label}</div>
        </div>
      ))}
    </Reveal>
  )
}

/* ---------------------------------------------------------------------------
 * Badge — small status token (On track / Verified / Overdue).
 * ------------------------------------------------------------------------ */
export function Badge({ children, bg, fg, bd }) {
  return (
    <span
      className="inline-flex whitespace-nowrap rounded-full px-[11px] py-[6px] text-[11px] font-bold"
      style={{ background: bg, color: fg, border: bd ? `1px solid ${bd}` : undefined }}
    >
      {children}
    </span>
  )
}

/* ---------------------------------------------------------------------------
 * IconTile — the rounded square that holds a Lucide glyph in cards and lists.
 * ------------------------------------------------------------------------ */
export function IconTile({ children, size = 34, accent = true, radius = 11 }) {
  return (
    <div
      className="grid flex-none place-items-center"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: accent ? 'rgba(236,48,19,.16)' : 'rgba(255,255,255,.07)',
        border: `1px solid ${accent ? 'rgba(255,98,71,.32)' : 'rgba(255,255,255,.14)'}`,
        color: accent ? 'var(--flame-200)' : 'var(--flame-200)',
      }}
    >
      {children}
    </div>
  )
}
