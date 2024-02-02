import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const largura = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background.primary};
  justify-content: center;
  align-items: center;
`;

// export const TextWrapper = styled.View``;

export const SlideWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: ${largura}px;
  gap: ${({ theme }) => theme.spaces.space3};
`;
