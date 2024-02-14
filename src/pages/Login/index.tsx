import { useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Image, GestureResponderEvent } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from 'styled-components/native';

// import Image1 from '../../assets/login-slide-1.svg';
// import Image2 from '../../assets/login-slide-2.svg';
// import Image3 from '../../assets/login-slide-3.svg';

import LargeTitle from '../../components/Text/LargeTitle';
import BodyText from '../../components/Text/BodyText';
import MyButton from '../../components/MyButton';
import slides from '../../utils/carousel';
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

  function handleClick() {
    if (slideIndex < slides.length -1) {
      const nextIndex = slideIndex + 1;
      
      carouselRef?.scrollTo({
        x: nextIndex * slideWidth
      });

      setSlideIndex(nextIndex);
    } else {
      carouselRef?.scrollTo({ x: 0 });
      setSlideIndex(0);
    }
  }

  function handleDotClick(index: number) {
    carouselRef?.scrollTo({
      x: index * slideWidth
    });

    setSlideIndex(index);
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
          {slides.map(slide => (
            <S.SlideWrapper width={slideWidth} key={slide.id}>              
              <Image source={slide.image} />
              <S.TextContainer>
                <LargeTitle color={theme.colors.text.high}>{ slide.title }</LargeTitle>
                <BodyText color={theme.colors.text.medium} textAlign='center'>
                  { slide.subtitle }
                </BodyText>
              </S.TextContainer>
            </S.SlideWrapper>
          ))}        
        </ScrollView>
      </S.CarouselContainer>

      <S.DotsContainer>
        {slides.map(slide => (
          <S.Dot key={slide.id} 
            active={slideIndex === parseInt(slide.id) -1}
            onPress={() => handleDotClick(parseInt(slide.id) -1)}
          />
        ))}        
      </S.DotsContainer>

      <S.ButtonContainer>
        <MyButton 
          title={slideIndex === slides.length -1 ? 'Início' : 'Próximo'}
          bgColor={theme.colors.background.secondary}
          onPress={handleClick}
        />

        <MyButton 
          title='Login com Apple'
          bgColor='transparent'
          icon={<AntDesign name="apple1" size={20} color={theme.colors.text.high} />}
        />
      </S.ButtonContainer>
        
    </S.Container>
  )
}