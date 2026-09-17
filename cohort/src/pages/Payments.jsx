import { useMemo, useState } from 'react'
import { Coins, CreditCard, FileText } from 'lucide-react'
import Reveal, { stagger } from '@/components/Reveal'
import { Badge, Button, Chip, Glass, Section } from '@/components/primitives'
import { CARDS, INVOICES, PAY_TILES, TRANSACTIONS } from '@/data/site'

const FILTERS = ['All', 'Card', 'Points']

export default function Payments() {
  const [filter, setFilter] = useState('All')

  const rows = useMemo(
    () => (filter === 'All' ? TRANSACTIONS : TRANSACTIONS.filter((t) => t.kind === filter)),
    [filter]
  )

  return (
    <Section className="pb-[90px] pt-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="kicker">Payments</div>
          <h1 className="mt-3.5 text-[32px] font-extrabold tracking-[-0.04em] sm:text-[42px]">
            Billing and points ledger
          </h1>
          <p className="mt-2.5 text-[15px] text-[var(--t-60)]">
            Pro plan · renews 1 September 2026 · invoices emailed automatically
          </p>
        </div>
        <Button to="/pricing" variant="primary" size="md" className="!font-bold">
          Change plan
        </Button>
      </div>

      {/* Tiles */}
      <div className="mt-[34px] grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {PAY_TILES.map((t, i) => (
          <Reveal key={t.label} delay={stagger(i)}>
            <Glass className="h-full rounded-[20px] p-[22px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.11em] text-[rgba(243,242,242,.45)]">
                {t.label}
              </div>
              <div className="mt-2.5 text-[28px] font-extrabold tracking-[-0.04em]">{t.value}</div>
              <div className="mt-1 text-[12px] text-[var(--t-50)]">{t.note}</div>
            </Glass>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid items-start gap-5 lg:grid-cols-[1.45fr_.55fr]">
        {/* Ledger */}
        <Glass className="rounded-[24px] p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
              Transactions
            </div>
            <div className="flex gap-1.5" role="group" aria-label="Filter transactions">
              {FILTERS.map((f) => (
                <Chip
                  key={f}
                  on={filter === f}
                  onClick={() => setFilter(f)}
                  className="!rounded-[10px] !px-3 !py-[7px] !text-[12px]"
                >
                  {f}
                </Chip>
              ))}
            </div>
          </div>

          {/* Header row is hidden on mobile — four columns don't fit, and the
              rows are self-describing at that size. */}
          <div className="mt-4 hidden grid-cols-[1.5fr_1fr_110px_100px] gap-3.5 border-b border-white/10 px-2 pb-2.5 text-[10.5px] font-bold uppercase tracking-[0.11em] text-[var(--t-40)] sm:grid">
            <span>Item</span>
            <span>Date</span>
            <span>Method</span>
            <span className="text-right">Amount</span>
          </div>

          <div className="grid">
            {rows.map((t) => {
              const isCard = t.kind === 'Card'
              const Icon = isCard ? CreditCard : Coins
              return (
                <div
                  key={t.ref + t.date}
                  className="grid grid-cols-[1fr_auto] items-center gap-3.5 border-b border-white/[.06] px-2 py-3.5 transition-colors hover:bg-white/[.04] sm:grid-cols-[1.5fr_1fr_110px_100px]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="grid h-[30px] w-[30px] flex-none place-items-center rounded-[10px] border"
                      style={{
                        background: isCard ? 'rgba(255,255,255,.07)' : 'rgba(236,48,19,.16)',
                        borderColor: isCard ? 'rgba(255,255,255,.13)' : 'rgba(255,98,71,.3)',
                        color: isCard ? 'rgba(243,242,242,.7)' : '#ff8a75',
                      }}
                    >
                      <Icon size={14} strokeWidth={1.9} />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[13.5px] font-semibold">{t.title}</div>
                      <div className="truncate font-mono text-[11px] text-[var(--t-40)]">
                        {t.ref}
                      </div>
                    </div>
                  </div>

                  <div className="hidden text-[12.5px] text-[var(--t-60)] sm:block">{t.date}</div>
                  <div className="hidden font-mono text-[12.5px] text-[var(--t-60)] sm:block">
                    {t.method}
                  </div>
                  <div
                    className="text-right text-[13.5px] font-bold"
                    style={{ color: t.tone || '#f3f2f2' }}
                  >
                    {t.amount}
                  </div>
                </div>
              )
            })}
          </div>
        </Glass>

        {/* Rail */}
        <div className="grid gap-3.5">
          <Glass className="rounded-[22px] p-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
              Payment methods
            </div>
            <div className="mt-4 grid gap-2.5">
              {CARDS.map((c) => (
                <div
                  key={c.brand}
                  className="flex items-center gap-3 rounded-[14px] border p-3.5"
                  style={{
                    background: c.primary ? 'rgba(255,98,71,.09)' : 'rgba(0,0,0,.26)',
                    borderColor: c.primary ? 'rgba(255,98,71,.28)' : 'rgba(255,255,255,.09)',
                  }}
                >
                  <div
                    className="grid h-6 w-[34px] flex-none place-items-center rounded-[5px] text-[8px] font-extrabold tracking-[0.04em] text-white"
                    style={{ background: c.brandBg }}
                  >
                    {c.brand}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-[13px] font-semibold">{c.num}</div>
                    <div className="text-[11px] text-[var(--t-40)]">{c.exp}</div>
                  </div>
                  {c.primary && (
                    <Badge bg="rgba(143,215,176,.16)" fg="#a8e6c4" bd="rgba(143,215,176,.35)">
                      Default
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-3 w-full rounded-xl border border-dashed border-white/20 p-3 text-[13px] font-semibold text-[var(--t-80)] transition-colors hover:bg-white/[.07]"
            >
              + Add a card
            </button>
          </Glass>

          <div className="rounded-[22px] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
              Invoices
            </div>
            <div className="mt-3.5 grid gap-2">
              {INVOICES.map((iv) => (
                <button
                  key={iv.id}
                  type="button"
                  className="flex items-center gap-2.5 rounded-[11px] border border-white/[.08] bg-black/[.26] px-3 py-2.5 text-left transition-colors hover:bg-white/[.07]"
                >
                  <FileText size={15} strokeWidth={1.9} className="flex-none text-[var(--t-60)]" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-[12.5px] font-semibold">{iv.id}</div>
                    <div className="text-[10.5px] text-[var(--t-40)]">{iv.date}</div>
                  </div>
                  <div className="text-[12.5px] font-bold">{iv.amt}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
