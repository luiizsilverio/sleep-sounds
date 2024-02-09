import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  /* padding: 0 ${({theme}) => theme.spaces.space3}; */
  `;

export const Header = styled.View`
  width: 100%;
  height: 120px;
  justify-content: flex-end;
  padding: ${({theme}) => theme.spaces.space3};
`;

export const ChipsContainer = styled.ScrollView`
  flex: 1;
  padding: ${({theme}) => theme.spaces.space2} 0;
  margin-left: ${({theme}) => theme.spaces.space2};

`;