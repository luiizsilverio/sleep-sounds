import { useNavigation } from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import coverImg from '../../assets/cover-guitar-camp.png';
import MoodIcon from '../../assets/icon-mood.svg';
import SleepIcon from '../../assets/icon-sleeping.svg';
import BodyText from '../../components/Text/BodyText';
import * as S from './styles';
import FootNoteText from '../../components/Text/FootNoteText';
import { Title2Text } from '../../components/Text/styles';
import LargeTitle from '../../components/Text/LargeTitle';
import SubTitle from '../../components/Text/SubTitle';


export default function PlaylistDetail() {
  const theme = useTheme();
  const navigation = useNavigation();

  
  return (
    <S.Container>
      <S.Header onPress={navigation.goBack}>
        <Feather
          name="chevron-left"
          size={24}
          color={theme.colors.system.primary}
        />
        <BodyText color={theme.colors.system.primary}>Sleep</BodyText>
      </S.Header>

      <S.ScrollView>
        <S.CoverImage source={coverImg} resizeMode='cover'>
          <S.IconContainer>
            <S.IconBox>
              <MoodIcon 
                width={24}
                height={24}
                color={theme.colors.text.high}
              />
              <FootNoteText color={theme.colors.text.high} textAlign='center'>Mood</FootNoteText>
              <Title2Text color={theme.colors.text.high} textAlign='center'>Lighthearted</Title2Text>
            </S.IconBox>
          
            <S.IconBox>
              <SleepIcon 
                width={24}
                height={24}
                color={theme.colors.text.high}
              />
              <FootNoteText color={theme.colors.text.high} textAlign='center'>Dreams</FootNoteText>
              <Title2Text color={theme.colors.text.high} textAlign='center'>Daydreams</Title2Text>
            </S.IconBox>
          </S.IconContainer>
        </S.CoverImage>

        <S.PackWrapper>
          <S.PackHeader>
            <S.TopLine />
            <S.PackContent>
              <LargeTitle color={theme.colors.text.high}>Guitar Camp</LargeTitle>
              <SubTitle color={theme.colors.text.medium}>7 songs  {'\u2022'}  instrumental</SubTitle>
            </S.PackContent>
          </S.PackHeader>
        </S.PackWrapper>
      </S.ScrollView>
    </S.Container>
  )
}