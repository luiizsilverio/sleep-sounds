import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Text = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: ${({ theme }) => theme.fonts.body.size};
  color: ${(props) => props.color};
  text-align: center;
`;