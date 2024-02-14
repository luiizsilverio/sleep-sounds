import { ReactNode } from 'react';

import * as S from './styles';

interface Props {
  color: string;
  textAlign?: string;
  children: ReactNode;
}

export default function HeadlineText({ children, ...rest }: Props) {

  return (
    <S.HeadlineText {...rest}>{ children }</S.HeadlineText>
  )
}