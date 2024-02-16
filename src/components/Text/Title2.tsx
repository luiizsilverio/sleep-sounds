import { ReactNode, useContext } from 'react';

import * as S from './styles';

interface Props {
  color: string;
  textAlign?: string;
  children: ReactNode;
}

export default function Title2({ children, ...rest }: Props) {
  return (
    <S.Title2Text {...rest}>{ children }</S.Title2Text>
  )
}