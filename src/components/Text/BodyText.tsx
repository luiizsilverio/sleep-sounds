import { ReactNode, useContext } from 'react';

import * as S from './styles';

interface Props {
  color: string;
  textAlign?: string;
  children: ReactNode;
}

export default function BodyText({ children, ...rest }: Props) {
  return (
    <S.BodyText {...rest}>{ children }</S.BodyText>
  )
}