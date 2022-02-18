import React, { useEffect, useState } from 'react';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
  styles,
  Content,
  Title,
  Description,
  Button,
  ButtonTitle,
  Wrapper
} from './styles';

interface Props {
  onPress: () => void;
  isClose: boolean;
}

export function Tutorial({ onPress, isClose }: Props) {
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
    <>
      <Animated.View style={[animationStyle, styles.container]}>
        <Content>
          <Title>Flip the Card</Title>
          <Description>Drag to the side to flip the card.</Description>
        </Content>
        <Wrapper>
          <Button onPress={onPress}>
            <ButtonTitle>OK</ButtonTitle>
          </Button>
        </Wrapper>
      </Animated.View>
    </>
  );
}