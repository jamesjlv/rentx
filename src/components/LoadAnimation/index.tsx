import React from 'react';
import LottieView from 'lottie-react-native';
import CarLoad from '../../assets/carLoading.json';
import { Container } from './styles';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={CarLoad}
        autoPlay
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
