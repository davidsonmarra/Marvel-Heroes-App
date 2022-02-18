import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 5,
    marginTop: RFValue(30 + getStatusBarHeight())
  }
});


export const Content = styled.View`
  width: 75%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.info};
`;

export const Wrapper = styled.View`
  width: 75%;
  align-items: flex-start;
  margin-top: ${RFValue(8)}px;
`;

export const Button = styled(RectButton)`
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title_light};
`;