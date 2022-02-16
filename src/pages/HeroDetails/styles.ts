import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`;

export const Thumbnail = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: RFValue(20)
  }
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Index = styled.Text`
  font-family: ${({ theme }) => theme.fonts.italic_bold};
  font-size: ${RFValue(50)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title_light};
`;

export const Infos = styled.View`
  flex: 1;
  padding: ${RFValue(16)}px ${RFValue(12)}px;
  justify-content: center;
`;

export const RowInformation = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title_light};
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.info};
`;

export const RotateButton = styled(BorderlessButton)`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.header};
  border-radius: ${RFValue(25)}px;
  margin-bottom: ${RFValue(50)}px;
`;

export const RotateIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'rotate-left',
  size: RFValue(50),
  color: theme.colors.primary
}))``;