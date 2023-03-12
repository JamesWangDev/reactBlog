import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Loading } from "@components/Loading"
import { ProjectContent } from "@components/ProjectContent"
import { SectionContainer } from "@components/SectionContainer"
import { client } from "@lib/sanity.client"
import { Project, ProjectContentProps } from "@types"
import { sanityQueries } from "@utils/sanityQueries"
import { useRouter } from "next/router"

export async function getStaticProps(context: any) {
  const { slug } = context.params
  const [projectBySlug] = await client.fetch(sanityQueries.projectBySlug, {
    slug
  })
  return {
    props: {
      project: projectBySlug
    }
  }
}

export async function getStaticPaths() {
  const slugs = await client.fetch(sanityQueries.projectSlug)

  const paths = slugs.map((project: Project) => ({
    params: { slug: project.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default function Projeto(props: ProjectContentProps): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <Header />
      <SectionContainer title={props.project.name}>
        <ProjectContent project={props.project} />
      </SectionContainer>
      <Footer />
    </div>
  )
}
