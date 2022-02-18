import React, { useCallback } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import AvengersLogo from '../../assets/avengers.svg';
import { Ionicons } from '@expo/vector-icons'; 
import { Input } from '../Form/Input';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  SearchBox,
  WrapperInput,
  Loading
} from './styles';
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { BackButton } from '../BackButton';
import { Button } from '../Form/Button';
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../routes';

interface Props {
  scrollY: SharedValue<number>;
  handleSearchHero: ({ searchHero }: any) => void;
  isLoading: boolean;
  handleGoBack?: () => void | undefined;
}

const schema = Yup.object().shape({
  searchHero: Yup
  .string()
}); 

export function HeaderHeroes({ 
  scrollY, 
  handleSearchHero,
  isLoading,
  handleGoBack = undefined,
}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'Heroes'>>();
  const theme = useTheme();
  const {
    control,
    reset,
    handleSubmit
  } = useForm({resolver: yupResolver(schema)});

  useFocusEffect(useCallback(() => {
    if(route.name === 'Heroes') 
      reset();
  }, [route]));

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
          name="searchHero"
          placeholder='Hero'
          autoCorrect={false}
          autoCapitalize='sentences'
          control={control}
        />
        <SearchBox>
          <Button onPress={handleSubmit(handleSearchHero)}>
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
          </Button>
        </SearchBox>
      </WrapperInput>
    </Container>
  );
}