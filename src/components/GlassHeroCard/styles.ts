import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, Platform } from 'react-native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Glass = styled(BlurView).attrs({
  tint: "light",
  intensity: 20
})`
  width: ${RFValue(height / 2.5)}px;
  height: ${RFValue((height / 2.5) * 1.5)}px;
  align-self: center; 
  border-radius: ${RFValue(20)}px;
  border-width: ${RFValue(2)}px;
  border-color: ${({ theme }) => theme.colors.header};
  overflow: ${Platform.OS === 'ios' ? 'hidden' : 'visible'};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#00000055', '#00000044'], 
  start: { x: 0, y: 1 },
  end: { x: 1, y: 1 },
  useAngle: true,
  angle: 110
})`
  width: 100%;
  height: 100%;
  border-radius: ${RFValue(20)}px;
`;
