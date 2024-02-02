import * as S from './styles';
import LogoSvg from '../../assets/sleep-sounds-logo.svg';
import CreatedSvg from '../../assets/createdby.svg';
import LargeTitle from "../../components/LargeTitle";

import {useTheme} from 'styled-components/native';
// import useTheme from '../../hooks/useTheme';

export default function Launch() {
  const theme = useTheme();
  const color = theme?.colors.text.high || '#FFF';

  return (
    <S.Container>
      <LogoSvg  />
      <LargeTitle color={color}>Sleep Sounds</LargeTitle>

      <S.Footer>
        <S.Text>Criado por</S.Text>
        <CreatedSvg width={120} height={36} />
      </S.Footer>
    </S.Container>
  )
}