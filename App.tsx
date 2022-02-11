import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if(!fontsLoaded) 
    return <AppLoading />

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
              <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
              />
              <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
