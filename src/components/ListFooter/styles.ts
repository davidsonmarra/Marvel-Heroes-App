import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: RFValue(32),
  color: theme.colors.primary
}))``;