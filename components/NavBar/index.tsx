import Link from 'next/link';
import * as S from './styles';
import ButtonDarkMode from '../ButtonDarkMode';

export default function NavBar(): JSX.Element {
  return (
    <S.Container>
      <S.List>
        <S.Item>
          <Link href='/'>Home</Link>
        </S.Item>
        <S.Item>
          <Link href='/about'>About</Link>
        </S.Item>
        <S.Item>
          <Link href='/projects'>Projects</Link>
        </S.Item>
        <S.Item>
          <Link href='/posts'>Posts</Link>
        </S.Item>
      </S.List>
      <ButtonDarkMode />
    </S.Container>
  );
}
