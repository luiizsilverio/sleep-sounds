import { useTheme } from "styled-components/native";
import { Feather, FontAwesome } from '@expo/vector-icons';

import BodyText from '../Text/BodyText';
import FootNoteText from '../Text/FootNoteText';
import Divider from "../Divider";
import * as S from './styles';
import { SongProps } from "../../utils/playlist";

interface Props {
  song: SongProps;
  showSeparator?: boolean;
}

export default function Track({ song, showSeparator = true }: Props) {
  const theme = useTheme();

  return (
    <>
      <S.Container showSeparator={showSeparator}>
        <FootNoteText color={theme.colors.text.medium}>{song.id}</FootNoteText>
        
        <S.IconWrapper>
            <Feather name="lock" size={18} color={theme.colors.text.high} />
        </S.IconWrapper>

        <BodyText color={theme.colors.text.high}>{song.name}</BodyText>
      </S.Container>

      {showSeparator && (
        <Divider color={theme.colors.background.tertiary} />
      )}
    </>
  )
}