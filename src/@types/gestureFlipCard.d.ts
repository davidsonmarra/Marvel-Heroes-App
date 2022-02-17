declare module 'react-native-gesture-flip-card' {
  import React from 'react';
  import { StyleProp, ViewStyle } from 'react-native';

  interface GestureFlipCardProps {
    style?: StyleProp<ViewStyle>;
    width: number;
    height: number;
    gestureEnabled?: boolean;
    ref?: any;
  }


  const content: React.FC<any>;
  export default content;
}