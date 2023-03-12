import { BlogContent } from "@components/BlogContent"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { SectionContainer } from "@components/SectionContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import { client } from "@lib/sanity.client"
import { BlogGetStaticProps, BlogProps, FormattedPost } from "@types"
import { convertToBrazilianDate } from "@utils/convertToBrazilianDate"
import { sanityQueries } from "@utils/sanityQueries"
import * as React from "react"

export async function getStaticProps(): Promise<BlogGetStaticProps> {
  const posts = await client.fetch(sanityQueries.posts)
  const formattedPosts = posts
    .filter((post: FormattedPost) => post.published)
    .map((post: FormattedPost) => {
      return { ...post, date: convertToBrazilianDate(post.date) }
    })

  return {
    props: {
      formattedPosts
    }
  }
}

export default function Blog(props: BlogProps): JSX.Element {
  const { setPosts } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setPosts(props.formattedPosts)
  })

  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <Header />
      <SectionContainer title="Blog">
        <BlogContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
