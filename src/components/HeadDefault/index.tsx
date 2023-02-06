import Head from "next/head"

export function HeadDefault(): JSX.Element {
  return (
    <Head>
      <html lang="pt-BR" />
      <title>pauloruan.io</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
