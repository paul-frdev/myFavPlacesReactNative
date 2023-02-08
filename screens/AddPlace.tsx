import { StyleSheet } from "react-native";
import React from "react";
import PlaceForm from "components/places/PlaceForm";
import { IPlace } from "types/place";
import { useNavigation } from "@react-navigation/native";
import {
  RootRouteProps,
  RootStackParamListRoute,
  RootStackParams,
} from "types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const AddPlace = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const createPlaceHandler = (place: IPlace) => {
    navigate("AllPlaces", { place });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
