import { FormattedPost } from "@types"
import { readingTime } from "@utils/readTime"
import Link from "next/link"

export function PostCard(props: FormattedPost): JSX.Element {
  return (
    <div className="max-w-sm md:max-w-3xl overflow-hidden flex flex-col items-start justify-between my-4 py-2">
      <Link href={`/blog/${props.slug}`}>
        <h5 className="min-w-max md:mr-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline decoration-2 transition duration-300 ease-in-out">
          {props.title}
        </h5>
      </Link>
      <div className="flex flex-row md:items-center md:justify-between justify-start min-w-max my-2 md:text-sm text-xs">
        <p className="font-semibold text-gray-500 dark:text-gray-400">
          {readingTime(props.body)}
        </p>
        &nbsp; • &nbsp;
        <p className="font-semibold text-gray-500 dark:text-gray-400">
          {props.date}
        </p>
      </div>
    </div>
  )
}
