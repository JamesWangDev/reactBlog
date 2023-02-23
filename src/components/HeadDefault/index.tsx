import Head from "next/head"

export function HeadDefault(): JSX.Element {
  return (
    <Head>
      <title>Paulo Ruan</title>
      <meta property="og:title" content="Paulo Ruan" />
      <meta
        name="description"
        content="Portfolio de Paulo Ruan - Desenvolvedor Full Stack"
      />
      <meta property="og:url" content="https://pauloruan.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="author" content="Paulo Ruan" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
