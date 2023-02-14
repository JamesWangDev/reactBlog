import { Footer } from "../components/Footer"
import { HeadDefault } from "../components/HeadDefault"
import { Header } from "../components/Header"
import { ProjectsContent } from "../components/ProjectsContent"
import { SectionContainer } from "../components/SectionContainer"

export default function Projetos(): JSX.Element {
  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <HeadDefault />
      <Header />
      <SectionContainer title="Projetos">
        <ProjectsContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
