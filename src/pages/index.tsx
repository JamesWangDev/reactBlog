import Head from "next/head"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export default function Home(): JSX.Element {
  return (
    <div className="bg-gray-100 dark:bg-black flex min-h-screen flex-col items-center justify-between py-2 px-8 md:py-4 md:px-16">
      <Head>
        <title>pauloruan.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <h1 className="text-white font-sans font-semibold text-lg">
          Paulo Ruan
        </h1>
      </div>
      <Footer />
    </div>
  )
}
