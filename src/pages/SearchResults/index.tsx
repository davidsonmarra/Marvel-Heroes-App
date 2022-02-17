import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useCallback } from 'react';
import { Keyboard } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderHeroes as Header} from '../../components/HeaderHeroes';
import { HeroBigCard } from '../../components/HeroBigCard';
import { ListFooter } from '../../components/ListFooter';
import { HeroDTO } from '../../DTOs/HeroDTO';
import { RootStackParamList } from '../../routes';
import { IRootState } from '../../store';
import { fetchSearchHeroes, reset } from '../../store/actions/heroesSearchActions';
import {
  Container, List
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetails'>;

export function SearchResults({ navigation }: Props) {
  const scrollY = useSharedValue(0);
  const [offset, setOffset] = useState(10);
  const dispatch = useDispatch();
  const {
    search,
    heroes_search,
    loading_fetch_heroes_search
  } = useSelector(({ heroesSearchReducer }: IRootState) => heroesSearchReducer);
  const [value, setValue] = useState(search);

  const handleFetchHeroes = useCallback((value: string) => {
    if(search !== value) {
      setOffset(10);
      dispatch(reset());
      dispatch(fetchSearchHeroes(value, 0));
    }
  }, [value]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onEndReached = () => {
    setOffset(offset + 10);
    dispatch(fetchSearchHeroes(search, offset));
  };


  const goToHeroDetails = useCallback((hero: HeroDTO, index: number) => {
    navigation.navigate('HeroDetails', { hero, index });
  }, []);

  return (
    <Container>
      <Header
        setSearch={setValue}
        search={value}
        scrollY={scrollY}
        handleSearchHero={handleFetchHeroes}
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
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <ListFooter isLoading={loading_fetch_heroes_search} />
        )}
        onTouchStart={Keyboard.dismiss}
      />
    </Container>
  );
}