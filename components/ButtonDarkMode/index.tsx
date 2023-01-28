import { SunDim } from 'phosphor-react';
import * as S from './styles';

export default function ButtonDarkMode(): JSX.Element {
  return (
    <S.Button>
      <SunDim weight={'bold'} size={20} />
    </S.Button>
  );
}
