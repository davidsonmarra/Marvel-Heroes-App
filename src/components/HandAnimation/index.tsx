import React from 'react';
import LottieView from 'lottie-react-native';
import hand from '../../assets/handAnimation.json';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

export function HandAnimation() {
  const animation = useSharedValue(0);

  const animationtyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animation.value,
        [0, 100],
        [1, 0]
      )
    }
  });

  useFocusEffect(() => {
    animation.value = 0;
    setTimeout(() => {
      animation.value = withTiming(
        100, 
        { 
          duration: 5000,
          easing: Easing.bezier(.42,0,.58,1)
        }
      );
    }, 1000);
  })

  return (
    <Animated.View style={animationtyle}>
      <LottieView
        source={hand}
        style={{
          height: RFValue(100)
        }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Animated.View>
  );
}