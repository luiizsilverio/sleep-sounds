import { ReactNode, useContext } from 'react';

import * as S from './styles';

interface Props {
  color: string;
  children: ReactNode;
}

export default function BodyText({ color, children }: Props) {
  return (
    <S.Text color={ color }>{ children }</S.Text>
  )
}