import React from 'react';
import { routes } from './routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeroDTO } from '../DTOs/HeroDTO';

export type RootStackParamList = {
  Home: undefined;
  Heroes: undefined;
  SearchResults: undefined;
  HeroDetails: { hero: HeroDTO, index: number };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Home'
    >
      {
        routes.map(routeObject => (
          <Screen
            key={routeObject.screenName}
            name={routeObject.screenName}
            component={routeObject.component}
            options={routeObject.options}
          />
        ))
      }
    </Navigator>
  )
}