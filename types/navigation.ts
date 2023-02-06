import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParams = {
  AllPlaces: undefined;
  AddPlace?: {
    pickedLat: number;
    pickedLng: number;
  };
  Map: undefined;
};

export type RootStackParamListRoute = NativeStackScreenProps<
  RootStackParams,
  "AllPlaces"
>;

export type RouteProps = RouteProp<RootStackParams, "AddPlace">;
