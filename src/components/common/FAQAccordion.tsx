import { useMemo, useRef } from 'react'

export interface FAQItem {
  id: string
  category: 'General' | 'AI & Technology' | 'Farmer Support' | 'Partnerships'
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  openItemId: string | null
  onToggle: (itemId: string) => void
}

export default function FAQAccordion({ items, openItemId, onToggle }: FAQAccordionProps) {
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const categories = useMemo(() => {
    return Array.from(
      items.reduce((categorySet, item) => {
        categorySet.add(item.category)
        return categorySet
      }, new Set<FAQItem['category']>()),
    )
  }, [items])

  const itemIds = useMemo(() => items.map((item) => item.id), [items])

  function focusByIndex(index: number) {
    const boundedIndex = (index + itemIds.length) % itemIds.length
    const targetId = itemIds[boundedIndex]
    buttonRefs.current[targetId]?.focus()
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, currentId: string) {
    const currentIndex = itemIds.indexOf(currentId)
    if (currentIndex === -1) {
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      focusByIndex(currentIndex + 1)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      focusByIndex(currentIndex - 1)
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      focusByIndex(0)
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      focusByIndex(itemIds.length - 1)
    }
  }

  return (
    <div className="space-y-8 sm:space-y-10">
      {categories.map((category) => {
        const categoryItems = items.filter((item) => item.category === category)
        return (
          <section key={category} aria-label={`${category} frequently asked questions`}>
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">{category}</h2>
            <div className="mt-4 space-y-3">
              {categoryItems.map((item) => {
                const isOpen = openItemId === item.id
                return (
                  <article key={item.id} className="panel-surface" data-open={isOpen ? 'true' : 'false'}>
                    <h3>
                      <button
                        id={`trigger-${item.id}`}
                        ref={(element) => {
                          buttonRefs.current[item.id] = element
                        }}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`panel-${item.id}`}
                        onClick={() => onToggle(item.id)}
                        onKeyDown={(event) => handleKeyDown(event, item.id)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-base font-semibold text-neutral-900 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-4 sm:px-5 sm:text-lg"
                      >
                        <span>{item.question}</span>
                        <span
                          aria-hidden="true"
                          className={[
                            'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform duration-300 sm:h-7 sm:w-7',
                            isOpen ? 'rotate-180' : 'rotate-0',
                          ].join(' ')}
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <div
                      id={`panel-${item.id}`}
                      role="region"
                      aria-labelledby={`trigger-${item.id}`}
                      aria-hidden={!isOpen}
                      className={[
                        'grid transition-all duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      ].join(' ')}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-5 text-sm leading-relaxed text-neutral-700 sm:px-5 sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
