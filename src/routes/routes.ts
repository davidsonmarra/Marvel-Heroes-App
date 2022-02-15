import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from ".";
import { Home } from "../pages/Home";
import { Heroes } from "../pages/Heroes";
import { HeroDetails } from "../pages/HeroDetails";

interface Props {
  screenName: keyof RootStackParamList;
  component: React.FC<any>;
  options?: {
    gestureEnabled: boolean;
  }
}

export const routes: Props[] = [
  {
    screenName: 'Home',
    component: Home,
    options: {
      gestureEnabled: true
    }
  },
  {
    screenName: 'Heroes',
    component: Heroes,
    options: {
      gestureEnabled: false
    }
  },
  {
    screenName: 'HeroDetails',
    component: HeroDetails,
    options: {
      gestureEnabled: true
    }
  }
]