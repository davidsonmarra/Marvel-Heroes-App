import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { HeaderHeroDetails as Header } from '../../components/HeaderHeroDetails';
import { RootStackParamList } from '../../routes';
import {
  Container,
  Title
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetails'>;

export function HeroDetails({ route }: Props) {
  const { hero } = route.params;

  return (
    <Container>
      <Header />
      <Title>{ hero.name }</Title>
    </Container>
  );
}