import { ReactNode } from 'react';

import * as S from './styles';

interface Props {
  color: string;
  textAlign?: string;
  children: ReactNode;
}

export default function SubTitle({ children, ...rest }: Props) {
  return (
    <S.SubheadText {...rest}>{ children }</S.SubheadText>
  )
}