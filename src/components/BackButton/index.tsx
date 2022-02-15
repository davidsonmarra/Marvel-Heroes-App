import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import {
  Button,
  BackIcon
} from './styles';

export function BackButton({ ...rest }: BorderlessButtonProps) {
  return (
    <Button {...rest}>
      <BackIcon />
    </Button>
  );
}