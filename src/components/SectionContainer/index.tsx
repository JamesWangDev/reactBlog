import { SectionContainerProps } from "@types"

export function SectionContainer(props: SectionContainerProps): JSX.Element {
  return (
    <section className="box-border w-full min-h-[50vh] flex flex-col items-start justify-center py-1 px-2 md:py-4 md:px-32">
      <h1 className="w-full text-black dark:text-white font-sans text-5xl font-extrabold text-left py-1">
        {props.title}
      </h1>
      {props.subtitle && (
        <h2 className="w-full text-gray-600 dark:text-gray-400 font-sans text-4xl font-bold text-left py-1">
          {props.subtitle}
        </h2>
      )}
      <div className="w-full flex flex-col items-start">{props.children}</div>
    </section>
  )
}
