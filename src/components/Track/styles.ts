import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  gap: ${({ theme }) => theme.spaces.space3};
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 32px;
`;
