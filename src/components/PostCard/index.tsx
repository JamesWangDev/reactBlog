import Link from "next/link"
import { FormattedPost } from "../../../@types/global"

export function PostCard(props: FormattedPost): JSX.Element {
  return (
    <div className="w-full flex flex-row justify-between items-center my-4 md:py-4 py-2 border-b border-gray-600 dark:border-gray-400">
      <div className="flex flex-col w-full">
        <p className="w-full my-1 text-gray-600 dark:text-gray-400 font-sans font-normal text-xs">
          {props.date}
        </p>
        <Link href={`/blog/${props.slug}`}>
          <div className="flex flex-col justify-start">
            <h3 className="w-full text-black dark:text-white font-sans my-1 font-bold text-lg md:text-xl hover:underline transition duration-300 ease-in-out">
              {props.title}
            </h3>
            <p className="my-1 text-gray-600 dark:text-gray-400 font-sans font-normal md:text-base text-sm">
              {props.subtitle}
            </p>
          </div>
        </Link>
        <div className="my-1 py-1 max-w-fit">
          {props.categories.map((category) => (
            <span
              key={category}
              className="text-xs bg-gray-200 dark:bg-gray-800 rounded-md px-2 py-1 mr-2 w-full my-1 text-gray-600 dark:text-gray-400 font-normal capitalize"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
