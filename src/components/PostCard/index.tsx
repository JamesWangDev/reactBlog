import Link from "next/link"
import { FormattedPost } from "../../../@types/global"
import { readingTime } from "../../utils/readTime"

export function PostCard(props: FormattedPost): JSX.Element {
  return (
    <div className="bg-cod-gray-100 max-w-xs border border-cod-gray-200 rounded-sm overflow-hidden shadow-md dark:bg-cod-gray-900 dark:border-cod-gray-700 transition duration-300 ease-in-out hover:scale-105">
      <Link href={`/blog/${props.slug}`}>
        <div className="p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="mb-2 text-gray-700 dark:text-gray-400">
            {props.subtitle}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Tempo de leitura:&nbsp;
            {readingTime(props.body)}
          </p>
          <div className="flex flex-row pt-4 pb-2">
            {props.categories.map((category) => (
              <span
                key={category}
                className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-cod-gray-700 dark:text-gray-400"
              >
                #{category}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
