import { FormattedPost } from "@types"
import { readingTime } from "@utils/readTime"
import Link from "next/link"

export function PostCard(props: FormattedPost): JSX.Element {
  return (
    <div className="max-w-sm md:max-w-3xl overflow-hidden border-b-2 border-cod-gray-200 dark:border-cod-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between my-2 py-1">
      <Link href={`/blog/${props.slug}`}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline decoration-2 transition duration-300 ease-in-out">
          {props.title}
        </h5>
      </Link>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Tempo de leitura:&nbsp;
        {readingTime(props.body)}
      </p>
      <div className="flex flex-row py-2 justify-center items-center">
        {props.categories.map((category) => (
          <span
            key={category}
            className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-code font-semibold text-gray-700 mr-2 dark:bg-cod-gray-700 dark:text-gray-400"
          >
            #{category}
          </span>
        ))}
      </div>
    </div>
  )
}
