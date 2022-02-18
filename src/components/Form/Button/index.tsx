import React, { useState } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  SearchButton,
} from './styles';

interface Props extends RectButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export function Button({ children, ...rest }: Props) {
  return (
    <SearchButton {...rest}>
      { children }
    </SearchButton>
  );
}