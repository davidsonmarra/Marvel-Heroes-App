import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${RFValue(width / 1.1)}px;
  height: ${RFValue(140)}px;
  margin-bottom: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
`;

export const CardButton = styled(RectButton).attrs(({ theme }) => ({
  activeOpacity: 0.5,
  rippleColor: theme.colors.header
}))`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(8)}px;
`;

export const ImageWrapper = styled.ImageBackground.attrs({
  imageStyle: { 
    borderTopLeftRadius: RFValue(8),
    borderBottomLeftRadius: RFValue(8)
  }
})`
  width: ${RFValue(140)}px;
  height: ${RFValue(140)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
`;

export const Index = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italic_bold};
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
`;

export const Divider = styled.View`
  height: 100%;
  width: ${RFValue(3.5)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Info = styled.View`
  width: ${RFValue((width / 1.1) - 3.5 - 140)}px;
  height: 100%;
  padding: ${RFValue(8)}px ${RFValue(9)}px;
  background-color: ${({ theme }) => theme.colors.card};
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: ${RFValue(8)}px;
  border-top-right-radius: ${RFValue(8)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title_light};
`;