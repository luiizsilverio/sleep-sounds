import styled from "styled-components/native";

interface Props {
  bgColor: string;
}

export const TouchableOpacity = styled.TouchableOpacity<Props>`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.bgColor};
  gap: ${({theme}) => theme.spaces.space2};
  height: 50px;
  width: 100%;
  border-radius: 50px;  
`;

export const IconContainer = styled.View`

`;
