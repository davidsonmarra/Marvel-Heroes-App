import React, { useCallback, useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GlassHeroCard } from '../../components/GlassHeroCard';
import { HeaderHeroDetails as Header } from '../../components/HeaderHeroDetails';
import { RootStackParamList } from '../../routes';
import { RFValue } from 'react-native-responsive-fontsize';
import GestureFlipView from 'react-native-gesture-flip-card';
import {
  Container,
  Thumbnail,
  Index,
  Title,
  RowInformation,
  Info,
  Infos,
  styles,
  Content
} from './styles';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { HandAnimation } from '../../components/HandAnimation';
import Animated, { Easing, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Tutorial } from '../../components/Tutorial';

type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetails'>;


export function HeroDetails({ navigation, route }: Props) {
  const { hero, index } = route.params;
  const [isTutorialEnd, setIsEndTutorialEnd] = useState(false);
  const [isCloseTutorial, setIsCloseTutorial] = useState(false);
  const viewRef = useRef(null);
  const hasImage = hero.thumbnail.path.includes('image_not_available');
  const { height } = useWindowDimensions();
  const animation = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animation.value,
        [0, 100],
        [1, 0]
      )
    }
  });

  const closeTutorial = () => {
    setIsCloseTutorial(true);
    animation.value =  withTiming(
      100,
      { 
        duration: 2500, 
        easing: Easing.bezier(.42,0,.58,1) 
      },
      () => {
        'worklet'
        runOnJS(setIsEndTutorialEnd)(true);
      }
    );
  }

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
      {!isTutorialEnd && <Animated.View style={[animationStyle, styles.blackView]} />}
      {!isTutorialEnd && <Tutorial isClose={isCloseTutorial} onPress={closeTutorial} /> }
      <Header />
      <Content>
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
      </Content>
      {!isTutorialEnd && <HandAnimation isClose={isCloseTutorial} />}
    </Container>
  );
}