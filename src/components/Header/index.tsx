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

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Header({ search, setSearch }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <AvengersLogo 
        fill={theme.colors.title_light}
        height={RFValue(50)}
      />
      <WrapperInput>
        <Input
          value={search}
          onChangeText={setSearch}
          autoCorrect={false}
          autoCapitalize='sentences'
        />
        <SearchBox enabled={!!search}>
          <SearchButton enabled={!!search}>
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