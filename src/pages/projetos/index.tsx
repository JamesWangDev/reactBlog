import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { ProjectsContent } from "@components/ProjectsContent"
import { SectionContainer } from "@components/SectionContainer"
import { client } from "@lib/sanity.client"
import { sanityQueries } from "@utils/sanityQueries"
import { ProjectProps, ProjectsGSP } from "@types"
import * as React from "react"
import { GlobalContext } from "@contexts/GlobalContext"

export async function getStaticProps(): Promise<ProjectsGSP> {
  const projects = await client.fetch(sanityQueries.projects)

  return {
    props: {
      projects
    }
  }
}

export default function Projetos(props: ProjectProps): JSX.Element {
  const { setProjects } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setProjects(props.projects)
  })

  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <Header />
      <SectionContainer title="Projetos">
        <ProjectsContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
