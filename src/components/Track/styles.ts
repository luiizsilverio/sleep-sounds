import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  gap: ${({ theme }) => theme.spaces.space3};
  /* border-bottom-color: ${({ theme }) => theme.colors.background.tertiary};
  border-bottom-width: 1px;
  border-bottom-style: solid; */
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.background.tertiary};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 32px;
`;
