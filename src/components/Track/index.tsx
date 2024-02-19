import { useTheme } from "styled-components/native";
import { Feather, FontAwesome } from '@expo/vector-icons';

import BodyText from '../Text/BodyText';
import FootNoteText from '../Text/FootNoteText';
import * as S from './styles';

interface Props {
  showSeparator?: boolean;
}

export default function Track({ showSeparator = true }: Props) {
  const theme = useTheme();

  return (
    <>
      <S.Container showSeparator={showSeparator}>
        <FootNoteText color={theme.colors.text.medium}>01</FootNoteText>
        
        <S.IconWrapper>
            <Feather name="lock" size={18} color={theme.colors.text.high} />
        </S.IconWrapper>

        <BodyText color={theme.colors.text.high}>The Guitars</BodyText>
      </S.Container>

      {showSeparator && <S.Separator />}
    </>
  )
}