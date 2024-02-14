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
  padding-bottom: ${({theme}) => theme.spaces.space2};
`;

export const ChipsContainer = styled.View`
  width: 100%;
  padding: 0 ${({theme}) => theme.spaces.space2};
  margin-bottom: ${({theme}) => theme.spaces.space2};
`;

export const ChipsScrollView = styled.ScrollView`
`;

export const PlaylistContainer = styled.View`
`;