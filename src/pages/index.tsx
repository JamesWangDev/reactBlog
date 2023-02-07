import Head from "next/head"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HomeContent } from "../components/HomeContent"
import { SectionContainer } from "../components/SectionContainer"

export default function Home(): JSX.Element {
  return (
    <div className="bg-gray-100 dark:bg-black font-sans font-bold flex min-h-screen flex-col items-center justify-between py-2 px-8 md:py-4 md:px-16">
      <Head>
        <html lang="pt-br" />
        <title>pauloruan.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SectionContainer
        title="Paulo Ruan"
        subtitle="Desenvolvedor Full Stack e Estudante de Engenharia de Software"
      >
        <HomeContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
