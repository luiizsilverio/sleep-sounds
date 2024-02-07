import { ReactNode, useContext } from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import HeadlineText from '../HeadlineText';

interface Props {
  text: string;
  bgColor: string;
  icon?: ReactNode;
}

export default function MyButton({ text, bgColor, icon }: Props) {
  const theme = useTheme();

  return (
    <S.TouchableOpacity bgColor={bgColor}>
      <S.Content>
        { icon }
        <HeadlineText color={theme.colors.text.high}>{ text }</HeadlineText>
      </S.Content>
    </S.TouchableOpacity>
  )
}