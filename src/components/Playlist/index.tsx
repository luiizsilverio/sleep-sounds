import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import image from "../../assets/playlist-guitar-camp.png";
import FootNoteText from '../Text/FootNoteText';
import BodyText from '../Text/BodyText';
import * as S from './styles';

export default function Playlist() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.CoverImage
        source={image}
        resizeMode='cover'
      >
        <S.PlayButton>
          <Entypo 
            name="controller-play" 
            size={28}
            color={theme.colors.text.high} 
          />
        </S.PlayButton>   
      </S.CoverImage>

      <BodyText color={theme.colors.text.high}>
        Guitar Camp
      </BodyText> 
      <FootNoteText color={theme.colors.text.high}>
        Guitar Camp
      </FootNoteText>
    </S.Container>
  )
}