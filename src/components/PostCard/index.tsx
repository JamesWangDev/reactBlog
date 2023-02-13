import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FormattedPost } from "../../../@types/global"
import { client } from "../../lib/sanity.client"
import { readingTime } from "../../utils/readTime"

export function PostCard(props: FormattedPost): JSX.Element {
  const builder = imageUrlBuilder(client)
  return (
    <div className="max-w-xs bg-cod-gray-100 hover:bg-white border border-cod-gray-200 rounded-t-sm shadow dark:bg-cod-gray-900 dark:hover:bg-cod-gray-800 dark:border-cod-gray-700 transition duration-300 ease-in-out">
      <Link href={`/blog/${props.slug}`}>
        {(
          <Image
            src={builder.image(props.poster).url()}
            alt={props.attribution}
            width={320}
            height={200}
            className="rounded-t-sm object-cover"
          />
        ) || <Skeleton height={200} width={320} />}

        <div className="p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title || <Skeleton />}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Tempo de leitura:&nbsp;
            {readingTime(props.body) || <Skeleton />}
          </p>
        </div>
      </Link>
    </div>
  )
}
