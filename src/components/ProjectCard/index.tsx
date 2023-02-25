import { Project } from "@types"
import Image from "next/image"

export function ProjectCard(props: Project): JSX.Element {
  return (
    <div className="bg-cod-gray-100 max-w-xs border border-cod-gray-200 rounded-sm overflow-hidden shadow-md dark:bg-cod-gray-900 dark:border-cod-gray-700">
      {props.image && (
        <Image
          src={props.image}
          alt={props.name}
          width={320}
          height={120}
          className="rounded-t-sm object-cover"
        />
      )}
      <div className="m-2 p-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="mb-2 text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex flex-row pt-4 pb-2">
          {props.technologies.map((technology) => (
            <span
              key={technology}
              className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-cod-gray-700 dark:text-gray-400"
            >
              #{technology.toLowerCase().replace(" ", "-")}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
