import styled from "styled-components/native";

interface Props {
  color: string;
  textAlign?: string;
}

export const BodyText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: ${({ theme }) => theme.fonts.body.size};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const HeadlineText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.headline.family};
  font-size: ${({ theme }) => theme.fonts.headline.size};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const LargeText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.largeTitle.family};
  font-size: ${({ theme }) => theme.fonts.largeTitle.size};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const FootText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.footnote.family};
  font-size: ${({ theme }) => theme.fonts.footnote.size};
  color: ${(props) => props.color};
  text-align: center;
  text-align: ${(props) => props.textAlign || 'left'};
`;