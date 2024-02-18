import styled from "styled-components/native";


export const Container = styled.View`
  align-self: center;
  height: 1px;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.separator};
`;

