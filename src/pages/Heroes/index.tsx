import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { HeroCard } from '../../components/HeroCard';
import { ListFooter } from '../../components/ListFooter';
import { RootStackParamList } from '../../routes';
import { IRootState } from '../../store';
import { fetchHeroes } from '../../store/actions/heroesActions';
import {
  Container,
  List
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Heroes'>;

export function Heroes({}: Props) {
  const dispatch = useDispatch();
  const {
    heroes,
    loading_fetch_heroes
  } = useSelector(({ heroesReducer }: IRootState) => heroesReducer);
  const [offset, setOffset] = useState(30);
  const [search, setSearch] = useState('');

  const onEndReached = () => {
    setOffset(offset + 30);
    dispatch(fetchHeroes(offset));
  };

  return (
    <Container>
      <Header setSearch={setSearch} search={search} />
      <List
        data={heroes}
        keyExtractor={item => `${item.id}`}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="none"
        refreshing={loading_fetch_heroes}
        numColumns={3}
        renderItem={({ item, index }) => (
          <HeroCard data={item} index={index} />
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <ListFooter isLoading={loading_fetch_heroes} />
        )}
      />
    </Container>
  );
}