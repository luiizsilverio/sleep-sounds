import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';
import Image1 from '../../assets/login-slide-1.svg';
import Image2 from '../../assets/login-slide-2.svg';
import Image3 from '../../assets/login-slide-3.svg';

import LargeTitle from '../../components/LargeTitle';
import * as S from './styles';

export default function Login() {
  const theme = useTheme();

  return (
    <S.Container>      
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <S.SlideWrapper key='slide-1'>
          <Image1 />
          <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
        </S.SlideWrapper>
        
        <S.SlideWrapper key='slide-2'>
          <Image2 />
          <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
        </S.SlideWrapper>

        <S.SlideWrapper key='slide-3'>
          <Image3 />
          <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
        </S.SlideWrapper>

      </ScrollView>
    </S.Container>
  )
}