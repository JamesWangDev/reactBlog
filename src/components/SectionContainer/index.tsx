interface SectionContainerProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export function SectionContainer({
  children,
  title,
  subtitle
}: SectionContainerProps): JSX.Element {
  return (
    <section className="w-full min-h-[50vh] py-1 px-8 md:py-4 md:px-32 flex flex-col items-start justify-center gap-1">
      <h1 className="w-full text-black dark:text-white font-sans font-bold text-2xl md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <h2 className="w-full text-gray-600 dark:text-gray-400 font-sans font-semibold text-lg md:text-xl">
          {subtitle}
        </h2>
      )}
      <div className="w-full flex flex-col items-start">{children}</div>
    </section>
  )
}
