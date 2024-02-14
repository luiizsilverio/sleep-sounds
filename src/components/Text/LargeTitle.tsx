import { ReactNode, useContext } from 'react';

import * as S from './styles';

interface Props {
  color: string;
  textAlign?: string;
  children: ReactNode;
}

export default function LargeTitle({ children, ...rest }: Props) {
  return (
    <S.LargeText {...rest}>{ children }</S.LargeText>
  )
}