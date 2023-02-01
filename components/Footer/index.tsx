import * as S from './styles';

export default function Footer(): JSX.Element {
  return (
    <S.Footer>
      <S.Text>
        Made with <S.Heart>&#x2764;</S.Heart> and Next.js by&nbsp;
      </S.Text>
      <S.Link href='https://github.com/pauloruan' target='_blank'>
        <strong>pr</strong>
      </S.Link>
      <S.Text>.</S.Text>
    </S.Footer>
  );
}
