import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import * as S from '../styles/PagesStyles';

export default function Projects(): JSX.Element {
  return (
    <div>
      <Head>
        <title>pr.</title>
        <meta name='description' content='Paulo Ruan personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <S.Container>
        <NavBar />
        <S.Content>
          <S.Title>Projects page in construction</S.Title>
          <S.SubTitle>
            <Link href='/'>&larr; Back to home</Link>
          </S.SubTitle>
        </S.Content>
        <Footer />
      </S.Container>
    </div>
  );
}
