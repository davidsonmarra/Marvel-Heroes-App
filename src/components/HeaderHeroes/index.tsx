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
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface Props {
  scrollY: SharedValue<number>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function HeaderHeroes({ 
  scrollY, 
  search, 
  setSearch 
}: Props) {
  const theme = useTheme();

  const logoStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 100],
        [50, 0]
      ),
      opacity: interpolate(
        scrollY.value,
        [0, 100],
        [1, 0]
      )
    }
  });

  return (
    <Container>
      <Animated.View style={[logoStyleAnimation]}>
        <AvengersLogo 
          fill={theme.colors.title_light}
          height="100%"
        />
      </Animated.View>
      <WrapperInput>
        <Input
          value={search}
          placeholder='Hero'
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