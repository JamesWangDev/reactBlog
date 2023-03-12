import { AboutContent } from "@components/AboutContent"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { SectionContainer } from "@components/SectionContainer"
import { client } from "@lib/sanity.client"
import { SobreGetStaticProps, SobreProps } from "@types"
import { sanityQueries } from "@utils/sanityQueries"

export async function getStaticProps(): Promise<SobreGetStaticProps> {
  const [about] = await client.fetch(sanityQueries.about)

  return {
    props: { about }
  }
}

export default function Sobre(props: SobreProps): JSX.Element {
  return (
    <div className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16">
      <Header />
      <SectionContainer title="Sobre Mim">
        <AboutContent {...props.about} />
      </SectionContainer>
      <Footer />
    </div>
  )
}
