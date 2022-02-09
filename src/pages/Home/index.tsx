import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming
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
  Footer
} from './styles';

const { width } = Dimensions.get('window');

export function Home() {
  const background = '../../assets/home-background2.jpg';
  const theme = useTheme();
  const animation = useSharedValue(0);

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

  useEffect(() => {
    animation.value = withTiming(
      100, 
      { duration: 2500 }
    );
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
        <Animated.View style={[styles.title]}>
          <Title>
            No man can win every battle, but no man should fall without a struggle
          </Title>
        </Animated.View>
        <Button title="Let's Go"/>
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
  }
})