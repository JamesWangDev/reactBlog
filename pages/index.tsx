import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>pr.</title>
        <meta name='description' content='Paulo Ruan personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}
