import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled.View<Props>`
  height: 1px;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  /* border-bottom-color: ${({ theme }) => theme.colors.separator}; */
  border-bottom-color: ${props => props.color};
`;

