import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import notFound from '../../assets/not-found-animation.json';
import { Container } from './styles';

export function NotFoundAnimation() {
  const ref = useRef<LottieView>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.play();
    }, 500);
  }, []);

  return (
    <Container>
      <LottieView
        source={notFound}
        ref={ref}
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
