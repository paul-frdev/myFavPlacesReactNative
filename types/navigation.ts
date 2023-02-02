import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
};

export type RootStackParamListRoute = NativeStackScreenProps<
  RootStackParamList,
  "AllPlaces"
>;
