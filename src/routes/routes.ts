import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from ".";
import { Home } from "../pages/Home";

interface Props {
  screenName: keyof RootStackParamList;
  component: React.FC<NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>>;
}

export const routes: Props[] = [
  {
    screenName: 'Home',
    component: Home
  }
]