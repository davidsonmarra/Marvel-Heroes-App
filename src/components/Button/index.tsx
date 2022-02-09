import React, { useState } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler'
import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function Button({ title }: Props) {
  return (
    <Container onPress={() => console.log("Teste")}>
      <Title>{title}</Title>
    </Container>
  );
}