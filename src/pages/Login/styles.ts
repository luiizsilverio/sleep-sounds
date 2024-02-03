import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const largura = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background.primary};
  justify-content: center;
  align-items: center;
`;

export const SlideWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: ${largura}px;
  gap: ${({ theme }) => theme.spaces.space3};

`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const DotsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({theme}) => theme.colors.background.secondary};
  border-radius: 4px;
  margin: 0 ${({theme}) => theme.spaces.space1};
`;