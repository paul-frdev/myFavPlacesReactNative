import { StyleSheet } from "react-native";
import React from "react";
import PlaceForm from "components/places/PlaceForm";
import { IPlace } from "types/place";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { insertPlace } from "utils/database";

const AddPlace = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const createPlaceHandler = async (place: IPlace) => {
    await insertPlace(place);
    navigate("AllPlaces");
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
