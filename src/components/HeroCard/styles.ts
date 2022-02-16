import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${RFValue(width / 3.5)}px;
  height: ${RFValue(180)}px;
  margin-bottom: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
`;

export const CardButton = styled(RectButton).attrs(({ theme }) => ({
  activeOpacity: 0.5,
  rippleColor: theme.colors.header
}))`
  flex: 1;
  border-radius: ${RFValue(8)}px;
`;

export const ImageWrapper = styled.ImageBackground.attrs({
  imageStyle: { 
    borderTopRightRadius: RFValue(8),
    borderTopLeftRadius: RFValue(8)
  }
})`
  width: 100%;
  height: ${RFValue(width / 3.5)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
`;

export const Index = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italic_bold};
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title_light};
`;

export const Divider = styled.View`
  width: 100%;
  height: ${RFValue(3.5)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Info = styled.View`
  flex: 1;
  padding: ${RFValue(8)}px ${RFValue(9)}px;
  background-color: ${({ theme }) => theme.colors.card};
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: ${RFValue(8)}px;
  border-bottom-left-radius: ${RFValue(8)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title_light};
`;