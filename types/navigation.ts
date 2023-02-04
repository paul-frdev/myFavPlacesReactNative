import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
  Map: undefined;
};

export type RootStackParamListRoute = NativeStackScreenProps<
  RootStackParamList,
  "AllPlaces"
>;

export type MapStackParamListRoute = NativeStackScreenProps<
  RootStackParamList,
  "Map"
>;
