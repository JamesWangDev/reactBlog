import { Footer } from "../components/Footer"
import { HeadDefault } from "../components/HeadDefault"
import { Header } from "../components/Header"
import { NotFoundContent } from "../components/NotFoundContent"
import { SectionContainer } from "../components/SectionContainer"

export default function NotFound(): JSX.Element {
  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <HeadDefault />
      <Header />
      <SectionContainer
        title="Página não encontrada"
        subtitle="Desculpa, não foi possível encontrar a página acessada."
      >
        <NotFoundContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
