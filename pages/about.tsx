import Head from 'next/head';

export default function About(): JSX.Element {
  return (
    <div>
      <Head>
        <title>pr.</title>
        <meta name='description' content='Paulo Ruan personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>About Page</h1>
    </div>
  );
}
