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
  SearchButton,
  Loading
} from './styles';
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { BackButton } from '../BackButton';
import { Keyboard } from 'react-native';

type CallbackType = (value: string) => void;

interface Props {
  scrollY: SharedValue<number>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
  handleSearchHero: CallbackType;
  isLoading: boolean;
  handleGoBack?: () => void | undefined;
  disable?: boolean;
}

export function HeaderHeroes({ 
  scrollY, 
  search, 
  setSearch,
  handleSearchHero,
  isLoading,
  handleGoBack = undefined,
  disable = true
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
    <Container hasBackButton={!!handleGoBack}>
      {
        !handleGoBack && (
          <Animated.View style={[logoStyleAnimation]}>
            <AvengersLogo 
              fill={theme.colors.title_light}
              height="100%"
            />
          </Animated.View>
        )
      }
      <WrapperInput>
        {
          handleGoBack && (
            <BackButton
              onPress={handleGoBack}
              style={{
                position: 'absolute',
                left: -RFValue(35)
              }} 
            />
          )
        }
        <Input
          value={search}
          placeholder='Hero'
          onChangeText={setSearch}
          autoCorrect={false}
          autoCapitalize='sentences'
        />
        <SearchBox enabled={!!search && disable}>
          <SearchButton 
            onPress={() => {
              Keyboard.dismiss();
              handleSearchHero(search)
            }} 
            enabled={!!search && disable}
          >
            {
              isLoading ? (
                <Loading />
              ) : (
                <Ionicons 
                  name="search"
                  size={RFValue(24)}
                  color={theme.colors.title_light}
                />
              )
            }
          </SearchButton>
        </SearchBox>
      </WrapperInput>
    </Container>
  );
}