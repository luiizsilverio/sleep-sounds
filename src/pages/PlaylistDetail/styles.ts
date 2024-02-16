import { Dimensions } from "react-native";
import styled from "styled-components/native";

const altura = Dimensions.get('window').height * 0.8;

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

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const CoverImage = styled.ImageBackground`
  flex: 1;
  height: ${altura}px;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spaces.space3};  
`;

export const IconBox = styled.View`
  align-items: center;
  /* border: 1px solid white; */
`;

export const PackWrapper = styled.View`
  position: relative;
  background: ${({ theme }) => theme.colors.background.primary};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  height: 400px;
  flex: 1;
  margin-top: -24px;
  `;

export const PackHeader = styled.View`
  padding: 0 ${({ theme }) => theme.spaces.space3};  
`;

export const TopLine = styled.View`
  background: ${({ theme }) => theme.colors.background.tertiary};
  height: 4px;
  width: 50px;
  border-radius: 2px;
  margin: ${({ theme }) => theme.spaces.space3} auto;
`;

export const PackContent = styled.View`
`;