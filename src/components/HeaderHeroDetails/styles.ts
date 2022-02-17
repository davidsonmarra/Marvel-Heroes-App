import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: ${RFValue(30 + getStatusBarHeight())}px 0 ${RFValue(16)}px;
`;
