import { useTheme } from 'styled-components/native';

import LargeTitle from '../../components/Text/LargeTitle';
import { Chip } from '../../components/Chip';
import AllSvg from '../../assets/chip-icon-all.svg';
import AmbientSvg from '../../assets/chip-icon-ambient.svg';
import KidsSvg from '../../assets/chip-icon-kids.svg';
import Playlist from '../../components/Playlist';
import * as S from './styles';

export function Discover() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <LargeTitle color={theme.colors.text.high} textAlign="left">Sleep</LargeTitle>
      </S.Header>
      
      <S.ChipsContainer>
        <S.ChipsScrollView
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 18 }}
        >
          <Chip text='Todos' 
            active
            icon={<AllSvg viewBox='0 0 16 16' width={18} height={18} color={theme.colors.text.high} />} 
          />
          <Chip text='Ambiente' 
            icon={<AmbientSvg viewBox='0 0 16 16' width={18} height={18} color={theme.colors.text.high} />} 
          />
          <Chip text='Crianças' 
            icon={<KidsSvg viewBox='0 0 16 16' width={18} height={18} color={theme.colors.text.high} />} 
          />        
        </S.ChipsScrollView>
      </S.ChipsContainer>

      <S.PlaylistContainer>
        <Playlist />
      </S.PlaylistContainer>
      
    </S.Container>    
  )
}