import React, { useCallback, useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import AvengersLogo from '../../assets/avengers.svg';
import { Ionicons } from '@expo/vector-icons'; 
import { Input } from '../Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  search: string;
  scrollY: SharedValue<number>;
  handleSearchHero: SubmitHandler<IFormInput>;
  isLoading: boolean;
  handleGoBack?: () => void | undefined;
}

export interface IFormInput {
  searchHero: string;
  originalSearch: string;
}

const schema = Yup.object().shape({
  searchHero: Yup
    .string()
    .required('Search cannot be empty')
    .test('search-match', "Search can't be repeat.", function(value) {
      return this.parent.originalSearch !== value;
    }),
  originalSearch: Yup
    .string()
}); 

export function HeaderHeroes({ 
  search,
  scrollY, 
  handleSearchHero,
  isLoading,
  handleGoBack = undefined,
}: Props) {
  console.log('SEARCH: ', search)
  const route = useRoute<RouteProp<RootStackParamList, 'Heroes'>>();
  const theme = useTheme();
  const {
    control,
    reset,
    formState: { isValid },
    handleSubmit,
    setValue,
    setError,
    getValues 
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      originalSearch: search
    }
  });

  useFocusEffect(useCallback(() => {
    if(route.name === 'Heroes') 
      reset();
  }, [route]));

  useEffect(() => {
    setValue('originalSearch', search);
    const currentValue = getValues('searchHero');
    currentValue === search && setError('searchHero', {
      type: "manual",
      message: "ASD"
    })
  }, [search])

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
        <SearchBox enabled={isValid}>
          <Button enabled={isValid} onPress={handleSubmit(handleSearchHero)}>
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