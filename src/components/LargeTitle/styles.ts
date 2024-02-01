import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Text = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.largeTitle.family};
  font-size: ${({ theme }) => theme.fonts.largeTitle.size};
  color: ${(props) => props.color};
`;