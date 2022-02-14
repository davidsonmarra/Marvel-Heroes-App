import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { 
  FlatList, 
  FlatListProps, 
  Keyboard, 
  ListRenderItemInfo, 
  Pressable
} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, { 
  Easing, 
  useAnimatedScrollHandler, 
  useSharedValue, 
  withDelay, 
  withTiming 
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { HeroCard } from '../../components/HeroCard';
import { ListFooter } from '../../components/ListFooter';
import { HeroDTO } from '../../DTOs/HeroDTO';
import { RootStackParamList } from '../../routes';
import { IRootState } from '../../store';
import { fetchHeroes } from '../../store/actions/heroesActions';
import {
  Container
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Heroes'>;

const List = Animated.createAnimatedComponent(FlatList as new (props: FlatListProps<HeroDTO>
  ) => FlatList<HeroDTO>);

export function Heroes({}: Props) {
  const dispatch = useDispatch();
  const {
    heroes,
    loading_fetch_heroes
  } = useSelector(({ heroesReducer }: IRootState) => heroesReducer);
  const [offset, setOffset] = useState(30);
  const [search, setSearch] = useState('');

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

  return (
    <Container>
      <Header
        setSearch={setSearch}
        search={search}
        scrollY={scrollY}
      />
      <List
        data={heroes}
        keyExtractor={(item: HeroDTO) => `${item.id}`}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="none"
        refreshing={loading_fetch_heroes}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }: ListRenderItemInfo<HeroDTO>) => (
          <HeroCard data={item} index={index} />
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