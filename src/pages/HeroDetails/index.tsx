import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useRef } from 'react';
import { GlassHeroCard } from '../../components/GlassHeroCard';
import { HeaderHeroDetails as Header } from '../../components/HeaderHeroDetails';
import { RootStackParamList } from '../../routes';
import CardFlip from 'react-native-card-flip';
import {
  Container,
  Thumbnail,
  Index,
  Title,
  RotateButton,
  RotateIcon,
  RowInformation,
  Info,
  Infos
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetails'>;

export function HeroDetails({ route }: Props) {
  const { hero, index } = route.params;
  const flipRef = useRef<CardFlip>(null);
  const hasImage = hero.thumbnail.path.includes('image_not_available');

  const handleFlipCard = useCallback(() => {
    flipRef.current?.flip();
  }, []);

  return (
    <Container>
      <Header />
      <CardFlip ref={flipRef}>
        <GlassHeroCard>
          <Thumbnail source={{ uri: `${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}` }}>
            {
              hasImage && (
                <Index>{`# ${index}`}</Index>
              )
            }
          </Thumbnail>
        </GlassHeroCard>
        <GlassHeroCard>
          <Infos>
            <RowInformation>
              <Title>ID: </Title>
              <Info>{hero.id}</Info>
            </RowInformation>
            <RowInformation>
              <Title>Name: </Title>
              <Info>{hero.name}</Info>
            </RowInformation>
            {
              !!hero.description && (
                <RowInformation>
                  <Title>Description: </Title>
                  <Info>{hero.description}</Info>
                </RowInformation>
              )
            }
          </Infos>
        </GlassHeroCard>
      </CardFlip>
      <RotateButton onPress={handleFlipCard}>
        <RotateIcon />
      </RotateButton>
    </Container>
  );
}