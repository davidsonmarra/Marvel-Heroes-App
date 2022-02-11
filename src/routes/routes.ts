import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from ".";
import { Home } from "../pages/Home";
import { Heroes } from "../pages/Heroes";

interface Props {
  screenName: keyof RootStackParamList;
  component: React.FC<any>;
}

export const routes: Props[] = [
  {
    screenName: 'Home',
    component: Home
  },
  {
    screenName: 'Heroes',
    component: Heroes
  }
]