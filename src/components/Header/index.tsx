import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import AvengersLogo from '../../assets/avengers.svg';
import { Ionicons } from '@expo/vector-icons'; 
import { Input } from '../Input';
import {
  Container,
  SearchBox,
  WrapperInput,
  SearchButton
} from './styles';

export function Header() {
  const theme = useTheme();
  return (
    <Container>
      <AvengersLogo 
        fill={theme.colors.title_light}
        height={RFValue(50)}
      />
      <WrapperInput>
        <Input />
        <SearchBox>
          <SearchButton>
            <Ionicons 
              name="search"
              size={RFValue(24)}
              color={theme.colors.title_light}
            />
          </SearchButton>
        </SearchBox>
      </WrapperInput>
    </Container>
  );
}