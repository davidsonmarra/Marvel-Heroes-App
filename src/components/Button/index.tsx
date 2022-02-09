import React, { useState } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler'
import {
  Container,
  Content,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function Button({ title }: Props) {
  return (
    <Container>
      <Content onPress={() => console.log("Teste")}>
        <Title numberOfLines={1}>{title}</Title>
      </Content>
    </Container>
  );
}