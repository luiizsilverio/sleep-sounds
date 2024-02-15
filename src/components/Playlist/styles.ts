import { Dimensions } from "react-native";
import styled from "styled-components/native";

const maxImageWidth = (Dimensions.get('window').width / 2) - 24;

export const Container = styled.TouchableOpacity`
  margin-bottom: ${({theme}) => theme.spaces.space3};
`;

export const CoverImage = styled.ImageBackground`
  height: 164px;
  width: ${maxImageWidth}px;
  /* width: 164px; */
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
  /* background-color: ${({theme}) => theme.colors.background.primary}; */
  background-color: rgba(14, 19, 27, .6);
  border-radius: 42px;
`;