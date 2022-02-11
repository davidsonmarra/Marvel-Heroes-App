import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler'
import {
  Container,
  Content,
  Title,
  Loading
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  loading: boolean;
}

export function Button({ title, loading, ...rest }: Props) {
  return (
    <Container>
      <Content {...rest}>
        <Title numberOfLines={1}>
          {loading ? <Loading /> : title}
        </Title>
      </Content>
    </Container>
  );
}