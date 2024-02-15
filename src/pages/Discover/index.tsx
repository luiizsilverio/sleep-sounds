import { useTheme } from 'styled-components/native';

import LargeTitle from '../../components/Text/LargeTitle';
import { Chip } from '../../components/Chip';
import AllSvg from '../../assets/chip-icon-all.svg';
import AmbientSvg from '../../assets/chip-icon-ambient.svg';
import KidsSvg from '../../assets/chip-icon-kids.svg';
import Playlist from '../../components/Playlist';
import * as S from './styles';
import { FlatList } from 'react-native';
import { playlistData } from '../../utils/playlist';

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
            icon={<AllSvg viewBox='0 0 16 16' width={16} height={16} color={theme.colors.text.high} />} 
          />
          <Chip text='Ambiente' 
            icon={<AmbientSvg viewBox='0 0 16 16' width={16} height={16} color={theme.colors.text.high} />} 
          />
          <Chip text='Crianças' 
            icon={<KidsSvg viewBox='0 0 16 16' width={16} height={16} color={theme.colors.text.high} />} 
          />        
        </S.ChipsScrollView>
      </S.ChipsContainer>

      <S.PlaylistContainer>
        <FlatList
          data={playlistData}
          keyExtractor={({id}) => id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: 'space-between'}}
          contentContainerStyle={{ 
            paddingHorizontal: 16, 
            paddingBottom: 64 
          }}
          // pagingEnabled
          renderItem={({ item, index, separators }) => (
            <Playlist data={item} />
          )}
        />
      </S.PlaylistContainer>
      
    </S.Container>    
  )
}