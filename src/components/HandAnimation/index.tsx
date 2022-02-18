import React, { useCallback, useRef } from 'react';
import LottieView from 'lottie-react-native';
import hand from '../../assets/handAnimation.json';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
import { HeroDTO } from '../../DTOs/HeroDTO';

export function HandAnimation() {
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
    animation.value = 0;
    animation.value = withTiming(
      100, 
      { 
        duration: 5000,
        easing: Easing.bezier(.42,0,.58,1)
      }
    );
  });

  return (
    <Animated.View style={[animationStyle, { position: 'absolute', bottom: 0, height: RFValue(80), justifyContent: 'center' }]}>
      <LottieView
        ref={ref}
        source={hand}
        style={{
          height: RFValue(200)
        }}
        resizeMode="contain"
        loop
      />
    </Animated.View>
  );
}