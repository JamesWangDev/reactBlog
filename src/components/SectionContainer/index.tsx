import { SectionContainerProps } from "../../../@types/global"

export function SectionContainer(props: SectionContainerProps): JSX.Element {
  return (
    <section className="w-full min-h-[50vh] py-1 px-8 md:py-4 md:px-32 flex flex-col items-start justify-center gap-1">
      <h1 className="w-full text-black dark:text-white font-sans font-bold text-2xl md:text-4xl">
        {props.title}
      </h1>
      {props.subtitle && (
        <h2 className="w-full text-gray-600 dark:text-gray-400 font-sans font-semibold text-lg md:text-xl">
          {props.subtitle}
        </h2>
      )}
      <div className="w-full flex flex-col items-start">{props.children}</div>
    </section>
  )
}
