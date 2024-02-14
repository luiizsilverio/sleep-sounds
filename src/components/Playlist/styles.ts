import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
`;

export const CoverImage = styled.ImageBackground`
  height: 164px;
  width: 164px;
  border-radius: 16px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.separator};
  background-position: center;
  overflow: hidden;
  padding: ${({theme}) => theme.spaces.space2};
`;

export const PlayButton = styled.View`
  width: 42px;
  height: 42px;
  padding: ${({theme}) => theme.spaces.space2};
  background-color: ${({theme}) => theme.colors.background.primary};
  border-radius: 42px;
`;