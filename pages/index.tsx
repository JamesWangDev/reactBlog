import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import * as S from '../styles/PagesStyles';

export default function Home(): JSX.Element {
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
          <S.Title>Paulo Ruan</S.Title>
          <S.SubTitle>Full Stack Developer and Software Engineering Student</S.SubTitle>
          <S.Text>Welcome to my place on the internet. I build things for the web.</S.Text>
        </S.Content>
        <Footer />
      </S.Container>
    </div>
  );
}
