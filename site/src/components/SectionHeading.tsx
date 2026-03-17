type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-type text-3xl leading-tight text-stone-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-stone-700 sm:text-lg">{description}</p>
    </div>
  )
}
