import { components } from "@components/PostContainer"
import { client } from "@lib/sanity.client"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { About } from "@types"
import Image from "next/image"
import { MdLocationOn, MdWork } from "react-icons/md"

export function AboutContent(props: About): JSX.Element {
  const builder = urlBuilder(client)
  return (
    <div className="w-full h-full flex flex-col items-start justify-start mt-2">
      <div className="h-full min-w-fit flex flex-col text-center justify-center items-start md:items-center mb-4 md:flex-row">
        <Image
          aria-label="Profile Picture"
          src={builder.image(props.image).url()}
          alt={props.alt}
          width={120}
          height={120}
          priority
          className="rounded-full md:mr-4 my-4"
        />
        <div className="flex flex-col items-start justify-center text-center">
          <h3
            aria-label="Name"
            className="text-3xl font-bold text-black dark:text-white font-sans capitalize"
          >
            {props.title}
          </h3>
          <p
            aria-label="Job"
            className="text-gray-600 dark:text-gray-400 font-normal text-sm w-44 flex justify-start items-center text-center md:text-base capitalize py-1"
          >
            <MdWork className="mr-1" />
            {props.occupation}
          </p>
          <p
            aria-label="Location"
            className="text-gray-600 dark:text-gray-400 font-normal text-sm w-44 flex justify-start items-center text-center md:text-base capitalize py-1"
          >
            <MdLocationOn className="mr-1" />
            {props.location}
          </p>
        </div>
      </div>
      <PortableText
        aria-label="About"
        value={props.content}
        components={components}
      ></PortableText>
    </div>
  )
}
