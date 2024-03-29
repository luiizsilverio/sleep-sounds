import styled from "styled-components/native";

interface Props {
  bgColor: string;
  height: number;
}

export const TouchableOpacity = styled.TouchableOpacity<Props>`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.height}px;
  width: 100%;
  border-radius: 50px;  
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  gap: ${({theme}) => theme.spaces.space2};
`;
