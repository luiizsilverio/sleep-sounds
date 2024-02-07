import { ReactNode, useContext } from 'react';
import { ButtonProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import HeadlineText from '../HeadlineText';

interface Props extends ButtonProps {
  title: string;
  bgColor: string;
  icon?: ReactNode;  
}

export default function MyButton({ title, bgColor, icon, ...rest }: Props) {
  const theme = useTheme();

  return (
    <S.TouchableOpacity bgColor={bgColor} {...rest}>
      <S.Content>
        { icon }
        <HeadlineText color={theme.colors.text.high}>{ title }</HeadlineText>
      </S.Content>
    </S.TouchableOpacity>
  )
}