import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import FootNoteText from '../Text/FootNoteText';
import BodyText from '../Text/BodyText';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

interface SongProps {
  id: string;
  name: string;
  status: string;
}

interface PlaylistProps {
  id: string;
  name: string;
  songs: SongProps[]; 
  category: string;
  image: string;
}

interface Props extends TouchableOpacityProps {
  data: PlaylistProps;
}

export default function Playlist({data, ...rest}: Props) {
  const theme = useTheme();

  return (
    <S.Container {...rest}>
      <S.CoverImage
        source={data.image}
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
        {data.name}
      </BodyText> 
      <FootNoteText color={theme.colors.text.medium}>
        {`${data.songs.length} songs \u2022 ${data.category}`} 
      </FootNoteText>
    </S.Container>
  )
}