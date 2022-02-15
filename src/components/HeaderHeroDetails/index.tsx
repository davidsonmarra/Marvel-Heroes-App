import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { RootStackParamList } from '../../routes';
import { BackButton } from '../BackButton';
import {
  Container
} from './styles';

export function HeaderHeroDetails() {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <Container>
      <BackButton onPress={handleGoBack}/>
    </Container>
  );
}