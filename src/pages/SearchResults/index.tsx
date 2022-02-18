import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useCallback } from 'react';
import { BackHandler, Keyboard } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderHeroes as Header} from '../../components/HeaderHeroes';
import { HeroBigCard } from '../../components/HeroBigCard';
import { ListFooter } from '../../components/ListFooter';
import { NotFoundAnimation } from '../../components/NotFoundAnimation';
import { HeroDTO } from '../../DTOs/HeroDTO';
import { RootStackParamList } from '../../routes';
import { IRootState } from '../../store';
import { fetchSearchHeroes, reset } from '../../store/actions/heroesSearchActions';
import {
  Container, 
  List,
  Empty
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetails'>;

export interface FormData {
  searchHero: string;
}

export function SearchResults({ navigation, route }: Props) {
  const scrollY = useSharedValue(0);
  const [offset, setOffset] = useState(10);
  const dispatch = useDispatch();
  const {
    search,
    isEnd,
    heroes_search,
    loading_fetch_heroes_search
  } = useSelector(({ heroesSearchReducer }: IRootState) => heroesSearchReducer);

  const handleSearchHero = (({ searchHero }: FormData) => {
    if(search !== searchHero) {
      setOffset(10);
      dispatch(reset());
      dispatch(fetchSearchHeroes(searchHero, 0));
    }
  });

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onEndReached = () => {
    if(!isEnd) {
      setOffset(offset + 10);
      dispatch(fetchSearchHeroes(search, offset));
    }
  };

  const goToHeroDetails = useCallback((hero: HeroDTO, index: number) => {
    navigation.navigate('HeroDetails', { hero, index });
  }, []);

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
      <Header
        scrollY={scrollY}
        handleSearchHero={handleSearchHero}
        isLoading={loading_fetch_heroes_search && !offset}
        handleGoBack={handleGoBack}
      />
      <List
        data={heroes_search}
        keyExtractor={(item) => `${item.id}`}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="none"
        refreshing={loading_fetch_heroes_search}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <HeroBigCard
            data={item} 
            index={index}
            hasImage={item.thumbnail.path.includes('image_not_available')}
            handlePressHero={goToHeroDetails}
          />
        )}
        ListEmptyComponent={() => (
          <Empty>
            {
              loading_fetch_heroes_search ? (
                <ListFooter isLoading={loading_fetch_heroes_search} />
              ) : (
                <NotFoundAnimation /> 
              )   
            }
          </Empty>
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <ListFooter isLoading={loading_fetch_heroes_search && !!heroes_search?.length} />
        )}
        onTouchStart={Keyboard.dismiss}
      />
    </Container>
  );
}