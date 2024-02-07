import { useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from 'styled-components/native';

import Image1 from '../../assets/login-slide-1.svg';
import Image2 from '../../assets/login-slide-2.svg';
import Image3 from '../../assets/login-slide-3.svg';

import LargeTitle from '../../components/LargeTitle';
import BodyText from '../../components/BodyText';
import MyButton from '../../components/MyButton';
import * as S from './styles';

const slideWidth = Dimensions.get('window').width;

export default function Login() {
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);
  const [carouselRef, setCarouselRef] = useState<ScrollView | null>(null);

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
   const index = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
   if (index !== slideIndex) setSlideIndex(index);
  }

  return (
    <S.Container>      
      <S.CarouselContainer>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={ref => setCarouselRef(ref)}
          onMomentumScrollEnd={handleScroll}
        >
          <S.SlideWrapper key='slide-1' width={slideWidth}>
            <Image1 />          
            <S.TextContainer>
              <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
              <BodyText color={theme.colors.text.medium}>
                Nós temos uma biblioteca de sons que você não vai encontrar em outro lugar.
              </BodyText>
            </S.TextContainer>
          </S.SlideWrapper>
          
          <S.SlideWrapper key='slide-2' width={slideWidth}>
            <Image2 />
            <S.TextContainer>
              <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
              <BodyText color={theme.colors.text.medium}>
                Nossos sons vão ajudá-lo a relaxar e melhorar sua saúde.
              </BodyText>
            </S.TextContainer>
          </S.SlideWrapper>

          <S.SlideWrapper key='slide-3' width={slideWidth}>
            <Image3 />
            <S.TextContainer>
              <LargeTitle color={theme.colors.text.high}>Sons Exclusivos</LargeTitle>
              <BodyText color={theme.colors.text.medium}>
                Contos de fada famosos com fundo musical tranquilo vai ajudar seus filhos a dormir mais rápido.
              </BodyText>
            </S.TextContainer>
          </S.SlideWrapper>
        </ScrollView>
      </S.CarouselContainer>

      <S.DotsContainer>
        <S.Dot active={slideIndex === 0} />
        <S.Dot active={slideIndex === 1} />
        <S.Dot active={slideIndex === 2} />
      </S.DotsContainer>

      <S.ButtonContainer>
        <MyButton 
          text='Próximo'
          bgColor={theme.colors.background.secondary}
        />

        <MyButton 
          text='Login com Apple'
          bgColor='transparent'
          icon={<AntDesign name="apple1" size={20} color={theme.colors.text.high} />}
        />
      </S.ButtonContainer>
        
    </S.Container>
  )
}