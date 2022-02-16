import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { GlassHeroCard } from '../../components/GlassHeroCard';
import { HeaderHeroDetails as Header } from '../../components/HeaderHeroDetails';
import { RootStackParamList } from '../../routes';
import {
  Container,
  Thumbnail,
  Index,
  RotateButton,
  RotateIcon
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetails'>;

export function HeroDetails({ route }: Props) {
  const { hero, index } = route.params;
  const hasImage = hero.thumbnail.path.includes('image_not_available');

  return (
    <Container>
      <Header />
      <GlassHeroCard>
        <Thumbnail source={{ uri: `${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}` }}>
          {
            hasImage && (
              <Index>{`# ${index}`}</Index>
            )
          }
        </Thumbnail>
      </GlassHeroCard>
      <RotateButton>
        <RotateIcon />
      </RotateButton>
    </Container>
  );
}