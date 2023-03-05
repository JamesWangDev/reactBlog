import { client } from "@lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { Project } from "@types"
import Image from "next/image"
import Link from "next/link"

export function ProjectCard(props: Project): JSX.Element {
  const builder = urlBuilder(client)
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="my-2 py-2">
        <Link href={`/projetos/${props.slug}`} target="_self">
          <h5 className="min-w-max md:mr-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline decoration-2 transition duration-300 ease-in-out">
            {props.name}
          </h5>
        </Link>
        <p className="mb-2 text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
      <Link href={`/projetos/${props.slug}`} target="_self">
        <Image
          src={builder.image(props.poster).url()}
          alt={props.name}
          width={504}
          height={282}
          className="rounded-2xl object-cover"
        />
      </Link>
    </div>
  )
}
