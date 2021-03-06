import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
  padding: ${RFValue(30 + getStatusBarHeight())}px ${RFValue(8)}px ${RFValue(16)}px;
`;
