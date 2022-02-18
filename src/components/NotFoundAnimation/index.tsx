import React from 'react';
import LottieView from 'lottie-react-native';
import notFound from '../../assets/not-found-animation.json';
import { Container } from './styles';

export function NotFoundAnimation() {
  return (
    <Container>
      <LottieView
        source={notFound}
        style={{
          width: '100%'
        }}
        resizeMode="contain"
        autoPlay={true}
        loop={false}
      />
    </Container>
  );
}
