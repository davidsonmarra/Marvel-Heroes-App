import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import theme from '../../global/styles/theme';
import {
  styles,
  Content,
  Title,
  Description,
  Button,
  ButtonTitle,
  Wrapper,
  TextSwitch,
  InputSwitch,
  SwitchContainer
} from './styles';

interface Props {
  onPress: () => void;
  isClose: boolean;
}

export function Tutorial({ onPress, isClose }: Props) {
  const [showTutorial, setShowTutorial] = useState(true);
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

  const toggleSwitch = () => {
    setShowTutorial(!showTutorial);
  }

  const handleCloseTutorial = () => {
    const data = {
      showTutorial
    }
    AsyncStorage.setItem('@marvelheroes:show_tutorial_again', JSON.stringify(data));
    onPress();
  }

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
          <Button onPress={handleCloseTutorial}>
            <ButtonTitle>OK</ButtonTitle>
          </Button>
          <SwitchContainer>
            <TextSwitch>Show again?</TextSwitch>
            <InputSwitch 
              trackColor={{ false: theme.colors.info, true: theme.colors.primary_light }}
              thumbColor={showTutorial ? theme.colors.primary : theme.colors.title_light}
              ios_backgroundColor={theme.colors.info}
              onValueChange={toggleSwitch}
              value={showTutorial}
            />
          </SwitchContainer>
        </Wrapper>
      </Animated.View>
    </>
  );
}