import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Text = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.headline.family};
  font-size: ${({ theme }) => theme.fonts.headline.size};
  color: ${(props) => props.color};
  text-align: center;
`;