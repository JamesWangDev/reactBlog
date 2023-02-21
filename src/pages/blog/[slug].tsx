import { Footer } from "@components/Footer"
import { HeadDefault } from "@components/HeadDefault"
import { Header } from "@components/Header"
import { Loading } from "@components/Loading"
import { PostContainer } from "@components/PostContainer"
import { client } from "@lib/sanity.client"
import { FormattedPost, PostProps } from "@types"
import { convertToBrazilianDate } from "@utils/convertToBrazilianDate"
import { sanityQueries } from "@utils/sanityQueries"
import { useRouter } from "next/router"

export async function getStaticProps(context: any) {
  const { slug } = context.params
  const [postBySlug] = await client.fetch(sanityQueries.postBySlug, { slug })
  const post = {
    ...postBySlug,
    date: convertToBrazilianDate(postBySlug.date)
  }
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const slugs = await client.fetch(sanityQueries.postSlugs)

  const paths = slugs.map((post: FormattedPost) => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default function Post(props: PostProps): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <HeadDefault />
      <Header />
      <PostContainer post={props.post} />
      <Footer />
    </div>
  )
}
