import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${RFValue(250)}px;
  width: ${RFValue((width / 2.5) * 2)}px;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.title_light};
  margin-bottom: ${RFValue(12)}px;
`;

export const SubTitle = styled.Text`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title_light};
`;

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
`;