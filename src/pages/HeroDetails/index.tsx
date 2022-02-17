import React, { useCallback, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GlassHeroCard } from '../../components/GlassHeroCard';
import { HeaderHeroDetails as Header } from '../../components/HeaderHeroDetails';
import { RootStackParamList } from '../../routes';
import FlipCard from 'react-native-card-flip';
import { RFValue } from 'react-native-responsive-fontsize';
import GestureFlipView from 'react-native-gesture-flip-card';
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
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { HandAnimation } from '../../components/HandAnimation';

type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetails'>;


export function HeroDetails({ navigation, route }: Props) {
  const { hero, index } = route.params;
  const viewRef = useRef(null);
  const hasImage = hero.thumbnail.path.includes('image_not_available');

  const { height } = useWindowDimensions();

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', () => {
        navigation.goBack();
        return true;
      });
    }, [route])
  );

  return (
    <Container>
      <Header />
      <GestureFlipView
        ref={(ref: any) => (viewRef.current = ref)}
        gestureEnabled={true}
        width={RFValue(height / 2.5)}
        height={RFValue((height / 2.5) * 1.5)}
      >
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
      </GestureFlipView>
      <HandAnimation />
    </Container>
  );
}