import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IPlace } from "./place";

export type RootStackParams = {
  AllPlaces: undefined;
  AddPlace?: {
    pickedLat: number;
    pickedLng: number;
  };
  Map: { initialLat: number; initialLng: number };
  PlaceDetails?: { placeId: number };
};

export type RootStackParamListRoute = NativeStackScreenProps<
  RootStackParams,
  "AllPlaces"
>;
export type RootRouteProps = RouteProp<RootStackParams, "AllPlaces">;

export type RouteProps = RouteProp<RootStackParams, "AddPlace">;

export type PlaceDetailsRouteProps = RouteProp<RootStackParams, "PlaceDetails">;

export type MapRouteProps = RouteProp<RootStackParams, "Map">;
