import { ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from 'styled-components/native';

import Image1 from '../../assets/login-slide-1.svg';
import Image2 from '../../assets/login-slide-2.svg';
import Image3 from '../../assets/login-slide-3.svg';

import LargeTitle from '../../components/LargeTitle';
import BodyText from '../../components/BodyText';
import MyButton from '../../components/MyButton';
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
          <S.TextContainer>
            <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
            <BodyText color={theme.colors.text.medium}>
              Nós temos uma biblioteca de sons que você não vai encontrar em outro lugar.
            </BodyText>
          </S.TextContainer>
        </S.SlideWrapper>
        
        <S.SlideWrapper key='slide-2'>
          <Image2 />
          <S.TextContainer>
            <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
            <BodyText color={theme.colors.text.medium}>
              Nossos sons vão ajudá-lo a relaxar e melhorar sua saúde.
            </BodyText>
          </S.TextContainer>
        </S.SlideWrapper>

        <S.SlideWrapper key='slide-3'>
          <Image3 />
          <S.TextContainer>
            <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
            <BodyText color={theme.colors.text.medium}>
              Contos de fada famosos com fundo musical tranquilo vai ajudar seus filhos a dormir mais rápido.
            </BodyText>
          </S.TextContainer>
        </S.SlideWrapper>
      </ScrollView>

      <S.DotsContainer>
        <S.Dot active />
        <S.Dot />
        <S.Dot />
      </S.DotsContainer>

      <MyButton 
        text='Próximo'
        bgColor={theme.colors.background.secondary}
      />

      <MyButton 
        text='Login com Apple'
        bgColor='transparent'
        icon={<AntDesign name="apple1" size={20} color={theme.colors.text.high} />}
      />
        
    </S.Container>
  )
}