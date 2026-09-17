import { Compass } from 'lucide-react'
import { Button, Glass, Section } from '@/components/primitives'

const SUGGESTIONS = [
  { label: 'Start a cohort', to: '/submit' },
  { label: 'Tester portal', to: '/testers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQs', to: '/faqs' },
]

/**
 * An empty screen is an invitation to act, so this one names the four things
 * people most often arrive looking for rather than apologising.
 */
export default function NotFound() {
  return (
    <Section className="grid min-h-[62vh] place-items-start py-16">
      <Glass className="max-w-[560px] rounded-[24px] p-8">
        <div className="grid h-11 w-11 place-items-center rounded-[14px] border border-[rgba(255,98,71,.32)] bg-[rgba(236,48,19,.16)] text-flame-200">
          <Compass size={20} strokeWidth={1.9} />
        </div>

        <h1 className="mt-5 text-[30px] font-extrabold tracking-[-0.04em] sm:text-[36px]">
          That page does not exist
        </h1>
        <p className="mt-3 text-[14.5px] leading-[1.6] text-[var(--t-60)]">
          The address may have changed, or the link that brought you here is out of date. Here is
          where most people are heading.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {SUGGESTIONS.map((s, i) => (
            <Button key={s.to} to={s.to} variant={i === 0 ? 'primary' : 'glass'} size="md">
              {s.label}
            </Button>
          ))}
        </div>
      </Glass>
    </Section>
  )
}
