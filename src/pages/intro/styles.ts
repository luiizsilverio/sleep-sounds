import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.headline.family};
  font-size: ${({ theme }) => theme.fonts.headline.size};
  color: ${({ theme }) => theme.colors.text.high};
`;