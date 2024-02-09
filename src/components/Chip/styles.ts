import styled from "styled-components/native";

interface Props {
  active: boolean;

}
export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  padding: 0 ${({theme}) => theme.spaces.space3};
  height: 38px;
  border-radius: 20px;
  background-color: ${(props) => props.active 
    ? props.theme.colors.system.primary 
    : props.theme.colors.background.secondary
  };
  margin-left: ${({theme}) => theme.spaces.space2};
  gap: ${({theme}) => theme.spaces.space2};

`;

export const TextWrapper = styled.View`

`;
