import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { HeroDTO } from '../../DTOs/HeroDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const List = styled(
  FlatList as new (props: FlatListProps<HeroDTO>
) => FlatList<HeroDTO>).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(12),
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})``;

export const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`; 