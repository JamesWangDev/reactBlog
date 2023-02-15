import * as React from "react"
import {
  BlogGetStaticPropsResponse,
  BlogProps,
  FormattedPost
} from "../../../@types/global"
import { BlogContent } from "../../components/BlogContent"
import { Footer } from "../../components/Footer"
import { HeadDefault } from "../../components/HeadDefault"
import { Header } from "../../components/Header"
import { SectionContainer } from "../../components/SectionContainer"
import { GlobalContext } from "../../contexts/GlobalContext"
import { client } from "../../lib/sanity.client"
import { convertToBrazilianDate } from "../../utils/convertToBrazilianDate"
import { sanityQueries } from "../../utils/sanityQueries"

export async function getStaticProps(): Promise<BlogGetStaticPropsResponse> {
  const posts = await client.fetch(sanityQueries.posts)
  const formattedPosts = posts.map((post: FormattedPost) => {
    return { ...post, date: convertToBrazilianDate(post.date) }
  })

  return {
    props: {
      formattedPosts
    }
  }
}

export default function Blog(props: BlogProps): JSX.Element {
  const { setPosts, searchValue } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setPosts(props.formattedPosts)
  })

  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <HeadDefault />
      <Header />
      <SectionContainer
        title="Blog"
        subtitle={
          searchValue.length > 0
            ? `Resultados para "${searchValue}"`
            : "Todos os posts"
        }
      >
        <BlogContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
