import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.colors.background.primary};
  gap: ${({ theme }) => theme.spaces.space3};
`;

export const Footer = styled.View`
  position: absolute;
  align-items: center;
  bottom: ${({ theme }) => theme.spaces.space5};
  left: 0;
  right: 0;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.tab.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.medium};
`;
