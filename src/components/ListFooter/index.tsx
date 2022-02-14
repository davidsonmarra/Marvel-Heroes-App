import React, { useState } from 'react';
import {
  Container,
  Loading
} from './styles';

interface Props {
  isLoading: boolean;
}

export function ListFooter({ isLoading }: Props) {
  return (
    <Container>
      {
        isLoading && <Loading />
      }
    </Container>
  );
}