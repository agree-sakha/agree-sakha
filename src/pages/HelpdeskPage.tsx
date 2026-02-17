import { useState } from 'react'
import { Link } from 'react-router-dom'
import FAQAccordion from '../components/common/FAQAccordion'
import type { FAQItem } from '../components/common/FAQAccordion'

const faqItems: FAQItem[] = [
  {
    id: 'general-1',
    category: 'General',
    question: 'What does AGREE-SAKHA Innovations do?',
    answer:
      'We build AI-powered tools and decision systems that support agricultural planning, crop monitoring, and farm-level operational decisions.',
  },
  {
    id: 'general-2',
    category: 'General',
    question: 'Who can work with AGREE-SAKHA?',
    answer:
      'We support farmers, farmer producer organizations, agri-input partners, and institutions looking to modernize agriculture workflows.',
  },
  {
    id: 'ai-1',
    category: 'AI & Technology',
    question: 'How is AI used in your platform?',
    answer:
      'Our models analyze multi-source data such as weather, soil signals, and crop observations to identify trends and recommend practical actions.',
  },
  {
    id: 'ai-2',
    category: 'AI & Technology',
    question: 'Do your insights replace agronomy experts?',
    answer:
      'No. Our AI complements agronomy expertise by accelerating analysis and surfacing high-priority recommendations for human review.',
  },
  {
    id: 'support-1',
    category: 'Farmer Support',
    question: 'How can farmers receive support after onboarding?',
    answer:
      'Support includes guided onboarding, digital help materials, and direct escalation channels for issue resolution and workflow assistance.',
  },
  {
    id: 'support-2',
    category: 'Farmer Support',
    question: 'Can recommendations be localized for specific regions?',
    answer:
      'Yes. Regional context is built into our implementation to account for local climate, crop patterns, and resource availability.',
  },
  {
    id: 'partners-1',
    category: 'Partnerships',
    question: 'How can organizations partner with AGREE-SAKHA?',
    answer:
      'Partnerships can include pilot programs, technology integration, co-developed initiatives, and ecosystem collaborations.',
  },
  {
    id: 'partners-2',
    category: 'Partnerships',
    question: 'Do you support long-term implementation partnerships?',
    answer:
      'Yes. We work from pilot to scale with phased deployment, measurable milestones, and structured operational support.',
  },
]

export default function HelpdeskPage() {
  const [openItemId, setOpenItemId] = useState<string | null>(faqItems[0]?.id ?? null)

  function handleToggle(itemId: string) {
    setOpenItemId((current) => (current === itemId ? null : itemId))
  }

  return (
    <div className="container space-y-10 sm:space-y-12">
      <section className="panel-surface p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Helpdesk And Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-3xl text-base text-neutral-700 sm:text-lg">
          Explore common questions across onboarding, AI implementation, support operations, and
          partnership models.
        </p>
      </section>

      <FAQAccordion items={faqItems} openItemId={openItemId} onToggle={handleToggle} />

      <section className="panel-surface bg-primary-100/80 px-5 py-8 sm:px-8 sm:py-10">
        <h2 className="text-2xl font-bold text-primary-700 sm:text-3xl">
          Need direct support from our team?
        </h2>
        <p className="mt-3 max-w-2xl text-base text-neutral-700 sm:text-lg">
          Share your specific use case and we will help you with a focused response.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-button bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-primary-100 sm:w-auto"
        >
          Contact The Team
        </Link>
      </section>
    </div>
  )
}
