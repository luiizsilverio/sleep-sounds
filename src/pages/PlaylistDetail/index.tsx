import { Alert } from 'react-native';
import { useEffect, useMemo, useRef } from 'react';
// import { ScrollView } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';

import coverImg from '../../assets/cover-guitar-camp.png';
import MoodIcon from '../../assets/icon-mood.svg';
import SleepIcon from '../../assets/icon-sleeping.svg';

import BodyText from '../../components/Text/BodyText';
import FootNoteText from '../../components/Text/FootNoteText';
import HeadlineText from '../../components/Text/HeadlineText';
import Title2Text from '../../components/Text/Title2';
import LargeTitle from '../../components/Text/LargeTitle';
import SubTitle from '../../components/Text/SubTitle';
import Divider from '../../components/Divider';
import MyButton from '../../components/MyButton';
import Track from '../../components/Track';
import Playlist from '../../components/Playlist';

import { PlaylistProps, playlistData } from '../../utils/playlist';
import * as S from './styles';


interface Props {
  data: PlaylistProps;
}

export default function PlaylistDetail() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params; 

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['27%', '60%', '94%'], []);

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

      <S.Content>
        <S.CoverImage source={data?.cover} resizeMode='cover'>
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
      </S.Content>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ 
          backgroundColor: theme.colors.background.primary, 
          borderTopEndRadius: 24,
          borderTopStartRadius: 24,
        }}
        handleIndicatorStyle={{ 
          backgroundColor: theme.colors.background.tertiary, 
          width: 50
        }}
        enablePanDownToClose={false}
        // onChange={handleSheetChanges}
      >
        <S.PackWrapper>
          <S.PackHeader>
            <S.PackContent>
              <LargeTitle color={theme.colors.text.high}>{data?.name}</LargeTitle>
              <SubTitle color={theme.colors.text.medium}>{data?.songs.length} songs  {'\u2022'}  instrumental</SubTitle>
            </S.PackContent>
          </S.PackHeader>

          <Divider />
          
          <S.ButtonsWrapper>
            <S.ButtonContainer>
              <MyButton
                title="Iniciar"
                icon={<Entypo name="controller-play" size={24} color={theme.colors.text.high} />}
                bgColor={theme.colors.system.primary}
                height={38}
              />
            </S.ButtonContainer>
            <S.ButtonContainer>
              <MyButton
                title="Favorito"
                icon={<FontAwesome name="star" size={24} color={theme.colors.text.high} />}
                bgColor={theme.colors.background.secondary}
                height={38}
              />
            </S.ButtonContainer>
          </S.ButtonsWrapper>

          <Divider />

          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 18 }}
          >
            <S.AboutWrapper>
              <HeadlineText color={theme.colors.text.high}>
                Sobre esta playlist
              </HeadlineText>
              <BodyText color={theme.colors.text.medium}>{data?.about}</BodyText>
            </S.AboutWrapper>

            <S.ListOfSongs>
              <S.ListOfSongsTitle>
                <FootNoteText color={theme.colors.text.medium}>LIST OF SONGS</FootNoteText>
              </S.ListOfSongsTitle>
              {
                data?.songs.map((song, index) => (
                  <Track 
                    key={song.id} 
                    song={song}
                    showSeparator={index < (data?.songs.length -1)} 
                  />
                ))
              }
            
            </S.ListOfSongs>

            <S.FeaturedOn>
              <HeadlineText color={theme.colors.text.high}>
                Em Destaque
              </HeadlineText>
              <S.PlaylistWrapper>
                <Playlist data={playlistData[0]} />
                <Playlist data={playlistData[1]} />
              </S.PlaylistWrapper>
            </S.FeaturedOn>
          </ScrollView>
        </S.PackWrapper>
      </BottomSheet>

    </S.Container>
  )
}