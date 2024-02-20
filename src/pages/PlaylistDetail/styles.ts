import { Dimensions } from "react-native";
import styled from "styled-components/native";

const altura = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background.primary};
  position: relative;
`;

export const Header = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  height: 44px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`;

// export const ScrollView = styled.ScrollView`
export const Content = styled.View`
  flex: 1;
`;

export const CoverImage = styled.ImageBackground`
  flex: 1;
  height: ${altura * 0.8}px;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spaces.space3};  
`;

export const IconBox = styled.View`
  align-items: center;
`;

export const PackWrapper = styled.View`
  flex: 1;
  position: relative;
  background: ${({ theme }) => theme.colors.background.primary};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 0 ${({ theme }) => theme.spaces.space3};  
  `;

export const PackHeader = styled.View`
  /* padding-top: ${({ theme }) => theme.spaces.space3}; */
`;

export const TopLine = styled.View`
  background: ${({ theme }) => theme.colors.background.tertiary};
  height: 4px;
  width: 50px;
  border-radius: 2px;
  margin: ${({ theme }) => theme.spaces.space3} auto;
`;

export const PackContent = styled.View`
  margin-bottom: 26px;
`;

export const ButtonsWrapper = styled.View`  
  height: 74px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.space3}; 
`;

export const ButtonContainer = styled.View`
  flex-shrink: 1;
`;

export const AboutWrapper = styled.View`
  padding: ${({ theme }) => theme.spaces.space3} 0;
  gap: 4px;
`;

export const ListOfSongsTitle = styled.View`
  margin-bottom: ${({ theme }) => theme.spaces.space2};
`;

export const ListOfSongs = styled.View`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.spaces.space3};  
  padding: ${({ theme }) => theme.spaces.space3};  
  padding-bottom: 0;
`;

export const FeaturedOn = styled.View`
  padding: ${({ theme }) => theme.spaces.space3} 0;
  padding-top: 20px;
`;

export const PlaylistWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;