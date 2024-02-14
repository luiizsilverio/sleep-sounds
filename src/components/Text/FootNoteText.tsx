import { ReactNode, useContext } from 'react';

import * as S from './styles';

interface Props {
  color: string;
  textAlign?: string;
  children: ReactNode;
}

export default function FootNoteText({ children, ...rest }: Props) {
  return (
    <S.FootText {...rest}>{ children }</S.FootText>
  )
}