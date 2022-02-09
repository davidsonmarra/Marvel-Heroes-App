import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming,
  runOnJS
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import Logo from '../../assets/logo-marvel.svg';
import LogoStudios from '../../assets/logo-studios.svg';
import { Button } from '../../components/Button';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Footer
} from './styles';

const { width } = Dimensions.get('window');

export function Home() {
  const [buttonTitle, setButtonTitle] = useState('');

  const background = '../../assets/home-background2.jpg';

  const theme = useTheme();

  const animation = useSharedValue(0);
  const buttonAnimation = useSharedValue('0%');

  const animatedStyleMarvel = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(animation.value,
            [0, 100],
            [0, -(width / 2.5) / 1.9],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  const animatedStyleStudios = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(animation.value,
            [0, 100],
            [0, (width / 2.5) / 1.9],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  const animatedStyleText = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animation.value,
        [25, 100],
        [0, 1]
      )
    }
  });

  const animatedStyleButton = useAnimatedStyle(() => {
    return {
      width: withTiming(
        buttonAnimation.value, 
        { duration: 2500, },
        () => {
          'worklet'
          runOnJS(setButtonTitle)(("Let's Go"));
        }
      )
    }
  });

  useEffect(() => {
    animation.value = withTiming(
      100, 
      { duration: 2500 }
    );
    buttonAnimation.value = '100%'
  }, []);

  return (
    <Container source={require(background)}>
      <Header>
        <Animated.View style={[animatedStyleStudios, styles.wrapper]}>
          <LogoStudios fill={theme.colors.title_light} />
        </Animated.View>
        <Animated.View style={[animatedStyleMarvel, styles.wrapper]}>
          <Logo />
        </Animated.View>
      </Header>
      <Footer>
        <Animated.View style={[animatedStyleText, styles.title]}>
          <Title>
            With great power comes great responsibility
          </Title>
          <SubTitle>
            Learn more about our heroes
          </SubTitle>
        </Animated.View>
        <Animated.View style={[animatedStyleButton, styles.button]}>
          <Button title={buttonTitle}/>
        </Animated.View>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    alignItems: 'center',
    marginBottom: RFValue(100)
  },
  wrapper: {
    width: RFValue(width / 2.5),
    height: RFValue(width / 2.5),
    position: 'absolute'
  },
  button: {
    alignSelf: 'center'
  }
})