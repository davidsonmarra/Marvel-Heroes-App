import React, { 
  useCallback, 
  useEffect, 
  useState 
} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { 
  BackHandler,
  FlatList, 
  FlatListProps, 
  Keyboard, 
  ListRenderItemInfo
} from 'react-native';
import Animated, { 
  Easing, 
  useAnimatedScrollHandler, 
  useSharedValue, 
  withDelay, 
  withTiming 
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderHeroes as Header } from '../../components/HeaderHeroes';
import { HeroCard } from '../../components/HeroCard';
import { ListFooter } from '../../components/ListFooter';
import { HeroDTO } from '../../DTOs/HeroDTO';
import { RootStackParamList } from '../../routes';
import { IRootState } from '../../store';
import { fetchHeroes } from '../../store/actions/heroesActions';
import { fetchSearchHeroes, reset } from '../../store/actions/heroesSearchActions';
import { FormData } from '../SearchResults';
import {
  Container
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Heroes'>;

const List = Animated.createAnimatedComponent(FlatList as new (props: FlatListProps<HeroDTO>
  ) => FlatList<HeroDTO>);

export function Heroes({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const {
    heroes,
    loading_fetch_heroes
  } = useSelector(({ heroesReducer }: IRootState) => heroesReducer);
  const {
    search,
    loading_fetch_heroes_search
  } = useSelector(({ heroesSearchReducer }: IRootState) => heroesSearchReducer);

  const [offset, setOffset] = useState(30);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    if(event.contentOffset.y <= 0) 
      scrollY.value = withDelay(250, withTiming(
        0,
        { 
          duration: 1000,
          easing: Easing.bezier(.42,0,.58,1)
        }
      ));
    else 
      scrollY.value = withTiming(
        100,
        { 
          duration: 1000, 
          easing: Easing.bezier(.42,0,.58,1) 
        }
      );
  });

  const onEndReached = () => {
    setOffset(offset + 30);
    dispatch(fetchHeroes(offset));
  };

  const handleSearchHero = ({ searchHero }: FormData) => {
    dispatch(reset());
    dispatch(fetchSearchHeroes(searchHero, 0));
  };

  const goToHeroDetails = useCallback((hero: HeroDTO, index: number) => {
    navigation.navigate('HeroDetails', { hero, index });
  }, []);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(route.name !== 'Heroes')
          return false; 
        else 
          return true;
      });
    }, [route])
  );

  useEffect(() => {
    !loading_fetch_heroes_search && !!search && (
      navigation.navigate('SearchResults')
    );
  }, [loading_fetch_heroes_search]);

  return (
    <Container>
      <Header
        scrollY={scrollY}
        handleSearchHero={handleSearchHero}
        isLoading={loading_fetch_heroes_search}
      />
      <List
        data={heroes}
        keyExtractor={(item: HeroDTO) => `${item.id}`}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="none"
        refreshing={loading_fetch_heroes}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }: ListRenderItemInfo<HeroDTO>) => (
          <HeroCard
            data={item} 
            index={index}
            hasImage={item.thumbnail.path.includes('image_not_available')}
            handlePressHero={goToHeroDetails}
          />
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <ListFooter isLoading={loading_fetch_heroes} />
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        numColumns={3}
        contentContainerStyle={{
          paddingHorizontal: RFValue(8),
          paddingVertical: RFValue(12)
        }}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        onTouchStart={Keyboard.dismiss}
      />
    </Container>
  );
}