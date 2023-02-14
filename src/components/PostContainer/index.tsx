import { PortableText, PortableTextReactComponents } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"
import Link from "next/link"
import { RiArrowLeftUpLine } from "react-icons/ri"
import { PostProps } from "../../../@types/global"
import { client } from "../../lib/sanity.client"
import { readingTime } from "../../utils/readTime"
import { FormContact } from "../FormsContact"

const components: Partial<PortableTextReactComponents> = {
  block: {
    p: ({ children }) => {
      return (
        <p className="text-black dark:text-white font-normal text-base md:text-lg">
          {children}
        </p>
      )
    }
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <Link
          href={value.href}
          target="_blank"
          className="hover:underline decoration-2 transition duration-300 ease-in-out text-black dark:text-white font-bold italic"
        >
          {children}
        </Link>
      )
    }
  }
}

export function PostContainer(props: PostProps): JSX.Element {
  const builder = imageUrlBuilder(client)
  return (
    <section className="w-full min-h-[50vh] py-1 px-8 md:py-4 md:px-32 flex flex-col items-center justify-center gap-1">
      <div className="max-w-[800px] flex flex-col items-center justify-center py-1 px-4 md:py-4 md:px-16 my-1 md:my-4">
        <div className="w-full flex flex-col my-4 justify-center items-start">
          <h1 className="w-full text-black dark:text-white font-sans text-5xl font-extrabold text-left py-1">
            {props.post.title}
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-start my-2">
          <div className="min-w-fit flex flex-row my-2 justify-center items-center">
            <Image
              src={builder.image(props.post.authorImage).url()}
              alt={props.post.authorName}
              width={60}
              height={60}
              className="rounded-full mr-2"
            />
            <div className="flex flex-col w-full justify-center items-start ">
              <p className="text-gray-600 dark:text-gray-400 font-light text-xs md:text-sm capitalize">
                {props.post.authorName}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light text-xs md:text-sm">
                {props.post.date}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light text-xs md:text-sm">
                Tempo de leitura:&nbsp;
                {readingTime(props.post.body)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col my-4 justify-center items-center">
          <Image
            src={builder.image(props.post.poster).url()}
            alt={props.post.attribution}
            width={692}
            height={389.25}
            priority
            className="my-2"
          />
          <p className="text-gray-600 dark:text-gray-400 font-normal text-xs justify-center text-center md:text-sm italic mb-1">
            {props.post.attribution}
          </p>
        </div>
        <div className="flex flex-col my-4 py-8 justify-center items-start text-start text-black dark:text-white border-b border-b-gray-600 dark:border-b-gray-400 ">
          <PortableText
            value={props.post.body}
            components={components}
          ></PortableText>
        </div>
        <div className="flex flex-col w-full my-8 py-1 items-start text-start justify-center">
          <FormContact />
        </div>
        <div className="flex flex-col w-full my-8 py-1 justify-center items-start text-start">
          <p className="text-black dark:text-white font-normal text-sm text-start md:text-base my-2 py-1">
            <Link
              href="/blog"
              className="flex flex-row items-center text-center no-underline hover:underline decoration-2 transition duration-300 ease-in-out text-black dark:text-white"
            >
              <RiArrowLeftUpLine className="mr-1" /> Voltar para a&nbsp;
              <strong>lista de posts.</strong>
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
