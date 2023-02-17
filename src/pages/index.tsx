import { Footer } from "@components/Footer"
import { HeadDefault } from "@components/HeadDefault"
import { Header } from "@components/Header"
import { HomeContent } from "@components/HomeContent"
import { SectionContainer } from "@components/SectionContainer"

export default function Home(): JSX.Element {
  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <HeadDefault />
      <Header />
      <SectionContainer title="Paulo Ruan" subtitle="Desenvolvedor Full Stack">
        <HomeContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
