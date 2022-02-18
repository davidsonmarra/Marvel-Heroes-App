import React, { useCallback, useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import hand from '../../assets/handAnimation.json';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
import { useWindowDimensions, View } from 'react-native';

interface Props {
  isClose: boolean;
}

export function HandAnimation({ isClose }: Props) {
  const ref = useRef<LottieView>(null);
  const animation = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animation.value,
        [0, 100],
        [1, 0]
      )
    }
  });

  useFocusEffect(() => {
    ref.current?.play();
  });
  
  useEffect(() => {    
    if(isClose) {
      animation.value = withTiming(
        100, 
        { 
          duration: 2500,
          easing: Easing.bezier(.42,0,.58,1)
        }
      );
    }
  }, [isClose]);

  return (
    <Animated.View style={[animationStyle, { zIndex: 3, position: 'absolute', height: RFValue(80), transform: [{translateY: RFValue(100)}], justifyContent: 'center' }]}>
      <LottieView
        ref={ref}
        source={hand}
        style={{
          width: RFValue(200)
        }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Animated.View>
  );
}