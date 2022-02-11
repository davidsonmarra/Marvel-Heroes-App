import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { RootStackParamList } from '../../routes';
import { IRootState } from '../../store';
import {
  Container,
  Title
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Heroes'>;

export function Heroes({}: Props) {
  const dispatch = useDispatch();
  const {
    heroes,
    loading_fetch_heroes
  } = useSelector(({ heroesReducer }: IRootState) => heroesReducer);
  console.log(heroes)
  
  return (
    <Container>
      <Header />
    </Container>
  );
}