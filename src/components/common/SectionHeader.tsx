interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`mb-6 max-w-3xl sm:mb-8 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-neutral-700 sm:text-lg">{description}</p> : null}
    </div>
  )
}
