import { useTheme } from "styled-components/native";
import { Feather, Ionicons } from '@expo/vector-icons';

import BodyText from '../Text/BodyText';
import FootNoteText from '../Text/FootNoteText';
import Divider from "../Divider";
import * as S from './styles';
import { SongProps } from "../../utils/playlist";

interface Props {
  song: SongProps;
  showSeparator?: boolean;
}

function renderIcon(status, color: string) {
  if (status === "locked") {
    return <Feather name="lock" size={18} color={color} />
  } 
  else
  if (status === "playing") {
    return <Ionicons name="pause" size={20} color={color} />
  }
  else
  if (status === "default") {
    return <Feather name="play" size={20} color={color} />
  } 
  return null;
}

export default function Track({ song, showSeparator = true }: Props) {
  const theme = useTheme();

  return (
    <>
      <S.Container showSeparator={showSeparator}>
        <FootNoteText color={theme.colors.text.medium}>
          {song.id.padStart(2, '0')}
        </FootNoteText>
        
        <S.IconWrapper>
          {
            renderIcon(song.status, theme.colors.text.high)
          }
        </S.IconWrapper>

        <BodyText color={theme.colors.text.high}>{song.name}</BodyText>
      </S.Container>

      {showSeparator && (
        <Divider color={theme.colors.background.tertiary} />
      )}
    </>
  )
}