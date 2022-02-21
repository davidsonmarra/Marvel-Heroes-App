import styled from 'styled-components/native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 3;
`;

export const styles = StyleSheet.create({
  blackView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#000000AA',
    zIndex: 2
  }
});

export const Content = styled.View`
  z-index: 1;
  justify-content: center;
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

export const Infos = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'center',
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(12)
  }
})``;

export const RowInformation = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
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
