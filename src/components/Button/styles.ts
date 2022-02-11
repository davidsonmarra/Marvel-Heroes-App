import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  padding: ${RFValue(12)}px 0;
  border-radius: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title_light};
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: RFValue(28),
  color: theme.colors.title_light
}))``;