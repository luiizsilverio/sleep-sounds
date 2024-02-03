import { ReactNode, useContext } from 'react';

import * as S from './styles';
import LargeTitle from '../LargeTitle';

interface Props {
  text: string;
  bgColor: string;
  icon: ReactNode;
}

export default function MyButton({ text, bgColor, icon }: Props) {
  return (
    <S.Container>
      <LargeTitle color={bgColor}>{ text }</LargeTitle>
    </S.Container>
  )
}