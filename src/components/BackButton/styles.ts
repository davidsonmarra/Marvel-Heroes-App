import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Button = styled(BorderlessButton)`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: 'chevron-back-outline',
  size: RFValue(32),
  color: theme.colors.title_light
}))``;
