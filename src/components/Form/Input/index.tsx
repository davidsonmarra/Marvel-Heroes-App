import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native'
import {
  Container
} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function Input({
  control,
  name,
  ...rest 
}: Props) {
  return (
    <Controller
      control={control}
      render={({ field: {onChange, value }}) => (
        <Container 
          onChangeText={onChange}
          value={value}  
          {...rest}
        />
      )}
      name={name}
    />
  )
}