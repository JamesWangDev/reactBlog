import Link from 'next/link';
import * as S from './styles';

export default function Footer(): JSX.Element {
  return (
    <S.Footer>
      <S.Text>
        Made with <S.Heart>❤</S.Heart> and Next.js by{' '}
        <S.Link>
          <Link href='https://github.com/pauloruan'>pr.</Link>
        </S.Link>{' '}
        | Reporting bugs{' '}
        <S.Link>
          <Link href='https://github.com/pauloruan/pauloruan.io/issues'>here</Link>
        </S.Link>
        .
      </S.Text>
    </S.Footer>
  );
}
