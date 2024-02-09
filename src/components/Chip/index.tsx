import { ReactNode } from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';

import HeadlineText from '../HeadlineText';
import * as S from './styles';

interface Props {
  text: string;
  icon: ReactNode;
  active?: boolean;
}

export function Chip({ text, icon, active = false }: Props) {
  const theme = useTheme();
  return (
    <S.Container active={active}>
      {icon}
      <S.TextWrapper>
        <HeadlineText color={theme.colors.text.high}>{text}</HeadlineText>
      </S.TextWrapper>
    </S.Container>    
  )
}